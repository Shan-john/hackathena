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

// ─── Auto-growth thresholds: at every N coins, add something to the island ───
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
// GAME LAYOUT: Handles Three.js & Input Init
// ==========================================
function GameLayout({ canvasRef, worldRef, inputRef, showSpeechBubble, playActionRef }) {
  const { inputType } = useParams();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (worldRef.current) return; // Already initialized

    const world = new IsometricWorld(canvasRef.current);
    worldRef.current = world;

    const input = new InputSystem();
    inputRef.current = input;

    // Only init the selected input type from the URL
    if (inputType === 'voice') input.initVoice();
    if (inputType === 'eye') input.initEyeTracking();
    if (inputType === 'gesture') input.initGestures();
    if (inputType === 'tap') {
      // Connect to the Python accelerometer WebSocket server (main.py must be running)
      input.initTapSensor('ws://localhost:8765');
    }
    // Mouse/click always works alongside the selected input

    input.onAction(({ action, source }) => {
      console.log(`[Game] Action: ${action} from ${source}`);
      if (playActionRef && playActionRef.current) {
        // Any recognized 'action' string (e.g. 'grow', 'wake', 'tap_right') drives game progress
        playActionRef.current();
      }
    });

    setTimeout(() => {
      showSpeechBubble("Welcome to your magical island!");
    }, 800);

    return () => {
      world.dispose();
      input.dispose();
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
  
  const canvasRef = useRef(null);
  const worldRef = useRef(null);
  const inputRef = useRef(null);
  const growthAppliedRef = useRef(0);
  const playActionRef = useRef(null);

  // ─── Global State ───
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  
  const [activeGame, setActiveGame] = useState(null);
  const [gameProgress, setGameProgress] = useState(0);
  const [speechBubble, setSpeechBubble] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const [unlockedItems, setUnlockedItems] = useState([
    { name: 'Grass Patch', icon: '🌿', unlocked: true },
    { name: 'Small Tree', icon: '🌱', unlocked: true },
    { name: 'Flower Bed', icon: '🌸', unlocked: false, cost: 30 },
    { name: 'Stone Path', icon: '🪨', unlocked: false, cost: 60 },
    { name: 'Little House', icon: '🏠', unlocked: false, cost: 100 },
    { name: 'Castle Tower', icon: '🏰', unlocked: false, cost: 200 },
    { name: 'Magic Bridge', icon: '🌉', unlocked: false, cost: 300 },
    { name: 'Dragon Friend', icon: '🐉', unlocked: false, cost: 500 },
  ]);

  // ─── AUTO-GROWTH ───
  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    let newApplied = growthAppliedRef.current;
    for (let i = newApplied; i < GROWTH_THRESHOLDS.length; i++) {
      if (coins >= GROWTH_THRESHOLDS[i].coins) {
        const t = GROWTH_THRESHOLDS[i];
        const rx = (Math.random() - 0.5) * 18;
        const rz = (Math.random() - 0.5) * 18;

        if (t.add === 'tree') world.growSeed(rx, rz);
        else if (t.add === 'flower') world.addFlower(rx, rz);
        else if (t.add === 'animal') world.addAnimal(rx, rz);
        else if (t.add === 'house') world.addHouse(rx, rz);
        
        newApplied = i + 1;
      } else break;
    }
    growthAppliedRef.current = newApplied;
  }, [coins]);

  // ─── Level up & Unlocks ───
  useEffect(() => {
    if (xp >= XP_PER_LEVEL * level && level < MAX_LEVEL) {
      setLevel(l => l + 1);
      showSuccess(`🎉 Level Up! Welcome to ${LEVEL_NAMES[Math.min(level, LEVEL_NAMES.length - 1)]}!`);
    }
  }, [xp, level]);

  useEffect(() => {
    setUnlockedItems(prev => prev.map(item => {
      if (!item.unlocked && item.cost && coins >= item.cost) {
        return { ...item, unlocked: true };
      }
      return item;
    }));
  }, [coins]);

  // ─── Helpers ───
  const showSpeechBubble = useCallback((text) => {
    setSpeechBubble(text);
    if (inputRef.current) inputRef.current.say(text);
    setTimeout(() => setSpeechBubble(null), 3000);
  }, []);

  const showSuccess = useCallback((text) => {
    setSuccessMsg(text);
    setTimeout(() => setSuccessMsg(null), 2500);
  }, []);

  const handleQuickChat = useCallback((msg) => showSpeechBubble(`${msg.emoji} ${msg.text}`), [showSpeechBubble]);

  // ─── PLAYING a mini-game ───
  const handleGameClick = useCallback(() => {
    if (!activeGame) return;

    setGameProgress(prev => {
      const next = Math.min(prev + 20 + Math.floor(Math.random() * 10), 100);
      if (next >= 100) {
        const reward = activeGame.reward;
        setCoins(c => c + reward.coins);
        setXp(x => x + reward.xp);
        showSuccess(`${activeGame.emoji} Complete! +${reward.coins} 🪙  +${reward.xp} ⭐`);
        showSpeechBubble(`Great job! You finished ${activeGame.title}!`);

        setTimeout(() => {
          setActiveGame(null);
          setGameProgress(0);
          
          // Go back to island view
          const currentUrl = location.pathname;
          const basePath = currentUrl.replace('/active', '');
          navigate(`${basePath}?${searchParams.toString()}`);
        }, 1500);
      }
      return next;
    });
  }, [activeGame, showSuccess, showSpeechBubble, navigate, location.pathname, searchParams]);

  // ─── ISLAND TAP: grow something directly when not in a mini-game ───
  const handleTapAction = useCallback(() => {
    // If a mini-game is active, drive that instead
    if (activeGame) {
      handleGameClick();
      return;
    }

    // Otherwise: directly grow the island + give 1 coin per tap
    const world = worldRef.current;
    if (!world) return;

    const rx = (Math.random() - 0.5) * 18;
    const rz = (Math.random() - 0.5) * 18;
    const pick = Math.random();
    if (pick < 0.45) {
      world.growSeed(rx, rz);
      showSpeechBubble('🌱 A new tree is growing!');
    } else if (pick < 0.75) {
      world.addFlower(rx, rz);
      showSpeechBubble('🌸 A flower bloomed!');
    } else if (pick < 0.9) {
      world.addAnimal(rx, rz);
      showSpeechBubble('🐰 An animal appeared!');
    } else {
      world.addHouse(rx, rz);
      showSpeechBubble('🏠 A little house appeared!');
    }

    // Each island tap earns 1 coin (slow but satisfying growth without mini-games)
    setCoins(c => c + 1);
  }, [activeGame, handleGameClick, worldRef, showSpeechBubble]);

  // Keep playActionRef pointing at the latest handler
  useEffect(() => {
    playActionRef.current = handleTapAction;
  }, [handleTapAction]);

  const handlePlaceItem = (item) => {
    const world = worldRef.current;
    if (!world || !item.unlocked) return;
    const rx = (Math.random() - 0.5) * 14;
    const rz = (Math.random() - 0.5) * 14;
    if (item.name.includes('Tree') || item.name.includes('Grass')) world.addTree(rx, rz);
    else if (item.name.includes('Flower')) world.addFlower(rx, rz);
    else if (item.name.includes('House') || item.name.includes('Castle') || item.name.includes('Bridge')) world.addHouse(rx, rz);
    else if (item.name.includes('Dragon')) world.addAnimal(rx, rz);
    else world.addFlower(rx, rz);
    showSpeechBubble(`${item.icon} ${item.name} placed!`);
  };

  // ─── UI Variables ───
  const xpForCurrentLevel = xp - (XP_PER_LEVEL * (level - 1));
  const xpProgressPercent = Math.min((xpForCurrentLevel / XP_PER_LEVEL) * 100, 100);
  
  // Extract input type from URL if present to determine input lock
  const pathParts = location.pathname.split('/');
  const inputLocked = location.pathname.startsWith('/play/');
  const currentInputType = inputLocked ? pathParts[2] : null;
  const inputLockStyle = inputLocked && currentInputType !== 'tap' ? {} : {};
  const currentSkill = searchParams.get('skill') || '';

  // ─── Render ───
  return (
    <>
      <canvas ref={canvasRef} id="game-canvas" />

      <div className="overlay" style={inputLockStyle}>
        
        {/* Persistent HUD & Toasts inside the Game View only */}
        {inputLocked && (
          <>
            <div className="hud">
              <div className="hud-badge coin-badge">🪙 {coins}</div>
              <div className="hud-badge level-badge">⭐ Lv.{level} — {LEVEL_NAMES[Math.min(level - 1, 4)]}</div>
              {currentSkill && <div className="hud-badge skill-badge">🧠 {currentSkill}</div>}
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${xpProgressPercent}%` }} />
              <span className="progress-bar-text">XP: {xpForCurrentLevel}/{XP_PER_LEVEL}</span>
            </div>

            {speechBubble && <div className="speech-bubble" role="status" aria-live="polite">{speechBubble}</div>}
            {successMsg && <div className="success-toast" role="alert">{successMsg}</div>}
          </>
        )}

        <Routes>
          {/* 1. Welcome Screen */}
          <Route path="/" element={<WelcomeScreen onStart={() => navigate('/pick-input')} />} />

          {/* 2. Choose Input */}
          <Route path="/pick-input" element={
            <InputSelector onConfirm={(inputType) => navigate(`/pick-skill/${inputType}`)} />
          } />

          {/* 3. Choose Skill (reads inputType from URL) */}
          <Route path="/pick-skill/:inputType" element={
             <SkillSelector onConfirm={(skillId) => {
               const paramInput = pathParts[2] || 'tap'; // e.g. /pick-skill/eye -> [ "", "pick-skill", "eye" ]
               navigate(`/play/${paramInput}?skill=${skillId}`);
             }} />
          } />

          {/* 4. Game Hub Layout (inits Three.js) */}
          <Route path="/play/:inputType" element={
            <GameLayout 
               canvasRef={canvasRef} 
               worldRef={worldRef} 
               inputRef={inputRef} 
               showSpeechBubble={showSpeechBubble} 
               playActionRef={playActionRef}
            />
          }>
            
            {/* 4a. Main Island View */}
            <Route index element={
              <>
                <IslandSidebar items={unlockedItems} onPlace={handlePlaceItem} />
                <div className="start-game-area">
                  <button className="start-game-btn" onClick={() => navigate(`games?${searchParams.toString()}`)}>
                    🎮 Start Game
                  </button>
                  <p className="start-game-hint">Play mini-games to earn coins & grow your island!</p>
                </div>
                <QuickChat onSend={handleQuickChat} />
              </>
            } />

            {/* 4b. Game Selection Screen */}
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

            {/* 4c. Active Game Playing View */}
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

                    {gameProgress < 100 ? (
                      <button className="game-action-btn" onClick={handleGameClick}>
                        {activeGame.emoji} Tap / Look / Wave to Play!
                      </button>
                    ) : (
                      <div className="game-complete-msg">✅ Complete!</div>
                    )}

                    <div className="game-reward-preview">Reward: 🪙 {activeGame.reward.coins} coins &nbsp; ⭐ {activeGame.reward.xp} XP</div>
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
