# The Fashion Pet

A static website for a fictional pet grooming salon, with a map, a services page and a pet registration form.

## Context

I uploaded this in August 2020, a few months after I started learning web development. This README replaces a February 2023 one that overstated what works.

## Stack

- HTML, CSS, JavaScript, jQuery 3.5.1
- Leaflet 1.6.0 with OpenStreetMap tiles for the map
- Font Awesome (via a kit script) and Google Fonts
- bxSlider 4.2.12 is loaded but not used

## Running it

Serve the `PetSalon` folder as the web root:

```
cd PetSalon
python3 -m http.server 8000
```

Then open http://localhost:8000. The nav links load pages with paths like `../about.html` (`js/app.js`), which only resolve when `PetSalon` is the server root; opened straight from the file system they fail. The home page and map render; registration does not work (see below).

## Status

Archived. Not maintained.

## Known gaps

- `js/script.js` is loaded on the home page but expects the registration form. It throws at line 141 (`displayTable` looks for `#rowPet`, which doesn't exist there), so the rest of the file, including `init()`, never runs and the Register button is never wired. `register.html` opened on its own loads none of the app's scripts.
- `js/directory.js` writes into `#pets`, which is commented out in `register.html` (lines 71-73), so it throws on load. Line 12 compares `type.length` to `"Dog"`.
- `js/app.js` calls `initAbout`, `initServices` and `initRegister`, which are never defined.
- Search: the button's `onclick` names an undefined `SearchPet` and doesn't call it (`register.html` line 76), and `searchPet` is nested inside `deletePet` (`js/script.js` lines 159-165) with `toLowercase` misspelled.
- `clear()` sets `.val` instead of `.value` (`js/script.js` lines 111-122), so the form never clears. Table rows skip the Owner column, so they don't line up with the headers.
- User input goes into the table through `innerHTML` template strings (`js/script.js` lines 127-139), which allows HTML injection.
- Registrations live in an in-memory array; a reload loses them.
- Accessibility: the logo and hero images have no `alt` (`index.html` lines 28, 54); nav links are `<a>` tags without `href` (lines 36-42), so they aren't keyboard-reachable; social icons link to `#`.
- `services.html` has `<hi>` instead of a heading tag (line 14), a broken link to `../register.html/#c2` (line 17) and lorem ipsum text. `js/directory.js` hotlinks Google image thumbnails (lines 4, 6).
- `bird.jpeg`, `dog.jpeg` and `images.jpeg` are unused. Several CSS values are invalid (`display: flexbox`, `border-radius: space-around`).
- Icons come from a personal Font Awesome kit (`kit.fontawesome.com/6da635e2db.js`); if that kit is gone, icons won't load. No tests.

## What I'd do differently now

- Give each page its own script, or guard scripts against missing elements.
- Keep the registration list in `localStorage` or a small API so it survives a reload.
- Render rows with DOM APIs and `textContent` rather than HTML strings.
