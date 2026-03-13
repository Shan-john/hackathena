import React, { useState, useEffect, useRef } from 'react';
import './VoiceRunnerGame.css';

const BLOCKS = [1000, 1500, 2000];

const charWidth = 100;
const charHeight = 100;
const charOffset = 150;

const blockWidth = 80;
const blockHeight = 150;
const blockSpacing = 500;
const JUMP_VELOCITY = 1.4;

let highscore = 0;
if (typeof localStorage !== 'undefined' && localStorage.highscore) {
  highscore = parseInt(localStorage.highscore, 10);
}

// Emulates the previous class-like CreateEngine approach but updated for React best practices
function CreateEngine(setState, onWinCallback) {
  this.score = 0;
  this.game = 'start';
  this.stage = 0;
  this.jump = false;
  this.direction = 'up';
  this.position = 0;

  // Faster pacing & physics tuning
  this.runSpeed = 4; 
  this.jumpSpeed = 6;
  this.max = 350; // High enough to clear blocks easily
  this.blocks = [1200, 2200, 3200]; // First block starts closer!
  this.blockSpacingPx = 1000;
  
  this.animationFrame = null;

  const checkBlocks = () => {
    const charXPos = this.stage + charOffset;
    const charYPos = this.position;

    // Remove block if off-screen, add new one, increment score
    if (this.blocks[0] + blockWidth < this.stage) {
      this.blocks.shift();
      this.blocks.push(this.blocks[this.blocks.length - 1] + this.blockSpacingPx);
      this.score += 1;
      
      // If we reach 10 points, trigger win condition in HackAthena
      if (this.score === 10) {
        if (onWinCallback) onWinCallback();
      }
    }

    // Collision detection
    this.blocks.forEach((block) => {
      if (
        charXPos + charWidth >= block &&
        charYPos <= blockHeight &&
        charYPos + charHeight >= 0 &&
        charXPos <= block + blockWidth
      ) {
        this.game = 'fail';
      }
    });
  };

  const doJump = () => {
    if (!this.jump) {
      this.position = 0;
      this.direction = 'up';
      return;
    }

    if (this.direction === 'down' && this.position <= 0) {
      this.jump = false;
      this.position = 0;
      this.direction = 'up';
      return;
    }

    if (this.position >= this.max) this.direction = 'down';

    if (this.direction === 'up') {
      this.position += this.jumpSpeed;
    } else {
      this.position -= this.jumpSpeed;
    }
  };

  this.repaint = () => {
    this.stage += this.runSpeed;
    checkBlocks();
    doJump();

    setState({
      score: this.score,
      stage: this.stage,
      jump: this.position,
      blocks: this.blocks,
      status: this.game,
    });

    if (this.game !== 'start') {
      this.game = 'start';
      this.stage = 0;
      this.jump = false;
      this.direction = 'up';
      this.position = 0;
      return null;
    }

    this.animationFrame = requestAnimationFrame(this.repaint);
  };

  this.stop = () => {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  };

  this.repaint();
  return {
    jump: () => {
      if (!this.jump) this.jump = true;
    },
    stop: this.stop
  };
}

const initialState = {
  score: 0,
  stage: 0,
  jump: 0,
  blocks: [],
  status: 'start',
};

export default function VoiceRunnerGame({ onWin, onBack, gameTitle }) {
  const [gameState, setGameState] = useState(initialState);
  const [start, setStart] = useState(false);
  const [started, setStarted] = useState(false);
  const [engine, setEngine] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [modelLoading, setModelLoading] = useState(true);

  // Jump Action triggered by either spacebar or voice
  const triggerJump = () => {
    if (!started && !start && isOpen) {
      setStart(true);
      setIsOpen(false);
    }
    if (engine) engine.jump();
  };

  // Keyboard
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        triggerJump();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [started, start, isOpen, engine]);

  // Voice setup
  useEffect(() => {
    let mounted = true;
    setModelLoading(false); // Model loading is now managed globally by App.jsx

    const handleVoiceCmd = (e) => {
      const word = e.detail;
      // Accept 'up' or 'left' (since left tap maps to select/jump)
      if (word === 'up' || word === 'left') {
        if (mounted) triggerJump();
      }
    };

    window.addEventListener('voice-command', handleVoiceCmd);

    return () => {
      mounted = false;
      window.removeEventListener('voice-command', handleVoiceCmd);
      if (engine) engine.stop();
    };
  }, [started, start, isOpen, engine]); // Include exact closure references

  // Engine lifecycle
  useEffect(() => {
    if (start) {
      setStarted(true);
      setStart(false);
      const newEngine = new CreateEngine(
        state => setGameState(state),
        () => onWin({ coins: 30, xp: 20 }) // Triggers when score hits 10
      );
      setEngine(newEngine);
    }

    if (gameState.status === 'fail' && started) {
      setStarted(false);
      setStart(false);
      setIsOpen(true);
      if (engine) engine.stop();

      if (gameState.score > highscore) {
        highscore = gameState.score;
        if (typeof localStorage !== 'undefined') localStorage.highscore = highscore;
      }
    }
  }, [start, gameState.status, gameState.score, started, onWin]);

  return (
    <div className="voice-runner-wrapper">
      <div className="voice-runner-header">
        <button className="voice-runner-back-btn" onClick={onBack}>← Back to Menu</button>
        <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{gameTitle || 'Voice Runner'}</span>
      </div>

      <div className="voice-runner-container">
        {isOpen && (
          <div className="voice-runner-modal-overlay">
            <div className="voice-runner-modal">
              {modelLoading ? (
                <>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>⏳</div>
                  <div>Loading AI Voice Model...</div>
                </>
              ) : (
                <>
                  {gameState.score > 0 ? (
                    <div>Your score: {gameState.score}! Try again?</div>
                  ) : (
                    <div>Say "<span style={{color: '#EF476F'}}>UP</span>" or hit Spacebar to jump!</div>
                  )}
                  <div className="voice-runner-status">
                    Score 10 to win the HackAthena reward!
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="voice-runner-scoreboard">
          <div className="voice-runner-score">{gameState.score}</div>
          {highscore > 0 && <div className="voice-runner-highscore">🏆 High Score: {highscore}</div>}
        </div>

        <div
          className="voice-runner-stage"
          style={{ transform: `translateX(-${gameState.stage}px)` }}
        >
          <div
            className="voice-runner-character"
            style={{
              transform: `translate(${gameState.stage + charOffset}px, -${gameState.jump}px)`,
              height: charHeight,
              width: charWidth,
            }}
          >
            🏃
          </div>
          {gameState.blocks.map(block => (
            <div
              className="voice-runner-block"
              key={block.toString()}
              style={{
                transform: `translateX(${block}px)`,
                height: blockHeight,
                width: blockWidth,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
