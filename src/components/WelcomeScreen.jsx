import React, { useEffect } from 'react';

export default function WelcomeScreen({ onStart, menuActionRef }) {
  useEffect(() => {
    if (menuActionRef) {
      menuActionRef.current = (action) => {
        if (action === 'LEFT_TAP' || action === 'RIGHT_TAP') {
          onStart();
        }
      };
      return () => { menuActionRef.current = null; };
    }
  }, [onStart, menuActionRef]);
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
