# After the Last Interview

`After the Last Interview` is a static electronic literature project built with plain HTML, CSS, and JavaScript. It runs locally by opening `index.html` in a browser. No build step, package manager, or server is required.

## How to Run

1. Open [`index.html`](/Users/lukeyin/Downloads/DLSProject/index.html) in a modern desktop browser.
2. Read through the archive by using the folder navigation in the left sidebar.
3. The project stores reading progress in `localStorage`, so unlocks, notebook updates, restricted files, and endings persist between sessions on the same browser.

If you want a fresh run, clear site storage for the file or remove the `after-last-interview-state-v1` key from browser `localStorage`.

## Project Structure

- [`index.html`](/Users/lukeyin/Downloads/DLSProject/index.html): static shell for the archive interface.
- [`styles.css`](/Users/lukeyin/Downloads/DLSProject/styles.css): visual system for the haunted archive interface, responsive layout, typography, and interactive states.
- [`script.js`](/Users/lukeyin/Downloads/DLSProject/script.js): all narrative content, rendering logic, unlock rules, state persistence, notebook logic, phrase tracking, and ending selection.
- [`README.md`](/Users/lukeyin/Downloads/DLSProject/README.md): usage and implementation notes.

## Where the Prose Lives

All story content lives in the `docs` object inside [`script.js`](/Users/lukeyin/Downloads/DLSProject/script.js). Each document stores:

- `id`, `section`, `type`, `title`
- `meta` for the metadata bar
- `body` as HTML-rich prose
- `footnotes` for the annotation panel

Dynamic pages such as the hub, timeline, investigator notes, and accusation page use render functions so they can react to what the reader has already opened.

## Unlock and State System

The site tracks reading progress with `localStorage`:

- `visited`: every opened page
- `reveals`: clicked redactions
- `phraseSources`: unique places where the repeated phrase was clicked
- `accusation`: the reader's final interpretation choices

Key unlock rules:

- The archive begins with the opening file, hub, all five interviews, incident report, guest list, and schedule.
- The SMS export unlocks after reading Mara or Elias.
- The deleted draft email unlocks after reading June.
- The provenance letter unlocks after reading Simon.
- The annotated photo unlocks after the incident report and any interview.
- Mid-level evidence files unlock once at least three major documents have been opened.
- Celia's hidden addendum unlocks after all five interviews.
- The restored phone fragment unlocks after clicking `for the record` in at least three different places.
- The final unnumbered testimony page unlocks only after all other restricted files have been opened.

The accusation ending depends on both the reader's choices and what they actually discovered. A correct interpretation without the necessary restricted context does not produce the full truth ending.
