import React, { useState } from 'react';

const GAMES = [
  {
    id: 'grow',
    emoji: '🌱',
    title: 'Grow the Garden',
    description: 'Nurture seeds into beautiful trees and flowers!',
    reward: { coins: 20, xp: 15 },
    skill: 'cognitive',
  },
  {
    id: 'wake',
    emoji: '🐰',
    title: 'Wake the Animal',
    description: 'Gently wake sleeping forest friends!',
    reward: { coins: 18, xp: 12 },
    skill: 'social-emotional',
  },
  {
    id: 'catch',
    emoji: '✨',
    title: 'Catch the Light',
    description: 'Collect glowing orbs drifting through the sky!',
    reward: { coins: 22, xp: 18 },
    skill: 'fine-motor',
  },
  {
    id: 'sun',
    emoji: '🌅',
    title: 'Move the Sun',
    description: 'Change the sky from day to night and back!',
    reward: { coins: 15, xp: 10 },
    skill: 'gross-motor',
  },
  {
    id: 'color',
    emoji: '🎨',
    title: 'Color the World',
    description: 'Paint the flowers and trees with magical colors!',
    reward: { coins: 25, xp: 20 },
    skill: 'cognitive',
  },
  {
    id: 'music',
    emoji: '🎵',
    title: 'Forest Melody',
    description: 'Tap the mushrooms to play a gentle song!',
    reward: { coins: 20, xp: 15 },
    skill: 'fine-motor',
  },
];

export default function GameSelector({ onSelectGame, onBack, selectedSkill }) {
  const [hoveredId, setHoveredId] = useState(null);

  // If a skill is selected, highlight matching games
  const getRelevance = (game) => {
    if (!selectedSkill) return true;
    const skillLower = selectedSkill.toLowerCase();
    return game.skill.includes(skillLower) || 
           skillLower.includes('cognitive') && game.skill === 'cognitive' ||
           skillLower.includes('motor') && game.skill.includes('motor') ||
           skillLower.includes('social') && game.skill === 'social-emotional';
  };

  return (
    <div className="game-selector-screen">
      <div className="game-selector-card">
        <button className="back-btn" onClick={onBack} aria-label="Go back">
          ← Back
        </button>
        <h1>🎮 Choose a Mini-Game</h1>
        <p>Pick a game to play and earn coins & XP!</p>

        <div className="game-grid">
          {GAMES.map(game => (
            <button
              key={game.id}
              className={`game-tile ${getRelevance(game) ? 'relevant' : 'dim'} ${hoveredId === game.id ? 'hovered' : ''}`}
              onClick={() => onSelectGame(game)}
              onMouseEnter={() => setHoveredId(game.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`${game.title}: ${game.description}. Rewards: ${game.reward.coins} coins, ${game.reward.xp} XP`}
            >
              <span className="game-tile-emoji">{game.emoji}</span>
              <span className="game-tile-title">{game.title}</span>
              <span className="game-tile-desc">{game.description}</span>
              <span className="game-tile-reward">
                🪙 {game.reward.coins} &nbsp; ⭐ {game.reward.xp} XP
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { GAMES };
