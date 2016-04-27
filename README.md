# Choose your own instrument

A playground for learning programming basics while making an instrument

The static version is here: http://theophani.github.io/choose-your-own-instrument/

## Get your own copy to play with

If you don’t have `git` or don’t want to use it:

Download the **raw** versions of [index.html](index.html), [styles.css](styles.css), and [tones.js](tones.js) files and put them in the same folder on your computer.

Or, using `git`:

```
git clone git@github.com:theophani/choose-your-own-instrument.git
```

## Play around to see how things work!

### Options when creating figures.

Available shapes:
"triangle", "circle", "square", "diamond"

Available colors:
"red", "yellow", "blue", "orange", "green", "purple", "pink", "black"

Available notes:
"c", "c#", "db", "d", "d#", "eb", "e", "f", "f#",
"gb", "g", "g#", "ab", "a", "a#", "bb", "b"

Sharps are denoted with “#”, and flats are denoted with “b”.

### Change the background

On line 28, the background class is set. You can change the background to one of
the available classes: "sky", "sea", "bubble-gum", "fireball", "sunset", "fuji"

```javascript
    document.body.className = "fuji"
```

### Helper functions

Use the `randomShape` function to choose a random shape.
Use it when adding a figure, like this:

```javascript
  addFigure(randomShape(), "orange", "e")
```

Use the `randomColor` function to choose a random color.
Use it when adding a figure, like this:

```javascript
  addFigure("circle", randomColor(), "g")
```

Use the `randomNote` function to choose a random note.
Use it when adding a figure, like this:

```javascript
  addFigure("diamond", "pink", randomNote())
```

Use the `noteFromNumber` function to get the nth note in the C Major scale.
Integers 0 though 7 are the notes "c" through "g".
This is especially useful when adding a series of figures in a loop, like this:

```javascript
  for (var i = 0; i < 16; i++) {
    addFigure("square", "black", noteFromNumber(i))
  }
```

You can use any integers from -28 to 41 (i.e. across 10 octaves).
Try this:

```javascript
  for (var i = -28; i <= 41; i++) {
    addFigure("diamond", "pink", noteFromNumber(i));
  }
```

### Tempo

To change the tempo of the auto playback, set the variable `bpm` to a number
greater than 0. The default is 300 beats per minute.

```javascript
bpm = 300
```

### Change how the notes sound

You can change how the notes sound by setting `tones.type`, `tones.attack`, and
`tones.release`.

The “type” determines the shape of the sound wave. The default is "sine".
The available types are: "sine", "square", "sawtooth", "triangle"

```javascript
tones.type = "sine"
```

The “attack” determines how intensely the sound starts. The default is 1.
Try other numbers to see how it smooths out the tone.

```javascript
tones.attack = 1
```

The “release” determines how quickly the sound fades out. The default is 100.
Try other numbers to see how it creates clipped or echoey sounds.

```javascript
tones.release = 100
```

Note: When you set these values, they affect all future notes played. That means
you can set these values in the console, as the auto playback is happening, and
change how the notes sound on the fly. Ask a coach to help you!

## The tones library

The tones library is by bit101: https://github.com/bit101/tones
