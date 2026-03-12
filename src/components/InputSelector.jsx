import React, { useState, useEffect } from 'react';

const INPUT_TYPES = [
  { id: 'eye',     icon: '👁️',  label: 'Eye Tracking',     desc: 'Look at objects to select them' },
  { id: 'gesture', icon: '✋',  label: 'Hand Gesture',     desc: 'Use your hand as a virtual mouse' },
  { id: 'tap',     icon: '👆',  label: 'Tap & Drag',       desc: 'Touch or click to interact' },
];

export default function InputSelector({ onConfirm, menuActionRef, onModeSelected }) {
  const [selected, setSelected] = useState(null);
  const [isConfirming, setIsConfirming] = useState(false);

  // Notify parent when selection changes (so gesture/eye activates immediately)
  useEffect(() => {
    if (selected && onModeSelected) {
      onModeSelected(selected);
    }
  }, [selected, onModeSelected]);

  useEffect(() => {
    if (menuActionRef) {
      menuActionRef.current = (action) => {
        if (action === 'RIGHT_TAP') {
          setSelected(prev => {
            const idx = prev ? INPUT_TYPES.findIndex(i => i.id === prev) : -1;
            return INPUT_TYPES[(idx + 1) % INPUT_TYPES.length].id;
          });
          setIsConfirming(false);
        } else if (action === 'LEFT_TAP') {
          if (selected) {
            if (isConfirming) {
              onConfirm(selected);
            } else {
              setIsConfirming(true);
            }
          }
        }
      };
      return () => { menuActionRef.current = null; };
    }
  }, [selected, isConfirming, onConfirm, menuActionRef]);

  const toggle = (id) => {
    if (selected === id) {
      if (isConfirming) {
        onConfirm(id);
      } else {
        setIsConfirming(true);
      }
    } else {
      setSelected(id);
      setIsConfirming(false);
    }
  };

  return (
    <div className="selection-screen">
      <div className="selection-card">
        <h1>🎮 Choose Your Input</h1>
        <p>Pick how you'd like to play. Tap/Select an option twice to confirm!</p>

        {/* Tap Tutorial */}
        <div className="tap-tutorial" style={{
          display: 'flex', gap: '16px', justifyContent: 'center',
          margin: '0 auto 20px', maxWidth: '500px', flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(167,139,250,0.15)', padding: '10px 16px',
            borderRadius: '12px', fontSize: '0.9rem', color: '#d4c4fb',
            border: '1px solid rgba(167,139,250,0.3)',
          }}>
            <span style={{ fontSize: '1.3em' }}>⬅️</span>
            <span><strong>Left Tap</strong> → Select / Confirm</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(96,165,250,0.15)', padding: '10px 16px',
            borderRadius: '12px', fontSize: '0.9rem', color: '#93c5fd',
            border: '1px solid rgba(96,165,250,0.3)',
          }}>
            <span style={{ fontSize: '1.3em' }}>➡️</span>
            <span><strong>Right Tap</strong> → Move / Next option</span>
          </div>
        </div>

        <div className="input-grid">
          {INPUT_TYPES.map(inp => {
            const isSelected = selected === inp.id;
            return (
              <button
                key={inp.id}
                className={`input-card ${isSelected ? 'selected' : ''} ${isSelected && isConfirming ? 'confirming' : ''}`}
                onClick={() => toggle(inp.id)}
                aria-pressed={isSelected}
                aria-label={`${inp.label}: ${inp.desc}`}
                style={{
                  border: isSelected && isConfirming ? '3px solid #ffeb3b' : '',
                  transform: isSelected && isConfirming ? 'scale(1.05)' : ''
                }}
              >
                <span className="input-card-icon">{inp.icon}</span>
                <span className="input-card-label">{inp.label}</span>
                <span className="input-card-desc">{inp.desc}</span>
                {isSelected && (
                  <span className="check-mark" style={{
                    fontSize: '0.8em',
                    background: isConfirming ? '#4caf50' : '#ff9800',
                    color: '#fff',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    marginTop: '8px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {isConfirming ? "✓ Confirm" : "Tap again to verify"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          className="confirm-btn"
          onClick={() => selected ? onConfirm(selected) : null}
          disabled={!selected}
        >
          {isConfirming ? "✨ Confirm & Continue" : "✨ Continue"}
        </button>
      </div>
    </div>
  );
}
