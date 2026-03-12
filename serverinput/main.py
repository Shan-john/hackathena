"""
Accessibility Input Server
══════════════════════════
Runs two input sensors on a single WebSocket (ws://localhost:8765):

  1. Accelerometer (always on)  → LEFT_TAP / RIGHT_TAP
  2. Eye Tracking  (on demand)  → BLINK / DOUBLE_BLINK / GAZE

Hand gesture control is handled entirely in the browser (GestureCursor component).
The frontend sends {"set_mode": "eye"} to start eye tracking, or any other mode
to release the webcam so the browser can use it for gesture control.

Run:
    python main.py
"""

import asyncio
import json
import time
import threading
import os

import cv2
import mediapipe as mp
import websockets

from winsdk.windows.devices.sensors import Accelerometer

from mediapipe.tasks import python as mp_python
from mediapipe.tasks.python import vision

# ══════════════════════════════════════════════════════
#  CONFIG
# ══════════════════════════════════════════════════════

# Accelerometer
TAP_THRESHOLD = 0.15
TAP_COOLDOWN  = 0.25

# WebSocket
WS_PORT = 8765

# Eye tracking (EAR)
EAR_THRESHOLD   = 0.33
CONSEC_FRAMES   = 1
DOUBLE_BLINK_MS = 600
BLINK_COOLDOWN  = 100

LEFT_EYE   = [33, 160, 158, 133, 153, 144]
RIGHT_EYE  = [362, 385, 387, 263, 373, 380]
LEFT_IRIS  = 468
RIGHT_IRIS = 473
SENSITIVITY_X = 2.5
SENSITIVITY_Y = 2.5
SMOOTH = 0.3

CAMERA_INDEX = 0
FACE_MODEL_FILE = "face_landmarker.task"

# ══════════════════════════════════════════════════════
#  GLOBALS
# ══════════════════════════════════════════════════════
_clients: set = set()
_clients_lock = threading.Lock()
_main_loop: asyncio.AbstractEventLoop = None

# Accel state
last_x       = 0.0
last_trigger = 0.0

# Active mode: "eye" or "gesture" or "tap" or None
_active_mode = None
_mode_lock = threading.Lock()


# ══════════════════════════════════════════════════════
#  HELPERS
# ══════════════════════════════════════════════════════

def _dist(p1, p2):
    return ((p1.x - p2.x)**2 + (p1.y - p2.y)**2 + (p1.z - p2.z)**2) ** 0.5

def _compute_ear(landmarks, eye_indices):
    p1 = landmarks[eye_indices[0]]
    p2 = landmarks[eye_indices[1]]
    p3 = landmarks[eye_indices[2]]
    p4 = landmarks[eye_indices[3]]
    p5 = landmarks[eye_indices[4]]
    p6 = landmarks[eye_indices[5]]
    A = _dist(p2, p6)
    B = _dist(p3, p5)
    C = _dist(p1, p4)
    return (A + B) / (2.0 * C)


async def _broadcast(message: str):
    with _clients_lock:
        targets = list(_clients)
    for client in targets:
        try:
            await client.send(message)
        except Exception:
            pass


def _send(msg_str):
    """Thread-safe: schedule broadcast on the main event loop."""
    if _main_loop is not None and _main_loop.is_running():
        asyncio.run_coroutine_threadsafe(_broadcast(msg_str), _main_loop)


async def ws_handler(websocket):
    """Handle WebSocket connections. Listens for mode-switch messages."""
    global _active_mode
    addr = websocket.remote_address
    print(f"[WS] Client connected: {addr}")
    with _clients_lock:
        _clients.add(websocket)
    try:
        async for message in websocket:
            try:
                data = json.loads(message)
                if "set_mode" in data:
                    new_mode = data["set_mode"]
                    with _mode_lock:
                        _active_mode = new_mode
                    print(f"[Mode] Switched to: {new_mode}")
            except Exception:
                pass
    except websockets.ConnectionClosed:
        pass
    finally:
        with _clients_lock:
            _clients.discard(websocket)
        print("[WS] Client disconnected")


