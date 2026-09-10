// stores all portfolio content used by the static renderers.
window.PORTFOLIO_DATA = {
  // defines the four archive rooms and their display metadata.
  categories: {
    software: {
      label: "Software Engineering",
      eyebrow: "SWE Archive",
      intro:
        "Full-stack apps, engine tools, systems programming, and technical projects with a product sense.",
      coverImage: "assets/site-covers/software.jpeg",
      coverAlt: "Software archive cover portrait with Joshua in a striped shirt and tie.",
      coverPosition: "44% 42%",
      baybayin: "ᜐᜒᜐ᜔ᜆᜒᜋ᜔",
      pronunciation: "sis-tem"
    },
    game: {
      label: "Game Projects",
      eyebrow: "Game Dev Archive",
      intro:
        "Gameplay systems, prototypes, QA leadership, playtesting, and experimental interactive work.",
      coverImage: "assets/site-covers/games.jpg",
      coverAlt: "Games archive cover portrait with Joshua holding a pikachu plush outdoors.",
      coverPosition: "50% 58%",
      baybayin: "ᜎᜎᜇ᜔",
      pronunciation: "laro"
    },
    design: {
      label: "Design + Photography",
      eyebrow: "Visual Archive",
      intro:
        "Graphic design, photography, social graphics, posters, identity systems, and visual storytelling.",
      coverImage: "assets/site-covers/design.jpg",
      coverAlt: "Design archive cover photo of Joshua photographing deer in a wooded park.",
      coverPosition: "58% 48%",
      baybayin: "ᜎᜒᜃ᜔ᜑ",
      pronunciation: "likha"
    },
    production: {
      label: "Production + PACN",
      eyebrow: "Cultural Production Archive",
      intro:
        "Shows, scripts, directing, event production, stage storytelling, and Pilipinx American Culture Night work.",
      coverImage: "assets/site-covers/production.jpeg",
      coverAlt: "Production archive cover portrait with Joshua wearing a barong in an arched hallway.",
      coverPosition: "50% 44%",
      baybayin: "ᜉᜋᜈ",
      pronunciation: "pamana"
    }
  },

  // groups design items into jump-linked gallery sections.
  designGalleryGroups: [
    {
      key: "esports-motion",
      label: "Esports + motion graphics",
      intro:
        "Broadcast overlays, match graphics, recruitment posts, stream motion, and esports event visuals."
    },
    {
      key: "semester-dumps",
      label: "Semester / year dumps",
      intro:
        "Long collage spreads and recap posts that archive school years, friend groups, and personal milestones."
    },
    {
      key: "photography",
      label: "Photography",
      intro:
        "Portraits, landscapes, travel stills, and camera-first images with lighter design intervention."
    },
    {
      key: "troy-philippines",
      label: "Troy Philippines + PACN",
      intro:
        "Cultural org graphics, headshots, event visuals, and community production pieces."
    },
    {
      key: "posters-editorial",
      label: "Posters + random design",
      intro:
        "Music, product, editorial, travel, and experimental pieces that sit outside the bigger systems."
    }
  ],

  // feeds the rendered design gallery, including videos and source files.
  designGallery: [
    {
      title: "Duo Starting Soon",
      type: "video",
      group: "esports-motion",
      src: "assets/design-gallery/duo-starting-soon.mov",
      mime: "video/quicktime",
      tag: "Motion package",
      body: "Animated stream screen for a paired broadcast package."
    },
    {
      title: "Duo Intermission",
      type: "video",
      group: "esports-motion",
      src: "assets/design-gallery/duo-intermission.mov",
      mime: "video/quicktime",
      tag: "Motion package",
      body: "Looping intermission screen built to sit between live segments."
    },
    {
      title: "PACN Grad Final",
      type: "video",
      group: "troy-philippines",
      src: "assets/design-gallery/p-gradfinal.mp4",
      mime: "video/mp4",
      tag: "Video",
      body: "Final motion piece for cultural production and community storytelling."
    },
    {
      title: "Dream Ivory Tracklist",
      type: "image",
      group: "posters-editorial",
      src: "assets/design-gallery/dream-ivory.jpg",
      width: 1080,
      height: 1350,
      tag: "Music poster",
      body: "Black-and-white editorial tracklist with grain, blur, and collage texture."
    },
    {
      title: "Hirono Blind Box Poster",
      type: "image",
      group: "posters-editorial",
      src: "assets/design-gallery/hirono.jpg",
      width: 1080,
      height: 1350,
      tag: "Product poster",
      body: "Paper-collage product layout for a collectible blind box concept."
    },
    {
      title: "LCS Spring Watchparty",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/lcs-watchparty.jpg",
      width: 1920,
      height: 960,
      tag: "Esports social",
      body: "League of Legends watchparty graphic designed for fast event readability."
    },
    {
      title: "League vs Irvine Valley",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/lol-irvine.jpg",
      width: 1080,
      height: 1350,
      tag: "Match graphic",
      body: "Red-scale matchup graphic with high contrast social-first type."
    },
    {
      title: "PACN Kasibulan",
      type: "image",
      group: "troy-philippines",
      src: "assets/design-gallery/pacn-kasibulan.jpg",
      width: 1545,
      height: 2000,
      tag: "Event poster",
      body: "Formal PACN event announcement with serif type and floral linework."
    },
    {
      title: "Sophomore Year Collage",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/sophomore-collage.jpg",
      width: 1920,
      height: 240,
      tag: "Photo collage",
      body: "Long-form semester collage mixing portraits, negative treatments, and light leaks."
    },
    {
      title: "Tokyo Poster",
      type: "image",
      group: "posters-editorial",
      src: "assets/design-gallery/tokyo-poster.jpg",
      width: 1545,
      height: 2000,
      tag: "Travel poster",
      body: "Red risograph-style Tokyo poster with halftone texture and plastic wrap overlays."
    },
    {
      title: "USC Overwatch Tryouts",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/usc-overwatch-tryouts.jpg",
      width: 1080,
      height: 1350,
      tag: "Recruitment graphic",
      body: "Team recruitment poster with bold type, hero art, and USC color accents."
    },
    {
      title: "VCT Americas Finals Watch Party",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/valorant-watchparty.jpg",
      width: 1440,
      height: 1080,
      tag: "Esports social",
      body: "Valorant event graphic built around oversized type and a central character cutout."
    },
    {
      title: "Beabadoobee Editorial",
      type: "image",
      group: "posters-editorial",
      src: "assets/design-gallery/beabadoobee.png",
      width: 1545,
      height: 2000,
      tag: "Editorial layout",
      body: "Magazine-style artist spread with layered photography, type blocks, and red marks."
    },
    {
      title: "Mist",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/mist.jpg",
      width: 2000,
      height: 1333,
      tag: "Photography",
      body: "Soft landscape image with low-contrast fog and quiet negative space."
    },
    {
      title: "Junior Semester Five",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/junior-semester-five.png",
      width: 2000,
      height: 500,
      tag: "Photo collage",
      body: "Semester recap collage with contact-sheet panels, captions, and warm film burn."
    },
    {
      title: "Giya Portrait",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/giya-portrait.jpg",
      width: 1333,
      height: 2000,
      tag: "Portrait",
      body: "Golden-hour portrait with natural framing and warm outdoor color."
    },
    {
      title: "Solar",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/solar.jpg",
      width: 2000,
      height: 1307,
      tag: "Photography",
      body: "Landscape photograph balancing sky, clouds, solar panels, and green foreground."
    },
    {
      title: "Junior Semester Four",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/junior-semester-four.png",
      width: 2000,
      height: 500,
      tag: "Photo collage",
      body: "Wide semester spread with portraits, film strips, event notes, and editorial pacing."
    },
    {
      title: "Tunnel Exit",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/tunnel-day.jpg",
      width: 2000,
      height: 1235,
      tag: "Photography",
      body: "Road image framed by a tunnel mouth with cool daylight and motion haze."
    },
    {
      title: "Tunnel Lights",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/tunnel-night.jpg",
      width: 2000,
      height: 1333,
      tag: "Photography",
      body: "Warm tunnel photograph with repeated ceiling lights and motion blur."
    },
    {
      title: "Sunset",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/sunset.jpg",
      width: 2000,
      height: 1333,
      tag: "Photography",
      body: "Palm-lined sunset photograph with deep silhouettes and warm gradients."
    },
    {
      title: "Durnast",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/durnast.jpg",
      width: 2000,
      height: 1500,
      tag: "Photography",
      body: "Village road photograph with green edges, blue sky, and travel-documentary calm."
    },
    {
      title: "Blue Shadow Portrait",
      type: "image",
      group: "photography",
      src: "assets/design-gallery/blue-shadow-portrait.jpg",
      width: 1400,
      height: 1782,
      tag: "Experimental photo",
      body: "Low-key portrait experiment using projected shadow and blue monochrome light."
    },
    {
      title: "Marvel Rivals In-Game Overlay",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/mr-in-game-overlay.png",
      width: 1920,
      height: 1080,
      tag: "Broadcast overlay",
      body: "Transparent gameplay overlay with team bars and partner placement."
    },
    {
      title: "Marvel Rivals Map Selection",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/mr-map-selection-overlay.png",
      width: 1920,
      height: 1080,
      tag: "Broadcast overlay",
      body: "Map selection screen treatment with red/blue team sides and sponsor placement."
    },
    {
      title: "Rivals Character Select",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/rivals-character-select.png",
      width: 1920,
      height: 1080,
      tag: "Broadcast overlay",
      body: "Character select matchup screen with split team color fields and heavy texture."
    },
    {
      title: "Overwatch Map Pick",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/overwatch-map-pick.png",
      width: 1920,
      height: 1080,
      tag: "Broadcast overlay",
      body: "Map pick template for a best-of-five broadcast segment."
    },
    {
      title: "Overwatch In-Game Overlay",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/overwatch-in-game-overlay.png",
      width: 1920,
      height: 1080,
      tag: "Broadcast overlay",
      body: "Transparent in-game overlay with team headers and match metadata."
    },
    {
      title: "Mateus Porto Razer Panel",
      type: "image",
      group: "esports-motion",
      src: "assets/design-gallery/razer-panel.png",
      width: 1080,
      height: 1350,
      tag: "Esports poster",
      body: "Guest speaker panel graphic using Razer green, portrait compositing, and distressed event type."
    },
    {
      title: "PACN Headshot",
      type: "image",
      group: "troy-philippines",
      src: "assets/design-gallery/pacn-headshot.jpg",
      width: 1333,
      height: 2000,
      tag: "Portrait",
      body: "PACN headshot with warm hallway depth and soft portrait focus."
    },
    {
      title: "Troy Phi E-Board Applications",
      type: "image",
      group: "troy-philippines",
      src: "assets/design-gallery/troy-phi-eboard-applications.png",
      width: 1080,
      height: 1350,
      tag: "Org graphic",
      body: "Troy Philippines executive board application graphic with desktop-window nostalgia and bright community imagery."
    },
    {
      title: "USC Graduation Collage 1",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/semester-seven-1.png",
      width: 2000,
      height: 500,
      tag: "Graduation collage",
      body: "Film-inspired graduation spread with stole details, campus portraits, and warm archival texture."
    },
    {
      title: "USC Graduation Collage 2",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/semester-seven-2.png",
      width: 2000,
      height: 500,
      tag: "Graduation collage",
      body: "Wide graduation collage mixing action blur, classroom humor, and campus portrait fragments."
    },
    {
      title: "USC Graduation Collage 3",
      type: "image",
      group: "semester-dumps",
      src: "assets/design-gallery/semester-seven-3.png",
      width: 2000,
      height: 500,
      tag: "Graduation collage",
      body: "Contact-sheet style graduation strip with fountain portraits, film borders, and bright campus light."
    }
  ],

  // powers project cards, category grids, and full case-study pages.
  projects: [
    {
      slug: "photo-diary",
      title: "Photo Diary",
      category: "software",
      role: "Full-Stack Developer, Front-End Focus",
      year: "Spring 2024 / 2026 rebuild",
      type: "Full-Stack Web App",
      status: "CSCI 201 final project + portfolio refresh",
      glyph: "ᜎᜒᜏᜈᜄ",
      color: "rice",
      coverImage: "assets/photo-diary/photo-diary-rebuild-list.jpg",
      coverAlt: "Updated PHOTO DIARY xForever list view showing newest memories, filters, and seeded project posts.",
      links: [
        { label: "Updated screens", url: "#screens" },
        { label: "Before / after", url: "#gallery" },
        { label: "Technical flow", url: "#technical" }
      ],
      summary:
        "A refreshed social photo diary that lets users pin memories to real locations, browse them through map or list views, and control who can see each post.",
      what:
        "Photo Diary, branded as PHOTO DIARY xForever, began as a collaborative CSCI 201 Java Servlet app for saving photo entries to real places. The current rebuild turns that class-project foundation into a runnable Maven/Tomcat/MySQL portfolio app with Docker Compose, seeded sample memories, login and guest states, friend visibility, likes, image uploads, and Leaflet/OpenStreetMap exploration.",
      goals: [
        "Preserve the original memory-map concept while making the app feel like a finished product instead of a bare class submission.",
        "Seed the experience with real project memories so list, map, entry, and creation views immediately show what the app is for.",
        "Make the technical stack presentable and runnable with Docker, Tomcat, MySQL, Java servlets, and a cleaner responsive front end."
      ],
      constraints: [
        "The original app already had useful CRUD and auth behavior, but the interface needed a clearer product story and stronger visual hierarchy.",
        "Seed accounts and guest mode had to expose privacy differences without asking viewers to manually create test data first.",
        "Map, list, upload, entry-detail, likes, filters, friends, and visibility rules all had to stay readable across desktop and responsive layouts."
      ],
      process: [
        {
          title: "Reframe the original app",
          body:
            "Kept the CSCI 201 foundation, then clarified the experience around one product promise: save memories to places and choose who gets to revisit them."
        },
        {
          title: "Build a runnable refresh",
          body:
            "Wrapped the Java Servlet, Tomcat, and MySQL stack in Docker Compose so the app can boot with schema, seed users, and sample posts already in place."
        },
        {
          title: "Evolve the interface system",
          body:
            "Rebuilt the front end around a persistent brand header, clear map/list/create navigation, responsive forms, richer post cards, and full-screen map exploration."
        }
      ],
      solutions: [
        "Docker Compose now runs the Maven-built WAR on Tomcat with a MySQL container that loads schema and seed data automatically.",
        "Leaflet.js and OpenStreetMap power a spatial diary with color-coded pins for personal, friend-visible, and public posts.",
        "The chronological list adds search, audience filters, metadata, likes, and richer seeded entries so the app no longer opens on empty states.",
        "The create and entry-detail views bring image upload, captions, coordinates, privacy, likes, friend actions, and navigation into a cleaner product shell.",
        "Guest users can browse public memories while registered users can create, like, edit, delete, and build friend relationships."
      ],
      technicalTitle: "Refresh architecture",
      technical: [
        {
          eyebrow: "Runtime",
          title: "Dockerized Java stack",
          body:
            "Maven builds the WAR, Tomcat serves the app, and MySQL loads the schema and seed data through Docker Compose."
        },
        {
          eyebrow: "Data model",
          title: "Memory entries with context",
          body:
            "Posts carry image blobs, captions, coordinates, owners, visibility, timestamps, likes, and relationship-aware access rules."
        },
        {
          eyebrow: "Maps",
          title: "Leaflet + OpenStreetMap",
          body:
            "Pinned entries turn the diary into a place-based archive with filters and popups for personal, friend, and public posts."
        },
        {
          eyebrow: "Access",
          title: "Seeded user paths",
          body:
            "Demo accounts can create and interact with memories while guests keep a restricted public-browsing path."
        }
      ],
      screensTitle: "Updated app screens",
      screens: [
        {
          title: "Rebuilt login and guest entry",
          eyebrow: "Entry point",
          image: "assets/photo-diary/photo-diary-rebuild-login.jpg",
          fit: "contain",
          alt: "Updated PHOTO DIARY xForever login screen with a graduation photo hero and login, sign up, and guest actions.",
          body:
            "The refresh opens with a stronger brand moment, a real memory photo, and the three core access paths: log in, sign up, or continue as a guest.",
          details: [
            "Hero image immediately communicates that the app is a personal archive.",
            "Seed credentials are surfaced for a faster demo path.",
            "Guest browsing remains available for public-only exploration."
          ]
        },
        {
          title: "Map overview",
          eyebrow: "Place browsing",
          image: "assets/photo-diary/photo-diary-rebuild-map-wide.jpg",
          fit: "contain",
          alt: "Updated PHOTO DIARY xForever map view showing visible entries across Los Angeles with filter controls and a sidebar list.",
          body:
            "The map view makes the diary spatial, showing public, friend-visible, and personal posts as a clustered memory trail around USC and Los Angeles.",
          details: [
            "Color-coded markers distinguish ownership and visibility.",
            "Sidebar cards keep nearby entries browsable while the map stays primary.",
            "Leaflet/OpenStreetMap provides the geographic canvas."
          ]
        },
        {
          title: "Selected map memory",
          eyebrow: "Map interaction",
          image: "assets/photo-diary/photo-diary-rebuild-map-selected.jpg",
          fit: "contain",
          alt: "Updated map view with a selected Glorgo post popup and an Open post action.",
          body:
            "Selecting a pin opens a photo preview, caption, owner, and direct post action so the map works as a browsing surface instead of a static visualization.",
          details: [
            "Popup previews expose the memory before leaving the map.",
            "The highlighted sidebar card mirrors the selected pin.",
            "Own, friend, and public markers stay visible together."
          ]
        },
        {
          title: "Newest memories list",
          eyebrow: "List view",
          image: "assets/photo-diary/photo-diary-rebuild-list.jpg",
          fit: "contain",
          alt: "Updated list view showing newest Photo Diary memories first with search and audience filters.",
          body:
            "The list view turns the seeded data into a chronological archive with search, audience filters, image cards, metadata, and like counts.",
          details: [
            "Newest memories appear first for fast scanning.",
            "Filters separate all, mine, friends, and public entries.",
            "Cards combine photo, owner, date, privacy, caption, location, and likes."
          ]
        },
        {
          title: "Entry detail page",
          eyebrow: "Post page",
          image: "assets/photo-diary/photo-diary-rebuild-entry.jpg",
          fit: "contain",
          alt: "Updated entry detail page for a Conquest esports memory with the photo, caption, likes, and friend action.",
          body:
            "The entry view gives each memory room to breathe, pairing a large image with caption context, visibility, likes, and relationship actions.",
          details: [
            "Large media area foregrounds the saved moment.",
            "Caption card keeps privacy and engagement visible.",
            "Back-to-list navigation keeps the diary flow simple."
          ]
        },
        {
          title: "Create memory form",
          eyebrow: "Post creation",
          image: "assets/photo-diary/photo-diary-rebuild-create.jpg",
          fit: "contain",
          alt: "Updated create post form with image upload, caption, coordinates, current location action, visibility options, and image preview.",
          body:
            "The create flow keeps the original upload, caption, coordinate, and visibility requirements while presenting them in a cleaner two-column composition.",
          details: [
            "Image preview confirms the selected photo before posting.",
            "Latitude and longitude can be entered or populated from current location.",
            "Public, friends, and private visibility choices are treated as first-class controls."
          ]
        }
      ],
      takeaways: [
        "A familiar CRUD app becomes more memorable when the organizing metaphor is place, not just a feed.",
        "A class project reads as much stronger portfolio work when it launches with seed data, demo users, and visible state differences.",
        "The biggest product jump came from moving beyond isolated forms into a complete loop: log in, browse, search, open, create, and return."
      ],
      gallery: [
        {
          image: "assets/photo-diary-login.png",
          alt: "Earlier PHOTO xFOREVER login and guest entry screen before the responsive rebuild.",
          eyebrow: "Before",
          title: "Original login direction",
          body: "The first version proved authentication and guest entry, but the product identity and memory context were still sparse.",
          position: "top center"
        },
        {
          image: "assets/photo-diary-create-entry.png",
          alt: "Earlier create-entry form with image upload, caption, longitude, latitude, and privacy controls.",
          eyebrow: "Before",
          title: "Original create form",
          body: "The original upload and privacy logic existed before the refresh, giving the rebuild a useful technical base.",
          position: "top center"
        },
        {
          image: "assets/photo-diary-list-view.png",
          alt: "Earlier PHOTO xFOREVER interface with navigation for list view, map view, create post, and edit post.",
          eyebrow: "Before",
          title: "Original app navigation",
          body: "The original interface separated the major app modes, but the browsing experience still needed richer content and hierarchy.",
          position: "top right"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-login.jpg",
          alt: "Updated login screen with a photographic hero and clearer Photo Diary branding.",
          eyebrow: "After",
          title: "Brand-led entry screen",
          body: "The rebuild uses a real memory as the first viewport signal and makes login, sign up, and guest mode feel intentional.",
          fit: "contain"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-list.jpg",
          alt: "Updated list screen showing newest memories first with cards, search, filters, and likes.",
          eyebrow: "After",
          title: "Populated chronological archive",
          body: "Seeded posts turn the list into an immediate demo of the app's privacy, metadata, and memory-card system.",
          fit: "contain"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-map-wide.jpg",
          alt: "Updated map overview with visible entries across Los Angeles.",
          eyebrow: "After",
          title: "Map as the main archive",
          body: "The spatial view now carries the project premise: memories are not just posts, they are places.",
          fit: "contain"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-map-selected.jpg",
          alt: "Updated map view with a selected post popup and open-post button.",
          eyebrow: "After",
          title: "Selected pin interaction",
          body: "Marker popups connect the map to full posts through image previews, captions, owners, and a direct open action.",
          fit: "contain"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-entry.jpg",
          alt: "Updated entry detail page with photo, caption, likes, and friend action.",
          eyebrow: "After",
          title: "Full entry view",
          body: "Individual memories now have a dedicated reading view instead of feeling like they only exist inside a feed.",
          fit: "contain"
        },
        {
          image: "assets/photo-diary/photo-diary-rebuild-create.jpg",
          alt: "Updated create-memory form with upload, caption, coordinates, visibility, and preview.",
          eyebrow: "After",
          title: "Refined creation flow",
          body: "The refreshed form keeps the original data requirements while making image preview, location, and visibility easier to understand.",
          fit: "contain"
        }
      ],
      launchNote:
        "The refreshed app now runs locally as a Dockerized Maven/Tomcat/MySQL build from the Photo-Diary project folder. Add a public demo or repository link here when one is ready to share.",
      cardNote: "Java · MySQL · Leaflet · Docker"
    },
    {
      slug: "playtestiq",
      title: "PlaytestIQ",
      category: "software",
      role: "Full-Stack Developer / Product Builder",
      year: "Summer 2026",
      type: "Playtest Analytics Platform",
      status: "In development",
      glyph: "ᜐᜓᜃᜆ᜔",
      color: "forest",
      coverImage: "assets/playtestiq/playtestiq-dashboard-cover.png",
      coverAlt: "PlaytestIQ dashboard screenshot showing event totals, unique players, sessions, and a top-events bar chart.",
      links: [
        { label: "GitHub repo", url: "https://github.com/suvnset/playtestiq" },
        { label: "Technical build", url: "#technical" },
        { label: "Development status", url: "#launch" }
      ],
      summary:
        "An in-progress analytics dashboard for game teams, tracking projects, players, sessions, and gameplay events so playtests are easier to read.",
      what:
        "PlaytestIQ is my current full-stack project for making playtest data easier to collect and interpret. The build has a Next.js and React front end, a Prisma/Postgres data model, Dockerized local database setup, and the first telemetry schema for projects, players, sessions, and events. The direction is practical: help a team see where players struggle, what they repeat, how sessions unfold, and what deserves the next test.",
      goals: [
        "Build a practical analytics tool for game teams running playtests, prototypes, and usability sessions.",
        "Start with the data contract before making the dashboard pretty: projects, API keys, players, sessions, events, and flexible event properties.",
        "Support external player and session identifiers so instrumented games can send data without reshaping their own internal IDs.",
        "Use a modern full-stack web stack that can grow into authenticated project management, ingestion APIs, and data visualization.",
        "Keep the early MVP honest: send events, store them, query them, and make the results readable."
      ],
      constraints: [
        "The public-facing product UI is not final yet, so the portfolio entry needs to frame the project as active development rather than a finished launch.",
        "Playtest data needs enough structure to be queryable while staying flexible for different game genres, engines, and event payloads.",
        "The schema has to separate projects, players, sessions, and events so multiple games can be tracked without mixing analytics contexts.",
        "Local development needs a repeatable database setup before deeper dashboard and ingestion work can be trusted.",
        "Future analytics features will need to balance useful telemetry with player privacy, consent, and data minimization."
      ],
      process: [
        {
          title: "Scope the analytics MVP",
          body:
            "Started from the core question a playtesting tool needs to answer: what happened in a session, who experienced it, and which project should own that evidence."
        },
        {
          title: "Set up the web foundation",
          body:
            "Created the Next.js, React, and TypeScript scaffold that can later hold project setup, ingestion endpoints, dashboards, and account flows."
        },
        {
          title: "Design the telemetry schema",
          body:
            "Modeled projects with API keys, player identity, sessions with durations, and flexible JSON event properties for gameplay-specific telemetry."
        },
        {
          title: "Add local persistence",
          body:
            "Defined a Docker Compose Postgres service and Prisma configuration so development can happen against a real relational database."
        },
        {
          title: "Prepare the dashboard layer",
          body:
            "Added charting and UI-oriented dependencies so the next stage can translate event rows into usable session, funnel, and behavior views."
        }
      ],
      technicalTitle: "Technical build",
      technical: [
        {
          eyebrow: "Frontend",
          title: "Next.js + React app shell",
          body:
            "The project starts from a TypeScript Next.js app, giving the product a path toward server-rendered pages, API routes, dashboard views, and deployable web flows."
        },
        {
          eyebrow: "Database",
          title: "Prisma + PostgreSQL",
          body:
            "Prisma defines the analytics model while PostgreSQL provides the relational store for projects, players, sessions, and event logs."
        },
        {
          eyebrow: "Instrumentation",
          title: "Project-scoped API keys",
          body:
            "Each tracked game project owns an API key, which sets up a clean boundary for event ingestion and dashboard filtering."
        },
        {
          eyebrow: "Identity",
          title: "External players + sessions",
          body:
            "Player and session records use external identifiers so games can report analytics using their own runtime IDs while PlaytestIQ keeps project-level uniqueness."
        },
        {
          eyebrow: "Events",
          title: "Flexible gameplay telemetry",
          body:
            "Events store a name, timestamp, related player/session, and JSON properties, leaving room for genre-specific signals like deaths, retries, choices, locations, or economy actions."
        },
        {
          eyebrow: "Visualization",
          title: "Dashboard-ready chart stack",
          body:
            "Recharts is included as the visualization layer for session summaries, event counts, behavior trends, and playtest reports."
        }
      ],
      solutions: [
        "Separated project, player, session, and event concepts early so the data layer can scale into a multi-project analytics product.",
        "Used project-scoped API keys as the ingestion boundary between instrumented games and the PlaytestIQ dashboard.",
        "Modeled external player and session IDs with project-level uniqueness to avoid collisions across games.",
        "Stored event properties as JSON so the MVP can capture flexible gameplay payloads without requiring a new database column for every design question.",
        "Planned event-name and timestamp indexing so common analytics queries have a clear performance path.",
        "Kept local Postgres in Docker Compose to make the development database repeatable before dashboard features depend on it."
      ],
      takeaways: [
        "A useful analytics product starts with the event contract, not the chart.",
        "Playtesting tools sit between game development and product thinking: the data only matters if it helps a team make a better next decision.",
        "Flexible telemetry is powerful, but it needs project/session/player structure or it becomes a pile of disconnected facts.",
        "Showing the project while it is in development makes the architecture visible before the interface is finished.",
        "The next important milestone is turning the schema into an end-to-end loop: send events, store them, query them, and explain them clearly."
      ],
      gallery: [
        {
          image: "assets/playtestiq/playtestiq-dashboard-cover.png",
          alt: "PlaytestIQ dashboard screenshot showing event totals, unique players, sessions, and a top-events bar chart.",
          eyebrow: "Dashboard",
          title: "First analytics dashboard",
          body: "The dashboard turns sample playtest telemetry into a quick read on total events, player count, session count, and the most common gameplay events.",
          fit: "contain"
        }
      ],
      launchNote:
        "PlaytestIQ is still in active development. The repository currently shows the product foundation: Next.js and React, Prisma/Postgres, Dockerized local database setup, and an analytics schema for game playtest telemetry. The public dashboard UI and live product links can be added once the MVP is further along.",
      cardNote: "Next.js · Prisma · Postgres · Recharts"
    },
    {
      slug: "web-server-client",
      title: "Reliable Routing Lab",
      category: "software",
      role: "Systems + Network Programmer",
      year: "Spring 2026",
      type: "C++ Computer Networks Lab",
      status: "CSCI 353 Lab",
      glyph: "ᜐᜓᜎᜆ᜔",
      color: "terrace",
      coverImage: "assets/web-server-client/routing-lab-cover.jpg",
      coverAlt: "Reliable Routing Lab screenshot showing C++ source, build output, and three terminal nodes running netgraph and forwarding commands.",
      links: [
        { label: "Try terminal demo", url: "#demo" },
        { label: "Technical build", url: "#technical" },
        { label: "Process notes", url: "#process" },
        { label: "Course code kept private", url: "#launch" }
      ],
      summary:
        "A CSCI 353 networking lab that built a small routed application network in C++, using UTM for the Linux development environment and FileZilla to move code, logs, and test records through the class setup.",
      what:
        "This lab was a systems-heavy computer networks project built around multiple C++ node processes running on localhost. Each node started from a config file, opened a TCP listening socket, connected to configured neighbors, exchanged SAYHELLO handshakes, flooded LSUPDATE messages, maintained a live adjacency graph, computed forwarding tables with BFS, and routed UCASTAPP packets across the network. On top of that routed layer, the lab added UDT-style application messages, reliable data transfer with acknowledgements and retransmission, traceroute-style TTL probing, and an echo application. I developed and tested the project inside a UTM-hosted Ubuntu/Linux class environment so the compiler, socket behavior, threading model, and script transcripts matched the grader setup. FileZilla became the bridge between macOS and the VM: source files, lab data, logs, and run transcripts moved without breaking the course directory structure.",
      goals: [
        "Build a multi-node network program where each process can act as both a TCP server and a TCP client.",
        "Track active neighbors, disconnected nodes, and topology changes without letting stale graph state pollute routing decisions.",
        "Flood link-state updates through the network while avoiding duplicate message handling and infinite propagation.",
        "Compute deterministic forwarding tables from the live adjacency graph so application packets can route beyond direct neighbors.",
        "Implement reliable application delivery over a simpler UDT-style layer using sequence numbers, ACKs, timers, and retransmission.",
        "Keep the UTM/FileZilla process clean enough that local development, VM testing, and final script records stayed reproducible."
      ],
      constraints: [
        "Socket behavior, compiler flags, and thread timing needed to match the Linux course environment, not just macOS behavior.",
        "Several node processes had to run at the same time, which made terminal discipline, port management, and repeatable scripts important.",
        "The system had shared connection state, reader/writer threads, timers, and cleanup paths, so locking mistakes could create subtle failures.",
        "Protocol formatting had to be exact: headers, content lengths, message IDs, TTL values, and body payloads all affected grading behavior.",
        "Reliable transfer had to behave correctly even when ACKs were delayed or lost, which meant retransmission could not duplicate final messages."
      ],
      process: [
        { title: "Set up the class VM", body: "Used UTM to run the Linux environment expected by the course, keeping the compiler, Makefile behavior, and shell scripts close to the grading setup." },
        { title: "Move files with FileZilla", body: "Used FileZilla to transfer source files, config data, and output scripts between macOS and the VM while preserving the lab folder structure." },
        { title: "Compile and smoke test", body: "Built the targets with the Makefile, g++, C++11, pthreads, and localhost socket definitions before testing full network behavior." },
        { title: "Bring up the topology", body: "Ran separate node processes on ports like :12000, :12002, and :12004 to verify neighbor discovery, link-state updates, and netgraph output." },
        { title: "Layer the protocols", body: "Built from TCP sockets into 353NET messages, UCASTAPP routing, UDT payloads, reliable transfer, traceroute probes, and echo application behavior." },
        { title: "Capture evidence", body: "Recorded script transcripts showing commands, logs, timeouts, ACKs, forwarding output, and successful delivery across direct and multi-hop routes." }
      ],
      technicalTitle: "Technical build",
      technical: [
        {
          eyebrow: "Environment",
          title: "UTM-based Linux setup",
          body: "The project was developed against the course Linux target instead of relying on macOS socket behavior. UTM gave me a contained Ubuntu-style environment for compilation, terminal scripts, and multi-process testing."
        },
        {
          eyebrow: "Transfer",
          title: "FileZilla bridge",
          body: "FileZilla handled the practical handoff between my local machine and the VM: moving edited source, config files, generated logs, and final transcripts without manually recreating folders."
        },
        {
          eyebrow: "Network layer",
          title: "SAYHELLO + LSUPDATE",
          body: "Nodes established direct neighbor relationships with SAYHELLO messages, then flooded LSUPDATE packets to share link-state information and rebuild the visible network graph."
        },
        {
          eyebrow: "Routing",
          title: "BFS forwarding tables",
          body: "The program pruned unreachable state and ran BFS from the current node to produce next-hop forwarding entries for destinations that were not direct neighbors."
        },
        {
          eyebrow: "Transport",
          title: "UDT and RDT behavior",
          body: "Application messages traveled through UCASTAPP packets, then the reliable layer split messages into byte-sized data frames with alternating sequence numbers, ACK handling, and timeout-based retransmission."
        },
        {
          eyebrow: "Debugging",
          title: "Operational command surface",
          body: "Commands like netgraph, forwarding, traceroute, rdtsend, and echoapp exposed the internal state of the network so routing and delivery bugs could be debugged from the terminal."
        }
      ],
      demo: {
        title: "Terminal demo",
        body: "A safe browser-side replay of the lab process. It uses sanitized transcript-style output, not the private course source or a live VM, so visitors can still understand the routing behavior without needing UTM running.",
        prompt: ":12000>",
        topology: [
          { node: ":12000", neighbors: [":12002"] },
          { node: ":12002", neighbors: [":12000", ":12004"] },
          { node: ":12004", neighbors: [":12002"] }
        ],
        commands: [
          {
            label: "netgraph",
            command: "netgraph",
            output: [
              ":12000: :12002",
              ":12002: :12000,:12004",
              ":12004: :12002"
            ],
            note: "Shows the live link-state graph after neighbor handshakes and LSUPDATE propagation."
          },
          {
            label: "forwarding",
            command: "forwarding",
            output: [
              ":12002: :12002",
              ":12004: :12002"
            ],
            note: "Shows the BFS next-hop table from the :12000 node. Traffic for :12004 forwards through :12002."
          },
          {
            label: "traceroute",
            command: "traceroute :12004",
            output: [
              "1 - :12002, 0.031s",
              "2 - :12004, 0.044s",
              ":12004 is reached in 2 steps"
            ],
            note: "Replays the TTL-style probe flow used to confirm hop-by-hop reachability."
          },
          {
            label: "rdtsend",
            command: "rdtsend :12004 hello",
            output: [
              "i UCASTAPP :12002 ttl=9 seq=0 body='h'",
              "r UCASTAPP :12002 ack seq=0",
              "i UCASTAPP :12002 ttl=9 seq=1 body='e'",
              "r UCASTAPP :12002 ack seq=1",
              "i UCASTAPP :12002 ttl=9 seq=0 body='l'",
              "r UCASTAPP :12002 ack seq=0",
              "i UCASTAPP :12002 ttl=9 seq=1 body='l'",
              "r UCASTAPP :12002 ack seq=1",
              "i UCASTAPP :12002 ttl=9 seq=0 body='o'",
              "r UCASTAPP :12002 ack seq=0",
              "rdtsend: 'hello' delivered and acknowledged"
            ],
            note: "Compresses the reliable-transfer evidence into the important bits: sequence numbers, ACKs, and delivery."
          },
          {
            label: "echoapp",
            command: "echoapp :12004",
            output: [
              "echoapp> hey",
              "rdt send app=98 byte='h' ack=0",
              "rdt send app=98 byte='e' ack=1",
              "rdt send app=98 byte='y' ack=0",
              "echoed 'hey' received from :12004",
              "echoapp: terminated"
            ],
            note: "Shows the application layer riding on top of the reliable transport and routed message layer."
          }
        ]
      },
      solutions: [
        "Separated connection responsibilities across accept/connect behavior, per-connection reader and writer loops, and cleanup work so live sockets could be reasoned about independently.",
        "Cached message IDs during link-state flooding so repeated LSUPDATE packets did not cause duplicate work or runaway propagation.",
        "Pruned unreachable adjacency entries before printing netgraph output or computing forwarding tables, which kept routing based on the current partition.",
        "Used explicit command output as a debugging interface: neighbors for direct links, netgraph for topology, forwarding for routes, and traceroute for hop-by-hop reachability.",
        "Built reliable delivery on top of the routed message layer by pairing data frames with sequence-aware ACKs and timeout retries.",
        "Used the UTM and FileZilla loop as infrastructure, not busywork: edit locally, transfer intentionally, compile in Linux, run scripts, collect records, repeat."
      ],
      takeaways: [
        "Networking projects reward boring precision: one bad content length, stale route, or missing lock can make a distributed system look haunted.",
        "Good debugging tools are part of the product. The command surface made invisible graph and routing state visible enough to reason about.",
        "Reliable delivery is easier to trust when every timeout, ACK, sequence number, and retransmission can be seen in a transcript."
      ],
      gallery: [
        {
          image: "assets/web-server-client/routing-lab-cover.jpg",
          alt: "Screenshot of the Reliable Routing Lab running in a Linux VM with C++ source, build output, and terminal network commands.",
          eyebrow: "Cover",
          title: "VM setup and routing output",
          body: "The cover uses the actual VM screenshot, showing source code, make output, and multiple node terminals running netgraph and forwarding commands."
        }
      ],
      launchNote:
        "The terminal demo above uses sanitized replay output so the routing behavior is understandable without publishing USC CSCI 353 assignment source. The source is intentionally not linked because the course files prohibit public distribution.",
      cardNote: "C++ · TCP sockets · UTM · FileZilla"
    },
    {
      slug: "glorgos-microplastics-mine",
      title: "Glorgo’s Microplastics Mine",
      category: "game",
      role: "Quality Assurance (QA) Engineer Lead",
      year: "2025–2026",
      type: "USC Games AGP Capstone",
      status: "Released on Steam",
      glyph: "ᜄᜋ᜔",
      color: "sea",
      coverImage: "assets/glorgo/gmm-cover-landscape.jpg",
      coverAlt: "Illustrated key art for Glorgo’s Microplastics Mine showing miners, glowing microplastics, and cave creatures.",
      links: [
        { label: "Steam page", url: "https://store.steampowered.com/app/4246790/Glorgos_Microplastics_Mine/" },
        { label: "Development media", url: "#media" },
        { label: "QA tooling screenshots", url: "#screens" },
        { label: "QA records", url: "#screens" }
      ],
      summary:
        "A year-long USC Games Advanced Game Project where I led QA for a nearly 80-person team, built the project’s Discord bug bot, and helped engineering keep the Steam release stable.",
      what:
        "Glorgo’s Microplastics Mine is a Y2K-flavored incremental resource management game about overseeing an alien mining operation, hiring expendable miners, upgrading production, and surviving the strange plasticbeasts living below the quarry. My role was Quality Assurance (QA) Lead: I managed the QA process, kept bug reporting actionable, took notes during bi-weekly faculty reviews, presented with the team at the USC Games Expo 2026, and worked directly with engineering and usability to turn player friction into fixes.",
      goals: [
        "Keep a year-long AGP capstone build stable and playable across weekly tasks, milestone reviews, and public milestones.",
        "Lead a small QA crew so bugs, repro steps, assets, and fix statuses stayed current instead of disappearing into chat history.",
        "Lower bug-reporting friction by replacing a tedious Google Form flow with a Discord-native reporting system.",
        "Support engineering directly by fixing or root-causing roughly 15–25% of outstanding bugs each week.",
        "Translate faculty, industry, and playtest feedback into specific production priorities.",
        "Make QA serve both player clarity and engineering velocity instead of living as a separate checklist."
      ],
      constraints: [
        "A large multidisciplinary team meant QA had to make information readable for people with different schedules, priorities, and disciplines.",
        "Discord was the team’s primary communication space, while the original bug form added too much friction for quick reports.",
        "Bug reports needed enough context for engineers to act: build version, reproduction steps, expected behavior, actual behavior, and attached evidence.",
        "Faculty and industry feedback arrived on a bi-weekly rhythm, so notes and priorities had to become next steps quickly.",
        "Rapidly changing builds required QA to separate old issues, regressions, and new bugs without slowing production.",
        "The game had to remain stable enough for milestone reviews, Steam release preparation, and USC Games Expo presentation."
      ],
      process: [
        { title: "Set the QA rhythm", body: "Defined the build intake, smoke testing, regression testing, focus testing, bug reporting, and greenlight loop with engineering." },
        { title: "Lead weekly QA work", body: "Assigned and tracked QA tasks, helped crew members log clear issues, and kept the bug sheet updated as fixes landed." },
        { title: "Build the Discord bot", body: "Developed a Python bot in a virtual environment, hosted it on Google Cloud, and connected it to Google Sheets through Apps Script." },
        { title: "Partner with leads", body: "Worked with the usability lead on playmetrics and the engineering lead on bug fixing, root causes, and implementation help." },
        { title: "Track review notes", body: "Recorded bi-weekly feedback from USC Games faculty and visiting professionals so critiques could become follow-up tasks." },
        { title: "Validate fixes", body: "Retested resolved issues, watched for regressions, and helped decide when builds were stable enough to move forward." }
      ],
      solutions: [
        "Replaced the original Google Form-only process with Discord commands so bug reporting happened where the team was already communicating.",
        "Used !bug to log new issues, !bugfix to mark fixes, and !buglist to surface outstanding work without forcing people to open a separate tracker.",
        "Connected Discord, Google Sheets, and Apps Script so the bug list stayed searchable while still allowing extra metadata to be added later.",
        "Made QA a stronger engineering partner by reproducing bugs, attaching assets, finding root causes, and personally fixing a meaningful share of weekly issues.",
        "Captured faculty and industry review notes so feedback from USC Games reviews could become prioritized production tasks.",
        "Maintained the tracker as production memory: what broke, who saw it, what evidence existed, and when it was fixed."
      ],
      media: {
        title: "Trailer + development media",
        trailers: [
          {
            title: "Official USC Games Expo 2026 trailer",
            eyebrow: "Official trailer",
            src: "assets/glorgo/glorgo-official-trailer.mp4",
            poster: "assets/glorgo/gmm-cover-landscape.jpg",
            body:
              "The public trailer shows the shipped Steam build's resource loop, alien workers, cave escalation, and Y2K management-game personality."
          },
          {
            title: "Early development clip",
            eyebrow: "Development clip",
            src: "assets/glorgo/lilguys.mp4",
            poster: "assets/glorgo/gmm-cover.jpg",
            body:
              "A short development clip showing the core gameplay functionality."
          }
        ]
      },
      screensTitle: "Process + QA evidence",
      screens: [
        {
          image: "assets/glorgo/glorgo-expo-team.jpg",
          alt: "Glorgo’s Microplastics Mine team photo at the USC Games Expo 2026.",
          eyebrow: "USC Games Expo 2026",
          title: "Presented with the team",
          body: "The project moved through the year-long AGP process and was shown publicly at the annual USC Games Expo.",
          position: "center",
          fit: "cover",
          details: [
            "Public release moment for the capstone team.",
            "Helped communicate the project beyond internal faculty reviews."
          ]
        },
        {
          image: "assets/glorgo/bug-tracker-sheet.png",
          alt: "Google Sheets bug tracker with fixed status, bug IDs, timestamps, names, bug descriptions, reproduction steps, and assets.",
          eyebrow: "Bug tracker",
          title: "QA tracker as production memory",
          body: "The tracker held fix status, bug IDs, reports, reproduction context, and asset links so the team could keep production history visible.",
          position: "top center",
          fit: "contain",
          details: [
            "Connected to the Discord bot process through Google Sheets and Apps Script.",
            "Made bug status easier to audit across milestone pushes."
          ]
        },
        {
          image: "assets/glorgo/discord-bug-log.png",
          alt: "Discord message using the !bug command and Glorgo bot confirming the bug was logged.",
          eyebrow: "!bug",
          title: "Bug reporting inside Discord",
          body: "The team could report issues in the same channel where discussion was already happening, including screenshots or clips when needed.",
          position: "top center",
          fit: "contain",
          details: [
            "Reduced friction compared with the original full Google Form flow.",
            "Kept QA visible during normal team communication."
          ]
        },
        {
          image: "assets/glorgo/discord-buglist.png",
          alt: "Discord embed from the Glorgo bot listing outstanding bugs.",
          eyebrow: "!buglist",
          title: "Outstanding work made visible",
          body: "The bot returned a live outstanding-bugs list, which helped QA, engineering, and production see what still needed attention.",
          position: "top center",
          fit: "contain",
          details: [
            "Highlighted bug IDs, summaries, and linked assets.",
            "Helped the team prioritize fixes during milestone pushes."
          ]
        },
        {
          image: "assets/glorgo/discord-bugfix.png",
          alt: "Discord message using the !bugfix command and Glorgo bot confirming B84 was fixed.",
          eyebrow: "!bugfix",
          title: "Fixes updated from chat",
          body: "Fix status could be updated quickly from Discord, keeping the bug tracker current without adding more production overhead.",
          position: "center",
          fit: "contain",
          details: [
            "Supported fast QA and engineering feedback loops.",
            "Made the tracker easier to maintain during late-production bug fixing."
          ]
        }
      ],
      takeaways: [
        "QA leadership is systems design: the reporting process matters as much as the bugs themselves.",
        "Reducing friction changed team behavior. Once reporting lived in Discord, more people actually logged issues.",
        "The strongest QA work sits between player empathy, engineering literacy, and production communication.",
        "Fixing bugs myself made reports sharper because I understood what information engineering needed to move quickly.",
        "A good QA tool meets the team where they already work instead of asking everyone to adopt another tab.",
        "Bug data becomes more useful when it connects to shipped outcomes: stability, clarity, release confidence, and public presentation."
      ],
      gallery: [
        {
          image: "assets/glorgo/gmm-cover-landscape.jpg",
          alt: "Landscape key art crop for Glorgo's Microplastics Mine.",
          eyebrow: "Cover",
          title: "Steam-facing key art",
          body: "The case study cover now uses a landscape crop of the game's actual release art."
        },
        {
          image: "assets/glorgo/glorgo-expo-team.jpg",
          alt: "Glorgo's Microplastics Mine team presenting at the USC Games Expo.",
          eyebrow: "Showcase",
          title: "USC Games Expo 2026",
          body: "A public-facing production moment from the capstone's release cycle.",
          position: "center"
        },
        {
          image: "assets/glorgo/bug-tracker-sheet.png",
          alt: "Glorgo bug tracker spreadsheet with bug IDs, reports, and fix statuses.",
          eyebrow: "QA tracker",
          title: "Spring bug tracker",
          body: "The spreadsheet shows the QA structure behind the Discord bot and milestone fixes.",
          fit: "contain"
        },
        {
          image: "assets/glorgo/discord-bug-log.png",
          alt: "Discord bug-report command and confirmation from the Glorgo QA bot.",
          eyebrow: "Tooling",
          title: "Discord bug intake",
          body: "The bot let teammates log issues where project communication already happened.",
          fit: "contain"
        },
        {
          image: "assets/glorgo/discord-buglist.png",
          alt: "Discord bug list embed from the Glorgo QA bot.",
          eyebrow: "Tooling",
          title: "Outstanding bugs list",
          body: "The bug-list view made open QA work visible without leaving Discord.",
          fit: "contain",
          position: "top center"
        }
      ],
      launchNote:
        "Released on Steam as a USC Games Advanced Game Project and shown publicly at the annual USC Games Expo 2026. The strongest part of my contribution was making QA faster, clearer, and more useful to the people building the game.",
      cardNote: "QA lead · Discord bot · Steam release"
    },
    {
      slug: "neuromancer",
      title: "Neuromancer",
      category: "game",
      role: "Gameplay Programmer",
      year: "Fall 2025",
      type: "Unity Narrative Management Game",
      status: "Open Alpha cohort project",
      glyph: "ᜋᜋᜑᜒᜃ",
      color: "clay",
      coverImage: "assets/neuromancer/neuromancer-cover.png",
      coverAlt: "Neuromancer cover art with a moonlit sky, green magic, wooden title sign, and bubbling cauldron.",
      links: [
        { label: "Watch trailer", url: "#media" },
        { label: "View systems", url: "#technical" },
        { label: "Selected media", url: "#screens" }
      ],
      summary:
        "A Unity narrative management game about an evil wizard forced into morale counseling, built around timed days, dialogue choices, potion shortcuts, XP, and branching endings.",
      what:
        "Neuromancer is an Open Alpha cohort game where the player is an evil wizard whose defeated minions need morale counseling before they will keep fighting. The core loop sends a client into the wizard’s office, asks the player to read their profile and dialogue cues, choose between book-based therapy responses or potion-making, then feeds the outcome into XP, morale, day progression, and ending state. My programming work focused on cohort-scale Unity production: planning modular systems, helping the team stay coordinated, and tying together presentation flows like the main menu, main game, settings, credits, and scene navigation.",
      goals: [
        "Turn a funny premise into a readable management loop: intake, diagnosis, response, result, and day-end summary.",
        "Keep the Unity architecture modular enough for a large student cohort to build UI, dialogue, audio, potions, XP, and endings in parallel.",
        "Make dialogue and potion choices mechanically distinct: therapy is harder and more rewarding, while potions are easier but less effective.",
        "Use recurring characters, a timed day structure, and morale state to make repeated sessions feel like progression instead of isolated conversations.",
        "Give programmers clear onboarding, branch, pull request, and task-demo expectations so new contributors could join without breaking the build."
      ],
      constraints: [
        "Multiple teams were producing systems and assets at the same time, so integration points had to be explicit and mergeable.",
        "The main scene needed to combine UI, dialogue, profile cards, potion interactions, XP, audio, timer behavior, and cutscenes without becoming brittle.",
        "Recurring characters needed different rules from generic clients, including paused timers and disabled potion use at certain story moments.",
        "Dialogue content lived in large sheets and design docs, so implementation needed data discipline around ailments, response states, and final outcomes.",
        "The end-of-semester crunch pass had to prioritize scene integration, feature completion, bug fixing, and presentable trailer footage."
      ],
      process: [
        { title: "Set up the cohort process", body: "Helped document development setup, Unity version expectations, branch usage, task demos, and pull request review flow for programmers and mentors." },
        { title: "Plan modular systems", body: "Mapped the programming surface around save/settings, main menu, pause, dialogue, audio, NPC prefabs, UI interactions, potion-making, XP, and endings." },
        { title: "Tie scenes together", body: "Worked on connecting the main menu, main game, settings, credits, and escape/back navigation so the project felt like one playable build." },
        { title: "Coordinate integration", body: "Tracked crunch tasks for merging the potion UI, therapy book, dialogue scene, main scene, assets, sound, fonts, and ending logic." },
        { title: "Support feature teams", body: "Turned design requirements into programming tasks for spawning, day sequencing, profile cards, recurring characters, potion combinations, and end-of-day summaries." },
        { title: "Polish for presentation", body: "Used trailer footage, final art, cutscene stills, and task demos to document the game’s playable loop and finished visual direction." }
      ],
      technicalTitle: "System design",
      technical: [
        {
          eyebrow: "Flow",
          title: "Menu-to-game shell",
          body: "Linked the title flow, play action, settings, credits, exit/back behavior, and main scene entry so the game had a coherent presentation wrapper."
        },
        {
          eyebrow: "Dialogue",
          title: "Book-based response system",
          body: "The therapy book organized response options by ailment, while dialogue outcomes could resolve as satisfied, neutral, or dissatisfied."
        },
        {
          eyebrow: "Potions",
          title: "Two-ingredient recipe logic",
          body: "Potion-making gave players a faster shortcut by combining ingredient pairs, with each recipe mapped to a specific ailment category."
        },
        {
          eyebrow: "Progression",
          title: "XP, morale, and endings",
          body: "Successful sessions fed XP and morale, driving book upgrades, day results, and three ending branches."
        },
        {
          eyebrow: "Scheduling",
          title: "Timed days + recurring clients",
          body: "The day system mixed predetermined recurring appearances with random generic clients, then paused or changed rules for important story moments."
        },
        {
          eyebrow: "Production",
          title: "Task demos",
          body: "Programmers were expected to record short demos, attach them to pull requests, and document anything later contributors needed to know."
        }
      ],
      media: {
        title: "Trailer",
        trailers: [
          {
            title: "Fall 2025 official trailer",
            eyebrow: "Official trailer",
            src: "assets/neuromancer/neuromancer-official-trailer.mp4",
            poster: "assets/neuromancer/neuromancer-trailer-poster.png",
            body:
              "The trailer shows the finished tone of the wizard-office interface, character counseling loop, potion interactions, and cohort art direction."
          }
        ]
      },
      solutions: [
        "Framed the game loop around clear state transitions: client enters, player reads cues, chooses a therapy or potion response, outcome updates XP/morale, and the day advances.",
        "Separated recurring character moments from the timed generic-client loop so important story scenes could teach mechanics without fighting the timer.",
        "Documented programming setup and contribution steps so newer Unity programmers had a safer path from onboarding to pull request.",
        "Converted design needs into implementation tasks for profile cards, sequencing, UI integration, potion rules, cutscenes, sound, and end-of-day results.",
        "Prioritized scene and UI integration late in production so separate feature work could become one coherent build."
      ],
      takeaways: [
        "On cohort projects, programming leadership is partly code and partly making the next contributor’s path less confusing.",
        "Narrative management games need very visible state: the player has to understand why a response helped, failed, or changed the ending path.",
        "Feature work becomes much easier to merge when the project has shared expectations for branches, task demos, and pull request notes.",
        "A strong single-screen interface can carry a lot of game systems if interaction zones, feedback, and timing are planned early."
      ],
      gallery: [
        {
          image: "assets/neuromancer/neuromancer-cover.png",
          alt: "Neuromancer cover art with a moonlit sky, green magic, wooden title sign, and bubbling cauldron.",
          eyebrow: "Cover",
          title: "Title screen cover",
          body: "The cover art frames the game's playful fantasy tone with the wooden title sign, moonlit backdrop, and magic cauldron."
        },
        {
          image: "assets/neuromancer/neuromancer-room.png",
          alt: "Wizard office gameplay background from Neuromancer.",
          eyebrow: "Game screen",
          title: "Single-room management interface",
          body: "The office background anchors the client, profile, book, potion, timer, and XP systems."
        },
        {
          image: "assets/neuromancer/neuromancer-good-ending.png",
          alt: "Neuromancer good ending cutscene with multiple fantasy characters in comic panels.",
          eyebrow: "Outcome",
          title: "Branching ending",
          body: "The ending still shows how XP and morale outcomes fed into visible narrative payoff.",
          fit: "contain"
        },
        {
          image: "assets/neuromancer/neuromancer-trailer-poster.png",
          alt: "Neuromancer trailer poster frame.",
          eyebrow: "Trailer",
          title: "Playable presentation build",
          body: "The trailer poster documents the public-facing presentation build and art direction."
        }
      ],
      launchNote:
        "Built as an Open Alpha Fall 2025 cohort project. The trailer and selected art above document the playable presentation build and the programming systems I helped plan, integrate, and ship.",
      cardNote: "Unity · gameplay programming · narrative systems"
    },
    {
      slug: "scythe-of-sidereal",
      title: "Scythe of Sidereal",
      category: "game",
      role: "Game Developer",
      year: "Fall 2024",
      type: "Unity Action Game",
      status: "Playable release candidate",
      glyph: "ᜆᜎ",
      color: "night",
      coverImage: "assets/scythe/scythe-cover.png",
      coverAlt: "Scythe of Sidereal title screen shown as a landscape cover.",
      links: [
        { label: "Download on itch.io", url: "https://suvnset.itch.io/scythe-of-sidereal" },
        { label: "Watch trailer", url: "#media" },
        { label: "Animation set", url: "#animations" }
      ],
      summary:
        "A 2D action survival game about Scylax, a ruthless exorcist fighting waves of demons with a scythe that doubles as a melee weapon and projectile.",
      what:
        "Scythe of Sidereal is a CTIN 489 game built around fast wave combat, supernatural atmosphere, and a weapon system that keeps the player moving. Players fight through escalating cursed spaces, use a scythe that can swing or be thrown, rely on a faster fallback sword while the scythe is away, and work toward a beam attack unlocked through kills.",
      goals: [
        "Keep players cautious, mobile, and on their toes against enemies and the environment.",
        "Make combat simple to learn but versatile enough to reward mastery.",
        "Create a linear difficulty curve across waves so wins feel earned without becoming punishing.",
        "Use enemy variety, boss encounters, cutscenes, and audio to reinforce the supernatural fantasy."
      ],
      constraints: [
        "A two-person CS Games team had to build gameplay, art, UI, animation, and production systems while learning Unity more deeply.",
        "The original scope included ambitious progression, bosses, and finishing goals that needed to be cut or prioritized late in production.",
        "Remote audio collaboration with Berklee required clearer updates, asset tracking, and implementation notes.",
        "Playtest data showed strong combat enjoyment but weaker visual clarity, aiming controls, and sprite consistency."
      ],
      process: [
        { title: "Define the combat fantasy", body: "Centered the game on Scylax, an exorcist chasing godhood through haunted waves, so mechanics could reinforce relentlessness and danger." },
        { title: "Build the weapon loop", body: "Implemented a scythe that swings in a wide arc, can be thrown as a projectile, and creates a temporary sword state while it is away from the player." },
        { title: "Respond to playtests", body: "Used player data and observation to prioritize health regeneration, clearer visual/audio cues, stronger impact feedback, and easier-to-read interactions." },
        { title: "Finish the release candidate", body: "Brought the project from main menu to ending with cutscenes, narrative context, audio integration, and a downloadable itch.io build." }
      ],
      solutions: [
        "Created player animation states for idle, running, rolling, and floating so the character had readable motion across combat and traversal.",
        "Implemented weapon affordances around the scythe, fallback sword, and beam so the player keeps agency even when their main weapon is thrown.",
        "Used playtest findings from 16 respondents: gameplay enjoyment averaged 4.15/5, combat enjoyment 4.00/5, and enemy-defeat capability 4.29/5.",
        "Translated weaker signals around aiming controls, graphics consistency, visual cues, and enemy feedback into the final refinement plan.",
        "Coordinated audio direction for eerie exploration, more intense combat, scythe swings, throws, damage, dash, doors, UI, and cutscene moments."
      ],
      media: {
        trailer: {
          title: "Release candidate trailer",
          eyebrow: "Trailer / build",
          src: "assets/scythe-trailer.mp4",
          poster: "assets/scythe-title.png",
          body:
            "The trailer shows the game as a playable release candidate: title presentation, combat moments, supernatural mood, and the final build direction."
        },
        animations: [
          {
            title: "Idle",
            src: "assets/scythe-idle.gif",
            alt: "Pixel animation of Scylax idling with the scythe.",
            body: "Base stance used to establish the character silhouette and weapon read."
          },
          {
            title: "Run",
            src: "assets/scythe-run.gif",
            alt: "Pixel animation of Scylax running with cloak and scythe motion.",
            body: "Forward motion state for keeping combat mobile and readable."
          },
          {
            title: "Roll",
            src: "assets/scythe-roll.gif",
            alt: "Pixel animation of Scylax rolling.",
            body: "Evasive state for wave survival and repositioning."
          },
          {
            title: "Float",
            src: "assets/scythe-float.gif",
            alt: "Pixel animation of Scylax floating.",
            body: "Atmospheric motion state that leans into the supernatural fantasy."
          }
        ]
      },
      takeaways: [
        "Combat only works when feedback matches the feature set: audio, hit response, screen feedback, and visual clarity determine whether attacks feel powerful.",
        "Playtests with people outside the immediate dev circle reveal where controls and readability fail faster than internal testing does.",
        "The project became playable from start to end, but it also taught the practical lesson of setting realistic scope before production debt becomes the design."
      ],
      gallery: [
        {
          image: "assets/scythe/scythe-cover.png",
          alt: "Landscape title art for Scythe of Sidereal.",
          eyebrow: "Cover",
          title: "Release-candidate title art",
          body: "The cover uses the actual game title presentation instead of a generic title card."
        },
        {
          image: "assets/scythe/scythe-animation-sheet.png",
          alt: "Scythe of Sidereal animation sheet with idle, run, roll, float, title art, and health UI frames.",
          eyebrow: "Sprites",
          title: "Player animation set",
          body: "Original sprite frames show the animation work behind readable combat motion."
        },
        {
          image: "assets/scythe-title.png",
          alt: "Scythe of Sidereal title screen.",
          eyebrow: "Build screen",
          title: "Playable shell",
          body: "The title screen documents the release candidate wrapper from main menu onward."
        },
        {
          image: "assets/scythe-run.gif",
          alt: "Scylax run animation from Scythe of Sidereal.",
          eyebrow: "Animation",
          title: "Run cycle in motion",
          body: "The GIF shows the character motion behind the movement readability.",
          fit: "contain"
        },
        {
          image: "assets/scythe-roll.gif",
          alt: "Scylax roll animation from Scythe of Sidereal.",
          eyebrow: "Animation",
          title: "Evasive roll state",
          body: "The roll state shaped wave-survival pacing and combat repositioning.",
          fit: "contain"
        }
      ],
      launchNote:
        "The current build is available on itch.io. The trailer and animation studies above document the release candidate and the character work behind the final gameplay feel.",
      cardNote: "Unity · game development · combat · playtesting"
    },
    {
      slug: "cafe-noir",
      title: "Cafe Noir",
      category: "game",
      role: "Game Developer",
      year: "Spring 2026",
      type: "Unity Mystery RPG",
      status: "TAC 382 final project",
      glyph: "ᜃᜉᜒ",
      color: "clay",
      coverImage: "assets/cafe-noir/cafe-noir-cover.png",
      coverAlt: "Pixel-art title screen for Cafe Noir with Start, How to Play, and Settings buttons.",
      links: [
        { label: "Feature notes", url: "#technical" },
        { label: "Interface screens", url: "#screens" },
        { label: "Process", url: "#process" }
      ],
      summary:
        "A cozy pixel-art mystery RPG built in Unity for TAC 382, with NPC investigation, day/night progression, explorable interiors, dialogue variants, and accusation-based endings.",
      what:
        "Cafe Noir is a top-down pixel mystery game about exploring a small town, talking to townspeople, gathering suspicion across multiple days, and eventually accusing the murderer. I built it as an individual Unity project with tile-based movement, keyboard and virtual joystick controls, NPC dialogue that changes by day/night state, interior and exterior door transitions, day and night presentation, audio crossfades, settings menus, and win/lose cutscene flow.",
      goals: [
        "Make a cozy mystery game that feels approachable at first but slowly turns suspicious as the day/night cycle progresses.",
        "Build a playable top-down town with a cafe anchor, interior spaces, NPCs, doors, and readable pixel UI.",
        "Let dialogue change based on the current day, night phase, and selected mystery version.",
        "Support both keyboard and virtual joystick input so the game could be tested across desktop-style and mobile-style controls.",
        "Create a full loop from main menu to investigation to accusation and ending cutscene.",
        "Keep the final class-project scope finished enough to feel complete without overbuilding the mystery systems."
      ],
      constraints: [
        "The project was a solo class final, so systems, UI, dialogue, scene flow, and presentation had to stay scoped enough to finish.",
        "Dialogue had to remain organized across multiple NPCs, days, nights, win states, lose states, and mystery versions.",
        "Scene transitions needed to preserve player position, camera bounds, audio state, and interior/exterior context.",
        "The visual style depended on pixel-art readability, so UI, movement, interaction prompts, and time state had to stay clear.",
        "The culprit-version framework had to be documented clearly even while the final build locked to one mystery route.",
        "The portfolio page had to use available build screenshots and system boards because the class build does not yet have a full gameplay capture set."
      ],
      process: [
        {
          title: "Build the town loop",
          body: "Created the main scene around a walkable pixel town, cafe exterior, and building entrances that could move the player between outdoor and indoor spaces."
        },
        {
          title: "Write stateful dialogue",
          body: "Organized NPC dialogue assets by mystery version and time state so conversations could change across Day, Night 1, Night 2, Night 3, win, and lose outcomes."
        },
        {
          title: "Implement movement + interaction",
          body: "Built tile-based player movement, obstacle checks, animation updates, interaction detection, and an interact button layer for nearby NPCs or doors."
        },
        {
          title: "Add time pressure",
          body: "Used day/night state, clock UI, lighting overlays, night triggers, and next-day prompts to make the investigation feel paced instead of static."
        },
        {
          title: "Connect endings",
          body: "Added accusation flow that resolves the selected suspect into jail or escape cutscenes depending on whether the player chose correctly."
        },
        {
          title: "Polish the shell",
          body: "Built main menu, settings, pause, audio volume, SFX volume, quality controls, screen fades, and music crossfades for a finished class-project wrapper."
        }
      ],
      technicalTitle: "Feature map",
      technical: [
        {
          eyebrow: "Gameplay",
          title: "Town exploration",
          body: "The overworld screenshots show the cafe exterior, clock HUD, virtual joystick, and interaction button that define exploration."
        },
        {
          eyebrow: "Dialogue",
          title: "NPC interrogation",
          body: "The dialogue-system board documents how NPC lines are organized by suspect version, day/night state, and outcome state."
        },
        {
          eyebrow: "State",
          title: "Day/night investigation",
          body: "The systems board covers the morning-to-night shift, overlays, time pacing, and music crossfades that drive the investigation mood."
        },
        {
          eyebrow: "Scenes",
          title: "Door + interior transitions",
          body: "The technical notes connect doors, spawn points, fades, camera bounds, SFX, and interior/exterior music transitions."
        },
        {
          eyebrow: "Endings",
          title: "Accusation sequence",
          body: "The accusation flow is represented in the system board: selecting a suspect resolves into win or lose cutscenes."
        },
        {
          eyebrow: "UI",
          title: "Menus + settings",
          body: "The title screenshot and cover art show the completed menu shell, with settings and pause controllers described in the build notes."
        }
      ],
      screensTitle: "Current screenshots",
      screens: [
        {
          image: "assets/cafe-noir/cafe-noir-title.png",
          alt: "Cafe Noir title screen with a large pixel logo and menu buttons.",
          eyebrow: "Title screen",
          title: "Cafe facade as main menu",
          body: "The title screen frames the game as a cozy cafe mystery before the player enters the town.",
          position: "center",
          fit: "cover",
          details: [
            "Start, How to Play, and Settings are presented as large pixel UI buttons.",
            "The cafe background establishes the visual palette before gameplay begins."
          ]
        },
        {
          image: "assets/cafe-noir/cafe-noir-overworld.png",
          alt: "Cafe Noir gameplay screen showing the player in front of the cafe with day and time UI.",
          eyebrow: "Overworld",
          title: "Cafe-centered town exploration",
          body: "The main scene combines top-down movement, a clock/day HUD, virtual joystick, and interaction button.",
          position: "center",
          fit: "cover",
          details: [
            "Day 1 / morning state is visible in the HUD.",
            "Touch-style controls make the interaction model visible even in screenshots."
          ]
        }
      ],
      solutions: [
        "Used a central GameManager and GlobalGameState to coordinate current day, night state, murderer selection, accusation resolution, and scene transitions.",
        "Separated dialogue into versioned assets so NPC lines could be swapped by culprit version and time state without rewriting the dialogue manager.",
        "Built door scripts around spawn points, camera bounds, fade transitions, SFX, and music switching so interiors felt connected rather than separate throwaway rooms.",
        "Supported both keyboard and virtual joystick input in the player controller, which made the game easier to test and present across different control expectations.",
        "Added music crossfades for main menu, overworld day, overworld night, and interior spaces to help the mood shift as the investigation progresses.",
        "Created menu and settings controllers for start, how-to, settings, pause, audio, and quality flows so the game had a complete class-final presentation shell."
      ],
      takeaways: [
        "Mystery games are mostly state management: the hard part is keeping clues, suspects, days, and outcomes understandable.",
        "Dialogue organization matters early. Once NPCs have different lines by version and time of day, naming and folder structure become part of the design.",
        "Small quality-of-life systems like fades, audio crossfades, settings, and interaction prompts make a class project feel far more complete.",
        "The current media set works because it combines actual screenshots with system boards that explain the build behavior behind still images.",
        "Building solo made scope control just as important as code. Every feature had to earn its place in the final loop.",
        "Cafe Noir helped connect systems programming, UI flow, and narrative design inside one playable Unity project."
      ],
      gallery: [
        {
          image: "assets/cafe-noir/cafe-noir-cover.png",
          alt: "Landscape cover crop of the Cafe Noir title screen.",
          eyebrow: "Cover",
          title: "Cafe facade title screen",
          body: "The cover uses the actual title/menu screen from the Unity build."
        },
        {
          image: "assets/cafe-noir/cafe-noir-overworld.png",
          alt: "Cafe Noir overworld screenshot with player, cafe exterior, day/time HUD, joystick, and interact button.",
          eyebrow: "Game screen",
          title: "Town exploration",
          body: "The overworld screenshot shows movement UI, time state, and the cafe-centered map.",
          position: "center"
        }
      ],
      launchNote:
        "Built as an individual TAC 382 Unity final project. The feature map above combines current screenshots with system boards that document exploration, dialogue, day/night state, transitions, menus, and accusation endings.",
      cardNote: "Unity · game development · mystery RPG"
    },
    {
      slug: "open-your-browser",
      title: "Open Your Browser",
      category: "game",
      role: "Gameplay Programmer",
      year: "Spring 2025",
      type: "Unity Desktop-UI Minigame Game",
      status: "Open Alpha cohort project",
      glyph: "ᜊᜓᜃᜐ᜔",
      color: "clay",
      coverImage: "assets/open-your-browser/oyb-cover-landscape.png",
      coverAlt: "Open Your Browser title screen shown on a laptop in a pixel-art desk scene.",
      links: [
        { label: "Systems demo", url: "#media" },
        { label: "RAM + rhythm systems", url: "#technical" },
        { label: "Selected media", url: "#screens" }
      ],
      summary:
        "A frantic desktop-UI minigame game where the player races to unsubmit an accidental art portfolio upload while popups, RAM pressure, and browser minigames spiral out of control.",
      what:
        "Open Your Browser is an Open Alpha Spring 2025 cohort game about a college applicant who accidentally submits embarrassing fanart in their portfolio and has to claw their way back through a collapsing computer before midnight. The game presents itself as a chaotic old desktop: popups, a virtual assistant, browser windows, time pressure, RAM pressure, and a chain of minigames all become part of the interface. I worked on the programming team, contributing to main game logic, RAM behavior, and minigame systems, especially the cookie rhythm game where cookies are timed against music and clicked on beat.",
      goals: [
        "Make the browser interface itself feel like the game, not just a container for separate minigames.",
        "Connect minigame outcomes to global pressure: time advances, RAM changes, and the taskbar communicates progress.",
        "Build a cookie rhythm game where notes/cookies are generated with target hit times and player clicks are scored by timing accuracy.",
        "Keep minigames modular enough that runner, mob, rhythm, CAPTCHA, and final boss scenes could plug into the same game flow.",
        "Use RAM, popups, and visual noise to make the player feel the computer getting harder to control."
      ],
      constraints: [
        "The cohort had multiple teams building minigames in parallel, so shared game-state hooks had to stay clear.",
        "RAM needed to respond to many systems at once: minigame wins/losses, popups, time pressure, and later tuning passes.",
        "The cookie rhythm game needed timing logic that stayed synced to music instead of drifting with ordinary frame time.",
        "Several minigames were built as separate scenes, which meant the main loop needed scene-loading and transition discipline.",
        "The desktop chaos had to stay stressful without making the player lose track of what they could click or fix."
      ],
      process: [
        { title: "Build the main loop", body: "Contributed to the main game logic container where minigames run inside the desktop screen and report back to global state." },
        { title: "Wire RAM outcomes", body: "Helped connect minigame completion and failure states to RAM behavior so the pressure meter changed as players survived or slipped." },
        { title: "Implement rhythm timing", body: "Worked on the cookie rhythm game’s elapsed-time and target-time logic so cookies could be judged by how close the click was to the beat." },
        { title: "Support minigame modularity", body: "Helped with minigame systems that needed reusable wrappers, especially for swapping CAPTCHA puzzle content and keeping scenes testable." },
        { title: "Fix late-production friction", body: "Handled cleanup tasks such as retry-flow bugs, find-assistant feedback text, and credit-scene cleanup during the refinement pass." }
      ],
      technicalTitle: "RAM + minigame systems",
      technical: [
        {
          eyebrow: "State",
          title: "RAM as pressure meter",
          body: "The game used RAM as the central pressure stat. Winning minigames lowered RAM, active popups could raise it, and RAM overflow created crash/fail pressure."
        },
        {
          eyebrow: "Loop",
          title: "Minigame result hooks",
          body: "Main game logic expected minigames to report win/loss outcomes back into shared systems so time, RAM, and taskbar progress could update consistently."
        },
        {
          eyebrow: "Rhythm",
          title: "Cookie target times",
          body: "The cookie rhythm game tracked elapsed song time, assigned cookies target hit times, and scored clicks by distance from the target beat."
        },
        {
          eyebrow: "Sync",
          title: "Music-safe timing",
          body: "The rhythm task called for audio-clock style timing, such as Unity’s AudioSettings.dspTime, to avoid beat drift from frame-based timers."
        },
        {
          eyebrow: "Scenes",
          title: "Additive minigame loading",
          body: "Planning shifted minigames toward separate Unity scenes loaded additively, making it easier for different feature teams to work in parallel."
        },
        {
          eyebrow: "Reusable puzzles",
          title: "Generic CAPTCHA wrappers",
          body: "The CAPTCHA work wrapped puzzle variants so text images, correct strings, sliding images, piece positions, and selection matrices could be swapped cleanly."
        }
      ],
      media: {
        title: "Trailer + systems demo",
        trailers: [
          {
            title: "Official trailer",
            eyebrow: "Trailer",
            src: "assets/open-your-browser/oyb-official-trailer.mp4",
            poster: "assets/open-your-browser/oyb-cover-landscape.png",
            body:
              "The trailer captures the cohort game's desktop chaos, browser minigames, popups, and late-night portfolio panic in its public-facing form."
          },
          {
            title: "Game logic + pause demo",
            eyebrow: "Programming demo",
            src: "assets/open-your-browser/oyb-systems-demo.mp4",
            poster: "assets/open-your-browser/oyb-systems-demo-poster.png",
            body:
              "A development demo showing the desktop frame, RAM bar, taskbar, popup interaction, and virtual assistant layer that connected minigames back to the main loop."
          }
        ]
      },
      screensTitle: "Interface + minigame art",
      screens: [
        {
          image: "assets/open-your-browser/oyb-cover.png",
          alt: "Open Your Browser title screen on a pixel-art laptop at a desk.",
          eyebrow: "Title flow",
          title: "Browser as the game world",
          body: "The opening screen frames the laptop and browser as the playable space, setting up the desktop UI language before the chaos starts.",
          position: "center",
          fit: "cover",
          details: [
            "Old-computer presentation reinforces the popup and RAM mechanics.",
            "The portfolio deadline is visible in the desk scene."
          ]
        },
        {
          image: "assets/open-your-browser/oyb-cookie-popup.png",
          alt: "A browser-style popup asking the player to accept all cookies.",
          eyebrow: "Cookie rhythm setup",
          title: "Accept cookies becomes a minigame",
          body: "The cookie prompt turns a familiar browser pattern into a rhythm challenge where timing and visual clutter become part of the joke.",
          position: "center",
          fit: "cover",
          details: [
            "The rhythm task used target hit times tied to the song.",
            "Successful cookie clicks could feed back into the RAM pressure loop."
          ]
        },
        {
          image: "assets/open-your-browser/oyb-cookie-background.png",
          alt: "Pastel cookie rhythm minigame background with splattered texture.",
          eyebrow: "Rhythm arena",
          title: "Beat-synced cookie field",
          body: "The rhythm background gave the cookie minigame a distinct palette from the darker desktop and popup UI.",
          position: "center",
          fit: "cover",
          details: [
            "Designed for cookies to move across the play area.",
            "Separated the rhythm sequence from the rest of the desktop visually."
          ]
        },
        {
          image: "assets/open-your-browser/oyb-ram-popup.png",
          alt: "A warning popup saying the computer is low on memory.",
          eyebrow: "RAM warning",
          title: "System pressure made visible",
          body: "RAM was not just background state; the game turned memory pressure into visible warnings, failure pressure, and cleanup motivation.",
          position: "center",
          fit: "contain",
          details: [
            "Popups could add pressure if left alone.",
            "Closing or clearing interactions helped the player manage the system."
          ]
        },
        {
          image: "assets/open-your-browser/oyb-final-boss.png",
          alt: "Final boss collage art made of submitted portfolio images, eyes, and tentacle-like shapes.",
          eyebrow: "Final boss",
          title: "Portfolio panic as boss fight",
          body: "The final sequence turns the accidental submission into a boss encounter, paying off the escalating browser minigame chain.",
          position: "center",
          fit: "contain",
          details: [
            "Final boss pressure uses the same RAM-as-health framing.",
            "Connects the minigame structure back to the portfolio narrative."
          ]
        }
      ],
      solutions: [
        "Helped make RAM a shared state that could be touched by minigames, popups, and fail conditions instead of living as a decorative UI bar.",
        "Worked on rhythm-game timing so cookies had explicit target moments and clicks could be judged by beat accuracy.",
        "Supported the main-game wrapper where minigames run inside a desktop frame and feed results back into time, RAM, and taskbar progress.",
        "Helped make minigames easier to swap and test by contributing to generalized puzzle/minigame structures.",
        "Used late-stage bug fixes and refinement work to keep the final sequence of minigames understandable under pressure."
      ],
      takeaways: [
        "A good global pressure system has to be touched by many small interactions, but those interactions need one clear contract.",
        "Rhythm games are timing systems before they are visual systems; beat accuracy depends on the audio clock, not just frame updates.",
        "Desktop UI can be playful game language when every familiar annoyance has a mechanical consequence.",
        "Cohort minigame projects need shared wrappers early so each team can build weird moments without breaking the whole loop."
      ],
      gallery: [
        {
          image: "assets/open-your-browser/oyb-cover-landscape.png",
          alt: "Landscape Open Your Browser title screen cover.",
          eyebrow: "Cover",
          title: "Desktop-UI title cover",
          body: "The case-study cover uses the actual title presentation from the cohort build."
        },
        {
          image: "assets/open-your-browser/oyb-cookie-popup.png",
          alt: "Open Your Browser cookie popup art.",
          eyebrow: "Cookie rhythm",
          title: "Cookie popup entry",
          body: "The cookie popup connects the browser wrapper to the rhythm minigame path.",
          fit: "contain"
        },
        {
          image: "assets/open-your-browser/oyb-cookie-background.png",
          alt: "Open Your Browser cookie rhythm game background.",
          eyebrow: "Minigame",
          title: "Rhythm minigame background",
          body: "The rhythm screen assets frame the beat-timed cookie click system.",
          fit: "contain"
        },
        {
          image: "assets/open-your-browser/oyb-ram-popup.png",
          alt: "Open Your Browser low-memory warning popup.",
          eyebrow: "RAM system",
          title: "RAM warning popup",
          body: "Memory pressure becomes visible through warnings and crash-state pressure.",
          fit: "contain"
        }
      ],
      launchNote:
        "Built as an Open Alpha Spring 2025 cohort project. The case study focuses on my programming-team contributions to RAM behavior, minigame flow, and especially the cookie rhythm game’s timing logic.",
      cardNote: "Unity · RAM systems · rhythm minigame"
    },
    {
      slug: "earthline-protocol",
      title: "Earthline Protocol",
      category: "game",
      role: "Gameplay Programmer",
      year: "Summer 2025",
      type: "IndieCade Climate Jam Tower Defense",
      status: "Released on itch.io",
      glyph: "ᜎᜓᜉ",
      color: "forest",
      coverImage: "assets/earthline-protocol/earthline-cover.png",
      coverAlt: "Earthline Protocol title art with a green futuristic city and overgrown grass.",
      links: [
        { label: "Play on itch.io", url: "https://ibrower.itch.io/earthline-protocol" },
        { label: "Tower defense design PDF", url: "assets/earthline-protocol/tower-defense-design-document.pdf" },
        { label: "IndieCade jam PDF", url: "assets/earthline-protocol/indiecade-game-jam.pdf" },
        { label: "Selected media", url: "#screens" },
        { label: "Process", url: "#process" }
      ],
      summary:
        "A climate-themed tower defense game made for IndieCade Climate Jam 2025, where I contributed gameplay programming for animal-powered climate solutions, disaster waves, and global temperature pressure.",
      what:
        "Earthline Protocol is a released Windows tower defense game about protecting a city from natural and unnatural disasters. The game frames animals as exaggerated climate-change solutions: players place animal towers, manage waves of threats, and buy green-energy upgrades in the city center to keep global temperature from reaching a fail state. I contributed as a gameplay programmer, helping turn the jam design into playable logic around towers, waves, UI feedback, and the climate-pressure loop.",
      goals: [
        "Turn a serious climate premise into an approachable tower defense game with readable, playful animal defenders.",
        "Use familiar strategy-game language: towers, waves, projectiles, city health, global temperature, and scouting upcoming disasters.",
        "Program gameplay interactions that communicate tower roles quickly at small sprite scale.",
        "Support a game-jam production pace with clear design documentation and reusable gameplay/UI pieces."
      ],
      constraints: [
        "The game needed to make climate systems understandable without making the tone feel heavy or inaccessible.",
        "Tower and enemy information had to stay readable while the camera pans and zooms across the map.",
        "Jam scope meant the team needed assets, UI, design docs, and implementation hooks to converge quickly.",
        "The design needed multiple win/loss pressures: city health, incoming disaster waves, and global temperature."
      ],
      process: [
        {
          title: "Define the tower defense frame",
          body:
            "The design document shaped the game around 30 waves, health-based enemies, tower stats, global temperature pressure, and city health."
        },
        {
          title: "Build climate-solution towers",
          body:
            "Animal towers such as Barricading Beaver, Carbon Capture, Flying Planter, Polar Air Solutions, Saltwater Purifier, and W.A.S.P. needed readable behavior, stats, and feedback."
        },
        {
          title: "Create readable UI feedback",
          body:
            "Build menus, temperature indicators, wave counters, and button states helped turn the climate premise into moment-to-moment strategy controls."
        },
        {
          title: "Package the jam submission",
          body:
            "The final itch.io page shipped the Windows build with the game description, controls, design document, and Climate Jam submission context."
        }
      ],
      technicalTitle: "Gameplay + design system",
      technical: [
        {
          eyebrow: "Core loop",
          title: "Wave-based tower defense",
          body:
            "The design document planned single-wave rounds, 30 total rounds, health-based enemies, and disaster-specific tower interactions."
        },
        {
          eyebrow: "Pressure",
          title: "Global temperature fail state",
          body:
            "Temperature starts at 56 degrees, rises over time, and becomes a loss condition alongside city health."
        },
        {
          eyebrow: "Scouting",
          title: "NASA satellite preview",
          body:
            "The design included a satellite preview system so players could see upcoming disasters and adapt tower placement."
        },
        {
          eyebrow: "Towers",
          title: "Animated tower identities",
          body:
            "Each animal tower needed a distinct silhouette, movement rhythm, and projectile language so players could read its gameplay role quickly."
        }
      ],
      screensTitle: "Game art + UI",
      screens: [
        {
          image: "assets/earthline-protocol/earthline-cover.png",
          alt: "Earthline Protocol title art showing a green futuristic city rising above grass.",
          eyebrow: "Title art",
          title: "Climate tower-defense cover",
          body: "The title image introduces the game's bright eco-futurist city and overgrown environmental framing.",
          position: "center",
          fit: "cover",
          details: [
            "Used as the landscape cover/header image for the portfolio card.",
            "Matches the public itch.io title presentation."
          ]
        },
        {
          image: "assets/earthline-protocol/build-menu-ui.png",
          alt: "Earthline Protocol build menu UI background with square slots.",
          eyebrow: "UI",
          title: "Build menu panel",
          body: "The build menu frame gives tower placement decisions a clear home during the wave-defense loop.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/temp-monitor-ui.png",
          alt: "Earthline Protocol temperature monitor UI icon.",
          eyebrow: "UI",
          title: "Temperature monitor",
          body: "The monitor asset makes global temperature a visible pressure system rather than hidden state.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/wave-counter-ui.png",
          alt: "Earthline Protocol wave counter UI frame.",
          eyebrow: "UI",
          title: "Wave counter",
          body: "The wave counter anchors the round structure and helps players read progression at a glance.",
          fit: "contain"
        }
      ],
      gallery: [
        {
          image: "assets/earthline-protocol/barricading-beaver.gif",
          alt: "Animated Barricading Beaver tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "Barricading Beaver",
          body: "A defensive animal tower animation built to read clearly as a protective climate-solution unit.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/carbon-capture.gif",
          alt: "Animated Carbon Capture tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "Carbon Capture",
          body: "The Carbon Capture tower turns an abstract climate solution into a character-like animated unit.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/flying-planter.gif",
          alt: "Animated Flying Planter tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "Flying Planter",
          body: "The Flying Planter sprite uses motion to distinguish an aerial utility role.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/polar-air-solutions.gif",
          alt: "Animated Polar Air Solutions tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "Polar Air Solutions",
          body: "The Polar Air Solutions tower gives cooling and climate intervention a compact animated identity.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/saltwater-purifier.gif",
          alt: "Animated Saltwater Purifier tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "Saltwater Purifier",
          body: "The Saltwater Purifier animation adds another climate-solution role to the tower set.",
          fit: "contain"
        },
        {
          image: "assets/earthline-protocol/wasp.gif",
          alt: "Animated W.A.S.P. tower sprite from Earthline Protocol.",
          eyebrow: "Tower animation",
          title: "W.A.S.P.",
          body: "The W.A.S.P. sprite adds a faster, sharper silhouette to the animal-tower roster.",
          fit: "contain"
        }
      ],
      solutions: [
        "Framed climate action as a tactical defense loop so players could act on the theme instead of only reading about it.",
        "Used animal towers to make climate solutions more memorable, approachable, and readable at game scale.",
        "Kept UI feedback simple and high-contrast so build, wave, and temperature decisions remained readable.",
        "Paired the public itch.io release with design documentation so the game has both a playable build and a clear process record."
      ],
      takeaways: [
        "Climate games work best when the theme becomes a mechanic the player can reason about.",
        "A jam game needs feedback that communicates quickly: silhouette, role, motion, and affordance all matter.",
        "Tower defense is a useful structure for climate systems because it naturally combines preparation, crisis response, and long-term pressure.",
        "Documentation helped the team keep the serious premise and approachable art direction moving in the same direction."
      ],
      launchNote:
        "Published on itch.io as a Windows game for IndieCade Climate Jam 2025. The linked PDFs include the local tower defense design document and IndieCade game-jam packet.",
      cardNote: "IndieCade jam · gameplay programming · climate game"
    },
    {
      slug: "qbert-engine-final",
      title: "Q*bert Engine Final",
      category: "game",
      role: "Gameplay Programmer / Engine Programmer",
      year: "Spring 2026",
      type: "Programming Games Engine Final",
      status: "TAC 485 final project",
      glyph: "ᜎᜓᜈ᜔ᜇᜄ᜔",
      color: "night",
      coverImage: "assets/qbert-engine/qbert-cover.png",
      coverAlt: "Q*bert Engine Final gameplay still showing the cube pyramid, player character, and enemy spheres.",
      links: [
        { label: "Gameplay video", url: "#media" },
        { label: "Technical notes", url: "#technical" },
        { label: "Selected media", url: "#screens" },
        { label: "Process", url: "#process" }
      ],
      summary:
        "A TAC 485 Programming Games Engine final where I was given the assets and models, then coded the playable Q*bert-style loop, board generation, movement, enemies, collisions, and win/loss states.",
      what:
        "Q*bert Engine Final was my programming-games-engine final project. The supplied material gave me character assets, models, animations, textures, shaders, and level data, but I had to code the actual game behavior: the generated cube pyramid, diagonal grid movement, jump arcs, color-changing cube state, enemy spawning, snake-chase behavior, collision checks, fall resets, and win conditions. The page uses gameplay capture to show the implementation without exposing the full local course source.",
      goals: [
        "Turn supplied assets and models into a complete playable Q*bert-style game loop.",
        "Generate the isometric cube pyramid and per-cube completion state through code.",
        "Make movement feel like Q*bert: discrete diagonal board hops with a readable vertical jump arc.",
        "Implement enemy behavior that creates pressure without breaking the board-coordinate model.",
        "Use the engine's level, shader, mesh, texture, animation, and input systems to make the final feel integrated rather than like isolated demos."
      ],
      constraints: [
        "The project started from provided assets/models, so the challenge was implementation and integration rather than asset creation.",
        "Board movement had to work on a triangular pyramid grid, where valid neighbors change depending on row and column.",
        "Enemies needed their own timing and state rules while still colliding cleanly with the player on shared cube positions.",
        "Invalid jumps had to become readable fall/reset moments instead of silent input failures.",
        "The portfolio should show the technical work without exposing the full local course project source."
      ],
      process: [
        {
          title: "Read the supplied level and assets",
          body:
            "Used the provided Qbert level data, character meshes, animation clips, textures, and shaders as the foundation for the playable implementation."
        },
        {
          title: "Build the board model",
          body:
            "Coded a generated seven-row cube pyramid, including per-cube top colors and completion state so the board could react to player hops."
        },
        {
          title: "Implement player movement",
          body:
            "Mapped W/A/S/D and arrow keys to four diagonal jump directions, then used jump-start, jump-target, timer, and sine-height state to animate each hop."
        },
        {
          title: "Add hazards and snake AI",
          body:
            "Built red-sphere hazards, purple-sphere hatching behavior, and a snake chase routine that evaluates valid neighboring cubes and moves toward the player."
        },
        {
          title: "Tie outcomes together",
          body:
            "Connected collisions, falling, resets, cube completion, and all-cube win checks so the engine demo became a full game loop."
        }
      ],
      technicalTitle: "Coded gameplay systems",
      technical: [
        {
          eyebrow: "Board generation",
          title: "Seven-row cube pyramid",
          body:
            "CreatePyramid builds the Q*bert board as rows of cube meshes, then tracks each cube's row, column, top color, and completion state."
        },
        {
          eyebrow: "Input",
          title: "Discrete diagonal movement",
          body:
            "UpdatePlayer maps four direction keys to triangular-grid neighbor moves and turns each valid move into a timed jump arc."
        },
        {
          eyebrow: "State",
          title: "Color-change completion",
          body:
            "HandlePlayerLandedOnBlock updates cube state when the player lands, then checks whether all cubes have been completed."
        },
        {
          eyebrow: "Hazards",
          title: "Enemy spawn and jump loops",
          body:
            "Enemy objects move through inactive, spawning, waiting, jumping, falling, hatching, and frozen states so hazards can enter, move, and reset predictably."
        },
        {
          eyebrow: "AI",
          title: "Snake pursuit",
          body:
            "The snake evaluates valid board moves and chooses the neighboring cube closest to the player's current tile."
        },
        {
          eyebrow: "Integration",
          title: "Assets into gameplay",
          body:
            "The supplied meshes, animations, textures, level file, and HLSL shaders are driven by the gameplay code rather than staying as static assets."
        }
      ],
      media: {
        title: "Gameplay capture",
        trailers: [
          {
            src: "assets/qbert-engine/qbert-gameplay.mp4",
            poster: "assets/qbert-engine/qbert-cover.png",
            eyebrow: "Gameplay",
            title: "Q*bert engine gameplay recording",
            body: "A screen recording of the playable Q*bert-style loop running with the implemented board movement, cube state, hazards, and reset behavior."
          }
        ]
      },
      screensTitle: "Engine notes",
      screens: [
        {
          image: "assets/qbert-engine/qbert-cover.png",
          alt: "Q*bert Engine Final gameplay still showing the cube pyramid, player character, and enemy spheres.",
          eyebrow: "Gameplay still",
          title: "Generated cube pyramid in play",
          body: "The still comes from the gameplay recording and shows the implemented board, cube color state, player movement space, and enemy hazards.",
          fit: "cover",
          position: "center"
        }
      ],
      gallery: [
        {
          image: "assets/qbert-engine/qbert-cover.png",
          alt: "Q*bert Engine Final gameplay still used as the project cover.",
          eyebrow: "Cover",
          title: "Gameplay-derived cover",
          body: "The project card uses a frame from the actual gameplay recording, keeping the media tied to the implementation.",
          fit: "cover"
        }
      ],
      solutions: [
        "Generated the board in code so movement, cube state, enemy positions, and completion checks all shared the same row/column model.",
        "Used a jump state with start position, target position, timer, duration, and sine-height offset to make discrete grid moves feel animated.",
        "Handled invalid moves as falling/reset behavior so player mistakes became visible feedback.",
        "Separated enemy state machines from player movement while keeping collisions grounded in the same board-position model.",
        "Kept the public page focused on gameplay capture because the source lives in a local course project."
      ],
      takeaways: [
        "A simple arcade game becomes an engine exercise once every visual asset needs code to make it playable.",
        "Board-coordinate logic is the backbone: movement, AI, collision, reset, and win checks become easier when they share one model.",
        "Discrete movement still needs motion feel. The jump arc and fall behavior make grid logic feel physical.",
        "A focused gameplay capture can explain a local class project without publishing the full source."
      ],
      launchNote:
        "Built locally as a TAC 485 Programming Games Engine final. The assets and models were supplied for the assignment; I coded the gameplay systems, integration, and playable loop. Source/build files remain local course work, so the page documents the implementation with gameplay capture and replaceable media slots.",
      cardNote: "C++ engine · supplied assets · coded gameplay loop"
    },
    {
      slug: "yokai-paradox",
      title: "Yokai Paradox",
      category: "game",
      role: "Game Designer / Playtest + Usability Lead",
      year: "2023",
      type: "Physical Board Game",
      status: "CTIN 488 prototype",
      glyph: "ᜌᜓᜃᜁ",
      color: "night",
      coverImage: "assets/board-games/yokai/yokai-cover.jpg",
      coverAlt: "Yokai Paradox title slide with warm amber glow and team credits.",
      links: [
        { label: "Presentation PDF", url: "assets/board-games/yokai/yokai-paradox-presentation.pdf" },
        { label: "Full rules PDF", url: "assets/board-games/yokai/yokai-paradox-rules.pdf" },
        { label: "Selected media", url: "#screens" },
        { label: "Process", url: "#process" }
      ],
      summary:
        "A physical board game prototype about quirky exorcists in a supernatural museum, built through iterative playtests, usability feedback, and component redesign.",
      what:
        "Yokai Paradox is a CTIN 488 board game prototype about three exorcists trapped inside a supernatural museum and trying to uncover the powerful Yokai Aiko. I worked as a game designer and playtest/usability lead, helping shape the double-sided board concept, rethink rules after confused playtests, and make the final version easier to learn through clearer setup guidance, diagrams, and revised components.",
      goals: [
        "Create a mysterious exorcist board game where players feel tension, discovery, and shifting trust.",
        "Make the double-sided board idea playable instead of only visually interesting.",
        "Use playtest observation to simplify mechanics, clarify setup, and reduce rules confusion.",
        "Give the prototype a strong supernatural identity through character cards, newspaper-style lore, and physical components."
      ],
      constraints: [
        "The initial flippable board concept created confusion because each side needed mechanics that related cleanly to the other.",
        "The team had to move from ambitious premise to a playable physical prototype within a class production schedule.",
        "Rules, setup, and player objectives needed to be clear to first-time players without a designer explaining every step.",
        "Usability feedback had to become specific revisions: clearer rulebook language, diagrams, and more readable components."
      ],
      process: [
        { title: "Prototype the premise", body: "Built early physical components around the exorcist museum concept, then tested whether the double-sided board idea could hold up in actual play." },
        { title: "Observe confusion", body: "Used in-class playtests to watch where players got stuck, especially around board sides, rule interpretation, and tension level." },
        { title: "Revise for usability", body: "Helped rework the rules and setup language so the game could be learned more easily by new players." },
        { title: "Polish components", body: "Worked through character cards, board modifications, and presentation material so the prototype felt cohesive and playable." }
      ],
      technicalTitle: "Usability + prototype loop",
      technical: [
        {
          eyebrow: "Board",
          title: "Double-sided board problem",
          body: "The early concept depended on a flippable board, but playtests showed that each side needed stronger mechanical relationships to avoid confusion."
        },
        {
          eyebrow: "Playtest",
          title: "Rulebook as interface",
          body: "The final iteration focused on setup guidance, diagrams, and clearer language so players could start without heavy designer intervention."
        },
        {
          eyebrow: "Components",
          title: "Character and lore cards",
          body: "The card set and newspaper artifact gave the supernatural premise a tangible identity inside the revised play loop."
        }
      ],
      screensTitle: "Prototype + playtest notes",
      screens: [
        {
          image: "assets/board-games/yokai/yokai-week12-prototype.jpg",
          alt: "Early Yokai Paradox physical prototype being built and discussed at a table.",
          eyebrow: "W12 prototype",
          title: "First physical build",
          body: "The first prototype translated the supernatural museum premise into a tangible board and component set.",
          position: "center",
          fit: "cover"
        },
        {
          image: "assets/board-games/yokai/yokai-week13-playtest.jpg",
          alt: "Players testing Yokai Paradox at a table with the board prototype.",
          eyebrow: "W13 playtest",
          title: "Watching players learn the rules",
          body: "In-class playtesting exposed where players struggled with the double-sided board and rulebook language.",
          position: "center",
          fit: "cover"
        },
        {
          image: "assets/board-games/yokai/yokai-week14-cards.jpg",
          alt: "Yokai Paradox character card designs including Shori, Yuta, and Aiko.",
          eyebrow: "Component design",
          title: "Character cards and identity",
          body: "The character cards helped the final prototype feel more specific, readable, and connected to the supernatural premise.",
          position: "center",
          fit: "contain"
        },
        {
          image: "assets/board-games/yokai/yokai-final-playtest.jpg",
          alt: "Players gathered around the Yokai Paradox final iteration board.",
          eyebrow: "Final iteration",
          title: "Playable final prototype",
          body: "The later version emphasized clearer setup, revised mechanics, and a smoother path into play.",
          position: "center",
          fit: "cover"
        }
      ],
      gallery: [
        {
          image: "assets/board-games/yokai/yokai-cover.jpg",
          alt: "Yokai Paradox title slide.",
          eyebrow: "Cover",
          title: "Presentation title",
          body: "The title slide anchors the project in its final class-presentation identity."
        },
        {
          image: "assets/board-games/yokai/yokai-newspaper.png",
          alt: "Newspaper-style Yokai Paradox lore and component sheet.",
          eyebrow: "Lore artifact",
          title: "Newspaper-style lore",
          body: "The newspaper page presents the museum premise and component language as an in-world artifact.",
          fit: "contain"
        },
        {
          image: "assets/board-games/yokai/yokai-week12-brainstorm.jpg",
          alt: "Yokai Paradox whiteboard brainstorm about roles, Yokai, and board movement.",
          eyebrow: "Brainstorm",
          title: "Mechanics whiteboard",
          body: "The whiteboard shows the early rules exploration behind roles, movement, and board state.",
          fit: "contain"
        },
        {
          image: "assets/board-games/yokai/yokai-week14-components.jpg",
          alt: "Yokai Paradox physical board and component modification photos.",
          eyebrow: "Components",
          title: "Board modifications",
          body: "Physical component work helped the final version become more playable after the early board concept proved confusing."
        }
      ],
      solutions: [
        "Shifted from a clever board concept toward a playable rule structure after observing confusion in real playtests.",
        "Treated setup guidance and diagrams as part of the user experience, not just documentation.",
        "Used character and lore pieces to keep the supernatural tone visible while mechanics were being simplified.",
        "Balanced design ambition with usability so the final prototype could be taught and tested more reliably."
      ],
      takeaways: [
        "Physical game usability is immediate: confused players reveal rule problems faster than a designer can explain them away.",
        "A novel board mechanic needs a clean mental model before it can become fun.",
        "Playtest leadership means turning observation into next-step revisions instead of only collecting opinions.",
        "Strong components help players understand tone, but rules still need to carry the first play experience."
      ],
      launchNote:
        "Built as a CTIN 488 physical game prototype. The linked PDF and cropped process images document the development path from early concept to final playable iteration.",
      cardNote: "board game · usability · playtest lead"
    },
    {
      slug: "hansel-vs-gretel",
      title: "Hansel vs. Gretel",
      category: "game",
      role: "Game Designer / Game Artist",
      year: "2024",
      type: "Physical Card + Board Game",
      status: "Mechanics prototype",
      glyph: "ᜑᜈ᜔",
      color: "clay",
      coverImage: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-01.jpg",
      coverAlt: "Hansel vs. Gretel presentation title slide with candy illustrations and team credits.",
      links: [
        { label: "Mechanics presentation", url: "assets/board-games/hansel-vs-gretel/hansel-vs-gretel-mechanics-presentation.pdf" },
        { label: "Card PDF", url: "assets/board-games/hansel-vs-gretel/hansel-vs-gretel-cards.pdf" },
        { label: "Playtest notes", url: "#screens" },
        { label: "Card gallery", url: "#gallery" }
      ],
      summary:
        "A one-vs-one escape-room-inspired physical game where players compete in dexterity challenges to earn clues, guess the mythic being sealing the Witch's house, and escape first.",
      what:
        "Hansel vs. Gretel began from four class constraints: one player versus one player, physical dexterity, a fairy-tale or myth premise, and a solution objective. The team built a board-game version of an escape room: players are trapped in the Witch's house, compete in physical challenges, earn hints, and try to identify the mythic being sealing the exit. If nobody guesses correctly by the final room, the player who won the most challenges wins instead. The presentation documents the shift from early key-word and door-unlock ideas toward a clue-driven mythic guessing game that asks players to use both their bodies and their minds.",
      goals: [
        "Make a physical game that combines fast dexterity challenges with a real deduction objective.",
        "Use the Hansel and Gretel premise to frame the escape-room structure around a Witch's house and a sealed exit.",
        "Give players clues through challenge wins so the solution layer matters instead of becoming random guessing.",
        "Make challenge rules easier to understand through clearer wording, pictures, and diagrams.",
        "Use playtest data to tune challenge difficulty, hint usefulness, dramatic engagement, and end-game balance."
      ],
      constraints: [
        "The rolled interaction pattern was one player versus one player, which made four-player testing and player switching harder to teach.",
        "The core mechanic was physical dexterity, but the objective was solution, so neither half could overpower the other.",
        "Some early challenges such as push-ups, sit-ups, planks, and arm wrestling did not fit the dexterity goal cleanly.",
        "Players did not always know challenge rules from memory, so the game could not rely on prior childhood-game knowledge.",
        "Hints needed to help players reason without making the final answer a giveaway."
      ],
      process: [
        {
          title: "Roll and interpret constraints",
          body: "Started from one-vs-one interaction, physical dexterity, fairy tale/myth premise, and solution objective, then looked for a structure where those constraints could work together."
        },
        {
          title: "Build the escape-room premise",
          body: "Landed on Hansel and Gretel and framed the game around escaping the Witch's house by discovering what mythic being seals the exit."
        },
        {
          title: "Prototype challenge clues",
          body: "Moved away from finding key words to unlock a door and toward winning physical challenges to earn hints for a mythic-being answer."
        },
        {
          title: "Run the first playtest",
          body: "Found that the overall game rules were understood quickly, but individual challenge instructions, four-player handling, and some physical tasks needed revision."
        },
        {
          title: "Revise and test again",
          body: "Replaced problematic challenges, added pictures, reworded rules around the trapped Hansel and Gretel premise, and changed hint distribution for comeback potential."
        }
      ],
      technicalTitle: "Prototype system",
      technical: [
        {
          eyebrow: "Premise",
          title: "Escape-room board structure",
          body: "Each player tries to beat the other out of the Witch's house while moving through rooms and collecting clues."
        },
        {
          eyebrow: "Challenges",
          title: "Physical dexterity prompts",
          body: "Challenge cards create short one-vs-one interactions, while later revisions remove tasks that felt like endurance or strength rather than dexterity."
        },
        {
          eyebrow: "Solution",
          title: "Mythic-being deduction",
          body: "Players use hints earned through challenges to guess the mythic being sealing the exit, giving the game a mental objective beyond winning activities."
        },
        {
          eyebrow: "Playtesting",
          title: "Two-iteration data loop",
          body: "First and second playtest sheets tracked enjoyment, challenge clarity, hint usefulness, game-rule clarity, difficulty, dramatic element, engagement, and learning speed."
        },
        {
          eyebrow: "Iteration",
          title: "Rules, diagrams, and hint tuning",
          body: "The team identified that players preferred shown instructions, clearer challenge diagrams, and an end game where the winner felt deserving."
        }
      ],
      screensTitle: "Mechanics presentation",
      screens: [
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-02.jpg",
          alt: "Hansel vs. Gretel slide explaining the escape-room board game premise and mythic-being guessing objective.",
          eyebrow: "Premise",
          title: "Escape the Witch's house",
          body: "The game asks players to compete in physical challenges, earn clues, and guess the mythic being sealing the exit.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-03.jpg",
          alt: "Hansel vs. Gretel slide listing rolled constraints: one player versus one player, physical dexterity, fairy tale or myth premise, and solution objective.",
          eyebrow: "Constraints",
          title: "The roll that shaped the design",
          body: "The project had to reconcile body-first dexterity play with a solution-based objective inside a fairy-tale premise.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-07.jpg",
          alt: "First iteration playtest data table for Hansel vs. Gretel.",
          eyebrow: "Playtest 01",
          title: "First iteration data",
          body: "The first data sheet showed the game was enjoyable and learnable, but challenge clarity and difficulty still needed work.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-08.jpg",
          alt: "Second iteration playtest data table for Hansel vs. Gretel.",
          eyebrow: "Playtest 02",
          title: "Second iteration data",
          body: "After replacing problematic challenges and revising rules, challenge clarity and hint usefulness improved across the second test.",
          fit: "contain"
        }
      ],
      gallery: [
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-01.jpg",
          alt: "Hansel vs. Gretel presentation title slide with candy illustrations.",
          eyebrow: "Presentation",
          title: "Mechanics presentation cover",
          body: "The presentation frames the prototype as a candy-colored fairy-tale escape-room game.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-04.jpg",
          alt: "Hansel vs. Gretel design process slide describing the move from key words and door unlocking toward category-based guessing.",
          eyebrow: "Design process",
          title: "From door keys to mythic guesses",
          body: "The early escape-room idea became stronger once the solution layer shifted toward categories and hints instead of simple key words.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-05.jpg",
          alt: "Hansel vs. Gretel first playtest process slide with challenge confusion notes and a playtest photo.",
          eyebrow: "Iteration",
          title: "First playtest findings",
          body: "Players understood the overall rules, but challenge instructions, four-player handling, and several challenge choices needed refinement.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-06.jpg",
          alt: "Hansel vs. Gretel second playtest process slide describing replaced challenges, pictures, rule rewording, and hint distribution changes.",
          eyebrow: "Iteration",
          title: "Second playtest revisions",
          body: "The second iteration replaced mismatched activities, added pictures, reworded the premise, and experimented with comeback-friendly hint distribution.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-09.jpg",
          alt: "Hansel vs. Gretel slide summarizing what the playtest data says.",
          eyebrow: "Data",
          title: "What the data said",
          body: "Players found the overall game understandable, enjoyed the dramatic element, and responded better after the challenge set was revised.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-10.jpg",
          alt: "Hansel vs. Gretel next steps slide with additional challenge, hint, diagram, and theme expansion ideas.",
          eyebrow: "Next steps",
          title: "Expansion plan",
          body: "Future work would add more dexterity challenges, rebalance hints, expand mythic beings, and create clearer diagrams.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-11.jpg",
          alt: "Hansel vs. Gretel game design lessons slide.",
          eyebrow: "Lessons",
          title: "Game design lessons",
          body: "The team learned to show players how to play, balance the end game, define unfamiliar terms, and start broad before cutting ideas.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/hansel-mechanics-slide-12.jpg",
          alt: "Hansel vs. Gretel communication lessons slide about specialist roles, progress updates, active listening, and feedback.",
          eyebrow: "Team lessons",
          title: "Communication lessons",
          body: "Specialist roles, frequent progress updates, active listening, and real feedback loops helped the prototype improve between tests.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/thumb-war.png",
          alt: "Thumb War card from Hansel vs. Gretel.",
          eyebrow: "Challenge",
          title: "Thumb War card",
          body: "The original card art remains available alongside the mechanics presentation.",
          fit: "contain"
        },
        {
          image: "assets/board-games/hansel-vs-gretel/dragon.png",
          alt: "Dragon mythic card from Hansel vs. Gretel.",
          eyebrow: "Mythic",
          title: "Dragon card",
          body: "Mythic cards represent the answer space that players narrow down through hints.",
          fit: "contain"
        }
      ],
      solutions: [
        "Focused on physical dexterity first, then integrated the solution layer through clues and mythic-being guesses.",
        "Changed the answer category from early quote and fairy-tale ideas into mythical beings so hints could guide deduction more clearly.",
        "Removed or replaced challenges that felt like strength or endurance tests instead of dexterity games.",
        "Added pictures and clearer wording because players did not want to learn unfamiliar physical challenges through dense text alone.",
        "Adjusted hint distribution to create comeback potential, then identified the need to rebalance final hints so they are not giveaways.",
        "Used two rounds of playtest data to compare challenge clarity, hint usefulness, dramatic engagement, and learning speed."
      ],
      takeaways: [
        "Hybrid constraints work better when one pillar is stabilized first and the second is integrated deliberately.",
        "Players do not like reading long instructions during physical play; diagrams and demonstrations matter.",
        "End-game balance is emotional design: the winner should feel triumphant and deserving, not lucky because of one obvious hint.",
        "Terms like mythic need to be defined for players instead of assumed.",
        "Specialized team roles and regular progress updates helped the group move from rough concept to tested prototype."
      ],
      launchNote:
        "The mechanics presentation PDF and original card PDF are included as local portfolio records. The presentation documents the constraint roll, two playtest iterations, data tables, next steps, and design/communication lessons.",
      cardNote: "escape-room prototype · dexterity · playtest iteration"
    },
    {
      slug: "race-against-thieves-up-the-river",
      title: "Race Against Thieves: Up the River Mod",
      category: "game",
      role: "Game Designer / Art Support",
      year: "2024",
      type: "Board Game Mod",
      status: "CTIN 488 mechanics project",
      glyph: "ᜆᜃ᜔ᜊᜓ",
      color: "sea",
      coverImage: "assets/board-games/race-against-thieves/race-against-thieves-cover.jpg",
      coverAlt: "Race Against Thieves pixel-art title slide with sword, controller, stars, and Team 4 label.",
      links: [
        { label: "Presentation PDF", url: "assets/board-games/race-against-thieves/race-against-thieves-presentation.pdf" },
        { label: "Selected media", url: "#screens" },
        { label: "Process", url: "#process" }
      ],
      summary:
        "A physical board-game mod about escaping with treasure while raising competition and tension through drafting, playtesting, and iterative mechanics changes.",
      what:
        "Race Against Thieves: Up the River Mod is a mechanics-focused board game prototype about players racing out of a museum with a jewel while the table feels the pressure of pursuit. I worked as a game designer and helped with the art, contributing to the physical prototype, test materials, and revisions that made competition and tension clearer across internal, class, and external playtests.",
      goals: [
        "Make players feel tense competition as they race through the game.",
        "Use an Up the River-style mod structure while creating a new museum-thief experience.",
        "Draft mechanics that make movement, obstacles, and player interaction feel more suspenseful.",
        "Revise the prototype based on internal, class, and external playtest observations."
      ],
      constraints: [
        "The first version needed more tension than the team intended, so the core mechanics had to be revised.",
        "The physical board and cards needed enough visual clarity for players to understand movement and stakes quickly.",
        "Class and external playtests produced different kinds of feedback, so the team had to compare them instead of treating all feedback as identical.",
        "The mod had to preserve the race feeling while adding a stronger thief/museum theme."
      ],
      process: [
        { title: "Draft the mod", body: "Sketched the game structure, board path, and mechanics around a competitive escape premise." },
        { title: "Run internal tests", body: "Used group playtesting to feel the competition directly and discuss improvements before class testing." },
        { title: "Observe class play", body: "Watched how classmates interacted with the prototype and identified that tension was not landing strongly enough." },
        { title: "Revise and test externally", body: "Created new mechanics, refined art and board materials, then tested with external players to compare reactions." }
      ],
      technicalTitle: "Mechanics + playtesting",
      technical: [
        {
          eyebrow: "Tension",
          title: "Race pressure",
          body: "The experience goal centered on making players feel tense competition as they tried to escape the museum with the jewel."
        },
        {
          eyebrow: "Iteration",
          title: "Mechanics revision",
          body: "After early playtests showed lower-than-intended tension, the team revised movement and interaction rules to increase pressure."
        },
        {
          eyebrow: "Art",
          title: "Prototype readability",
          body: "Board and card art carried the museum-thief theme while helping players understand spaces, obstacles, and progress."
        }
      ],
      screensTitle: "Process + playtest notes",
      screens: [
        {
          image: "assets/board-games/race-against-thieves/race-drafting-sketch.jpg",
          alt: "Hand-drawn Race Against Thieves board and mechanics sketch.",
          eyebrow: "Drafting",
          title: "Early mechanics sketch",
          body: "The first sketch framed the path, obstacles, and escape premise before the board was fully built.",
          position: "center",
          fit: "cover"
        },
        {
          image: "assets/board-games/race-against-thieves/race-internal-playtest.jpg",
          alt: "Internal Race Against Thieves playtest with cards and board pieces on a round table.",
          eyebrow: "Internal test",
          title: "Feeling the competition",
          body: "Internal playtesting helped the team experience the race dynamic and discuss improvements.",
          position: "center",
          fit: "cover"
        },
        {
          image: "assets/board-games/race-against-thieves/race-class-playtest.jpg",
          alt: "Class playtest of Race Against Thieves with players gathered around the board.",
          eyebrow: "Class playtest",
          title: "Observing the tension gap",
          body: "The class playtest showed that players understood the game but did not feel as much tension as intended.",
          position: "center",
          fit: "cover"
        },
        {
          image: "assets/board-games/race-against-thieves/race-external-playtest.jpg",
          alt: "External Race Against Thieves playtest in a hallway with board placed on a bench.",
          eyebrow: "External test",
          title: "Testing revised mechanics",
          body: "External playtesting helped compare reactions outside the class setting after mechanics revisions.",
          position: "center",
          fit: "cover"
        }
      ],
      gallery: [
        {
          image: "assets/board-games/race-against-thieves/race-against-thieves-cover.jpg",
          alt: "Race Against Thieves title slide.",
          eyebrow: "Cover",
          title: "Pixel title slide",
          body: "The cover image comes from the project presentation and frames the mod with a retro game-like visual language."
        },
        {
          image: "assets/board-games/race-against-thieves/race-revision-playtest.jpg",
          alt: "Race Against Thieves revision playtest with laptop, cards, and board on a table.",
          eyebrow: "Revision",
          title: "Mechanics editing table",
          body: "The revision pass connected board materials, written rules, and live playtest feedback in one workspace."
        },
        {
          image: "assets/board-games/race-against-thieves/race-class-playtest.jpg",
          alt: "Players testing Race Against Thieves in class.",
          eyebrow: "Class playtest",
          title: "In-class observation",
          body: "Class testing made the tension problem visible enough to revise around it."
        }
      ],
      solutions: [
        "Used the experience goal as the filter for revisions: if a mechanic did not increase race tension, it needed another pass.",
        "Compared internal, class, and external playtests to see whether the same mechanics felt different across audiences.",
        "Helped with art and component clarity so players could read the museum-thief premise quickly.",
        "Turned a broad mod concept into a specific board, card, and playtest package."
      ],
      takeaways: [
        "Experience goals are useful only when playtests can challenge them.",
        "Competition is not automatic in a race game; the rules have to create meaningful pressure.",
        "External playtests are valuable because they reveal which explanations and mechanics survive outside the classroom.",
        "Art help for physical prototypes matters most when it improves readability and theme at the table."
      ],
      launchNote:
        "Built as a CTIN 488 mechanics project. The linked presentation PDF and cropped photos show the drafting, playtesting, revision, and external testing process.",
      cardNote: "board game mod · playtesting · art help"
    },
    {
      slug: "pacn-pamana",
      title: "PACN — Pamana",
      category: "production",
      role: "PACE Director / Writer / Rehearsal Director",
      year: "2024-2025",
      type: "Pilipinx American Culture Events",
      status: "Produced for the 2024-2025 season",
      glyph: "ᜉᜋᜈ",
      color: "clay",
      coverImage: "assets/pacn/pamana-show-cover.jpg",
      coverAlt: "PACN Pamana public show recording thumbnail used as a landscape cover.",
      links: [
        { label: "Watch PACN: Pamana", url: "https://youtu.be/O_1Z_HDG8jw?si=DwZxqo0nEl9It2mw" },
        { label: "Watch PACF prelude", url: "https://youtu.be/WH2e4sWeCoQ?si=sHNkvURPjmc5iLdB" },
        { label: "Full PACN program PDF", url: "assets/pacn/docs/pamana-full-program.pdf" },
        { label: "Full Pamana script PDF", url: "assets/pacn/docs/pamana-full-script.pdf" },
        { label: "Skit technical doc PDF", url: "assets/pacn/docs/pamana-technical-doc.pdf" },
        { label: "Technical build", url: "#technical" },
        { label: "Process notes", url: "#process" }
      ],
      summary:
        "A 2024-2025 cultural production cycle where I served as PACE Director, oversaw PACF and PACN production, wrote the Pamana script, and directed rehearsals toward the final stage show.",
      what:
        "Pamana was Troy Philippines' 33rd Annual Pilipinx American Culture Night, built as the main stage event in a larger Pilipinx American Culture Events season. As PACE Director, I carried the production from PACF, the prelude culture festival, into PACN, the full show. My work combined executive production, script writing, rehearsal direction, cast coordination, technical planning, and cultural stewardship. I wrote the PACN script around an eight-scene story of friendship, family, distance, homecoming, and inherited memory, then directed skit rehearsals so the actors, dance transitions, vocal performances, and technical cues could land as one cohesive production.",
      goals: [
        "Oversee the full 2024-2025 PACE production cycle, from PACF as the cultural prelude to PACN as the culminating stage show.",
        "Write a PACN script that could carry Pamana's emotional arc while leaving space for dance, music, and community performance.",
        "Direct rehearsals with enough specificity that actors understood objectives, relationships, blocking, and emotional stakes.",
        "Coordinate production systems across cast communication, rehearsal attendance, performance teams, sponsorship, headshots, technical documents, and transition materials.",
        "Preserve the cultural and emotional intent of the show while still making the logistics clear enough for a large student production to move."
      ],
      constraints: [
        "PACF and PACN had to feel connected, even though one functioned as a festival prelude and the other as the full stage production.",
        "The script needed to carry an eight-scene narrative while also making room for cultural dances, Troy Phi Voices, scene changes, and technical transitions.",
        "Rehearsal time had to balance line work, blocking, relationship-building, feedback, performer confidence, and full-production timing.",
        "Production leadership involved many different document streams: budgets, contracts, checklists, coordinator notes, sponsorship, headshots, attendance, and performer communication.",
        "A public portfolio page needs to show the scale of the work without exposing private cast information or internal production files."
      ],
      process: [
        {
          title: "Lead the PACE season",
          body:
            "Managed the broader culture-events arc so PACF could introduce community, performance, and cultural context before PACN carried that energy into the main stage production."
        },
        {
          title: "Write the Pamana script",
          body:
            "Built a 36-page final draft around Carlos, AJ, their barkada, family, distance, and the idea of pamana as an inheritance of memory, love, and belonging."
        },
        {
          title: "Direct skit rehearsals",
          body:
            "Used rehearsal goals, character objectives, relationship dynamics, and actor feedback to shape performances beyond line delivery."
        },
        {
          title: "Map story to stage",
          body:
            "Translated the script into a scene-by-scene technical plan covering settings, lighting, audio, entrances, exits, dance transitions, and emotional focus."
        },
        {
          title: "Coordinate production teams",
          body:
            "Kept cast materials, performance team handoffs, rehearsal attendance, sponsorship, headshots, and run-of-show needs moving through the production calendar."
        },
        {
          title: "Bring Pamana to show night",
          body:
            "Guided the final rehearsal and tech push so the writing, performers, dances, vocal pieces, and technical cues could resolve into a public performance."
        }
      ],
      technicalTitle: "Production system",
      technical: [
        {
          eyebrow: "Season arc",
          title: "PACF as prelude",
          body:
            "PACF served as the fall culture-festival prelude to PACN, giving the 2024-2025 PACE season a first public expression before the spring stage production."
        },
        {
          eyebrow: "Main show",
          title: "PACN: Pamana",
          body:
            "The main PACN show carried the season's story into a staged production with skit, dance, vocal performance, cultural memory, and community celebration."
        },
        {
          eyebrow: "Writing",
          title: "Eight-scene script architecture",
          body:
            "The Pamana script moved through Childhood, High School, University, Missed Confession, America, Nurse(ry), Letters, and the final Pamana homecoming."
        },
        {
          eyebrow: "Technical direction",
          title: "Scene-by-scene cue map",
          body:
            "The technical document translated each scene into setting, lighting, audio, and key directions, from golden-hour childhood scenes to final sunrise hues."
        },
        {
          eyebrow: "Rehearsal direction",
          title: "Actor-centered notes",
          body:
            "Directing notes focused rehearsal around objectives, obstacles, tactics, intimacy, push-pull dynamics, physical storytelling, and specific feedback."
        },
        {
          eyebrow: "Operations",
          title: "Production documentation stack",
          body:
            "PACE materials included task lists, contracts, checklists, rehearsal attendance, budgets, sponsorships, performance supply requests, headshots, and coordinator transition documents."
        }
      ],
      solutions: [
        "Treated PACN as both a story and a production system: the script, rehearsals, technical plan, and operations documents all had to work together.",
        "Used PACF as the prelude to build momentum and cultural context before the larger PACN performance cycle.",
        "Wrote scene transitions that could hand off naturally into dances and vocal pieces instead of treating performances as disconnected inserts.",
        "Directed rehearsals around relationships and stakes so the central friendship carried emotional continuity across childhood, adolescence, migration, letters, and return.",
        "Maintained a documentation stack that made a large student production easier to coordinate across cast, coordinators, finance, marketing, and performance teams.",
        "Built transition materials so the next coordinators could inherit process knowledge, not just final memories."
      ],
      takeaways: [
        "PACE leadership made production feel like systems design: every rehearsal, document, cue, and team handoff affected the final audience experience.",
        "Writing for PACN meant writing for bodies in space, not just dialogue on a page. The story had to make room for dances, songs, pauses, and transitions.",
        "Good directing is specific without flattening actors. The best notes gave performers something playable: a need, obstacle, tactic, or relationship shift.",
        "Cultural production carries emotional stakes because it is also community memory. Pamana needed care, clarity, and trust from the people making it.",
        "The production documents matter because they turn one night's show into an archive another team can learn from."
      ],
      gallery: [
        {
          image: "assets/pacn/pamana-show-cover.jpg",
          alt: "PACN Pamana public show recording thumbnail.",
          eyebrow: "Show cover",
          title: "PACN: Pamana full-show video",
          body: "The cover links the case study to the public performance archive."
        },
        {
          image: "assets/pacn/pacf-prelude-cover.jpg",
          alt: "PACF 2024 prelude video thumbnail.",
          eyebrow: "Prelude",
          title: "PACF 2024 prelude video",
          body: "PACF appears as the public prelude that helped build the 2024-2025 PACE season."
        },
        {
          image: "assets/pacn/pacn-2025-flyer.png",
          alt: "PACN 2025 flyer for Troy Philippines' 33rd Annual Pilipinx American Cultural Night.",
          eyebrow: "Flyer",
          title: "PACN 2025 public flyer",
          body: "The flyer shows the public invitation, theme, date, venue, and visual identity for Pamana.",
          fit: "contain"
        },
        {
          image: "assets/pacn/pacn-2025-program-cover.png",
          alt: "Troy Philippines 33rd Annual PACN program cover.",
          eyebrow: "Program",
          title: "PACN program cover",
          body: "The program cover documents the formal show artifact distributed around the Pamana production.",
          fit: "contain"
        },
        {
          image: "assets/pacn/pacn-2025-program-theme.png",
          alt: "PACN Pamana program theme page.",
          eyebrow: "Program",
          title: "Pamana theme page",
          body: "The theme page frames the cultural and emotional premise that guided the PACN story and production.",
          fit: "contain"
        },
        {
          image: "assets/pacn/pacn-2025-program-pace-team.png",
          alt: "PACN program page listing the PACE team.",
          eyebrow: "Program",
          title: "PACE team program page",
          body: "The team page anchors the production leadership behind PACF, PACN, rehearsals, and show operations.",
          fit: "contain"
        },
        {
          image: "assets/pacn/pacf-pamana-program-cover.png",
          alt: "PACF 2024 Pamana program cover.",
          eyebrow: "PACF program",
          title: "PACF 2024 program cover",
          body: "The PACF program cover shows the fall prelude event that introduced the 2024-2025 PACE season.",
          fit: "contain"
        },
        {
          image: "assets/pacn/pacf-pamana-program-timeline.png",
          alt: "PACF 2024 Pamana program page with event background, timeline, and shoutout.",
          eyebrow: "PACF program",
          title: "PACF 2024 timeline",
          body: "The timeline page documents the performance order, cultural context, and programming behind the PACF prelude.",
          fit: "contain"
        }
      ],
      launchNote:
        "The links above point to the public PACN: Pamana show recording, PACF prelude, full PACN program PDF, full script PDF, and technical planning document. Cast records, budget sheets, rehearsal attendance, and coordinator files stay local/private, but they shaped the production system behind the public performance.",
      cardNote: "PACE director · PACN writer · rehearsals"
    },
    {
      slug: "pacn-pagkakaisa",
      title: "PACN — Pagkakaisa",
      category: "production",
      role: "Stageplay Scriptwriter / Rehearsal Support",
      year: "2025-2026",
      type: "Pilipinx American Culture Night Stageplay",
      status: "Produced for the 2025-2026 season",
      glyph: "ᜐᜓᜎᜆ᜔",
      color: "rice",
      coverImage: "assets/pacn/pagkakaisa-show-cover.jpg",
      coverAlt: "PACN Pagkakaisa public show recording thumbnail used as a landscape cover.",
      links: [
        { label: "Watch PACN: Pagkakaisa", url: "https://youtu.be/tZUCbq2vEcY?si=45LiQCp6Q_IRvOfL" },
        { label: "Full Pagkakaisa script PDF", url: "assets/pacn/docs/pagkakaisa-full-script.pdf" },
        { label: "Show-order PDF", url: "assets/pacn/docs/pagkakaisa-show-order.pdf" },
        { label: "Stageplay system", url: "#technical" },
        { label: "Rehearsal process", url: "#process" }
      ],
      summary:
        "A 2025-2026 PACN stageplay where I served as a scriptwriter and helped the PACE directors run stageplay rehearsals, contributing to the story without holding a director title.",
      what:
        "Pagkakaisa was the 2025-2026 Pilipinx American Culture Night stageplay built around a new Filipino Studies class, a friend group navigating representation and belonging, and a university learning what it means to build culture with the community in the room. I was a scriptwriter for the stageplay and helped the PACE directors run rehearsals. I was not a director this year, so my contribution lived in the writing, actor notes, rehearsal flow, scene work, and making sure the stageplay connected cleanly to the larger PACN production.",
      goals: [
        "Help write a stageplay that could carry Pagkakaisa's themes of unity, representation, Filipino Studies, and community accountability.",
        "Assist the PACE directors during stageplay rehearsals without overstating my role as a director.",
        "Build character arcs for JP, Krys, Ida, Raf, Baculanta, and Reyes that made cultural conflict playable for actors.",
        "Connect scenes naturally to PACN performances so the script, dances, vocal pieces, and show order felt like one production.",
        "Keep my rehearsal help practical: actor notes, scene pacing, relationship beats, transitions, and performance readiness."
      ],
      constraints: [
        "I was not a director for the 2025-2026 season, so the portfolio needed to name the contribution precisely: scriptwriter and rehearsal collaborator.",
        "The stageplay had to fit inside a larger PACN show with speeches, dances, Troy Phi Voices, quick changes, and production transitions.",
        "The story needed to handle representation across Luzon, Visayas, Mindanao, Metro Manila, multiracial identity, and Filipino Studies without flattening the characters.",
        "My rehearsal work had to align with the PACE directors' vision while still giving actors clear, playable notes.",
        "Internal audition notes, cast logistics, and rehearsal materials should stay private even though the public show recording can be linked."
      ],
      process: [
        {
          title: "Shape the concept",
          body:
            "Developed the story around a new Filipino Studies dance class, a friend group looking for cultural connection, and the tension between institutional representation and community knowledge."
        },
        {
          title: "Write the stageplay",
          body:
            "Worked on the Pagkakaisa script credited to Angelica Baclig and Joshua Guico, building dialogue, scene flow, character conflict, and performance handoffs."
        },
        {
          title: "Build character material",
          body:
            "Used character breakdowns, performance notes, and audition sides to clarify each role's emotional engine before rehearsals."
        },
        {
          title: "Assist rehearsals",
          body:
            "Helped the PACE directors run stageplay rehearsals through scene work, actor timing, relationship beats, and practical staging needs."
        },
        {
          title: "Integrate performances",
          body:
            "Aligned scenes around Traditional Tinikling, TPV, Sayaw sa Bangko, Singkil, Cariñosa, Modern Hip Hop, Lumagen, and Modern Tinik transitions."
        },
        {
          title: "Track show flow",
          body:
            "Used show-order and costume-change planning to keep stageplay moments aware of speeches, quick changes, dances, and production timing."
        }
      ],
      technicalTitle: "Stageplay system",
      technical: [
        {
          eyebrow: "Role clarity",
          title: "Scriptwriter, not director",
          body:
            "The case study names the boundary clearly: I helped write the stageplay and assisted rehearsals, while the PACE directors held the formal directing role."
        },
        {
          eyebrow: "Narrative",
          title: "Filipino Studies as the engine",
          body:
            "The story uses a new FiSt-201 course to explore what happens when an institution creates a cultural class without fully listening to the community it represents."
        },
        {
          eyebrow: "Structure",
          title: "Nine-scene arc",
          body:
            "The final script moves from enrollment and first class into library work, pop quiz conflict, professor tensions, friendship fracture, festival repair, and collective solidarity."
        },
        {
          eyebrow: "Characters",
          title: "Playable identity conflicts",
          body:
            "Character notes gave actors clear stakes: JP's belonging anxiety, Raf's Mindanao representation, Krys learning to speak up, Ida avoiding conflict, and the professors' competing relationships to Filipino Studies."
        },
        {
          eyebrow: "Rehearsal",
          title: "Actor notes + rehearsal help",
          body:
            "My rehearsal notes focused on scene objectives, emotional turns, pacing, transitions, and making feedback actionable for performers."
        },
        {
          eyebrow: "Show order",
          title: "Stageplay inside PACN",
          body:
            "A costume-change and show-order table helped place scenes among speeches, dance numbers, vocal performances, quick changes, and blackout transitions."
        }
      ],
      solutions: [
        "Framed the Filipino Studies class as both a plot device and a production container, giving the show a natural way to introduce dance, history, conflict, and repair.",
        "Used the friend group's fracture to make Pagkakaisa mean something earned, not just stated: unity comes after disagreement, accountability, and listening.",
        "Built performance transitions into the script so PACN dances and TPV numbers could emerge from scene context.",
        "Created audition and character material that helped actors understand not only what their characters say, but what they are trying to protect.",
        "Helped rehearsals stay aligned with the PACE directors by focusing on execution instead of taking ownership of the director role.",
        "Kept private production materials local while linking the public show recording for the portfolio."
      ],
      takeaways: [
        "A collaborator role still shapes a production when the writing, rehearsal notes, and actor work are clear.",
        "Role clarity matters. This year taught me how to contribute strongly without claiming a title I did not hold.",
        "Stage writing for PACN means writing around music, dance, blackout timing, quick changes, and bodies moving through a live room.",
        "Pagkakaisa works because unity is not treated as automatic; the characters have to move through discomfort before solidarity feels honest.",
        "Helping run rehearsals made the script more practical because every line had to survive timing, actor energy, staging, and production constraints."
      ],
      gallery: [
        {
          image: "assets/pacn/pagkakaisa-show-cover.jpg",
          alt: "PACN Pagkakaisa public show recording thumbnail.",
          eyebrow: "Show cover",
          title: "PACN: Pagkakaisa show recording",
          body: "The cover anchors the page in the public 2025-2026 performance archive."
        },
        {
          image: "assets/pacn/pagkakaisa-show-cover.jpg",
          alt: "PACN Pagkakaisa video thumbnail reused as a public performance record.",
          eyebrow: "Public archive",
          title: "Final performance record",
          body: "The public recording keeps the stageplay's final production context available to watch."
        }
      ],
      launchNote:
        "The public link points to the full PACN: Pagkakaisa show recording. The page also includes the full-script PDF and available show-order PDF; audition notes, cast notes, and private rehearsal materials stay local/private.",
      cardNote: "scriptwriter · rehearsal help · PACN"
    }
  ]
};
