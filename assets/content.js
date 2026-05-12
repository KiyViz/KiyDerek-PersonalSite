/* ─────────────────────────────────────────────────────────
   derekkiy.com · content data
   Asset library for the spotify-shuffle home gallery.

   PHASE 1 (this commit): starter set using the 11 existing
   case-study thumbnails. Each is polish-level "polished" or
   "final" since these are published hero images.

   PHASE 2 (deferred): scan F:\PRO\KiyViz\Assets_KiyViz\
   KiyViz_Portfolio\ and expand to ~50 assets across sketch /
   wip / polished / final polish levels. Captions drafted by
   build agent, edited by Derek.

   Rules (per Derek): ALL ORIGINAL WORK · ALL IN ONE PLACE ·
   SKETCHES THROUGH FINALS · POLISH FILTERABLE VIA METADATA.

   Schema per asset:
     slug     — unique id, kebab-case
     img      — path relative to repo root
     caption  — 1-line description, drafted by build agent
     project  — case-study slug if part of a larger project
     kind     — cartography / identity / campaign / editorial / civic / policy / photo / personal
     year     — string, "2024" or "2023+" for ongoing
     polish   — sketch / wip / polished / final
     href     — case-study page if one exists; else null (lightbox)
     ratio    — aspect ratio hint, e.g. "4:3" or "16:9"
   ───────────────────────────────────────────────────────── */

(function () {
  "use strict";

  const CONTENT = {

    library: [
      {
        slug: "nokings-4th-amendment-poster",
        img: "assets/img/work/nokings-4th-amendment.webp",
        caption: "Full-page 4th Amendment campaign placement — ran in 200+ U.S. papers including the New York Times.",
        project: "nokings",
        kind: "campaign",
        year: "2026",
        polish: "final",
        href: "work/nokings.html",
        ratio: "4:5"
      },
      {
        slug: "calchamber-newspaper-mockup",
        img: "assets/img/work/calchamber-border-tax.webp",
        caption: "Border Consumption Tax Map — single-graphic op-ed published in CalChamber Alert Vol 51 No 9, March 2025.",
        project: "calchamber",
        kind: "cartography",
        year: "2025",
        polish: "final",
        href: "work/calchamber.html",
        ratio: "1:1"
      },
      {
        slug: "sis-space-impact-study",
        img: "assets/img/work/sis-space-impact-study.webp",
        caption: "Space Impact Study — self-initiated cartography on orbital debris and space law, in progress.",
        project: "sis",
        kind: "policy",
        year: "2025+",
        polish: "wip",
        href: "work/sis.html",
        ratio: "4:3"
      },
      {
        slug: "nacwg-white-paper-cover",
        img: "assets/img/work/nacwg-white-paper.webp",
        caption: "NACWG white paper cover — trinational identity for a U.S./Canada/Mexico competitiveness working group.",
        project: "nacwg",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/nacwg.html",
        ratio: "1.4:1"
      },
      {
        slug: "nacwg-identity-system",
        img: "assets/img/work/nacwg-identity.webp",
        caption: "NACWG identity carry-over — logo + color + typography system applied across follow-on materials.",
        project: "nacwg",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/nacwg.html",
        ratio: "4:3"
      },
      {
        slug: "studio-sun-bilingual-identity",
        img: "assets/img/work/studio-sun.webp",
        caption: "Studio Sun — bilingual EN/ZH wordmark with custom double-o ligature, six application contexts.",
        project: "studiosun",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/studiosun.html",
        ratio: "1.55:1"
      },
      {
        slug: "studio-sun-formal-context",
        img: "assets/img/work/studio-sun-formal.webp",
        caption: "Studio Sun formal context — the same brand kit applied to a black-tie wedding deliverable.",
        project: "studiosun",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/studiosun.html",
        ratio: "1.55:1"
      },
      {
        slug: "symphonic-stories-title",
        img: "assets/img/work/symphonic-stories.webp",
        caption: "Symphonic Stories — title card and brand system overview for a classical-musician social-media studio.",
        project: "symphonic",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/symphonic.html",
        ratio: "1.6:1"
      },
      {
        slug: "symphonic-stories-system",
        img: "assets/img/work/symphonic-stories-system.webp",
        caption: "Symphonic Stories — restricted typography palette and tiered color system, social-application examples.",
        project: "symphonic",
        kind: "identity",
        year: "2024",
        polish: "polished",
        href: "work/symphonic.html",
        ratio: "1.6:1"
      },
      {
        slug: "ioa-emobility-brochure",
        img: "assets/img/work/ioa-emobility.webp",
        caption: "IOA e-mobility brochure — trilingual (EN / ES / PT) print package for a foreign delegation visit.",
        project: "ioa",
        kind: "editorial",
        year: "2023",
        polish: "final",
        href: "work/ioa.html",
        ratio: "4:3"
      },
      {
        slug: "ioa-deputy-meeting",
        img: "assets/img/work/ioa-deputy-meeting.webp",
        caption: "IOA deputy meeting — large-format A/B light/dark diptych poster, promo + photo-op backdrop.",
        project: "deputy",
        kind: "editorial",
        year: "2023",
        polish: "final",
        href: "work/deputy.html",
        ratio: "4:3"
      }
    ],

    /* ── HELPERS ── */
    listLibrary: function () { return this.library; },
    findAsset: function (slug) {
      if (!slug) return null;
      return this.library.find((a) => a.slug === slug) || null;
    },
    listKinds: function () {
      const set = new Set(this.library.map((a) => a.kind));
      return Array.from(set).sort();
    },
    listPolishLevels: function () {
      const ordered = ["sketch", "wip", "polished", "final"];
      const set = new Set(this.library.map((a) => a.polish));
      return ordered.filter((p) => set.has(p));
    }
  };

  window.DK_CONTENT = CONTENT;
})();
