/**
 * Eye Tracking / Accessibility Controls for Car Racing Game
 * ──────────────────────────────────────────────────────────
 * Receives commands from the parent frame via window.postMessage.
 * This file does NOT modify any original game code — it only
 * adds a message listener that calls the existing game functions.
 * 
 * Supported messages:
 *   { type: "car-steer", direction: "left"|"right"|"center" }
 *   { type: "blink-click", x: number, y: number }
 */

(function () {
  // Track eye-steering state
  let _eyeLeft = false;
  let _eyeRight = false;

  window.addEventListener("message", function (e) {
    if (!e.data || !e.data.type) return;

    // ── Continuous head/eye steering ──
    if (e.data.type === "car-steer") {
      var dir = e.data.direction;

      if (dir === "left") {
        // Stop right if active
        if (_eyeRight && typeof move_right !== "undefined" && move_right) {
          cancelAnimationFrame(move_right);
          move_right = false;
          _eyeRight = false;
        }
        // Start left if not already moving
        if (!_eyeLeft && typeof game_over !== "undefined" && !game_over) {
          if (typeof ArrowLeft === "function") {
            move_left = requestAnimationFrame(ArrowLeft);
            _eyeLeft = true;
          }
        }
      } else if (dir === "right") {
        // Stop left if active
        if (_eyeLeft && typeof move_left !== "undefined" && move_left) {
          cancelAnimationFrame(move_left);
          move_left = false;
          _eyeLeft = false;
        }
        // Start right if not already moving
        if (!_eyeRight && typeof game_over !== "undefined" && !game_over) {
          if (typeof ArrowRight === "function") {
            move_right = requestAnimationFrame(ArrowRight);
            _eyeRight = true;
          }
        }
      } else if (dir === "center") {
        // Stop both
        if (_eyeLeft && typeof move_left !== "undefined" && move_left) {
          cancelAnimationFrame(move_left);
          move_left = false;
          _eyeLeft = false;
        }
        if (_eyeRight && typeof move_right !== "undefined" && move_right) {
          cancelAnimationFrame(move_right);
          move_right = false;
          _eyeRight = false;
        }
      }
    }

    // ── Blink-to-click ──
    if (e.data.type === "blink-click") {
      var x = e.data.x;
      var y = e.data.y;
      if (x != null && y != null) {
        var el = document.elementFromPoint(x, y);
        if (el) {
          el.click();
        }
      }
    }
  });
})();
