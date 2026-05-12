# derekkiy.com — Website Specification (v0)

**Prepared:** 2026-04-29
**For:** Derek Kiy
**Status:** Working draft — to be refined after exec-summary review

This is the starting spec. It is opinionated where the cost of being wrong is low and reversible; it explicitly flags decisions that need your input before build.

Companion docs:
- `EXECUTIVE-SUMMARY.md` — strategic framing
- `RESEARCH-FINDINGS.md` — raw evidence base
- KiyViz design system at `F:\PRO\KiyViz\Web_KiyViz\DESIGN-SYSTEM.md` — source of truth for shared tokens

---

## 0. Document conventions

- **MUST / SHOULD / MAY** — RFC-2119 strength. Treat MUST as hard constraints; SHOULD as defaults you'd need a reason to override; MAY as opt-in.
- **[OPEN]** — decision point requiring your input.
- **[REUSE: kiyviz]** — pattern lifted directly from `F:\PRO\KiyViz\Web_KiyViz\26Q2.3\` with no change.
- **[NEW]** — invented for this site.

---

## 1. Mission

`derekkiy.com` is the **personal portfolio that proves the practice.** It indexes Derek Kiy's body of work across cartography, museums, public-policy design, civic projects, photography, and writing — operating as the depth-of-craft surface that backs the kiyviz.com pitch.

Concretely, it MUST:

1. Be the canonical, search-friendly home for "Derek Kiy" (the person) on the web.
2. Carry case studies for **every** project Derek wants to be cited for — KiyViz client work *plus* personal projects (Just the Constitution, Border Consumption Tax Map, SpaceStudy, photography series).
3. Showcase Derek's **range** without forcing it into a single-discipline label.
4. Send qualified hire-me prospects to kiyviz.com.
5. Be a publishing target for the weekly/monthly/quarterly content cadence Derek committed to in S07.

It MUST NOT:

- Pitch services. (KiyViz's job.)
- Run lead capture forms or newsletters.
- Compete with kiyviz.com for the search "design studio Escondido" or similar buyer-intent queries.
- Become a CV/resume page.

---

## 2. Audience

Primary: **a curious prospect who already knows Derek's name** — having heard him on a podcast, seen a NACWG citation, met him at an exhibit opening, been referred by an existing client, or Googled him after a proposal.

Secondary:

- **Press and podcasters** — looking for a credible "about / contact" surface and a feed of recent work.
- **Other designers and museum-adjacent practitioners** — looking at craft and approach.
- **Hiring panels** — for the curatorial / exhibit-content roles Derek is also pursuing (per the 11-resume vault).
- **Fellow polymaths and people in the cross-border / Latin America-adjacent space** — bilingual EN/ES is a relevance signal.

Audiences explicitly *not* targeted: drive-by buyers seeking a quick services pitch (route them to kiyviz.com), cold lead-gen traffic, SEO traffic for generic design queries.

---

## 3. Positioning vs kiyviz.com

| Dimension | kiyviz.com | derekkiy.com |
|---|---|---|
| Role | Practice / services | Person / portfolio |
| Voice | Formal letter, business-prose | Personal, archival, reflective |
| Hero | Interactive CLI [REUSE: kiyviz] | Index-card / contact-sheet wall [NEW] |
| IA | About / Services / Work / Contact | Work / Photo / Writing / About / Now |
| Default scheme | earth (warm) | stone (cool / curatorial) |
| Bilingual posture | EN+ES from first draft, all blocks bilingual | EN-first launch; ES in v1.1; bilingual capability built in |
| Lead capture | Implicit — Contact section | None. Outbound link to kiyviz.com for hire-me. |
| Cadence | Quarterly major (`26Q2`, `26Q3`) | Same versioning, but content updates are continuous; major cadence per quarter |

---

## 4. Information architecture

### 4.1 Sitemap (v1 / MVP)

```
derekkiy.com/
├── /                              ← home (index-card hero + about-letter + status footer)
├── /work/                         ← work index (filterable list of all case studies)
│   ├── /work/calchamber/          ← case study (8+ at launch)
│   ├── /work/nokings/
│   ├── /work/sis/
│   ├── /work/nacwg/
│   ├── /work/studiosun/
│   ├── /work/symphonic/
│   ├── /work/ioa/
│   ├── /work/deputy/
│   ├── /work/justtheconstitution/  ← personal project case study
│   └── /work/border-tax-map/       ← if treated as a separate piece from /work/calchamber/
├── /photo/                         ← photography index (1 series at launch, structure ready for more)
│   └── /photo/selections-2024/    ← KiyD_Selections-Early2024 wrapped as the launch series
├── /writing/                       ← writing index (1–2 pieces at launch)
│   └── /writing/<first-piece>/    ← 1 SpaceStudy excerpt OR 1 No Kings campaign rationale
├── /about/                         ← long-form bio
├── /now/                           ← Sivers-style "what I'm doing now" page (auto from a single .md)
├── /404.html
├── /robots.txt
├── /sitemap.xml
└── /feed.xml                       ← Atom feed of work + writing + photo updates
```

### 4.2 Sitemap (v1.1+ — deferred but designed-in)

Adds without restructuring:

```
├── /lab/                           ← idea pipeline (Garden Water Circuits, Battery Sea-Saw, etc.)
├── /video/                         ← elDelicious surfacing (or keep separate as a "channels" page)
├── /audio/                         ← BirdSong, Beasland, riff library
├── /maps/                          ← cartography-only filtered view of /work/
├── /es/                            ← optional ES landing if EN/ES split is preferred over per-page toggle
```

The v1 IA MUST not preclude any of these; URL structure is `/category/` so adding a new top-level category is additive.

### 4.3 URL conventions

- All paths **MUST** be lowercase, hyphen-separated.
- Case-study slugs **MUST** match the KiyViz `content.js` slugs where they overlap (`calchamber`, `nokings`, `sis`, etc.) so the same data can be reused.
- New slugs **SHOULD** be ≤20 characters and human-readable.
- Trailing slashes **MUST** be present on all directories (server-side or via `<base href>`).

### 4.4 Header / footer

**Header** (every page):

```
Derek Kiy [wordmark]                    work · photo · writing · about · now      ◐ ◐ ◐
```

- Wordmark: hand-drawn or set in `--font-display` (Unbounded), inline SVG.
- Nav: 5 items, plain text, current-page underlined.
- Right-side controls: scheme toggle (4 segmented), mode toggle (3 segmented), lang toggle (all/en/es) — visually identical to KiyViz so the controls feel familiar to anyone who's used both sites.

**Footer** (every page) — sticky terminal-style status line, [REUSE: kiyviz]:

```
derekkiy@studio:~$  derek@kiyviz.com  ·  +1 (858) 432-3234  ·  Escondido, CA  ·  04:32 PT  ·  stone · light
```

The status footer doubles as a contact strip — no separate `/contact/` page, which keeps the IA tight and routes hire-me intent through the email link to a KiyViz-monitored inbox. (Email link can deep-link to KiyViz's inbox if you want to keep one inbox for everything.)

---

## 5. The home page in detail

### 5.1 The index-card hero (recommended primary device)

**The metaphor.** A wood desk with a stack of index cards from a working archive. Each card is one piece of work, dated, captioned, with a small visual thumbnail. The cards are not chronological — they're *curated*, like a contact sheet from a print darkroom. Some cards are featured large; most are small.

**The implementation.** A CSS Grid of `<article class="card">` elements. Each card has:

- `data-kind` ∈ { project, photo, writing, video, idea, audio }
- `data-year` (ISO)
- `data-tags` (space-separated, lowercase)
- `data-featured` (boolean, controls span)
- A small visual region (image, hand-drawn glyph, or spec-sheet placeholder)
- A title (bilingual when ready)
- A 12–18 word caption
- A link to the source page

Featured cards span 2 columns; regular cards span 1. Mobile collapses to single-column.

**Why this device:**

- Equal status for every category (project = photo = writing = idea). The site shows polymathy without forcing a label.
- Every card is a link out — no card is purely decorative.
- Easy to grow — adding a card is one entry in `content.js` and one image.
- Browser-native. No carousel, no JS-required rendering.
- Differentiates from the KiyViz CLI without abandoning the system.

**Required behaviors:**

- Cards **MUST** be focusable in DOM order (no flex/grid reorder breaking tab order).
- Hover/focus expands a card slightly, fades a 1-line micro-caption ("2024 · CalChamber Alert · QGIS + Illustrator · published"). Reduced-motion **MUST** disable the expand transition.
- Clicking a card **MUST** navigate, not modal — direct routes are crawlable and shareable.
- A small filter bar above the grid **MAY** filter by `data-kind`. Filter is CSS-only via `:has()` (which is widely supported on 2026 browsers — no JS fallback needed if browser is current; degrade to "show all" gracefully if not).

### 5.2 The other home blocks (in order)

After the hero, the home page **MUST** include:

1. **About-letter block.** [REUSE: kiyviz] — formal-letter About in 1–2 paragraphs. Different copy from KiyViz: this letter introduces the *person*, not the *practice*. End signs "Derek Kiy" with an in-line note pointing to kiyviz.com for hire-me intent.
2. **"Now" pull.** Excerpt from `/now/` showing the current 2–3 things Derek is working on. Manual update; renders from a `.md` source.
3. **Latest from work + writing + photo.** The 3 most recent entries across all categories, mixed. (Just a slice of the same data behind the index-card hero.)

The home page **MUST NOT** include:

- A services list (KiyViz's job).
- A testimonial carousel.
- A newsletter signup.
- Anything that requires JS to read.

### 5.3 Two alternative hero devices (for your consideration)

**Alternative A: The Atlas hero.** A literal stylized hand-drawn map of "the work" — regions named after Derek's domains (Cartography, Museum, Civic, Photo, Writing, Lab), each region clickable. Cohesive, on-theme for a cartographer, and visually striking. **Cost:** requires real hand-drawn art before launch. Punts on text-only / LCP-friendly access; an SR fallback would be a nested list. Recommended only if the Procreate pipeline produces a finished map asset by launch.

**Alternative B: The Polaroid wall.** Same data as the index-card hero, but cards visually rendered as polaroids with photo-corner shadows. More personal, less archival. **Risk:** reads as a hobby site for a polished portfolio audience. Punt unless the photography is meant to be the dominant register.

**Recommendation:** ship the index-card hero in v1. Add the Atlas as a `/maps/` or `/atlas/` companion in v1.1 once the hand-drawn assets exist. Don't ship the polaroid wall — it leans too hard into one register.

---

## 6. Visual system

### 6.1 Reuse from KiyViz [REUSE: kiyviz]

The following are imported wholesale:

- All 12 themes (4 schemes × 3 modes), defined in `assets/css/variables.css`.
- The 5-file modular CSS structure: `variables.css` → `base.css` → `hero.css` → `sections.css` → `responsive.css`.
- Type stack: Unbounded / Funnel Display / Funnel Sans / Space Mono.
- The bilingual `data-lang-view` mechanism on `<html>`.
- The sticky terminal-style status footer (with scheme-only `--status-*` variables).
- The Procreate → SVG pipeline tooling.
- The cache-string version pattern (`?v=26Q2.0`).
- The versioned-folder workflow.

### 6.2 Differentiation from KiyViz [NEW]

| Layer | KiyViz | derekkiy.com |
|---|---|---|
| Default scheme | earth | **stone** |
| Default mode | light | light |
| Hero | CLI terminal | **Index-card grid** |
| Section system | Bento grid | **Reading flow** (long, single-column reading column with side-anchors for filter and TOC) |
| Decorative motif | Spec-sheets + hand-drawn ornament | **Index-card / contact-sheet edges + hand-drawn margin glyphs** |
| Work-page typography scope | Space Mono + Space Grotesk | **Funnel Display + Space Mono** (more reading-oriented) |
| Logo treatment | "kiyviz" lowercase wordmark | **"Derek Kiy"** with hand-drawn underline glyph |

### 6.3 Card visual spec

A `card` element:

```
┌─────────────────────────────────┐
│ [thumb / glyph / spec-sheet]   │ ← --paper-raised background, 4:3 or 1:1
│                                 │
├─────────────────────────────────┤
│ KIND · YEAR · CLIENT            │ ← --muted, --text-2xs, ALL-CAPS, mono
│ Card title in display type      │ ← --ink, --font-subhead, --text-base
│ 12-18 word caption that         │ ← --ink, --font-body, --text-sm, leads
│ describes what's interesting    │
└─────────────────────────────────┘
```

- Hover: 1px translateY(-2px), `--glow` background fade, no scale.
- Focus-visible: 2px outline `--amber` at 2px offset.
- Reduced-motion: no translate, only color fade.

### 6.4 Photo gallery spec (`/photo/<series>/`)

- Single-column scroll of full-width images at the reading-column width (not viewport width).
- Captions inline below each image, `--font-body`, `--text-sm`.
- No lightbox modal. Clicking an image opens the full-resolution file in a new tab.
- All images **MUST** be served as WebP with PNG/JPEG fallback via `<picture>`.
- Image sizes **MUST** total ≤ 1.5 MB per gallery page (about 200 KB per 5–8 images).
- `loading="lazy"` on every `<img>` below the fold.

---

## 7. Content plan

### 7.1 Case studies that ship in v1 (8 + 2 = 10)

From KiyViz `content.js` — already written, lift verbatim, light edit for derekkiy.com voice:

1. `nokings` — No Kings — 4th Amendment Campaign
2. `sis` — Space Impact Study — Communications
3. `calchamber` — Border Consumption Tax Map (likely highest-trafficked entry)
4. `nacwg` — NACWG White Paper & Identity
5. `studiosun` — Studio Sun Bilingual Identity
6. `symphonic` — Symphonic Stories Identity
7. `ioa` — IOA E-Mobility Brochure (trilingual)
8. `deputy` — IOA Deputy Meeting Poster

Add for derekkiy.com (personal projects KiyViz can't host):

9. `justtheconstitution` — Just the Constitution (process, design philosophy, accessibility approach, how it became a credibility piece for KiyViz).
10. `museum-dte` (placeholder) — Museum DTE audit methodology — published as a generalized methodology piece **after** the Apr 13–30 engagement closes. Anonymized; positions Derek for the "Prompt-for-people" productized service in Q3–Q4.

Each case study MUST follow the [REUSE: kiyviz] Project Write-Up Format already documented in the vault:

- Short title (≤69 char, SERP-friendly)
- Pithy overview (≤160 char meta description)
- Brief (client request) — 1 paragraph
- Solution / Treatment — numbered or lettered sections
- Each section: summary sentence + primary image + body copy + 1:1 detail screenshots
- Sources

### 7.2 Photo series at launch (1)

- `selections-2024` — wraps `KiyD_Selections-Early2024.pdf` as a web-native gallery. 8–12 strongest frames, captioned. The cover PDF and a "download print bundle" link can sit at the bottom.

### 7.3 Writing piece at launch (1)

[OPEN]: Pick one of these to launch with.

- **The No Kings campaign rationale** — strongest design-meets-civics narrative, ties to the case study, ~1,200 words.
- **A SpaceStudy memo excerpt** — strongest signal of policy-research depth, but heavier reading; ~2,000 words.
- **The Border Tax Map writeup** — already exists in long form (Project Write-Up CalChamber Alert.md); could be split into the case study + a writing companion explaining the methodology.

Recommendation: launch with the **No Kings campaign rationale** because it's tight, current, and thread-pulls into both the case study and KiyViz's most recent retainer client.

### 7.4 About page

Long-form bio. ~600–900 words. Threaded as: (a) what you do across the practice, (b) the thread that connects the disciplines, (c) where you've trained / been published / been credited, (d) the collaborators you work with (Wynn, Gray, the IOA team), (e) the "currently learning" note that sits next to the resumes / certificates.

The 11-resume vault is a credibility paragraph, not a hidden fact. The page **SHOULD** mention: McGill Strategic Space Law Course alumnus, IOA 3+ year client, CalChamber Alert publication, NYT placement (No Kings).

### 7.5 Now page

A single Markdown file `now.md` rendered to HTML at build/edit time. Format follows the `/now/` movement convention: dated, 5–8 bullets of *what's actually current*. Updated by Derek when state changes (probably monthly); flagged as last-updated-on at top.

Initial content draft (Derek to edit):

```markdown
# Now (2026-04-29)

