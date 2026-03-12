"""
Accelerometer Tap Detection + WebSocket Server
──────────────────────────────────────────────
Reads tap events from the Windows accelerometer and broadcasts them over
WebSocket so the game frontend can receive them in real time.

Run this while the game is open:
    python main.py

The frontend connects to ws://localhost:8765
Messages sent:  { "event": "LEFT_TAP" }  or  { "event": "RIGHT_TAP" }
"""

import asyncio
import json
import time
import threading
import websockets
from winsdk.windows.devices.sensors import Accelerometer

# ─── Config ───────────────────────────────────────────
THRESHOLD = 0.15    # lower = more sensitive (detects lighter taps)
COOLDOWN  = 0.25    # seconds between accepted taps (debounce)
WS_PORT   = 8765    # WebSocket port the frontend connects to
# ──────────────────────────────────────────────────────

# Connected WebSocket clients
_clients: set = set()
_clients_lock = threading.Lock()

last_x       = 0.0
last_trigger = 0.0

# We store a reference to the main asyncio event loop so the
# accelerometer callback (which fires on a WinRT thread) can
# safely schedule coroutines on it.
_main_loop: asyncio.AbstractEventLoop = None


# ─── Broadcast to all connected clients ───
async def _broadcast(message: str):
    with _clients_lock:
        targets = list(_clients)
    for client in targets:
        try:
            await client.send(message)
        except Exception:
            pass


# ─── WebSocket connection handler ───
async def ws_handler(websocket):
    addr = websocket.remote_address
    print(f"[WS] Client connected: {addr}")
    with _clients_lock:
        _clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        with _clients_lock:
            _clients.discard(websocket)
        print("[WS] Client disconnected")


# ─── Accelerometer callback (fires on a WinRT thread) ───
def on_reading_changed(sender, args):
    global last_x, last_trigger, _main_loop

    reading = args.reading
    x = reading.acceleration_x

    delta_x = x - last_x
    last_x  = x

    now = time.time()

    if abs(delta_x) > THRESHOLD and (now - last_trigger) > COOLDOWN:
        direction = "RIGHT_TAP" if delta_x > 0 else "LEFT_TAP"
        print(f"[TAP] {direction}  (delta: {delta_x:+.3f})")

        msg = json.dumps({"event": direction})

        # Schedule broadcast on the main event loop (thread-safe)
        if _main_loop is not None and _main_loop.is_running():
            asyncio.run_coroutine_threadsafe(_broadcast(msg), _main_loop)

        last_trigger = now


# ─── Main entry point ───
async def main():
    global _main_loop
    _main_loop = asyncio.get_running_loop()

    accel = Accelerometer.get_default()

    if accel is None:
        print("[ERROR] No accelerometer found on this device.")
        return

    # Max sensitivity
    accel.report_interval = accel.minimum_report_interval
    print(f"[Accel] Started — interval: {accel.report_interval}ms, threshold: {THRESHOLD}")

    # Register event-driven tap callback
    token = accel.add_reading_changed(on_reading_changed)
    print(f"[WS] WebSocket server listening on ws://localhost:{WS_PORT}")
    print("[WS] Waiting for frontend connection...")

    async with websockets.serve(ws_handler, "localhost", WS_PORT):
        try:
            await asyncio.Future()  # Run forever
        finally:
            accel.remove_reading_changed(token)
            print("\n[Accel] Stopped.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nExiting...")