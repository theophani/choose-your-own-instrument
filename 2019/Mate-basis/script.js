function playTone (note, octave) {
  tones.play(note, octave);
}

function playOne (element, delay, i) {
  function play () {
    element.className = element.className + " auto-playing";
    element.onmouseover();
    setTimeout(function () {
      element.className = element.className.replace(" auto-playing", "");
    }, delay);
  }

  setTimeout(play, delay * i);
}

function autoPlayAll (delay) {
  var elements = document.querySelectorAll('div');

  function playAll () {
    for (var i = 0; i < elements.length; i++) {
      playOne(elements[i], delay, i);
    }
  }

  playAll();
  setInterval(playAll, delay * elements.length);
}

/**
 * To cancel a timeout, you execute the `clearTimeout` function with the
 * id (which is a number) of the timeout.
 * When you create a timeout (including intervals, which are a special
 * kind of timeout), it returns its id, which is always one number higher
 * than the previous one, starting with the number 1.
 * Therefore, if you want to clear all timeouts, you can create a new
 * timeout, capture its id, and then clear all the timeouts starting from
 * 1 up to and including the timeout you created. This will also “clear”
 * timeouts that are already over, which is does not throw an error.
 */
function clearAllTimeouts () {
  var nextTimeout = setTimeout(function(){}, 0);
  for (var i = 1; i <= nextTimeout; i++) {
    clearTimeout(i);
  }
}

function resetClassNames () {
  var elements = document.querySelectorAll('.auto-playing');
  for (var i = 0; i < elements.length; i++) {
    elements[i].className = elements[i].className.replace(/ auto-playing/g, "");
  }
}

function stopAutoPlayback () {
  clearAllTimeouts();
  resetClassNames();
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    autoPlayAll(60 * 1000 / bpm);
  }

  if (e.code === "Escape") {
    stopAutoPlayback();
  }
});

/* Special features */

// bmp means “beats per minute”.
// Sets the tempo of the autoplay.
var bpm = 300;

// The “type” determines the shape of the sound wave.
// The available types are: "sine", "square", "sawtooth", "triangle"
tones.type = "sine"

// The “attack” determines how intensely the sound starts.
// Try other numbers to see how it smooths out the tone.
tones.attack = 1

// The “release” determines how quickly the sound fades out.
// Try other numbers to see how it creates clipped or echoey sounds.
tones.release = 100

// Takes an integer and returns a note in Hz.
// Integers 0 though 7 are the notes on the C Major scale.
function noteFromNumber (i) {
  var centerOctave = 4;
  var notes = ["c", "d", "e", "f", "g", "a", "b"];
  var notesPerOctave = notes.length;

  var j = i + (notesPerOctave * centerOctave);
  var octave = Math.floor(j / notesPerOctave);
  var note = notes[j % notesPerOctave];

  // Only octaves 0 through 9 are supported
  if (octave < 0 || octave > 9) {
    throw "The number " + i + " is outside of the supported range of the noteFromNumber function";
  } else {
    return tones.map[octave][note];
  }
}

// Returns a random shape: "triangle", "circle", "square", "diamond", "star"
function randomShape () {
  var shapes = ["triangle", "circle", "square", "diamond", "star"];
  var i = Math.floor(Math.random() * shapes.length);
  return shapes[i];
}

// Returns a random color: "red", "yellow", "blue", "orange", "green", "purple", "pink", "black"
function randomColor () {
  var colors = ["red", "yellow", "blue", "orange", "green", "purple", "pink", "black"];
  var i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

// Returns a random note from the audible range
function randomNote () {
  var audibleOctives = tones.map.slice(2, 8);
  var octaves = audibleOctives.map(function (octave) {
    return Object.keys(octave).map(function (key) {
      return octave[key];
    });
  });
  var allNotes = octaves.reduce(function (notes, notesInOctave) {
    return notes.concat(notesInOctave);
  }, []);

  return allNotes[Math.floor(Math.random() * allNotes.length)];
}

function triggerMouseOver (e) {
  if (e.target.onmouseover) {
    e.target.onmouseover();
  }
}

window.addEventListener("touchstart", function (e) {
  if (e.touches.length === 1) {
    triggerMouseOver(e)
  }

  if (e.touches.length === 2) {
    autoPlayAll(60 * 1000 / bpm);
  }

  if (e.touches.length === 3) {
    stopAutoPlayback();
  }
}, false);

window.addEventListener("load", function () {

    var instructions = document.createElement("section");
    instructions.className = "instructions";
    instructions.innerHTML = "<p>Click or Touch with one finger to Start</p>"

    if ('ontouchstart' in window) {
      instructions.innerHTML += '<p class="mobile">Tap the screen with two fingers to start playing sound. Tap with three to stop.</p>'
    }

    instructions.onclick = function () {
      tones.init();

      if ('ontouchstart' in window) {
        tones.play("c");
      }

      document.body.removeChild(instructions);
    }

    document.body.appendChild(instructions);
}, false);
