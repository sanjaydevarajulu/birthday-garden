# Birthday Garden

A romantic, responsive birthday website made with HTML, CSS, and vanilla JavaScript. [Open the live site](https://sanjaydevarajulu.github.io/birthday-garden/).

## Personalize

Edit `birthdayConfig` and the arrays near the top of `js/script.js`: `sunflowers`, `memories`, `recordings`, `photos`, and `letters`. The gallery currently uses all 26 portraits in `assets/images/`, with a personal caption for each and a special closing note on Photo 26.

## Add your own audio

Place up to six birthday voice notes at `assets/audio/birthday-wish-01.mp3` through `birthday-wish-06.mp3`; their paths are listed in the editable `recordingFiles` array in `js/script.js`. The site displays six birthday wish cards. Place background music at `assets/audio/background.mp3` and update `birthdayConfig.backgroundMusic` if needed. The site tries to start the music when it opens. If the browser blocks sound before a visitor interacts, it starts after the first tap or key press; browser autoplay rules cannot be overridden by the site.

The four butterfly memories use separate photos, `assets/images/memory-01.jpeg` through `memory-04.jpeg`, distinct from the 26-image gallery.

## Project files

- `index.html` — page structure
- `css/style.css` — design, responsive layout, and animations
- `js/script.js` — editable content and interactions
- `assets/images/` — 26 birthday photos and four butterfly memory photos
- `assets/audio/` — six birthday voice wishes and background music
- `assets/icons/` — optional icons

The site honors reduced-motion preferences and shows graceful fallbacks if optional media is missing.
