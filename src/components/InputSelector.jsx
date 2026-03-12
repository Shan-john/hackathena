import React, { useState } from 'react';

const INPUT_TYPES = [
  { id: 'eye',     icon: '👁️',  label: 'Eye Tracking',     desc: 'Look at objects to select them' },
  { id: 'voice',   icon: '🎤',  label: 'Voice Tracking',   desc: 'Speak commands to play' },
  { id: 'gesture', icon: '✋',  label: 'Gesture Tracking', desc: 'Wave or point with your hands' },
  { id: 'tap',     icon: '👆',  label: 'Tap & Drag',       desc: 'Touch or click to interact' },
];

export default function InputSelector({ onConfirm }) {
  const [selected, setSelected] = useState('tap'); // tap on by default

  const toggle = (id) => {
    setSelected(id);
  };

  return (
    <div className="selection-screen">
      <div className="selection-card">
        <h1>🎮 Choose Your Input</h1>
        <p>Pick how you'd like to play. You can choose more than one!</p>

        <div className="input-grid">
          {INPUT_TYPES.map(inp => (
            <button
              key={inp.id}
              className={`input-card ${selected === inp.id ? 'selected' : ''}`}
              onClick={() => toggle(inp.id)}
              aria-pressed={selected === inp.id}
              aria-label={`${inp.label}: ${inp.desc}`}
            >
              <span className="input-card-icon">{inp.icon}</span>
              <span className="input-card-label">{inp.label}</span>
              <span className="input-card-desc">{inp.desc}</span>
              {selected === inp.id && <span className="check-mark">✓</span>}
            </button>
          ))}
        </div>

        <button
          className="confirm-btn"
          onClick={() => onConfirm(selected)}
          disabled={!selected}
        >
          ✨ Continue
        </button>
      </div>
    </div>
  );
}
