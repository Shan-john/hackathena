import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { PatternGenerators } from './PatternGenerators';
import confetti from 'canvas-confetti';

const GAME_CONFIG = {
    gridSize: 5
};

const LEVEL_CONFIGS = [
    { blocksRange: [3, 4],   pattern: ["corner"],          observer: [800, 1000], animation: [] },
    { blocksRange: [4, 6],   pattern: ["line", "tower"],   observer: [700, 800],  animation: ["flyIn", ""] },
    { blocksRange: [5, 7],   pattern: ["cross", "tower"],  observer: [600, 800],  animation: ["flyIn", ""] },
    { blocksRange: [7, 9],   pattern: ["scattered", "tower"], observer: [600, 800], animation: ["flyIn", ""] },
    { blocksRange: [3, 4],   pattern: ["random_fill"],     observer: [250, 300],  animation: [] },
    { blocksRange: [20, 23], pattern: ["random_fill"],     observer: [300, 400],  animation: [] },
];

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AnimationControllers = {
    flyIn: {
        name: 'flyIn',
        execute: (cubesGroup, scene, onComplete) => {
            const duration = 2000; // sped up slightly
            const startTime = Date.now();
            const startPosition = { x: -12, y: 8, z: 8 };
            const endPosition = { x: 12, y: -8, z: -8 };

            let gridHelper = null;
            let gridBorder = null;

            scene.children.forEach(child => {
                if (child instanceof THREE.GridHelper) {
                    gridHelper = child;
                } else if (child instanceof THREE.LineLoop) {
                    gridBorder = child;
                }
            });

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const currentX = startPosition.x + (endPosition.x - startPosition.x) * progress;
                const currentY = startPosition.y + (endPosition.y - startPosition.y) * progress;
                const currentZ = startPosition.z + (endPosition.z - startPosition.z) * progress;

                cubesGroup.position.set(currentX, currentY, currentZ);
                if (gridHelper) gridHelper.position.set(currentX, currentY - 0.01, currentZ);
                if (gridBorder) gridBorder.position.set(currentX, currentY, currentZ);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    cubesGroup.position.set(0, 0, 0);
                    cubesGroup.visible = false;
                    if (gridHelper) gridHelper.position.set(0, -0.01, 0);
                    if (gridBorder) gridBorder.position.set(0, 0, 0);
                    onComplete();
                }
            };
            animate();
        }
    }
};

