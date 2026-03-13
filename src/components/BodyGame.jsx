import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

// ─── All available poses ───
const POSES = [
  { id: 'left-arm',  label: '🤚 Raise Left Arm!' },
  { id: 'right-arm', label: '✋ Raise Right Arm!' },
  { id: 'squat',     label: '🏋️ Do a Squat!' },
  { id: 'left-leg',  label: '🦵 Lift Left Leg!' },
  { id: 'right-leg', label: '🦶 Lift Right Leg!' },
];

// ─── 6 Levels — each level gets harder (shorter time, more poses) ───
const LEVELS = [
  { name: 'Warm Up',      posesCount: 3, duration: 7000, coinsPerHit: 5  },
  { name: 'Easy',         posesCount: 4, duration: 6000, coinsPerHit: 8  },
  { name: 'Medium',       posesCount: 4, duration: 5000, coinsPerHit: 10 },
  { name: 'Hard',         posesCount: 5, duration: 4500, coinsPerHit: 12 },
  { name: 'Expert',       posesCount: 5, duration: 4000, coinsPerHit: 15 },
  { name: 'Grand Master', posesCount: 5, duration: 3500, coinsPerHit: 20 },
];

// ─── Sequence Generation via Shuffle Bag ───
// This ensures every pose is seen once per set and no pose ever repeats back to back
let poseBag = [];
let globalLastId = null;

function getNextPose() {
  if (poseBag.length === 0) {
    poseBag = [...POSES].sort(() => Math.random() - 0.5);
    // Prevent the new bag from starting with the last pose of the previous bag
    if (poseBag[0].id === globalLastId && poseBag.length > 1) {
      const temp = poseBag[0];
      poseBag[0] = poseBag[1];
      poseBag[1] = temp;
    }
  }
  const p = poseBag.shift();
  globalLastId = p.id;
  return p;
}

// Build a non-repeating sequence of poses for a given count
function buildSequence(count) {
  const seq = [];
  for (let i = 0; i < count; i++) {
    seq.push(getNextPose());
  }
  return seq;
}

