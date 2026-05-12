# REVISION CYCLE 1 - intitial polish pass

## REVISION-CYCLE1

This document consolidates feedaback for each file in one place. 
In the future, create pre-formated feedback cycle documents (blank feedback but pre-made files & headers). In the future, this intro section (rev-cycle2, rev-cycle3, etc.)

## CLAUDE

# derekkiy.com — Build Session Instructions

You are building **derekkiy.com**, Derek Kiy's generalist freelance practice website. This is the build session — planning is done. Execute.

## The 60-second brief

Correction:

- **kiyviz.com** — specialized infosplainer studio (fast-turnaround interactive single-page sites, $pricing/model under development, productized, technical voice)

## Stack

**Vanilla HTML / CSS by default. No-frameworks preferred. Static-specialized frameworks acceptable.**

This is non-negotiable. It follows the "Brutal Nouveau" design philosophy:

1. Websites should be pleasant and useful.

2. Websites should be cheap to access and operate (low-fi win/win).

3. Websites should work with minimal infrastructure.

4. Websites shoud work for humans and machines; this minimizes resource use.



 — the same system used on kiyviz.com and justtheconstitution.org. The site should work on `file://`, work unchanged in 2036, and preferablly be readable with JS disabled.

Hosting: **Cloudflare Pages** (free tier, git-push deploys). Domain: `derekkiy.com` (currently 403/parked).

## Design system reuse

The KiyViz site is the source-of-truth for shared design tokens. The active build is at:

```
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\
```

Also available in the GitHub repo (note nested folder):

```
C:\Users\D\Documents\GitHub\KiyViz-Website\KiyViz-Website\PreAlpha\26Q2.3\
```

### Evaluate, Prioritize, and polish the status quo (adapt content, keep mechanics):

- `assets/css/variables.css` — all 12 themes (4 schemes x 3 modes), type scale, font stacks, spacing
  - Design Intention: Make the site customizable and pleasant for a range of user preferences. Demonstrates multi-scheme color system thinking. 
- Type stack: Unbounded (display) / Funnel Display (subheads) / Funnel Sans (body) / Space Mono (captions)
  - Design Intention: Simple, stark, but more spicy than helvetica.
- Bilingual `data-lang-view` CSS mechanism (`all` / `en` / `es` toggle)
  - Design Intention: Attract spanish language / billingual business
- Scheme/mode toggle controls (segmented buttons, localStorage persistence)
  - Design Intention: adaptability to user preferences - avoid server site auth0 requirements.
- Sticky terminal-style status footer pattern (with `--status-*` variables)
  - Design Intention: create a useful interactive hook to the website. This is 100% changeable - I'm not happy with CLI idea - it's a trope. Been there, done that.
- Print stylesheet patterns
  - changeable
- A11y patterns: skip link, `:focus-visible` (2px outline, 2px offset), `prefers-reduced-motion`, ARIA live announcer
  - Design Intention: Prioritize accessibility; use automated checks and tools to maximize compliance rate
