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

## Image specification (structural requirements)

This section defines what images are needed structurally — dimensions, formats, and budgets. Art direction happens separately; this ensures the build knows what slots to fill.

### Per-page image slots

| Page type | Slot | Dimensions | Format | Budget | MVP | Polished |
|---|---|---|---|---|---|---|
| **Home** | Card thumbnail (x12+) | 400x300 | WebP | ~15 KB each | Existing KiyViz WebPs | Art-directed crops |
| **Home** | Portrait/avatar | 200x200 | WebP | ~20 KB | `derek-kiy.webp` (exists) | Hand-drawn (Procreate) |
| **Case study** | Hero image | 1200x800 | WebP | ~80 KB | Existing mockups/exports | Art-directed compositions |
| **Case study** | Body images (2-4) | 800w max | WebP | ~40 KB each | Raw exports, converted | Cropped to reading column |
| **Photo gallery** | Gallery images (8-16) | 800w max | WebP | ~100 KB each | Fleeting Power JPGs converted | Color-graded, captioned |
| **Site-global** | OG card | 1200x630 | PNG | ~100 KB | Composite from best thumbnail | Designed card |
| **Site-global** | Wordmark | scalable | SVG inline | ~2 KB | Unbounded text | Hand-drawn SVG |
| **Site-global** | Favicon | 32x32 equiv | SVG data URI | ~1 KB | Letter "D" in Unbounded | Hand-drawn glyph |

### Page image budgets

| Page | Max total images | Notes |
|---|---|---|
| Home | ~200 KB | Thumbnails are small; lazy-load below fold |
| Case study | ~250 KB | Hero + 2-4 body. Hero is LCP — optimize first. |
| Photo gallery | ~1.5 MB | 8-16 images lazy-loaded. This is the one exception to tight budgets. |
| About | ~50 KB | Portrait only |
| Other pages | ~20 KB | Minimal or no images |

### Unified look (to be art-directed)

The "con sabor y amor" scheme (bright, architecturally Mexican) implies:
- Warm, saturated tones in hero images
- Consistent crop ratios across case studies (4:3 for cards, 3:2 for heroes)
- Process shots valued alongside polished deliverables (controlled chaos aesthetic)
- No stock photography. Every image is either Derek's work or Derek's photo.

### MVP image set (can build with today)

These exist and need only WebP conversion + cropping:
- 8 card thumbnails from `26Q2.3/assets/img/work/*.webp` (READY)
- calchamber hero + body images (READY/PROCESS)
- nacwg hero + body images (READY/PROCESS)
- symphonic card + hero (READY/PROCESS)
- studiosun card + sketches (READY/PROCESS)
- nokings card + poster + social (READY/PROCESS)
- ioa card + brochure mockups (READY/PROCESS)
- deputy card + poster variants (READY/PROCESS)
- Fleeting Power 16 JPGs (PROCESS — WebP conversion only)
- Portrait WebP (READY)

### CREATE items (require Derek's design/photo time)

- justtheconstitution card thumbnail + hero (screenshots of live site + composition)
- sis hero (composition from spaceport map)
- studiosun context mockup (brand in use)
- symphonic context mockup (brand in use)
- Wordmark SVG
- Favicon SVG
- OG card composition

---

## Per-case-study asset matrix

Each case study needs: (1) card thumbnail for home grid, (2) hero image for case study page, (3) 2-4 body images, (4) BLUF + body copy.

### 1. calchamber (Border Consumption Tax Map) — STRONGEST

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/calchamber-border-tax.webp` | Already WebP |
| Hero image | READY | `Portfolio-Assets/Infographic-CalChamber/CalChamber-NewspaperMockup-Small.webp` | Newspaper mockup, already WebP |
| Body: full map | PROCESS | `Map_Border-Tariff@144x-100.jpg` | High-res JPG, needs WebP |
| Body: sources annotation | PROCESS | `Portfolio_sources-Annotation.jpg` | Good process shot |
| Body: animated GIF | PROCESS | `Animations/Portfolio-GIF_CalChamber.gif` | Animated map build. Consider: too heavy for page weight? |
| Body: Mexico detail | PROCESS | `LargeAd-Format-MexicoFullView.png` | Crop to reading-column width |
| Copy | DRAFT | `_copywork/calchamber.md` | Longest existing writeup. Derek review needed. |

**Production cost: ~30 min** (image optimization + copy review). No design work needed.

---

### 2. nacwg (NACWG White Paper & Identity) — STRONG

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/nacwg-white-paper.webp` + `nacwg-identity.webp` | Two WebPs available |
| Hero image | READY | `Portfolio-Assets/.../NACWG-Report_Mockup.webp` | Already WebP |
| Body: report cover spotlight | READY | `NACWG-ReportCover_Mockup-Spotlight.webp` | Already WebP |
| Body: identity card | READY | `IdentityCard_Mockup_NACWG.webp` | Already WebP |
| Body: infographic figs | PROCESS | `NACWG_Fig1-MapGlobe.png` through `Fig4` | 4 PNGs, needs WebP |
| Body: brand system slides | PROCESS | `NACWG-BrandingSystem1_Cover.png` through `6` | 6 PNGs |
| Body: animated GIF | PROCESS | `Portfolio-GIF_NACWG.gif` | Page weight consideration |
| Copy | DRAFT | `_copywork/nacwg.md` | Derek review needed. |

