import React from 'react';

const SKILLS = [
  { id: 'cognitive',        icon: '🧠', label: 'Cognitive',       color: '#7c5cbf', desc: 'Memory, patterns, problem solving' },
  { id: 'fine-motor',       icon: '✋', label: 'Fine Motor',      color: '#e8734a', desc: 'Precise hand movements & control' },
  { id: 'gross-motor',      icon: '🏃', label: 'Gross Motor',     color: '#4aa8e8', desc: 'Larger body movements & balance' },
  { id: 'social-emotional', icon: '💛', label: 'Social Emotion',  color: '#e84a88', desc: 'Feelings, sharing & teamwork' },
];

export default function SkillSelector({ onConfirm }) {
  return (
    <div className="selection-screen">
      <div className="selection-card">
        <h1>🌟 Choose Your Skill</h1>
        <p>What would you like to practice today?</p>

        <div className="skill-grid">
          {SKILLS.map(skill => (
            <button
              key={skill.id}
              className="skill-card"
              style={{ '--skill-color': skill.color }}
              onClick={() => onConfirm(skill.id)}
              aria-label={`${skill.label}: ${skill.desc}`}
            >
              <span className="skill-card-icon">{skill.icon}</span>
              <span className="skill-card-label">{skill.label}</span>
              <span className="skill-card-desc">{skill.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
