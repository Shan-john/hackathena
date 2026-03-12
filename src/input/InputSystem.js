/**
 * InputSystem.js – Accessibility Input Manager
 *
 * Integrates three input channels:
 *   1. Voice  → Web Speech API (continuous listening)
 *   2. Eye    → WebGazer.js (dwell detection)
 *   3. Gesture → MediaPipe Hands (landmark classification)
 *
 * All inputs are funneled into a single onAction(callback) stream.
 */

const DWELL_MS = 1200; // How long gaze must stay in one area to count as "select"

export class InputSystem {
  constructor() {
    this.listeners = [];

    // Dwell tracking
    this._lastGaze = { x: 0, y: 0, time: 0 };
    this._dwellFired = false;

    // State flags
    this.voiceReady = false;
    this.eyeReady = false;
    this.gestureReady = false;
  }

  /** Register a callback: fn({ action, source, data }) */
  onAction(fn) {
    this.listeners.push(fn);
  }

  _emit(action, source, data = {}) {
    this.listeners.forEach(fn => fn({ action, source, data }));
  }

  // ═══════════════════════════
  //  1. VOICE (Web Speech API)
  // ═══════════════════════════
  initVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('[Input] Speech Recognition not available in this browser.');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';

    this.recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log(`[Voice] "${transcript}"`);
      this._matchVoiceCommand(transcript);
    };

    this.recognition.onerror = (e) => {
      console.warn('[Voice] error', e.error);
      // Auto-restart on network errors
      if (e.error !== 'aborted') {
        setTimeout(() => this.recognition.start(), 500);
      }
    };

    this.recognition.onend = () => {
      // Keep listening
      try { this.recognition.start(); } catch (_) { /* already started */ }
    };

    try {
      this.recognition.start();
      this.voiceReady = true;
      console.log('[Input] ✅ Voice recognition started');
    } catch (_) {
      console.warn('[Input] Could not start voice recognition');
    }
  }

  _matchVoiceCommand(text) {
    const commands = [
      { keywords: ['grow', 'plant', 'seed', 'tree'],  action: 'grow' },
      { keywords: ['wake', 'hello animal', 'hey'],     action: 'wake' },
      { keywords: ['catch', 'light', 'orb'],           action: 'catch' },
      { keywords: ['move', 'drag'],                    action: 'move' },
      { keywords: ['sun', 'day'],                      action: 'sun' },
      { keywords: ['moon', 'night'],                   action: 'moon' },
      { keywords: ['hello', 'hi'],                     action: 'chat_hello' },
      { keywords: ['good job', 'nice', 'great'],       action: 'chat_goodjob' },
      { keywords: ['help'],                            action: 'chat_help' },
      { keywords: ['build', 'house'],                  action: 'build' },
    ];

    for (const cmd of commands) {
      if (cmd.keywords.some(k => text.includes(k))) {
        this._emit(cmd.action, 'voice', { transcript: text });
        return;
      }
    }
    // Unknown command → still emit for custom handling
    this._emit('unknown', 'voice', { transcript: text });
  }

  // ═══════════════════════════
  //  2. EYE TRACKING (WebGazer)
  // ═══════════════════════════
  initEyeTracking() {
    if (typeof window.webgazer === 'undefined') {
      console.warn('[Input] WebGazer.js not loaded. Include it via <script> in index.html.');
      return;
    }

    window.webgazer
      .setGazeListener((data) => {
        if (!data) return;
        this._processGaze(data.x, data.y);
      })
      .begin();

    // Clean up video overlay
    window.webgazer.showVideo(false);
    window.webgazer.showPredictionPoints(false);
    window.webgazer.showFaceOverlay(false);
    window.webgazer.showFaceFeedbackBox(false);

    this.eyeReady = true;
    console.log('[Input] ✅ Eye tracking started (WebGazer)');
  }

  _processGaze(x, y) {
    const dx = Math.abs(x - this._lastGaze.x);
    const dy = Math.abs(y - this._lastGaze.y);
    const now = Date.now();

    // If gaze moved significantly → reset dwell timer
    if (dx > 60 || dy > 60) {
      this._lastGaze = { x, y, time: now };
      this._dwellFired = false;
      this._emit('gaze_move', 'eye', { x, y });
      return;
    }

    // Dwell detection: gaze stayed in same ~60px box for DWELL_MS
    if (!this._dwellFired && (now - this._lastGaze.time) >= DWELL_MS) {
      this._dwellFired = true;
      this._emit('gaze_select', 'eye', { x: this._lastGaze.x, y: this._lastGaze.y });
      console.log(`[Eye] Dwell select at (${Math.round(x)}, ${Math.round(y)})`);
    }
  }

  // ═══════════════════════════
  //  3. GESTURES (MediaPipe)
  // ═══════════════════════════
  initGestures() {
    // MediaPipe Hands requires loading the @mediapipe/hands package
    // and connecting to a <video> + <canvas>. The full integration depends
    // on how you serve the WASM + model files.
    //
    // Below is the classification logic that runs AFTER landmarks are obtained.

    console.log('[Input] ✅ Gesture system ready (call processHandLandmarks when MediaPipe data arrives)');
    this.gestureReady = true;
  }

  /**
   * Call this from your MediaPipe Hands onResults callback.
   * @param {Array} landmarks – 21-point hand landmark array from MediaPipe
   */
  processHandLandmarks(landmarks) {
    if (!landmarks || landmarks.length === 0) return;

    const gesture = this._classifyGesture(landmarks);
    if (gesture) {
      this._emit(gesture, 'gesture', { landmarks });
    }
  }

  _classifyGesture(lm) {
    // Simple heuristic gesture classification based on finger tip vs knuckle Y
    const thumbTip   = lm[4];
    const indexTip   = lm[8];
    const middleTip  = lm[12];
    const ringTip    = lm[16];
    const pinkyTip   = lm[20];

    const indexKnuckle  = lm[6];
    const middleKnuckle = lm[10];
    const ringKnuckle   = lm[14];
    const pinkyKnuckle  = lm[18];

    const fingersUp = [
      indexTip.y < indexKnuckle.y,
      middleTip.y < middleKnuckle.y,
      ringTip.y < ringKnuckle.y,
      pinkyTip.y < pinkyKnuckle.y,
    ];

    const count = fingersUp.filter(Boolean).length;

    // Open palm (all 4 fingers up)
    if (count === 4) return 'open_palm';

    // Pointing (only index up)
    if (count === 1 && fingersUp[0]) return 'point';

    // Pinch (thumb tip close to index tip)
    const pinchDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
    if (pinchDist < 0.05) return 'pinch';

    // Fist (no fingers up)
    if (count === 0) return 'fist';

    // Wave detection would require tracking over multiple frames → simplified here
    return null;
  }

  // ═══════════════════════════
  //  TTS Helper
  // ═══════════════════════════
  say(text) {
    if (!('speechSynthesis' in window)) return;

    // Cancel any ongoing speech first
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.25;  // Friendly, slightly higher pitch
    utterance.rate = 0.85;   // Slow & clear for children
    utterance.volume = 0.9;
    speechSynthesis.speak(utterance);
  }

  // ═══════════════════════════
  //  Init All
  // ═══════════════════════════
  initAll() {
    this.initVoice();
    this.initEyeTracking();
    this.initGestures();
  }

  dispose() {
    if (this.recognition) {
      try { this.recognition.stop(); } catch (_) {}
    }
    if (typeof window.webgazer !== 'undefined') {
      try { window.webgazer.end(); } catch (_) {}
    }
  }
}
