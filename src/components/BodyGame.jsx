import React, { useRef, useEffect, useState } from 'react';
import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

// ─── All available poses ───
const POSES = [
  { id: 'left-arm',  label: '🤚 Raise Left Arm!' },
  { id: 'right-arm', label: '✋ Raise Right Arm!' },
  { id: 'squat',     label: '🏋️ Do a Squat!' },
  { id: 'left-leg',  label: '🦵 Lift Left Leg!' },
  { id: 'right-leg', label: '🦶 Lift Right Leg!' },
];

// ─── Generate level config dynamically (infinite levels, progressively harder) ───
const LEVEL_NAMES = ['Warm Up', 'Easy', 'Medium', 'Hard', 'Expert', 'Grand Master'];

function generateLevel(index) {
  const posesCount = Math.min(3 + Math.floor(index / 2), 8);            // 3 → 8 max
  const duration   = Math.max(7000 - index * 400, 2000);                // 7s → 2s min
  const coinsPerHit = 5 + index * 3;                                    // 5, 8, 11, ...
  const name = index < LEVEL_NAMES.length
    ? LEVEL_NAMES[index]
    : `Level ${index + 1}`;
  return { name, posesCount, duration, coinsPerHit };
}

// ─── Shuffle-bag sequence generator (never repeat back-to-back) ───
function buildSequence(count, lastPoseId) {
  const seq = [];
  let lastId = lastPoseId;
  for (let i = 0; i < count; i++) {
    const options = POSES.filter(p => p.id !== lastId);
    const pick = options[Math.floor(Math.random() * options.length)];
    seq.push(pick);
    lastId = pick.id;
  }
  return seq;
}