- Cache-string `?v=26Q2.0` pattern
- Self-hosted Google Fonts fallback from `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\`

### Write fresh for derekkiy.com:

- `hero.css` — index-card grid (replaces KiyViz's CLI terminal hero)
- `sections.css` — reading-flow layout (replaces KiyViz's bento grid)
- `base.css` — different header nav (5 items: work / photo / writing / about / now), different wordmark ("Derek Kiy" not "kiyviz")
- `scripts.js` — card filtering, theme system (no CLI); keep scheme/mode/lang toggle logic
- `content.js` — different data shape (cards array with `kind` field, not CLI project objects)
- All HTML pages (home, work index, case studies, photo, writing, about, now, 404)

### Adapt:

- `responsive.css` — same breakpoint philosophy (700px mobile, 820px tablet), different specifics

## How derekkiy.com differs from kiyviz.com

| Layer                | kiyviz.com                                      | derekkiy.com                                                                                                                                                                                                    |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**             | Specialized infosplainer studio                 | Generalist freelance practice                                                                                                                                                                                   |
| **Voice**            | Direct, productized, technical, formal-letter   | Artsy, approachable, humanistic, warm                                                                                                                                                                           |
| **Default scheme**   | earth (warm goblincore)                         | *con sabor y amor* (bright, architecturally mexican; Luis Barragán+ricardo legorreta+PRODUCTORA MX). Love of materiality and color - fun and serious at the same time.                                          |
| **Hero**             | TBD - Should be explainer hook and interactive. | Index-card / contact-sheet wall - users must be able to contact/checkout within 5-10 seconds. Our goal is to let people skip the BS and pay OR let low-trust buyers develop their knowledge via buyer's journey |
| **Section system**   | Bento grid (Swiss 12-col)                       | Reading flow (single-column with side-anchors; see https://polygraph.cool/ for solid reference of layout/ux. Ministories that you can dive into.)                                                               |
| **Decorative motif** | Spec-sheets + ANSI graphics                     | Chaotic mad scientist/artist workshop - controlled chaos. hand-drawn margin glyphs. Illuminated manuscripts, but in 2026                                                                                        |
| **Nav items**        | about / services / work / contact               | work / photo / writing / about / now                                                                                                                                                                            |
| **Contact**          | Nav bar CTA / HERO CTA / footer strip           | Dedicated contact section + footer strip                                                                                                                                                                        |
| **Services pitch**   | 3 productized tiers, pricing visible            | Generalist capabilities, warm framing, no fixed pricing for projects; fixed pricing for consultation calls (20 min call w/ feedback; rating with action items)                                                  |
| **Content**          | 5 client case studies                           | 10+ case studies + photography + writing + ideas                                                                                                                                                                |
| **Logo**             | "kiyviz" lowercase wordmark                     | "Derek Kiy" with hand-drawn underline glyph                                                                                                                                                                     |

## Information architecture

```
derekkiy.com/
├── /                              home (index-card hero + about-letter + capabilities + contact CTA + status footer)
├── /work/                         filterable work index
│   ├── /work/calchamber/          case study (10 at launch)
│   ├── /work/nokings/
│   ├── /work/sis/
│   ├── /work/nacwg/
│   ├── /work/studiosun/
│   ├── /work/symphonic/
│   ├── /work/ioa/
│   ├── /work/deputy/
│   ├── /work/justtheconstitution/
│   └── /work/museum-dte/         (placeholder until engagement closes)
├── /photo/                        photography index
│   └── /photo/fleeting-power/    launch series (16 JPGs ready; KiyD Selections deferred — trapped in PDF)
├── /writing/                      writing index
│   └── /writing/nokings-rationale/  launch piece
├── /about/                        long-form bio (warm, personal, humanistic)
├── /now/                          Sivers-style "what I'm doing now"
├── /404.html
├── /robots.txt
├── /sitemap.xml
└── /feed.xml                      Atom feed
```

### Home page structure (scroll order):

1. **Index-card hero** — grid of dated, captioned cards spanning project/photo/writing/idea entries
2. **About-letter** — warm personal intro (NOT the formal KiyViz letter — more approachable)
3. **Capabilities** — what Derek does for hire (identity, cartography, museum, editorial, bilingual creative). Warm framing, not a price list.
4. **"Now" pull** — excerpt from /now/ showing current 2-3 things
5. **Contact CTA** — prominent, warm. Email + phone. Link to kiyviz.com for infosplainer-specific work.
6. **Sticky status footer** — `derekkiy@studio:~$` + contact info + location + clock + theme

## Content sources and production reality

**Read `CONTENT-INVENTORY.md` — it's the full asset map with a per-case-study readiness matrix and production hitlist.**

### Production cost (Derek's labor, NOT web dev)

Derek is one person doing design + photo + writing + development. Estimated content production: **~12-17 hours**.

| Work type                                            | Hours | Who                                   |
| ---------------------------------------------------- | ----- | ------------------------------------- |
| Image processing (WebP batch)                        | 1-2   | Scriptable — `_optimize.py`           |
| Graphic design (mockups, wordmark, OG card)          | 4-6   | Derek                                 |
| Photography curation + captioning                    | 1-2   | Derek                                 |
| New copy (JTC case study, writing piece, about, now) | 3-4   | Derek writes or reviews Claude drafts |
| Copy review (8 existing BLUF drafts)                 | 2-3   | Derek                                 |

### Critical path — must happen before/during build

1. Derek reviews 8 case study drafts in `F:\PRO\KiyViz\Web_KiyViz\_copywork\*.md`
2. Derek creates or approves wordmark (hand-drawn SVG or Unbounded placeholder)
3. Derek selects + captions Fleeting Power photos (16 JPGs at `Vault/.../Fleeting Power/Exports-Behance/`)
4. Derek writes or approves about page copy

### Launch without (add in v1.1)

Hand-drawn portrait, studiosun/symphonic context mockups, NYT tearsheet, KiyD Selections series, museum-dte full content, full ES copy, custom 404 illustration.

### Photography recommendation

Use **Fleeting Power** series (16 extracted JPGs) instead of KiyD Selections (trapped in PDF). Zero extraction work for v1. Route: `/photo/fleeting-power/`.

suggest files - we need to overhaul photography to establish unified look. Spec out image required - we will art direct later, but we structurally need to know our MVP and polished graphics.

### Key file paths

```
DESIGN SYSTEM     F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\css\
CONTENT DATA      F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\content.js
CASE STUDY COPY   F:\PRO\KiyViz\Web_KiyViz\_copywork\*.md
COPY STYLE GUIDE  F:\PRO\KiyViz\Web_KiyViz\_copywork\_STYLE.md
PORTFOLIO IMAGES  F:\PRO\KiyViz\Assets_KiyViz\KiyViz_Portfolio\Portfolio-Assets\
WEB-READY THUMBS  F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\work\
PHOTOGRAPHY       F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\0_Personal\Ideas\DerekTakesPhotos\Fleeting Power\Exports-Behance\
PORTRAIT          F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\portrait\derek-kiy.webp
FONTS             F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\
```

## Implementation order

### Phase 1: Skeleton + design system (first)

1. Create `26Q2/` versioned folder structure
2. Copy and adapt `variables.css` from KiyViz (override default scheme to CSYA)
3. Write `base.css` (header, nav, toggles, footer — adapted from KiyViz patterns)
4. Write `hero.css` (index-card grid — new)
5. Write `sections.css` (reading-flow layout — new)
6. Adapt `responsive.css`
7. Build `index.html` with full home page structure
8. Build `scripts.js` (theme system, lang toggle, card filtering — no CLI)
9. Build `content.js` with card data from KiyViz content.js + new entries
10. Deploy skeleton to Cloudflare Pages immediately (even if sparse)

### Phase 2: Content pages

1. Build `/work/index.html` (filterable grid)
2. Build case study template and stamp 10 case studies
3. Build `/photo/index.html` and `/photo/selections-2024/`
4. Build `/writing/index.html` and first writing piece
5. Build `/about/index.html`
6. Build `/now/` (from markdown source)

### Phase 3: Polish + launch

1. `404.html`, `robots.txt`, `sitemap.xml`, `feed.xml`
2. OG images, favicon, JSON-LD schemas
3. All 12 theme combos visual check
4. Bilingual scaffolding (ES placeholder blocks in every page)
5. Mobile responsiveness pass
6. Lighthouse audit (target: 95+ across Performance/Accessibility/SEO)
7. CSP headers via Cloudflare `_headers` file
8. DNS pointing, HTTPS enforcement
9. Cross-link from kiyviz.com footer and justtheconstitution.org footer

## Quality gates (check before declaring done)

- [ ] Every page ≤ 100 KB (excluding webfonts; ≤ 150 KB with fonts)
- [ ] WCAG 2.2 AA contrast across all 12 theme combos
- [ ] All 12 theme combos render cleanly (4 schemes x 3 modes)
- [ ] Lang toggle works (EN content visible; ES shows placeholders)
- [ ] Fully readable with JS disabled
- [ ] Keyboard-navigable end-to-end with visible `:focus-visible`
- [ ] `prefers-reduced-motion` honored (no transitions/animations)
- [ ] Skip link works
- [ ] Print stylesheet: clean black-on-white, no sticky footer
- [ ] Mobile layout at 375px: everything collapses cleanly
- [ ] Lighthouse Performance / Accessibility / SEO all ≥ 95
- [ ] No `F:\` hardcoded paths in shipped HTML/CSS/JS
- [ ] OG card renders in social preview tools
- [ ] `robots.txt`, `sitemap.xml`, `feed.xml` all reachable

## JSON-LD Person schema

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
    "https://www.linkedin.com/in/derek-kiy/",
    "https://github.com/KiyViz"
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

## Key reference documents in this repo

| File                     | Purpose                                                                        |
| ------------------------ | ------------------------------------------------------------------------------ |
| `CLAUDE.md`              | This file. Build session entry point.                                          |
| `SPEC.md`                | Original v0 specification (2026-04-29). Mostly valid; see amendments.          |
| `SPEC-AMENDMENTS.md`     | Corrections from the 2026-05-10 planning session. **Read this after SPEC.md.** |
| `EXECUTIVE-SUMMARY.md`   | Strategic framing. Read for context, not for build instructions.               |
| `RESEARCH-FINDINGS.md`   | Raw evidence base. Reference for fact-checking.                                |
| `COMPETITIVE-CONTEXT.md` | Pudding/Polygraph model, market gap analysis, comps.                           |
| `CONTENT-INVENTORY.md`   | What content exists, where it lives, and its ready-to-use status.              |

## Brutal Nouveau principles (the 10 commandments)

Every build decision must pass these. From `F:\PRO\KiyViz\Web_KiyViz\DESIGN-SYSTEM.md`:

1. Material honesty — semantic HTML, view-source is legible
2. Resource conscience — ≤100 KB per page, no AI-generated imagery
3. Friction-free use — no popups, no gates, no tracking, no interrupts
4. Progressive enhancement — readable before JS runs
5. Honest depth — surface for the curious, depth for the digger
6. Joy by intention — every page produces at least one small moment of delight
7. Long-lasting — works unchanged in 2036, no dependency chain
8. Accessible by default — WCAG AA, keyboard nav, screen readers
9. Self-teaching — the site explains how to read itself

## COMPETITIVE-CONTEXT

# Competitive Context

Extracted from the May 2026 discovery payload. This is the strategic backdrop, not the build spec.

---

## The dual-market model: Pudding / Polygraph

**The Pudding** (pudding.cool) publishes visual essays — scrollytelling, data visualization, editorial content. It builds reputation, demonstrates craft, and attracts talent. The work is public, artsy, and shareable.

**Polygraph** (polygraph.cool) is the commercial studio arm. Client projects fund the editorial side. Same team, different voice. The Pudding is "look at this interesting thing"; Polygraph is "hire us to build something like this for you."

**How this maps to Derek's practice:**

| Pudding (editorial, artsy)              | Polygraph (commercial, productized)           |
| --------------------------------------- | --------------------------------------------- |
| **derekkiy.com**                        | **kiyviz.com**                                |
| Shows range across disciplines          | Sells one thing: infosplainers                |
| Warm, humanistic, personal              | Direct, technical, productized                |
| Attracts generalist work                | Converts specialized leads                    |
| Photography, writing, side projects     | Case studies of delivered infosplainers       |
| "Here's who I am and what I care about" | "Here's what you get, how fast, and how much" |

---

## Market tiers (for positioning awareness, not competition)

**Tier 1: Spectacle portfolios** (Awwwards crowd)

- Examples: Locomotive (Montreal), Samsy, Bruno Simon
- Custom WebGL, 3D environments, months to build
- Serve enterprise clients with six-figure budgets
- NOT Derek's competition or aspiration

**Tier 2: Productized solo agencies** (DesignJoy model)

- Example: Brett Williams — 1 person, 5K/mo per client, 1.5M+ ARR
- No meetings, Trello-based, 2-day turnaround, cancel anytime
- Site is deliberately minimal — sells the system, not the showreel
- KiyViz could evolve toward this model for infosplainers at scale

**Tier 3: Format-native studios** (The Pudding / Polygraph)

- Takes weeks per piece, small team
- Editorial arm funded by commercial arm
- **This is the closest structural comp to Derek's hub/spoke model**

## The gap

Nobody combines Derek's specific set of capabilities (bilingual, cartography, museum, policy, interactive) at the speed KiyViz promises. But that gap-positioning belongs on kiyviz.com, not derekkiy.com.

For derekkiy.com, the positioning is simpler: **a multidisciplinary creative practice that works across domains most designers don't touch** (museum exhibits, cross-border policy, civic campaigns, cartography). The range IS the moat. The bilingual capability IS the differentiator for museum/policy buyers.

## Comps to reference during build

| Comp            | What to steal                                                           | How it applies                                                         |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **The Pudding** | Editorial warmth, visual essay format, "we have a point of view" energy | derekkiy.com's overall tone and content philosophy                     |
| **DesignJoy**   | Radical clarity on what you get                                         | KiyViz only (not derekkiy.com)                                         |
| **Locomotive**  | Site-as-capability-demo                                                 | The index-card hero should demonstrate craft without being a tech demo |
| **Polygraph**   | Clean commercial arm alongside editorial arm                            | The kiyviz.com / derekkiy.com relationship                             |

## CONTENT-INVENTORY

# Content Inventory & Production Hitlist

Everything the site needs. Every asset classified by readiness. Every gap identified.

Derek is the designer, developer, photographer, writer, and content creator — all from the same finite labor pool. This inventory makes the production cost visible so nothing sneaks up during build.

---

## Asset readiness legend

- **READY** — exists, web-optimized or near-ready. Minimal work.
- **PROCESS** — exists but needs WebP conversion, cropping, or optimization. Scriptable.
- **CREATE** — does not exist. Requires Derek's design/photo/writing time.
- **DRAFT** — copy exists in draft form. Needs Derek's review/edit pass.
- **DEFER** — can ship v1 without this; add in v1.1+.

---

## Per-case-study asset matrix

Each case study needs: (1) card thumbnail for home grid, (2) hero image for case study page, (3) 2-4 body images, (4) BLUF + body copy.

### 1. calchamber (Border Consumption Tax Map) — STRONGEST

| Asset                    | Status  | Source                                                                          | Notes                                                    |
| ------------------------ | ------- | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Card thumbnail           | READY   | `26Q2.3/assets/img/work/calchamber-border-tax.webp`                             | Already WebP                                             |
| Hero image               | READY   | `Portfolio-Assets/Infographic-CalChamber/CalChamber-NewspaperMockup-Small.webp` | Newspaper mockup, already WebP                           |
| Body: full map           | PROCESS | `Map_Border-Tariff@144x-100.jpg`                                                | High-res JPG, needs WebP                                 |
| Body: sources annotation | PROCESS | `Portfolio_sources-Annotation.jpg`                                              | Good process shot                                        |
| Body: animated GIF       | PROCESS | `Animations/Portfolio-GIF_CalChamber.gif`                                       | Animated map build. Consider: too heavy for page weight? |
| Body: Mexico detail      | PROCESS | `LargeAd-Format-MexicoFullView.png`                                             | Crop to reading-column width                             |
| Copy                     | DRAFT   | `_copywork/calchamber.md`                                                       | Longest existing writeup. Derek review needed.           |

**Production cost: ~30 min** (image optimization + copy review). No design work needed.

---

### 2. nacwg (NACWG White Paper & Identity) — STRONG

| Asset                        | Status  | Source                                                                  | Notes                     |
| ---------------------------- | ------- | ----------------------------------------------------------------------- | ------------------------- |
| Card thumbnail               | READY   | `26Q2.3/assets/img/work/nacwg-white-paper.webp` + `nacwg-identity.webp` | Two WebPs available       |
| Hero image                   | READY   | `Portfolio-Assets/.../NACWG-Report_Mockup.webp`                         | Already WebP              |
| Body: report cover spotlight | READY   | `NACWG-ReportCover_Mockup-Spotlight.webp`                               | Already WebP              |
| Body: identity card          | READY   | `IdentityCard_Mockup_NACWG.webp`                                        | Already WebP              |
| Body: infographic figs       | PROCESS | `NACWG_Fig1-MapGlobe.png` through `Fig4`                                | 4 PNGs, needs WebP        |
| Body: brand system slides    | PROCESS | `NACWG-BrandingSystem1_Cover.png` through `6`                           | 6 PNGs                    |
| Body: animated GIF           | PROCESS | `Portfolio-GIF_NACWG.gif`                                               | Page weight consideration |
| Copy                         | DRAFT   | `_copywork/nacwg.md`                                                    | Derek review needed.      |

**Client folder bonus:** Full final report PDF + brand guide PDF + logo SVGs + infographic PNGs all in `99 Archive/2024/RK_NorthAmericanWorkingGroup/`.

**Production cost: ~30 min** (WebP conversions + copy review). Best-stocked project overall.

---

### 3. symphonic (Symphonic Stories Identity) — GOOD

| Asset                     | Status     | Source                                                        | Notes                                                  |
| ------------------------- | ---------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| Card thumbnail            | READY      | `26Q2.3/assets/img/work/symphonic-stories.webp`               | WebP                                                   |
| Hero image                | PROCESS    | `STATIC/SymphonicStories_PosterMockup.jpg`                    | JPG mockup, needs WebP                                 |
| Body: social cards        | READY      | `SymphonicStories_SocialCards-small.webp`                     | WebP                                                   |
| Body: brand system slides | PROCESS    | `Branding_01-TitleCard.png` through `04-TypographySystem.png` | 4 PNGs                                                 |
| Body: animated GIF        | PROCESS    | `MO-GFX/Exports/SymphonicStories-BrandSystem.gif`             | Animated brand reveal                                  |
| Body: brand in use        | **CREATE** | —                                                             | No mockups showing logo on social/Spotify/etc. context |
| Copy                      | DRAFT      | `_copywork/symphonic.md`                                      | Derek review needed.                                   |

**Client folder bonus:** Full brand guide PDF + logo set (10 colorways, SVG + PNG) in `99 Archive/2024/SymphonicStories/`.

**Production cost: ~1 hr** — WebP conversions (scriptable) + 1 context mockup showing brand in use (Derek design time) + copy review.

---

### 4. studiosun (Studio Sun Bilingual Identity) — GOOD BUT NEEDS MOCKUP

| Asset                  | Status     | Source                                                               | Notes                                                 |
| ---------------------- | ---------- | -------------------------------------------------------------------- | ----------------------------------------------------- |
| Card thumbnail         | READY      | `26Q2.3/assets/img/work/studio-sun.webp` + `studio-sun-formal.webp`  | Two WebPs                                             |
| Hero image             | PROCESS    | `Behance_Cover.png`                                                  | Behance-format PNG, needs WebP                        |
| Body: process sketches | PROCESS    | `WIP/Working_LogoDesign/StudioSun_Sketch-Scans/scan-pg-*.jpg`        | 6+ sketch scans — excellent process content           |
| Body: Behance slides   | PROCESS    | `Behance_Overview/Brief/Colors/Typography/Iconography/MarketFit.png` | 6 PNGs                                                |
| Body: brand in use     | **CREATE** | —                                                                    | No context mockup (website, business card, signage).  |
| Copy                   | DRAFT      | `_copywork/studiosun.md`                                             | Detailed process writeup exists. Derek review needed. |

**Client folder bonus:** Full logo package (SVG + PNG at all sizes, 3 colorways) + brand review PDF in `99 Archive/2024/StudioSun/`.

**Production cost: ~1.5 hr** — WebP conversions + 1 context mockup (Derek) + copy review. The sketch scans are a strong storytelling asset.

---

### 5. nokings (No Kings — 4th Amendment Campaign) — GOOD RAW, NEEDS ASSEMBLY

| Asset                     | Status     | Source                                                       | Notes                                                             |
| ------------------------- | ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| Card thumbnail            | READY      | `26Q2.3/assets/img/work/nokings-4th-amendment.webp`          | WebP                                                              |
| Hero image                | PROCESS    | `V5/Exports/V5_CrownA_CMYK_NoKingsPoster.jpg`                | Final poster, needs WebP                                          |
| Body: campaign map        | PROCESS    | `DeBriefingMap/Exports/26Q1_NoKings-Campaign_Map_SMALL.jpg`  | Distribution map                                                  |
| Body: poster variants     | PROCESS    | `26-V1/JPG/` and `26-V2/JPG/` — multiple option previews     | Pick 2-3 strongest                                                |
| Body: social posts        | PROCESS    | `NoKingsForUSA-Post1` through `Post10` — 10 PNGs             | Pick 3-4 for a grid                                               |
| Body: editorial cartoons  | PROCESS    | `EmperorCartoon/Cartoon_V1-V4` — 4 JPGs                      | Unique — shows editorial range                                    |
| Body: NYT placement proof | **CREATE** | NYTimes-Setup PDF exists but is print specs, not a tearsheet | Need a screenshot or scan of the actual published page            |
| Copy                      | DRAFT      | `_copywork/nokings.md`                                       | Derek review needed. Attribution: "Private client" — do not name. |

**Production cost: ~1.5 hr** — WebP conversions + curating which of the many assets to feature + NYT tearsheet capture + copy review.

---

### 6. ioa (IOA E-Mobility Brochure) — MODERATE

| Asset                   | Status  | Source                                                       | Notes                                                         |
| ----------------------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Card thumbnail          | READY   | `26Q2.3/assets/img/work/ioa-emobility.webp`                  | WebP (was 2.5MB JPG in 26Q2, now optimized)                   |
| Hero image              | PROCESS | `Report-EMobility/Mockups/IOA-EMobility_Brochure1-ENG.jpg`   | Multiple language variants available                          |
| Body: trilingual spread | PROCESS | `IOA-EMobility_Brochure1-ENG/ESP/POR.jpg`                    | Show all 3 languages side by side                             |
| Body: poster variants   | PROCESS | `IOA-EMobility_Poster1/2/3.jpg`                              | Large-format poster set                                       |
| Body: climate report    | PROCESS | `Report-Climate/Mockups/IOA-ClimateReport_Brochure1/2/3.jpg` | Separate from e-mobility; could be folded in or kept separate |
| Copy                    | DRAFT   | `_copywork/ioa.md`                                           | Derek review needed.                                          |

**Client folder bonus:** Report cover JPG + logo SVGs in `03 IOA/22_IOA_Report/`.

**Production cost: ~1 hr** — WebP conversions + deciding whether to fold climate report content into this case study or keep it separate + copy review.

---

### 7. deputy (IOA Deputy Meeting Poster) — MINIMAL BUT SUFFICIENT

| Asset                 | Status  | Source                                           | Notes                          |
| --------------------- | ------- | ------------------------------------------------ | ------------------------------ |
| Card thumbnail        | READY   | `26Q2.3/assets/img/work/ioa-deputy-meeting.webp` | WebP                           |
| Hero image            | PROCESS | `Compressed_IOA_Deputy-Meeting_Poster2.jpg`      | Pre-compressed JPG, needs WebP |
| Body: poster variants | PROCESS | `IOA_Deputy-Meeting_Poster1/2/3/4.jpg`           | Light/dark A/B variants        |
| Body: flat cards      | PROCESS | `Poster-Card1.png`, `Poster-Card2.png`           | Detail crops                   |
| Copy                  | DRAFT   | `_copywork/deputy.md`                            | Derek review needed.           |

**Production cost: ~30 min** — Small asset set, all exists, just needs WebP + copy review.

---

### 8. sis (Space Impact Study) — IN PROGRESS EXPLAINER PROJECT

| Asset               | Status     | Source                                                    | Notes                                                        |
| ------------------- | ---------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| Card thumbnail      | READY      | `26Q2.3/assets/img/work/sis-space-impact-study.webp`      | WebP                                                         |
| Hero image          | **CREATE** | Only NASA stock photo + draft spaceport map exist         | No finished hero visual                                      |
| Body: spaceport map | PROCESS    | `Graphics/Contracted/spaceport 2025.png`                  | Original graphic, the one custom visual                      |
| Body: memo layout   | **CREATE** | `Exports/250728_WIP-Memo/SpaceStudy-PolicyMemo-Draft.pdf` | Draft only — need a designed page spread screenshot          |
| Body: diagrams      | PROCESS    | Wikipedia/NASA SVGs (Lagrange points, delta-V)            | Not original work — careful with attribution                 |
| Copy                | DRAFT      | `_copywork/sis.md`                                        | Attribution: "Self-initiated" — Derek's IP, not client work. |

**Decision needed:** This project is in-progress with only draft outputs. Options:

- A) Ship with minimal assets (spaceport map + memo draft screenshot) and a "research in progress" framing
- B) Defer to v1.1 when more finished deliverables exist
- **Recommendation: Option A** — the in-progress framing is honest and shows depth. But the case study body will be thinner than others.

**Production cost: ~2 hr** — Hero composition from spaceport map (Derek design time) + memo screenshot + copy review.

---

### 9. justtheconstitution — MISSING FROM KIYVIZ, BUILD FROM SCRATCH

| Asset                 | Status     | Source                                                   | Notes                                                                                                    |
| --------------------- | ---------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Card thumbnail        | **CREATE** | —                                                        | No WebP exists for this project in any build                                                             |
| Hero image            | **CREATE** | —                                                        | Need a screenshot of the live site, or a designed composition                                            |
| Body: logo options    | PROCESS    | `ASSETS/JTC_Logo-OptionA-We.png`, `OptionB-W.png` + SVGs | Logo design process                                                                                      |
| Body: site screenshot | **CREATE** | Live at justtheconstitution.org                          | Take screenshots of the shipped v2 site                                                                  |
| Body: Spanish version | **CREATE** | Live site has ES toggle                                  | Screenshot showing bilingual capability                                                                  |
| Body: OG images       | PROCESS    | `OG-image-JTC1/2/3.png`                                  | Pre-made OG cards                                                                                        |
| Copy                  | **CREATE** | —                                                        | No copywork file exists. Write new: design philosophy, a11y approach, how it became a credibility piece. |

**Production cost: ~3 hr** — Screenshots of live site (easy) + card thumbnail composition (Derek design time) + write new case study copy from scratch.

---

### 10. museum-dte — PLACEHOLDER ONLY IN V1

| Asset          | Status    | Source                                          | Notes                                              |
| -------------- | --------- | ----------------------------------------------- | -------------------------------------------------- |
| Card thumbnail | **DEFER** | —                                               | Ship as "coming soon"                              |
| Hero image     | **DEFER** | —                                               | Client anonymized until engagement closes          |
| Body           | **DEFER** | Proposal SVGs exist but are not portfolio-grade | Wait for engagement to close                       |
| Copy           | **DEFER** | —                                               | "Coming soon — methodology piece shipping Q3 2026" |

**Production cost for v1: ~15 min** — Just a placeholder page with a "coming soon" note.

---

## Photography assets

### KiyD Selections Early 2024 (launch series)

| Asset             | Status     | Source                                                                                                            | Notes                                                                                                  |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Source file       | EXISTS     | `F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\0_Personal\Ideas\DerekTakesPhotos\KiyD_Selections-Early2024.pdf` | PDF only — no extracted individual images on disk                                                      |
| Cover             | EXISTS     | `KiyD_Selections-Early2024 Cover.pdf`                                                                             | PDF cover                                                                                              |
| Individual frames | **CREATE** | —                                                                                                                 | Must extract 8-12 strongest frames from PDF, export as individual files, convert to WebP, caption each |

### Fleeting Power series (potential second series)

| Asset  | Status  | Source                                                                                    | Notes                                                    |
| ------ | ------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Images | PROCESS | `Vault/.../Fleeting Power/Exports-Behance/DerekKiy-FleetingPower-1.jpg` through `-16.jpg` | 16 JPGs, Behance export quality. Needs WebP + captioning |

**Recommendation:** Use Fleeting Power as the launch series instead of (or alongside) KiyD Selections. The Fleeting Power images are already extracted as individual JPGs — zero extraction work needed. The KiyD Selections requires PDF page extraction first.

### Photography production cost

| Path                           | Labor                                                 | Who                                     |
| ------------------------------ | ----------------------------------------------------- | --------------------------------------- |
| Option A: Fleeting Power only  | ~1 hr (WebP conversion + captions)                    | Derek captions, Claude converts         |
| Option B: KiyD Selections only | ~2.5 hr (PDF extraction + curation + WebP + captions) | Derek extracts/curates, Claude converts |
| Option C: Both                 | ~3.5 hr                                               | Both                                    |

**Recommendation: Option A for v1** — Fleeting Power is 16 ready-to-process JPGs. Ship it. Add KiyD Selections in v1.1.

---

## Writing piece

### No Kings campaign rationale (recommended launch piece)

| Asset           | Status     | Source                                                                   | Notes                                                                |
| --------------- | ---------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Source material | PARTIAL    | `_copywork/nokings.md` (case study copy) + client folder campaign assets | The case study has the facts; the writing piece expands on the "why" |
| Draft           | **CREATE** | —                                                                        | ~1,200 words. Design-meets-civics narrative.                         |

**Production cost: ~2-3 hr** — Derek writes (or Claude drafts and Derek edits).

---

## Site-global assets

| Asset                      | Status              | Source                                      | Notes                                                                                           |
| -------------------------- | ------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| "Derek Kiy" wordmark (SVG) | **CREATE**          | —                                           | Hand-drawn or set in Unbounded. Inline SVG with `fill="currentColor"` for theme adaptation.     |
| Favicon (SVG data URI)     | **CREATE**          | —                                           | Same pattern as KiyViz: inline SVG, zero HTTP requests                                          |
| OG card (1200x630 PNG)     | **CREATE**          | —                                           | Compose from strongest portfolio image + wordmark                                               |
| Portrait / headshot        | PROCESS             | `26Q2.3/assets/img/portrait/derek-kiy.webp` | Exists but spec calls for hand-drawn portrait (defer to Procreate pipeline). Ship photo for v1. |
| 404 illustration           | **CREATE** or DEFER | KiyViz has `KiyViz_Custom404.svg`           | Can adapt or defer to a text-only 404                                                           |

**Production cost: ~2 hr** — Wordmark + favicon + OG card (Derek design time). Portrait can use existing photo for v1.

---

## Total production hitlist summary

### By labor type

| Work type                                              | Who                                | Est. hours | Notes                                                                                   |
| ------------------------------------------------------ | ---------------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| **Image processing** (WebP conversion, optimization)   | Scriptable (Claude + _optimize.py) | 1-2 hr     | Batch-processable                                                                       |
| **Graphic design** (mockups, compositions, thumbnails) | Derek                              | 4-6 hr     | studiosun mockup, symphonic mockup, sis hero, JTC thumbnail, wordmark, favicon, OG card |
| **Photography curation**                               | Derek                              | 1-2 hr     | Select + caption Fleeting Power series (or extract KiyD Selections from PDF)            |
| **Copy writing** (new)                                 | Derek + Claude                     | 3-4 hr     | JTC case study copy, No Kings writing piece, about page, now page                       |
| **Copy review** (existing drafts)                      | Derek                              | 2-3 hr     | Review 8 KiyViz case study BLUF drafts                                                  |
| **Web development**                                    | Claude (build session)             | 8-12 hr    | HTML, CSS, JS, all pages, deploy                                                        |
| **Screenshots**                                        | Claude or Derek                    | 0.5 hr     | JTC live site screenshots                                                               |

### Total estimated Derek labor: ~12-17 hours

This is spread across design, photography, and writing — not web development (which is the build session's job). This is the cost of content production that cannot be delegated to the build session.

### Critical path items (must happen BEFORE or DURING build)

1. **Derek reviews 8 case study drafts** — build session can stamp HTML but needs approved copy
2. **Derek creates JTC card thumbnail** — otherwise the home grid has a gap
3. **Derek creates wordmark SVG** — or approves Unbounded text as placeholder
4. **Derek selects + captions photo series** — build session needs images + captions to build the gallery
5. **Derek writes or approves about page copy** — build session can draft but Derek owns the voice

### Items that can happen AFTER v1 launch

- Hand-drawn portrait (use photo for now)
- Context mockups for studiosun + symphonic (use Behance slides for now)
- SIS hero composition (use spaceport map for now)
- NYT tearsheet for nokings (use poster for now)
- KiyD Selections photo series (use Fleeting Power for now)
- Museum DTE full case study (ship placeholder)
- Full ES copy (ship EN-led with ES scaffolded)
- 404 custom illustration (text-only 404 works fine)

---

## File paths quick reference (for build session)

```
DESIGN SYSTEM SOURCE
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\css\          ← CSS to copy/adapt
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\content.js     ← content data pattern
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\scripts.js     ← JS to adapt (theme/lang/nav)

