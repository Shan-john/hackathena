import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

const POSES = [
  { id: 'left-arm', label: 'Raise Left Arm!', duration: 5000 },
  { id: 'right-arm', label: 'Raise Right Arm!', duration: 5000 },
  { id: 'squat', label: 'Do a Squat!', duration: 7000 },
  { id: 'left-leg', label: 'Lift Left Leg!', duration: 6000 },
  { id: 'right-leg', label: 'Lift Right Leg!', duration: 6000 },
];

export default function BodyGame({ onBack, onCoinsEarned }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef = useRef(null);

  const [status, setStatus] = useState('Loading MediaPipe...');
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [poseTimer, setPoseTimer] = useState(100);
  const [uiLabel, setUiLabel] = useState('Get Ready...');
  
  const gameSequenceRef = useRef([]);
  const poseStartTimeRef = useRef(0);
  const poseActiveRef = useRef(false);
  const gameOverRef = useRef(false);

  // Initialize sequence
  useEffect(() => {
    const seq = [];
    for (let i = 0; i < 10; i++) {
      seq.push(POSES[i % POSES.length]);
    }
    gameSequenceRef.current = seq;
  }, []);

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

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      
      if (results && results.landmarks) {
        setStatus('Tracking Body...');
        ctx.fillStyle = '#00ff88';
        for (const pose of results.landmarks) {
          for (const point of pose) {
             if (point.visibility > 0.5) {
                ctx.beginPath();
                ctx.arc(point.x * W, point.y * H, 4, 0, 2 * Math.PI);
                ctx.fill();
             }
          }
        }

        // Logic
        if (!gameOverRef.current && poseActiveRef.current) {
          const currentIndex = currentPoseIndex; // React states inside raf might be stale without refs, but we'll read carefuly
          const target = gameSequenceRef.current[currentIndex];
          if (target) {
            const elapsed = now - poseStartTimeRef.current;
            const remaining = Math.max(0, target.duration - elapsed);
            setPoseTimer((remaining / target.duration) * 100);

            // Detect matching
            const lm = results.landmarks[0];
            const getLm = (id) => lm[id];
            const isVisible = (p) => p && p.visibility > 0.6;
            
            const leftShoulder = getLm(11), rightShoulder = getLm(12);
            const leftWrist = getLm(15), rightWrist = getLm(16);
            const leftHip = getLm(23), rightHip = getLm(24);
            const leftKnee = getLm(25), rightKnee = getLm(26);

            let isMatch = false;

            if (target.id === 'left-arm' && isVisible(leftShoulder) && isVisible(leftWrist)) {
              isMatch = leftWrist.y < leftShoulder.y - 0.1;
            } else if (target.id === 'right-arm' && isVisible(rightShoulder) && isVisible(rightWrist)) {
              isMatch = rightWrist.y < rightShoulder.y - 0.1;
            } else if (target.id === 'squat' && isVisible(leftHip) && isVisible(leftKnee) && isVisible(rightHip) && isVisible(rightKnee)) {
              isMatch = Math.abs(leftHip.y - leftKnee.y) < 0.15 && Math.abs(rightHip.y - rightKnee.y) < 0.15;
            } else if (target.id === 'left-leg' && isVisible(leftHip) && isVisible(leftKnee)) {
              isMatch = leftKnee.y < leftHip.y + 0.1;
            } else if (target.id === 'right-leg' && isVisible(rightHip) && isVisible(rightKnee)) {
              isMatch = rightKnee.y < rightHip.y + 0.1;
            }

            if (isMatch) {
              poseActiveRef.current = false;
              setScore(s => s + 5);
              setUiLabel('Good job! Get ready...');
              setTimeout(() => advancePose(currentIndex), 1500);
            } else if (remaining <= 0) {
              poseActiveRef.current = false;
              setUiLabel('Time is up!');
              setTimeout(() => advancePose(currentIndex), 1500);
            }
          }
        }
      } else {
        setStatus('No body detected');
      }
    }

    rafRef.current = requestAnimationFrame(runDetection);
  }, []);

  const advancePose = (lastIndex) => {
    const nextIndex = lastIndex + 1;
    if (nextIndex >= gameSequenceRef.current.length) {
      gameOverRef.current = true;
      setGameOver(true);
      if (onCoinsEarned) onCoinsEarned(50); // Just give 50 coins for playing
      return;
    }
    setCurrentPoseIndex(nextIndex);
    const target = gameSequenceRef.current[nextIndex];
    setUiLabel(target.label);
    poseStartTimeRef.current = performance.now();
    poseActiveRef.current = true;
  };

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
              modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
              delegate: 'GPU'
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
           audio: false
         });
         
         if (disposed) { stream.getTracks().forEach(t => t.stop()); return; }
         
         const video = videoRef.current;
         if (video) {
           video.srcObject = stream;
           await video.play();
           setStatus('Ready! Step back so camera sees your whole body.');
           
           // Start first pose
           const target = gameSequenceRef.current[0];
           setTimeout(() => {
             if (disposed) return;
             setUiLabel(target.label);
             poseStartTimeRef.current = performance.now();
             poseActiveRef.current = true;
           }, 3000);
           
           rafRef.current = requestAnimationFrame(runDetection);
         }
      } catch (e) {
         console.error(e);
         setStatus('Error starting camera or mediapipe.');
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
         try { landmarkerRef.current.close() } catch {}
      }
    }
  }, [runDetection]);

  return (
    <div className="active-game-overlay body-game-overlay" style={{ background: 'rgba(0,0,0,0.85)', padding: '20px', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="game-header" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', color: 'white', marginBottom: '20px' }}>
        <button className="back-btn" onClick={onBack} style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px' }}>← Quit</button>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Score: {score}</span>
      </div>

      {!gameOver && (
        <div className="pose-instruction" style={{ textAlign: 'center', marginBottom: '10px', width: '100%', maxWidth: '640px' }}>
           <h2 style={{ fontSize: '3rem', color: '#60a5fa', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', margin: 0 }}>
             {uiLabel}
           </h2>
           {poseActiveRef.current && (
             <div style={{ width: '100%', height: '10px', background: '#333', borderRadius: '5px', marginTop: '10px' }}>
               <div style={{ width: `${poseTimer}%`, height: '100%', background: poseTimer > 30 ? '#4ade80' : '#ef4444', borderRadius: '5px', transition: 'width 0.1s linear' }}></div>
             </div>
           )}
        </div>
      )}

      {gameOver && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '3rem', color: '#4ade80' }}>Dody Game Complete!</h2>
          <p style={{ fontSize: '1.5rem' }}>Final Score: {score}</p>
          <button onClick={onBack} style={{ marginTop: '20px', padding: '15px 30px', fontSize: '1.5rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>Return to Map</button>
        </div>
      )}

      <div style={{ position: 'relative', width: '640px', height: '480px', border: '4px solid #3b82f6', borderRadius: '12px', overflow: 'hidden', display: gameOver ? 'none' : 'block' }}>
        <video ref={videoRef} playsInline muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
        <canvas ref={canvasRef} width="640" height="480" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transform: 'scaleX(-1)' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>
          Status: {status}
        </div>
      </div>
    </div>
  );
}
