import React, { useRef, useEffect, useState, useCallback } from 'react';
import { IsometricWorld } from './world/IsometricWorld.js';
import { InputSystem } from './input/InputSystem.js';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import QuickChat from './components/QuickChat.jsx';
import InputSelector from './components/InputSelector.jsx';
import SkillSelector from './components/SkillSelector.jsx';
import IslandSidebar from './components/IslandSidebar.jsx';
import GameSelector from './components/GameSelector.jsx';

// ─── Game Phases ───
const PHASE = {
  WELCOME: 'welcome',
  INPUT_SELECT: 'input_select',
  SKILL_SELECT: 'skill_select',
  ISLAND_VIEW: 'island_view',      // Main island view with "Start Game" button
  GAME_SELECT: 'game_select',      // Pick a mini-game
  PLAYING_GAME: 'playing_game',    // Actively playing a mini-game
};

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

export default function App() {
  const canvasRef = useRef(null);
  const worldRef = useRef(null);
  const inputRef = useRef(null);
  const growthAppliedRef = useRef(0); // Track how many thresholds we've applied

  // ─── State ───
  const [phase, setPhase] = useState(PHASE.WELCOME);
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeGame, setActiveGame] = useState(null);
  const [gameProgress, setGameProgress] = useState(0);     // 0–100 for current mini-game
  const [speechBubble, setSpeechBubble] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [inputLocked, setInputLocked] = useState(false);

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

  // ─── Initialize Three.js world (starts when we enter island view) ───
  useEffect(() => {
    if (phase !== PHASE.ISLAND_VIEW && phase !== PHASE.GAME_SELECT && phase !== PHASE.PLAYING_GAME) return;
    if (!canvasRef.current) return;
    if (worldRef.current) return; // Already initialized

    const world = new IsometricWorld(canvasRef.current);
    worldRef.current = world;

    // Initialize input system
    const input = new InputSystem();
    inputRef.current = input;

    // Only init the selected input types
    if (selectedInputs.includes('voice')) input.initVoice();
    if (selectedInputs.includes('eye')) input.initEyeTracking();
    if (selectedInputs.includes('gesture')) input.initGestures();
    // Mouse/tap always works alongside selected inputs

    input.onAction(({ action, source }) => {
      console.log(`[Game] Action: ${action} from ${source}`);
    });

    setInputLocked(true);

    return () => {
      world.dispose();
      input.dispose();
      worldRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, selectedInputs]);

  // ─── AUTO-GROWTH: Island grows as coins increase ───
  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    let newApplied = growthAppliedRef.current;

    for (let i = newApplied; i < GROWTH_THRESHOLDS.length; i++) {
      if (coins >= GROWTH_THRESHOLDS[i].coins) {
        const t = GROWTH_THRESHOLDS[i];
        const rx = (Math.random() - 0.5) * 18;
        const rz = (Math.random() - 0.5) * 18;

        switch (t.add) {
          case 'tree':
            world.growSeed(rx, rz);
            break;
          case 'flower':
            world.addFlower(rx, rz);
            break;
          case 'animal':
            world.addAnimal(rx, rz);
            break;
          case 'house':
            world.addHouse(rx, rz);
            break;
          default:
            break;
        }
        newApplied = i + 1;
      } else {
        break;
      }
    }

    growthAppliedRef.current = newApplied;
  }, [coins]);

  // ─── Level up when XP reaches threshold ───
  useEffect(() => {
    if (xp >= XP_PER_LEVEL * level && level < MAX_LEVEL) {
      setLevel(l => l + 1);
      showSuccess(`🎉 Level Up! Welcome to ${LEVEL_NAMES[Math.min(level, LEVEL_NAMES.length - 1)]}!`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xp]);

  // ─── Unlock sidebar items by coin thresholds ───
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

  // ─── PLAYING a mini-game: simulate progress with clicks/interactions ───
  const handleGameClick = useCallback(() => {
    if (!activeGame) return;

    setGameProgress(prev => {
      const next = Math.min(prev + 20 + Math.floor(Math.random() * 10), 100);

      if (next >= 100) {
        // Game complete!
        const reward = activeGame.reward;
        setCoins(c => c + reward.coins);
        setXp(x => x + reward.xp);
        showSuccess(`${activeGame.emoji} Complete! +${reward.coins} 🪙  +${reward.xp} ⭐`);
        showSpeechBubble(`Great job! You finished ${activeGame.title}!`);

        // Return to island after delay
        setTimeout(() => {
          setActiveGame(null);
          setGameProgress(0);
          setPhase(PHASE.ISLAND_VIEW);
        }, 1500);
      }

      return next;
    });
  }, [activeGame, showSuccess, showSpeechBubble]);

  // ─── Phase handlers ───
  const handleStart = () => setPhase(PHASE.INPUT_SELECT);

  const handleInputConfirm = (inputs) => {
    setSelectedInputs(inputs);
    setPhase(PHASE.SKILL_SELECT);
  };

  const handleSkillConfirm = (skill) => {
    setSelectedSkill(skill);
    setPhase(PHASE.ISLAND_VIEW);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.say("Welcome to your magical island!");
      }
    }, 800);
  };

  const handleStartGameSelect = () => setPhase(PHASE.GAME_SELECT);

  const handleSelectGame = (game) => {
    setActiveGame(game);
    setGameProgress(0);
    setPhase(PHASE.PLAYING_GAME);
  };

  const handleBackToIsland = () => {
    setActiveGame(null);
    setGameProgress(0);
    setPhase(PHASE.ISLAND_VIEW);
  };

  const handleQuickChat = useCallback((msg) => {
    showSpeechBubble(`${msg.emoji} ${msg.text}`);
  }, [showSpeechBubble]);

  // ─── Input lock: disable mouse/touch events on most elements if not using 'tap' ───
  const inputLockStyle = inputLocked && !selectedInputs.includes('tap')
    ? { /* We still allow mouse because the user said "and mouse" */ }
    : {};

  // ─── Compute XP progress % within current level ───
  const xpForCurrentLevel = xp - (XP_PER_LEVEL * (level - 1));
  const xpProgressPercent = Math.min((xpForCurrentLevel / XP_PER_LEVEL) * 100, 100);

  // ─── Render ───
  return (
    <>
      {/* Three.js Canvas (always present in background) */}
      <canvas ref={canvasRef} id="game-canvas" />

      <div className="overlay" style={inputLockStyle}>
        {/* Phase: Welcome */}
        {phase === PHASE.WELCOME && <WelcomeScreen onStart={handleStart} />}

        {/* Phase: Input Selection */}
        {phase === PHASE.INPUT_SELECT && <InputSelector onConfirm={handleInputConfirm} />}

        {/* Phase: Skill Selection */}
        {phase === PHASE.SKILL_SELECT && <SkillSelector onConfirm={handleSkillConfirm} />}

        {/* Phase: Island View (main hub) */}
        {phase === PHASE.ISLAND_VIEW && (
          <>
            {/* HUD */}
            <div className="hud">
              <div className="hud-badge coin-badge">🪙 {coins}</div>
              <div className="hud-badge level-badge">⭐ Lv.{level} — {LEVEL_NAMES[level - 1]}</div>
              <div className="hud-badge skill-badge">🧠 {selectedSkill}</div>
            </div>

            {/* XP Progress Bar */}
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${xpProgressPercent}%` }} />
              <span className="progress-bar-text">XP: {xpForCurrentLevel}/{XP_PER_LEVEL}</span>
            </div>

            {/* Sidebar */}
            <IslandSidebar items={unlockedItems} onPlace={(item) => {
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
            }} />

            {/* START GAME button */}
            <div className="start-game-area">
              <button className="start-game-btn" onClick={handleStartGameSelect}>
                🎮 Start Game
              </button>
              <p className="start-game-hint">Play mini-games to earn coins & grow your island!</p>
            </div>

            {/* Speech Bubble */}
            {speechBubble && (
              <div className="speech-bubble" role="status" aria-live="polite">{speechBubble}</div>
            )}
            {successMsg && (
              <div className="success-toast" role="alert">{successMsg}</div>
            )}

            {/* Quick Chat */}
            <QuickChat onSend={handleQuickChat} />
          </>
        )}

        {/* Phase: Game Selection */}
        {phase === PHASE.GAME_SELECT && (
          <GameSelector
            onSelectGame={handleSelectGame}
            onBack={handleBackToIsland}
            selectedSkill={selectedSkill}
          />
        )}

        {/* Phase: Playing a mini-game */}
        {phase === PHASE.PLAYING_GAME && activeGame && (
          <>
            {/* HUD stays */}
            <div className="hud">
              <div className="hud-badge coin-badge">🪙 {coins}</div>
              <div className="hud-badge level-badge">⭐ Lv.{level}</div>
            </div>

            {/* Game play area */}
            <div className="active-game-overlay">
              <div className="active-game-card">
                <button className="back-btn small" onClick={handleBackToIsland}>← Back</button>
                <span className="active-game-emoji">{activeGame.emoji}</span>
                <h2>{activeGame.title}</h2>
                <p>{activeGame.description}</p>

                {/* Progress bar for this game */}
                <div className="game-progress-bar">
                  <div className="game-progress-fill" style={{ width: `${gameProgress}%` }} />
                </div>
                <span className="game-progress-label">{gameProgress}% complete</span>

                {/* Large interaction button — the main game action */}
                {gameProgress < 100 ? (
                  <button className="game-action-btn" onClick={handleGameClick}>
                    {activeGame.emoji} Tap / Look / Wave to Play!
                  </button>
                ) : (
                  <div className="game-complete-msg">
                    ✅ Complete! +{activeGame.reward.coins} 🪙 +{activeGame.reward.xp} ⭐
                  </div>
                )}

                <div className="game-reward-preview">
                  Reward: 🪙 {activeGame.reward.coins} coins &nbsp; ⭐ {activeGame.reward.xp} XP
                </div>
              </div>
            </div>

            {/* Speech Bubble / Success */}
            {speechBubble && (
              <div className="speech-bubble" role="status" aria-live="polite">{speechBubble}</div>
            )}
            {successMsg && (
              <div className="success-toast" role="alert">{successMsg}</div>
            )}
          </>
        )}
      </div>
    </>
  );
}