CASE STUDY COPY
F:\PRO\KiyViz\Web_KiyViz\_copywork\*.md                ← 8 BLUF drafts
F:\PRO\KiyViz\Web_KiyViz\_copywork\_STYLE.md           ← voice/format guide

PORTFOLIO IMAGES (raw, need processing)
F:\PRO\KiyViz\Assets_KiyViz\KiyViz_Portfolio\Portfolio-Assets\
    Infographic-CalChamber-OfCommerce\                  ← calchamber
    Report-NorthAmericanCompetitivenessWorkingGroup\    ← nacwg
    Branding-StudioSun\Exports\                        ← studiosun
    Branding-SymphonicStories\                         ← symphonic
    Report-EMobility\Mockups\                          ← ioa
    Report-Climate\Mockups\                            ← ioa (climate)
    Poster-DeputyMeeting\                              ← deputy

WEB-READY IMAGES (already in builds)
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\work\      ← 8 WebP thumbnails

CLIENT PROJECT FOLDERS (additional assets)
F:\PRO\Client Projects\01 Active\NoKings\              ← poster exports, social, map
F:\PRO\Client Projects\01 Active\SIS - Space Impact Study\  ← spaceport map, memo draft
F:\PRO\Client Projects\01 Active\JustTheConstitution\ASSETS\  ← logos, OG images
F:\PRO\Client Projects\03 IOA\                         ← report covers, logos
F:\PRO\Client Projects\99 Archive\2024\StudioSun\      ← logo package, sketch scans
F:\PRO\Client Projects\99 Archive\2024\SymphonicStories\  ← logo package, brand guide
F:\PRO\Client Projects\99 Archive\2024\RK_NorthAmericanWorkingGroup\  ← full deliverable set
F:\PRO\Client Projects\99 Archive\2025\CW_NoKingsUSA\  ← social posts, logo SVG