- Wrapping the Museum DTE audit (apr 13–30) — first deliverable of a planned
  productized service for firms without a marketing department.
- 26Q2.3 polish pass on kiyviz.com — case studies, BLUF copy, deploy-ready.
- Building derekkiy.com (this site) on the same Brutal Nouveau system.
- Half-drafted SpaceStudy chapter on Kessler syndrome and orbital credits.
- Reviewing photo selects from the past month.
- Reading: [whatever is on the desk]
```

### 7.6 Content data layer

Single file: `assets/content.js`. Same shape as KiyViz, extended:

```js
window.DEREKKIY_CONTENT = {
  cards: [
    {
      slug: "calchamber",
      kind: "project",            // project | photo | writing | video | idea | audio
      year: "2025",
      tags: ["cartography", "infographic", "policy", "qgis"],
      featured: true,
      title: { en: "...", es: "..." },
      caption: { en: "...", es: "..." },
      thumb: "assets/img/work/calchamber-thumb.webp",
      url: "/work/calchamber/"
    },
    // ...
  ],
  series: { /* photo series indexed by slug */ },
  writings: { /* writing index */ },
  // ...
};
```

This is the single source of truth for the home grid, the work index, and any feed surface. Adding a new card is one entry; the home page, the index, and the Atom feed all reflow automatically.

---

## 8. Tech stack & engineering constraints

### 8.1 Hard constraints (MUST)

- Vanilla HTML / CSS / JS. **No framework, no build step, no bundler.**
- ≤ 100 KB total page weight per page (excluding webfonts; with webfonts target ≤ 150 KB).
- WCAG 2.2 AA contrast across all 12 theme combos.
- Fully readable with JS disabled (progressive enhancement).
- Keyboard-navigable end-to-end. Skip link present.
- `prefers-reduced-motion` honored.
- No tracking. No cookies. No third-party JS. (Webfonts from Google Fonts are the one third-party request, mirroring KiyViz.)
- Self-hosted font fallback in repo (mirror `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\`).
- Works on `file://` for local development (no fetch-only patterns).