export default function CountingBoxesGame({ inputMode, onBack, onCoinsEarned }) {
    // Game States
    const [gameState, setGameState] = useState('idle'); // idle, observing, input, result, animating
    const [level, setLevel] = useState(1);
    const [correctBlockCount, setCorrectBlockCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [timerDisplay, setTimerDisplay] = useState('');
    const [lastResult, setLastResult] = useState(null);
    const [gameStats, setGameStats] = useState({ totalLevels: 0, correctAnswers: 0 });

    const sceneRef = useRef(null);
    const sceneInstanceRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const cubesGroupRef = useRef(null);
    const correctHeightMapRef = useRef([]);
    const containerSizeRef = useRef({ width: 400, height: 400 });
    const selectedAnimationRef = useRef('default');
    
    // Config colors
    const CUBE_COLOR = useMemo(() => new THREE.Color(0xffffff), []);
    const SUCCESS_COLOR = useMemo(() => new THREE.Color(0x1eba38), []);
    const EDGE_COLOR = useMemo(() => new THREE.Color(0x000000), []);
    const GRID_COLOR = useMemo(() => new THREE.Color(0x434343), []);
    const BACKGROUND_COLOR = useMemo(() => new THREE.Color(0x0284c7), []); // use matching scheme

    const observeTimerRef = useRef(null);
    const resultTimerRef = useRef(null);
    const autoConfirmTimerRef = useRef(null);

    // AutoConfirm State
    const [timeLeft, setTimeLeft] = useState(5);

    const resetAutoConfirm = useCallback(() => {
        if (inputMode === 'tap') {
            setTimeLeft(5);
            if (autoConfirmTimerRef.current) clearInterval(autoConfirmTimerRef.current);
            
            autoConfirmTimerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(autoConfirmTimerRef.current);
                        // Trigger submit through an effect or direct call.
                        // For safety due to cyclic dependencies, we can just use a flag.
                        requestAnimationFrame(() => {
                            window.postMessage({ type: 'counting-boxes-auto-confirm' }, '*');
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    }, [inputMode]);

    useEffect(() => {
        const handleMsg = (e) => {
            if (e.data?.type === 'counting-boxes-increase') increaseCount();
            if (e.data?.type === 'counting-boxes-decrease') decreaseCount();
            if (e.data?.type === 'counting-boxes-confirm') submitAnswer();
            if (e.data?.type === 'counting-boxes-auto-confirm') submitAnswer();
        };
        window.addEventListener('message', handleMsg);
        return () => window.removeEventListener('message', handleMsg);
    }, [gameState, userCount]);

    const initThree = useCallback(() => {
        if (!sceneRef.current) return;
        const container = sceneRef.current;
        while (container.firstChild) container.removeChild(container.firstChild);

        const scene = new THREE.Scene();
        sceneInstanceRef.current = scene;

        const aspect = 1;
        const camera = new THREE.OrthographicCamera(-5 * aspect, 5 * aspect, 5, -5, 1, 1000);
        camera.position.set(10, 10, 10);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: "highp" });
        renderer.setClearColor(0x000000, 0); // transparent bg overrides
        
        const containerRect = container.getBoundingClientRect();
        const size = Math.min(containerRect.width, containerRect.height, 600);
        renderer.setSize(size, size);
        renderer.setPixelRatio(window.devicePixelRatio);

        const canvas = renderer.domElement;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        container.appendChild(canvas);
        rendererRef.current = renderer;

        const gridHelper = new THREE.GridHelper(GAME_CONFIG.gridSize, GAME_CONFIG.gridSize, GRID_COLOR, GRID_COLOR);
        gridHelper.position.y = -0.01;
        scene.add(gridHelper);

        const s = GAME_CONFIG.gridSize / 2;
        const pts = [
            new THREE.Vector3(-s, 0, -s), new THREE.Vector3(s, 0, -s), 
            new THREE.Vector3(s, 0, s), new THREE.Vector3(-s, 0, s)
        ];
        const borderGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const gridBorder = new THREE.LineLoop(borderGeo, new THREE.LineBasicMaterial({ color: EDGE_COLOR }));
        scene.add(gridBorder);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
        mainLight.position.set(-15, -10, 10);
        mainLight.target.position.set(0, 0, 0);
        scene.add(mainLight);
        scene.add(mainLight.target);

        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(10, 15, 5);
        scene.add(fillLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 0.4);
        topLight.position.set(0, 20, 0);
        scene.add(topLight);

        const cubesGroup = new THREE.Group();
        scene.add(cubesGroup);
        cubesGroupRef.current = cubesGroup;

        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => cancelAnimationFrame(animationId);
    }, [EDGE_COLOR, GRID_COLOR]);

    // Setup ThreeJS on Mount
    useEffect(() => {
        const cleanupFrame = initThree();
        return () => {
            if (cleanupFrame) cleanupFrame();
            if (rendererRef.current) rendererRef.current.dispose();
            if (observeTimerRef.current) clearTimeout(observeTimerRef.current);
            if (resultTimerRef.current) clearTimeout(resultTimerRef.current);
            if (autoConfirmTimerRef.current) clearTimeout(autoConfirmTimerRef.current);
        };
    }, [initThree]);

    const clearBoard = useCallback(() => {
        if (!cubesGroupRef.current) return;
        while (cubesGroupRef.current.children.length > 0) {
            cubesGroupRef.current.remove(cubesGroupRef.current.children[0]);
        }
    }, []);

    const addCube = useCallback((index, heightLevel, color) => {
        if (!cubesGroupRef.current) return;
        
        const isSuccessColor = color.getHex() === SUCCESS_COLOR.getHex();
        const sideColor = isSuccessColor ? color.getHex() : 0xe1eaf0;

        const materials = [
            new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.1 }),
            new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.1 }),
            new THREE.MeshStandardMaterial({ 
                color: color, roughness: 0.1, 
                emissive: new THREE.Color(color).multiplyScalar(0.3), emissiveIntensity: 1.0 
            }),
            new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.1 }),
            new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.1 }),
            new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.1 })
        ];

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const cube = new THREE.Mesh(geometry, materials);

        const gridOffset = GAME_CONFIG.gridSize / 2 - 0.5;
        const x = (index % GAME_CONFIG.gridSize) - gridOffset;
        const y = heightLevel * 1 + 0.5;
        const z = Math.floor(index / GAME_CONFIG.gridSize) - gridOffset;
        cube.position.set(x, y, z);

        const line = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({ color: EDGE_COLOR }));
        line.scale.setScalar(1.001);
        cube.add(line);

        cubesGroupRef.current.add(cube);
    }, [EDGE_COLOR, SUCCESS_COLOR]);

    const renderCubesFromHeightMap = useCallback((heightMap, color) => {
        clearBoard();
        heightMap.forEach((height, index) => {
            for (let h = 0; h < height; h++) {
                addCube(index, h, color);
            }
        });
    }, [clearBoard, addCube]);

    const startInputPhase = useCallback((anim) => {
        if (anim === 'flyIn' && AnimationControllers.flyIn) {
            setGameState("animating");
            const cubesGroup = cubesGroupRef.current;
            const scene = sceneInstanceRef.current;
            cubesGroup.position.set(-12, 8, 8);
            scene.children.forEach(child => {
                if (child instanceof THREE.GridHelper) child.position.set(-12, 8 - 0.01, 8);
                else if (child instanceof THREE.LineLoop) child.position.set(-12, 8, 8);
            });
            AnimationControllers.flyIn.execute(cubesGroup, scene, () => {
                setGameState("input");
            });
        } else {
            setGameState("input");
            if (cubesGroupRef.current) cubesGroupRef.current.visible = false;
        }
        resetAutoConfirm();
    }, [resetAutoConfirm]);

    const generateLevel = useCallback(() => {
        clearBoard();
        setUserCount(0);
        setCorrectBlockCount(0);

        if (level > LEVEL_CONFIGS.length) return;
        const conf = LEVEL_CONFIGS[level - 1];
        
        const targetBlocks = randomInRange(conf.blocksRange[0], conf.blocksRange[1]);
        const selectedPattern = randomChoice(conf.pattern);
        const selectedAnimation = (conf.animation && conf.animation.length > 0) ? randomChoice(conf.animation) : 'default';
        selectedAnimationRef.current = selectedAnimation;

        const pg = PatternGenerators[selectedPattern];
        const heightMap = pg ? pg.generate(GAME_CONFIG.gridSize, targetBlocks) : [];
        const actualBlocks = heightMap.reduce((sum, h) => sum + h, 0);
        
        setCorrectBlockCount(actualBlocks);
        correctHeightMapRef.current = [...heightMap];

        renderCubesFromHeightMap(correctHeightMapRef.current, CUBE_COLOR);

        if (selectedAnimation === 'flyIn') {
            startInputPhase('flyIn');
        } else {
            setGameState('observing');
            const observeTime = randomInRange(conf.observer[0], conf.observer[1]);
            observeTimerRef.current = setTimeout(() => {
                startInputPhase('default');
            }, observeTime);
        }
    }, [level, clearBoard, renderCubesFromHeightMap, CUBE_COLOR, startInputPhase]);

    const startGame = useCallback(() => {
        setGameStats({ totalLevels: 0, correctAnswers: 0 });
        setLevel(1);
        generateLevel();
    }, [generateLevel]);

    const increaseCount = useCallback(() => {
        if (gameState === 'input') {
            setUserCount(c => c + 1);
            resetAutoConfirm();
        }
    }, [gameState, resetAutoConfirm]);

    const decreaseCount = useCallback(() => {
        if (gameState === 'input') {
            setUserCount(c => Math.max(0, c - 1));
            resetAutoConfirm();
        }
    }, [gameState, resetAutoConfirm]);

    const submitAnswer = useCallback(() => {
        if (gameState !== 'input') return;

        if (autoConfirmTimerRef.current) clearInterval(autoConfirmTimerRef.current);

        const isCorrect = userCount === correctBlockCount;
        setGameStats(prev => ({
            totalLevels: level,
            correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0)
        }));

        if (cubesGroupRef.current) cubesGroupRef.current.visible = true;

        setLastResult({ correct: isCorrect });
        if (isCorrect) {
            renderCubesFromHeightMap(correctHeightMapRef.current, SUCCESS_COLOR);
            setTimerDisplay(`Correct! Count: ${correctBlockCount}`);
            if (onCoinsEarned) onCoinsEarned(5); // 5 coins per level
        } else {
            renderCubesFromHeightMap(correctHeightMapRef.current, CUBE_COLOR);
            setTimerDisplay(`Incorrect! Count: ${correctBlockCount}`);
        }

        setGameState('result');

        resultTimerRef.current = setTimeout(() => {
            if (level < LEVEL_CONFIGS.length) {
                setLevel(l => l + 1);
                generateLevel();
            } else {
                setGameState('gameOver');
                if (gameStats.correctAnswers >= 4) {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                }
            }
        }, 3000);

    }, [gameState, userCount, correctBlockCount, level, gameStats.correctAnswers, renderCubesFromHeightMap, SUCCESS_COLOR, CUBE_COLOR, onCoinsEarned, generateLevel]);

    useEffect(() => {
        // Cleanup interval on unmount
        return () => {
            if (autoConfirmTimerRef.current) clearInterval(autoConfirmTimerRef.current);
        };
    }, []);

    return (
        <div style={{
            position: 'absolute', inset: 0, zIndex: 100, backgroundColor: '#0284c7', display: 'flex', flexDirection: 'column', color: '#fff', fontFamily: 'monospace', overflow: 'hidden'
        }}>
            {/* Top HUD */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: 'rgba(0,0,0,0.5)', zIndex: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button 
                        onClick={onBack}
                        style={{ padding: '8px 15px', background: '#374151', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold' }}>
                        ← Back
                    </button>
                    {(gameState !== 'idle' && gameState !== 'gameOver') && (
                        <span style={{ fontSize: '14px', fontWeight: 'bold', padding: '5px 12px', borderRadius: '20px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA' }}>
                            LEVEL {level} / {LEVEL_CONFIGS.length}
                        </span>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                    <span>SCORE: {gameStats.correctAnswers} / {gameStats.totalLevels}</span>
                </div>
            </div>

            {/* Main Play Area */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                
                <div ref={sceneRef} style={{ width: '80%', height: '60%', maxWidth: '600px', maxHeight: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />

                {/* Overlays */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {gameState === 'idle' && (
                        <div style={{ pointerEvents: 'auto', background: 'rgba(15,23,42,0.85)', padding: '40px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}>
                            <h2 style={{ fontSize: '3rem', margin: '0 0 10px 0', color: '#38bdf8' }}>Counting Boxes</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#cbd5e1', maxWidth: '400px' }}>
                                A fast-paced observation game!<br/> Count the boxes quickly before they disappear. Use the left/right screen buttons to adjust your count.
                            </p>
                            <button 
                                onClick={startGame}
                                style={{ padding: '15px 40px', fontSize: '20px', fontWeight: 'bold', background: '#10B981', color: '#fff', borderRadius: '15px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                START GAME
                            </button>
                        </div>
                    )}

                    {gameState === 'observing' && (
                        <h2 style={{ fontSize: '3rem', color: '#fcd34d', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginTop: '-250px' }}>
                            OBSERVE...
                        </h2>
                    )}

                    {gameState === 'result' && (
                        <div style={{ background: lastResult?.correct ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)', padding: '20px 40px', borderRadius: '20px', fontSize: '2rem', fontWeight: 'bold', marginTop: '-150px', boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}>
                            {timerDisplay}
                        </div>
                    )}

                    {gameState === 'gameOver' && (
                        <div style={{ pointerEvents: 'auto', background: 'rgba(15,23,42,0.9)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '3rem', color: '#38bdf8', margin: '0 0 20px 0' }}>Game Over</h2>
                            <p style={{ fontSize: '2rem', marginBottom: '30px', color: '#f8fafc' }}>
                                Final Score: {gameStats.correctAnswers} / {LEVEL_CONFIGS.length}
                            </p>
                            <button 
                                onClick={startGame}
                                style={{ padding: '15px 40px', fontSize: '20px', fontWeight: 'bold', background: '#f59e0b', color: '#fff', borderRadius: '15px', cursor: 'pointer', border: 'none' }}>
                                TRY AGAIN
                            </button>
                        </div>
                    )}
                </div>

                {/* Input Controls */}
                {gameState === 'input' && (
                    <div style={{ position: 'absolute', bottom: '60px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                        
                        {/* LEFT TAP TARGET */}
                        <div 
                            onClick={increaseCount}
                            style={{ width: '150px', height: '150px', background: 'rgba(56, 189, 248, 0.9)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '4px solid #fff', boxShadow: '0 10px 15px rgba(0,0,0,0.3)', transition: 'transform 0.1s' }}
                            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>+</span>
                            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>LEFT TAP</span>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ background: '#0f172a', padding: '15px 40px', borderRadius: '15px', border: '2px solid #334155', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>YOUR COUNT</span>
                                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', lineHeight: '1' }}>{userCount}</span>
                            </div>
                            
                            {inputMode !== 'tap' ? (
                                <button 
                                    onClick={submitAnswer}
                                    style={{ padding: '15px 40px', fontSize: '20px', fontWeight: 'bold', background: '#10B981', color: '#fff', borderRadius: '15px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                                    ☑️ CONFIRM
                                </button>
                            ) : (
                                <div style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'center', background: '#1e293b', padding: '10px 20px', borderRadius: '10px' }}>
                                    Auto-confirming in <strong style={{color: '#f8fafc'}}>{timeLeft}s</strong>...
                                </div>
                            )}
                        </div>

                        {/* RIGHT TAP TARGET */}
                        <div 
                            onClick={decreaseCount}
                            style={{ width: '150px', height: '150px', background: 'rgba(239, 68, 68, 0.9)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '4px solid #fff', boxShadow: '0 10px 15px rgba(0,0,0,0.3)', transition: 'transform 0.1s' }}
                            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>-</span>
                            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>RIGHT TAP</span>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
