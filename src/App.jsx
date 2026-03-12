import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Routes, Route, useNavigate, useParams, useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { IsometricWorld } from './world/IsometricWorld.js';
import { InputSystem } from './input/InputSystem.js';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import QuickChat from './components/QuickChat.jsx';
import InputSelector from './components/InputSelector.jsx';
import SkillSelector from './components/SkillSelector.jsx';
import IslandSidebar from './components/IslandSidebar.jsx';
import GameSelector from './components/GameSelector.jsx';

// ─── Auto-growth thresholds ───
const GROWTH_THRESHOLDS = [
  { coins: 0,   add: 'tree' },
  { coins: 20,  add: 'flower' },
  { coins: 40,  add: 'flower' },
  { coins: 60,  add: 'tree' },
  { coins: 80,  add: 'animal' },
  { coins: 100, add: 'tree' },
  { coins: 120, add: 'flower' },
  { coins: 150, add: 'house' },
  { coins: 180, add: 'tree' },
  { coins: 200, add: 'animal' },
  { coins: 230, add: 'flower' },
  { coins: 260, add: 'tree' },
  { coins: 300, add: 'house' },
  { coins: 350, add: 'tree' },
  { coins: 400, add: 'animal' },
  { coins: 450, add: 'flower' },
  { coins: 500, add: 'house' },
];

const LEVEL_NAMES = ['Meadow', 'Forest', 'Village', 'Castle', 'Fantasy Land'];
const XP_PER_LEVEL = 80;
const MAX_LEVEL = 5;