export default function BodyGame({ onBack, onCoinsEarned }) {
  const videoRef      = useRef(null);
  const canvasRef     = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef        = useRef(null);

  // ─── State ───
  const [status, setStatus]               = useState('Loading MediaPipe...');
  const [currentLevel, setCurrentLevel]   = useState(0);      // 0-5
  const [currentStep, setCurrentStep]     = useState(0);       // pose index within level
  const [score, setScore]                 = useState(0);
  const [hits, setHits]                   = useState(0);
  const [misses, setMisses]               = useState(0);
  const [totalPoses, setTotalPoses]       = useState(0);
  const [gameOver, setGameOver]           = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [poseTimer, setPoseTimer]         = useState(100);
  const [uiLabel, setUiLabel]             = useState('Get Ready...');
  const [showTimer, setShowTimer]         = useState(false);

  // ─── Refs for use inside rAF ───
  const scoreRef         = useRef(0);
  const hitsRef          = useRef(0);
  const missesRef        = useRef(0);
  const totalPosesRef    = useRef(0);
  const levelRef         = useRef(0);
  const stepRef          = useRef(0);
  const sequenceRef      = useRef([]);
  const poseStartRef     = useRef(0);
  const poseActiveRef    = useRef(false);
  const gameOverRef      = useRef(false);
  const levelCompleteRef = useRef(false);

  // ─── Start a level ───
  const startLevel = useCallback((lvlIndex) => {
    const lvl = LEVELS[lvlIndex];
    const seq = buildSequence(lvl.posesCount);
    sequenceRef.current      = seq;
    levelRef.current         = lvlIndex;
    stepRef.current          = 0;
    levelCompleteRef.current = false;

    setCurrentLevel(lvlIndex);
    setCurrentStep(0);
    setLevelComplete(false);
    setUiLabel(`Level ${lvlIndex + 1}: ${lvl.name}`);
    setShowTimer(false);

    // Brief pause then start first pose
    setTimeout(() => {
      if (gameOverRef.current) return;
      setUiLabel(seq[0].label);
      setShowTimer(true);
      poseStartRef.current = performance.now();
      poseActiveRef.current = true;
    }, 2000);
  }, []);

  // ─── Advance to next pose or finish level ───
  const advancePose = useCallback(() => {
    const nextStep = stepRef.current + 1;
    const seq = sequenceRef.current;

    if (nextStep >= seq.length) {
      // Level complete!
      poseActiveRef.current    = false;
      levelCompleteRef.current = true;
      setLevelComplete(true);
      setShowTimer(false);

      const nextLvl = levelRef.current + 1;
      if (nextLvl >= LEVELS.length) {
        // All 6 levels done — game over
        gameOverRef.current = true;
        setGameOver(true);
        if (onCoinsEarned) onCoinsEarned(scoreRef.current, false); // Summarize stats
      } else {
        setUiLabel(`✅ Level ${levelRef.current + 1} Complete!`);
        // Auto-start next level after 2.5s
        setTimeout(() => {
          if (gameOverRef.current) return;
          startLevel(nextLvl);
        }, 2500);
      }
      return;
    }

    stepRef.current = nextStep;
    setCurrentStep(nextStep);
    setUiLabel(seq[nextStep].label);
    setShowTimer(true);
    poseStartRef.current = performance.now();
    poseActiveRef.current = true;
  }, [onCoinsEarned, startLevel]);

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

    // ── Draw landmarks ──
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (results && results.landmarks && results.landmarks.length > 0) {
        setStatus('Tracking Body...');
        ctx.fillStyle = '#00ff88';
        for (const pose of results.landmarks) {
          for (const point of pose) {
            if (point.visibility > 0.5) {
              ctx.beginPath();
              ctx.arc(point.x * W, point.y * H, 5, 0, 2 * Math.PI);
              ctx.fill();
            }
          }
        }

        // ── Pose matching logic ──
        if (!gameOverRef.current && !levelCompleteRef.current && poseActiveRef.current) {
          const lvl = LEVELS[levelRef.current];
          const target = sequenceRef.current[stepRef.current];
          if (!target) { rafRef.current = requestAnimationFrame(runDetection); return; }

          const elapsed   = now - poseStartRef.current;
          const remaining = Math.max(0, lvl.duration - elapsed);
          setPoseTimer((remaining / lvl.duration) * 100);

          const lm = results.landmarks[0];
          const isVis = (p) => p && p.visibility > 0.25; // Lowered visibility requirement so partial leg frames still work

          const lShoulder = lm[11], rShoulder = lm[12];
          const lWrist    = lm[15], rWrist    = lm[16];
          const lHip      = lm[23], rHip      = lm[24];
          const lKnee     = lm[25], rKnee     = lm[26];

          let matched = false;

          // Arm raises (wrist goes slightly above shoulder)
          if (target.id === 'left-arm' && isVis(lShoulder) && isVis(lWrist)) {
            matched = lWrist.y < lShoulder.y - 0.05;
          } else if (target.id === 'right-arm' && isVis(rShoulder) && isVis(rWrist)) {
            matched = rWrist.y < rShoulder.y - 0.05;
          } 
          // Squats (hips drop to be nearly level with knees OR hips just drop super low on screen)
          else if (target.id === 'squat' && isVis(lHip) && isVis(rHip)) {
            if (isVis(lKnee) && isVis(rKnee)) {
               matched = Math.abs(lHip.y - lKnee.y) < 0.25 || Math.abs(rHip.y - rKnee.y) < 0.25;
            } else {
               matched = lHip.y > 0.65 && rHip.y > 0.65;
            }
          } 
          // Lifting leg (knee comes up towards hip)
          else if (target.id === 'left-leg' && isVis(lHip)) {
            if (isVis(lKnee)) {
               matched = lKnee.y < lHip.y + 0.25;
            }
          } else if (target.id === 'right-leg' && isVis(rHip)) {
            if (isVis(rKnee)) {
               matched = rKnee.y < rHip.y + 0.25;
            }
          }

          if (matched) {
            poseActiveRef.current = false;
            scoreRef.current += lvl.coinsPerHit;
            hitsRef.current  += 1;
            totalPosesRef.current += 1;
            setScore(scoreRef.current);
            setHits(hitsRef.current);
            setTotalPoses(totalPosesRef.current);
            setUiLabel('✅ Perfect!');
            setShowTimer(false);
            if (onCoinsEarned) onCoinsEarned(lvl.coinsPerHit, true); // Dispense LIVE coins immediately!
            setTimeout(() => advancePose(), 1200);
          } else if (remaining <= 0) {
            poseActiveRef.current = false;
            missesRef.current    += 1;
            totalPosesRef.current += 1;
            setMisses(missesRef.current);
            setTotalPoses(totalPosesRef.current);
            setUiLabel('⏰ Time\'s up!');
            setShowTimer(false);
            setTimeout(() => advancePose(), 1200);
          }
        }
      } else {
        setStatus('No body detected — step back');
      }
    }

    rafRef.current = requestAnimationFrame(runDetection);
  }, [advancePose]);

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

          // Start level 1 after a short countdown
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
    };
  }, [runDetection, startLevel]);

  // ─── Derived ───
  const lvl       = LEVELS[currentLevel];
  const accuracy  = totalPoses > 0 ? Math.round((hits / totalPoses) * 100) : 0;

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
          <span>🪙 {score}</span>
          <span>✅ {hits}</span>
          <span>❌ {misses}</span>
        </div>
      </div>

      {/* ─── LEVEL INDICATOR ─── */}
      {!gameOver && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {LEVELS.map((l, i) => (
            <div key={i} style={{
              width: 38, height: 38, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.85rem', fontWeight: 700,
              background: i < currentLevel ? '#4ade80'
                        : i === currentLevel ? '#60a5fa'
                        : 'rgba(255,255,255,0.15)',
              color: i <= currentLevel ? '#fff' : 'rgba(255,255,255,0.5)',
              border: i === currentLevel ? '2px solid #93c5fd' : '2px solid transparent',
              transition: 'all 0.3s ease',
            }}>{i + 1}</div>
          ))}
        </div>
      )}

      {/* ─── LEVEL NAME + POSE LABEL ─── */}
      {!gameOver && (
        <div style={{ textAlign: 'center', marginBottom: 10, width: '100%', maxWidth: 640 }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#a5b4fc', fontWeight: 600, letterSpacing: 1 }}>
            LEVEL {currentLevel + 1} — {lvl.name.toUpperCase()}
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
            {sequenceRef.current.map((_, i) => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: '50%',
                background: i < currentStep ? '#4ade80' : i === currentStep ? '#60a5fa' : 'rgba(255,255,255,0.2)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>
        </div>
      )}

      {/* ─── GAME OVER SCREEN ─── */}
      {gameOver && (
        <div style={{
          textAlign: 'center', padding: 40,
          background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
          borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', maxWidth: 500,
        }}>
          <h2 style={{ fontSize: '2.8rem', color: '#4ade80', margin: '0 0 10px' }}>🎉 All 6 Levels Complete!</h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, margin: '24px 0' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>🪙 {score}</div>
              <div style={{ fontSize: '0.9rem', color: '#a5b4fc' }}>Coins Earned</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>⭐ {Math.floor(score / 2)}</div>
              <div style={{ fontSize: '0.9rem', color: '#a5b4fc' }}>XP Earned</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, margin: '16px 0 24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>✅ {hits}</div>
              <div style={{ fontSize: '0.85rem', color: '#86efac' }}>Hits</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>❌ {misses}</div>
              <div style={{ fontSize: '0.85rem', color: '#fca5a5' }}>Misses</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>🎯 {accuracy}%</div>
              <div style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Accuracy</div>
            </div>
          </div>

          <button onClick={onBack} style={{
            padding: '14px 36px', fontSize: '1.3rem', cursor: 'pointer',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: '#fff', border: 'none', borderRadius: 14,
            boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
          }}>🏝️ Return to Island</button>
        </div>
      )}

      {/* ─── CAMERA FEED ─── */}
      <div style={{
        position: 'relative', width: 640, height: 480,
        border: '3px solid rgba(96,165,250,0.5)', borderRadius: 14,
        overflow: 'hidden', display: gameOver ? 'none' : 'block',
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
