# Assets

Portfolio media lives here, grouped by project or site section.

## Organization

- `site-background.avif` and `site-covers/` provide shared page backgrounds and archive hero images.
- `photo-diary/`, `playtestiq/`, `glorgo/`, `neuromancer/`, `open-your-browser/`, `pacn/`, and similar folders hold project-specific proof.
- `design-gallery/` holds design archive images and motion pieces.
- `black-placeholder.svg` is the shared temporary placeholder for removed generated media slots.
- Top-level legacy screenshots, GIFs, or videos are kept only when they are still referenced from `data.js`.

## Asset Guidelines

- Keep paths relative to the site root, for example `assets/photo-diary/photo-diary-rebuild-list.jpg`.
- Optimize large screenshots before adding them to the site.
- Prefer project folders over loose top-level files for new assets.
- Use `black-placeholder.svg` only for intentional temporary cover or proof slots awaiting real media.
- Delete assets once they are no longer referenced by `data.js`, `script.js`, `styles.css`, or the HTML files.
