import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Word Bank
const WORD_BANK = [
  "APPLE", "RIVER", "CHAIR", "GUITAR", "OCEAN", "TIGER", "PLANET", "MOUNTAIN", 
  "TRAIN", "CLOUD", "GUITAR", "BOTTLE", "CAMERA", "JACKET", "FLOWER", "ROCKET",
  "PENCIL", "MIRROR", "LIZARD", "CASTLE", "GUITAR", "WINTER", "POCKET", "BUTTON",
  "LANTERN", "ZEBRA", "GUITAR", "HAMMER", "DRAGON", "BICYCLE", "WALNUT", "TURTLE"
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function MemoryTestGame({ onBack, onCoinsEarned, inputMode }) {
  // Game states: 'idle', 'presentation', 'recall', 'results'
  const [gameState, setGameState] = useState('idle');
  
  const [targetWords, setTargetWords] = useState([]);
  const [recallWords, setRecallWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  
  const [results, setResults] = useState(null);
  
  // Start the game! Pick 8 words to memorize, and mix with 8 distractors for later.
  const startGame = useCallback(() => {
    // Pick 8 random target words and 8 random distractor words
    const shuffledBank = shuffle([...WORD_BANK]);
    const chosenTargets = shuffledBank.slice(0, 8);
    const chosenDistractors = shuffledBank.slice(8, 16);
    
    setTargetWords(chosenTargets);
    
    // Create the recall bank (8 targets + 8 distractors) shuffled
    const combined = shuffle([...chosenTargets, ...chosenDistractors]);
    setRecallWords(combined);
    
    setSelectedWords([]);
    setResults(null);
    setGameState('presentation');
  }, []);

  // Move from presentation to recall phase
  const proceedToRecall = useCallback(() => {
    setGameState('recall');
  }, []);

  const handleWordSelect = useCallback((word) => {
    setSelectedWords(prev => {
      if (prev.includes(word)) {
        return prev.filter(w => w !== word); // Deselect
      } else {
        if (prev.length < 8) return [...prev, word]; // Select if under limit
        return prev;
      }
    });
  }, []);

  const submitRecall = useCallback(() => {
    // Evaluate scores
    const correctSelections = selectedWords.filter(w => targetWords.includes(w));
    const incorrectSelections = selectedWords.filter(w => !targetWords.includes(w));
    const missedTargets = targetWords.filter(w => !selectedWords.includes(w));
    
    // Score out of 800 roughly (100 pts per word)
    let points = correctSelections.length * 100;
    points -= incorrectSelections.length * 50; // penalty for guessing wrong
    if (points < 0) points = 0;
    
    const isPerfect = selectedWords.length === 8 && correctSelections.length === 8;
    if (isPerfect) points += 200; // Perfect bonus
    
    setResults({
      correct: correctSelections.length,
      wrong: incorrectSelections.length,
      missed: missedTargets.length,
      points,
      isPerfect
    });
    
    if (onCoinsEarned && points > 0) {
      const coins = Math.max(1, Math.floor(points / 100));
      onCoinsEarned(coins);
    }
    
    setGameState('results');
  }, [selectedWords, targetWords, onCoinsEarned]);

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100, backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', color: '#f8fafc', fontFamily: 'sans-serif'
    }}>
      {/* Top HUD */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: 'rgba(0, 0, 0, 0.7)', zIndex: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button 
                  onClick={onBack}
                  style={{ padding: '10px 20px', background: '#334155', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>
                  ← Back
              </button>
              
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#94a3b8' }}>
                Short-Term Memory Lab
              </h2>

              {/* ACTION BUTTONS MOVED TO TOP HID FOR EYE TRACKING EASE */}
              {gameState === 'presentation' && (
                  <button 
                      onClick={proceedToRecall}
                      style={{ padding: '10px 25px', fontSize: '16px', fontWeight: 'bold', background: '#3b82f6', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', marginLeft: '20px' }}>
                      ☑️ READY TO RECALL
                  </button>
              )}

              {gameState === 'recall' && (
                  <button 
                      onClick={submitRecall}
                      style={{ padding: '10px 25px', fontSize: '16px', fontWeight: 'bold', background: '#10b981', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', marginLeft: '20px' }}>
                      ☑️ SUBMIT ANSWERS
                  </button>
              )}

              {gameState === 'results' && (
                  <button 
                      onClick={startGame}
                      style={{ padding: '10px 25px', fontSize: '16px', fontWeight: 'bold', background: '#f59e0b', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', marginLeft: '20px' }}>
                      🔄 PLAY AGAIN
                  </button>
              )}
          </div>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontWeight: 'bold', fontSize: '18px' }}>
              {results && (
                  <span style={{ color: '#FCD34D' }}>🪙 Earned: {Math.max(0, Math.floor(results.points / 100))}</span>
              )}
          </div>
      </div>

      {/* Main Play Area */}
      <div style={{ flex: 1, position: 'relative', overflowY: 'auto', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* IDLE */}
        {gameState === 'idle' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', color: '#38bdf8' }}>Memory Test</h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', marginBottom: '40px' }}>
              You will be shown 8 words. Memorize them as best as you can.<br/><br/>
              When you are ready, you will be given a list of 16 words. Use your {inputMode === 'eye' ? 'eyes (blink)' : inputMode === 'gesture' ? 'hand (pinch)' : 'mouse'} to click down the original 8 words you remember!
            </p>
            <button 
              onClick={startGame}
              style={{ padding: '20px 50px', fontSize: '24px', fontWeight: 'bold', background: '#38bdf8', color: '#0f172a', borderRadius: '15px', cursor: 'pointer', border: 'none', boxShadow: '0 6px 12px rgba(56, 189, 248, 0.3)' }}>
              START CHALLENGE
            </button>
          </div>
        )}

        {/* PRESENTATION */}
        {gameState === 'presentation' && (
          <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#cbd5e1' }}>Memorize These Words</h2>
            <p style={{ color: '#64748b', marginBottom: '40px' }}>Study them at your own pace. Click the READY button at the top when finished.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', width: '100%' }}>
              {targetWords.map((word, i) => (
                <div key={i} style={{
                  background: '#1e293b', border: '2px solid #334155', borderRadius: '12px', padding: '30px 20px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem', fontWeight: 'bold', color: '#e2e8f0',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RECALL */}
        {gameState === 'recall' && (
          <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#cbd5e1' }}>Recall The Words!</h2>
            <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '1.1rem' }}>
              Select up to 8 matching words. You have selected <b>{selectedWords.length}/8</b>.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', width: '100%' }}>
              {recallWords.map((word, i) => {
                const isSelected = selectedWords.includes(word);
                return (
                  <button 
                    key={i} 
                    onClick={() => handleWordSelect(word)}
                    style={{
                      background: isSelected ? '#3b82f6' : '#1e293b', 
                      border: isSelected ? '2px solid #60a5fa' : '2px solid #334155', 
                      borderRadius: '12px', padding: '20px 10px',
                      display: 'flex', justifyContent: 'center', alignItems: 'center', 
                      fontSize: '1.2rem', fontWeight: 'bold', color: isSelected ? '#ffffff' : '#94a3b8',
                      cursor: 'pointer', transition: 'all 0.2s',
                      boxShadow: isSelected ? '0 0 15px rgba(59,130,246,0.5)' : 'none',
                      userSelect: 'none' // prevent random highlighting for rapid clicking
                  }}>
                    {word}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {gameState === 'results' && results && (
          <div style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#1e293b', padding: '40px', borderRadius: '24px', border: '2px solid #334155', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
                {results.isPerfect ? '🏆' : results.correct >= 5 ? '⭐' : '📖'}
              </div>
              <h2 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', color: results.isPerfect ? '#fbbf24' : '#f8fafc' }}>
                {results.isPerfect ? "Flawless Memory!" : "Test Complete"}
              </h2>
              <div style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '30px' }}>
                Score: <strong style={{color: '#38bdf8'}}>{results.points}</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', width: '100%', maxWidth: '800px', textAlign: 'left' }}>
                <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#cbd5e1' }}>Correctly Recalled ({results.correct})</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedWords.filter(w => targetWords.includes(w)).map((word, i) => (
                      <span key={i} style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '4px 10px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>{word}</span>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#cbd5e1' }}>Missed Targets ({results.missed})</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {targetWords.filter(w => !selectedWords.includes(w)).map((word, i) => (
                      <span key={i} style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>{word}</span>
                    ))}
                  </div>
                </div>

                {results.wrong > 0 && (
                  <div style={{ gridColumn: 'span 2', background: '#0f172a', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#cbd5e1' }}>Wrong Selections ({results.wrong})</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedWords.filter(w => !targetWords.includes(w)).map((word, i) => (
                        <span key={i} style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '4px 10px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>{word}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
