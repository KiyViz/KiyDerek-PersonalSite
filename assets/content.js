/* ─────────────────────────────────────────────────────────
   derekkiy.com · content data
   Single source of truth for what shows up in the
   PRESENT and PAST zones. No fetch — works on file://.
   ───────────────────────────────────────────────────────── */
(function () {
  "use strict";

  const CONTENT = {

    /* ── FEATURED (PRESENT zone) — 3 in-flight projects ── */
    featured: [
      {
        slug: "jtc",
        title: "Just the\nConstitution",
        pitch: "The U.S. Constitution unabridged. No ads, no commentary, just text and parchment.",
        status: "beta",
        launch: "2026-07-04",
        launchLabel: "Jul 4 / 2026",
        href: "https://justtheconstitution.org",
        cta: "preview",
        img: "assets/img/featured/jtc.png",
        imgKind: "raster"
      },
      {
        slug: "designbaka",
        title: "Design\nBaka",
        pitch: "An interactive design-system playground. Palette, type, contrast, export — all live.",
        status: "alpha",
        launch: "2026-summer",
        launchLabel: "Summer / 2026",
        href: "https://designbaka.com",
        cta: "follow",
        img: "assets/img/featured/designbaka.svg",
        imgKind: "icon"
      },
      {
        slug: "hotspot-atlas",
        title: "Hotspot\nAtlas",
        pitch: "Geo-tagged regional intelligence, mapped and dashboarded. For analysts of all stripes.",
        status: "soon",
        launch: "TBD",
        launchLabel: "When it's ready",
        href: "#",
        cta: "updates",
        img: null,
        imgKind: "placeholder"
      }
    ],

    /* ── PROJECTS (PAST zone) — 9 case studies ──
       Each: slug, title, client, year, kind, tags, href.
       Bilingual title/pitch reused by case-study pages via _stamp.py. */
    projects: [
      {
        slug: "nokings", year: "2026", client: "No Kings USA",
        title: "4th Amendment Campaign",
        kind: "campaign",
        tags: ["campaign", "identity", "print"],
        img: "assets/img/work/nokings-4th-amendment.webp",
        href: "work/nokings.html"
      },
      {
        slug: "calchamber", year: "2025", client: "CalChamber Alert",
        title: "Border Consumption Tax Map",
        kind: "cartography",
        tags: ["cartography", "editorial", "policy"],
        img: "assets/img/work/calchamber-border-tax.webp",
        href: "work/calchamber.html"
      },
      {
        slug: "nacwg", year: "2024", client: "NACWG",
        title: "White Paper + Identity",
        kind: "identity",
        tags: ["identity", "editorial", "cartography"],
        img: "assets/img/work/nacwg-white-paper.webp",
        href: "work/nacwg.html"
      },
      {
        slug: "studiosun", year: "2024", client: "Studio Sun",
        title: "Bilingual Identity System",
        kind: "identity",
        tags: ["identity", "bilingual"],
        img: "assets/img/work/studio-sun.webp",
        href: "work/studiosun.html"
      },
      {
        slug: "symphonic", year: "2024", client: "Symphonic Stories",
        title: "Brand System",
        kind: "identity",
        tags: ["identity", "editorial"],
        img: "assets/img/work/symphonic-stories.webp",
        href: "work/symphonic.html"
      },
      {
        slug: "ioa", year: "2023", client: "Institute of the Americas",
        title: "E-Mobility Brochure (EN / ES / PT)",
        kind: "editorial",
        tags: ["editorial", "policy"],
        img: "assets/img/work/ioa-emobility.webp",
        href: "work/ioa.html"
      },
      {
        slug: "deputy", year: "2023", client: "Institute of the Americas",
        title: "Deputy Meeting Poster",
        kind: "editorial",
        tags: ["editorial", "poster"],
        img: "assets/img/work/ioa-deputy-meeting.webp",
        href: "work/deputy.html"
      },
      {
        slug: "jtc", year: "2023", client: "Just the Constitution",
        title: "Civic-tech reading site",
        kind: "civic",
        tags: ["civic", "editorial", "typography"],
        img: null,
        href: "work/jtc.html"
      },
      {
        slug: "sis", year: "2025", client: "Self-initiated",
        title: "Space Impact Study",
        kind: "policy",
        tags: ["policy", "cartography", "editorial"],
        img: "assets/img/work/sis-space-impact-study.webp",
        href: "work/sis.html"
      }
    ],

    /* ── HELPERS ── */
    findProject: function (slug) {
      if (!slug) return null;
      const s = String(slug).trim().toLowerCase();
      return this.projects.find((p) => p.slug === s) || null;
    },
    listProjects: function () { return this.projects; },
    listFeatured: function () { return this.featured; }
  };

  window.DK_CONTENT = CONTENT;
})();
