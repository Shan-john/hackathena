import React, { useRef, useEffect, useState, useCallback } from 'react';
import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';

/**
 * GestureCamera — In-browser hand gesture recognition with live webcam feed.
 *
 * Uses MediaPipe Gesture Recognizer (JS SDK) to detect hand gestures
 * and fires a callback with LEFT_CLICK / RIGHT_CLICK / gesture name.
 *
 * Props:
 *   onGesture({ event, gesture, score })  — called on each detected gesture
 */

const CLICK_MAP = {
  Closed_Fist: 'LEFT_CLICK',
  Victory:     'RIGHT_CLICK',
};

const COOLDOWN_MS = 600; // ms between accepted click gestures

export default function GestureCamera({ onGesture }) {
  const videoRef      = useRef(null);
  const canvasRef     = useRef(null);
  const recognizerRef = useRef(null);
  const rafRef        = useRef(null);
  const lastTrigger   = useRef(0);
  const lastGesture   = useRef('');
  const [status, setStatus] = useState('Loading model…');
  const [minimized, setMinimized] = useState(false);

  // Stable callback ref so we don't re-init on every parent render
  const onGestureRef = useRef(onGesture);
  onGestureRef.current = onGesture;

  const runDetection = useCallback(() => {
    const video = videoRef.current;
    const recognizer = recognizerRef.current;
    if (!video || !recognizer || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(runDetection);
      return;
    }

    const now = performance.now();
    let results;
    try {
      results = recognizer.recognizeForVideo(video, now);
    } catch {
      rafRef.current = requestAnimationFrame(runDetection);
      return;
    }

    // Draw camera feed onto canvas (mirrored)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      // Use a small fixed resolution matching CSS display size
      const W = 240;
      const H = 180;
      if (canvas.width !== W) canvas.width = W;
      if (canvas.height !== H) canvas.height = H;
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(video, -W, 0, W, H);
      ctx.restore();

      // Draw hand landmarks if available
      if (results.landmarks && results.landmarks.length > 0) {
        for (const hand of results.landmarks) {
          ctx.fillStyle = '#00ff88';
          for (const lm of hand) {
            const x = W - lm.x * W; // mirror
            const y = lm.y * H;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      }
    }

    if (results.gestures && results.gestures.length > 0) {
      const gesture = results.gestures[0][0];
      const { categoryName: name, score } = gesture;

      if (name && name !== 'None' && score > 0.55) {
        const nowMs = Date.now();
        const event = CLICK_MAP[name] || `GESTURE:${name}`;

        if (name in CLICK_MAP) {
          // Click gestures: apply cooldown
          if (nowMs - lastTrigger.current > COOLDOWN_MS) {
            lastTrigger.current = nowMs;
            lastGesture.current = name;
            onGestureRef.current?.({ event, gesture: name, score });
          }
        } else {
          // Other gestures: only fire on change
          if (name !== lastGesture.current || nowMs - lastTrigger.current > 1000) {
            lastTrigger.current = nowMs;
            lastGesture.current = name;
            onGestureRef.current?.({ event, gesture: name, score });
          }
        }

        setStatus(`✋ ${name} (${(score * 100).toFixed(0)}%)`);
      } else {
        setStatus('Watching…');
      }
    } else {
      setStatus('No hand detected');
    }

    rafRef.current = requestAnimationFrame(runDetection);
  }, []);

  useEffect(() => {
    let disposed = false;

    async function init() {
      try {
        // Load MediaPipe WASM + model
        setStatus('Loading MediaPipe…');
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );

        if (disposed) return;

        const recognizer = await GestureRecognizer.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: 1,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        if (disposed) { recognizer.close(); return; }
        recognizerRef.current = recognizer;

        // Start webcam
        setStatus('Starting camera…');
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 640, height: 480 },
          audio: false,
        });

        if (disposed) { stream.getTracks().forEach(t => t.stop()); return; }

        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          await video.play();
          setStatus('Watching…');
          // Start recognition loop
          rafRef.current = requestAnimationFrame(runDetection);
        }
      } catch (err) {
        console.error('[GestureCamera] Init error:', err);
        setStatus(`Error: ${err.message}`);
      }
    }

    init();

    return () => {
      disposed = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
      if (recognizerRef.current) {
        try { recognizerRef.current.close(); } catch {}
      }
    };
  }, [runDetection]);

  return (
    <div className={`gesture-camera ${minimized ? 'minimized' : ''}`}>
      <div className="gesture-camera-header">
        <span className="gesture-camera-status">{status}</span>
        <button
          className="gesture-camera-toggle"
          onClick={() => setMinimized(m => !m)}
          title={minimized ? 'Expand camera' : 'Minimize camera'}
        >
          {minimized ? '🔼' : '🔽'}
        </button>
      </div>
      {/* Hidden video element for webcam capture */}
      <video
        ref={videoRef}
        style={{ display: 'none' }}
        playsInline
        muted
      />
      {/* Visible canvas showing mirrored camera + landmarks */}
      {!minimized && (
        <canvas
          ref={canvasRef}
          className="gesture-camera-canvas"
        />
      )}
    </div>
  );
}
