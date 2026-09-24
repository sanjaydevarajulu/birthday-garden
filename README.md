# Birthday Garden

A romantic, responsive birthday website made with HTML, CSS, and vanilla JavaScript. [Open the live site](https://sanjaydevarajulu.github.io/birthday-garden/).

## Personalize

Edit `birthdayConfig` and the arrays near the top of `js/script.js`: `sunflowers`, `memories`, `recordings`, `photos`, and `letters`. The gallery currently uses all 26 portraits in `assets/images/`, with a personal caption for each and a special closing note on Photo 26.

## Add your own audio

Place voice notes in `assets/audio/` and update each `file` value in `recordings`. Place optional background music at `assets/audio/background.mp3` and update `birthdayConfig.backgroundMusic` if needed. Music starts only after the visitor interacts.

## Project files

- `index.html` — page structure
- `css/style.css` — design, responsive layout, and animations
- `js/script.js` — editable content and interactions
- `assets/images/` — 26 birthday photos
- `assets/audio/` — optional voice notes and music
- `assets/icons/` — optional icons

The site honors reduced-motion preferences and shows graceful fallbacks if optional media is missing.
