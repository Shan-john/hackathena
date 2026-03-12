import React from 'react';

const MINI_GAMES = [
  {
    id: 'grow',
    emoji: '🌱',
    title: 'Grow the Garden',
    description: 'Look at, point at, or tap the seed to grow a beautiful tree!',
    actionLabel: '🌸 Grow!',
  },
  {
    id: 'wake',
    emoji: '🐰',
    title: 'Wake the Animal',
    description: 'A little bunny is sleeping. Wave, look, or tap to wake it up gently!',
    actionLabel: '☀️ Wake Up!',
  },
  {
    id: 'catch',
    emoji: '✨',
    title: 'Catch the Light',
    description: 'Glowing orbs are floating by. Catch them to unlock new colors!',
    actionLabel: '🌟 Catch!',
  },
  {
    id: 'sun',
    emoji: '🌅',
    title: 'Move the Sun',
    description: 'Drag the sun across the sky to change the world from day to night!',
    actionLabel: '🌙 Change Sky!',
  },
];

export default function MiniGameOverlay({ gameIndex, onAction }) {
  if (gameIndex < 0 || gameIndex >= MINI_GAMES.length) return null;

  const game = MINI_GAMES[gameIndex];

  return (
    <div className="minigame-overlay" role="region" aria-label={`Mini game: ${game.title}`}>
      <span className="emoji-icon">{game.emoji}</span>
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <button
        className="minigame-action-btn"
        onClick={() => onAction(game.id)}
        aria-label={game.actionLabel}
      >
        {game.actionLabel}
      </button>
    </div>
  );
}

export { MINI_GAMES };