### 8.2 Soft constraints (SHOULD)

- ≤ 5 CSS files per the modular structure.
- ≤ 2 JS files (`content.js` + `scripts.js`).
- All interactive controls **SHOULD** also be reachable via plain HTML routes (no SPA-only states).
- All images **SHOULD** be WebP with raster fallback.
- All data tables **SHOULD** print cleanly.

### 8.3 Repository layout

```
KiyDerek-PersonalSite/
├── README.md                  ← project overview (links to all docs)
├── EXECUTIVE-SUMMARY.md       ← strategic framing
├── SPEC.md                    ← this file
├── RESEARCH-FINDINGS.md       ← raw evidence
├── DESIGN-SYSTEM.md           ← (deferred to v0.1) site-specific overrides on top of KiyViz tokens
├── DEPLOY.md                  ← (deferred to launch) deploy procedure
├── VERSIONS.md                ← (deferred to first ship) version log
├── 26Q2/                      ← first version folder
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── feed.xml
│   ├── now.md                 ← rendered to /now/ at build time
│   ├── work/
│   │   ├── index.html
│   │   ├── calchamber.html
│   │   ├── nokings.html
│   │   ├── sis.html
│   │   ├── nacwg.html
│   │   ├── studiosun.html
│   │   ├── symphonic.html
│   │   ├── ioa.html
│   │   ├── deputy.html
│   │   ├── justtheconstitution.html
│   │   └── museum-dte.html    ← may ship empty / "coming soon" until audit closes
│   ├── photo/
│   │   ├── index.html
│   │   └── selections-2024/
│   │       └── index.html
│   ├── writing/
│   │   ├── index.html
│   │   └── nokings-rationale/
│   │       └── index.html
│   ├── about/
│   │   └── index.html
│   └── assets/
│       ├── css/
│       │   ├── variables.css      ← copied/symlinked from KiyViz, with derekkiy overrides
│       │   ├── base.css
│       │   ├── hero.css           ← index-card hero replaces CLI hero
│       │   ├── sections.css
│       │   └── responsive.css
│       ├── scripts.js
│       ├── content.js             ← single content data layer
│       ├── brand/
│       │   ├── derekkiy-wordmark.svg
│       │   ├── favicon.svg
│       │   └── og-card.png
│       └── img/
│           ├── work/              ← case-study thumbnails (.webp)
│           ├── photo/
│           │   └── selections-2024/  ← gallery images
│           └── og/
└── tools/
    └── (procreate2svg from KiyViz, copied; image-optimization script copied)
```

