function playTone (note) {
  tones.play(note);
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
    autoPlayAll(200);
  }

  if (e.code === "Escape") {
    stopAutoPlayback();
  }
});

/* Special features */

// The “type” determines the shape of the sound wave.
// The available types are: "sine", "square", "sawtooth", "triangle"
tones.type = "sine"

// The “attack” determines how intensely the sound starts.
// Try other numbers to see how it smooths out the tone.
tones.attack = 1

// The “release” determines how quickly the sound fades out.
// Try other numbers to see how it creates clipped or echoey sounds.
tones.release = 100

function toneFromNumber (i) {
  var BASE_CHAR = 97;
  var firstNote = "c";
  var tone = String.fromCharCode((firstNote.charCodeAt(0) + i - BASE_CHAR) % 7 + BASE_CHAR);
  return tone;
}

function randomShape () {
  var shapes = ["triangle", "circle", "square", "diamond"];
  var i = Math.floor(Math.random() * shapes.length);
  return shapes[i];
}

function randomColor () {
  var colors = ["red", "yellow", "blue", "orange", "green", "purple", "pink", "black"];
  var i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

function randomTone () {
  return (Math.round(Math.random() * 100 * 15) + 15);
}