// ==========================================
// GAME LAYOUT: Only initializes Three.js world
// ==========================================
function GameLayout({ canvasRef, worldRef }) {
  const { inputType } = useParams();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (worldRef.current) return;

    const world = new IsometricWorld(canvasRef.current);
    worldRef.current = world;

    return () => {
      world.dispose();
      worldRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputType]);

  return <Outlet />;
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // ─── Derived values ───
  const pathParts        = location.pathname.split('/');
  const inGame           = location.pathname.startsWith('/play/');
  const currentInputType = inGame ? pathParts[2] : null;

  const canvasRef       = useRef(null);
  const worldRef        = useRef(null);
  const inputRef        = useRef(null);
  const growthAppliedRef = useRef(0);
  const playActionRef   = useRef(null);
  const menuActionRef   = useRef(null);
  const gestureLockRef  = useRef(null);
  const gestureLockTimerRef = useRef(null);

  // ─── State ───
  const [coins, setCoins]   = useState(0);
  const [xp, setXp]         = useState(0);
  const [level, setLevel]   = useState(1);
  const [activeGame, setActiveGame]       = useState(null);
  const [gameProgress, setGameProgress]   = useState(0);
  const [speechBubble, setSpeechBubble]   = useState(null);
  const [successMsg, setSuccessMsg]       = useState(null);
  const [tapDialog, setTapDialog]         = useState(null);
  const [gazePos, setGazePos]             = useState(null);
  const gazeRef  = useRef(null);

  const [unlockedItems, setUnlockedItems] = useState([
    { name: 'Grass Patch',  icon: '🌿', unlocked: true },
    { name: 'Small Tree',   icon: '🌱', unlocked: true },
    { name: 'Flower Bed',   icon: '🌸', unlocked: false, cost: 30 },
    { name: 'Stone Path',   icon: '🪨', unlocked: false, cost: 60 },
    { name: 'Little House', icon: '🏠', unlocked: false, cost: 100 },
    { name: 'Castle Tower', icon: '🏰', unlocked: false, cost: 200 },
    { name: 'Magic Bridge', icon: '🌉', unlocked: false, cost: 300 },
    { name: 'Dragon Friend',icon: '🐉', unlocked: false, cost: 500 },
  ]);

  // ─── Helpers ───
  const showSpeechBubble = useCallback((text) => {
    setSpeechBubble(text);
    inputRef.current?.say(text);
    setTimeout(() => setSpeechBubble(null), 3000);
  }, []);

  const showSuccess = useCallback((text) => {
    setSuccessMsg(text);
    setTimeout(() => setSuccessMsg(null), 2500);
  }, []);

  const handleQuickChat = useCallback((msg) => showSpeechBubble(`${msg.emoji} ${msg.text}`), [showSpeechBubble]);

  const handleTapDetected = useCallback((dir) => {
    setTapDialog(dir);
    setTimeout(() => setTapDialog(null), 1500);
  }, []);

  const handleCoinEarned = useCallback((amount) => {
    setCoins(c => c + amount);
  }, []);

  // ─── Ref to always access latest callbacks from the WebSocket/eye closure ───
  const cbRef = useRef({});
  cbRef.current = { showSpeechBubble, handleTapDetected, handleCoinEarned, currentInputType, inGame };

  // ═══════════════════════════════════════════════════════════════
  //  DIRECT WEBSOCKET to Python Tap / Eye Tracker sensor
  //  Lives at the App level so it NEVER disconnects on route change
  // ═══════════════════════════════════════════════════════════════
  useEffect(() => {
    let ws = null;
    let disposed = false;

    function connect() {
      if (disposed) return;
      ws = new WebSocket('ws://localhost:8765');

      ws.onopen = () => {
        console.log('[Tap] ✅ WebSocket connected to Python tap sensor');
      };

      ws.onmessage = (evt) => {
        let data;
        try { data = JSON.parse(evt.data); } catch { return; }
        console.log('[Tap] Received:', data.event);

        const cb = cbRef.current;

        // ─── Gaze Tracking ───
        if (data.event === 'GAZE') {
          const pos = { x: data.x * window.innerWidth, y: data.y * window.innerHeight };
          setGazePos(pos);
          gazeRef.current = pos;
          return;
        }

        // ─── Event Handling (Taps & Blinks) ───
        const isBlink = data.event === 'BLINK' || data.event === 'DOUBLE_BLINK';
        const isTap   = data.event === 'LEFT_TAP' || data.event === 'RIGHT_TAP';
        const evtBaseType = isTap ? 'tap' : (isBlink ? 'eye' : null);

        // ── Cooldown / Cross-Gesture Lock for menus ──
        if (menuActionRef.current && evtBaseType) {
          if (gestureLockRef.current && gestureLockRef.current !== evtBaseType) {
            console.log(`[Cooldown] Ignored ${data.event}. Waiting for ${gestureLockRef.current} idle.`);
            return;
          }
          // Lock to this gesture type for 2 seconds to prevent accidental triggers
          gestureLockRef.current = evtBaseType;
          if (gestureLockTimerRef.current) clearTimeout(gestureLockTimerRef.current);
          gestureLockTimerRef.current = setTimeout(() => {
            gestureLockRef.current = null;
          }, 2000);
        }

        // Show UI feedback
        if (data.event === 'LEFT_TAP') {
          cb.handleTapDetected?.('⬅️ LEFT TAP');
          cb.showSpeechBubble?.('Left tap detected!');
        } else if (data.event === 'RIGHT_TAP') {
          cb.handleTapDetected?.('➡️ RIGHT TAP');
          cb.showSpeechBubble?.('Right tap detected!');
        } else if (data.event === 'BLINK') {
          cb.handleTapDetected?.('👁️ BLINK');
        } else if (data.event === 'DOUBLE_BLINK') {
          cb.handleTapDetected?.('👀 DOUBLE BLINK');
        }

        // ── Simulate REAL mouse click at gaze position for blinks ──
        if (isBlink) {
          const gaze = gazeRef.current;
          if (gaze) {
            const el = document.elementFromPoint(gaze.x, gaze.y);
            if (el) {
              if (data.event === 'BLINK') {
                el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: gaze.x, clientY: gaze.y }));
              } else {
                el.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true, clientX: gaze.x, clientY: gaze.y }));
                el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: gaze.x, clientY: gaze.y })); // fallback
              }
            }
          }
        }

        // ── Menu Navigation ──
        if (menuActionRef.current) {
          if (data.event === 'LEFT_TAP' || data.event === 'BLINK') {
            menuActionRef.current('LEFT_TAP');   // confirm
          } else if (data.event === 'RIGHT_TAP' || data.event === 'DOUBLE_BLINK') {
            menuActionRef.current('RIGHT_TAP');  // cycle
          }
          return;
        }

        // ── Gameplay Inputs ──
        // Only accept input if it matches the selected type
        if (cb.currentInputType === 'tap' && !isTap) return;
        if (cb.currentInputType === 'eye' && !isBlink) return;
        if (cb.currentInputType !== 'tap' && cb.currentInputType !== 'eye') return;

        // Advance Mini-game
        if (playActionRef.current) {
          playActionRef.current();
          return;
        }

        // Grow Island
        const world = worldRef.current;
        if (!world || !cb.inGame) return;

        const rx = (Math.random() - 0.5) * 18;
        const rz = (Math.random() - 0.5) * 18;
        
        let action = data.event; // BLINK, DOUBLE_BLINK, LEFT_TAP, RIGHT_TAP
        
        if (action === 'BLINK' || action === 'LEFT_TAP') {
          const pick = Math.random();
          if (pick < 0.45) {
            world.growSeed(rx, rz);
            cb.showSpeechBubble?.(isTap ? '🌱 Tap → tree!' : '🌱 Blink → tree!');
          } else if (pick < 0.75) {
            world.addFlower(rx, rz);
            cb.showSpeechBubble?.(isTap ? '🌸 Tap → flower!' : '🌸 Blink → flower!');
          } else {
            world.addAnimal(rx, rz);
            cb.showSpeechBubble?.(isTap ? '🐰 Tap → animal!' : '🐰 Blink → animal!');
          }
        } else {
          world.addHouse(rx, rz);
          cb.showSpeechBubble?.(isTap ? '🏠 Double Tap → house!' : '🏠 Double Blink → house!');
        }
        cb.handleCoinEarned?.(1);
      };

      ws.onerror = () => {
        console.warn('[Tap] WebSocket error — is main.py running?');
      };

      ws.onclose = () => {
        console.log('[Tap] Disconnected. Retrying in 3s…');
        if (!disposed) setTimeout(connect, 3000);
      };
    }

    connect();

    // Also create InputSystem for voice/eye/gesture (not for taps)
    const input = new InputSystem();
    inputRef.current = input;

    return () => {
      disposed = true;
      if (ws) { try { ws.close(); } catch {} }
      input.dispose();
    };
  }, []);

  // ─── AUTO-GROWTH: coins → world objects ───
  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    let n = growthAppliedRef.current;
    for (let i = n; i < GROWTH_THRESHOLDS.length; i++) {
      if (coins >= GROWTH_THRESHOLDS[i].coins) {
        const { add } = GROWTH_THRESHOLDS[i];
        const rx = (Math.random() - 0.5) * 18;
        const rz = (Math.random() - 0.5) * 18;
        if (add === 'tree')   world.growSeed(rx, rz);
        if (add === 'flower') world.addFlower(rx, rz);
        if (add === 'animal') world.addAnimal(rx, rz);
        if (add === 'house')  world.addHouse(rx, rz);
        n = i + 1;
      } else break;
    }
    growthAppliedRef.current = n;
  }, [coins]);

  // ─── Level-up ───
  useEffect(() => {
    if (xp >= XP_PER_LEVEL * level && level < MAX_LEVEL) {
      setLevel(l => l + 1);
      showSuccess(`🎉 Level Up! Welcome to ${LEVEL_NAMES[Math.min(level, LEVEL_NAMES.length - 1)]}!`);
    }
  }, [xp, level]); // eslint-disable-line

  // ─── Unlock sidebar items ───
  useEffect(() => {
    setUnlockedItems(prev => prev.map(item =>
      !item.unlocked && item.cost && coins >= item.cost ? { ...item, unlocked: true } : item
    ));
  }, [coins]);

  // ─── Mini-game progress ───
  const handleGameClick = useCallback(() => {
    if (!activeGame) return;
    setGameProgress(prev => {
      const next = Math.min(prev + 20 + Math.floor(Math.random() * 10), 100);
      if (next >= 100) {
        const { reward } = activeGame;
        setCoins(c => c + reward.coins);
        setXp(x   => x + reward.xp);
        showSuccess(`${activeGame.emoji} Complete! +${reward.coins} 🪙  +${reward.xp} ⭐`);
        showSpeechBubble(`Great job! You finished ${activeGame.title}!`);
        setTimeout(() => {
          setActiveGame(null);
          setGameProgress(0);
          const basePath = location.pathname.replace('/active', '');
          navigate(`${basePath}?${searchParams.toString()}`);
        }, 1500);
      }
      return next;
    });
  }, [activeGame, showSuccess, showSpeechBubble, navigate, location.pathname, searchParams]);

  useEffect(() => {
    playActionRef.current = activeGame ? handleGameClick : null;
  }, [activeGame, handleGameClick]);

  const handlePlaceItem = (item) => {
    const world = worldRef.current;
    if (!world || !item.unlocked) return;
    const rx = (Math.random() - 0.5) * 14;
    const rz = (Math.random() - 0.5) * 14;
    if (item.name.includes('Tree') || item.name.includes('Grass')) world.growSeed(rx, rz);
    else if (item.name.includes('Flower')) world.addFlower(rx, rz);
    else if (['House','Castle','Bridge'].some(k => item.name.includes(k))) world.addHouse(rx, rz);
    else if (item.name.includes('Dragon')) world.addAnimal(rx, rz);
    else world.addFlower(rx, rz);
    showSpeechBubble(`${item.icon} ${item.name} placed!`);
  };

  // ─── Derived values (xp and skill) ───
  const xpForLevel       = xp - XP_PER_LEVEL * (level - 1);
  const xpPercent        = Math.min((xpForLevel / XP_PER_LEVEL) * 100, 100);
  const currentSkill     = searchParams.get('skill') || '';

  return (
    <>
      <canvas ref={canvasRef} id="game-canvas" />

      {/* Gaze cursor — follows eye position */}
      {gazePos && (
        <div
          className="gaze-cursor"
          style={{ left: gazePos.x, top: gazePos.y }}
        />
      )}

      <div className="overlay">

        {/* HUD */}
        {inGame && (
          <>
            <div className="hud">
              <div className="hud-badge coin-badge">🪙 {coins}</div>
              <div className="hud-badge level-badge">⭐ Lv.{level} — {LEVEL_NAMES[Math.min(level - 1, 4)]}</div>
              {currentSkill && <div className="hud-badge skill-badge">🧠 {currentSkill}</div>}
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${xpPercent}%` }} />
              <span className="progress-bar-text">XP: {xpForLevel}/{XP_PER_LEVEL}</span>
            </div>
          </>
        )}

        {/* Tap direction dialog */}
        {tapDialog && (
          <div className="tap-dialog" role="alert">
            <span className="tap-dialog-text">{tapDialog}</span>
          </div>
        )}

        {/* Toasts */}
        {speechBubble && <div className="speech-bubble" role="status" aria-live="polite">{speechBubble}</div>}
        {successMsg   && <div className="success-toast" role="alert">{successMsg}</div>}

        <Routes>
          <Route path="/" element={<WelcomeScreen onStart={() => navigate('/pick-input')} menuActionRef={menuActionRef} />} />

          <Route path="/pick-input" element={
            <InputSelector onConfirm={(inputType) => navigate(`/pick-skill/${inputType}`)} menuActionRef={menuActionRef} />
          } />

          <Route path="/pick-skill/:inputType" element={
            <SkillSelector onConfirm={(skillId) => {
              const paramInput = location.pathname.split('/')[2] || 'tap';
              navigate(`/play/${paramInput}?skill=${skillId}`);
            }} menuActionRef={menuActionRef} />
          } />

          <Route path="/play/:inputType" element={
            <GameLayout canvasRef={canvasRef} worldRef={worldRef} />
          }>
            <Route index element={
              <>
                <IslandSidebar items={unlockedItems} onPlace={handlePlaceItem} />
                <div className="start-game-area">
                  <button className="start-game-btn" onClick={() => navigate(`/play/${currentInputType}/games?${searchParams.toString()}`)}>
                    🎮 Start Game
                  </button>
                  <p className="start-game-hint">Tap your device or click to grow your island!</p>
                </div>
                <QuickChat onSend={handleQuickChat} />
              </>
            } />

            <Route path="games" element={
              <GameSelector
                selectedSkill={currentSkill}
                onSelectGame={(game) => {
                  setActiveGame(game);
                  setGameProgress(0);
                  navigate(`/play/${currentInputType}/active?${searchParams.toString()}`);
                }}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
              />
            } />

            <Route path="active" element={
              activeGame && (
                <div className="active-game-overlay">
                  <div className="active-game-card">
                    <button className="back-btn small" onClick={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}>← Back</button>
                    <span className="active-game-emoji">{activeGame.emoji}</span>
                    <h2>{activeGame.title}</h2>
                    <p>{activeGame.description}</p>
                    <div className="game-progress-bar">
                      <div className="game-progress-fill" style={{ width: `${gameProgress}%` }} />
                    </div>
                    <span className="game-progress-label">{gameProgress}% complete</span>
                    {gameProgress < 100
                      ? <button className="game-action-btn" onClick={handleGameClick}>{activeGame.emoji} Tap / Look / Wave to Play!</button>
                      : <div className="game-complete-msg">✅ Complete!</div>}
                    <div className="game-reward-preview">Reward: 🪙 {activeGame.reward.coins} &nbsp; ⭐ {activeGame.reward.xp} XP</div>
                  </div>
                </div>
              )
            } />
          </Route>
        </Routes>
      </div>
    </>
  );
}
