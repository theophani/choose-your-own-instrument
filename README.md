# Choose your own instrument

A playground for learning programming basics while making an instrument

## Get your own copy to play with

If you don’t have `git` or don’t want to use it:

Download the **raw** versions of [index.html](index.html), [styles.css](styles.css), and [tones.js](tones.js) files and put them in the same folder on your computer.

Or, using `git`:

```
git clone git@github.com:theophani/choose-your-own-instrument.git
```

## Play around to see how things work!

Open index.html in a code editor and look at lines 95 to 111.

Change a few things to see how it all works. Here are some ideas:

1. Make the circle a different color. These are the color choices: red, yellow, blue, orange, green, purple, pink, black

2. Change the yellow triangle to be a yellow square.

3. Make the blue square play an “f”. Try some other notes.

   You can also denote sharps with a “#” (e.g. d Sharp is “d#”) or flats with a “b” (e.g. E Flat is “eb”).

4. Find a line that looks something like this:

   ```
   circle.playTone = function (e) { tones.play("c", 4) };
   ```

   Find out what happens when you change the number `4` to a `5`. Do other numbers work?

   Find out what happens when you change `tones.play("c", 4)` to just `tones.play("c")` (i.e. remove the comma and the number).

   Find out what happens when you replace the letter in quotes (e.g. `"c"`) with the number `880`. Do other numbers work?

5. For one of the shapes, change `mouseover` to `click`. Reload the page, and try clicking on the shape.

6. Add a fourth shape.

7. Have you tried changing the `className` of the `document.body` yet? (See on line 93)

## Simplying the code by using functions

1. Try adding this line of code:

   ```
   addShape("circle", "purple", "c", 4, "mouseover");
   ```

2. Remove all the code that draws shapes, and create 10 purple circles using the `addShape` function instead.