PHOTOGRAPHY
F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\0_Personal\Ideas\DerekTakesPhotos\
    KiyD_Selections-Early2024.pdf                      ← needs extraction
    Fleeting Power\Exports-Behance\DerekKiy-FleetingPower-*.jpg  ← 16 JPGs ready

BRAND
F:\PRO\KiyViz\Assets_KiyViz\KiyViz_Logo\SVG\           ← KiyViz logos (reference only)
F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\        ← self-hosted font fallback

PORTRAIT
F:\PRO\KiyViz\Web_KiyViz\26Q2.3\assets\img\portrait\derek-kiy.webp
```

## EXECUTIVE-SUMMARY

# derekkiy.com — Executive Summary

**Prepared:** 2026-04-29 **For:** Derek Kiy **Companion docs:** `SPEC.md` (full website spec) · `RESEARCH-FINDINGS.md` (raw evidence)

---

## TL;DR (60 seconds)

You bought `derekkiy.com` and now need to use it. After reading the Obsidian vault, the active client folders, the KiyViz design system, and the S07 coaching update, the recommendation is:

> **`derekkiy.com` should be the personal portfolio that proves the practice — a curated atlas of your work, photography, writing, and ideas, sharing the KiyViz design system but in a different role.** It is the depth that backs `kiyviz.com`'s pitch. Lead gen happens on `kiyviz.com`. Proof and personality live on `derekkiy.com`.

This split fixes the lead-gen visibility problem you flagged in S07 without bloating KiyViz, gives every prospect a reason to deepen trust before they email, and is small enough to ship inside 2–3 working weeks without disturbing the Museum DTE audit or the kiyviz.com 26Q2.3 push.

---

## The strategic decision

You currently have three live web identities at three altitudes:

| Property                    | Role                          | Audience                                                            | Voice                                  |
| --------------------------- | ----------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| **kiyviz.com**              | Services / "hire me"          | Buyers (museum directors, foundation program officers, comms leads) | Tight, transactional, formal-letter    |
| **justtheconstitution.org** | A specific civic project      | Anyone reading the Constitution                                     | Disappearing-craftsman; document-first |
| **derekkiy.com**            | *(undefined — currently 403)* | *(?)*                                                               | *(?)*                                  |

The simplest, highest-leverage answer is to make `derekkiy.com` the **personal layer** that the other two cannot carry without breaking their voice:

- KiyViz is consolidated to 3 services; it can't show every project without diluting the pitch.
- Just the Constitution is a single artifact; it can't talk about its author.
- Your photography, the elDelicious YouTube channel, the SpaceStudy manuscript, your idea pipeline, your maps — none of these belong on KiyViz, but they're the strongest evidence that you can think across domains. That's the moat for a buyer trying to decide between you and a generic studio.

**This is also the cheapest way to fix your stated S07 problem.** You wrote: *"Social proof and visibility are likely my biggest limitation on lead gen."* A rich, indexable personal site with case studies and a search-friendly name (`derekkiy.com` outranks anything in your current funnel for the search "Derek Kiy") materially helps. Every reference you put into a proposal, every podcast credit, every NACWG citation can point at `derekkiy.com/work/...` instead of an outdated Webflow page.

---

## Who you are (per the evidence)

You are not a single-discipline designer. The vault and project folders show a coherent practice operating across at least six adjacent domains:

1. **Cartography & information design** — QGIS, custom orthographic projections, published in CalChamber Alert, NACWG identity, hot-spot atlases.
2. **Museum & exhibition work** — Aloha Vaquero timeline, MRHN explainers, the in-flight Museum DTE audit, deep curatorial context (resumes for senior curator at MOCA, exhibit manager at US Space & Rocket Center, etc.).
3. **Public-policy & cross-border communication** — Three years with the Institute of the Americas, NACWG, the Border Consumption Tax Map, ARI/Space Impact Study.
4. **Civic / political design** — No Kings 4th Amendment campaign with NYT placement, justtheconstitution.org.
5. **Photography & narrative imagery** — "Derek Takes Photos" practice, bee/bird series, Fleeting Power, KiyD Selections PDF, an active LightRoom catalog.
6. **Writing & longer thought** — SpaceStudy manuscript and policy memos, McGill Strategic Space Law course alumnus, an 11-resume portfolio targeting curatorial and exhibit-content roles.

Plus the playful adjacencies: the **elDelicious** gaming channel, audio experiments (BirdSong, Beasland), the idea pipeline (Garden Water Circuits, Battery Sea-Saw, Pride DF, RideShare-Beacon), the Procreate-to-SVG pipeline tooling.

**This range is your moat.** The right portfolio site doesn't apologize for it — it indexes it. The wrong move is to flatten you back into "designer for hire."

---

## Five strategic decisions baked into the spec

### 1. Reuse the Brutal Nouveau system; differentiate by role, not by stack

`derekkiy.com` should run the same vanilla HTML/CSS/JS, share the same `variables.css` token system (12 themes), respect the same 100 KB / WCAG AA / no-tracking principles, and follow the same versioned-folder workflow (`26Q2`, `26Q3`, etc.). Two reasons:

- You already built it once. Re-shipping the system on derekkiy.com costs near-zero design work.
- Visual coherence between sites signals one author. Switching to a Webflow / Squarespace template here would break the whole proposition.

**Differentiation lives in the hero device, the default scheme, and the IA — not in the build.**

### 2. Replace the CLI hero with a "field notes" / index-card hero

KiyViz's CLI is a craft-flex aimed at a buyer. derekkiy.com's audience is broader (curious prospects, journalists, podcast hosts, people who Googled your name after a panel). They don't need a terminal; they need a way to *browse* your range without committing.

Recommended hero device: an **index-card / contact-sheet wall** — a grid of dated, captioned cards spanning project, photo, idea, video, and writing entries, drawn from a single content data layer (the same `content.js` model). Hover/focus expands a card; click opens the source.

This (a) shows polymathy without forcing a label, (b) gives every category equal status, (c) reuses the `data-bg-set` / spec-sheet pattern from KiyViz, and (d) is tactile in a way that a terminal isn't.

Two alternatives are noted in the spec; this one is the recommended first build.

### 3. Default scheme: stone (cool neutral) — not earth

KiyViz defaults to **earth** because the freelance brand reads "warm, hand-drawn, goblincore-cozy." derekkiy.com is the *archive* — a slightly cooler, more curatorial register fits better and lets the photography/cartography breathe. Stone-light by default; full toggle still available across all 12 combos.

### 4. Bilingual: yes, but optional priority

Bilingual EN/ES is your moat — keep it on derekkiy.com. **However**, the spec recommends launching English-first with bilingual scaffolding in place (`data-lang-view` mechanics, content-data shape) and adding ES copy in a v1.x patch rather than blocking launch on full translation. This is an acceleration trick: ship the structure, fill the languages on cadence.

### 5. Content-data layer as single source of truth

Every card on the home grid, every case study, every photo series should resolve from a single `content.js` (or `content/index.js` if it grows). One file, one place to add a new entry, every surface re-flows automatically. This matches the pattern you already use on KiyViz and means the site grows linearly with your output instead of needing layout changes per addition.

---

## What ships in MVP (v1, ~2 working weeks)

The full scope is in `SPEC.md`. The MVP is intentionally small:

1. **Home page** — index-card hero (12+ cards), bilingual elevator-letter About block, "currently" status, contact, sticky terminal-style status footer.
2. **Work index** at `/work/` — filterable list (year / domain / client) of all 8+ KiyViz case studies plus 2–3 personal projects (Just the Constitution, Border Consumption Tax Map, SpaceStudy excerpt).
3. **One photo gallery** at `/photo/` — wrapping the `KiyD_Selections-Early2024` set as the launch series. Light, lazy-loaded, no carousel theater — a quiet print-portfolio-on-screen.
4. **One writing piece** at `/writing/` — pick the strongest existing fragment (probably a SpaceStudy memo or the No Kings campaign rationale). Establishes that writing is a first-class category.
5. **About page** at `/about/` — long-form bio, the thing the formal letter compresses on KiyViz. Includes the 11-resume thread (you've applied to senior curator, exhibit manager, content policy coordinator roles — that's a credibility paragraph, not a hidden fact).
6. **Standard plumbing** — `404.html`, `robots.txt`, `sitemap.xml`, OG image (cropped from a Selections-2024 frame), favicon, JSON-LD `Person` schema.

**Out of scope for MVP** (defers to v1.1+):

- Video / elDelicious surfacing — too brand-different from the rest, deserves its own treatment.
- Music / audio experiments page — same reason.
- The full idea pipeline / "lab" page — temptingly easy to bloat. Save for v1.2.
- Service offers — that's KiyViz's job.
- Newsletter signup — you don't have a newsletter yet.

---

## The lead-gen story

Per S07: *"My biggest business problem is lead generation… 1 short piece weekly, 1 medium piece monthly, 1 long piece quarterly."*

`derekkiy.com` is the publishing target for all of that. Every piece you commit to is a `/writing/<slug>/` page or a `/photo/<series>/` gallery. The home grid surfaces the latest. The atom feed (recommended in spec) gives press / podcasters something to subscribe to. The site becomes the social-proof artifact you cite in outreach: *"More on this in [derekkiy.com/work/calchamber](https://derekkiy.com/work/calchamber)."*

KiyViz keeps its tight three-service pitch. derekkiy.com carries the depth. The hand-off between them is a single header link: from KiyViz → "more work at derekkiy.com," from derekkiy.com → "hire me at kiyviz.com."

---

## Risks worth flagging back at you

| Risk                            | What it'd look like                                                                                                                  | Counter                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Concurrency overload**        | derekkiy.com competes with the Museum DTE audit (Apr 13–30) and the 26Q2.3 KiyViz finishing pass. Output quality on all three drops. | MVP must be ruthlessly small. The spec defaults to "ship the index card hero + 5 case studies + 1 photo set + 1 writing piece" and **explicitly punts** on hand-drawn art, Spanish copy completeness, and video integration to v1.1. |
| **Duplicate-of-KiyViz feeling** | If derekkiy.com ends up as a longer KiyViz with more pictures, it competes with itself for SEO and dilutes both pitches.             | The `SPEC.md` IA is structurally different (work / photo / writing / about / now) vs KiyViz's bento (about / services / work / contact).                                                                                             |
| **Webflow keeps charging**      | Both kiyviz.com and any old derekkiy.com Webflow plan keep auto-renewing.                                                            | Spec includes a launch-week "kill the Webflow renewal" task.                                                                                                                                                                         |
| **Spanish translation drag**    | Waiting for a fluent-speaker pass blocks launch.                                                                                     | Launch EN-only, scaffold ES, ship ES in v1.1. Same approach you took with KiyViz hand-drawn assets.                                                                                                                                  |
| **Greenfield drift**            | Without a constraint, the site grows to fit every interest you have.                                                                 | The 100 KB / page principle and the version-folder discipline are the hard constraints. Apply them.                                                                                                                                  |
| **Discoverability**             | `derekkiy.com` is a person-name domain with no inbound links.                                                                        | Spec includes the cross-link plan, JSON-LD `Person` schema, and a one-shot inbound-link campaign (KiyViz footer, JTC footer, GitHub profile, LinkedIn, every active-client deliverable).                                             |

---

## What I want your gut on (before SPEC.md is finalized)

These are the calls in `SPEC.md` that are reversible but easier to settle now than later:

1. **The hero device.** Index-card / contact-sheet vs the two alternatives (atlas-of-the-self map, polaroid wall). My recommendation is index-card; alternatives are scoped in the spec.
2. **Default scheme.** Stone (cool/curatorial) vs earth (KiyViz-coherent). I lean stone; earth is also defensible.
3. **Including elDelicious in v1?** It's a lot of personality on a brand that's otherwise reads serious. I've punted to v1.1; you could argue it belongs on day one.
4. **Bilingual launch posture.** EN-first with ES in v1.1, or block on full bilingual? I lean EN-first.
5. **Photography commercialization.** "Derek Takes Photos" had a pay-what-you-want / Gumroad note. Do we link out to a store from `/photo/` in v1, or treat photography as portfolio-only and defer commerce?
6. **The /lab/ page.** A page for the idea pipeline (Garden Water Circuits, Battery Sea-Saw, etc.) — fun signal, also a sprawl risk. I've deferred to v1.2.

If you have answers, the spec sharpens. If you don't, the spec keeps both options open and we choose during build.

---

## What happens next

Sign off on this summary and I (or you) can:

1. Commit `RESEARCH-FINDINGS.md`, `EXECUTIVE-SUMMARY.md`, and `SPEC.md` as v0 of the project record.
2. Stamp out the `26Q2/` skeleton with the index-card hero and a content-data layer pre-populated from the KiyViz `content.js`.
3. Migrate or rewrite the 5 launch case studies (8 KiyViz studies are already written — most just need a slight re-frame for derekkiy.com voice).
4. Set the launch checklist (favicon, OG, robots.txt, sitemap.xml, Cloudflare Pages deploy, DNS pointing, kill-Webflow task).

The full `SPEC.md` covers all of this.

## README

# derekkiy.com

Derek Kiy's generalist freelance practice. Identity, cartography, museum/exhibit, editorial, photography, writing — the full creative range, in a warm and humanistic voice.

**Sister site:** [kiyviz.com](https://kiyviz.com) handles specialized infosplainer work. Same person, different practice, very different tone.

## Project status

- **Phase:** Planning complete. Ready for build session.
- **Stack:** Vanilla HTML / CSS / JS (Brutal Nouveau). No framework, no build step.
- **Hosting:** Cloudflare Pages. Domain: derekkiy.com (currently 403).

## Documents (read in this order)

| #   | File                                               | What it is                                                                                 |
| --- | -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | [`CLAUDE.md`](CLAUDE.md)                           | **Build session entry point.** Everything a cold-start Claude session needs.               |
| 2   | [`SPEC.md`](SPEC.md)                               | Original specification (2026-04-29). Detailed IA, visual system, content plan, tech stack. |
| 3   | [`SPEC-AMENDMENTS.md`](SPEC-AMENDMENTS.md)         | Corrections from 2026-05-10 planning session. **Overrides SPEC.md where they disagree.**   |
| 4   | [`CONTENT-INVENTORY.md`](CONTENT-INVENTORY.md)     | What content exists, where it lives, ready-to-use status.                                  |
| 5   | [`COMPETITIVE-CONTEXT.md`](COMPETITIVE-CONTEXT.md) | Pudding/Polygraph model, market gap analysis, comps.                                       |
| 6   | [`EXECUTIVE-SUMMARY.md`](EXECUTIVE-SUMMARY.md)     | Strategic framing (context, not build instructions).                                       |
| 7   | [`RESEARCH-FINDINGS.md`](RESEARCH-FINDINGS.md)     | Raw evidence base. Reference for fact-checking.                                            |

## The dual-market model

```
derekkiy.com (The Pudding)          kiyviz.com (Polygraph)
─────────────────────────           ──────────────────────
Generalist practice                 Specialized infosplainers
Artsy, warm, humanistic             Direct, productized, technical
Shows full creative range           Sells one thing, fast
Identity / cartography / museum     Interactive single-page sites
/ editorial / photo / writing       $3-6K, 48-72hr turnaround
```

## JTBD

> "This site exists to take **design professionals & people from my network** from **curious yet skeptical** to **trusting and yearning** by **showing proof of work, creativity, and taste**."

## RESEARCH-FINDINGS

# Research Findings — derekkiy.com Discovery

**Prepared:** 2026-04-29 **Sources read:** F:\PRO, F:\ASS, F:\PRO\Domestic Projects\Vault-Obsidian, plus light sampling of D:\PRO, D:\BACKUP, D:\DOC, D:\PHOTOS\LightRoom-Backups **Web sources:** kiyviz.com, justtheconstitution.org, derekkiy.com (currently 403)

This file is the raw evidence layer behind `EXECUTIVE-SUMMARY.md` and `SPEC.md`. Skim it for fact-checking; the synthesis docs are the working artifacts.

---

## 1. The person

**Derek Kiy.** Operates as KiyViz, a one-person design and content studio, from Escondido, California (Pacific time). Bilingual EN/ES, increasingly working trilingually (EN/ES/PT for IOA, EN/ZH for Studio Sun). Phone (858) 432-3234. Email [contact@kiyviz.com](mailto:contact@kiyviz.com).

Background blends:

- **Exhibition / museum design** — primary client domain; resumes targeted senior curator, exhibit manager, and exhibit content developer roles at MOCA, US Space & Rocket Center, Si Ramo Theater, National Underground Railroad Freedom Center, California Center for the Arts Escondido.
- **Public policy & cross-border affairs** — Institute of the Americas (IOA) is a multi-year client; produced annual reports (22, 23, 24), trilingual brochures, conference posters, mayor-event collateral, and the NACWG identity for the North American Competitiveness Working Group.
- **Cartography & infographics** — QGIS power user; published in CalChamber Alert (Vol 51 No 9, March 2025); custom orthographic projections; "Border Consumption Tax Map" is a flagship piece.
- **Civic / political design** — No Kings 4th Amendment campaign with full-page NYT placement; recent ARI (Ayn Rand Institute) work including the Space Impact Study and Examined Life Podcast.
- **Photography** — practice branded "Derek Takes Photos." Subjects include bees ("Beesy"), birds ("BirdSong"), a "Fleeting Power" series, and a "PRINTS-Exhibition" project. Curated PDF: `KiyD_Selections-Early2024.pdf`.
- **Music / audio** — Audio-EXPERIMENTAL folder, BirdSong-EXPERIMENTAL, original riffs, sound design under KiyViz, beastland (DVIDS music folder).
- **Gaming / video** — `elDelicious` YouTube channel (UCwfucJTyxfpskwhizl3VwOA). Content covers Cyberpunk 2077, Half Sword, Oblivion, Ready or Not, Squad, BattleBit, Rainbow 6, Star Wars, Alien Invasion, an Oblivion remaster.
- **Space / policy writing** — McGill Strategic Space Law Course 2025 alumnus; research on orbital mechanics, Kessler syndrome, delta-v budgets, space debris removal; in-progress book/manuscript "SpaceStudy" (multiple memo drafts).
- **3D / modeling** — KSG-style model project with blockout phases.
- **Teaching / education** — drafted Art Syllabus, Digital Art lesson plans.

**Personal context (from S07 coaching update, 2026-04-08):**

- Highest revenue month since going solo — but **lead generation is the stated #1 business problem.** Two retained clients, target is four. Outreach attempts in S07: zero. Content published: zero.
- Currently executing a "Museum DTE audit" Apr 13–30 — a paid pilot for a productized service ("Prompt-for-people" — project specs for human/AI/hybrid creative teams).
- Self-aware about a habit of "building systems instead of using them"; wants to ship one piece of infrastructure this sprint.
- Aware that visibility and social proof are likely his biggest lead-gen levers.

**Collaborators / inner circle:**

- **Wynn** ("Mr.Bean" — Series 5 in vault) — partner. Has Health Bucks project, a Janet Harewood-related piece in the 2025 archive, data-entry work, T-Keyboards.
- RK_NorthAmericanAdvocacy / RK_MappingProjects (Richard Kiy / https://www.linkedin.com/in/richard-kiy-0939a78/)

---

## 2. The active client portfolio (as of April 2026)

Source: `F:\PRO\Client Projects\`

### 01 Active

- **HotspotAtlas** — Iran-1 series, Gulf-Desal V2. Sounds like geopolitical hotspot mapping; deliverables include `.docx` reports.
- **NoKings** — 4th Amendment campaign (CW_NoKingsUSA in archive). Logo set, social posts, processed background imagery, web component, V5/V6 iterations, NYT print placement.
- 
- **NaplesDevelopment&Design** — only a Discovery folder so far (early stage).

### 02 Museum

- **Aloha** (Aloha Vaquero) — exhibit timeline schematic-design phase, Hawaiian/paniolo content development.
- **MRHN** (Museo de Mi Tierra / Museo Regional de Historia Natural) — Bristol Timeline, Transpiration explainer, La Ribera Four Seasons, scientific style guide. Has Spanish-language PDF (`ÉTICA, NATURALEZA Y SOCIEDAD.pdf`). Lightroom catalog included.
- **MMSD** — RFP stage.
- **Audit** — Review-Council folder; this is the Museum DTE audit currently in flight.
- **NaturalHistory** — placeholder.

### 03 IOA — Institute of the Americas

Long-running anchor client (3+ years). Folders: 22_Annual-Report_Cover, 22_IOA_GCMP, 22_IOA_Report, 23_CitiesForward_logo, 23_DeputyMeeting, 23_IOA_Denver-EMobility, 23_IOA_Lithium-Presentation, 23_IOA_Presentation_Cal-Chamber, 23_IOA_Presentation_MexSEP, 23_IOA_Report-USIndustrialPolicy-McNeece, 23_LAC-EmobSustainableTransit, 24_CaliBajaReport, 24_IOA-strategic-consideration, 24_NorthAmericanForum, 24_Partner-SurveyBanner, 24_Reno-Concepts, 24_SFH-ProjectPipeline, 25_MayorEvent-UrbanResilienceAcrossBorders.



05_Dormant

**SIS — Space Impact Study**. Graphics, sources, space-themed content, in-progress communications package on orbital debris/space law.

### 99 Archive (recent: 2024–2025)

2024: MK_Artsy Dog Park, MK_BlackBarnRanch, MK_Magule, RK_NorthAmericanWorkingGroup, SPORTZAG, StudioSun, SymphonicStories, WSFTSR, Wynn_YummyTubby.

2025: AK_AlexanderKiy, ARI_AynRandInstitute, ARI_ExaminedLifePodcast, BG_Imanes123, CW_NoKingsUSA, CW_NorthAmericanFlag, MK_MonicaKiyUtility, REDDIT_REGRET, RK_MappingProjects, RK_NorthAmericanAdvocacy, Wynn_JanetHarewood.

### Curated case studies on KiyViz (from `26Q2.3/assets/content.js`)

The eight projects Derek currently holds out as portfolio-grade:

1. **No Kings — 4th Amendment Campaign** (No Kings USA, 2026)
2. **Space Impact Study — Communications** (Ayn Rand Institute, 2025–2026)
3. **Border Consumption Tax Map** (CalChamber Alert, 2025) — published Op-Ed map
4. **NACWG White Paper & Identity** (North American Competitiveness Working Group, 2024)
5. **Studio Sun Bilingual Identity** (Studio Sun, 2024) — EN/ZH wordmark with custom ligature
6. **Symphonic Stories Identity** (Symphonic Stories, 2024)
7. **IOA E-Mobility Brochure** (Institute of the Americas, 2023) — trilingual EN/ES/PT
8. **IOA Deputy Meeting Poster** (Institute of the Americas, 2023)

Plus heritage and museum-dte case-study HTMLs already stamped in `26Q2.3/work/`.

---

## 3. The KiyViz "Brutal Nouveau" design system

This is critical context: derekkiy.com must be visually coherent with kiyviz.com (same author) but differentiated in role.

**Source documents:** `F:\PRO\KiyViz\Web_KiyViz\REVIEW.md` (advisor-facing), `DESIGN-SYSTEM.md` (technical reference), `VERSIONS.md`, `DEPLOY.md`. Active working folder: `26Q2.3/`. Last review prepared 2026-04-10.

### Brutal Nouveau principles

1. **Material honesty.** Semantic HTML, inline SVG, no frameworks hiding the document. View-source is legible.
2. **Resource conscience.** Under 100 KB per page target (currently ~130 KB with webfonts). No AI-generated imagery.
3. *Friction-free use.** No popups, no email-gates, no cookie banners (because no tracking), no autoplay, no interrupts.
4. **Progressive enhancement.** Page is readable before any JS runs.
5. **Honest depth.** Surface for the curious; depth for the curious who keep digging. Always link to primary sources.
6. **Joy by intention.** Every page should produce one small moment of delight.
7. **Long-lasting.** Built to work unchanged in 2036. No build pipeline, no dependency chain.
8. **Accessible by default.** WCAG AA minimum across all theme combos.
9. **Self-teaching.** The site explains how to read itself.

### Tech stack

- TBD

### Theme system (12 combinations)

- `data-scheme` ∈ { **stone** (cool neutral), **earth** (warm wood/fungus — default on KiyViz), **amber** (Fallout-terminal monochrome), **green** (goblincore terrarium) }.
- `data-mode` ∈ { light, dark, oled }.
- hand-tuned palettes. All WCAG AA. No algorithmic derivation — every combination is a designed palette.
- localStorage persists scheme and mode independently.
- Sticky footer uses scheme-only `--status-*` variables so it stays dark and readable across all brightness modes.

### Type system

- `--font-display`: Unbounded
- `--font-subhead`: Funnel Display
- `--font-body` / `--font-ui`: Funnel Sans
- `--font-mono`: Space Mono
- Work-page scope: Space Mono + Space Grotesk.
- Type scale: --text-2xs (0.6875rem) → --text-2xl (2rem). Fluid clamp() variants exist in the Hyperguide plan.

### Bilingual system

- Every block of user-facing copy exists in EN and ES. Written bilingual from first draft.
- `data-lang-view` attribute on `<html>` ∈ { all (default), en, es }.
- CSS hides the inactive language; CSS Grid auto-placement keeps surviving text in cell 1 so toggling doesn't shift the page.
- Exception: about-letters flips between two-column (all) and centered single-column (mono).
- The "bilingual moat" is a deliberate positioning lever — Derek explicitly notes this is what distinguishes him to museum/policy buyers with bilingual mandates.

### Distinctive features on KiyViz



- **Bento grid** layout with sticky terminal-style status footer (mailto / tel / location / live clock / current theme).
- **Spec-sheet placeholders** instead of stock images — labeled grid cells with intended dimensions and purpose.
- **Procreate → SVG pipeline** in `tools/` (`procreate2svg.py` + Windows `.bat` wrapper) — pure-Python potracer; output uses `fill="currentColor"` to inherit theme color.
- Formal-letter About section ("Hello —" / "Sincerely, Derek Kiy").

### Open questions Derek flagged in REVIEW.md

1. Positioning: "non-fiction creative studio" vs narrower "design for museums and policy"?
2. Is the CLI hero a craft signal or a buyer-bouncer?
3. 12 themes — flex of skill or overkill?
4. Formal letter — strong or stiff?
5. Three consolidated services — right groupings?
6. Next-sprint priority: hand-drawn SVG, deploy to Cloudflare, point domain.
7. What's missing from a working designer's site?

---

## 4. Existing web presence audit

| Property                  | URL                                                                               | Status / observation                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **KiyViz**                | [https://kiyviz.com](https://kiyviz.com)                                          | Live. "One page. One message. Online ASAP." Tagline. Three service tiers 3K–6K+. Showcases justtheconstitution.org. Note: this fetched URL shows the deployed Webflow site, not the Brutal Nouveau rebuild — Derek is mid-migration and still paying for Webflow.                                                                                                                                        |
| **Just the Constitution** | [https://justtheconstitution.org](https://justtheconstitution.org)                | Live. Constitution + 27 Amendments, ad-free, accessible, sourced from National Archives. Print/markdown export. Tagline: "No ads. No commentary. Just the info." High-craft signal piece.                                                                                                                                                                                                                |
| **derekkiy.com**          | [https://derekkiy.com](https://derekkiy.com)                                      | **Returns HTTP 403.** Effectively a parked / unconfigured domain. Empty greenfield from the user's perspective.                                                                                                                                                                                                                                                                                          |
| **YouTube — elDelicious** | [elDelicious - YouTube](https://www.youtube.com/channel/UCwfucJTyxfpskwhizl3VwOA) | WebFetch returned only the YouTube footer (channel content gated). Source-side folder structure shows gaming finals: Cyberpunk2077, ElderScrollsIV-Oblivion, Squad-AE, ReadyOrNot, BattlebitCCR, Rainbow6, Alien Invasion, StarWars, plus _BrandingAssets, _General (GFX/SFX), _Music. Listed video descriptions in vault: ElDelicious_VideoDesc-{Cyberpunk, HalfSword, Oblivion, ReadyOrNot, Squad}.md. |

Project folder: `C:\Users\D\Documents\GitHub\KiyDerek-PersonalSite\` is empty (greenfield).

---

## 5. Personal vault structure

Source: `F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\`

### Index hierarchy

- **Series 1 — Personal:** BizIdeas, Productivity, Explainers, Resources Overview, DailyJournal
- **Series 2 — Projects:** KiyViz, Web-MVP1, SpaceStudy
- **Series 3 — Museum:** Museum, AlohaVaquero, MRHN
- **Series 4 — Jobs:** Jobz, Resumes (11+ tailored resumes), Templates
- **Series 5 — Personal/Others:** Wynn (partner), KiyViz-Gray (collaborator)
- **Series 6:** Comments

### Content density signals

- **Idea pipeline** is dense and varied — Garden Water Circuits, Battery Sea-Saw Concept (energy), Black Friday game, Dual FPS, Vending Machine Business Research, RideShare-Beacon, Plugin-AutoLocalizationLayout, Sausage Fattener Mrk2, Producer Playlist, Idiot-Proof Excel, Pride DF 2023 hustle. Several concept docs per category. Strong "polymath in IP business" pattern.
- **Resources Overview** is a curated public-domain media reference: NASA, USGS, Library of Congress, DVIDS, OSINT Framework, Imperial War Museum, Met, NGA, Tate, Prado, Rijksmuseum, plus historical photo collections. Suggests a research-driven design practice.
- **Productivity** notes show strong opinions on file-naming (YYMMDD_descriptive-name), SSOT spreadsheet design, Obsidian over alternatives, terminal/cmd batch renaming.
- **Sketches:** SpaceStudy-DesignStudy1_LightOnDarkInfographic.md (single sketch in folder).

### Project Write-Up Format (case-study template Derek already uses)

Source: `F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\1_Work\KiyViz\KiyViz_Content\Project Write-Up Format.md`.

Structure:

- Short title (≤69 char SERP)
- Pithy overview (≤160 char meta)
- Brief (client request)
- Solution / Treatment with (1)/(a) callouts
- Numbered sections, each with summary sentence, primary image, body copy with 1:1 detail screenshots
- Sources

Existing fully-written case studies:

- CalChamber Alert (Border Tax Map): tools/process/sources at depth
- Studio Sun: positioning + iconography (finger-joint metaphor, hidden double-S monogram) + colors + typography rationale + applied identity examples

This template is what derekkiy.com case studies should follow.

### Photography

Source: `F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\0_Personal\Ideas\DerekTakesPhotos\`

- "Derek Takes Photos.md" — pay-what-you-want digital downloads on Gumroad + LinkTree, photo+short-form-video promo combinations (animated masked text into photo, single moving cinegraph element, voiceover intro "Here's Bee #567", short riff loop per single).
- KiyD_Selections-Early2024.pdf with cover. Subject series: Audio-EXPERIMENTAL, Beesy, BirdSong-EXPERIMENTAL, Fleeting Power, PRINTS-Exhibition.
- D:\PHOTOS\LightRoom-Backups: 20+ "Imported on [day, date]" folders from March 2024 through August 2024, July 2024 — active practice.

### Audio / music

- F:\PRO\Domestic Projects\Audio (folder exists, contents not deeply sampled).
- F:\ASS\DVIDS_Music: Beastland, LuisRConriques-TonyAguirre_CorridonesBeliconesDuetos.
- Personal note: "Incredible Mixes" video format idea — sample mixes against multi-spectrum analyzer template.

### Maps

- F:\PRO\Domestic Projects\Maps\Blender_ShadedRelief
- F:\PRO\Domestic Projects\Maps-OperationSindoor
- F:\PRO\Domestic Projects\Maps-SalesTax-California
- Operation Overlord folder.

### Modeling / 3D

- F:\PRO\Domestic Projects\Modeling: blockout phases (4 parts), texturing, project files, KSG reference images.

### F:\ASS\RASTER.IMAGES

Curated reference image library: Artifice, Colors, Nature, Textures (each contains 2000PX subfolder). Likely a personal stock/reference archive.

### F:\PRO\CreativeCommons

Assets, Exports, ManetMorne, Projects, Zip-in. Light-touch sampled.

### D drive (HDD, slow — sampled lightly)

- D:\PRO\Projects: ForWynn, PissyReign Project, Tests, later Project, plus a stable-diffusion folder.
- D:\DOC: Art, Code, Drive-Google, GameBackups, Gems, Legacy-Edu, Mapping, Mob, Vortex Mods, _18-22_Backup. Likely deeper history / archive.
- D:\BACKUP: C-DOCS, C-Desktop, STICK-BACKUP. Backup material.
- D:\PHOTOS\LightRoom-Backups: as above.

---

## 6. Tone and self-image cues

From the S07 update + REVIEW.md + service descriptions, Derek's voice is:

- **Direct without being terse.** "Bottom line: great production sprint — but I have a lead generation problem."
- **Self-aware about his own patterns.** "I keep building systems instead of using them."
- **Plain-spoken about craft trade-offs.** "Not deployed. Still running from `file://`."
- **Comfortable with light playfulness** — Brutal Nouveau, goblincore-cozy, "Fallout-terminal amber," "feedback-as-a-service or quality control for firms that don't have a marketing department."
- **Bilingual identity is identity, not feature.** Not "we offer Spanish translation" but "every block written bilingual from the first draft."
- **Distrust of vendor lock-in / build pipelines.** "Built to work unchanged in 2036."

