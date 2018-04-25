### Ein paar Optionen für verschiedene Figuren

Formen: "triangle" (Dreieck), "circle" (Kreis), "square" (Quadrat), "diamond" (Diamant), "star" (Stern)

Farben: "red" (Rot), "yellow" (Gelb), "blue" (Blau), "orange" (Orange), "green" (Grün), "purple" (Lila), "pink" (Rosa), "black" (Schwarz)

Musiknoten:  "c" (C), "c#" (Cis), "db" (Des), "d" (D), "d#" (Dis), "eb" (Es), "e" (E), "f" (F), "f#" (Fis), "gb" (Ges), "g" (G), "g#" (Gis), "ab" (As), "a" (A), "a#" (B), "bb" (B), "b" (H)

Erniedrigte Töne werden mit "b" angegeben, erhöhte Töne mit "#". Die Notenbezeichnungen sind Englisch, also Vorsicht mit H und B! (Wenn ihr ein H wollt, muesst ihr "b" angeben. Wenn ihr ein B wollt, muesst ihr "a#" oder "bb" angeben. )

### Hintergrund ändern

In Zeile 29 wird die Hintergrund-Klasse gesetzt. Du kannst den Hintergrund zu einer der verfügbaren Klassen ändern: "sky" (Himmel), "sea" (Meer), "bubble-gum" (Kaugummi), "fireball" (Feuerball), "sunset" (Sonnenuntergang), ""cool-mint" (Frische Minze), "fuji" (Vulkan).

```javascript
    document.body.className = "fuji"
```

### Hilfsfunktionen

Benutze die `randomShape`-Funktion um eine zufällige Form auszuwählen. Wenn Du eine Figur erzeugst, verwende es so:

```javascript
  addFigure(randomShape(), "orange", "e")
```

Benutze die `randomColor`-Funktion um eine zufällige Farbe auszuwählen. Wenn du eine Figur erzeugst, verwende es so:

```javascript
  addFigure("circle", randomColor(), "g")
```

Benutze die `randomNote`-Funktion um eine zufällige Note auszuwählen. Wenn du eine Figur erzeugst, verwende es so:

```javascript
  addFigure("diamond", "pink", randomNote())
```

Benutze die `noteFromNumber`-Funktion um die n-te Note auf der C-Dur-Tonleiter auszuwählen. Die Zahlen 0 bis 7 sind die Noten "c" bis "g". Das ist praktisch, um wenn du Figuren in einer Schleife hinzufügst, wie zum Beispiel:

```javascript
  for (var i = 0; i < 16; i++) {
    addFigure("square", "black", noteFromNumber(i))
  }
```

Du kannst alle ganzen Zahlen von -28 bis 41 verwenden, also 10 Oktaven. Probier es aus:

```javascript
  for (var i = -28; i <= 41; i++) {
    addFigure("diamond", "pink", noteFromNumber(i));
  }
```

### Tempo

Um den Takt beim automatischen Abspielen zu verändern, setze die Variable `bpm` zu einer Zahl größer als 0. Die Voreinstellung ist 300 Töne pro Minute.

```javascript
bpm = 300
```

### Verändere, wie die Töne klingen

Du kannst die Töne verändern, indem du `tones.type`, `tones.attack` und `tones.release` setzt.

Der Ton-Typ (`tones.type`) bestimmt die Form der Ton-Welle. Der vorgegebene Wert ist "sine" (Sinuswelle). Die verfügbaren Typen sind: "sine" (Sinus), "square" (Rechteck-Signal), "sawtooth" (Sägezahn-Signal), "triangle" (Dreiecks-Signal).

```javascript
tones.type = "sine"
```

Der Ton-Anfang (`tones.attack`) bestimmt wie scharf der Ton beginnt. Die Voreinstellung ist 1. Probiere andere Zahlen um zu hören wie es den Ton weicher macht.

```javascript
tones.attack = 1
```

Das Ausschwingen (`tones.release`) bestimmt wie schnell der Ton verklingt. Die Voreinstellung ist 100. Probere andere Zahlen um zu hören wie die Töne abgehackt werden oder nachhallen.

```javascript
tones.release = 100
```

Wichtig: Wenn Du diese Werte setzt, beeinflussen sie alle zukünftig gespielten Noten. Das heißt dass Du diese Werte während die Musik spielt in der Konsole eingeben und so die Töne jederzeit verändern kannst. Frag Deine\*n Betreuer\*in um Hilfe!

### Ändere das Aussehen deiner Figuren!

Versuch mal das hier:

```javascript
myFigure = addFigure("star", "yellow", randomNote())
myFigure.style.backgroundImage = "url('http://theophani.github.io/choose-your-own-instrument/swiss-cheese.jpg')"
myFigure.style.width = "500px"
myFigure.style.height = "500px"
```