### 8.4 Browser baseline

- Modern evergreens (Chrome, Firefox, Safari, Edge — current and one back).
- Progressive enhancement covers older browsers down to "the page is readable text."
- No IE / legacy targets.

### 8.5 Performance budget

| Metric | Target |
|---|---|
| Page weight (HTML + CSS + JS) | ≤ 100 KB |
| Page weight (with webfonts) | ≤ 150 KB |
| LCP on 3G fast | ≤ 1.5 s |
| TBT | 0 ms (no blocking JS) |
| CLS | 0 (image dimensions set; no late-loading layout shifts) |
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |

Each case-study page **MUST** stay under 200 KB including hero image.

---

## 9. SEO and discoverability

### 9.1 Per-page metadata (MUST)

Every HTML page **MUST** include:

- `<title>` ≤ 60 chars, ending "— Derek Kiy"
- `<meta name="description">` ≤ 160 chars
- `<meta property="og:title">`, `og:description`, `og:image`, `og:type`, `og:url`
- `<meta name="twitter:card" content="summary_large_image">`
- `<link rel="canonical">` to absolute URL
- JSON-LD `Person` (home, about) or `CreativeWork` (case studies, photo series, writing) blocks

### 9.2 Person schema (one-time)

Home page **MUST** include a JSON-LD `Person` block with:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Derek Kiy",
  "url": "https://derekkiy.com",
  "sameAs": [
    "https://kiyviz.com",
    "https://justtheconstitution.org",
    "https://www.youtube.com/channel/UCwfucJTyxfpskwhizl3VwOA",
    "https://www.linkedin.com/in/...",   // [OPEN — confirm URL]
    "https://github.com/..."             // [OPEN — confirm URL]
  ],
  "knowsLanguage": ["en", "es"],
  "jobTitle": "Designer",
  "worksFor": {
    "@type": "Organization",
    "name": "KiyViz",
    "url": "https://kiyviz.com"
  }
}
```

### 9.3 Inbound links plan (launch week)

- KiyViz footer: add "more work at derekkiy.com"
- justtheconstitution.org: add "site by [Derek Kiy](https://derekkiy.com)"
- LinkedIn profile URL field
- GitHub profile bio
- YouTube channel description
- Active client deliverables: where appropriate, footer credit ("design: derekkiy.com")
- Email signature

### 9.4 robots.txt and sitemap.xml

- `robots.txt` allows all, references `sitemap.xml`.
- `sitemap.xml` lists every public route with `<lastmod>`. Auto-generated from `content.js` is preferred but a hand-maintained version is acceptable for v1 with ≤ 30 routes.

### 9.5 Atom feed (`/feed.xml`)

- Cross-category feed of recent cards (work + writing + photo updates).
- Atom over RSS for better content type handling.
- Linked from home `<head>` via `<link rel="alternate" type="application/atom+xml">`.

---

## 10. Bilingual posture

Same mechanics as KiyViz [REUSE: kiyviz]:

- `<html data-lang-view="en">` default at launch (vs KiyViz's `all` default — derekkiy.com is EN-led until ES copy is complete).
- `data-lang-view ∈ { all, en, es }` toggleable.
- All bilingual blocks marked with explicit `lang="en"` / `lang="es"` attributes from day one — even when ES content is missing, the structure is in place.
- Every case-study HTML file **MUST** include both `lang="en"` and `lang="es"` blocks; ES blocks may be a placeholder ("Próximamente — pronto traducido al español.") for v1.
- v1.1 ships full ES copy and switches default to `all`.

This matches Derek's stated philosophy: *"Bilingual from the first draft… my actual moat."* The "draft" exists from day one even if the polish lands later.

---

## 11. Accessibility

[REUSE: kiyviz] across the board:

- WCAG 2.2 AA contrast on all 12 theme combos.
- Skip link at top of every page.
- Logical heading order (`h1` → `h2` → `h3` only).
- Every interactive element keyboard-reachable with visible `:focus-visible` (2px outline at 2px offset).
- ARIA only where native semantics fail (e.g., `aria-live` on theme/lang status announcer).
- `prefers-reduced-motion` disables transitions and animations.
- All images have `alt` text. Decorative images use `alt=""`.
- All form controls (if any) have programmatically-associated `<label>`s.
- Color is never the sole means of conveying meaning.

Test pass before deploy: keyboard-only walk-through of every page, NVDA/VoiceOver pass on home and one case study, axe DevTools clean.

---

## 12. Deployment

### 12.1 Recommended host

**Cloudflare Pages.** Free tier, custom domain, CSP at the host, HTTPS by default, Atom feed served correctly, fast global edge. Same recommendation as KiyViz `DEPLOY.md` notes.

### 12.2 DNS

- `derekkiy.com` apex → Cloudflare Pages.
- `www.derekkiy.com` 301 → apex.
- TLS via Cloudflare full-strict.
- HSTS once stable.

### 12.3 CSP (per host headers)

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline';        // 'unsafe-inline' for inline FOUC guard only
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src fonts.gstatic.com;
  img-src 'self' data:;
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';

X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: interest-cohort=(), browsing-topics=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

[REUSE: kiyviz] — identical to the KiyViz recommended policy.

### 12.4 Cache strings

Same `?v=26Q2.0` pattern. `_bump-cache.py` from KiyViz applies unchanged.

### 12.5 Launch checklist

- [ ] All 10 case studies live and click-throughs work
- [ ] Photo gallery loads ≤ 1.5 MB total
- [ ] One writing piece live
- [ ] About + Now pages live
- [ ] All 12 theme combos render cleanly
- [ ] Lang toggle works (EN-led; ES placeholders acceptable)
- [ ] OG card renders in social preview tools
- [ ] `/robots.txt`, `/sitemap.xml`, `/feed.xml` all reachable
- [ ] `/404.html` reachable on bad URL
- [ ] Lighthouse Performance / Accessibility / SEO all ≥ 95
- [ ] CSP and other headers verified in DevTools
- [ ] HTTPS enforced; no plain-HTTP fallback
- [ ] Inbound links added (KiyViz footer, JTC footer, LinkedIn, GitHub, YouTube)
- [ ] **Webflow renewal canceled** (one-line action: cancel the recurring charge)
- [ ] Derek has updated his email signature

### 12.6 Rollback

Same versioned-folder rollback as KiyViz. The previous `26Q2/` is byte-stable; re-syncing it is one rsync command.

---

## 13. Roadmap

### v1 (MVP, target: 2 working weeks)

Scope per `EXECUTIVE-SUMMARY.md` — home + work index + 10 case studies + 1 photo series + 1 writing + about + now + plumbing.

### v1.1 (target: +2 weeks after v1)

- Full ES copy across all v1 surfaces
- Switch `data-lang-view` default to `all`
- 1 additional photo series
- 1 additional writing piece
- elDelicious / video integration as a `/video/` index page

### v1.2 (target: +1 month after v1.1)

- `/lab/` — idea pipeline page (Garden Water Circuits, Battery Sea-Saw, EnergyBlock Game, RideShare-Beacon, etc.). Tagged "concept / not built" so it doesn't masquerade as portfolio.
- `/atlas/` — the alternative hand-drawn map hero, now as a standalone page once the Procreate art is finished.
- Atom feed expanded to include `/lab/` updates.

### v2 (`26Q3`, target: Q3 2026)

- Major-version refactor based on first-quarter learnings.
- Performance pass on photo galleries.
- Decision point: does Derek want to publish a longer-form essay series? If yes, `/essays/` becomes a category.

---

## 14. Decisions [OPEN]

These are the calls that need your input before build (or during build if reversible).

| # | Decision | Recommendation | Notes |
|---|---|---|---|
| 1 | Hero device | Index-card / contact-sheet | Atlas hero deferred to v1.2; polaroid wall not recommended. |
| 2 | Default scheme | stone | earth would tie to KiyViz; stone differentiates. |
| 3 | Default mode | light | dark is also defensible for an archival/curatorial register. |
| 4 | Bilingual launch | EN-led, ES scaffolded, ES copy in v1.1 | Avoids blocking on translation. |
| 5 | First writing piece | No Kings campaign rationale | Tight, current, thread-pulls into the case study. |
| 6 | Photo commercialization | Portfolio-only at v1; no Gumroad link yet | Defer commerce until photography page traffic warrants it. |
| 7 | elDelicious in v1 | Defer to v1.1 | Different brand register; needs its own treatment. |
| 8 | `/lab/` page in v1 | Defer to v1.2 | Sprawl risk; tempting to bloat. |
| 9 | Same-author footer cross-link | Yes, in both directions | KiyViz footer links to derekkiy.com; derekkiy.com status footer email goes to the KiyViz inbox. |
| 10 | Headshot vs hand-drawn portrait | Hand-drawn (matches KiyViz REVIEW.md decision) | Defers until Procreate pipeline produces art. |
| 11 | LinkedIn / GitHub URL | [OPEN] | Need confirmed URLs for JSON-LD `sameAs`. |
| 12 | Inbox routing | derek@kiyviz.com (already monitored) | Keeps email funnel single. |
| 13 | Museum DTE case study | Ship as "coming soon" page in v1; full content in v1.1 after engagement closes | Ethics: anonymized; positioning: first proof of "Prompt-for-people" service. |

---

## 15. Out of scope (explicit, to prevent drift)

- Newsletter / email capture.
- E-commerce / store.
- Booking calendar.
- Service offers (kiyviz.com).
- Interactive 3D / WebGL.
- Animations beyond `prefers-reduced-motion`-respecting fades and translates.
- Comments / discussion.
- User accounts of any kind.
- Analytics. (If a metric becomes load-bearing, Plausible is the WBN-compatible option per KiyViz `DESIGN-SYSTEM.md`.)
- AI-generated imagery (per Brutal Nouveau principle 2 / 3).

---

## 16. Definition of done (v1 launch)

- All routes in §4.1 return 200.
- All 10 case studies have a thumb, a brief, a treatment, and at least one source.
- Lighthouse PWA-equivalent metrics ≥ 95 on every public route.
- Cross-browser pass: Chrome, Firefox, Safari, mobile Safari, Chrome Android.
- DNS pointed; HTTPS enforced; CSP verified.
- Inbound links from KiyViz, JTC, LinkedIn, GitHub, YouTube.
- Webflow recurring charge canceled.
- Email signature updated.
- A copy of the launched bundle archived as `26Q2/` frozen.

When all of the above is true, derekkiy.com is live and the project record (this doc + EXECUTIVE-SUMMARY + RESEARCH-FINDINGS) gets a `v1-launched` tag.

---

## 17. Appendix: case-study seed list (for build phase)

Pulled directly from KiyViz `26Q2.3/assets/content.js` for ready re-use; URLs map 1:1.

```
calchamber       2025  CalChamber Alert                  cartography, infographic, editorial
nokings          2026  No Kings USA                      campaign, identity, print
sis              2025–6  Ayn Rand Institute              policy, diagrams, editorial
nacwg            2024  North American Competitiveness    identity, report, cartography
studiosun        2024  Studio Sun                        identity, bilingual, typography
symphonic        2024  Symphonic Stories                 identity, typography, social
ioa              2023  Institute of the Americas         brochure, trilingual, editorial
deputy           2023  Institute of the Americas         poster, exhibition, large-format
justtheconstitution  2025  (personal)                    civic, accessibility, typography
museum-dte       2026  (anonymized client)               audit, methodology, brand
```

End of spec. Send feedback as line edits or as a list of [OPEN] answers.
