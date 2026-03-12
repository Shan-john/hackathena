/**
 * IsometricWorld.js – Three.js 2.5D Isometric Engine
 * Handles the 3D scene: camera, lighting, ground, objects, depth sorting.
 */
import * as THREE from 'three';

export class IsometricWorld {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.objects = [];      // All world objects for tracking
    this.highlighted = null; // Currently selected object group
    this.init();
  }

  init() {
    // ── Scene ──
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.012); // Soft distance fog

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
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x90EE90, 0.35);
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
    this.createGround();
    this.createStarterObjects();

    // ── Events ──
    window.addEventListener('resize', this.onResize.bind(this));

    // ── Start render loop ──
    this.clock = new THREE.Clock();
    this.animate();
  }

  // ─────────────────────────────
  //  Ground
  // ─────────────────────────────
  createGround() {
    // Main grass plane
    const geo = new THREE.PlaneGeometry(60, 60);
    const mat = new THREE.MeshLambertMaterial({ color: 0x7ec850 });
    const plane = new THREE.Mesh(geo, mat);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.scene.add(plane);

    // Subtle grid
    const grid = new THREE.GridHelper(60, 30, 0x5aad35, 0x5aad35);
    grid.material.opacity = 0.15;
    grid.material.transparent = true;
    grid.position.y = 0.01;
    this.scene.add(grid);

    // Decorative edge grass tufts (small darker patches)
    for (let i = 0; i < 40; i++) {
      const tuftGeo = new THREE.CircleGeometry(0.25 + Math.random() * 0.3, 6);
      const tuftMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.28, 0.5 + Math.random() * 0.3, 0.45 + Math.random() * 0.15),
      });
      const tuft = new THREE.Mesh(tuftGeo, tuftMat);
      tuft.rotation.x = -Math.PI / 2;
      tuft.position.set(
        (Math.random() - 0.5) * 50,
        0.02,
        (Math.random() - 0.5) * 50
      );
      this.scene.add(tuft);
    }
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
    this.scene.add(group);
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
    this.scene.add(group);
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
    this.scene.add(group);
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
    this.scene.add(group);
    this.objects.push(group);
    return group;
  }

  // ─────────────────────────────
  //  Interaction helpers
  // ─────────────────────────────

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
    this.renderer.dispose();
  }
}
