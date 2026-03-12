"""
Hand Gesture Recognition + WebSocket Server
────────────────────────────────────────────
Uses MediaPipe Gesture Recognizer to detect hand gestures from the webcam
and broadcasts LEFT_CLICK / RIGHT_CLICK events over WebSocket so the game
frontend can receive them in real time.

Run this while the game is open:
    python gesture_main.py

The frontend connects to ws://localhost:8766
Messages sent:
  { "event": "LEFT_CLICK" }   – on Closed_Fist gesture
  { "event": "RIGHT_CLICK" }  – on Victory (✌️) gesture
  { "event": "GESTURE:<name>" } – for any other recognized gesture
"""

import asyncio
import json
import time
import threading
import os
import urllib.request

import cv2
import mediapipe as mp
import websockets

from mediapipe.tasks.python import BaseOptions
from mediapipe.tasks.python.vision import (
    GestureRecognizer,
    GestureRecognizerOptions,
    GestureRecognizerResult,
    RunningMode,
)

# ─── Config ───────────────────────────────────────────
CLICK_GESTURES = {
    "Closed_Fist": "LEFT_CLICK",
    "Victory":     "RIGHT_CLICK",
}
COOLDOWN       = 0.6      # seconds between accepted clicks (debounce)
WS_PORT        = 8766     # WebSocket port (separate from tap sensor on 8765)
CAMERA_INDEX   = 0        # default webcam
MODEL_FILENAME = "gesture_recognizer.task"
MODEL_URL      = (
    "https://storage.googleapis.com/mediapipe-models/"
    "gesture_recognizer/gesture_recognizer/float16/latest/"
    "gesture_recognizer.task"
)
# ──────────────────────────────────────────────────────

# Connected WebSocket clients
_clients: set = set()
_clients_lock = threading.Lock()

# Reference to the main asyncio event loop (set in main())
_main_loop: asyncio.AbstractEventLoop = None

# Debounce state
_last_trigger: float = 0.0
_last_gesture: str = ""


# ─── Ensure model file exists ───
def _ensure_model():
    """Download the MediaPipe gesture recognizer model if not present."""
    model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), MODEL_FILENAME)
    if os.path.isfile(model_path):
        return model_path
    print(f"[Model] Downloading {MODEL_FILENAME} …")
    urllib.request.urlretrieve(MODEL_URL, model_path)
    print(f"[Model] Saved to {model_path}")
    return model_path


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


# ─── MediaPipe result callback (fires on a background thread) ───
def _on_gesture_result(
    result: GestureRecognizerResult,
    output_image: mp.Image,
    timestamp_ms: int,
):
    global _last_trigger, _last_gesture, _main_loop

    if not result.gestures:
        return

    # Take the top gesture from the first detected hand
    gesture = result.gestures[0][0]
    name = gesture.category_name
    score = gesture.score

    if name == "None" or score < 0.60:
        return

    now = time.time()

    # Map to click event or general gesture event
    event_name = CLICK_GESTURES.get(name, f"GESTURE:{name}")

    # For click gestures, apply cooldown / debounce
    if name in CLICK_GESTURES:
        if (now - _last_trigger) < COOLDOWN:
            return
        _last_trigger = now
        _last_gesture = name
        print(f"[Gesture] {event_name}  ({name}, score: {score:.2f})")
    else:
        # Non-click gestures: only log if changed
        if name == _last_gesture and (now - _last_trigger) < 1.0:
            return
        _last_trigger = now
        _last_gesture = name
        print(f"[Gesture] {event_name}  (score: {score:.2f})")

    msg = json.dumps({"event": event_name})

    # Schedule broadcast on the main event loop (thread-safe)
    if _main_loop is not None and _main_loop.is_running():
        asyncio.run_coroutine_threadsafe(_broadcast(msg), _main_loop)


# ─── Camera + MediaPipe loop (runs in a dedicated thread) ───
def _camera_loop(model_path: str):
    """Continuously read webcam frames and feed them to the gesture recognizer."""

    options = GestureRecognizerOptions(
        base_options=BaseOptions(model_asset_path=model_path),
        running_mode=RunningMode.LIVE_STREAM,
        num_hands=1,
        min_hand_detection_confidence=0.5,
        min_hand_presence_confidence=0.5,
        min_tracking_confidence=0.5,
        result_callback=_on_gesture_result,
    )

    recognizer = GestureRecognizer.create_from_options(options)
    cap = cv2.VideoCapture(CAMERA_INDEX)

    if not cap.isOpened():
        print("[ERROR] Could not open webcam.")
        return

    print("[Camera] Webcam opened. Press 'q' in the preview window to quit.")

    frame_timestamp = 0

    try:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            frame_timestamp += 33  # ~30 fps worth of timestamps
            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)

            recognizer.recognize_async(mp_image, frame_timestamp)

            # Show a debug preview (optional — press 'q' to close it)
            cv2.imshow("Gesture Recognition (press q to close preview)", frame)
            if cv2.waitKey(1) & 0xFF == ord("q"):
                break
    finally:
        cap.release()
        cv2.destroyAllWindows()
        recognizer.close()
        print("[Camera] Stopped.")


# ─── Main entry point ───
async def main():
    global _main_loop
    _main_loop = asyncio.get_running_loop()

    model_path = _ensure_model()

    # Start camera + MediaPipe in a background thread
    cam_thread = threading.Thread(target=_camera_loop, args=(model_path,), daemon=True)
    cam_thread.start()

    print(f"[WS] WebSocket server listening on ws://localhost:{WS_PORT}")
    print("[WS] Waiting for frontend connection...")

    async with websockets.serve(ws_handler, "localhost", WS_PORT):
        try:
            await asyncio.Future()  # Run forever
        finally:
            print("\n[Gesture] Server stopped.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nExiting...")
