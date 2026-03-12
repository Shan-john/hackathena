import React from 'react';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen" role="dialog" aria-label="Welcome">
      <div className="sparkles">🌳✨🦋</div>
      <h1>Magic World Builder</h1>
      <p>
        Welcome to our magical world! 🌸<br />
        Look, wave, tap, or speak — and watch the world come alive.
      </p>
      <button
        className="start-btn"
        onClick={onStart}
        aria-label="Start playing"
        autoFocus
      >
        🎮 Let's Play!
      </button>
    </div>
  );
}
