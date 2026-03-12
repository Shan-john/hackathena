"""
Eye Tracking Module — Blink Detection + Gaze Cursor
────────────────────────────────────────────────────
Ported from: ai_eye detectiongitsomeonecode/face_liveness_detection-Anti-spoofing/blink_detection

Uses MediaPipe FaceLandmarker (Tasks Vision API) to:
  1. Track iris position → gaze cursor coordinates
  2. Detect blinks via Eye Aspect Ratio (EAR)
  3. Single blink = left click, Double blink = right click

Algorithm (from the git project's f_blink_detection.py):
  EAR = (|P2-P6| + |P3-P5|) / (2 * |P1-P4|)
  When EAR < threshold → eyes closed → count frames
  When eyes reopen after >= N closed frames → register blink
"""

import os
import json
import time
import asyncio
import threading
import cv2
import mediapipe as mp
from mediapipe.tasks import python as mp_python
from mediapipe.tasks.python import vision

# ─── EAR Config (from git project config.py) ───
EAR_THRESHOLD   = 0.33   # below this = eyes closed
CONSEC_FRAMES   = 1      # min frames closed to count as blink
DOUBLE_BLINK_MS = 600    # max gap between two blinks for double-click
BLINK_COOLDOWN  = 100    # min ms between blink events

# ─── Eye landmark indices in MediaPipe's 468-point mesh ───
# Matches the 6-point EAR formula from the git project
LEFT_EYE  = [33, 160, 158, 133, 153, 144]
RIGHT_EYE = [362, 385, 387, 263, 373, 380]
LEFT_IRIS  = 468   # center of left iris
RIGHT_IRIS = 473   # center of right iris

# ─── Gaze sensitivity ───
SENSITIVITY_X = 2.5
SENSITIVITY_Y = 2.5
SMOOTH = 0.3


def _dist(p1, p2):
    """Euclidean distance between two 3D landmarks."""
    return ((p1.x - p2.x)**2 + (p1.y - p2.y)**2 + (p1.z - p2.z)**2) ** 0.5


def _compute_ear(landmarks, eye_indices):
    """
    Eye Aspect Ratio — ported from git project's eye_aspect_ratio().
    
    Original Python (scipy):
        A = dist.euclidean(eye[1], eye[5])
        B = dist.euclidean(eye[2], eye[4])
        C = dist.euclidean(eye[0], eye[3])
        ear = (A + B) / (2.0 * C)
    """
    p1 = landmarks[eye_indices[0]]
    p2 = landmarks[eye_indices[1]]
    p3 = landmarks[eye_indices[2]]
    p4 = landmarks[eye_indices[3]]
    p5 = landmarks[eye_indices[4]]
    p6 = landmarks[eye_indices[5]]

    A = _dist(p2, p6)  # vertical 1
    B = _dist(p3, p5)  # vertical 2
    C = _dist(p1, p4)  # horizontal
    return (A + B) / (2.0 * C)


def start_eye_tracking(broadcast_fn, event_loop):
    """
    Start eye tracking in a background thread.
    
    Args:
        broadcast_fn: async function to broadcast a JSON string to all WS clients
        event_loop:   the main asyncio event loop (for thread-safe scheduling)
    """
    thread = threading.Thread(
        target=_eye_tracking_loop,
        args=(broadcast_fn, event_loop),
        daemon=True
    )
    thread.start()
    return thread


def _eye_tracking_loop(broadcast_fn, loop):
    """Background thread: webcam → MediaPipe → EAR blinks + iris gaze."""
    print("[Eye] Starting webcam (MediaPipe Tasks Vision)...")

    # ─── Open webcam ───
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("[Eye] ERROR: Could not open webcam!")
        return

    # ─── Load MediaPipe FaceLandmarker model ───
    model_path = os.path.join(os.path.dirname(__file__), 'face_landmarker.task')
    if not os.path.exists(model_path):
        print(f"[Eye] ERROR: Model file not found: {model_path}")
        print("[Eye] Download it from: https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task")
        return

    base_options = mp_python.BaseOptions(model_asset_path=model_path)
    options = vision.FaceLandmarkerOptions(
        base_options=base_options,
        running_mode=vision.RunningMode.VIDEO,
        num_faces=1,
        min_face_detection_confidence=0.5,
        min_face_presence_confidence=0.5,
        min_tracking_confidence=0.5
    )
    detector = vision.FaceLandmarker.create_from_options(options)
    print("[Eye] ✅ MediaPipe FaceLandmarker loaded")

    # ─── State ───
    closed_frames = 0
    last_blink_time = 0.0
    pending_single = False
    pending_timer = None
    last_gaze_x, last_gaze_y = 0.5, 0.5
    start_time_ms = int(time.time() * 1000)

    def _send(msg_str):
        """Schedule a broadcast on the main event loop (thread-safe)."""
        if loop is not None and loop.is_running():
            asyncio.run_coroutine_threadsafe(broadcast_fn(msg_str), loop)

    def _trigger_single():
        nonlocal pending_single
        if pending_single:
            pending_single = False
            _send(json.dumps({"event": "BLINK"}))
            print("[Eye] 👁️ Single Blink")

    # ─── Main loop ───
    while cap.isOpened():
        ok, frame = cap.read()
        if not ok:
            continue

        # Convert BGR → RGB → MediaPipe Image
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        timestamp_ms = int(time.time() * 1000) - start_time_ms

        results = detector.detect_for_video(mp_image, timestamp_ms)

        if not results.face_landmarks:
            time.sleep(0.01)
            continue

        lm = results.face_landmarks[0]

        # ══════════════ EAR Blink Detection ══════════════
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
                    # Double blink!
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

        # ══════════════ Gaze Tracking ══════════════
        lx = lm[LEFT_IRIS].x
        rx = lm[RIGHT_IRIS].x
        ly = lm[LEFT_IRIS].y
        ry = lm[RIGHT_IRIS].y

        raw_x = 1 - (lx + rx) / 2   # mirror X (webcam is flipped)
        raw_y = (ly + ry) / 2

        target_x = max(0.0, min(1.0, 0.5 + (raw_x - 0.5) * SENSITIVITY_X))
        target_y = max(0.0, min(1.0, 0.5 + (raw_y - 0.5) * SENSITIVITY_Y))

        last_gaze_x += (target_x - last_gaze_x) * SMOOTH
        last_gaze_y += (target_y - last_gaze_y) * SMOOTH

        _send(json.dumps({"event": "GAZE", "x": round(last_gaze_x, 4), "y": round(last_gaze_y, 4)}))

        time.sleep(0.01)

    cap.release()
    print("[Eye] Webcam released")
