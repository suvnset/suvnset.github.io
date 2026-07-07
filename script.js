// pulls the content model loaded by data.js.
const { projects, categories, designGallery = [], designGalleryGroups = [] } = window.PORTFOLIO_DATA;

// maps project color names to reusable card gradients.
const gradients = {
  forest: "linear-gradient(145deg, #102017, #31452c 45%, #d8bd68 100%)",
  rice: "linear-gradient(145deg, #172015, #687b4d 44%, #f0a71a 100%)",
  terrace: "linear-gradient(145deg, #0f1712, #3c5633 35%, #91a169 62%, #d5c095 100%)",
  sea: "linear-gradient(145deg, #0d1514, #315d58 52%, #d8bd68 100%)",
  night: "linear-gradient(145deg, #090807, #161820 40%, #315d58 74%, #e78946 100%)",
  clay: "linear-gradient(145deg, #120f0a, #b76034 48%, #f0a71a 100%)"
};

// gives each archive page its own hero gradient.
const categoryGradients = {
  software: "linear-gradient(145deg, #102017, #31452c 45%, #d8bd68)",
  game: "linear-gradient(145deg, #0d1514, #315d58 45%, #d8bd68)",
  design: "linear-gradient(145deg, #080705, #b76034 44%, #f0a71a)",
  production: "linear-gradient(145deg, #120f0a, #687b4d 44%, #f0a71a)"
};

// maps data categories to their static archive pages.
const categoryPageMap = {
  software: "software.html",
  game: "games.html",
  design: "design.html",
  production: "production.html"
};

// keeps film-border variants swappable from one place.
const projectFilmStyles = [
  "film-style-orange"
];

const portalFilmStyles = [
  "film-style-orange"
];

const reelFilmStyles = [
  "film-style-orange"
];

const heroFilmStyles = [
  "film-style-orange"
];

// returns a repeatable film style for the supplied index.
function filmStyleFor(index, styles = projectFilmStyles) {
  return styles[index % styles.length];
}

// falls back to a safe gradient when a project has no color.
function gradientFor(item) {
  return gradients[item.color] || gradients.forest;
}

// resolves an archive key into a local page link.
function categoryUrl(category) {
  return categoryPageMap[category] || "index.html";
}

// escapes user-facing content before injecting template html.
function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// builds a deep link to the shared project detail page.
function projectUrl(project) {
  return `project.html?project=${encodeURIComponent(project.slug)}`;
}

