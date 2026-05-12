# derekkiy.com — Build Instructions

Build Derek Kiy's generalist freelance practice website. Planning is done. Execute.

## What this site is

A warm, humanistic generalist practice. Identity, cartography, museum, editorial, photography, writing. Voice: artsy, approachable — NOT the formal/technical tone of kiyviz.com. Sister site kiyviz.com handles productized infosplainers (pricing under development).

**JTBD:** Take design professionals & network contacts from curious to trusting by showing proof of work, creativity, and taste.

## Stack

Vanilla HTML / CSS preferred. Static-specialized frameworks acceptable. No bundler required. Hosting: Cloudflare Pages. Domain: derekkiy.com.

Brutal Nouveau principles: (1) pleasant & useful, (2) cheap to access & operate, (3) minimal infrastructure, (4) works for humans and machines. Must work on `file://`, work in 2036, preferably readable with JS disabled.

## Design system source

Active build: `F:\PRO\KiyViz\Web_KiyViz\26Q2.3\`
GitHub mirror: `C:\Users\D\Documents\GitHub\KiyViz-Website\KiyViz-Website\PreAlpha\26Q2.3\`

### Evaluate & adapt from KiyViz:

- `assets/css/variables.css` — 12 themes (4 schemes x 3 modes), type scale, spacing. Design intent: customizable, demonstrates multi-scheme thinking.
- Type: Unbounded (display) / Funnel Display (subheads) / Funnel Sans (body) / Space Mono (captions). Design intent: stark but spicier than Helvetica.
- Bilingual `data-lang-view` mechanism (`all` / `en` / `es`). Design intent: attract bilingual business.
- Scheme/mode toggles (segmented buttons, localStorage). Design intent: user preference without server auth.
- Footer pattern — changeable. The CLI concept is a trope; rethink OK.
- A11y: skip link, `:focus-visible`, `prefers-reduced-motion`, ARIA announcer. Design intent: maximize compliance.
- Cache-string `?v=26Q2.0`, print stylesheet (changeable), self-hosted fonts from `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\`

### Write fresh:

- `hero.css` — index-card grid (not CLI)
- `sections.css` — reading flow (not bento; ref: polygraph.cool for layout/UX — ministories you can dive into)
- `base.css` — nav: work / photo / writing / about / now; wordmark: "Derek Kiy"
- `scripts.js` — card filter, themes, lang toggle (no CLI)
- `content.js` — cards array with `kind` field (not CLI project objects)
- All HTML pages

### Adapt:

- `responsive.css` — same breakpoints (700px mobile, 820px tablet), different specifics

## How derekkiy.com differs from kiyviz.com

| Layer | kiyviz.com | derekkiy.com |
|---|---|---|
| **Role** | Infosplainer studio | Generalist practice |
| **Voice** | Technical, formal-letter | Artsy, warm, humanistic |
| **Scheme** | earth (goblincore) | con sabor y amor — bright, architecturally Mexican (Barragan + Legorreta + PRODUCTORA MX). Materiality and color; fun and serious. |
| **Hero** | TBD | Index-card wall. Contact/checkout in 5-10 sec. Let people skip BS and pay OR develop knowledge via buyer's journey. |
| **Sections** | Bento grid | Reading flow + side-anchors (polygraph.cool reference) |
| **Motif** | Spec-sheets + ANSI | Controlled chaos — mad scientist/artist workshop. Illuminated manuscripts, but in 2026. |
| **Nav** | about / services / work / contact | work / photo / writing / about / now |
| **Contact** | Nav CTA / hero CTA / footer | Dedicated contact section + footer strip |
| **Services** | Productized tiers | Warm capabilities + fixed consultation pricing (20 min call w/ feedback, rating, action items) |
| **Content** | 5 case studies | 10+ case studies + photography + writing + ideas |
| **Logo** | "kiyviz" lowercase | "Derek Kiy" + hand-drawn underline glyph |

## IA

```
derekkiy.com/
├── /                      home (hero + about-letter + capabilities + now + contact CTA + footer)
├── /work/                 filterable index → 10 case studies
├── /photo/                index → /photo/fleeting-power/ (16 JPGs ready)
├── /writing/              index → /writing/nokings-rationale/
├── /about/                warm long-form bio
├── /now/                  Sivers-style current status
├── 404.html, robots.txt, sitemap.xml, feed.xml
```

### Home page scroll order:

1. **Index-card hero** — grid of cards (project/photo/writing/idea)
2. **About-letter** — warm personal intro (NOT formal KiyViz letter)
3. **Capabilities** — what Derek does for hire. Warm framing, not a price list.
4. **"Now" pull** — current 2-3 things from /now/
5. **Contact CTA** — email + phone. "For infosplainers, visit kiyviz.com"
6. **Footer** — contact strip + location + clock + theme

## File paths

```
CSS/TOKENS    F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\css\
CONTENT.JS    F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\content.js
CASE COPY     F:\PRO\KiyViz\Web_KiyViz\_copywork\*.md
STYLE GUIDE   F:\PRO\KiyViz\Web_KiyViz\_copywork\_STYLE.md
RAW IMAGES    F:\PRO\KiyViz\Assets_KiyViz\KiyViz_Portfolio\Portfolio-Assets\
THUMBNAILS    F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\work\
PHOTOS        ...\Vault-Obsidian\...\Fleeting Power\Exports-Behance\
PORTRAIT      F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\portrait\derek-kiy.webp
FONTS         F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\
```

## Build phases

### Phase 1: Skeleton + design system

1. Create `26Q2/` folder structure
2. Copy+adapt `variables.css` (default scheme → con sabor y amor)
3. Write `base.css`, `hero.css`, `sections.css`; adapt `responsive.css`
4. Build `index.html` with full home page structure
5. Build `scripts.js` (themes, lang, card filter — no CLI)
6. Build `content.js` from KiyViz content.js + new entries
7. Deploy skeleton to Cloudflare immediately (even if sparse)

### Phase 2: Content pages

1. `/work/index.html` (filterable grid) + case study template → stamp 10 studies
2. `/photo/index.html` + `/photo/fleeting-power/`
3. `/writing/index.html` + first writing piece
4. `/about/index.html`, `/now/`

### Phase 3: Polish + launch

1. `404.html`, `robots.txt`, `sitemap.xml`, `feed.xml`
2. OG images, favicon, JSON-LD
3. All 12 theme combos visual check + mobile pass
4. ES placeholder scaffolding in every page
5. Lighthouse 95+ audit, CSP headers, DNS pointing

## Quality gates

- [ ] ≤100 KB/page (≤150 with fonts), WCAG 2.2 AA all 12 themes
- [ ] All themes render clean; lang toggle works (EN + ES placeholders)
- [ ] Preferably readable with JS disabled; keyboard nav + `:focus-visible`
- [ ] `prefers-reduced-motion` honored; skip link works
- [ ] Mobile 375px collapses cleanly; Lighthouse ≥95 all categories
- [ ] No `F:\` paths in shipped code; OG card renders in preview tools
- [ ] Print stylesheet: clean black-on-white

## Content production (Derek's labor, ~12-17 hrs)

Read `CONTENT-INVENTORY.md` for the full per-case-study asset matrix.

**Must happen before/during build:**
1. Derek reviews 8 case study drafts (`_copywork/*.md`)
2. Wordmark: hand-drawn SVG or Unbounded placeholder
3. Photo captions for Fleeting Power (16 JPGs)
4. About page copy

**Ship without (v1.1):** hand-drawn portrait, KiyD Selections, museum-dte full content, full ES copy, custom 404.

**Photography note:** Unified look needed. Image requirements must be specced structurally (MVP vs polished) before art direction. See `CONTENT-INVENTORY.md` for per-project image status.

## JSON-LD Person schema

```json
{"@context":"https://schema.org","@type":"Person","name":"Derek Kiy","url":"https://derekkiy.com","sameAs":["https://kiyviz.com","https://justtheconstitution.org","https://www.youtube.com/channel/UCwfucJTyxfpskwhizl3VwOA","https://www.linkedin.com/in/derek-kiy/","https://github.com/KiyViz"],"knowsLanguage":["en","es"],"jobTitle":"Designer","worksFor":{"@type":"Organization","name":"KiyViz","url":"https://kiyviz.com"}}
```

## Reference docs (read only when needed)

| File | When to read |
|---|---|
| `SPEC.md` | Full IA details, visual system, case study format, deployment, SEO |
| `SPEC-AMENDMENTS.md` | Overrides to SPEC.md — **read after SPEC.md** |
| `CONTENT-INVENTORY.md` | Per-case-study asset readiness, file paths, production costs |
| `COMPETITIVE-CONTEXT.md` | Pudding/Polygraph model, market comps (strategic, not build) |
| `EXECUTIVE-SUMMARY.md` | Strategic framing (context only) |
| `RESEARCH-FINDINGS.md` | Raw evidence (fact-checking only) |
