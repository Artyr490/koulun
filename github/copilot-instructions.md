## Repo snapshot

This is a tiny static exercise project. The app lives in the repository root as three files:

- `1.html` — single HTML page (contains an inline <script> with the function `tulostaParilliset()`).
- `1.css` — currently empty; optional place for styles.
- `1.js` — currently empty; optional place for JS if you prefer extracting inline scripts.

Files use UTF-8 and the HTML declares `lang="fi"`; user-facing text is in Finnish. Preserve encoding and language when editing UI strings.

## Big picture / why

This repo is an educational single-page exercise: the page asks for a positive even number and prints even numbers up to it. There is no build step, no framework, and no external dependencies. Agents should treat it as a small static site and avoid introducing heavy toolchains.

## First steps for an agent

1. Open and read `1.html` — it contains the working logic (validation and printing) in a single function named `tulostaParilliset()`.
2. Preserve Finnish UI messages (e.g. "Syötä positiivinen parillinen luku.") unless instructed to translate.
3. Avoid adding new dependencies. Prefer small, local edits (move inline script to `1.js` only if requested).

## How to run / manual checks

- Quick preview: open `1.html` directly in a browser.
- Local static server (preferred for testing relative paths):

```bash
python3 -m http.server 8000

# then open http://localhost:8000/1.html
```

## Project-specific conventions and patterns

- Filenames are numeric (`1.html`, `1.css`, `1.js`) — treat them as exercise files. If you add new files, prefer descriptive names but keep existing numeric files intact.
- The project uses plain DOM APIs and inline event wiring (`onclick` on the button). If you refactor, keep behavior identical and keep messages in Finnish.
- If you extract the inline script into `1.js`, also update `1.html` to include `<script src="1.js" defer></script>` and move DOM-ready logic to an event listener.

## Concrete examples (safe, minimal edits)

- Replace `onclick="tulostaParilliset()"` with an event listener in `1.js`:

```js
// in 1.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', tulostaParilliset);
});
```

- Preserve validation logic currently in `1.html` (checks: isNaN, odd number, <= 0). Example condition to keep:

```js
if (isNaN(luku) || luku % 2 !== 0 || luku <= 0) {
  tulos.innerHTML = "Syötä positiivinen parillinen luku.";
  return;
}
```

## Tests / CI

There is no test suite or CI configured. For verification, run the page locally and exercise inputs (edge cases: empty input, negative, odd, very large number).

## Integration points / external dependencies

None. Do not add network calls or external services without explicit instruction.

## Notes for maintainers and reviewers

- Keep changes small and easy to review. This repo is pedagogical — readability and preserving Finnish UX are top priorities.

If anything is unclear or you want the instructions to prefer a different approach (for example, always extract JS to `1.js`), tell me and I will update this file.
