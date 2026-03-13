import React from 'react';
import { useParams } from 'react-router-dom';
import { GAMES } from './GameSelector';

const SKILLS = [
  { id: 'cognitive',        icon: '🧠', label: 'Cognitive',       color: '#7c5cbf', desc: 'Memory, patterns, problem solving' },
  { id: 'fine-motor',       icon: '✋', label: 'Fine Motor',      color: '#e8734a', desc: 'Precise hand movements & control' },
  { id: 'gross-motor',      icon: '🏃', label: 'Gross Motor',     color: '#4aa8e8', desc: 'Larger body movements & balance' },
  { id: 'social-emotional', icon: '💛', label: 'Social Emotion',  color: '#e84a88', desc: 'Feelings, sharing & teamwork' },
];

export default function SkillSelector({ onConfirm }) {
  const { inputType } = useParams();
  const currentInput = inputType || 'tap';

  const getPreviewGames = (skillId) => {
    return GAMES.filter(game => {
      const skillLower = skillId.toLowerCase();
      const matchesSkill = game.skill.includes(skillLower) || 
                           (skillLower.includes('cognitive') && game.skill === 'cognitive') ||
                           (skillLower.includes('motor') && game.skill.includes('motor')) ||
                           (skillLower.includes('social') && game.skill === 'social-emotional');

      if (!matchesSkill) return false;

      // Same visibility rules as GameSelector
      if (game.id === 'car-racing' && skillId !== 'fine-motor') return false;
      if ((game.id === 'fish-trace' || game.id === 'memory-test') && currentInput === 'tap') return false;

      return true;
    });
  };

  return (
    <div className="selection-screen">
      <div className="selection-card">
        <h1>🌟 Choose Your Skill</h1>
        <p>What would you like to practice today?</p>

        <div className="skill-grid">
          {SKILLS.map(skill => {
            const previewGames = getPreviewGames(skill.id);
            
            return (
              <button
                key={skill.id}
                className="skill-card"
                style={{ '--skill-color': skill.color, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onClick={() => onConfirm(skill.id)}
                aria-label={`${skill.label}: ${skill.desc}`}
              >
                <span className="skill-card-icon">{skill.icon}</span>
                <span className="skill-card-label">{skill.label}</span>
                <span className="skill-card-desc">{skill.desc}</span>
                
                {/* ── MINIGAME PREVIEWS ── */}
                {previewGames.length > 0 && (
                  <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {previewGames.map(game => (
                      <span 
                        key={game.id} 
                        title={game.title}
                        style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '15px', fontSize: '1.2rem' }}
                      >
                        {game.emoji}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
