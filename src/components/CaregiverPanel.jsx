import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './CaregiverPanel.css';

// ─── Constants ───
const DISABILITY_TYPES = [
  { id: 'cerebral_palsy', label: 'Cerebral Palsy', icon: '🧠' },
  { id: 'autism', label: 'Autism Spectrum', icon: '🧩' },
  { id: 'down_syndrome', label: 'Down Syndrome', icon: '💛' },
  { id: 'muscular_dystrophy', label: 'Muscular Dystrophy', icon: '💪' },
  { id: 'spina_bifida', label: 'Spina Bifida', icon: '🦴' },
  { id: 'visual_impairment', label: 'Visual Impairment', icon: '👁️' },
  { id: 'hearing_impairment', label: 'Hearing Impairment', icon: '👂' },
  { id: 'adhd', label: 'ADHD', icon: '⚡' },
  { id: 'intellectual_disability', label: 'Intellectual Disability', icon: '📚' },
  { id: 'physical_disability', label: 'Physical Disability', icon: '♿' },
  { id: 'other', label: 'Other', icon: '📝' },
];

const MOBILITY_OPTIONS = [
  { id: 'no_leg_raise', label: 'Cannot raise legs' },
  { id: 'no_arm_raise', label: 'Cannot raise arms above head' },
  { id: 'no_jumping', label: 'Cannot jump' },
  { id: 'no_bending', label: 'Cannot bend down' },
  { id: 'no_standing', label: 'Cannot stand for long' },
  { id: 'no_running', label: 'Cannot run' },
  { id: 'no_fine_motor', label: 'Limited fine motor skills (fingers)' },
  { id: 'no_head_movement', label: 'Limited head/neck movement' },
  { id: 'wheelchair_bound', label: 'Uses wheelchair' },
  { id: 'no_twisting', label: 'Cannot twist torso' },
];

const SENSORY_OPTIONS = [
  { id: 'light_sensitive', label: 'Sensitive to bright lights / flashing' },
  { id: 'sound_sensitive', label: 'Sensitive to loud sounds' },
  { id: 'no_vibration', label: 'Cannot tolerate vibration' },
  { id: 'color_blind', label: 'Color vision deficiency' },
  { id: 'low_vision', label: 'Low vision / requires large UI' },
  { id: 'deaf', label: 'Deaf / hard of hearing' },
  { id: 'tactile_sensitive', label: 'Sensitive to touch/textures' },
];

const GAME_PREFERENCES = [
  { id: 'simple_controls', label: 'Simple one-button controls' },
  { id: 'slow_pace', label: 'Slower game pace' },
  { id: 'no_timer', label: 'No time pressure / timers' },
  { id: 'large_targets', label: 'Large click/tap targets' },
  { id: 'audio_cues', label: 'Audio cues for actions' },
  { id: 'visual_cues', label: 'Extra visual feedback' },
  { id: 'no_competition', label: 'No competitive elements' },
  { id: 'guided_mode', label: 'Step-by-step guided mode' },
  { id: 'positive_only', label: 'Only positive reinforcement (no fail states)' },
];

const INTENSITY_QUESTIONS = [
  {
    id: 'daily_assistance',
    question: 'How much daily assistance does the patient need?',
    options: [
      { value: 1, label: 'Minimal — mostly independent' },
      { value: 2, label: 'Some help — needs guidance occasionally' },
      { value: 3, label: 'Moderate — needs help with several tasks' },
      { value: 4, label: 'Significant — needs help with most tasks' },
      { value: 5, label: 'Full assistance — needs constant support' },
    ],
  },
  {
    id: 'communication_level',
    question: 'How does the patient communicate?',
    options: [
      { value: 1, label: 'Speaks clearly and fluently' },
      { value: 2, label: 'Speaks with some difficulty' },
      { value: 3, label: 'Uses simple words and short sentences' },
      { value: 4, label: 'Communicates mostly through gestures/sounds' },
      { value: 5, label: 'Non-verbal — uses assistive devices' },
    ],
  },
  {
    id: 'attention_span',
    question: 'What is the patient\'s typical attention span for activities?',
    options: [
      { value: 1, label: '15+ minutes — can focus well' },
      { value: 2, label: '10-15 minutes — moderate focus' },
      { value: 3, label: '5-10 minutes — needs frequent breaks' },
      { value: 4, label: '2-5 minutes — very short focus' },
      { value: 5, label: 'Under 2 minutes — constant redirection needed' },
    ],
  },
  {
    id: 'motor_control',
    question: 'How would you rate the patient\'s motor control?',
    options: [
      { value: 1, label: 'Good — can perform most physical tasks' },
      { value: 2, label: 'Fair — some movements are challenging' },
      { value: 3, label: 'Limited — needs adaptive tools' },
      { value: 4, label: 'Very limited — major movement restrictions' },
      { value: 5, label: 'Minimal — requires full physical assistance' },
    ],
  },
];