**Client folder bonus:** Full final report PDF + brand guide PDF + logo SVGs + infographic PNGs all in `99 Archive/2024/RK_NorthAmericanWorkingGroup/`.

**Production cost: ~30 min** (WebP conversions + copy review). Best-stocked project overall.

---

### 3. symphonic (Symphonic Stories Identity) — GOOD

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/symphonic-stories.webp` | WebP |
| Hero image | PROCESS | `STATIC/SymphonicStories_PosterMockup.jpg` | JPG mockup, needs WebP |
| Body: social cards | READY | `SymphonicStories_SocialCards-small.webp` | WebP |
| Body: brand system slides | PROCESS | `Branding_01-TitleCard.png` through `04-TypographySystem.png` | 4 PNGs |
| Body: animated GIF | PROCESS | `MO-GFX/Exports/SymphonicStories-BrandSystem.gif` | Animated brand reveal |
| Body: brand in use | **CREATE** | — | No mockups showing logo on social/Spotify/etc. context |
| Copy | DRAFT | `_copywork/symphonic.md` | Derek review needed. |

**Client folder bonus:** Full brand guide PDF + logo set (10 colorways, SVG + PNG) in `99 Archive/2024/SymphonicStories/`.

**Production cost: ~1 hr** — WebP conversions (scriptable) + 1 context mockup showing brand in use (Derek design time) + copy review.

---

### 4. studiosun (Studio Sun Bilingual Identity) — GOOD BUT NEEDS MOCKUP

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/studio-sun.webp` + `studio-sun-formal.webp` | Two WebPs |
| Hero image | PROCESS | `Behance_Cover.png` | Behance-format PNG, needs WebP |
| Body: process sketches | PROCESS | `WIP/Working_LogoDesign/StudioSun_Sketch-Scans/scan-pg-*.jpg` | 6+ sketch scans — excellent process content |
| Body: Behance slides | PROCESS | `Behance_Overview/Brief/Colors/Typography/Iconography/MarketFit.png` | 6 PNGs |
| Body: brand in use | **CREATE** | — | No context mockup (website, business card, signage). |
| Copy | DRAFT | `_copywork/studiosun.md` | Detailed process writeup exists. Derek review needed. |

**Client folder bonus:** Full logo package (SVG + PNG at all sizes, 3 colorways) + brand review PDF in `99 Archive/2024/StudioSun/`.

**Production cost: ~1.5 hr** — WebP conversions + 1 context mockup (Derek) + copy review. The sketch scans are a strong storytelling asset.

---

### 5. nokings (No Kings — 4th Amendment Campaign) — GOOD RAW, NEEDS ASSEMBLY

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/nokings-4th-amendment.webp` | WebP |
| Hero image | PROCESS | `V5/Exports/V5_CrownA_CMYK_NoKingsPoster.jpg` | Final poster, needs WebP |
| Body: campaign map | PROCESS | `DeBriefingMap/Exports/26Q1_NoKings-Campaign_Map_SMALL.jpg` | Distribution map |
| Body: poster variants | PROCESS | `26-V1/JPG/` and `26-V2/JPG/` — multiple option previews | Pick 2-3 strongest |
| Body: social posts | PROCESS | `NoKingsForUSA-Post1` through `Post10` — 10 PNGs | Pick 3-4 for a grid |
| Body: editorial cartoons | PROCESS | `EmperorCartoon/Cartoon_V1-V4` — 4 JPGs | Unique — shows editorial range |
| Body: NYT placement proof | **CREATE** | NYTimes-Setup PDF exists but is print specs, not a tearsheet | Need a screenshot or scan of the actual published page |
| Copy | DRAFT | `_copywork/nokings.md` | Derek review needed. Attribution: "Private client" — do not name. |

**Production cost: ~1.5 hr** — WebP conversions + curating which of the many assets to feature + NYT tearsheet capture + copy review.

---

### 6. ioa (IOA E-Mobility Brochure) — MODERATE

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/ioa-emobility.webp` | WebP (was 2.5MB JPG in 26Q2, now optimized) |
| Hero image | PROCESS | `Report-EMobility/Mockups/IOA-EMobility_Brochure1-ENG.jpg` | Multiple language variants available |
| Body: trilingual spread | PROCESS | `IOA-EMobility_Brochure1-ENG/ESP/POR.jpg` | Show all 3 languages side by side |
| Body: poster variants | PROCESS | `IOA-EMobility_Poster1/2/3.jpg` | Large-format poster set |
| Body: climate report | PROCESS | `Report-Climate/Mockups/IOA-ClimateReport_Brochure1/2/3.jpg` | Separate from e-mobility; could be folded in or kept separate |
| Copy | DRAFT | `_copywork/ioa.md` | Derek review needed. |

