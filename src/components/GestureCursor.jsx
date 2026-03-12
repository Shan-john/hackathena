import React, { useRef, useEffect, useState, useCallback } from 'react';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

/**
 * GestureCursor — Hand-driven virtual mouse cursor.
 *
 * Uses MediaPipe Hand Landmarker to track the index finger tip (landmark 8)
 * as a screen cursor. Pinch (thumb tip ↔ index tip) triggers a click at the
 * cursor position via document.elementFromPoint().
 *
 * Renders:
 *   1. A visible cursor circle that follows the hand
 *   2. A small webcam preview in the bottom-left corner
 */

const PINCH_THRESHOLD = 0.07;   // Normalised distance — thumb↔index close = pinch
const PINCH_COOLDOWN  = 600;    // ms between accepted clicks
const SMOOTH_FACTOR   = 0.35;   // Cursor interpolation (0 = no smoothing, 1 = instant)
const SENSITIVITY     = 2.0;    // Movement multiplier — higher = less hand movement needed

export default function GestureCursor() {
  const videoRef      = useRef(null);
  const canvasRef     = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef        = useRef(null);
  const cursorRef     = useRef(null);
  const ringRef       = useRef(null);

  // Smoothed cursor position
  const posRef        = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lastClickRef  = useRef(0);
  const isPinchingRef = useRef(false);
  const hoveredElRef  = useRef(null);

  const [status, setStatus]     = useState('Loading…');
  const [minimized, setMinimized] = useState(false);

  // ─── Detection loop ───
  const runDetection = useCallback(() => {
    const video = videoRef.current;
    const landmarker = landmarkerRef.current;
    if (!video || !landmarker || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(runDetection);
      return;
    }

    const now = performance.now();
    let results;
    try {
      results = landmarker.detectForVideo(video, now);
    } catch {
      rafRef.current = requestAnimationFrame(runDetection);
      return;
    }

    // ── Draw webcam preview ──
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const W = 240, H = 180;
      if (canvas.width !== W) canvas.width = W;
      if (canvas.height !== H) canvas.height = H;
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(video, -W, 0, W, H);
      ctx.restore();

      // Draw landmarks
      if (results.landmarks && results.landmarks.length > 0) {
        for (const hand of results.landmarks) {
          ctx.fillStyle = '#00ff88';
          for (const lm of hand) {
            ctx.beginPath();
            ctx.arc(W - lm.x * W, lm.y * H, 3, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      }
    }

    // ── Process hand landmarks ──
    if (results.landmarks && results.landmarks.length > 0) {
      const lm = results.landmarks[0]; // first hand
      const indexTip = lm[8];   // index finger tip
      const thumbTip = lm[4];   // thumb tip

      // Map normalised coords → viewport (mirrored on X, amplified from center)
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const centerX = (1 - indexTip.x) * vw;
      const centerY = indexTip.y * vh;
      const rawX = Math.min(vw, Math.max(0, vw / 2 + (centerX - vw / 2) * SENSITIVITY));
      const rawY = Math.min(vh, Math.max(0, vh / 2 + (centerY - vh / 2) * SENSITIVITY));

      // Smooth the cursor position
      const prev = posRef.current;
      const sx = prev.x + (rawX - prev.x) * SMOOTH_FACTOR;
      const sy = prev.y + (rawY - prev.y) * SMOOTH_FACTOR;
      posRef.current = { x: sx, y: sy };

      // Broadcast hand position so other components (e.g. CarRacingGame) can use it
      window.postMessage({ type: 'gesture-pos', x: sx, y: sy }, '*');

      // Move cursor element
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${sx}px, ${sy}px)`;
        cursorRef.current.style.opacity = '1';
      }

      // ── Hover effect ──
      // Temporarily hide cursor to get the element under it
      if (cursorRef.current) cursorRef.current.style.pointerEvents = 'none';
      const el = document.elementFromPoint(sx, sy);
      if (cursorRef.current) cursorRef.current.style.pointerEvents = '';

      // Add/remove hover highlight
      if (hoveredElRef.current && hoveredElRef.current !== el) {
        hoveredElRef.current.classList.remove('gesture-hover');
      }
      if (el && (el.tagName === 'BUTTON' || el.closest('button') || el.onclick || el.closest('[role="button"]') || el.closest('.input-card') || el.closest('.skill-card') || el.closest('.game-tile') || el.closest('.sidebar-item'))) {
        const target = el.closest('button') || el.closest('.input-card') || el.closest('.skill-card') || el.closest('.game-tile') || el.closest('.sidebar-item') || el;
        target.classList.add('gesture-hover');
        hoveredElRef.current = target;
      } else {
        hoveredElRef.current = null;
      }

      // ── Pinch detection ──
      const pinchDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
      const nowMs = Date.now();

      if (pinchDist < PINCH_THRESHOLD) {
        if (!isPinchingRef.current && (nowMs - lastClickRef.current) > PINCH_COOLDOWN) {
          isPinchingRef.current = true;
          lastClickRef.current = nowMs;

          // Visual feedback
          if (cursorRef.current) cursorRef.current.classList.add('pinching');

          // Click the element under cursor
          if (cursorRef.current) cursorRef.current.style.pointerEvents = 'none';
          const clickTarget = document.elementFromPoint(sx, sy);
          if (cursorRef.current) cursorRef.current.style.pointerEvents = '';

          if (clickTarget) {
            // Find the closest clickable ancestor
            const clickable = clickTarget.closest('button') ||
                              clickTarget.closest('a') ||
                              clickTarget.closest('.input-card') ||
                              clickTarget.closest('.skill-card') ||
                              clickTarget.closest('.game-tile') ||
                              clickTarget.closest('.sidebar-item') ||
                              clickTarget;
            console.log('[GestureCursor] Pinch click on:', clickable.tagName, clickable.className);
            clickable.click();
          }

          setTimeout(() => {
            if (cursorRef.current) cursorRef.current.classList.remove('pinching');
          }, 300);
        }
      } else {
        isPinchingRef.current = false;
      }

      // ── Pinch ring progress ──
      if (ringRef.current) {
        const progress = Math.max(0, 1 - (pinchDist / PINCH_THRESHOLD));
        const circumference = 2 * Math.PI * 22;
        const offset = circumference * (1 - progress);
        ringRef.current.style.strokeDashoffset = offset;
        ringRef.current.style.opacity = progress > 0.2 ? '1' : '0';
      }

      setStatus(`✋ Tracking (pinch: ${(pinchDist * 100).toFixed(0)})`);
    } else {
      // No hand → fade out cursor
      if (cursorRef.current) cursorRef.current.style.opacity = '0.3';
      setStatus('No hand detected');
    }

    rafRef.current = requestAnimationFrame(runDetection);
  }, []);

  // ─── Init MediaPipe + webcam ───
  useEffect(() => {
    let disposed = false;

    async function init() {
      try {
        setStatus('Loading MediaPipe…');
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );
        if (disposed) return;

        const landmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: 1,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        if (disposed) { landmarker.close(); return; }
        landmarkerRef.current = landmarker;

        setStatus('Waiting for camera…');
        // Give Python backend time to release the webcam
        await new Promise(r => setTimeout(r, 1500));
        if (disposed) return;

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
          rafRef.current = requestAnimationFrame(runDetection);
        }
      } catch (err) {
        console.error('[GestureCursor] Init error:', err);
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
      if (landmarkerRef.current) {
        try { landmarkerRef.current.close(); } catch {}
      }
      // Clean up hover class
      if (hoveredElRef.current) {
        hoveredElRef.current.classList.remove('gesture-hover');
      }
    };
  }, [runDetection]);

  return (
    <>
      {/* ── Cursor ── */}
      <div ref={cursorRef} className="gesture-cursor" style={{ opacity: 0 }}>
        <div className="gesture-cursor-dot" />
        <svg className="gesture-cursor-ring" width="50" height="50" viewBox="0 0 50 50">
          <circle
            ref={ringRef}
            cx="25" cy="25" r="22"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeDasharray={2 * Math.PI * 22}
            strokeDashoffset={2 * Math.PI * 22}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s ease', opacity: 0 }}
          />
        </svg>
      </div>

      {/* ── Hidden video ── */}
      <video ref={videoRef} style={{ display: 'none' }} playsInline muted />

      {/* ── Camera preview ── */}
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
        {!minimized && (
          <canvas ref={canvasRef} className="gesture-camera-canvas" />
        )}
      </div>
    </>
  );
}
