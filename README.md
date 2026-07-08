# Joshua Guico Portfolio

A static portfolio for my software engineering, game development, design, and production work. It is built with plain HTML, CSS, and JavaScript, with project content driven from `data.js`.

The site works like a small archive: featured case studies up front, smaller project rooms nearby, media lightboxes for screenshots and trailers, and an interactive command replay for the networking lab.

## What It Showcases

- Full-stack and systems work: Photo Diary, PlaytestIQ, and Reliable Routing Lab.
- Game projects: Glorgo's Microplastics Mine, Open Your Browser, Neuromancer, Scythe of Sidereal, Earthline Protocol, Q*bert, and physical prototypes.
- Production work from PACN/PACF, including scripts, programs, show media, and rehearsal systems.
- Design and photography work across posters, esports graphics, portraits, semester dumps, and motion pieces.

## Project Structure

```text
index.html          Home page
software.html       Software archive
games.html          Games archive
design.html         Design gallery
production.html     Production archive
project.html        Shared case-study renderer
data.js             Project and gallery content
script.js           Rendering, lightboxes, carousel behavior, and demos
styles.css          Visual system and responsive layout
assets/             Images, videos, PDFs, and project media
```

## Run Locally

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

No build step is required.

## Editing

Most content lives in `data.js`. Add new project media under `assets/`, then reference it with a site-relative path such as:

```js
coverImage: "assets/photo-diary/photo-diary-rebuild-list.jpg"
```

When `styles.css`, `data.js`, or `script.js` changes, bump the query string in the HTML files so browsers pull the fresh version.

## Deploy

This is a static site. Deploy the repository root to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

Before publishing, I usually check:

- Home page cards open the right project pages.
- Project media loads without empty image slots.
- Lightboxes, videos, and the routing-lab command replay work.
- The layout holds on mobile and desktop.
