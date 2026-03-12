"""
Accelerometer Tap Detection + Eye Tracking + WebSocket Server
──────────────────────────────────────────────────────────────
Runs two input sensors simultaneously:
  1. Windows Accelerometer → detects LEFT_TAP / RIGHT_TAP
  2. Webcam Eye Tracking   → detects BLINK / DOUBLE_BLINK / GAZE

All events are broadcast over WebSocket on ws://localhost:8765

Run:
    python main.py
"""

import asyncio
import json
import time
import threading
import websockets
from winsdk.windows.devices.sensors import Accelerometer
from eye_tracking import start_eye_tracking

# ─── Config ───────────────────────────────────────────
TAP_THRESHOLD = 0.15    # lower = more sensitive
TAP_COOLDOWN  = 0.25    # seconds between accepted taps
WS_PORT       = 8765    # WebSocket port
# ──────────────────────────────────────────────────────

# Connected WebSocket clients
_clients: set = set()
_clients_lock = threading.Lock()

last_x       = 0.0
last_trigger = 0.0

# Main asyncio event loop reference (for thread-safe scheduling)
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

    if abs(delta_x) > TAP_THRESHOLD and (now - last_trigger) > TAP_COOLDOWN:
        direction = "LEFT_TAP" if delta_x > 0 else "RIGHT_TAP"
        print(f"[TAP] {direction}  (delta: {delta_x:+.3f})")

        msg = json.dumps({"event": direction})

        if _main_loop is not None and _main_loop.is_running():
            asyncio.run_coroutine_threadsafe(_broadcast(msg), _main_loop)

        last_trigger = now


# ─── Main entry point ───
async def main():
    global _main_loop
    _main_loop = asyncio.get_running_loop()

    # 1. Start Accelerometer
    accel = Accelerometer.get_default()
    if accel is None:
        print("[WARN] No accelerometer found — tap detection disabled.")
        token = None
    else:
        accel.report_interval = accel.minimum_report_interval
        token = accel.add_reading_changed(on_reading_changed)
        print(f"[Accel] ✅ Started — interval: {accel.report_interval}ms")

    # 2. Start Eye Tracking (background thread)
    start_eye_tracking(_broadcast, _main_loop)

    # 3. Start WebSocket Server
    print(f"[WS] WebSocket server listening on ws://localhost:{WS_PORT}")
    print("[WS] Waiting for frontend connection...")

    async with websockets.serve(ws_handler, "localhost", WS_PORT):
        try:
            await asyncio.Future()  # Run forever
        finally:
            if accel and token:
                accel.remove_reading_changed(token)
            print("\n[Server] Stopped.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nExiting...")