import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';

let recognizer = null;
let currentCallback = null;

export async function initSpeechRecognizer(cb) {
  if (!recognizer) {
    // Create the 'directional4w' recognizer which listens for 'up', 'down', 'left', 'right'
    recognizer = speechCommands.create('BROWSER_FFT', 'directional4w');
    await recognizer.ensureModelLoaded();
  }
  
  currentCallback = cb;

  const suppressionTimeMillis = 1000;

  if (!recognizer.isListening()) {
    try {
      await recognizer.listen(
        result => {
          checkPredictions(recognizer.wordLabels(), result.scores, 2, suppressionTimeMillis);
        },
        {
          includeSpectrogram: true,
          suppressionTimeMillis,
          probabilityThreshold: 0.9
        }
      );
      console.log("Streaming voice recognition started.");
    } catch (err) {
      console.error("ERROR: Failed to start voice recognition:", err.message);
    }
  }
}

export function stopSpeechRecognizer() {
  if (recognizer && recognizer.isListening()) {
    recognizer.stopListening();
    currentCallback = null;
    console.log("Voice recognition stopped.");
  }
}

const checkPredictions = (candidateWords, probabilities, topK, timeToLiveMillis) => {
  if (topK != null) {
    let wordsAndProbs = [];
    for (let i = 0; i < candidateWords.length; ++i) {
      wordsAndProbs.push([candidateWords[i], probabilities[i]]);
    }
    wordsAndProbs.sort((a, b) => b[1] - a[1]);
    wordsAndProbs = wordsAndProbs.slice(0, topK);
    
    // Highlight the top word
    const topWord = wordsAndProbs[0][0];
    
    // Discard background noise or unknown
    if (topWord !== '_background_noise_' && topWord !== '_unknown_') {
      console.log(`Voice Command Detected: ${topWord.toUpperCase()}`);
      
      // Fire local callback if registered (used by VoiceRunnerGame)
      if (currentCallback && topWord === 'up') {
        currentCallback();
      }

      // Fire global event so App.jsx / HackAthena can use it globally for ALL games
      window.dispatchEvent(new CustomEvent('voice-command', { detail: topWord }));
    }
  }
}
