import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

// ==========================================
// 1. ENGINE & GAME LOGIC
// ==========================================

export function getLevelParams(level) {
    return {
        fishCount: Math.min(4 + level, 20),
        targetCount: Math.min(Math.max(1, 1 + Math.floor(level / 3)), 6),
        speed: Math.min(0.8 + level * 0.1, 3.0),
        glowDuration: 3500,
        trackDuration: Math.min(3000 + level * 500, 10000),
    };
}

export function useFishEngine({
    containerWidth,
    containerHeight,
    fishCount,
    targetCount,
    speedMultiplier = 1,
    onCollision
}) {
    const minSpeed = -80 * speedMultiplier;
    const maxSpeed = 80 * speedMultiplier;
    const speedScale = Math.min(containerWidth, containerHeight) / 1000 || 1;

    const fishesRef = useRef({});
    const isMovingRef = useRef(false);
    const animationRef = useRef(0);

    const getRandomVelocity = useCallback(() => {
        let v = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * speedScale;
        if (Math.abs(v) < 20 * speedScale) {
            v = v > 0 ? 20 * speedScale : -20 * speedScale;
        }
        v *= 0.8 + Math.random() * 0.4;
        return v;
    }, [maxSpeed, minSpeed, speedScale]);

    const initFishes = useCallback(() => {
        const newFishes = {};
        const targetIndices = new Set();
        while (targetIndices.size < targetCount) {
            targetIndices.add(Math.floor(Math.random() * fishCount));
        }

        for (let i = 0; i < fishCount; i++) {
            newFishes[i] = {
                id: i,
                x: 60 + Math.random() * (containerWidth - 120),
                y: 60 + Math.random() * (containerHeight - 120),
                vx: getRandomVelocity(),
                vy: getRandomVelocity(),
                isTarget: targetIndices.has(i),
                isSelected: false,
                isChecking: false,
                isWrongSelection: false
            };
        }
        fishesRef.current = newFishes;
    }, [fishCount, targetCount, containerWidth, containerHeight, getRandomVelocity]);

    const startMovement = useCallback(() => {
        isMovingRef.current = true;
        let lastTime = performance.now();
        const fishRadius = 40;
        let nextPerturbTime = performance.now() + 2000 + Math.random() * 3000;

        const loop = (time) => {
            if (!isMovingRef.current) return;

            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;
            const dt = Math.min(deltaTime, 0.1);

            const fishes = Object.values(fishesRef.current);

            if (time > nextPerturbTime) {
                const randomFish = fishes[Math.floor(Math.random() * fishes.length)];
                if (randomFish) {
                    randomFish.vx *= (0.85 + Math.random() * 0.3);
                    randomFish.vy *= (0.85 + Math.random() * 0.3);
                    if (Math.abs(randomFish.vx) < 15 * speedScale) {
                        randomFish.vx = (randomFish.vx > 0 ? 1 : -1) * 20 * speedScale;
                    }
                    if (Math.abs(randomFish.vy) < 15 * speedScale) {
                        randomFish.vy = (randomFish.vy > 0 ? 1 : -1) * 20 * speedScale;
                    }
                }
                nextPerturbTime = time + 1500 + Math.random() * 2500;
            }

            for (let i = 0; i < fishes.length; i++) {
                const fish = fishes[i];
                fish.x += fish.vx * dt;
                fish.y += fish.vy * dt;

                if (fish.x <= fishRadius) {
                    fish.x = fishRadius;
                    fish.vx = Math.abs(fish.vx);
                } else if (fish.x >= containerWidth - fishRadius) {
                    fish.x = containerWidth - fishRadius;
                    fish.vx = -Math.abs(fish.vx);
                }

                if (fish.y <= fishRadius) {
                    fish.y = fishRadius;
                    fish.vy = Math.abs(fish.vy);
                } else if (fish.y >= containerHeight - fishRadius) {
                    fish.y = containerHeight - fishRadius;
                    fish.vy = -Math.abs(fish.vy);
                }
            }

            for (let i = 0; i < fishes.length; i++) {
                for (let j = i + 1; j < fishes.length; j++) {
                    const f1 = fishes[i];
                    const f2 = fishes[j];

                    const dx = f2.x - f1.x;
                    const dy = f2.y - f1.y;
                    const distSq = dx * dx + dy * dy;
                    const minDist = fishRadius * 1.5;

                    if (distSq < minDist * minDist) {
                        const tempVx = f1.vx;
                        const tempVy = f1.vy;
                        f1.vx = f2.vx;
                        f1.vy = f2.vy;
                        f2.vx = tempVx;
                        f2.vy = tempVy;

                        const dist = Math.sqrt(distSq) || 1;
                        const overlap = (minDist - dist) / 2;
                        const nx = dx / dist;
                        const ny = dy / dist;

                        f1.x -= nx * overlap;
                        f1.y -= ny * overlap;
                        f2.x += nx * overlap;
                        f2.y += ny * overlap;

                        if (onCollision) onCollision();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(loop);
        };
        animationRef.current = requestAnimationFrame(loop);
    }, [containerWidth, containerHeight, onCollision, speedScale]);

    const stopMovement = useCallback(() => {
        isMovingRef.current = false;
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }, []);

    const toggleSelection = useCallback((id) => {
        const fish = fishesRef.current[id];
        if (fish) {
            fish.isSelected = !fish.isSelected;
        }
    }, []);

    const markResults = useCallback(() => {
        const fishes = Object.values(fishesRef.current);
        fishes.forEach(fish => {
            fish.isChecking = true;
            if (fish.isSelected && !fish.isTarget) {
                fish.isWrongSelection = true;
            }
        });
    }, []);

    const calculateScore = useCallback((level) => {
        const fishes = Object.values(fishesRef.current);
        const correct = fishes.filter(f => f.isTarget && f.isSelected).length;
        const wrong = fishes.filter(f => !f.isTarget && f.isSelected).length;
        const missed = fishes.filter(f => f.isTarget && !f.isSelected).length;
        const total = fishes.filter(f => f.isTarget).length;
        const isPerfect = wrong === 0 && missed === 0;

        let points = correct * 100;
        if (isPerfect) {
            points += level * 50;
        }
        points = Math.max(0, points - wrong * 50);

        return { correct, wrong, missed, total, isPerfect, points };
    }, []);

    return { fishesRef, initFishes, startMovement, stopMovement, toggleSelection, markResults, calculateScore };
}


// ==========================================
// 2. FISH SVG COMPONENT
// ==========================================

export const SunfishSVG = memo(({ isGlowing, isSelected, isTarget, isChecking, isWrongSelection, size = 60 }) => {
    let bodyColor = '#FFB703';
    let finColor = '#219EBC';
    let stripeColor = '#FB8500';
    let strokeColor = '#023047';
    let filter = '';
    let strokeWidth = "2.5";

    if (isGlowing && !isChecking) {
        strokeColor = '#FFFFFF';
        strokeWidth = "5";
        filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))';
    } else if (isChecking) {
        if (isTarget && isSelected) {
            strokeColor = '#00E88F';
            strokeWidth = "5";
            filter = 'drop-shadow(0 0 8px #00E88F) drop-shadow(0 0 16px #00E88F)';
        } else if (isTarget && !isSelected) {
            bodyColor = '#D4D4D8';
            finColor = '#A1A1AA';
            stripeColor = '#A1A1AA';
            strokeColor = '#71717A';
            strokeWidth = "2.5";
            filter = 'opacity(0.6) grayscale(80%)';
        } else if (!isTarget && isWrongSelection) {
            strokeColor = '#FF0054';
            strokeWidth = "5";
            filter = 'drop-shadow(0 0 8px #FF0054)';
        } else {
            filter = 'brightness(0.9) grayscale(20%)';
        }
    } else if (isSelected) {
        strokeColor = '#00E5FF';
        strokeWidth = "5";
        filter = 'drop-shadow(0 0 8px #00E5FF)';
    }

    return (
        <div
            style={{ width: size, height: size, filter, transition: 'filter 0.3s ease' }}
            className={`relative flex items-center justify-center will-change-transform ${isSelected ? 'fish-bounce' : ''}`}
        >
            <style /* scoped naturally in react with classes */>{`
                @keyframes swim-tail { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.4); } }
                @keyframes swim-fin-top { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(8deg); } }
                @keyframes swim-fin-bottom { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-8deg); } }
                @keyframes swim-body { 0%, 100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(0.96) scaleX(0.98); } }
                @keyframes click-bounce { 0% { transform: scale(1); } 30% { transform: scale(1.18); } 60% { transform: scale(0.95); } 100% { transform: scale(1); } }
                .tail { transform-origin: 25px 50px; animation: swim-tail 0.8s infinite ease-in-out; }
                .fin-top { transform-origin: 52px 30px; animation: swim-fin-top 0.8s infinite ease-in-out; }
                .fin-bottom { transform-origin: 55px 70px; animation: swim-fin-bottom 0.8s infinite ease-in-out; }
                .fish-body { transform-origin: 55px 50px; animation: swim-body 0.8s infinite ease-in-out; }
                .fish-bounce { animation: click-bounce 0.35s ease-out; }
            `}</style>

            <svg viewBox="0 0 100 100" className="w-full h-full block transition-all duration-300 pointer-events-none" style={{ pointerEvents: 'none' }}>
                <path d="M35 30 Q45 5 65 25 Z" fill={finColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" className="fin-top transition-colors duration-300" />
                <path d="M40 70 Q50 95 65 75 Z" fill={finColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" className="fin-bottom transition-colors duration-300" />
                <path d="M25 50 L5 25 Q15 50 5 75 Z" fill={finColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" className="tail transition-colors duration-300" />
                <g className="fish-body transition-colors duration-300">
                    <ellipse cx="55" cy="50" rx="35" ry="28" fill={bodyColor} stroke={strokeColor} strokeWidth={strokeWidth} />
                    <path d="M 35 27 Q 45 50 35 73" fill="none" stroke={stripeColor} strokeWidth="4.5" strokeLinecap="round" />
                    <path d="M 50 22 Q 60 50 50 78" fill="none" stroke={stripeColor} strokeWidth="4.5" strokeLinecap="round" />
                    <ellipse cx="68" cy="48" rx="4" ry="2.5" fill="#FF0054" opacity="0.3" />
                    {isChecking && !isTarget && isWrongSelection ? (
                        <>
                            <line x1="70" y1="35" x2="80" y2="45" stroke={strokeColor} strokeWidth="3" />
                            <line x1="80" y1="35" x2="70" y2="45" stroke={strokeColor} strokeWidth="3" />
                        </>
                    ) : (
                        <>
                            <circle cx="73" cy="38" r="5" fill="#FFFFFF" stroke={strokeColor} strokeWidth="1.5" />
                            <circle cx="75" cy="38" r="2.5" fill="#023047" />
                            <circle cx="76" cy="37" r="1.2" fill="#FFFFFF" />
                        </>
                    )}
                    <path d="M82 55 Q86 58 84 62" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    );
});
SunfishSVG.displayName = 'SunfishSVG';


// ==========================================
// 3. MAIN REACT COMPONENT
// ==========================================

export default function FishTraceGame({ onBack, onCoinsEarned }) {
    const containerRef = useRef(null);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [roundPoints, setRoundPoints] = useState(null);
    const [roundResult, setRoundResult] = useState(null);
    const [phase, setPhase] = useState('idle'); // idle | watching | tracking | selecting | completed
    const [message, setMessage] = useState('Glowing Fish Trace');

    const [progressTotal, setProgressTotal] = useState(0);
    const [progressStartTime, setProgressStartTime] = useState(0);
    const [progressElapsed, setProgressElapsed] = useState(0);

    const [, forceRender] = useState(0);

    const levelParams = getLevelParams(level);

    // Using state for container dims since ref won't trigger re-render
    const [containerDims, setContainerDims] = useState({ width: 800, height: 600 });
    
    useEffect(() => {
        const c = containerRef.current;
        if (c) {
            setContainerDims({ width: c.clientWidth, height: c.clientHeight });
        }
    }, [phase]); // Re-check when starting

    const {
        fishesRef, initFishes, startMovement, stopMovement, toggleSelection, markResults, calculateScore
    } = useFishEngine({
        containerWidth: containerDims.width,
        containerHeight: containerDims.height,
        fishCount: levelParams.fishCount,
        targetCount: levelParams.targetCount,
        speedMultiplier: levelParams.speed
    });

    const fishNodeRefs = useRef({});
    const fishScale = Math.max(0.6, Math.min(1, containerDims.width / 800));
    const fishSize = Math.round(60 * fishScale);
    const fishOffsetRef = useRef(fishSize / 2);
    fishOffsetRef.current = fishSize / 2;

    // Progress bar loop
    useEffect(() => {
        if (progressTotal <= 0) return;
        let frameId;
        const tick = () => {
            const elapsed = Date.now() - progressStartTime;
            setProgressElapsed(Math.min(elapsed, progressTotal));
            if (elapsed < progressTotal) {
                frameId = requestAnimationFrame(tick);
            }
        };
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [progressTotal, progressStartTime]);

    // Position sync loop
    useEffect(() => {
        let frameId;
        const renderLoop = () => {
            if (phase === 'watching' || phase === 'tracking') {
                const fishes = fishesRef.current;
                const offset = fishOffsetRef.current;
                Object.values(fishes).forEach(fish => {
                    const node = fishNodeRefs.current[fish.id];
                    if (node) {
                        const flipX = fish.vx < 0 ? -1 : 1;
                        node.style.transform = `translate(${fish.x - offset}px, ${fish.y - offset}px) scaleX(${flipX})`;
                    }
                });
            }
            frameId = requestAnimationFrame(renderLoop);
        };
        if (phase === 'watching' || phase === 'tracking') {
            frameId = requestAnimationFrame(renderLoop);
        }
        return () => cancelAnimationFrame(frameId);
    }, [phase, fishesRef]);

    const startGame = useCallback(() => {
        setPhase('watching');
        setMessage('Memorize the glowing fish!');
        setRoundPoints(null);
        setRoundResult(null);

        const { glowDuration, trackDuration } = getLevelParams(level);
        setProgressTotal(glowDuration);
        setProgressStartTime(Date.now());
        setProgressElapsed(0);

        setTimeout(() => {
            initFishes();
            startMovement();
            forceRender(p => p + 1);

            setTimeout(() => {
                setMessage('The glow is fading...');
            }, glowDuration - 1000);

            setTimeout(() => {
                setPhase('tracking');
                setMessage('Track them closely!');
                setProgressTotal(trackDuration);
                setProgressStartTime(Date.now());
                setProgressElapsed(0);

                setTimeout(() => {
                    stopMovement();
                    setPhase('selecting');
                    setMessage('Select the targeted fish!');
                    setProgressTotal(0);
                    forceRender(p => p + 1);
                }, trackDuration);

            }, glowDuration);
        }, 100);
    }, [level, initFishes, startMovement, stopMovement]);

    const handleFishClick = (id) => {
        if (phase !== 'selecting') return;
        toggleSelection(id);
        forceRender(p => p + 1);
    };

    const confirmSelection = () => {
        setPhase('completed');
        markResults();
        setProgressTotal(0);

        const result = calculateScore(level);
        setRoundResult(result);
        setRoundPoints(result.points);

        const newScore = score + result.points;
        setScore(newScore);

        if (newScore > bestScore) setBestScore(newScore);

        if (result.isPerfect) {
            setMessage('Perfect! Flawless tracking!');
            // Award coins using our main HackAthena callback
            const coinsEarned = Math.max(2, Math.floor(result.points / 100));
            if (onCoinsEarned) onCoinsEarned(coinsEarned);
        } else if (result.correct > 0) {
            setMessage(`Partial success - keep trying!`);
            const coinsEarned = Math.max(1, Math.floor(result.points / 100));
            if (onCoinsEarned && coinsEarned > 0) onCoinsEarned(coinsEarned);
        } else {
            setMessage('Game Over - none correct.');
        }

        forceRender(p => p + 1);

        if (result.isPerfect) {
            setTimeout(() => {
                setLevel(l => l + 1);
                setTimeout(() => startGame(), 300);
            }, 2000);
        }
    };

    const fishes = Object.values(fishesRef.current);
    const progressPct = progressTotal > 0 ? Math.max(0, 1 - progressElapsed / progressTotal) : 0;

    return (
        <div style={{
            position: 'absolute', inset: 0, zIndex: 100, backgroundColor: '#111827', display: 'flex', flexDirection: 'column', color: '#fff', fontFamily: 'monospace'
        }}>
            {/* Top HUD */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: 'rgba(0, 0, 0, 0.7)', zIndex: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button 
                        onClick={onBack}
                        style={{ padding: '10px 20px', background: '#374151', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>
                        ← Back
                    </button>
                    {phase !== 'idle' && (
                        <span style={{ fontSize: '14px', fontWeight: 'bold', padding: '5px 12px', borderRadius: '20px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA' }}>
                            LEVEL {level}
                        </span>
                    )}
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', minWidth: '220px' }}>{message}</h2>

                    {/* MOVED TO TOP FOR ACCESSIBILITY */}
                    {phase === 'selecting' && (
                        <button 
                            onClick={confirmSelection}
                            style={{ padding: '10px 25px', fontSize: '18px', fontWeight: 'bold', background: '#10B981', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap' }}>
                            ☑️ CONFIRM 
                        </button>
                    )}
                    {phase === 'completed' && !roundResult?.isPerfect && (
                        <button 
                            onClick={startGame}
                            style={{ padding: '10px 25px', fontSize: '18px', fontWeight: 'bold', background: '#F59E0B', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', whiteSpace: 'nowrap' }}>
                            🔄 TRY AGAIN
                        </button>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                    <span style={{ color: '#FCD34D' }}>🪙 {Math.max(0, Math.floor(score / 100))}</span>
                    <span>SCORE: {score}</span>
                    <span style={{ color: '#9CA3AF' }}>BEST: {bestScore}</span>
                </div>
            </div>

            {/* Play Area */}
            <div ref={containerRef} style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#0284c7' }}>
                {phase === 'idle' && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <button 
                            onClick={startGame}
                            style={{ padding: '20px 40px', fontSize: '24px', fontWeight: 'bold', background: '#10B981', color: '#fff', borderRadius: '15px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            START GAME
                        </button>
                    </div>
                )}
                
                {/* Game Fishes */}
                {phase !== 'idle' && fishes.map(fish => {
                    const isGlowing = phase === 'watching' && fish.isTarget;
                    const flipX = fish.vx < 0 ? -1 : 1;
                    return (
                        <div
                            key={fish.id}
                            ref={el => { fishNodeRefs.current[fish.id] = el; }}
                            onClick={() => handleFishClick(fish.id)}
                            style={{
                                position: 'absolute', left: 0, top: 0, cursor: phase === 'selecting' ? 'pointer' : 'default',
                                transform: (phase === 'selecting' || phase === 'completed') 
                                    ? `translate(${fish.x - fishOffsetRef.current}px, ${fish.y - fishOffsetRef.current}px) scaleX(${flipX})`
                                    : undefined,
                                transition: (phase === 'selecting' || phase === 'completed') ? 'transform 0.5s ease' : 'none',
                                willChange: 'transform'
                            }}
                        >
                            <SunfishSVG
                                isGlowing={isGlowing}
                                isSelected={fish.isSelected}
                                isTarget={fish.isTarget}
                                isChecking={fish.isChecking}
                                isWrongSelection={fish.isWrongSelection}
                                size={fishSize}
                            />
                        </div>
                    );
                })}

                {phase === 'tracking' && (
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundColor: 'rgba(0,0,0,0.15)', transition: 'background-color 0.8s ease' }} />
                )}
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '8px', backgroundColor: '#1F2937' }}>
                <div style={{ height: '100%', backgroundColor: '#2dd4bf', width: `${progressPct * 100}%`, transition: 'width 0.05s linear' }} />
            </div>

        </div>
    );
}
