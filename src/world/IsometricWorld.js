/**
 * IsometricWorld.js – Three.js 2.5D Isometric Engine
 * Handles the 3D scene: camera, lighting, ground, objects, depth sorting.
 */
import * as THREE from 'three';

export class IsometricWorld {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.objects = [];        // All world objects for tracking
    this.highlighted = null;  // Currently selected object group
    this.placementItem = null; // Currently placing item type
    this.ghostMesh = null;    // Ghost mesh for placement
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.onPlacementComplete = null; // Callback when item placed
    this.init();
  }

  init() {
    // ── Scene ──
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
    this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.008);

    // ── Renderer ──
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ── Orthographic Camera (true isometric) ──
    const aspect = window.innerWidth / window.innerHeight;
    this.frustumSize = 18;
    this.camera = new THREE.OrthographicCamera(
      -this.frustumSize * aspect,
       this.frustumSize * aspect,
       this.frustumSize,
      -this.frustumSize,
      0.1,
      1000
    );
    // True isometric angle: rotate 45° around Y, then ~35.26° around X
    this.camera.position.set(25, 25, 25);
    this.camera.lookAt(0, 0, 0);

    // ── Lighting ──
    // Soft ambient
    const ambient = new THREE.AmbientLight(0xfff5e6, 0.55);
    this.scene.add(ambient);

    // Hemisphere (sky + ground bounce)
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x90EE90, 0.4);
    this.scene.add(hemiLight);

    // Main sun
    this.sunLight = new THREE.DirectionalLight(0xfffaf0, 0.9);
    this.sunLight.position.set(15, 30, 15);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.left = -30;
    this.sunLight.shadow.camera.right = 30;
    this.sunLight.shadow.camera.top = 30;
    this.sunLight.shadow.camera.bottom = -30;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 100;
    this.sunLight.shadow.bias = -0.001;
    this.scene.add(this.sunLight);

    // ── Build the world ──
    this.createClouds();
    this.createGround();
    this.createStarterObjects();

    // ── Events ──
    window.addEventListener('resize', this.onResize.bind(this));
    this.canvas.addEventListener('pointermove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('click', this.onClick.bind(this));

    // ── Start render loop ──
    this.clock = new THREE.Clock();
    this.animate();
  }

  // ─────────────────────────────
  //  Ground
  // ─────────────────────────────
  createClouds() {
    this.cloudsContainer = new THREE.Group();
    
    // Create several fluffy cloud clusters
    const numClouds = 20;
    const cloudMat = new THREE.MeshLambertMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.8,
      flatShading: true 
    });

    for (let i = 0; i < numClouds; i++) {
      const cloud = new THREE.Group();
      
      // Each cloud is made of 3-5 intersecting spheres
      const numPuffs = 3 + Math.floor(Math.random() * 3);
      for (let j = 0; j < numPuffs; j++) {
        const radius = 1.5 + Math.random() * 2;
        const puffGeo = new THREE.SphereGeometry(radius, 7, 7);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        
        puff.position.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 4
        );
        cloud.add(puff);
      }

      // Position the cloud cluster randomly around the island
      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 40;
      const height = -15 + Math.random() * 30;
      
      cloud.position.set(
        Math.cos(angle) * distance,
        height,
        Math.sin(angle) * distance
      );
      
      // Random rotation and scale for variety
      cloud.rotation.y = Math.random() * Math.PI;
      const scale = 0.5 + Math.random() * 1.5;
      cloud.scale.set(scale, scale * 0.6, scale); // Flatten clouds slightly

      this.cloudsContainer.add(cloud);
    }
    
    this.scene.add(this.cloudsContainer);
  }

  createGround() {
    // ── Floating cone island ──
    this.islandGroup = new THREE.Group();

    // Main cone body (island base)
    const coneGeo = new THREE.ConeGeometry(14, 12, 32);
    const coneMat = new THREE.MeshLambertMaterial({ color: 0x5a3e28, flatShading: true });
    const cone = new THREE.Mesh(coneGeo, coneMat);
    cone.position.y = -6; // Tip points down
    cone.rotation.x = Math.PI; // Flip so tip is at bottom
    cone.castShadow = true;
    cone.receiveShadow = true;
    this.islandGroup.add(cone);

    // Rocky texture patches on the cone
    for (let i = 0; i < 20; i++) {
      const rockGeo = new THREE.SphereGeometry(0.3 + Math.random() * 0.5, 6, 6);
      const rockMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.07, 0.3, 0.25 + Math.random() * 0.15),
      });
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const angle = Math.random() * Math.PI * 2;
      const height = -1 - Math.random() * 8;
      const radius = 12 * (1 - Math.abs(height + 6) / 6) * 0.6;
      rock.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      this.islandGroup.add(rock);
    }

    // Flat grass top surface
    const topGeo = new THREE.CircleGeometry(14, 32);
    const topMat = new THREE.MeshLambertMaterial({ color: 0x7ec850 });
    this.topSurface = new THREE.Mesh(topGeo, topMat);
    this.topSurface.rotation.x = -Math.PI / 2;
    this.topSurface.position.y = 0.01;
    this.topSurface.receiveShadow = true;
    this.islandGroup.add(this.topSurface);

    // Grass tufts on top
    for (let i = 0; i < 40; i++) {
      const tuftGeo = new THREE.CircleGeometry(0.25 + Math.random() * 0.3, 6);
      const tuftMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.28, 0.5 + Math.random() * 0.3, 0.45 + Math.random() * 0.15),
      });
      const tuft = new THREE.Mesh(tuftGeo, tuftMat);
      tuft.rotation.x = -Math.PI / 2;
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 12;
      tuft.position.set(Math.cos(angle) * r, 0.02, Math.sin(angle) * r);
      this.islandGroup.add(tuft);
    }

    // Glowing ring around the island
    const ringGeo = new THREE.TorusGeometry(15, 0.15, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, // White airy glow
      transparent: true,
      opacity: 0.3,
    });
    this.islandRing = new THREE.Mesh(ringGeo, ringMat);
    this.islandRing.rotation.x = Math.PI / 2;
    this.islandRing.position.y = -0.5;
    this.islandGroup.add(this.islandRing);

    this.scene.add(this.islandGroup);
  }

  // ─────────────────────────────
  //  Starter objects
  // ─────────────────────────────
  createStarterObjects() {
    // A few trees
    this.addTree(-3, -2);
    this.addTree(5, 3);
    this.addTree(-6, 5);

    // Flowers
    this.addFlower(1, -1);
    this.addFlower(2, 1);
    this.addFlower(-1, 3);
    this.addFlower(4, -3);

    // A little house
    this.addHouse(8, -5);

    // A sleeping animal
    this.addAnimal(0, 4);
  }

  // ─────────────────────────────
  //  Object Factories
  // ─────────────────────────────

  addTree(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'tree', id: `tree_${Date.now()}_${Math.random()}` };

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.15, 0.22, 1.4, 8);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8B5E3C });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 0.7;
    trunk.castShadow = true;
    group.add(trunk);

    // Foliage layers (stacked cones for a charming look)
    const foliageColors = [0x2d8a4e, 0x3a9d5e, 0x48b068];
    for (let i = 0; i < 3; i++) {
      const coneGeo = new THREE.ConeGeometry(0.9 - i * 0.15, 0.9, 8);
      const coneMat = new THREE.MeshLambertMaterial({ color: foliageColors[i] });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.y = 1.6 + i * 0.55;
      cone.castShadow = true;
      group.add(cone);
    }

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addFlower(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'flower', id: `flower_${Date.now()}_${Math.random()}` };

    // Stem
    const stemGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6);
    const stemMat = new THREE.MeshLambertMaterial({ color: 0x4a9e3f });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 0.25;
    group.add(stem);

    // Petals (small flat spheres arranged in a ring)
    const petalColors = [0xff7eb3, 0xffb347, 0xa78bfa, 0xff6b6b, 0x4ade80];
    const petalColor = petalColors[Math.floor(Math.random() * petalColors.length)];
    for (let i = 0; i < 5; i++) {
      const petalGeo = new THREE.SphereGeometry(0.12, 8, 8);
      const petalMat = new THREE.MeshLambertMaterial({ color: petalColor });
      const petal = new THREE.Mesh(petalGeo, petalMat);
      const angle = (i / 5) * Math.PI * 2;
      petal.position.set(Math.cos(angle) * 0.15, 0.55, Math.sin(angle) * 0.15);
      petal.scale.set(1, 0.5, 1);
      group.add(petal);
    }

    // Center
    const centerGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const centerMat = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    const center = new THREE.Mesh(centerGeo, centerMat);
    center.position.y = 0.55;
    group.add(center);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addHouse(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'house', id: `house_${Date.now()}_${Math.random()}` };

    // Walls
    const wallGeo = new THREE.BoxGeometry(2, 1.5, 1.8);
    const wallMat = new THREE.MeshLambertMaterial({ color: 0xfff5e6 });
    const walls = new THREE.Mesh(wallGeo, wallMat);
    walls.position.y = 0.75;
    walls.castShadow = true;
    walls.receiveShadow = true;
    group.add(walls);

    // Roof
    const roofGeo = new THREE.ConeGeometry(1.6, 1, 4);
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xd4634a });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 2;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // Door
    const doorGeo = new THREE.PlaneGeometry(0.4, 0.7);
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x8B5E3C });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 0.35, 0.91);
    group.add(door);

    // Window
    const winGeo = new THREE.PlaneGeometry(0.35, 0.35);
    const winMat = new THREE.MeshLambertMaterial({ color: 0x87CEEB });
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.set(0.6, 1, 0.91);
    group.add(win);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addAnimal(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'animal', id: `animal_${Date.now()}_${Math.random()}`, state: 'sleeping' };

    // Body (rounded box-ish sphere)
    const bodyGeo = new THREE.SphereGeometry(0.4, 12, 8);
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0xe8d5b7 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.scale.set(1.3, 0.8, 1);
    body.position.y = 0.3;
    body.castShadow = true;
    group.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.25, 12, 8);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xe8d5b7 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0.45, 0.4, 0);
    head.castShadow = true;
    group.add(head);

    // Ears
    for (let side of [-1, 1]) {
      const earGeo = new THREE.ConeGeometry(0.08, 0.2, 6);
      const earMat = new THREE.MeshLambertMaterial({ color: 0xf5c6a0 });
      const ear = new THREE.Mesh(earGeo, earMat);
      ear.position.set(0.45, 0.65, side * 0.15);
      group.add(ear);
    }

    // Eyes (closed = sleeping)
    const eyeGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const eyeMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(0.65, 0.45, 0.1);
    eye.scale.y = 0.2; // Flat = closed
    group.add(eye);

    // ZZZ text indicator (sleeping)
    // We just use a small floating sphere for simplicity
    const zGeo = new THREE.SphereGeometry(0.06, 6, 6);
    const zMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.7 });
    const zz = new THREE.Mesh(zGeo, zMat);
    zz.position.set(0.6, 0.9, 0);
    zz.name = 'sleepIndicator';
    group.add(zz);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  // New Clash of Clans theme items

  addWall(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'wall', id: `wall_${Date.now()}` };
    const mat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1, 0.8), mat);
    box.position.y = 0.5;
    box.castShadow = true;
    group.add(box);
    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addCannon(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'cannon', id: `cannon_${Date.now()}` };
    
    // Base
    const baseMat = new THREE.MeshLambertMaterial({ color: 0xa0522d }); // Wood base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 0.5, 8), baseMat);
    base.position.y = 0.25;
    base.castShadow = true;
    group.add(base);

    // Barrel
    const barrelMat = new THREE.MeshLambertMaterial({ color: 0x222222 }); // Iron
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.2, 8), barrelMat);
    barrel.position.set(0, 0.7, 0);
    barrel.rotation.x = Math.PI / 2;
    barrel.castShadow = true;
    group.add(barrel);

    // Pivot points
    const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), baseMat);
    pivot.position.y = 0.6;
    group.add(pivot);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addArcherTower(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'archertower', id: `archertower_${Date.now()}` };
    
    // Wood structure
    const mat = new THREE.MeshLambertMaterial({ color: 0x8B5E3C });
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.5, 1.2), mat);
    base.position.y = 1.25;
    base.castShadow = true;
    group.add(base);

    // Top platform
    const platform = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, 1.6), mat);
    platform.position.y = 2.6;
    platform.castShadow = true;
    group.add(platform);

    // Decorative green top flag/tent
    const tentMat = new THREE.MeshLambertMaterial({ color: 0x4ade80 });
    const tent = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1, 4), tentMat);
    tent.position.y = 3.2;
    tent.rotation.y = Math.PI / 4;
    tent.castShadow = true;
    group.add(tent);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  addGoldMine(x, z) {
    const group = new THREE.Group();
    group.userData = { type: 'goldmine', id: `goldmine_${Date.now()}` };
    
    // Stone exterior track
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x999999 });
    const track = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.15, 8, 12, Math.PI), stoneMat);
    track.position.y = 0.15;
    track.rotation.x = Math.PI / 2;
    group.add(track);

    // Wooden shack
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x6b4226 });
    const shack = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), woodMat);
    shack.position.set(0, 0.5, -0.4);
    shack.castShadow = true;
    group.add(shack);

    // Little gold cart
    const goldMat = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    const cart = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.6), goldMat);
    cart.position.set(0, 0.2, 0.4);
    cart.castShadow = true;
    group.add(cart);

    group.position.set(x, 0, z);
    this.islandGroup.add(group);
    this.objects.push(group);
    return group;
  }

  // ─────────────────────────────
  //  Interaction & Placement
  // ─────────────────────────────

  setPlacementMode(type) {
    if (this.ghostMesh) {
      this.scene.remove(this.ghostMesh);
      this.ghostMesh = null;
    }
    this.placementItem = type;
    if (!type) {
      document.body.style.cursor = 'default';
      return;
    }
    
    document.body.style.cursor = 'crosshair';

    // Create a ghost outline
    const mat = new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.5, wireframe: true });
    let geo = new THREE.BoxGeometry(1, 1, 1);
    
    if (type === 'Tree') geo = new THREE.CylinderGeometry(0.5, 0.5, 2);
    else if (type === 'Wall') geo = new THREE.BoxGeometry(0.8, 1, 0.8);
    else if (type === 'Cannon') geo = new THREE.CylinderGeometry(0.6, 0.6, 1);
    else if (type === 'Archer Tower') geo = new THREE.BoxGeometry(1.2, 3, 1.2);
    else if (type === 'Gold Mine') geo = new THREE.BoxGeometry(1.5, 1, 1.5);

    this.ghostMesh = new THREE.Mesh(geo, mat);
    this.scene.add(this.ghostMesh);
  }

  onMouseMove(e) {
    if (!this.placementItem || !this.ghostMesh) return;
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.topSurface);
    
    if (intersects.length > 0) {
      this.ghostMesh.position.copy(intersects[0].point);
      this.ghostMesh.position.y += 0.5; // Lift up half height
      // Convert world coord to islandGroup local coord roughly
      const localPoint = this.islandGroup.worldToLocal(intersects[0].point.clone());
      
      // Color red if off island
      if (localPoint.length() > 14) {
        this.ghostMesh.material.color.setHex(0xff0000);
      } else {
        this.ghostMesh.material.color.setHex(0x4ade80);
      }
    }
  }

  onClick(e) {
    if (!this.placementItem || !this.ghostMesh) return;
    
    if (this.ghostMesh.material.color.getHex() === 0xff0000) {
      return; // Invalid spot
    }

    // Place it
    const localPos = this.islandGroup.worldToLocal(this.ghostMesh.position.clone());
    const x = localPos.x;
    const z = localPos.z;

    let placedMesh = null;
    const t = this.placementItem;
    if (t === 'Tree') placedMesh = this.growSeed(x, z);
    else if (t === 'Flower') placedMesh = this.addFlower(x, z);
    else if (t === 'House') placedMesh = this.addHouse(x, z);
    else if (t === 'Dragon') placedMesh = this.addAnimal(x, z);
    else if (t === 'Wall') placedMesh = this.addWall(x, z);
    else if (t === 'Cannon') placedMesh = this.addCannon(x, z);
    else if (t === 'Archer Tower') placedMesh = this.addArcherTower(x, z);
    else if (t === 'Gold Mine') placedMesh = this.addGoldMine(x, z);
    else placedMesh = this.addTree(x, z);

    if (placedMesh && this.onPlacementComplete) {
      this.onPlacementComplete(this.placementItem);
    }
  }

  /** Update ghost mesh from screen coordinates (for gesture/gaze input) */
  updateGhostFromScreen(screenX, screenY) {
    if (!this.placementItem || !this.ghostMesh) return;
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((screenX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((screenY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.topSurface);

    if (intersects.length > 0) {
      this.ghostMesh.position.copy(intersects[0].point);
      this.ghostMesh.position.y += 0.5;
      const localPoint = this.islandGroup.worldToLocal(intersects[0].point.clone());
      if (localPoint.length() > 14) {
        this.ghostMesh.material.color.setHex(0xff0000);
      } else {
        this.ghostMesh.material.color.setHex(0x4ade80);
      }
    }
  }

  /** Trigger placement at the current ghost position (for gesture/gaze/tap) */
  placeAtGhost() {
    if (!this.placementItem || !this.ghostMesh) return false;
    if (this.ghostMesh.material.color.getHex() === 0xff0000) return false;

    const localPos = this.islandGroup.worldToLocal(this.ghostMesh.position.clone());
    const x = localPos.x;
    const z = localPos.z;

    let placedMesh = null;
    const t = this.placementItem;
    if (t === 'Tree') placedMesh = this.growSeed(x, z);
    else if (t === 'Flower') placedMesh = this.addFlower(x, z);
    else if (t === 'House') placedMesh = this.addHouse(x, z);
    else if (t === 'Dragon') placedMesh = this.addAnimal(x, z);
    else if (t === 'Wall') placedMesh = this.addWall(x, z);
    else if (t === 'Cannon') placedMesh = this.addCannon(x, z);
    else if (t === 'Archer Tower') placedMesh = this.addArcherTower(x, z);
    else if (t === 'Gold Mine') placedMesh = this.addGoldMine(x, z);
    else placedMesh = this.addTree(x, z);

    if (placedMesh && this.onPlacementComplete) {
      this.onPlacementComplete(this.placementItem);
    }
    return true;
  }

  /** Highlight an object with a gentle glow ring underneath */
  highlightObject(objectGroup) {
    // Remove previous highlight
    this.clearHighlight();

    if (!objectGroup) return;

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.6, 0.8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffd700, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    ring.name = '__highlight__';
    objectGroup.add(ring);
    this.highlighted = objectGroup;
  }

  clearHighlight() {
    if (this.highlighted) {
      const ring = this.highlighted.getObjectByName('__highlight__');
      if (ring) this.highlighted.remove(ring);
      this.highlighted = null;
    }
  }

  /** Wake a sleeping animal */
  wakeAnimal(animalGroup) {
    if (!animalGroup || animalGroup.userData.type !== 'animal') return;
    animalGroup.userData.state = 'awake';

    // Remove sleep indicator
    const zz = animalGroup.getObjectByName('sleepIndicator');
    if (zz) animalGroup.remove(zz);

    // Open eyes
    animalGroup.children.forEach(child => {
      if (child.geometry?.type === 'SphereGeometry' && child.scale.y < 0.5) {
        child.scale.y = 1; // Open eye
      }
    });
  }

  /** Grow a seed into a tree (with tween-like scaling) */
  growSeed(x, z) {
    const tree = this.addTree(x, z);
    tree.scale.set(0.01, 0.01, 0.01);
    tree.userData.growing = true;
    tree.userData.growTarget = 1;
    return tree;
  }

  // ─────────────────────────────
  //  Animation Loop
  // ─────────────────────────────
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    const elapsed = this.clock.getElapsedTime();

    // Animate growing objects
    this.objects.forEach(obj => {
      if (obj.userData.growing) {
        const s = obj.scale.x;
        const target = obj.userData.growTarget || 1;
        if (s < target - 0.01) {
          obj.scale.setScalar(s + (target - s) * 0.03);
        } else {
          obj.scale.setScalar(target);
          obj.userData.growing = false;
        }
      }

      // Gentle idle sway for flowers
      if (obj.userData.type === 'flower') {
        obj.rotation.z = Math.sin(elapsed * 1.5 + obj.position.x) * 0.05;
      }

      // Floating sleep indicator
      if (obj.userData.type === 'animal' && obj.userData.state === 'sleeping') {
        const zz = obj.getObjectByName('sleepIndicator');
        if (zz) {
          zz.position.y = 0.9 + Math.sin(elapsed * 2) * 0.15;
          zz.material.opacity = 0.4 + Math.sin(elapsed * 3) * 0.3;
        }
      }
    });

    // Highlight pulse
    if (this.highlighted) {
      const ring = this.highlighted.getObjectByName('__highlight__');
      if (ring) {
        ring.material.opacity = 0.4 + Math.sin(elapsed * 4) * 0.25;
        ring.scale.setScalar(1 + Math.sin(elapsed * 3) * 0.08);
      }
    }

    // Gentle floating/bobbing of the island
    if (this.islandGroup) {
      this.islandGroup.position.y = Math.sin(elapsed * 0.5) * 0.4;
      this.islandGroup.rotation.y = elapsed * 0.02; // Slow spin
    }

    // Glow ring pulse
    if (this.islandRing) {
      this.islandRing.material.opacity = 0.25 + Math.sin(elapsed * 1.5) * 0.15;
      this.islandRing.scale.setScalar(1 + Math.sin(elapsed * 0.8) * 0.03);
    }

    // Slow cloud rotation and drifting
    if (this.cloudsContainer) {
      this.cloudsContainer.rotation.y = elapsed * 0.015;
      
      // Gentle individual cloud bobbing
      this.cloudsContainer.children.forEach((cloud, index) => {
        cloud.position.y += Math.sin(elapsed + index) * 0.005;
      });
    }

    this.renderer.render(this.scene, this.camera);
  }

  // ─────────────────────────────
  //  Resize
  // ─────────────────────────────
  onResize() {
    const aspect = window.innerWidth / window.innerHeight;
    this.camera.left = -this.frustumSize * aspect;
    this.camera.right = this.frustumSize * aspect;
    this.camera.top = this.frustumSize;
    this.camera.bottom = -this.frustumSize;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ─────────────────────────────
  //  Cleanup
  // ─────────────────────────────
  dispose() {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.canvas.removeEventListener('pointermove', this.onMouseMove.bind(this));
    this.canvas.removeEventListener('click', this.onClick.bind(this));
    this.renderer.dispose();
  }
}
