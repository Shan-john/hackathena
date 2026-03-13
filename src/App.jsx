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
import GestureCursor from './components/GestureCursor.jsx';
import CarRacingGame from './components/CarRacingGame.jsx';
import FishTraceGame from './components/FishTraceGame.jsx';
import MemoryTestGame from './components/MemoryTestGame.jsx';
import CountingBoxesGame from './components/CountingBoxesGame.jsx';
import BodyGame from './components/BodyGame.jsx';

// Auto-growth removed in favor of manual store placement
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

    // Dispatch global event when troops mine coins
    world.onCoinGenerated = (amount) => {
      window.dispatchEvent(new CustomEvent('troop-coin-earned', { detail: amount }));
    };

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

  // Persistent selected mode — stays active even outside game routes
  const [selectedMode, setSelectedMode] = useState(null);

  const canvasRef       = useRef(null);
  const worldRef        = useRef(null);
  const inputRef        = useRef(null);
  const growthAppliedRef = useRef(0);
  const playActionRef   = useRef(null);
  const menuActionRef   = useRef(null);
  const gestureLockRef  = useRef(null);
  const gestureLockTimerRef = useRef(null);
  const wsRef           = useRef(null);

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

  // ─── Clash of Clans Style Store ───
  const [storeItems] = useState([
    { name: 'Flower',       icon: '🌸', cost: 10 },
    { name: 'Tree',         icon: '🌲', cost: 25 },
    { name: 'Wall',         icon: '🧱', cost: 50 },
    { name: 'Cannon',       icon: '💣', cost: 150 },
    { name: 'Gold Mine',    icon: '💰', cost: 300 },
    { name: 'Archer Tower', icon: '🏹', cost: 500 },
    { name: 'House',        icon: '🏠', cost: 800 },
    { name: 'Dragon',       icon: '🐉', cost: 1500 },
  ]);

  const [placingItem, setPlacingItem] = useState(null);

  // Hook up placement callback
  useEffect(() => {
    if (worldRef.current) {
      worldRef.current.onPlacementComplete = (itemName) => {
        // Find cost and subtract
        const item = storeItems.find(i => i.name === itemName);
        if (item) setCoins(c => Math.max(0, c - item.cost));
        setPlacingItem(null);
        if (worldRef.current) worldRef.current.setPlacementMode(null);
      };
    }
  }, [storeItems]);

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
  cbRef.current = { showSpeechBubble, handleTapDetected, handleCoinEarned, currentInputType, inGame, selectedMode, location, placingItem };

  // ─── Forward gesture cursor position to ghost mesh for placement ───
  useEffect(() => {
    function onGesturePos(e) {
      if (e.data?.type === 'gesture-pos' && worldRef.current && worldRef.current.placementItem) {
        worldRef.current.updateGhostFromScreen(e.data.x, e.data.y);
      }
    }
    window.addEventListener('message', onGesturePos);
    return () => window.removeEventListener('message', onGesturePos);
  }, []);

  // ─── Forward gaze position to ghost mesh for eye-tracking placement ───
  useEffect(() => {
    if (gazePos && worldRef.current && worldRef.current.placementItem) {
      worldRef.current.updateGhostFromScreen(gazePos.x, gazePos.y);
    }
  }, [gazePos]);

  // ─── Forward current level to world for rendering differences ───
  useEffect(() => {
    if (worldRef.current) {
      worldRef.current.setLevel(level);
    }
  }, [level]);

  // ─── Listen for Passive Troop Coins ───
  useEffect(() => {
    function onTroopCoin(e) {
      setCoins(c => c + e.detail);
      // Create a tiny floating coin element in the DOM at a random spot for flavor
      const el = document.createElement('div');
      el.innerText = `+${e.detail} 🪙`;
      el.style.position = 'fixed';
      el.style.left = '50%';
      el.style.top = '50%';
      el.style.transform = `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px)`;
      el.style.color = '#ffd700';
      el.style.fontWeight = 'bold';
      el.style.fontSize = '1.2rem';
      el.style.pointerEvents = 'none';
      el.style.zIndex = '9999';
      el.style.animation = 'toastPop 0.5s ease-out, bubbleFade 2s ease-in-out forwards';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
    window.addEventListener('troop-coin-earned', onTroopCoin);
    return () => window.removeEventListener('troop-coin-earned', onTroopCoin);
  }, []);

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
        console.log('[WS] ✅ Connected to Python sensor server');
        wsRef.current = ws;
        // Send current mode on connect/reconnect
        const cb = cbRef.current;
        const mode = cb.currentInputType || cb.selectedMode;
        if (mode) {
          ws.send(JSON.stringify({ set_mode: mode }));
          console.log(`[WS] Sent set_mode on connect: ${mode}`);
        }
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

        // ─── Event Handling (Taps & Blinks & Gestures) ───
        const isBlink   = data.event === 'BLINK' || data.event === 'DOUBLE_BLINK';
        const isTap     = data.event === 'LEFT_TAP' || data.event === 'RIGHT_TAP';
        const isGesture = data.event === 'LEFT_CLICK' || data.event === 'RIGHT_CLICK' || (data.event && data.event.startsWith('GESTURE:'));
        const evtBaseType = isTap ? 'tap' : (isBlink ? 'eye' : (isGesture ? 'gesture' : null));

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
        } else if (data.event === 'LEFT_CLICK') {
          cb.handleTapDetected?.('✊ FIST CLICK');
        } else if (data.event === 'RIGHT_CLICK') {
          cb.handleTapDetected?.('✌️ VICTORY CLICK');
        } else if (isGesture) {
          cb.handleTapDetected?.(`🖐️ ${data.event}`);
        }

        // ── Simulate REAL mouse click at gaze position for blinks (EYE MODE ONLY) ──
        if (isBlink && (cb.currentInputType === 'eye' || cb.selectedMode === 'eye')) {
          const gaze = gazeRef.current;
          if (gaze) {
            const el = document.elementFromPoint(gaze.x, gaze.y);
            if (el) {
              // Find the clickable ancestor
              const clickable = el.closest('button') ||
                                el.closest('a') ||
                                el.closest('.input-card') ||
                                el.closest('.skill-card') ||
                                el.closest('.game-tile') ||
                                el.closest('.sidebar-item') ||
                                el.closest('.game-action-btn') ||
                                el;

              console.log('[Eye] Blink click on:', clickable.tagName, clickable.className);

              if (data.event === 'BLINK') {
                clickable.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: gaze.x, clientY: gaze.y }));
                clickable.click();
              } else {
                clickable.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true, clientX: gaze.x, clientY: gaze.y }));
                clickable.click();
              }

              // Flash the gaze cursor on click
              const dot = document.querySelector('.gaze-cursor');
              if (dot) {
                dot.style.transform = 'scale(1.8)';
                dot.style.boxShadow = '0 0 30px rgba(59,130,246,1)';
                setTimeout(() => {
                  dot.style.transform = 'scale(1)';
                  dot.style.boxShadow = '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.2)';
                }, 300);
              }
            }
          }
        }

        // ── Menu Navigation ──
        if (menuActionRef.current) {
          if (data.event === 'LEFT_TAP' || data.event === 'BLINK' || data.event === 'LEFT_CLICK') {
            menuActionRef.current('LEFT_TAP');   // confirm
          } else if (data.event === 'RIGHT_TAP' || data.event === 'DOUBLE_BLINK' || data.event === 'RIGHT_CLICK') {
            menuActionRef.current('RIGHT_TAP');  // cycle
          }
          return;
        }

        // ── Gameplay Inputs ──
        // Tap is ALWAYS accepted. Other inputs only if their mode is selected.
        const inputType = cb.currentInputType || cb.selectedMode;
        const acceptTap     = isTap;  // taps always work
        const acceptBlink   = isBlink && inputType === 'eye';
        const acceptGesture = isGesture && inputType === 'gesture';

        if (!acceptTap && !acceptBlink && !acceptGesture) return;

        // Advance Mini-game
        if (playActionRef.current) {
          playActionRef.current();
          return;
        }

        // ── Car Racing control forwarding ──
        if (cb.location && cb.location.pathname.includes('/car-racing')) {
          // Eye mode: blink = click at gaze position (for car selection & in-game)
          // Head steering is handled continuously in CarRacingGame via gazePos prop
          if (isBlink) {
            const gaze = gazeRef.current;
            if (gaze) {
              window.postMessage({ type: 'car-racing-blink-click', x: gaze.x, y: gaze.y }, '*');
            }
          }
          // Tap / gesture → directional controls
          else if (data.event === 'LEFT_TAP' || data.event === 'LEFT_CLICK') {
            window.postMessage({ type: 'car-racing-control', action: 'left' }, '*');
          } else if (data.event === 'RIGHT_TAP' || data.event === 'RIGHT_CLICK') {
            window.postMessage({ type: 'car-racing-control', action: 'right' }, '*');
          }
          return;
        }

        // ── Counting Boxes control forwarding ──
        if (cb.location && cb.location.pathname.includes('/counting-boxes')) {
          if (data.event === 'LEFT_TAP' || data.event === 'LEFT_CLICK') {
            window.postMessage({ type: 'counting-boxes-increase' }, '*');
          } else if (data.event === 'RIGHT_TAP' || data.event === 'RIGHT_CLICK') {
            window.postMessage({ type: 'counting-boxes-decrease' }, '*');
          }
          return;
        }

        // ── Placement mode: gesture/tap/blink triggers placeAtGhost ──
        const world = worldRef.current;
        if (cb.placingItem && world && world.placementItem) {
          const placed = world.placeAtGhost();
          if (placed) {
            cb.showSpeechBubble?.(`✅ ${cb.placingItem} placed!`);
          }
          return;
        }
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

  // ─── Persist selected mode & send to Python backend ───
  useEffect(() => {
    if (currentInputType) {
      setSelectedMode(currentInputType);
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ set_mode: currentInputType }));
        console.log(`[Mode] Sent set_mode: ${currentInputType}`);
      }
    }
  }, [currentInputType]);


  // ─── Level-up ───
  useEffect(() => {
    if (xp >= XP_PER_LEVEL * level && level < MAX_LEVEL) {
      setLevel(l => l + 1);
      showSuccess(`🎉 Level Up! Welcome to ${LEVEL_NAMES[Math.min(level, LEVEL_NAMES.length - 1)]}!`);
    }
  }, [xp, level]); // eslint-disable-line


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
    if (!world || coins < item.cost) return;

    if (placingItem === item.name) {
      // Cancel placement
      setPlacingItem(null);
      world.setPlacementMode(null);
      showSpeechBubble('Placement cancelled');
    } else {
      // Start placement
      setPlacingItem(item.name);
      world.setPlacementMode(item.name);
      showSpeechBubble(`Placing ${item.name}... click anywhere to build!`);
    }
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
            <InputSelector
              onConfirm={(inputType) => navigate(`/pick-skill/${inputType}`)}
              menuActionRef={menuActionRef}
              onModeSelected={(mode) => {
                setSelectedMode(mode);
                if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                  wsRef.current.send(JSON.stringify({ set_mode: mode }));
                  console.log(`[Mode] Immediate set_mode: ${mode}`);
                }
              }}
            />
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
                <IslandSidebar items={storeItems} onPlace={handlePlaceItem} coins={coins} placingItem={placingItem} />
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
                inputMode={currentInputType || selectedMode || 'tap'}
                onSelectGame={(game) => {
                  if (game.isExternal) {
                    if (game.id === 'car-racing' || game.id === 'fish-trace' || game.id === 'memory-test' || game.id === 'counting-boxes' || game.id === 'dody-game') {
                      navigate(`/play/${currentInputType}/${game.id}?${searchParams.toString()}`);
                      return;
                    }
                  }
                  setActiveGame(game);
                  setGameProgress(0);
                  navigate(`/play/${currentInputType}/active?${searchParams.toString()}`);
                }}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
              />
            } />

            <Route path="car-racing" element={
              <CarRacingGame
                inputMode={currentInputType || selectedMode || 'tap'}
                gazePos={gazePos}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
                onCoinsEarned={(earned) => {
                  setCoins(c => c + earned);
                  setXp(x => x + Math.floor(earned / 2));
                  showSuccess(`🏎️ Race complete! +${earned} 🪙  +${Math.floor(earned / 2)} ⭐`);
                  showSpeechBubble('Great race! Your island is growing! 🌴');
                }}
              />
            } />

            <Route path="fish-trace" element={
              <FishTraceGame
                inputMode={currentInputType || selectedMode || 'tap'}
                gazePos={gazePos}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
                onCoinsEarned={(earned) => {
                  setCoins(c => c + earned);
                  setXp(x => x + Math.floor(earned / 2));
                  showSuccess(`🐠 Traced successfully! +${earned} 🪙  +${Math.floor(earned / 2)} ⭐`);
                  showSpeechBubble('Wow, you tracked the glowing fish! 🌊');
                }}
              />
            } />

            <Route path="memory-test" element={
              <MemoryTestGame
                inputMode={currentInputType || selectedMode || 'tap'}
                gazePos={gazePos}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
                onCoinsEarned={(earned) => {
                  setCoins(c => c + earned);
                  setXp(x => x + Math.floor(earned / 2));
                  showSuccess(`🧠 Memory Test complete! +${earned} 🪙  +${Math.floor(earned / 2)} ⭐`);
                  showSpeechBubble('Your memory is amazing! 🌟');
                }}
              />
            } />

            <Route path="counting-boxes" element={
              <CountingBoxesGame
                inputMode={currentInputType || selectedMode || 'tap'}
                gazePos={gazePos}
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
                onCoinsEarned={(earned) => {
                  setCoins(c => c + earned);
                  setXp(x => x + Math.floor(earned / 2));
                  showSuccess(`📦 Counting Boxes complete! +${earned} 🪙  +${Math.floor(earned / 2)} ⭐`);
                  showSpeechBubble('Wow, you observe so fast! ⏱️');
                }}
              />
            } />

            <Route path="dody-game" element={
              <BodyGame
                onBack={() => navigate(`/play/${currentInputType}?${searchParams.toString()}`)}
                onCoinsEarned={(earned, isLive) => {
                  if (isLive) {
                    setCoins(c => c + earned);
                    setXp(x => x + Math.floor(earned / 2));
                  } else {
                    showSuccess(`🤸 Dody Game complete! You scored exactly ${earned} 🪙 and ${Math.floor(earned / 2)} ⭐`);
                    showSpeechBubble('Great moves! Stay active! ⚡');
                  }
                }}
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

      {/* Hand gesture virtual mouse — active when gesture input is selected */}
      {selectedMode === 'gesture' && <GestureCursor />}

      {/* Eye gaze cursor — visible dot that follows eye position */}
      {selectedMode === 'eye' && gazePos && (
        <div
          className="gaze-cursor"
          style={{
            position: 'fixed',
            left: gazePos.x - 15,
            top: gazePos.y - 15,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.3) 60%, transparent 100%)',
            border: '2px solid rgba(59,130,246,0.8)',
            boxShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.2)',
            pointerEvents: 'none',
            zIndex: 10000,
            transition: 'left 0.08s ease-out, top 0.08s ease-out',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8, height: 8,
            borderRadius: '50%',
            background: '#fff',
          }} />
        </div>
      )}

      {/* Eye mode indicator */}
      {selectedMode === 'eye' && (
        <div style={{
          position: 'fixed', bottom: 20, left: 20, zIndex: 999,
          background: 'rgba(59, 130, 246, 0.9)', color: '#fff',
          padding: '10px 18px', borderRadius: '16px',
          fontSize: '0.9rem', fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(59,130,246,0.4)',
        }}>👁️ Eye Tracking Active — Blink to click</div>
      )}
    </>
  );
}