// ─── Steps ───
const STEPS = ['basics', 'disabilities', 'restrictions', 'intensity', 'preferences', 'review'];
const STEP_LABELS = ['Patient Info', 'Disabilities', 'Restrictions', 'Assessment', 'Preferences', 'Review'];

// =========================================
// CAREGIVER PANEL COMPONENT
// =========================================
export default function CaregiverPanel() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // Form state
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [disabilityTypes, setDisabilityTypes] = useState([]);
  const [disabilityDetails, setDisabilityDetails] = useState('');
  const [mobilityRestrictions, setMobilityRestrictions] = useState([]);
  const [sensoryRestrictions, setSensoryRestrictions] = useState([]);
  const [cognitiveNotes, setCognitiveNotes] = useState('');
  const [movementDonts, setMovementDonts] = useState('');
  const [gamePreferences, setGamePreferences] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [intensityAnswers, setIntensityAnswers] = useState({});

  // Load existing caregiver data
  useEffect(() => {
    const loadData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      setUserId(session.user.id);

      const { data, error } = await supabase
        .from('caregiver_profile')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (data && !error) {
        setPatientName(data.patient_name || '');
        setPatientAge(data.patient_age || '');
        setDisabilityTypes(data.disability_type || []);
        setDisabilityDetails(data.disability_details || '');
        setMobilityRestrictions(data.mobility_restrictions || []);
        setSensoryRestrictions(data.sensory_restrictions || []);
        setCognitiveNotes(data.cognitive_notes || '');
        setMovementDonts(data.movement_donts ? data.movement_donts.join('\n') : '');
        setGamePreferences(data.game_preferences || []);
        setSpecialInstructions(data.special_instructions || '');
        
        // Compute intensity from stored level
        if (data.intensity_level) {
          // Pre-fill intensity answers evenly
          const answers = {};
          INTENSITY_QUESTIONS.forEach(q => { answers[q.id] = data.intensity_level; });
          setIntensityAnswers(answers);
        }
      }
      setLoading(false);
    };
    loadData();
  }, []);

  // Toggle helpers
  const toggleArray = (arr, setArr, value) => {
    if (arr.includes(value)) setArr(arr.filter(v => v !== value));
    else setArr([...arr, value]);
  };

  // Computed intensity level
  const intensityLevel = (() => {
    const vals = Object.values(intensityAnswers);
    if (vals.length === 0) return 1;
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  })();

  // Save to Supabase
  const handleSave = async () => {
    if (!userId) return;
    setSaving(true);

    const profileData = {
      user_id: userId,
      patient_name: patientName,
      patient_age: patientAge ? parseInt(patientAge) : null,
      disability_type: disabilityTypes,
      disability_details: disabilityDetails,
      intensity_level: intensityLevel,
      mobility_restrictions: mobilityRestrictions,
      sensory_restrictions: sensoryRestrictions,
      cognitive_notes: cognitiveNotes,
      movement_donts: movementDonts.split('\n').map(s => s.trim()).filter(Boolean),
      game_preferences: gamePreferences,
      special_instructions: specialInstructions,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('caregiver_profile')
      .upsert(profileData, { onConflict: 'user_id' });

    if (error) {
      console.error('Error saving caregiver profile:', error);
      alert('Failed to save. Please try again.');
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setSaving(false);
  };

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  if (loading) {
    return (
      <div className="cg-page">
        <div className="cg-loading">
          <div className="cg-loading-icon">🩺</div>
          <p>Loading Caregiver Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cg-page">
      <div className="cg-container">
        {/* Header */}
        <div className="cg-header">
          <button className="cg-back-btn" onClick={() => navigate(-1)}>← Back to Game</button>
          <div className="cg-title-area">
            <h1 className="cg-title">🩺 Caregiver Panel</h1>
            <p className="cg-subtitle">Customize the experience for your patient's unique needs</p>
          </div>
          {saved && <div className="cg-saved-toast">✅ Saved Successfully!</div>}
        </div>

        {/* Progress Stepper */}
        <div className="cg-stepper">
          {STEP_LABELS.map((label, i) => (
            <div
              key={i}
              className={`cg-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
              onClick={() => setStep(i)}
            >
              <div className="cg-step-circle">{i < step ? '✓' : i + 1}</div>
              <span className="cg-step-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="cg-step-content">
          {/* STEP 0: Patient Basics */}
          {step === 0 && (
            <div className="cg-card">
              <h2 className="cg-card-title">👤 Patient Information</h2>
              <p className="cg-card-desc">Basic details about the patient using this app.</p>
              <div className="cg-form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient's name"
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                />
              </div>
              <div className="cg-form-group">
                <label>Age</label>
                <input
                  type="number"
                  placeholder="Enter age"
                  value={patientAge}
                  onChange={e => setPatientAge(e.target.value)}
                  min="1"
                  max="120"
                />
              </div>
            </div>
          )}

          {/* STEP 1: Disabilities */}
          {step === 1 && (
            <div className="cg-card">
              <h2 className="cg-card-title">🧩 Disability Types</h2>
              <p className="cg-card-desc">Select all that apply. This helps us tailor games and activities.</p>
              <div className="cg-chip-grid">
                {DISABILITY_TYPES.map(d => (
                  <button
                    key={d.id}
                    className={`cg-chip ${disabilityTypes.includes(d.id) ? 'selected' : ''}`}
                    onClick={() => toggleArray(disabilityTypes, setDisabilityTypes, d.id)}
                  >
                    <span className="cg-chip-icon">{d.icon}</span>
                    <span>{d.label}</span>
                  </button>
                ))}
              </div>
              <div className="cg-form-group" style={{ marginTop: '1.5rem' }}>
                <label>Additional Details (optional)</label>
                <textarea
                  placeholder="Describe any specific conditions, diagnoses, or medical notes..."
                  value={disabilityDetails}
                  onChange={e => setDisabilityDetails(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* STEP 2: Restrictions */}
          {step === 2 && (
            <div className="cg-card">
              <h2 className="cg-card-title">🚫 Movement & Sensory Restrictions</h2>
              <p className="cg-card-desc">Tell us what the patient should <strong>NOT</strong> do. Games will avoid these activities.</p>

              <h3 className="cg-section-title">Mobility Restrictions</h3>
              <div className="cg-check-grid">
                {MOBILITY_OPTIONS.map(opt => (
                  <label key={opt.id} className={`cg-check-item ${mobilityRestrictions.includes(opt.id) ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={mobilityRestrictions.includes(opt.id)}
                      onChange={() => toggleArray(mobilityRestrictions, setMobilityRestrictions, opt.id)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>

              <h3 className="cg-section-title" style={{ marginTop: '1.5rem' }}>Sensory Restrictions</h3>
              <div className="cg-check-grid">
                {SENSORY_OPTIONS.map(opt => (
                  <label key={opt.id} className={`cg-check-item ${sensoryRestrictions.includes(opt.id) ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={sensoryRestrictions.includes(opt.id)}
                      onChange={() => toggleArray(sensoryRestrictions, setSensoryRestrictions, opt.id)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="cg-form-group" style={{ marginTop: '1.5rem' }}>
                <label>🛑 Custom "Don'ts" — List specific movements or actions to avoid</label>
                <textarea
                  placeholder="One per line, e.g.:\nShould not raise left arm\nCannot grip with right hand\nAvoid sudden head movements"
                  value={movementDonts}
                  onChange={e => setMovementDonts(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="cg-form-group">
                <label>Cognitive Notes (optional)</label>
                <textarea
                  placeholder="Any cognitive or behavioral considerations for game design..."
                  value={cognitiveNotes}
                  onChange={e => setCognitiveNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* STEP 3: Intensity Assessment */}
          {step === 3 && (
            <div className="cg-card">
              <h2 className="cg-card-title">📊 Disability Intensity Assessment</h2>
              <p className="cg-card-desc">Answer these questions to help us understand the level of support needed.</p>

              {INTENSITY_QUESTIONS.map(q => (
                <div key={q.id} className="cg-question-block">
                  <h3 className="cg-question">{q.question}</h3>
                  <div className="cg-options">
                    {q.options.map(opt => (
                      <button
                        key={opt.value}
                        className={`cg-option ${intensityAnswers[q.id] === opt.value ? 'selected' : ''}`}
                        onClick={() => setIntensityAnswers({ ...intensityAnswers, [q.id]: opt.value })}
                      >
                        <span className="cg-option-dot">{intensityAnswers[q.id] === opt.value ? '●' : '○'}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="cg-intensity-result">
                <div className="cg-intensity-bar">
                  <div className="cg-intensity-fill" style={{ width: `${(intensityLevel / 5) * 100}%` }} />
                </div>
                <div className="cg-intensity-labels">
                  <span>Low Support</span>
                  <span className="cg-intensity-value">Level {intensityLevel}/5</span>
                  <span>High Support</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Game Preferences */}
          {step === 4 && (
            <div className="cg-card">
              <h2 className="cg-card-title">🎮 Game Preferences</h2>
              <p className="cg-card-desc">Select adaptations that would help the patient enjoy the games.</p>
              <div className="cg-check-grid">
                {GAME_PREFERENCES.map(pref => (
                  <label key={pref.id} className={`cg-check-item ${gamePreferences.includes(pref.id) ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={gamePreferences.includes(pref.id)}
                      onChange={() => toggleArray(gamePreferences, setGamePreferences, pref.id)}
                    />
                    <span>{pref.label}</span>
                  </label>
                ))}
              </div>

              <div className="cg-form-group" style={{ marginTop: '1.5rem' }}>
                <label>Special Instructions for All Games</label>
                <textarea
                  placeholder="Any other instructions or notes for the game system..."
                  value={specialInstructions}
                  onChange={e => setSpecialInstructions(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* STEP 5: Review */}
          {step === 5 && (
            <div className="cg-card review">
              <h2 className="cg-card-title">📋 Review & Save</h2>
              <p className="cg-card-desc">Please review the information below before saving.</p>

              <div className="cg-review-grid">
                <div className="cg-review-item">
                  <h4>👤 Patient</h4>
                  <p>{patientName || '—'}, Age: {patientAge || '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>🧩 Disabilities</h4>
                  <p>{disabilityTypes.length > 0 ? disabilityTypes.map(d => DISABILITY_TYPES.find(dt => dt.id === d)?.label).join(', ') : '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>📊 Intensity Level</h4>
                  <p>Level {intensityLevel}/5</p>
                </div>
                <div className="cg-review-item">
                  <h4>🚫 Mobility Restrictions</h4>
                  <p>{mobilityRestrictions.length > 0 ? mobilityRestrictions.map(r => MOBILITY_OPTIONS.find(o => o.id === r)?.label).join(', ') : '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>👁️ Sensory Restrictions</h4>
                  <p>{sensoryRestrictions.length > 0 ? sensoryRestrictions.map(r => SENSORY_OPTIONS.find(o => o.id === r)?.label).join(', ') : '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>🛑 Custom Don'ts</h4>
                  <p>{movementDonts || '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>🎮 Game Preferences</h4>
                  <p>{gamePreferences.length > 0 ? gamePreferences.map(p => GAME_PREFERENCES.find(gp => gp.id === p)?.label).join(', ') : '—'}</p>
                </div>
                <div className="cg-review-item">
                  <h4>📝 Special Instructions</h4>
                  <p>{specialInstructions || '—'}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="cg-footer">
          <button className="cg-nav-btn secondary" onClick={prev} disabled={step === 0}>← Previous</button>
          <div className="cg-footer-center">
            <button className="cg-save-btn" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : (saved ? '✅ Saved!' : '💾 Save Profile')}
            </button>
          </div>
          {step < STEPS.length - 1 ? (
            <button className="cg-nav-btn primary" onClick={next}>Next →</button>
          ) : (
            <button className="cg-nav-btn primary done" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : '✅ Save & Done'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