export default function BodyGame({ onBack, onCoinsEarned }) {
  const videoRef      = useRef(null);
  const canvasRef     = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef        = useRef(null);

  // ─── All game state lives in a single ref to avoid stale closures ───
  const game = useRef({
    level: 0,
    step: 0,
    sequence: [],
    score: 0,
    hits: 0,
    misses: 0,
    totalPoses: 0,
    poseStart: 0,
    poseActive: false,
    levelDone: false,
    gameOver: false,
    lastPoseId: null,
    transitioning: false,   // Prevent double-fire on level transitions
    cooldownUntil: 0,       // Timestamp: ignore detection until this time
  });

  // ─── React state (for rendering only) ───
  const [status, setStatus]         = useState('Loading MediaPipe...');
  const [uiLabel, setUiLabel]       = useState('Get Ready...');
  const [poseTimer, setPoseTimer]   = useState(100);
  const [showTimer, setShowTimer]   = useState(false);
  const [renderTick, setRenderTick] = useState(0); // Force re-render

  // Helper to sync ref → UI
  const tick = () => setRenderTick(t => t + 1);

  // ─── Start a specific level ───
  function startLevel(lvlIndex) {
    const g = game.current;

    const lvl = generateLevel(lvlIndex);
    const seq = buildSequence(lvl.posesCount, g.lastPoseId);

    g.level        = lvlIndex;
    g.step         = 0;
    g.sequence     = seq;
    g.levelDone    = false;
    g.poseActive   = false;
    g.transitioning = false;

    setUiLabel(`Level ${lvlIndex + 1}: ${lvl.name}`);
    setShowTimer(false);
    tick();

    // Brief pause then start first pose with a detection cooldown
    setTimeout(() => {
      if (g.gameOver) return;
      g.cooldownUntil = performance.now() + 1500; // 1.5s grace period — hold neutral first
      g.poseStart  = performance.now();
      g.poseActive = true;
      setUiLabel(seq[0].label);
      setShowTimer(true);
      tick();
    }, 2000);
  }

  // ─── Advance to next pose or finish level ───
  function advancePose() {
    const g = game.current;
    if (g.transitioning) return; // Prevent double-fire

    const nextStep = g.step + 1;

    if (nextStep >= g.sequence.length) {
      // Level complete
      g.poseActive   = false;
      g.levelDone    = true;
      g.transitioning = true;  // Lock transitions

      const nextLvl = g.level + 1;
      setUiLabel(`✅ Level ${g.level + 1} Complete!`);
      setShowTimer(false);
      tick();
      // Auto-start next level after delay
      setTimeout(() => {
        startLevel(nextLvl);
      }, 2500);
      return;
    }

    // Next pose in current level (with cooldown so normal pose doesn't instant-match)
    g.step          = nextStep;
    g.cooldownUntil = performance.now() + 1500; // 1.5s cooldown before detection starts
    g.poseStart     = performance.now();
    g.poseActive    = true;
    g.lastPoseId    = g.sequence[nextStep].id;
    setUiLabel(g.sequence[nextStep].label);
    setShowTimer(true);
    tick();
  }

  // ─── Detection loop (uses game ref, no stale closures) ───
  function runDetection() {
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

    // Draw landmarks
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (results && results.landmarks && results.landmarks.length > 0) {
        setStatus('Tracking Body...');

        // Draw skeleton points
        ctx.fillStyle = '#00ff88';
        for (const pose of results.landmarks) {
          for (const point of pose) {
            if (point.visibility > 0.3) {
              ctx.beginPath();
              ctx.arc(point.x * W, point.y * H, 5, 0, 2 * Math.PI);
              ctx.fill();
            }
          }
        }

        // ── Pose matching ──
        const g = game.current;
        if (!g.gameOver && !g.levelDone && !g.transitioning && g.poseActive) {
          const lvl    = generateLevel(g.level);
          const target = g.sequence[g.step];
          if (!target) { rafRef.current = requestAnimationFrame(runDetection); return; }

          const elapsed   = now - g.poseStart;
          const remaining = Math.max(0, lvl.duration - elapsed);
          setPoseTimer((remaining / lvl.duration) * 100);

          // Skip detection during cooldown period (lets user return to neutral)
          if (now < g.cooldownUntil) {
            rafRef.current = requestAnimationFrame(runDetection);
            return;
          }

          const lm = results.landmarks[0];
          const isVis = (p) => p && p.visibility > 0.4;

          const lShoulder = lm[11], rShoulder = lm[12];
          const lWrist    = lm[15], rWrist    = lm[16];
          const lHip      = lm[23], rHip      = lm[24];
          const lKnee     = lm[25], rKnee     = lm[26];

          let matched = false;

          // Arms: wrist must be clearly ABOVE shoulder
          if (target.id === 'left-arm' && isVis(lShoulder) && isVis(lWrist)) {
            matched = lWrist.y < lShoulder.y - 0.08;
          } else if (target.id === 'right-arm' && isVis(rShoulder) && isVis(rWrist)) {
            matched = rWrist.y < rShoulder.y - 0.08;
          }
          // Squat: hips must drop DOWN significantly (knees nearly same Y as hips)
          else if (target.id === 'squat' && isVis(lHip) && isVis(rHip) && isVis(lKnee) && isVis(rKnee)) {
            matched = Math.abs(lHip.y - lKnee.y) < 0.12 && Math.abs(rHip.y - rKnee.y) < 0.12;
          }
          // Leg lifts: knee must rise ABOVE the hip (negative delta = knee higher than hip)
          else if (target.id === 'left-leg' && isVis(lHip) && isVis(lKnee)) {
            matched = lKnee.y < lHip.y - 0.02;
          } else if (target.id === 'right-leg' && isVis(rHip) && isVis(rKnee)) {
            matched = rKnee.y < rHip.y - 0.02;
          }

          if (matched) {
            g.poseActive = false;
            g.score += lvl.coinsPerHit;
            g.hits  += 1;
            g.totalPoses += 1;
            g.lastPoseId = target.id;
            setUiLabel('✅ Perfect!');
            setShowTimer(false);
            tick();
            // Live coin increase
            if (onCoinsEarned) onCoinsEarned(lvl.coinsPerHit, true);
            setTimeout(() => advancePose(), 1500);
          } else if (remaining <= 0) {
            g.poseActive = false;
            g.misses += 1;
            g.totalPoses += 1;
            g.lastPoseId = target.id;
            setUiLabel('⏰ Time\'s up!');
            setShowTimer(false);
            tick();
            setTimeout(() => advancePose(), 1500);
          }
        }
      } else {
        setStatus('No body detected — step back');
      }
    }

    rafRef.current = requestAnimationFrame(runDetection);
  }

  // ─── Init MediaPipe + Camera ───
  useEffect(() => {
    let disposed = false;

    async function init() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );
        if (disposed) return;

        const poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numPoses: 1,
          minPoseDetectionConfidence: 0.5,
          minPosePresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        if (disposed) { poseLandmarker.close(); return; }
        landmarkerRef.current = poseLandmarker;

        setStatus('Waiting for camera...');
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 640, height: 480 },
          audio: false,
        });

        if (disposed) { stream.getTracks().forEach(t => t.stop()); return; }

        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          await video.play();
          setStatus('Ready! Step back so the camera sees your full body.');

          // Start level 1 after short countdown
          setTimeout(() => {
            if (disposed) return;
            startLevel(0);
          }, 2000);

          rafRef.current = requestAnimationFrame(runDetection);
        }
      } catch (e) {
        console.error(e);
        setStatus('Error starting camera or MediaPipe.');
      }
    }

    // Reset game state (handles React Strict Mode double-mount)
    const g = game.current;
    g.level = 0; g.step = 0; g.sequence = []; g.score = 0;
    g.hits = 0; g.misses = 0; g.totalPoses = 0; g.poseStart = 0;
    g.poseActive = false; g.levelDone = false; g.gameOver = false;
    g.lastPoseId = null; g.transitioning = false; g.cooldownUntil = 0;

    init();

    return () => {
      disposed = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
      if (landmarkerRef.current) {
        try { landmarkerRef.current.close(); } catch {}
        landmarkerRef.current = null;
      }
    };
  }, []);

  // ─── Derived values from game ref ───
  const g        = game.current;
  const lvl      = generateLevel(g.level);
  const accuracy = g.totalPoses > 0 ? Math.round((g.hits / g.totalPoses) * 100) : 0;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', 'Segoe UI', sans-serif", color: '#fff', overflow: 'auto',
    }}>

      {/* ─── TOP BAR ─── */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', maxWidth: '820px', padding: '0 20px', marginBottom: 16,
      }}>
        <button onClick={onBack} style={{
          padding: '10px 22px', fontSize: '1.1rem', cursor: 'pointer',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10,
        }}>← Quit</button>

        <div style={{ display: 'flex', gap: 20, fontSize: '1.15rem', fontWeight: 600 }}>
          <span>🪙 {g.score}</span>
          <span>✅ {g.hits}</span>
          <span>❌ {g.misses}</span>
        </div>
      </div>

      {/* ─── LEVEL INDICATOR ─── */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: Math.max(g.level + 1, 6) }, (_, i) => (
          <div key={i} style={{
            width: 34, height: 34, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700,
            background: i < g.level ? '#4ade80'
                      : i === g.level ? '#60a5fa'
                      : 'rgba(255,255,255,0.15)',
            color: i <= g.level ? '#fff' : 'rgba(255,255,255,0.5)',
            border: i === g.level ? '2px solid #93c5fd' : '2px solid transparent',
            transition: 'all 0.3s ease',
          }}>{i + 1}</div>
        ))}
      </div>

      {/* ─── LEVEL NAME + POSE LABEL ─── */}
      <div style={{ textAlign: 'center', marginBottom: 10, width: '100%', maxWidth: 640 }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#a5b4fc', fontWeight: 600, letterSpacing: 1 }}>
            LEVEL {g.level + 1} — {lvl.name.toUpperCase()}
          </p>
          <h2 style={{
            fontSize: '2.6rem', margin: '6px 0 0',
            color: uiLabel.includes('Perfect') ? '#4ade80' : uiLabel.includes('Time') ? '#f87171' : '#60a5fa',
            textShadow: '0 2px 12px rgba(96,165,250,0.4)',
            transition: 'color 0.3s',
          }}>
            {uiLabel}
          </h2>

          {/* Timer bar */}
          {showTimer && (
            <div style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, marginTop: 10 }}>
              <div style={{
                width: `${poseTimer}%`, height: '100%',
                background: poseTimer > 30 ? 'linear-gradient(90deg, #4ade80, #22d3ee)' : '#ef4444',
                borderRadius: 4, transition: 'width 0.1s linear',
              }} />
            </div>
          )}

          {/* Step dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 8 }}>
            {g.sequence.map((_, i) => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: '50%',
                background: i < g.step ? '#4ade80' : i === g.step ? '#60a5fa' : 'rgba(255,255,255,0.2)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>
      </div>




      {/* ─── CAMERA FEED ─── */}
      <div style={{
        position: 'relative', width: 640, height: 480,
        border: '3px solid rgba(96,165,250,0.5)', borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(96,165,250,0.15)',
      }}>
        <video ref={videoRef} playsInline muted style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', transform: 'scaleX(-1)',
        }} />
        <canvas ref={canvasRef} width="640" height="480" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          transform: 'scaleX(-1)',
        }} />
        <div style={{
          position: 'absolute', bottom: 10, left: 10,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
          color: '#fff', padding: '5px 12px', borderRadius: 6, fontSize: '0.85rem',
        }}>
          {status}
        </div>
      </div>
    </div>
  );
}