// renders one film-card preview for home, archive, and related grids.
function projectCard(project, index) {
  const filmStyle = filmStyleFor(index);
  const hasCover = Boolean(project.coverImage);
  return `
    <a class="project-card ${filmStyle}" href="${projectUrl(project)}" style="--card-gradient: ${gradientFor(project)}" aria-label="Open ${escapeHtml(project.title)} case study">
      <div class="project-stock" aria-hidden="true">
        <span>${escapeHtml(project.category.toUpperCase())} 400</span>
        ${hasCover ? `<span class="baybayin stock-glyph">${escapeHtml(project.glyph)}</span>` : ""}
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="project-visual ${hasCover ? "has-cover" : ""}">
        ${hasCover
          ? `<img class="project-card-cover" src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(project.coverAlt || `${project.title} cover image`)}" loading="lazy" decoding="async">`
          : ""}
        ${hasCover ? "" : `<span class="baybayin project-glyph" aria-hidden="true">${escapeHtml(project.glyph)}</span>`}
      </div>
      <div class="project-info">
        <p class="eyebrow">${escapeHtml(categories[project.category].label)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
      </div>
    </a>
  `;
}

// avoids unsupported video type hints for quicktime files.
function videoSourceTypeAttribute(item) {
  if (!item.mime || item.mime === "video/quicktime") return "";
  return ` type="${escapeHtml(item.mime)}"`;
}

// reserves still-image proportions before lazy media finishes loading.
function imageDimensionAttributes(item) {
  const width = Number(item.width);
  const height = Number(item.height);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return "";
  return ` width="${width}" height="${height}"`;
}

// stores media metadata on triggers so one lightbox can open any proof item.
function mediaLightboxAttributes(item = {}, fallbackTag = "Media") {
  const type = item.type || (String(item.src || item.image || "").match(/\.(mp4|mov|m4v|webm)$/i) ? "video" : "image");
  const src = item.src || item.image || "";
  const title = item.title || item.label || "Media";
  const attrs = [
    `data-lightbox-src="${escapeHtml(src)}"`,
    `data-lightbox-type="${escapeHtml(type)}"`,
    `data-lightbox-title="${escapeHtml(title)}"`,
    `data-lightbox-tag="${escapeHtml(item.eyebrow || item.tag || fallbackTag)}"`,
    `data-lightbox-alt="${escapeHtml(item.alt || title)}"`
  ];
  if (item.poster) attrs.push(`data-lightbox-poster="${escapeHtml(item.poster)}"`);
  if (item.body) attrs.push(`data-lightbox-body="${escapeHtml(item.body)}"`);
  return attrs.join(" ");
}

// renders a playable motion item inside the design gallery.
function designVideoCard(item, index) {
  return `
    <article class="design-video-card" data-gallery-index="${index}" style="--gallery-index: ${index};">
      <div class="design-video-window">
        <video controls muted playsinline preload="metadata">
          <source src="${escapeHtml(item.src)}"${videoSourceTypeAttribute(item)}>
          <a href="${escapeHtml(item.src)}">Open ${escapeHtml(item.title)}</a>
        </video>
        <button class="gallery-enlarge-button gallery-lightbox-trigger" type="button" data-gallery-index="${index}" aria-label="Enlarge ${escapeHtml(item.title)}">Enlarge</button>
      </div>
      <div class="design-gallery-caption">
        <p class="section-kicker">${String(index + 1).padStart(2, "0")} · ${escapeHtml(item.tag || "Motion")}</p>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
    </article>
  `;
}

// renders one still image or downloadable source tile.
function designGalleryPiece(item, index) {
  if (item.type === "file") {
    return `
      <article class="design-gallery-piece source-piece" style="--gallery-index: ${index};">
        <a class="gallery-source-link" href="${escapeHtml(item.src)}" download>
          <span class="source-format">${String(index + 1).padStart(2, "0")} · ${escapeHtml(item.tag || "Source")}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </a>
      </article>
    `;
  }

  return `
    <article class="design-gallery-piece" data-gallery-index="${index}" style="--gallery-index: ${index};">
      <button class="gallery-open gallery-lightbox-trigger" type="button" data-gallery-index="${index}" aria-label="Enlarge image: ${escapeHtml(item.title)}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || item.title)}"${imageDimensionAttributes(item)} loading="lazy" decoding="async">
      </button>
      <div class="design-gallery-caption">
        <p class="section-kicker">${String(index + 1).padStart(2, "0")} · ${escapeHtml(item.tag || "Gallery")}</p>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
    </article>
  `;
}

// renders one grouped design section with videos before stills.
function designGalleryGroupMarkup(group, entries) {
  if (!entries.length) return "";

  const videos = entries.filter(({ item }) => item.type === "video");
  const stills = entries.filter(({ item }) => item.type !== "video");

  return `
    <section class="design-gallery-group" id="design-group-${escapeHtml(group.key)}">
      <div class="design-gallery-group-heading">
        <div>
          <p class="section-kicker">${escapeHtml(entries.length)} pieces</p>
          <h3>${escapeHtml(group.label)}</h3>
        </div>
        <p>${escapeHtml(group.intro || "")}</p>
      </div>

      ${videos.length ? `
        <div class="design-video-grid" aria-label="${escapeHtml(group.label)} motion work">
          ${videos.map(({ item, index }) => designVideoCard(item, index)).join("")}
        </div>
      ` : ""}

      ${stills.length ? `
        <div class="design-gallery-masonry" aria-label="${escapeHtml(group.label)} gallery">
          ${stills.map(({ item, index }) => designGalleryPiece(item, index)).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

// builds the whole design gallery from data.js entries.
function renderDesignGallery() {
  const container = document.querySelector("[data-render-design-gallery]");
  if (!container) return;

  const items = Array.isArray(designGallery) ? designGallery : [];
  const groups = Array.isArray(designGalleryGroups) ? designGalleryGroups : [];
  const indexedItems = items.map((item, index) => ({ item, index }));
  const groupedKeys = new Set(groups.map((group) => group.key));
  const fallbackEntries = indexedItems.filter(({ item }) => !groupedKeys.has(item.group));

  if (!items.length) {
    container.innerHTML = `
      <div class="section-heading">
        <p class="section-kicker">Contact sheet</p>
        <h2>Gallery archive</h2>
        <p>Add image and video entries to <code>designGallery</code> in <code>data.js</code> when expanding the archive.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="section-heading">
      <p class="section-kicker">Contact sheet · ${items.length} pieces</p>
      <h2>Design gallery</h2>
      <p>Grouped posters, social graphics, broadcast overlays, motion pieces, photography, semester dumps, and source material.</p>
    </div>

    <nav class="design-gallery-jump" aria-label="Design gallery groups">
      ${groups.map((group) => `
        <a href="#design-group-${escapeHtml(group.key)}">${escapeHtml(group.label)}</a>
      `).join("")}
    </nav>

    ${groups.map((group) => designGalleryGroupMarkup(
      group,
      indexedItems.filter(({ item }) => item.group === group.key)
    )).join("")}

    ${fallbackEntries.length ? designGalleryGroupMarkup({
      key: "misc",
      label: "Miscellaneous",
      intro: "Ungrouped visual material waiting for a more specific archive bucket."
    }, fallbackEntries) : ""}
  `;
}

// switches the lightbox media element between video and image.
function lightboxMediaMarkup(item) {
  if (!item || item.type === "file") return "";

  if (item.type === "video") {
    return `
      <video controls autoplay muted playsinline${item.poster ? ` poster="${escapeHtml(item.poster)}"` : ""}>
        <source src="${escapeHtml(item.src)}"${videoSourceTypeAttribute(item)}>
        <a href="${escapeHtml(item.src)}">Open ${escapeHtml(item.title)}</a>
      </video>
    `;
  }

  return `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || item.title)}">`;
}

