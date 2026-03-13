// PatternGenerators for CountingBoxesGame

export const PatternGenerators = {
    corner: {
        name: 'corner',
        generate: (gridSize, targetBlocks) => {
            const heightMap = Array(gridSize * gridSize).fill(0);
            const validPositions = [];
            
            for (let i = 0; i < gridSize * gridSize; i++) {
                const row = Math.floor(i / gridSize);
                const col = i % gridSize;
                if ((row <= 1 || row >= 3) && (col <= 1 || col >= 3)) {
                    validPositions.push(i);
                }
            }
            
            for (let i = validPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [validPositions[i], validPositions[j]] = [validPositions[j], validPositions[i]];
            }
            
            for (let i = 0; i < Math.min(targetBlocks, validPositions.length); i++) {
                heightMap[validPositions[i]] = 1;
            }
            
            return heightMap;
        }
    },
    
    line: {
        name: 'line',
        generate: (gridSize, targetBlocks) => {
            const heightMap = Array(gridSize * gridSize).fill(0);
            const validPositions = [];
            
            for (let i = 0; i < gridSize * gridSize; i++) {
                const row = Math.floor(i / gridSize);
                const col = i % gridSize;
                if (row === 2 || col === 2) {
                    validPositions.push(i);
                }
            }
            
            for (let i = validPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [validPositions[i], validPositions[j]] = [validPositions[j], validPositions[i]];
            }
            
            for (let i = 0; i < Math.min(targetBlocks, validPositions.length); i++) {
                heightMap[validPositions[i]] = 1;
            }
            
            return heightMap;
        }
    },
    
    cross: {
        name: 'cross',
        generate: (gridSize, targetBlocks) => {
            const heightMap = Array(gridSize * gridSize).fill(0);
            const validPositions = [];
            
            for (let i = 0; i < gridSize * gridSize; i++) {
                const row = Math.floor(i / gridSize);
                const col = i % gridSize;
                if (row === 2 || col === 2) {
                    validPositions.push(i);
                }
            }
            
            for (let i = validPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [validPositions[i], validPositions[j]] = [validPositions[j], validPositions[i]];
            }
            
            for (let i = 0; i < Math.min(targetBlocks, validPositions.length); i++) {
                heightMap[validPositions[i]] = 1;
            }
            
            return heightMap;
        }
    },
    
    scattered: {
        name: 'scattered',
        generate: (gridSize, targetBlocks) => {
            const heightMap = Array(gridSize * gridSize).fill(0);
            const allPositions = [];
            
            for (let i = 0; i < gridSize * gridSize; i++) {
                allPositions.push(i);
            }
            
            for (let i = allPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]];
            }
            
            for (let i = 0; i < Math.min(targetBlocks, allPositions.length); i++) {
                heightMap[allPositions[i]] = 1;
            }
            
            return heightMap;
        }
    },
    
    random_fill: {
        name: 'random_fill',
        generate: (gridSize, targetBlocks) => {
            const heightMap = Array(gridSize * gridSize).fill(0);
            const allPositions = [];
            
            for (let i = 0; i < gridSize * gridSize; i++) {
                allPositions.push(i);
            }
            
            for (let i = allPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]];
            }
            
            for (let i = 0; i < Math.min(targetBlocks, allPositions.length); i++) {
                heightMap[allPositions[i]] = 1;
            }
            
            return heightMap;
        }
    },
    
    tower: {
        name: 'tower',
        generate: (gridSize, targetBlocks) => {
            const isBlockedByTower = (checkIdx, checkHeight, towerIdx, towerHeight) => {
                const cx = checkIdx % gridSize;
                const cz = Math.floor(checkIdx / gridSize);
                const tx = towerIdx % gridSize;
                const tz = Math.floor(towerIdx / gridSize);
                
                const cameraX = 10;
                const cameraY = 10;
                const cameraZ = 10;
                
                const gridOffset = gridSize / 2 - 0.5;
                const checkX = cx - gridOffset;
                const checkZ = cz - gridOffset;
                const towerX = tx - gridOffset;
                const towerZ = tz - gridOffset;
                
                const checkY = checkHeight - 0.5; 
                const dirX = checkX - cameraX;
                const dirY = checkY - cameraY;
                const dirZ = checkZ - cameraZ;
                
                for (let h = 1; h <= towerHeight; h++) {
                    const towerY = h - 0.5; 
                    
                    const t = (towerX - cameraX) / dirX;
                    if (t > 0 && t < 1) { 
                        const intersectY = cameraY + t * dirY;
                        const intersectZ = cameraZ + t * dirZ;
                        
                        if (Math.abs(intersectZ - towerZ) < 0.5 && 
                            intersectY >= towerY - 0.5 && intersectY <= towerY + 0.5) {
                            return true;
                        }
                    }
                }
                
                return false;
            };
            
            const hasHiddenBlocks = (heightMap) => {
                for (let i = 0; i < heightMap.length; i++) {
                    if (heightMap[i] === 0) continue;
                    
                    for (let h = 1; h <= heightMap[i]; h++) {
                        for (let j = 0; j < heightMap.length; j++) {
                            if (i === j || heightMap[j] === 0) continue;
                            
                            if (isBlockedByTower(i, h, j, heightMap[j])) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };

            const generateSafeTowers = () => {
                const heightMap = Array(gridSize * gridSize).fill(0);
                
                const safeTowerPositions = [
                    0, 
                    gridSize - 1,
                    gridSize * (gridSize - 1), 
                    gridSize * gridSize - 1, 
                ];
                
                const numTowers = Math.min(2, Math.floor(Math.random() * 2) + 1);
                const selectedPositions = [];
                
                const shuffledSafe = [...safeTowerPositions];
                for (let i = shuffledSafe.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledSafe[i], shuffledSafe[j]] = [shuffledSafe[j], shuffledSafe[i]];
                }
                
                for (let i = 0; i < numTowers && i < shuffledSafe.length; i++) {
                    selectedPositions.push(shuffledSafe[i]);
                }
                
                const towerHeights = selectedPositions.map(() => 2 + Math.floor(Math.random() * 2)); 
                const totalTowerBlocks = towerHeights.reduce((a, b) => a + b, 0);
                
                if (totalTowerBlocks >= targetBlocks) {
                    selectedPositions.forEach((pos, i) => {
                        heightMap[pos] = towerHeights[i];
                    });
                    return heightMap;
                }
                
                selectedPositions.forEach((pos, i) => {
                    heightMap[pos] = towerHeights[i];
                });
                
                const remainingBlocks = targetBlocks - totalTowerBlocks;
                
                const safePositions = [];
                for (let i = 0; i < gridSize * gridSize; i++) {
                    if (heightMap[i] > 0) continue; 
                    
                    let isBlocked = false;
                    for (let j = 0; j < selectedPositions.length; j++) {
                        if (isBlockedByTower(i, 1, selectedPositions[j], towerHeights[j])) {
                            isBlocked = true;
                            break;
                        }
                    }
                    
                    if (!isBlocked) {
                        safePositions.push(i);
                    }
                }
                
                const shuffledSafePos = [...safePositions];
                for (let i = shuffledSafePos.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledSafePos[i], shuffledSafePos[j]] = [shuffledSafePos[j], shuffledSafePos[i]];
                }
                
                for (let i = 0; i < Math.min(remainingBlocks, shuffledSafePos.length); i++) {
                    heightMap[shuffledSafePos[i]] = 1;
                }
                
                return heightMap;
            };

            for (let attempt = 0; attempt < 10; attempt++) {
                const heightMap = generateSafeTowers();
                if (!hasHiddenBlocks(heightMap)) {
                    return heightMap;
                }
            }
            
            const fallback = Array(gridSize * gridSize).fill(0);
            const positions = [];
            for (let i = 0; i < gridSize * gridSize; i++) {
                positions.push(i);
            }
            for (let i = positions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [positions[i], positions[j]] = [positions[j], positions[i]];
            }
            for (let i = 0; i < Math.min(targetBlocks, positions.length); i++) {
                fallback[positions[i]] = 1;
            }
            return fallback;
        }
    }
};