# ══════════════════════════════════════════════════════
#  ACCELEROMETER (always active)
# ══════════════════════════════════════════════════════

def on_reading_changed(sender, args):
    global last_x, last_trigger

    reading = args.reading
    x = reading.acceleration_x

    delta_x = x - last_x
    last_x  = x
    now = time.time()

    if abs(delta_x) > TAP_THRESHOLD and (now - last_trigger) > TAP_COOLDOWN:
        direction = "LEFT_TAP" if delta_x > 0 else "RIGHT_TAP"
        print(f"[TAP] {direction}  (delta: {delta_x:+.3f})")
        _send(json.dumps({"event": direction}))
        last_trigger = now


# ══════════════════════════════════════════════════════
#  EYE TRACKING CAMERA LOOP (on demand)
# ══════════════════════════════════════════════════════

def _camera_loop(face_model_path: str):
    """
    Manages webcam for eye tracking only.
    Opens webcam when mode is "eye", releases it for all other modes
    so the browser can use the camera for gesture control.
    """
    global _active_mode

    cap = None
    face_detector = None
    current_mode = None

    # Eye tracking state
    closed_frames   = 0
    last_blink_time = 0.0
    pending_single  = False
    pending_timer   = None
    last_gaze_x     = 0.5
    last_gaze_y     = 0.5
    start_time_ms   = int(time.time() * 1000)

    print("[Camera] Ready (webcam not opened — waiting for mode selection)")

    def _trigger_single():
        nonlocal pending_single
        if pending_single:
            pending_single = False
            _send(json.dumps({"event": "BLINK"}))
            print("[Eye] 👁️ Single Blink")

    try:
        while True:
            with _mode_lock:
                wanted = _active_mode

            # ── Mode changed ──
            if wanted != current_mode:
                if wanted == "eye":
                    # Open webcam + load FaceLandmarker
                    if cap is None or not cap.isOpened():
                        cap = cv2.VideoCapture(CAMERA_INDEX)
                        time.sleep(0.5)  # give camera time to init
                        if cap.isOpened():
                            print("[Camera] ✅ Webcam opened for eye tracking")
                        else:
                            print("[Camera] ERROR: Could not open webcam")

                    if face_detector is None and os.path.isfile(face_model_path):
                        base_opts = mp_python.BaseOptions(model_asset_path=face_model_path)
                        face_opts = vision.FaceLandmarkerOptions(
                            base_options=base_opts,
                            running_mode=vision.RunningMode.VIDEO,
                            num_faces=1,
                            min_face_detection_confidence=0.5,
                            min_face_presence_confidence=0.5,
                            min_tracking_confidence=0.5,
                        )
                        face_detector = vision.FaceLandmarker.create_from_options(face_opts)
                        print("[Eye] ✅ FaceLandmarker loaded")
                        start_time_ms = int(time.time() * 1000)

                else:
                    # Any non-eye mode → release webcam so browser can use it
                    if face_detector:
                        try:
                            face_detector.close()
                        except:
                            pass
                        face_detector = None
                        print("[Eye] Unloaded FaceLandmarker")

                    if cap is not None and cap.isOpened():
                        cap.release()
                        cap = None
                        print(f"[Camera] Released webcam ({wanted} mode)")

                    # Reset blink state
                    closed_frames = 0
                    last_blink_time = 0.0
                    pending_single = False

                current_mode = wanted

            # ── Not in eye mode → sleep ──
            if current_mode != "eye" or cap is None or face_detector is None:
                time.sleep(0.1)
                continue

            # ── Read frame ──
            ret, frame = cap.read()
            if not ret:
                time.sleep(0.01)
                continue

            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
            timestamp_ms = int(time.time() * 1000) - start_time_ms

            try:
                results = face_detector.detect_for_video(mp_image, timestamp_ms)
            except Exception:
                time.sleep(0.01)
                continue

            if not results or not results.face_landmarks:
                time.sleep(0.01)
                continue

            lm = results.face_landmarks[0]

            # ── EAR Blink Detection ──
            left_ear  = _compute_ear(lm, LEFT_EYE)
            right_ear = _compute_ear(lm, RIGHT_EYE)
            ear = (left_ear + right_ear) / 2.0
            now_ms = time.time() * 1000

            if ear < EAR_THRESHOLD:
                closed_frames += 1
            else:
                if closed_frames >= CONSEC_FRAMES and (now_ms - last_blink_time) > BLINK_COOLDOWN:
                    last_blink_time = now_ms
                    if pending_single:
                        pending_single = False
                        if pending_timer:
                            pending_timer.cancel()
                        _send(json.dumps({"event": "DOUBLE_BLINK"}))
                        print("[Eye] 👀👀 Double Blink")
                    else:
                        pending_single = True
                        pending_timer = threading.Timer(
                            DOUBLE_BLINK_MS / 1000.0, _trigger_single
                        )
                        pending_timer.start()
                closed_frames = 0

            # ── Gaze Tracking ──
            lx = lm[LEFT_IRIS].x
            rx = lm[RIGHT_IRIS].x
            ly = lm[LEFT_IRIS].y
            ry = lm[RIGHT_IRIS].y

            raw_x = 1 - (lx + rx) / 2
            raw_y = (ly + ry) / 2

            target_x = max(0.0, min(1.0, 0.5 + (raw_x - 0.5) * SENSITIVITY_X))
            target_y = max(0.0, min(1.0, 0.5 + (raw_y - 0.5) * SENSITIVITY_Y))

            last_gaze_x += (target_x - last_gaze_x) * SMOOTH
            last_gaze_y += (target_y - last_gaze_y) * SMOOTH

            _send(json.dumps({
                "event": "GAZE",
                "x": round(last_gaze_x, 4),
                "y": round(last_gaze_y, 4),
            }))

            time.sleep(0.01)

    finally:
        if face_detector:
            try:
                face_detector.close()
            except:
                pass
        if cap is not None and cap.isOpened():
            cap.release()
        print("[Camera] Stopped.")


