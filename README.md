# Joshua Guico Portfolio

A hand-coded static portfolio for Joshua Guico's software engineering, games, design, and production work. The site uses a cinematic archive style with film-strip frames, grain, light leaks, responsive galleries, media lightboxes, and data-driven case studies.

The current version is plain HTML, CSS, and JavaScript. There is no framework, build step, package install, or generated build output required.

## What Is Included

- Home archive landing page with featured project portals and a draggable film reel.
- Category pages for Software Engineering, Games, Design, and Production.
- Data-driven case-study pages through `project.html?project=PROJECT-SLUG`.
- Project sections for overview, goals, constraints, process, technical build notes, key solutions, screenshots/media, visual proof, takeaways, and launch links.
- Design gallery with grouped visual work and lightbox viewing.
- Media support for images, GIFs, videos, PDFs, gameplay recordings, and project documentation.
- Responsive layouts for desktop, tablet, and mobile.

## Current Highlights

- Photo Diary case study refreshed with the rebuilt app story, updated screenshots, before/after proof, Docker/Tomcat/MySQL notes, and Leaflet/OpenStreetMap interaction details.
- Reliable Routing Lab uses the current VM screenshot as its cover and still includes the interactive sanitized command replay.
- Q*bert Engine Final includes a gameplay capture converted from the supplied screen recording, with black placeholder slots reserved for future still media.
- Hansel vs. Gretel has been rebuilt from the mechanics presentation PDF with slide images, playtest data, process notes, and the original presentation linked.
- Software projects include Photo Diary, PlaytestIQ, and the web server/client routing lab.
- Game projects include Glorgo's Microplastics Mine, Earthline Protocol, Q*bert engine work, board games, Neuromancer, Open Your Browser, and Scythe of Sidereal.
- Production projects include PACN/PACF stageplay, script, program, rehearsal, and technical artifacts.
- Design work is organized as a gallery of posters, overlays, semester dumps, portraits, esports graphics, and motion pieces.

## Project Structure

```text
.
├── index.html          Home page
├── software.html       Software archive
├── games.html          Games archive
├── design.html         Design gallery/archive
├── production.html     Production archive
├── project.html        Shared case-study renderer
├── data.js             Site content and project data
├── script.js           Rendering, lightboxes, demo interactions, and UI behavior
├── styles.css          Full visual system and responsive styles
└── assets/             Images, videos, PDFs, and project proof files
```

Most content lives in `data.js`. The HTML pages provide static shells, while `script.js` renders project cards, category pages, case studies, galleries, media sections, lightboxes, and interactive elements from that shared data source. Metrics sections are intentionally not part of the current project model.

## Run Locally

From this folder:

```bash
python3 -m http.server 5173
```

Open:

```text
http://localhost:5173
```

The site can also be opened as static files, but a local server is better for testing media paths and browser behavior.

## Editing Content

Edit projects in the `projects` array inside `data.js`.

Common fields:

```js
{
  slug: "project-slug",
  title: "Project Title",
  category: "software",
  role: "Developer / Designer",
  year: "2026",
  type: "Full-Stack Web App",
  status: "In development",
  coverImage: "assets/photo-diary/photo-diary-rebuild-list.jpg",
  summary: "Short project summary.",
  what: "Longer case-study overview.",
  goals: [],
  constraints: [],
  process: [],
  solutions: [],
  screens: [],
  gallery: [],
  takeaways: [],
  links: []
}
```

Use the existing project entries as templates. Keep asset paths relative to the site root, such as `assets/photo-diary/photo-diary-rebuild-list.jpg`.

## Assets

Assets are organized by project or section under `assets/`.

Examples:

```text
assets/photo-diary/
assets/glorgo/
assets/neuromancer/
assets/open-your-browser/
assets/pacn/
assets/design-gallery/
assets/black-placeholder.svg
```

Prefer optimized JPG, PNG, AVIF, GIF, MP4, or PDF files. Large screenshots should be resized before committing so project pages stay fast.

`assets/black-placeholder.svg` is an intentional temporary asset. It replaces removed generated cover and visual-proof images until real screenshots, recordings, scans, or project-specific media are ready.

## Styling Notes

- Global palette, typography, and layout tokens are at the top of `styles.css`.
- Film-frame components, archive cards, case-study sections, galleries, media cards, and responsive rules all live in `styles.css`.
- Category and project colors are set in `data.js` and mapped through helper functions in `script.js`.
- Static pages include a cache-busting query string on `styles.css`, `data.js`, and `script.js`; bump it after visible CSS or data changes.

## Deployment

This is a static site. It can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static file host.

No build command is required. The publish directory is the repository root.

## Maintenance Checklist

- Add or update project data in `data.js`.
- Put supporting images, videos, and PDFs under `assets/`.
- Use `assets/black-placeholder.svg` for intentional temporary media slots, and replace it with real media when available.
- Run the local server and check the relevant archive and project pages.
- Verify new images load, lightboxes open, and responsive layouts do not overlap.
- Bump the asset query string in the HTML files when `styles.css`, `data.js`, or `script.js` changes.