// creates the reusable lightbox only when it is first needed.
function ensureDesignLightbox() {
  let lightbox = document.querySelector("[data-design-lightbox]");
  if (lightbox) return lightbox;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="design-lightbox" data-design-lightbox aria-hidden="true" role="dialog" aria-modal="true" aria-label="Expanded gallery item">
      <button class="design-lightbox-backdrop" type="button" data-lightbox-close aria-label="Close expanded gallery item"></button>
      <div class="design-lightbox-panel" role="document">
        <button class="design-lightbox-close" type="button" data-lightbox-close aria-label="Close expanded gallery item">×</button>
        <div class="design-lightbox-media" data-lightbox-media></div>
        <div class="design-lightbox-copy">
          <p class="section-kicker" data-lightbox-tag></p>
          <h3 data-lightbox-title></h3>
          <p data-lightbox-body></p>
        </div>
      </div>
    </div>
  `);

  return document.querySelector("[data-design-lightbox]");
}

// opens any image or video in the shared lightbox.
function openMediaLightbox(item, tag = "Media") {
  if (!item || item.type === "file" || !item.src) return;
  const lightbox = ensureDesignLightbox();
  lightbox.querySelector("[data-lightbox-media]").innerHTML = lightboxMediaMarkup(item);
  lightbox.querySelector("[data-lightbox-tag]").textContent = tag;
  lightbox.querySelector("[data-lightbox-title]").textContent = item.title || "";
  lightbox.querySelector("[data-lightbox-body]").textContent = item.body || "";
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.classList.add("is-open");
  document.body.classList.add("lightbox-open");
  lightbox.querySelector(".design-lightbox-close").focus();
}

// opens a design gallery item by its stored gallery index.
function openDesignLightbox(index) {
  const item = designGallery[Number(index)];
  if (!item || item.type === "file") return;
  openMediaLightbox(item, `${String(Number(index) + 1).padStart(2, "0")} · ${item.tag || "Gallery"}`);
}

// converts a clicked media trigger into lightbox data.
function openTriggerLightbox(trigger) {
  const item = {
    type: trigger.dataset.lightboxType || "image",
    src: trigger.dataset.lightboxSrc,
    poster: trigger.dataset.lightboxPoster,
    title: trigger.dataset.lightboxTitle,
    alt: trigger.dataset.lightboxAlt,
    body: trigger.dataset.lightboxBody
  };
  openMediaLightbox(item, trigger.dataset.lightboxTag || "Media");
}

// closes the lightbox and clears loaded media.
function closeDesignLightbox() {
  const lightbox = document.querySelector("[data-design-lightbox]");
  if (!lightbox || !lightbox.classList.contains("is-open")) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightbox.querySelector("[data-lightbox-media]").innerHTML = "";
  lightbox.querySelector("[data-lightbox-body]").textContent = "";
}

// wires gallery cards and media buttons to the shared lightbox.
function setupDesignLightbox() {
  if (document.body.dataset.lightboxSetup === "ready") return;
  document.body.dataset.lightboxSetup = "ready";

  document.addEventListener("click", (event) => {
    const mediaTrigger = event.target.closest("[data-lightbox-src]");
    if (mediaTrigger) {
      event.preventDefault();
      openTriggerLightbox(mediaTrigger);
      return;
    }

    const explicitTrigger = event.target.closest(".gallery-lightbox-trigger[data-gallery-index]");
    const cardTrigger = explicitTrigger ? null : event.target.closest(".design-gallery-piece[data-gallery-index], .design-video-card[data-gallery-index]");
    if (cardTrigger && event.target.closest("a, button, video")) return;

    const trigger = explicitTrigger || cardTrigger;
    if (!trigger) return;

    event.preventDefault();
    openDesignLightbox(trigger.dataset.galleryIndex);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close]")) closeDesignLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDesignLightbox();
  });
}

// fills project grids for home, archives, and featured work.
function renderProjects() {
  document.querySelectorAll("[data-render-projects]").forEach((container) => {
    const mode = container.dataset.renderProjects;
    const limit = Number(container.dataset.limit || 999);
    const currentCategory = document.body.dataset.category;
    let list = projects;

    if (mode === "category" && currentCategory) {
      list = projects.filter((project) => project.category === currentCategory);
    }

    if (mode === "featured") {
      const preferred = [
        "photo-diary",
        "playtestiq",
        "web-server-client",
        "glorgos-microplastics-mine",
        "earthline-protocol",
        "qbert-engine-final",
        "yokai-paradox",
        "hansel-vs-gretel",
        "race-against-thieves-up-the-river",
        "neuromancer",
        "open-your-browser",
        "scythe-of-sidereal",
        "usc-esports-graphics",
        "pacn-pamana"
      ];
      list = preferred.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
    }

    container.innerHTML = list.slice(0, limit).map(projectCard).join("");
  });
}

// renders the four archive room cards on the homepage.
function renderCategories() {
  const container = document.querySelector("[data-render-categories]");
  if (!container) return;

  container.innerHTML = Object.entries(categories)
    .map(([key, category], index) => `
      <a class="portal-card ${filmStyleFor(index, portalFilmStyles)}" href="${categoryUrl(key)}" style="--portal-gradient: ${categoryGradients[key]}" aria-label="Open ${escapeHtml(category.label)} archive">
        <div class="portal-visual">
          <span class="baybayin" aria-hidden="true">${escapeHtml(category.baybayin)}</span>
        </div>
        <p class="eyebrow">0${index + 1} · ${escapeHtml(category.eyebrow)}</p>
        <h3>${escapeHtml(category.label)}</h3>
        <p>${escapeHtml(category.intro)}</p>
      </a>
    `)
    .join("");
}

// builds the archive hero from the active body category.
function renderCategoryHero() {
  const hero = document.querySelector("[data-render-category-hero]");
  if (!hero) return;

  const key = document.body.dataset.category;
  const category = categories[key];
  const hasDesignGallery = key === "design" && Array.isArray(designGallery) && designGallery.length;
  const count = hasDesignGallery ? designGallery.length : projects.filter((project) => project.category === key).length;
  const countLabel = hasDesignGallery ? `${count} pieces` : `${count} frames`;
  const categoryIndex = Math.max(0, Object.keys(categories).indexOf(key));
  const heroFilmStyle = filmStyleFor(categoryIndex, heroFilmStyles);
  const hasCover = Boolean(category.coverImage);
  const coverPosition = category.coverPosition || "center";

  hero.style.setProperty("--category-gradient", categoryGradients[key]);
  hero.innerHTML = `
    <div>
      <div class="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>${escapeHtml(category.label)}</span></div>
      <p class="eyebrow">${escapeHtml(category.eyebrow)} · ${escapeHtml(countLabel)}</p>
      <h1>${escapeHtml(category.label)}</h1>
      <p class="hero-subtitle">${escapeHtml(category.intro)}</p>
      <div class="hero-actions">
        <a class="button primary" href="${hasDesignGallery ? "#design-gallery" : "#case-studies"}">${hasDesignGallery ? "View gallery" : "View frames"}</a>
        <a class="button secondary" href="index.html">Back home</a>
      </div>
    </div>
    <aside class="archive-mark negative-frame ${heroFilmStyle} ${hasCover ? "has-cover" : ""}" aria-label="${escapeHtml(category.label)} cover frame">
      <div class="film-edge top"><span>ARCHIVE</span><span>${escapeHtml(key)}</span><span>400TX</span></div>
      <div class="frame-window cover-photo-frame" style="--cover-position: ${escapeHtml(coverPosition)};">
        ${hasCover
          ? `<img class="archive-cover-image" src="${escapeHtml(category.coverImage)}" alt="${escapeHtml(category.coverAlt || `${category.label} cover image`)}" loading="eager" decoding="async">`
          : `<span class="baybayin">${escapeHtml(category.baybayin)}</span>`}
      </div>
      <div class="film-edge bottom"><span>${escapeHtml(category.pronunciation)}</span><span>JSG</span><span>2026</span></div>
    </aside>
  `;

  const nextSection = hero.nextElementSibling;
  if (nextSection && !nextSection.id) nextSection.id = hasDesignGallery ? "design-gallery" : "case-studies";
}

// fills the horizontal film strip with selected project frames.
function renderReel() {
  const container = document.querySelector("[data-render-reel]");
  if (!container) return;
  const reelProjects = projects.slice(0, 8);
  container.innerHTML = reelProjects
    .map((project, index) => `
      <a class="reel-frame ${filmStyleFor(index, reelFilmStyles)}" href="${projectUrl(project)}" data-frame="${String(index + 1).padStart(2, "0")} / ${escapeHtml(project.category.toUpperCase())}" style="--card-gradient: ${gradientFor(project)}">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.cardNote || project.type)}</p>
      </a>
    `)
    .join("");
}

// renders plain text lists as repeated mini cards.
function listMarkup(items, className = "mini-card") {
  return items.map((item) => `<article class="${className}"><p>${escapeHtml(item)}</p></article>`).join("");
}

// renders chronological project process steps.
function processMarkup(items) {
  return items
    .map((item) => `
      <article class="process-step">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `)
    .join("");
}

// renders reusable detail cards for technical and proof sections.
function detailCardMarkup(items = []) {
  return items
    .map((item) => `
      <article class="detail-card">
        <p class="section-kicker">${escapeHtml(item.eyebrow || "Detail")}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `)
    .join("");
}

// renders visual proof entries with optional image controls.
function galleryItemMarkup(item, index, project) {
  const data = typeof item === "string" ? { title: item } : item;
  const number = String(index + 1).padStart(2, "0");
  const title = data.title || data.label || "Visual proof";
  const kicker = data.eyebrow || data.type || "Proof";
  const body = data.body || "";
  const imageStyles = [];
  if (data.position) imageStyles.push(`object-position: ${escapeHtml(data.position)};`);
  if (data.fit) imageStyles.push(`object-fit: ${escapeHtml(data.fit)};`);

  if (data.image) {
    return `
      <article class="gallery-item gallery-image-card" style="--card-gradient: ${gradientFor(project)}">
        <figure class="gallery-proof-media">
          <button class="media-lightbox-trigger" type="button" ${mediaLightboxAttributes({
            image: data.image,
            title,
            eyebrow: `${number} · ${kicker}`,
            alt: data.alt || `${project.title} visual proof: ${title}`,
            body
          }, "Visual proof")} aria-label="Enlarge ${escapeHtml(title)}">
            <img src="${escapeHtml(data.image)}" alt="${escapeHtml(data.alt || `${project.title} visual proof: ${title}`)}" loading="lazy" decoding="async" style="${imageStyles.join(" ")}">
          </button>
        </figure>
        <div class="gallery-proof-copy">
          <p class="section-kicker">${escapeHtml(number)} · ${escapeHtml(kicker)}</p>
          <h3>${escapeHtml(title)}</h3>
          ${body ? `<p>${escapeHtml(body)}</p>` : ""}
        </div>
      </article>
    `;
  }

  return `
    <article class="gallery-item gallery-text-card" style="--card-gradient: ${gradientFor(project)}">
      <span>${number} · ${escapeHtml(title)}</span>
    </article>
  `;
}

// renders the interface or media proof rows on project pages.
function screenMarkup(screens = []) {
  return screens
    .map((screen, index) => {
      const details = Array.isArray(screen.details) ? screen.details : [];
      const imageStyles = [];
      if (screen.position) imageStyles.push(`object-position: ${escapeHtml(screen.position)};`);
      if (screen.fit) imageStyles.push(`object-fit: ${escapeHtml(screen.fit)};`);
      const imageStyle = imageStyles.length ? ` style="${imageStyles.join(" ")}"` : "";
      return `
        <article class="screen-card">
          <figure class="screen-shot">
            <button class="media-lightbox-trigger" type="button" ${mediaLightboxAttributes({
              image: screen.image,
              title: screen.title,
              eyebrow: `${String(index + 1).padStart(2, "0")} · ${screen.eyebrow}`,
              alt: screen.alt,
              body: screen.body
            }, "Interface screen")} aria-label="Enlarge ${escapeHtml(screen.title)}">
              <img src="${escapeHtml(screen.image)}" alt="${escapeHtml(screen.alt)}" loading="lazy" decoding="async"${imageStyle}>
            </button>
          </figure>
          <div class="screen-copy">
            <p class="section-kicker">${String(index + 1).padStart(2, "0")} · ${escapeHtml(screen.eyebrow)}</p>
            <h3>${escapeHtml(screen.title)}</h3>
            <p>${escapeHtml(screen.body)}</p>
            ${details.length ? `
              <ul class="screen-details">
                ${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
              </ul>
            ` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

// hides the screen section when a project has no screen proof.
function screenSectionMarkup(project) {
  if (!Array.isArray(project.screens) || !project.screens.length) return "";

  return `
    <section class="section case-section screen-section" id="screens" data-reveal>
      <h2>${escapeHtml(project.screensTitle || "Interface screens")}</h2>
      <div class="screen-grid">
        ${screenMarkup(project.screens)}
      </div>
    </section>
  `;
}

// renders trailers and animation sets when media is attached.
function projectMediaSectionMarkup(project) {
  const media = project.media || {};
  const trailers = Array.isArray(media.trailers)
    ? media.trailers
    : (media.trailer ? [media.trailer] : []);
  const animations = Array.isArray(media.animations) ? media.animations : [];
  if (!trailers.length && !animations.length) return "";

  return `
    <section class="section case-section media-section" id="media" data-reveal>
      <h2>${escapeHtml(media.title || "Trailer + animation")}</h2>
      <div class="media-stack">
        ${trailers.map((trailer) => `
          <article class="trailer-card">
            <div class="trailer-window">
              <video controls playsinline preload="metadata"${trailer.poster ? ` poster="${escapeHtml(trailer.poster)}"` : ""}>
                <source src="${escapeHtml(trailer.src)}"${videoSourceTypeAttribute(trailer) || ' type="video/mp4"'}>
                Your browser does not support embedded video.
              </video>
              <button class="gallery-enlarge-button" type="button" ${mediaLightboxAttributes({
                type: "video",
                src: trailer.src,
                poster: trailer.poster,
                title: trailer.title || "Project trailer",
                eyebrow: trailer.eyebrow || "Trailer",
                body: trailer.body
              }, "Trailer")} aria-label="Enlarge ${escapeHtml(trailer.title || "project trailer")}">Enlarge</button>
            </div>
            <div class="trailer-copy">
              <p class="section-kicker">${escapeHtml(trailer.eyebrow || "Trailer")}</p>
              <h3>${escapeHtml(trailer.title || "Project trailer")}</h3>
              <p>${escapeHtml(trailer.body || "")}</p>
            </div>
          </article>
        `).join("")}

        ${animations.length ? `
          <div class="animation-panel" id="animations">
            <div class="animation-panel-heading">
              <p class="section-kicker">Player animation set</p>
              <h3>Motion states made for Scylax</h3>
            </div>
            <div class="animation-grid">
              ${animations.map((animation) => `
                <article class="animation-card">
                  <button class="media-lightbox-trigger" type="button" ${mediaLightboxAttributes({
                    image: animation.src,
                    title: animation.title,
                    eyebrow: "Animation",
                    alt: animation.alt,
                    body: animation.body
                  }, "Animation")} aria-label="Enlarge ${escapeHtml(animation.title)} animation">
                    <img src="${escapeHtml(animation.src)}" alt="${escapeHtml(animation.alt)}" loading="lazy" decoding="async">
                  </button>
                  <div>
                    <h4>${escapeHtml(animation.title)}</h4>
                    <p>${escapeHtml(animation.body)}</p>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

// formats demo command output for the fake terminal.
function demoOutputText(demo, command) {
  const prompt = demo.prompt || "$";
  const output = Array.isArray(command.output) ? command.output : [];
  return [`${prompt} ${command.command}`, ...output].join("\n");
}

// renders the interactive command replay section.
function projectDemoSectionMarkup(project) {
  const demo = project.demo || {};
  const commands = Array.isArray(demo.commands) ? demo.commands : [];
  if (!commands.length) return "";

  const firstCommand = commands[0];
  const topology = Array.isArray(demo.topology) ? demo.topology : [];

  return `
    <section class="section case-section demo-section" id="demo" data-reveal>
      <h2>${escapeHtml(demo.title || "Interactive demo")}</h2>
      <div class="demo-shell">
        <div class="demo-copy">
          <p>${escapeHtml(demo.body || "")}</p>
          ${topology.length ? `
            <div class="demo-topology" aria-label="Demo topology">
              ${topology.map((item) => `
                <div class="demo-node">
                  <strong>${escapeHtml(item.node)}</strong>
                  <span>${escapeHtml((item.neighbors || []).join("  ->  "))}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <div class="demo-console" data-demo-console>
          <div class="demo-terminal-bar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <strong>lab14 replay</strong>
          </div>
          <pre data-demo-output>${escapeHtml(demoOutputText(demo, firstCommand))}</pre>
          <div class="demo-command-row" aria-label="Replay demo commands">
            ${commands.map((item, index) => `
              <button class="demo-command ${index === 0 ? "active" : ""}" type="button" data-demo-command="${index}">
                ${escapeHtml(item.label || item.command)}
              </button>
            `).join("")}
          </div>
          <p class="demo-note" data-demo-note>${escapeHtml(firstCommand.note || "")}</p>
        </div>
      </div>
    </section>
  `;
}

// assembles the full case-study page for the current project slug.
function renderProjectDetail() {
  const root = document.querySelector("[data-render-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || projects[0].slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    root.innerHTML = `
      <section class="section">
        <div class="case-card">
          <p class="eyebrow">Missing frame</p>
          <h1>Project not found.</h1>
          <p>That project slug does not exist yet. Go back to the archive and choose another frame.</p>
          <a class="button primary" href="index.html">Back to home</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${project.title} — Joshua Guico`;
  document.body.dataset.category = project.category;
  root.style.setProperty("--card-gradient", gradientFor(project));
  const category = categories[project.category];
  const related = projects.filter((item) => item.category === project.category && item.slug !== project.slug);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const projectHeroFilmStyle = filmStyleFor(currentIndex + 1, heroFilmStyles);
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];

  root.innerHTML = `
    <section class="section project-hero">
      <div class="project-hero-grid">
        <div class="project-title-row" data-reveal>
          <div class="breadcrumbs">
            <a href="index.html">Home</a><span>/</span><a href="${categoryUrl(project.category)}">${escapeHtml(category.label)}</a><span>/</span><span>${escapeHtml(project.title)}</span>
          </div>
          <p class="eyebrow">${escapeHtml(project.type)} · ${escapeHtml(project.status)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-facts">
            <div class="fact"><span>Role</span><strong>${escapeHtml(project.role)}</strong></div>
            <div class="fact"><span>Year</span><strong>${escapeHtml(project.year)}</strong></div>
            <div class="fact"><span>Archive</span><strong>${escapeHtml(category.label)}</strong></div>
          </div>
          <div class="hero-actions">
            <a class="button primary" href="#launch">Launch links</a>
            ${project.media ? `<a class="button secondary" href="#media">Watch media</a>` : ""}
            <a class="button secondary" href="#process">Jump to process</a>
            ${Array.isArray(project.technical) && project.technical.length ? `<a class="button secondary" href="#technical">Technical build</a>` : ""}
            ${project.demo && Array.isArray(project.demo.commands) && project.demo.commands.length ? `<a class="button secondary" href="#demo">Try demo</a>` : ""}
            ${Array.isArray(project.screens) && project.screens.length ? `<a class="button secondary" href="#screens">View screens</a>` : ""}
            <a class="button secondary" href="#takeaways">Jump to takeaways</a>
          </div>
        </div>

        <aside class="project-hero-card negative-frame ${projectHeroFilmStyle}" data-reveal>
          <div class="film-edge top"><span>CASE STUDY</span><span>${escapeHtml(project.category)}</span><span>${escapeHtml(project.year)}</span></div>
          <div class="frame-window">
            ${project.coverImage
              ? `<button class="media-lightbox-trigger project-cover-trigger" type="button" ${mediaLightboxAttributes({
                  image: project.coverImage,
                  title: project.title,
                  eyebrow: "Cover",
                  alt: project.coverAlt || `${project.title} cover image`,
                  body: project.summary
                }, "Cover")} aria-label="Enlarge ${escapeHtml(project.title)} cover image">
                  <img class="project-cover-image" src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(project.coverAlt || `${project.title} cover image`)}" loading="eager" decoding="async">
                </button>`
              : `<span class="baybayin project-glyph" aria-hidden="true">${escapeHtml(project.glyph)}</span>`}
          </div>
          <div class="film-edge bottom"><span>${escapeHtml(project.title)}</span><span>JSG</span><span>400TX</span></div>
        </aside>
      </div>
    </section>

    <section class="section case-section" id="what" data-reveal>
      <h2>What it is</h2>
      <div class="case-card">
        <p>${escapeHtml(project.what)}</p>
      </div>
    </section>

    <section class="section case-section" id="goals" data-reveal>
      <h2>Goals + constraints</h2>
      <div>
        <div class="goal-grid">
          ${listMarkup(project.goals)}
        </div>
        <div class="case-card" style="margin-top: 1rem;">
          <p class="section-kicker">Constraints</p>
          <div class="goal-grid">${listMarkup(project.constraints)}</div>
        </div>
      </div>
    </section>

    <section class="section case-section" id="process" data-reveal>
      <h2>Process</h2>
      <div class="process-grid">
        ${processMarkup(project.process)}
      </div>
    </section>

    ${Array.isArray(project.technical) && project.technical.length ? `
      <section class="section case-section" id="technical" data-reveal>
        <h2>${escapeHtml(project.technicalTitle || "Technical build")}</h2>
        <div class="detail-grid">
          ${detailCardMarkup(project.technical)}
        </div>
      </section>
    ` : ""}

    ${projectDemoSectionMarkup(project)}

    <section class="section case-section" id="solutions" data-reveal>
      <h2>Key solutions</h2>
      <div class="solution-grid">
        ${listMarkup(project.solutions)}
      </div>
    </section>

    ${projectMediaSectionMarkup(project)}

    ${screenSectionMarkup(project)}

    <section class="section case-section" id="gallery" data-reveal>
      <h2>Visual proof</h2>
      <div class="gallery-grid">
        ${gallery.map((item, index) => galleryItemMarkup(item, index, project)).join("")}
      </div>
    </section>

    <section class="section case-section" id="takeaways" data-reveal>
      <h2>Takeaways</h2>
      <div class="takeaway-grid">
        ${listMarkup(project.takeaways)}
      </div>
    </section>

    <section class="section" id="launch" data-reveal>
      <div class="launch-card ${project.links.length > 4 ? "launch-card-dense" : ""}">
        <div class="launch-copy">
          <p class="section-kicker">My submissions / launch links</p>
          <h2>Play, view, or read the project.</h2>
          ${project.launchNote
            ? `<p class="launch-note">${escapeHtml(project.launchNote)}</p>`
            : `<p class="launch-note">Project links can be added in <code>data.js</code> when public builds, videos, repositories, galleries, or scripts are ready to share.</p>`}
        </div>
        <div class="link-row launch-link-grid" aria-label="${escapeHtml(project.title)} links">
          ${project.links.map((link, index) => `
            <a class="project-link ${index === 0 ? "primary" : ""}" href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>
          `).join("")}
        </div>
      </div>
    </section>

    ${related.length ? `
      <section class="section" data-reveal>
        <div class="section-heading"><p class="section-kicker">Same archive</p><h2>More ${escapeHtml(category.label)}</h2></div>
        <div class="project-grid">${related.slice(0, 3).map(projectCard).join("")}</div>
      </section>
    ` : ""}

    <section class="section next-prev" data-reveal>
      <a class="back-link" href="${projectUrl(previous)}">← ${escapeHtml(previous.title)}</a>
      <a class="back-link" href="${categoryUrl(project.category)}">Back to ${escapeHtml(category.label)}</a>
      <a class="back-link" href="${projectUrl(next)}">${escapeHtml(next.title)} →</a>
    </section>
  `;
}

// wires demo buttons to swap terminal output without navigation.
function setupProjectDemo() {
  const consoleRoot = document.querySelector("[data-demo-console]");
  if (!consoleRoot) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || projects[0].slug;
  const project = projects.find((item) => item.slug === slug);
  const demo = project?.demo;
  const commands = Array.isArray(demo?.commands) ? demo.commands : [];
  const output = consoleRoot.querySelector("[data-demo-output]");
  const note = consoleRoot.querySelector("[data-demo-note]");

  consoleRoot.querySelectorAll("[data-demo-command]").forEach((button) => {
    button.addEventListener("click", () => {
      const command = commands[Number(button.dataset.demoCommand)];
      if (!command || !output) return;

      output.textContent = demoOutputText(demo, command);
      if (note) note.textContent = command.note || "";

      consoleRoot.querySelectorAll("[data-demo-command]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      consoleRoot.classList.remove("is-running");
      void consoleRoot.offsetWidth;
      consoleRoot.classList.add("is-running");
    });
  });
}

// highlights the active archive link in the header.
function setActiveNav() {
  const category = document.body.dataset.category;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === category);
  });
}

// updates hover coordinates for cursor-following glow effects.
function setupHoverFeedback() {
  const hoverTargets = ".project-card, .portal-card, .reel-frame, .button, .contact-links a, .text-link, .project-link, .back-link, .design-video-card, .design-gallery-piece, .gallery-source-link, .gallery-lightbox-trigger, .media-lightbox-trigger, .demo-command";

  document.querySelectorAll(hoverTargets).forEach((element) => {
    if (element.dataset.hoverFeedback === "ready") return;
    element.dataset.hoverFeedback = "ready";

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      element.classList.add("is-hovering");
      element.style.setProperty("--hover-x", `${x.toFixed(2)}%`);
      element.style.setProperty("--hover-y", `${y.toFixed(2)}%`);
    });

    element.addEventListener("pointerleave", () => {
      element.classList.remove("is-hovering");
      element.style.removeProperty("--hover-x");
      element.style.removeProperty("--hover-y");
    });

    element.addEventListener("blur", () => {
      element.classList.remove("is-hovering");
      element.style.removeProperty("--hover-x");
      element.style.removeProperty("--hover-y");
    });
  });
}

// moves light leaks with drift, scroll progress, and scroll velocity.
function setupScrollReactiveLightLeaks() {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduceMotion) return;

  const root = document.documentElement;
  const current = {
    oneX: 0,
    oneY: 22,
    twoX: 0,
    twoY: -10,
    oneScale: 1,
    twoScale: 1,
    oneRotate: -4,
    twoRotate: 5
  };
  const target = { ...current };
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let progress = 0;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const retarget = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress = window.scrollY / maxScroll;
    const scroll = window.scrollY;
    const delta = scroll - lastScrollY;
    lastScrollY = scroll;
    scrollVelocity = scrollVelocity * 0.9 + delta * 0.1;

    target.oneX = 10 + progress * 92 + Math.sin(progress * Math.PI * 1.2) * 34 + clamp(scrollVelocity * 0.12, -18, 18);
    target.oneY = 18 + progress * 132 + Math.cos(progress * Math.PI * 1.55) * 26 + clamp(scrollVelocity * 0.08, -14, 14);
    target.twoX = -12 - progress * 118 + Math.cos(progress * Math.PI * 1.08) * 42 - clamp(scrollVelocity * 0.1, -16, 16);
    target.twoY = -16 + progress * 64 + Math.sin(progress * Math.PI * 1.9) * 34 + clamp(scrollVelocity * 0.06, -12, 12);
    target.oneScale = 1.002 + Math.sin(progress * Math.PI * 1.7) * 0.012;
    target.twoScale = 0.992 + Math.cos(progress * Math.PI * 1.15) * 0.016;
    target.oneRotate = -4.4 + progress * 3.2 + clamp(scrollVelocity * 0.004, -0.45, 0.45);
    target.twoRotate = 5.8 - progress * 4.6 - clamp(scrollVelocity * 0.004, -0.5, 0.5);
  };

  const animate = (time = 0) => {
    const drift = time * 0.001;
    const scrollPulse = clamp(scrollVelocity / 180, -1, 1);
    const eased = {
      oneX: target.oneX + Math.sin(drift * 0.18 + progress * 1.7) * 18,
      oneY: target.oneY + Math.cos(drift * 0.115 + 0.6) * 15 + scrollPulse * 5,
      twoX: target.twoX + Math.cos(drift * 0.095 + 1.8) * 24,
      twoY: target.twoY + Math.sin(drift * 0.14 + progress * 1.2) * 19 - scrollPulse * 4,
      oneScale: target.oneScale + Math.sin(drift * 0.045) * 0.006,
      twoScale: target.twoScale + Math.cos(drift * 0.061 + 1.2) * 0.009,
      oneRotate: target.oneRotate + Math.sin(drift * 0.05) * 0.42,
      twoRotate: target.twoRotate + Math.cos(drift * 0.04) * 0.55
    };

    Object.keys(current).forEach((key) => {
      const easing = key.includes("Scale") ? 0.018 : 0.036;
      current[key] += (eased[key] - current[key]) * easing;
    });
    scrollVelocity *= 0.9;

    root.style.setProperty("--leak-one-x", `${current.oneX.toFixed(1)}px`);
    root.style.setProperty("--leak-one-y", `${current.oneY.toFixed(1)}px`);
    root.style.setProperty("--leak-two-x", `${current.twoX.toFixed(1)}px`);
    root.style.setProperty("--leak-two-y", `${current.twoY.toFixed(1)}px`);
    root.style.setProperty("--leak-one-scale", current.oneScale.toFixed(3));
    root.style.setProperty("--leak-two-scale", current.twoScale.toFixed(3));
    root.style.setProperty("--leak-one-rotate", `${current.oneRotate.toFixed(2)}deg`);
    root.style.setProperty("--leak-two-rotate", `${current.twoRotate.toFixed(2)}deg`);

    window.requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", retarget, { passive: true });
  window.addEventListener("resize", retarget);
  retarget();
  window.requestAnimationFrame(animate);
}

// reveals elements shortly before they scroll into view.
function setupReveal() {
  const items = [...document.querySelectorAll("[data-reveal]")];
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "420px 0px", threshold: 0.01 }
  );

  items.forEach((item) => observer.observe(item));
}

// lets horizontal film strips be dragged with a pointer.
function setupDraggableReels() {
  document.querySelectorAll(".draggable").forEach((strip) => {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    strip.addEventListener("pointerdown", (event) => {
      isDragging = true;
      strip.setPointerCapture(event.pointerId);
      startX = event.pageX - strip.offsetLeft;
      scrollLeft = strip.scrollLeft;
    });

    strip.addEventListener("pointermove", (event) => {
      if (!isDragging) return;
      const x = event.pageX - strip.offsetLeft;
      strip.scrollLeft = scrollLeft - (x - startX) * 1.35;
    });

    strip.addEventListener("pointerup", () => { isDragging = false; });
    strip.addEventListener("pointercancel", () => { isDragging = false; });
    strip.addEventListener("pointerleave", () => { isDragging = false; });
  });
}

// clones marquee groups until the loop covers the viewport.
function strengthenInfiniteMarquees() {
  document.querySelectorAll(".marquee-track").forEach((track) => {
    const firstGroup = track.querySelector(".marquee-content");
    if (!firstGroup) return;

    track.querySelectorAll(".marquee-content").forEach((group, index) => {
      if (index > 0) group.remove();
    });

    firstGroup.removeAttribute("aria-hidden");

    const groupWidth = firstGroup.getBoundingClientRect().width;
    if (!groupWidth) return;

    track.style.setProperty("--marquee-distance", `-${groupWidth}px`);

    const neededWidth = window.innerWidth + groupWidth * 2;
    while (track.scrollWidth < neededWidth) {
      const clone = firstGroup.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }
  });
}

// runs all renderers and interaction setup after the page loads.
function init() {
  renderCategoryHero();
  renderDesignGallery();
  setupDesignLightbox();
  renderCategories();
  renderProjects();
  renderReel();
  renderProjectDetail();
  setActiveNav();
  setupProjectDemo();
  setupHoverFeedback();
  setupScrollReactiveLightLeaks();
  strengthenInfiniteMarquees();

  let marqueeResizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(marqueeResizeTimer);
    marqueeResizeTimer = window.setTimeout(strengthenInfiniteMarquees, 150);
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(strengthenInfiniteMarquees);
  }

  setupReveal();
  setupDraggableReels();
}

// waits for the document before touching render targets.
document.addEventListener("DOMContentLoaded", init);