# ══════════════════════════════════════════════════════
#  MAIN
# ══════════════════════════════════════════════════════

async def main():
    global _main_loop
    _main_loop = asyncio.get_running_loop()

    # 1. Start Accelerometer (always on)
    accel = Accelerometer.get_default()
    if accel is None:
        print("[WARN] No accelerometer found — tap detection disabled.")
        token = None
    else:
        accel.report_interval = accel.minimum_report_interval
        token = accel.add_reading_changed(on_reading_changed)
        print(f"[Accel] ✅ Started — interval: {accel.report_interval}ms")

    # 2. Prepare face model path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    face_model_path = os.path.join(script_dir, FACE_MODEL_FILE)

    # 3. Start camera thread (opens webcam only when eye mode is activated)
    cam_thread = threading.Thread(
        target=_camera_loop,
        args=(face_model_path,),
        daemon=True,
    )
    cam_thread.start()

    # 4. Start WebSocket Server (with retry for port conflicts)
    print(f"[WS] WebSocket server listening on ws://0.0.0.0:{WS_PORT}")
    print("[WS] Waiting for frontend connection...")

    for attempt in range(5):
        try:
            async with websockets.serve(ws_handler, "0.0.0.0", WS_PORT):
                try:
                    await asyncio.Future()
                finally:
                    if accel and token:
                        accel.remove_reading_changed(token)
                    print("\n[Server] Stopped.")
            break
        except OSError as e:
            if e.errno == 10048:
                wait = 2 * (attempt + 1)
                print(f"[WS] Port {WS_PORT} in use. Retrying in {wait}s… (attempt {attempt+1}/5)")
                await asyncio.sleep(wait)
            else:
                raise
    else:
        print(f"[WS] ERROR: Could not bind port {WS_PORT} after 5 attempts.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nExiting...")