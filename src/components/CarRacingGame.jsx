import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * CarRacingGame — Embeds the Car Racing JS game in an iframe.
 * 
 * Controls:
 *   - EYE MODE:     Head/gaze x-position steers left/right continuously
 *   - GESTURE MODE: Hand x-position steers left/right continuously
 *   - TAP MODE:     Touch D-pad + keyboard passthrough
 *   - Blink/Pinch:  Clicks inside iframe at cursor position
 * 
 * The original Car-Racing-JS game files are used as-is.
 * Only game.html was modified to auto-start and load eye-controls.js.
 */
export default function CarRacingGame({ onBack, onCoinsEarned, inputMode, gazePos }) {
  const iframeRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [coinsAwarded, setCoinsAwarded] = useState(0);
  const scorePollerRef = useRef(null);

  // Refs for position data (avoid re-renders)
  const gazePosRef = useRef(null);
  useEffect(() => { gazePosRef.current = gazePos; }, [gazePos]);

  const gesturePosRef = useRef(null); // updated via postMessage from GestureCursor

  // Steer direction for UI indicator
  const [steerDirection, setSteerDirection] = useState(null);
  const lastSteerRef = useRef('center');

  // ── Poll iframe for score & game_over ──
  useEffect(() => {
    scorePollerRef.current = setInterval(() => {
      try { 
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentWindow) return;
        const iw = iframe.contentWindow;

        const scoreEl = iw.document.getElementById('score');
        if (scoreEl) setScore(parseInt(scoreEl.innerText) || 0);

        if (iw.game_over === true && !gameOver) {
          setGameOver(true);
          const finalScore = parseInt(iw.document.getElementById('score')?.innerText) || 0;
          const earned = Math.max(5, Math.floor(finalScore / 2));
          setCoinsAwarded(earned);
          if (onCoinsEarned) onCoinsEarned(earned);
        }
      } catch (e) {}
    }, 500);
    return () => clearInterval(scorePollerRef.current);
  }, [gameOver, onCoinsEarned]);

  // ── Post a message into the iframe ──
  const postToIframe = useCallback((data) => {
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(data, '*');
      }
    } catch (e) {}
  }, []);

  // Helper: compute steer direction from an x position
  const computeSteer = useCallback((x) => {
    const DEAD_ZONE = 0.12;
    const centerX = window.innerWidth / 2;
    const offset = (x - centerX) / centerX; // -1 to +1
    if (offset < -DEAD_ZONE) return 'left';
    if (offset > DEAD_ZONE) return 'right';
    return 'center';
  }, []);

  // ══════════════════════════════════════════════════════
  //  EYE/HEAD MOVEMENT STEERING (eye mode)
  //  Reads gazePos → sends "car-steer" to iframe
  // ══════════════════════════════════════════════════════
  useEffect(() => {
    if (gameOver || inputMode !== 'eye') return;

    let animId;
    function steerLoop() {
      const gaze = gazePosRef.current;
      if (gaze) {
        const dir = computeSteer(gaze.x);
        if (dir !== lastSteerRef.current) {
          postToIframe({ type: 'car-steer', direction: dir });
          lastSteerRef.current = dir;
          setSteerDirection(dir === 'center' ? null : dir);
        }
      }
      animId = requestAnimationFrame(steerLoop);
    }

    animId = requestAnimationFrame(steerLoop);
    return () => {
      cancelAnimationFrame(animId);
      postToIframe({ type: 'car-steer', direction: 'center' });
      lastSteerRef.current = 'center';
      setSteerDirection(null);
    };
  }, [gameOver, inputMode, postToIframe, computeSteer]);

  // ══════════════════════════════════════════════════════
  //  HAND GESTURE MOVEMENT STEERING (gesture mode)
  //  Listens for "gesture-pos" from GestureCursor
  //  → sends "car-steer" to iframe based on hand x-position
  // ══════════════════════════════════════════════════════
  useEffect(() => {
    if (gameOver || inputMode !== 'gesture') return;

    // Receive hand position from GestureCursor component
    const handleGesturePos = (e) => {
      if (!e.data || e.data.type !== 'gesture-pos') return;
      gesturePosRef.current = { x: e.data.x, y: e.data.y };
    };
    window.addEventListener('message', handleGesturePos);

    // Steering loop — reads gesture position and steers
    let animId;
    function steerLoop() {
      const hand = gesturePosRef.current;
      if (hand) {
        const dir = computeSteer(hand.x);
        if (dir !== lastSteerRef.current) {
          postToIframe({ type: 'car-steer', direction: dir });
          lastSteerRef.current = dir;
          setSteerDirection(dir === 'center' ? null : dir);
        }
      }
      animId = requestAnimationFrame(steerLoop);
    }

    animId = requestAnimationFrame(steerLoop);
    return () => {
      window.removeEventListener('message', handleGesturePos);
      cancelAnimationFrame(animId);
      postToIframe({ type: 'car-steer', direction: 'center' });
      lastSteerRef.current = 'center';
      setSteerDirection(null);
    };
  }, [gameOver, inputMode, postToIframe, computeSteer]);

  // ══════════════════════════════════════════════════════
  //  BLINK / PINCH → CLICK inside iframe
  // ══════════════════════════════════════════════════════
  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.data) return;

      // Eye blink → click at gaze position
      if (e.data.type === 'car-racing-blink-click') {
        const { x, y } = e.data;
        if (x != null && y != null) {
          const iframe = iframeRef.current;
          if (!iframe) return;
          const rect = iframe.getBoundingClientRect();
          const localX = x - rect.left;
          const localY = y - rect.top;
          if (localX >= 0 && localY >= 0 && localX <= rect.width && localY <= rect.height) {
            postToIframe({ type: 'blink-click', x: localX, y: localY });
          }
        }
        return;
      }

      // Tap / legacy directional controls
      if (e.data.type === 'car-racing-control') {
        const { action } = e.data;
        const keyMap = { left: 'ArrowLeft', right: 'ArrowRight', up: 'ArrowUp', down: 'ArrowDown' };
        const key = keyMap[action];
        if (key) {
          sendKey(key, 'keydown');
          setTimeout(() => sendKey(key, 'keyup'), 300);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [postToIframe]);

  // Keyboard event dispatch into iframe
  const sendKey = useCallback((key, type = 'keydown') => {
    try {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentWindow) return;
      iframe.contentWindow.document.dispatchEvent(
        new KeyboardEvent(type, { key, code: key, bubbles: true, cancelable: true })
      );
    } catch (e) {}
  }, []);

  // Keyboard passthrough
  useEffect(() => {
    const onDown = (e) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','a','d','w','s'].includes(e.key))
        sendKey(e.key, 'keydown');
    };
    const onUp = (e) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','a','d','w','s'].includes(e.key))
        sendKey(e.key, 'keyup');
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp); };
  }, [sendKey]);

  // Determine label for the current input mode
  const getInputLabel = () => {
    if (inputMode === 'eye') return '👁️ Move your head left/right to steer • Blink to click';
    if (inputMode === 'gesture') return '🖐️ Move your hand left/right to steer • Pinch to click';
    return null;
  };

  return (
    <div className="car-racing-wrapper">
      {/* Back button */}
      <button className="car-racing-back-btn" onClick={onBack}>← Back</button>

      {/* Score HUD */}
      <div className="car-racing-hud">
        <div className="car-racing-hud-item">
          <span className="car-racing-hud-icon">🏎️</span>
          <span className="car-racing-hud-label">Score</span>
          <span className="car-racing-hud-value">{score}</span>
        </div>
        <div className="car-racing-hud-item">
          <span className="car-racing-hud-icon">🪙</span>
          <span className="car-racing-hud-label">Coins to earn</span>
          <span className="car-racing-hud-value">{Math.max(5, Math.floor(score / 2))}</span>
        </div>
      </div>

      {/* Steering direction indicator (eye + gesture modes) */}
      {(inputMode === 'eye' || inputMode === 'gesture') && !gameOver && steerDirection && (
        <div className={`car-racing-steer-indicator car-racing-steer-${steerDirection}`}>
          {steerDirection === 'left' ? '◄ LEFT' : 'RIGHT ►'}
        </div>
      )}

      {/* Game Over overlay */}
      {gameOver && (
        <div className="car-racing-gameover">
          <div className="car-racing-gameover-card">
            <div className="car-racing-gameover-icon">🏁</div>
            <h2>Race Complete!</h2>
            <div className="car-racing-gameover-stats">
              <div className="car-racing-stat">
                <span className="car-racing-stat-label">Final Score</span>
                <span className="car-racing-stat-value">{score}</span>
              </div>
              <div className="car-racing-stat">
                <span className="car-racing-stat-label">Coins Earned</span>
                <span className="car-racing-stat-value">🪙 {coinsAwarded}</span>
              </div>
            </div>
            <button className="car-racing-play-btn" onClick={onBack}>
              🏠 Back to Island
            </button>
          </div>
        </div>
      )}

      {/* The Car Racing game iframe */}
      <iframe
        ref={iframeRef}
        src="/car-racing/game.html"
        title="Car Racing Game"
        className="car-racing-iframe"
        allow="autoplay"
      />

      {/* Touch D-pad — only for tap mode */}
      {!gameOver && inputMode === 'tap' && (
        <div className="car-racing-touch-controls">
          <button className="car-racing-touch-btn car-racing-touch-left"
            onPointerDown={() => sendKey('ArrowLeft', 'keydown')}
            onPointerUp={() => sendKey('ArrowLeft', 'keyup')}
            onPointerLeave={() => sendKey('ArrowLeft', 'keyup')}
            aria-label="Move Left">◄</button>
          <button className="car-racing-touch-btn car-racing-touch-up"
            onPointerDown={() => sendKey('ArrowUp', 'keydown')}
            onPointerUp={() => sendKey('ArrowUp', 'keyup')}
            onPointerLeave={() => sendKey('ArrowUp', 'keyup')}
            aria-label="Move Up">▲</button>
          <button className="car-racing-touch-btn car-racing-touch-down"
            onPointerDown={() => sendKey('ArrowDown', 'keydown')}
            onPointerUp={() => sendKey('ArrowDown', 'keyup')}
            onPointerLeave={() => sendKey('ArrowDown', 'keyup')}
            aria-label="Move Down">▼</button>
          <button className="car-racing-touch-btn car-racing-touch-right"
            onPointerDown={() => sendKey('ArrowRight', 'keydown')}
            onPointerUp={() => sendKey('ArrowRight', 'keyup')}
            onPointerLeave={() => sendKey('ArrowRight', 'keyup')}
            aria-label="Move Right">►</button>
        </div>
      )}

      {/* Hint bar for eye/gesture modes */}
      {getInputLabel() && !gameOver && (
        <div className="car-racing-eye-hint">
          {getInputLabel()}
        </div>
      )}
    </div>
  );
}
