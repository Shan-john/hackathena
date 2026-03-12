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


# ─── Broadcast to all connected clients ───
async def _broadcast(message: str):
    with _clients_lock:
        targets = set(_clients)
    if targets:
        await asyncio.gather(
            *[client.send(message) for client in targets],
            return_exceptions=True
        )


# ─── WebSocket connection handler ───
async def ws_handler(websocket):
    print(f"[WS] Client connected: {websocket.remote_address}")
    with _clients_lock:
        _clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        with _clients_lock:
            _clients.discard(websocket)
        print(f"[WS] Client disconnected")


# ─── Accelerometer callback ───
def on_reading_changed(sender, args):
    global last_x, last_trigger

    reading = args.reading
    x = reading.acceleration_x

    delta_x = x - last_x
    last_x  = x

    now = time.time()

    if abs(delta_x) > THRESHOLD and (now - last_trigger) > COOLDOWN:
        direction = "RIGHT_TAP" if delta_x > 0 else "LEFT_TAP"
        print(f"[TAP] {direction}  (delta: {delta_x:+.3f})")

        # Fire-and-forget: schedule the broadcast on the event loop
        try:
            loop = asyncio.get_event_loop()
            if loop.is_running():
                asyncio.run_coroutine_threadsafe(
                    _broadcast(json.dumps({"event": direction})),
                    loop
                )
        except RuntimeError:
            pass  # Loop not available yet

        last_trigger = now


# ─── Main entry point ───
async def main():
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