**Client folder bonus:** Report cover JPG + logo SVGs in `03 IOA/22_IOA_Report/`.

**Production cost: ~1 hr** — WebP conversions + deciding whether to fold climate report content into this case study or keep it separate + copy review.

---

### 7. deputy (IOA Deputy Meeting Poster) — MINIMAL BUT SUFFICIENT

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/ioa-deputy-meeting.webp` | WebP |
| Hero image | PROCESS | `Compressed_IOA_Deputy-Meeting_Poster2.jpg` | Pre-compressed JPG, needs WebP |
| Body: poster variants | PROCESS | `IOA_Deputy-Meeting_Poster1/2/3/4.jpg` | Light/dark A/B variants |
| Body: flat cards | PROCESS | `Poster-Card1.png`, `Poster-Card2.png` | Detail crops |
| Copy | DRAFT | `_copywork/deputy.md` | Derek review needed. |

**Production cost: ~30 min** — Small asset set, all exists, just needs WebP + copy review.

---

### 8. sis (Space Impact Study) — WEAKEST CLIENT PROJECT

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | READY | `26Q2.3/assets/img/work/sis-space-impact-study.webp` | WebP |
| Hero image | **CREATE** | Only NASA stock photo + draft spaceport map exist | No finished hero visual |
| Body: spaceport map | PROCESS | `Graphics/Contracted/spaceport 2025.png` | Original graphic, the one custom visual |
| Body: memo layout | **CREATE** | `Exports/250728_WIP-Memo/SpaceStudy-PolicyMemo-Draft.pdf` | Draft only — need a designed page spread screenshot |
| Body: diagrams | PROCESS | Wikipedia/NASA SVGs (Lagrange points, delta-V) | Not original work — careful with attribution |
| Copy | DRAFT | `_copywork/sis.md` | Attribution: "Self-initiated" — Derek's IP, not client work. |

**Decision needed:** This project is in-progress with only draft outputs. Options:
- A) Ship with minimal assets (spaceport map + memo draft screenshot) and a "research in progress" framing
- B) Defer to v1.1 when more finished deliverables exist
- **Recommendation: Option A** — the in-progress framing is honest and shows depth. But the case study body will be thinner than others.

**Production cost: ~2 hr** — Hero composition from spaceport map (Derek design time) + memo screenshot + copy review.

---

### 9. justtheconstitution — MISSING FROM KIYVIZ, BUILD FROM SCRATCH

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | **CREATE** | — | No WebP exists for this project in any build |
| Hero image | **CREATE** | — | Need a screenshot of the live site, or a designed composition |
| Body: logo options | PROCESS | `ASSETS/JTC_Logo-OptionA-We.png`, `OptionB-W.png` + SVGs | Logo design process |
| Body: site screenshot | **CREATE** | Live at justtheconstitution.org | Take screenshots of the shipped v2 site |
| Body: Spanish version | **CREATE** | Live site has ES toggle | Screenshot showing bilingual capability |
| Body: OG images | PROCESS | `OG-image-JTC1/2/3.png` | Pre-made OG cards |
| Copy | **CREATE** | — | No copywork file exists. Write new: design philosophy, a11y approach, how it became a credibility piece. |

**Production cost: ~3 hr** — Screenshots of live site (easy) + card thumbnail composition (Derek design time) + write new case study copy from scratch.

---

### 10. museum-dte — PLACEHOLDER ONLY IN V1

| Asset | Status | Source | Notes |
|---|---|---|---|
| Card thumbnail | **DEFER** | — | Ship as "coming soon" |
| Hero image | **DEFER** | — | Client anonymized until engagement closes |
| Body | **DEFER** | Proposal SVGs exist but are not portfolio-grade | Wait for engagement to close |
| Copy | **DEFER** | — | "Coming soon — methodology piece shipping Q3 2026" |

**Production cost for v1: ~15 min** — Just a placeholder page with a "coming soon" note.

---

## Photography assets

### KiyD Selections Early 2024 (launch series)

| Asset | Status | Source | Notes |
|---|---|---|---|
| Source file | EXISTS | `F:\PRO\Domestic Projects\Vault-Obsidian\KiyInfo\0_Personal\Ideas\DerekTakesPhotos\KiyD_Selections-Early2024.pdf` | PDF only — no extracted individual images on disk |
| Cover | EXISTS | `KiyD_Selections-Early2024 Cover.pdf` | PDF cover |
| Individual frames | **CREATE** | — | Must extract 8-12 strongest frames from PDF, export as individual files, convert to WebP, caption each |

### Fleeting Power series (potential second series)

| Asset | Status | Source | Notes |
|---|---|---|---|
| Images | PROCESS | `Vault/.../Fleeting Power/Exports-Behance/DerekKiy-FleetingPower-1.jpg` through `-16.jpg` | 16 JPGs, Behance export quality. Needs WebP + captioning |

**Recommendation:** Use Fleeting Power as the launch series instead of (or alongside) KiyD Selections. The Fleeting Power images are already extracted as individual JPGs — zero extraction work needed. The KiyD Selections requires PDF page extraction first.

### Photography production cost

| Path | Labor | Who |
|---|---|---|
| Option A: Fleeting Power only | ~1 hr (WebP conversion + captions) | Derek captions, Claude converts |
| Option B: KiyD Selections only | ~2.5 hr (PDF extraction + curation + WebP + captions) | Derek extracts/curates, Claude converts |
| Option C: Both | ~3.5 hr | Both |

**Recommendation: Option A for v1** — Fleeting Power is 16 ready-to-process JPGs. Ship it. Add KiyD Selections in v1.1.

---

## Writing piece

### No Kings campaign rationale (recommended launch piece)

| Asset | Status | Source | Notes |
|---|---|---|---|
| Source material | PARTIAL | `_copywork/nokings.md` (case study copy) + client folder campaign assets | The case study has the facts; the writing piece expands on the "why" |
| Draft | **CREATE** | — | ~1,200 words. Design-meets-civics narrative. |

**Production cost: ~2-3 hr** — Derek writes (or Claude drafts and Derek edits).

---

## Site-global assets

| Asset | Status | Source | Notes |
|---|---|---|---|
| "Derek Kiy" wordmark (SVG) | **CREATE** | — | Hand-drawn or set in Unbounded. Inline SVG with `fill="currentColor"` for theme adaptation. |
| Favicon (SVG data URI) | **CREATE** | — | Same pattern as KiyViz: inline SVG, zero HTTP requests |
| OG card (1200x630 PNG) | **CREATE** | — | Compose from strongest portfolio image + wordmark |
| Portrait / headshot | PROCESS | `26Q2.3/assets/img/portrait/derek-kiy.webp` | Exists but spec calls for hand-drawn portrait (defer to Procreate pipeline). Ship photo for v1. |
| 404 illustration | **CREATE** or DEFER | KiyViz has `KiyViz_Custom404.svg` | Can adapt or defer to a text-only 404 |

**Production cost: ~2 hr** — Wordmark + favicon + OG card (Derek design time). Portrait can use existing photo for v1.

---

## Total production hitlist summary

### By labor type

| Work type | Who | Est. hours | Notes |
|---|---|---|---|
| **Image processing** (WebP conversion, optimization) | Scriptable (Claude + _optimize.py) | 1-2 hr | Batch-processable |
| **Graphic design** (mockups, compositions, thumbnails) | Derek | 4-6 hr | studiosun mockup, symphonic mockup, sis hero, JTC thumbnail, wordmark, favicon, OG card |
| **Photography curation** | Derek | 1-2 hr | Select + caption Fleeting Power series (or extract KiyD Selections from PDF) |
| **Copy writing** (new) | Derek + Claude | 3-4 hr | JTC case study copy, No Kings writing piece, about page, now page |
| **Copy review** (existing drafts) | Derek | 2-3 hr | Review 8 KiyViz case study BLUF drafts |
| **Web development** | Claude (build session) | 8-12 hr | HTML, CSS, JS, all pages, deploy |
| **Screenshots** | Claude or Derek | 0.5 hr | JTC live site screenshots |

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