---

## 7. Constraints and risks worth flagging

- **Bandwidth.** Derek is in the middle of the Museum DTE audit (Apr 13–30). He's also actively rebuilding kiyviz.com (26Q2.3 active). Adding derekkiy.com as a third concurrent web property risks splitting attention. Spec must be MVP-first.
- **The Webflow renewal.** Note in REVIEW.md: "Webflow cancellation — still paying annually. Need to set a calendar reminder for next renewal." This is a recurring cost the new stack should retire.
- **Spanish copy.** Derek wrote his own ES; advisor-flagged as "grammatically correct but a fluent editor would tighten the voice." Same risk applies to derekkiy.com.
- **Hand-drawn assets.** Procreate pipeline is built but the actual hand-drawn assets aren't done. KiyViz still uses spec-sheet placeholders. Same problem will exist for derekkiy.com unless we plan for it.
- **derekkiy.com vs kiyviz.com confusion.** Two sites for the same person needs a clear positioning split or it dilutes both.
- **Stretch idea risk.** "Prompt-for-people" / Museum DTE audit could become a productized service in Q3–Q4. The site should leave room for that without committing to it now.

---

## 8. What `derekkiy.com` is *not*

- Not a duplicate of kiyviz.com.
- Not a CV/resume page (those exist as targeted documents; the site shouldn't compete with them).
- Not a personal blog (Derek doesn't have a writing cadence yet — he committed to "1 short piece weekly" in S07 but hasn't started).
- Not a place to sell services. KiyViz does that. derekkiy.com sends qualified prospects to KiyViz; it doesn't run its own funnel.

The synthesis docs build on this evidence base.

## SPEC

# derekkiy.com — Website Specification (v0)

**Prepared:** 2026-04-29 **For:** Derek Kiy **Status:** Working draft — to be refined after exec-summary review

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

| Dimension         | kiyviz.com                                   | derekkiy.com                                                                   |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------------------------ |
| Role              | Practice / services                          | Person / portfolio                                                             |
| Voice             | Formal letter, business-prose                | Personal, archival, reflective                                                 |
| Hero              | Interactive CLI [REUSE: kiyviz]              | Index-card / contact-sheet wall [NEW]                                          |
| IA                | About / Services / Work / Contact            | Work / Photo / Writing / About / Now                                           |
| Default scheme    | earth (warm)                                 | stone (cool / curatorial)                                                      |
| Bilingual posture | EN+ES from first draft, all blocks bilingual | EN-first launch; ES in v1.1; bilingual capability built in                     |
| Lead capture      | Implicit — Contact section                   | None. Outbound link to kiyviz.com for hire-me.                                 |
| Cadence           | Quarterly major (`26Q2`, `26Q3`)             | Same versioning, but content updates are continuous; major cadence per quarter |

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

| Layer                      | KiyViz                            | derekkiy.com                                                                               |
| -------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| Default scheme             | earth                             | **stone**                                                                                  |
| Default mode               | light                             | light                                                                                      |
| Hero                       | CLI terminal                      | **Index-card grid**                                                                        |
| Section system             | Bento grid                        | **Reading flow** (long, single-column reading column with side-anchors for filter and TOC) |
| Decorative motif           | Spec-sheets + hand-drawn ornament | **Index-card / contact-sheet edges + hand-drawn margin glyphs**                            |
| Work-page typography scope | Space Mono + Space Grotesk        | **Funnel Display + Space Mono** (more reading-oriented)                                    |
| Logo treatment             | "kiyviz" lowercase wordmark       | **"Derek Kiy"** with hand-drawn underline glyph                                            |

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

| Metric                        | Target                                                  |
| ----------------------------- | ------------------------------------------------------- |
| Page weight (HTML + CSS + JS) | ≤ 100 KB                                                |
| Page weight (with webfonts)   | ≤ 150 KB                                                |
| LCP on 3G fast                | ≤ 1.5 s                                                 |
| TBT                           | 0 ms (no blocking JS)                                   |
| CLS                           | 0 (image dimensions set; no late-loading layout shifts) |
| Lighthouse Performance        | ≥ 95                                                    |
| Lighthouse Accessibility      | ≥ 95                                                    |
| Lighthouse SEO                | ≥ 95                                                    |

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

| #   | Decision                        | Recommendation                                                                 | Notes                                                                                           |
| --- | ------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 1   | Hero device                     | Index-card / contact-sheet                                                     | Atlas hero deferred to v1.2; polaroid wall not recommended.                                     |
| 2   | Default scheme                  | stone                                                                          | earth would tie to KiyViz; stone differentiates.                                                |
| 3   | Default mode                    | light                                                                          | dark is also defensible for an archival/curatorial register.                                    |
| 4   | Bilingual launch                | EN-led, ES scaffolded, ES copy in v1.1                                         | Avoids blocking on translation.                                                                 |
| 5   | First writing piece             | No Kings campaign rationale                                                    | Tight, current, thread-pulls into the case study.                                               |
| 6   | Photo commercialization         | Portfolio-only at v1; no Gumroad link yet                                      | Defer commerce until photography page traffic warrants it.                                      |
| 7   | elDelicious in v1               | Defer to v1.1                                                                  | Different brand register; needs its own treatment.                                              |
| 8   | `/lab/` page in v1              | Defer to v1.2                                                                  | Sprawl risk; tempting to bloat.                                                                 |
| 9   | Same-author footer cross-link   | Yes, in both directions                                                        | KiyViz footer links to derekkiy.com; derekkiy.com status footer email goes to the KiyViz inbox. |
| 10  | Headshot vs hand-drawn portrait | Hand-drawn (matches KiyViz REVIEW.md decision)                                 | Defers until Procreate pipeline produces art.                                                   |
| 11  | LinkedIn / GitHub URL           | [OPEN]                                                                         | Need confirmed URLs for JSON-LD `sameAs`.                                                       |
| 12  | Inbox routing                   | [derek@kiyviz.com](mailto:derek@kiyviz.com) (already monitored)                | Keeps email funnel single.                                                                      |
| 13  | Museum DTE case study           | Ship as "coming soon" page in v1; full content in v1.1 after engagement closes | Ethics: anonymized; positioning: first proof of "Prompt-for-people" service.                    |

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

## SPEC-AMENDMENTS

# SPEC.md Amendments (2026-05-10)

These amendments override specific sections of `SPEC.md` (v0, 2026-04-29). They result from a planning session that reconciled the original spec with new strategic direction, a separate discovery payload, competitive research, and Derek's direct input.

**Rule: where SPEC.md and this document disagree, this document wins.**

---

## Amendment 1: Mission (overrides §1)

**Old framing:** "derekkiy.com is the personal portfolio that proves the practice."

**New framing:** derekkiy.com is **Derek Kiy's generalist freelance practice** — the broad, warm, humanistic face of his work. It's not a portfolio supporting kiyviz.com; it's a standalone practice that attracts and serves clients who want Derek's full creative range.

The relationship between the two sites follows **the Pudding/Polygraph dual-market model**:

- **derekkiy.com = The Pudding** — editorial, artsy, humanistic. Builds trust and shows range. Attracts generalist work (identity, cartography, museum/exhibit, editorial, photography, writing).
- **kiyviz.com = Polygraph** — commercial, productized, specialized. Converts leads who specifically need fast-turnaround infosplainers.

Both sites generate revenue. They are not parent/child — they are siblings with different personalities serving different client needs.

**Revised MUST list:**

1. Be the canonical, search-friendly home for "Derek Kiy" (the person) on the web.
2. Carry case studies for every project Derek wants to be cited for.
3. Showcase Derek's range without forcing it into a single-discipline label.
4. **Present generalist capabilities in a warm, humanistic voice** (identity, cartography, museum, editorial, photography, bilingual creative).
5. **Generate its own leads** for generalist work — not just route to kiyviz.com.
6. Route **infosplainer-specific** inquiries to kiyviz.com.
7. Be a publishing target for ongoing content (writing, photography, project updates).

**Revised MUST NOT list:**

- Pitch productized infosplainer services (KiyViz's job).
- Use KiyViz's technical/formal voice.
- Run lead capture forms or newsletters.
- Become a CV/resume page.

---

## Amendment 2: Audience (minor revision to §2)

Primary audience is confirmed by the JTBD (from `KiyBiz-Q2-JTBD`):

> "This site exists to take **design professionals & people from my network** from **curious yet skeptical** to **trusting and yearning** by **showing proof of work, creativity, and taste**."

**Addition:** Visitors who haven't yet decided whether they need KiyViz's specialized service or Derek's broader practice. derekkiy.com catches the wider net; infosplainer-specific leads get routed to kiyviz.com.

---

## Amendment 3: Positioning table (overrides §3)

| Dimension           | kiyviz.com                                | derekkiy.com                                                   |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| **Role**            | Specialized infosplainer studio           | Generalist freelance practice                                  |
| **Voice**           | Direct, productized, formal-letter        | Artsy, approachable, humanistic                                |
| **Audience**        | Orgs needing fast issue sites             | Design professionals, network contacts, curious prospects      |
| **Services**        | Infosplainers ($3-6K, 48-72hr turnaround) | Identity, cartography, museum, editorial, photography, writing |
| **Revenue model**   | Productized, fixed-scope                  | Custom-scoped, project-based                                   |
| **Hero**            | Interactive CLI terminal                  | Index-card / contact-sheet wall                                |
| **Default scheme**  | earth (warm)                              | stone (cool, curatorial)                                       |
| **Nav**             | about / services / work / contact         | work / photo / writing / about / now                           |
| **Contact**         | CLI + footer strip                        | Dedicated contact section + footer strip                       |
| **Structural comp** | Polygraph (commercial arm)                | The Pudding (editorial arm)                                    |

---

## Amendment 4: Home page (revision to §5)

### §5.1 Index-card hero — CONFIRMED

The index-card / contact-sheet hero is confirmed as the primary device. No change needed.

### §5.2 Post-hero blocks — REVISED

The home page blocks after the hero should be:

1. **About-letter block** — REVISED VOICE. The KiyViz about-letter is formal ("Hello — / Sincerely, Derek Kiy"). The derekkiy.com version should be **warmer and more personal** — more like a letter from a friend who happens to do incredible work. Still bilingual (EN with ES scaffolded). Still a letter structure. But the register is approachable, not boardroom.

2. **Capabilities section** — NEW. A lightweight list of what Derek does for hire. Not a productized price list (that's KiyViz's job). More like: "Here's the kind of work I take on" — identity systems, cartography, museum/exhibit content, editorial design, bilingual creative, photography. Warm framing. Each capability gets 1-2 sentences max. This replaces the SPEC's "MUST NOT include a services list" — because derekkiy.com IS a practice, not just a portfolio.

3. **"Now" pull** — UNCHANGED. Excerpt from `/now/`.

4. **Contact CTA** — MORE PROMINENT than the SPEC envisioned. The SPEC said "no separate /contact/ page" and contact lives only in the footer strip. For a generalist practice, contact needs to be easy to find. At minimum: a contact section on the home page with email + phone. The footer strip still carries it persistently. A separate `/contact/` route is optional but the home page contact section is required.

### §5.3 What the home page MUST NOT include — REVISED

- A productized price list (KiyViz's job)
- A testimonial carousel
- A newsletter signup
- Anything that requires JS to read

Note: "a services list" is removed from the MUST NOT list. A warm capabilities section is now required.

---

## Amendment 5: Contact routing (new)

**Old spec:** "routes hire-me intent through the email link to a KiyViz-monitored inbox ([derek@kiyviz.com](mailto:derek@kiyviz.com))."

**Revised:** derekkiy.com handles its own generalist inquiries. Use `derek@kiyviz.com` as the shared inbox (since Derek monitors it already), but the CTA framing should be warm and personal ("Let's talk about your project" or similar), not a redirect to kiyviz.com.

For visitors who specifically want infosplainer work, the capabilities section or contact area can include a note: "Looking for a fast-turnaround interactive site? Check out [kiyviz.com](https://kiyviz.com)."

---

## Amendment 6: Voice and tone (new — applies everywhere)

The SPEC describes derekkiy.com's voice as "personal, archival, reflective." This is partially right but too cold.

**Corrected voice:** Artsy, approachable, humanistic.

- **Artsy** — the site itself should feel like a creative artifact, not a corporate portfolio. The index-card hero, the hand-drawn glyphs, the curatorial stone palette all contribute.
- **Approachable** — no gatekeeping. Plain language. The about-letter reads like a person talking, not a firm presenting.
- **Humanistic** — the work is about people, places, and ideas. The site should feel like meeting Derek at an exhibit opening, not reading his LinkedIn profile.

This does NOT mean casual or sloppy. It means warm professionalism. Think: a beautifully typeset artist's monograph, not a corporate annual report.

---

## Amendment 7: Open decisions resolved (updates §14)

| #   | Decision                | Resolution                                                      | Source                       |
| --- | ----------------------- | --------------------------------------------------------------- | ---------------------------- |
| 1   | Hero device             | Index-card / contact-sheet                                      | Confirmed (SPEC default)     |
| 2   | Default scheme          | stone                                                           | Confirmed (SPEC default)     |
| 3   | Default mode            | light                                                           | Confirmed (SPEC default)     |
| 4   | Bilingual launch        | EN-led, ES scaffolded                                           | Confirmed                    |
| 5   | First writing piece     | No Kings campaign rationale                                     | SPEC recommendation accepted |
| 6   | Photo commercialization | Portfolio-only at v1                                            | Confirmed                    |
| 7   | elDelicious in v1       | Defer to v1.1                                                   | Confirmed                    |
| 8   | /lab/ in v1             | Defer to v1.2                                                   | Confirmed                    |
| 9   | Cross-link footer       | Yes, both directions                                            | Confirmed                    |
| 10  | Headshot vs hand-drawn  | Hand-drawn (defer until art exists; use spec-sheet placeholder) | Confirmed                    |
| 11  | LinkedIn URL            | https://www.linkedin.com/in/derek-kiy/                          | **RESOLVED**                 |
| 11b | GitHub URL              | [KiyViz · GitHub](https://github.com/KiyViz)                    | **RESOLVED**                 |
| 12  | Inbox routing           | [derek@kiyviz.com](mailto:derek@kiyviz.com) (shared)            | Confirmed                    |
| 13  | Museum DTE case study   | "Coming soon" page in v1                                        | Confirmed                    |

### New open decisions (for build session to resolve in real-time)

| #   | Decision                                                 | Recommendation                                     | Notes                                                               |
| --- | -------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------- |
| 14  | Capabilities section: standalone page or home section?   | Home section (lightweight)                         | A `/services/` page risks duplicating kiyviz.com's role             |
| 15  | Contact: home section only, or also a `/contact/` route? | Home section + footer strip (no dedicated page)    | Keeps IA tight; revisit if conversion data warrants it              |
| 16  | About-letter tone: how warm?                             | Draft two versions during build and let Derek pick | The line between "warm professional" and "too casual" is subjective |

---

## Amendment 8: The "services list" prohibition — LIFTED

SPEC.md §1 says: "It MUST NOT: Pitch services. (KiyViz's job.)"
SPEC.md §15 says: "Out of scope: Service offers (kiyviz.com)."

**Overridden.** derekkiy.com IS a generalist practice and needs to signal what Derek does for hire. The distinction:

- **derekkiy.com:** warm capabilities overview (what kinds of work, in what spirit) — "I design identity systems, maps, exhibit content, and editorial publications. Bilingual EN/ES from the first draft."
- **kiyviz.com:** productized service pitch (fixed scope, fixed price, turnaround times) — "One page, one message, online in 48-72 hours. Starting at $3,000."

The framing, not the presence, is what differentiates them.
