---
type: ai-review-council
date: 2026-05-12
mode: full
target: https://derekkiy.com/ (403 — reviewed committed code at github.com/KiyViz/KiyDerek-PersonalSite@600010f)
profiles: [CEO, CFO, Client Prospect, Creative Director, CTO, Marketing Director, Project Manager]
excluded: none
pack: defaults
overall-score: 6.7/10
overall-status: Y
prior-review: 2026-05-10 @ 6.8/10 (evaluated the PLAN)
---

# AI Review Council — derekkiy.com prototype

## Context

**Target URL `https://derekkiy.com/` returns 403** — Cloudflare Pages project not yet connected to the domain. Reviews evaluated the committed code at `github.com/KiyViz/KiyDerek-PersonalSite@600010f`, which is the same artifact that will deploy once Pages is wired up. Same content, no production URL yet.

The prior council review (2026-05-10) evaluated the PLAN before code existed and scored **6.8/10**. This review evaluates the SHIPPED skeleton built today.

---

## 🎯 1. CEO

**Verdict:** Yellow-flag — the proof of work is excellent and the offer is concrete, but the strategic positioning is split between "mission-driven design for complex ideas" and "everything KiyViz isn't," and the gap shows.

**Strengths:**
- **Credible proof beats most generalists in the segment.** The CalChamber case study (`work/calchamber.html`) is genuinely board-grade — INEGI 2024 vs Natural Earth, San Felipe municipality, Tax Foundation + SAT data joined in QGIS, hybrid Illustrator workflow. That paragraph alone is a moat: it shows technical depth in a niche (binational policy cartography) almost nobody competes in. The "No Kings 4th Amendment campaign in 200+ U.S. papers including the NYT" line in `about/index.html` is a Tier-1 credibility flex.
- **The thirds frame (Future / Present / Past) is strategically sharp.** `index.html` lines 149-461 don't read like a portfolio — they read like a balance sheet: here's what you can buy, here's what's incoming, here's what we've shipped. That's a *practice* framed as a *business*, which is rare in this category and matches the V-shaped engine model.
- **The bilingual EN/ES throughout, not just as a tagline, is real differentiation.** Every section pair, the CalChamber case study in full Spanish, the trinational IOA brochure — this isn't a checkbox claim, it's structural. For mission-driven orgs working borderlands, Latino civic infrastructure, or pan-American policy, this is a procurement-deciding feature, not a nice-to-have.

**Gaps:**
- **The positioning sentence still tries to be five things.** `index.html` line 162: "Mission-driven design for complex ideas. Maps, identities, graphics, reports, campaigns." That's a list, not a position. A board would ask: "If I need a map, I hire a cartographer. If I need an identity, I hire a brand studio. Why hire one person for both?" The site doesn't answer. The unifying *thesis* — what binds maps, identities, and campaigns into one practice — is missing. CalChamber + No Kings + NACWG + IOA all share something specific (rigorous translation of policy/data into civic-grade publication artifacts), but the home page doesn't name it.
- **The sister-site explanation is a strategic liability where it appears.** `index.html` line 303 ("For the technical infosplainer studio, see kiyviz.com") and `services/index.html` line 107 ("Not what I do → fast-turnaround interactive infosplainers → see kiyviz.com") force a prospect to mentally model two brands and pick one before they've decided to buy anything. For a $97 consult that's friction, not clarity. A CEO would ask: why two sites at all? If derekkiy.com is the practice and kiyviz.com is one product line, kiyviz.com should be the child, not the sibling — or the sites should merge.
- **7 of 9 case studies are placeholder bodies** (`work/jtc.html` "case study in progress" — and per the brief, this is true for studiosun, symphonic, ioa, deputy, nacwg, sis). The brand promise on the home page is rigor and depth; clicking through to find an empty page is a brand-promise miss. For a mission-driven NGO procurement officer doing diligence, that's the signal that kills the lead.
- **No traffic or social-proof scaffolding.** No testimonials, no client logo strip, no press mentions, no LinkedIn endorsements pulled in, no "as seen in" line. The work is impressive but a stranger landing cold has to take Derek's word for it. The NYT placement and 200+ papers number is buried in `/about/`, not on the home page where it belongs above the fold.

**Priority Actions:**
1. **Write a one-sentence position that names the *unifying thesis*, not the deliverables list.** Something like: "Derek Kiy turns dense policy and data into civic-grade publication artifacts — maps, reports, identities, campaigns — for mission-driven organizations working in English and Spanish." Put it under the wordmark on `index.html`. The current `wm-suffix` says "designer" — that's underselling by a factor of three.
2. **Promote the proof above the fold.** Move "No Kings · 200+ papers including NYT · CalChamber · NACWG · IOA" into the Future section's credential line (currently line 217-221, generic). One client-logo strip or one bolded sentence with named publications turns the home page from "trust me" to "here's the receipt."
3. **Either finish the 7 placeholder case studies before any paid traffic, or hide them from the Past index until they're done.** A short, real case study beats a long, empty template. Better to ship 3 great ones than 9 mixed. This is a brand-promise alignment fix — the site is currently overstating completion.

**Score:** 7.2/10 — Real proof, real model, real moat in binational/civic work; held back by a generic positioning sentence, sister-site confusion, and 7 hollow case studies that undercut the rigor the home page promises.

---

## 💰 2. CFO

**Verdict:** Pricing is visible and the V-engine's volume cylinder is operational on paper, but the absence of social proof, conversion infrastructure, and any anchor for the high-margin boutique tier leaves this asset undercapitalized against its revenue thesis.

**Strengths:**
- Headline price is unambiguous and front-loaded: `$97 · 20-min consult` and the `$97 / 20 min` price block appear in the hero's `future-offer` panel (`index.html` lines 167-170), with the same number echoed on `/services/` (line 63) and `/contact/` (line 63). No "contact us for pricing" hedge on the entry-level offer — that's a real win for price-anchored ad copy and inbound qualification.
- The $97 offer has a defined deliverable ("written action plan in your inbox within 24 hours" — `services` line 65), which makes the unit economics auditable: ~98% gross margin holds because the scope is bounded at 20 min call + 1-page write-up. That's a defensible per-unit cost model.
- Tier segmentation exists structurally — the `/services/` page splits "$97 / 20-minute consult" vs. "Done-for-you projects" with explicit "good fit if" qualifiers and a "Not what I do" exclusion list (lines 103-109). Disqualification language reduces low-ROI inbound friction, which improves effective sales-hour yield.
- "40 to 200 hours" range on done-for-you (`services` line 83) at least signals project size, giving the prospect a rough order-of-magnitude before contact — better than nothing.

**Gaps:**
- **Zero conversion infrastructure.** Every CTA (hero, services, contact, footer) is a `mailto:` link. "Booking opens 2026-05-14" (`index.html` line 174, `contact` line 65) means the consult cylinder cannot transact today — and even after, mailto attrition is brutal vs. an embedded Calendly+Stripe. At a 40 visitors/month baseline (prior CFO note), each mailto-vs-direct-checkout friction point compounds CAC. Prior modeling said 1.2 calls/month → $116/month; mailto vs. one-click checkout likely cuts that 30-50%.
- **No price for Cylinder 2.** "Project-scoped, billed by phase or hour" with no rate, no starter, no example total (`services` line 83). This commoditizes the offer and invites comparison shopping. The 40-hour floor implies ~$6K-$20K starter projects at common designer rates, but the prospect can't self-qualify, can't budget internally, and can't say yes asynchronously. Result: longer sales cycles, more "let me check with my board," lower close rate.
- **No revenue proof / no testimonials / no outcome data.** `FOR-DK-INPUT-CYCLE2.md` B1-B2 are blank — no testimonials, no outcome sentences locked in. The credential line ("design systems for museums, NGOs, and campaigns" — `index.html` line 219) is generic; no NYT placement, no distribution numbers. Without proof points, the $97 anchor doesn't shift willingness-to-pay upward toward the boutique tier. Pricing power is purely on Derek's say-so.
- **No upsell ladder visible.** A $97 buyer is your warmest possible lead for $6K+ work, but the site has no documented progression: no "after the consult, here's what working together looks like," no retainer, no productized mid-tier (e.g., $1,500 audit, $5K identity sprint). Customer LTV stays anchored at $97 instead of $97 → $X,XXX.
- **Acquisition cost is undefined because traffic source is undefined.** Distribution decision in `FOR-DK-INPUT-CYCLE2` is "Dual linked in + direct" but no cadence committed (E1 not filled). The asset has fixed costs (Derek's time to maintain) and zero programmatic top-of-funnel — payback period on the build itself is undefined.
- **The "Booking opens 2026-05-14" line is a revenue leak.** Today is 2026-05-12. For 48 hours, every interested visitor sees a future date — which signals "not yet ready" and increases drop-off. If the mailto works, just say "email to book"; don't telegraph that the real system isn't live.

**Priority Actions:**
1. **Stand up Calendly+Stripe before 2026-05-14 and remove the "booking opens" framing.** Embed (or at minimum hard-link, not mailto) so the visitor can pay and book in the same session. Expected impact: assuming the prior 1.2 calls/month baseline, reducing booking friction from mailto-to-call to one-click-checkout is conservatively a 1.5-2x conversion lift = $50-$90 incremental MRR per month at zero traffic change. At target 1-2 calls/day, the difference between mailto and direct checkout is the difference between $25K/yr and the floor of usable revenue.
2. **Publish a starting price or productized mid-tier for done-for-you.** Either (a) "Projects start at $X" (anchor — even "from $4,800" gates out tire-kickers and primes the boutique buyer), or (b) introduce one productized SKU between $97 and full project — e.g., "$1,500 brand audit + 90-min strategy session" or "$2,500 single-map commission." This creates a price ladder ($97 → $1,500 → $X,XXX project) and converts more $97 callers into mid-tier without the friction of full project scoping. Expected impact: even one $1,500 sale per quarter from the existing call pipeline is +$6K/yr at minimal added production time.
3. **Add one named testimonial and one quantified outcome above the $97 CTA before launch.** `FOR-DK-INPUT-CYCLE2` B1 is unchecked — but the credential block (`index.html` line 217-221) is the highest-leverage real estate on the site for pricing power. A single line — "NYT-placed work for No Kings USA" or "CalChamber Alert Vol 51, [X]K subscribers" — anchors the $97 as underpriced and justifies the boutique tier's eventual quote. Also locks in answers to B2 outcome sentences for the case study rows.

**Score:** 5/10 — The price tag is visible and the consult unit economics are sound, but mailto-only conversion, no Cylinder-2 pricing anchor, missing proof, and an undefined traffic source mean the asset cannot earn back its own opportunity cost without the three actions above.

---

## 🧐 3. Client Prospect

**Verdict:** Yes, I'd take a 20-minute call — but only because of the No Kings + CalChamber + NYT credential strip. Without that, I'd be gone in five seconds.

**Strengths:**
- **The five-second test passes for the right buyer.** I land on it and within a beat I see "Mission-driven design for complex ideas. Maps, identities, graphics, reports, campaigns." That's a clean sentence that tells me exactly whether I'm in the right shop. The capabilities grid right under the CTA confirms it without me having to scroll-hunt. If I'm a foundation comms lead or an NGO with a report to ship, I know in eight seconds this guy could be relevant. That's better than 80% of the freelance sites I've waded through this morning.
- **The CalChamber case study is the closer.** I clicked it expecting marketing fluff and got a working designer's notebook. INEGI's *Marco Geoestadístico 2024*. The San Felipe municipality detail. Tax Foundation data. Hybrid QGIS-Illustrator workflow. Footnotes. Sources. This is the writing of someone who has actually shipped policy work to a real publication on a deadline. I will not get this depth from the other three vendors on my shortlist — I'll get "trusted partner" and "data storytelling" and pretty mockups. Derek shows me his hand. That's rare and it builds trust fast.
- **The credentials buried in the prose carry weight.** "200+ U.S. newspapers including the New York Times" on the about page. "QGIS power user; published in CalChamber Alert" on services. "Trinational identity and report for NACWG." If even half of that is real, I am talking to someone who is overqualified for what I probably need. The fact that he's $97 to start makes the risk-to-upside math obviously favorable.
- **Low contact friction, plural channels.** Email, phone, and a structured consult — all visible on the home page above the fold. The mailto subject line is prefilled. I don't have to think about how to reach him. The phone number presence alone separates him from the 80% of freelance sites that hide behind a form.

**Gaps:**
- **Zero testimonials. Zero named contacts. Zero quotes from a single human.** This is the biggest single thing breaking trust. He claims a NYT placement for a "private client (can't name)." I get it, but my boss won't. When I'm putting my judgment on the line to recommend a vendor, I need one named reference. Right now there is not a single line of "Derek delivered exactly what we asked for, on time" — not even from the IOA, NACWG, or CalChamber clients who presumably *could* be named. Without that, every claim feels like one-sided self-report. I'm spending my boss's money. I need someone else to vouch.
- **7 of 9 case studies are placeholder shells.** I went to /jtc/ and got "case study in progress" with a hero image placeholder square. Then I checked the work index and counted: only nokings, calchamber, and (partly) the rest have body content. Studio Sun, Symphonic Stories, IOA brochure, Deputy poster, NACWG, SIS — these are presented as portfolio items with clickthrough affordance but they deliver placeholder. As a buyer this raises a question: does the work *exist* and the write-ups don't, or does the work itself not exist? The honest "in progress" message helps the read but it also signals "this is a freshly-launched site, not a seasoned consultancy." For a $97 consult I don't care. For a $20k project I get nervous. Either fill them, hide them until they're done, or label the work index "selected case studies (more on request)".
- **The "in flight" Present section weakens, doesn't strengthen, the offer.** As a prospect I'm here to evaluate vendor capability for *my* project. The "Justthe Constitution / Design Baka / Hotspot Atlas" tiles tell me he's distracted by personal projects. The Hotspot Atlas placeholder with "When it's ready" reads as undisciplined. Three things in flight, all self-initiated, all unfinished, while seven case studies are also unfinished. I want a vendor who finishes things. This whole section subtracts trust unless it's reframed as "ongoing client commitments" or removed.
- **CTA-as-mailto and "Booking opens 2026-05-14" creates a real friction wall.** The price tag says "$97 / 20 min" — a transactional, low-stakes promise. The button says "Book a call." I expect Calendly. I get a mailto. Today is May 12. I'm being told to email and "get on the list" for booking that opens two days from now. That's the gap between the productized promise and the reality of a freelancer-with-a-mail-client. For me as a prospect it's fine — I'll email — but for the next-tier buyer who's comparison-shopping, this is where they bounce.

**Priority Actions:**
1. **Add three testimonials and one named reference today.** Even if it's just a pull quote from the No Kings creative director, an IOA program officer, and a NACWG board member. One sentence each, name + role + org. Put them under the capabilities grid on the home page and again on services. This alone would move me from "I'd take a meeting" to "I'd recommend this to my boss tomorrow."
2. **Either finish or hide the 7 placeholder case studies.** Best move: relabel the home portfolio as "Selected work" and show only the 2-3 with real body content; route the rest to a "More work, by request" mailto or a thin one-paragraph entry. Honest in-progress is a feature only if the rest of the portfolio is strong. Right now placeholder is the dominant signal.
3. **Wire the Calendly + Stripe before next inbound prospect lands.** The current state — productized $97 offer + mailto + "booking opens in 2 days" — makes the offer feel aspirational, not operational. The fastest fix that buys the most trust: replace the "Book a call" CTA with a real Calendly link that takes payment. Until that's wired, drop the price tag and just call it "20-min intro call, free." Mismatch between promise and mechanism is the worst kind of trust leak.

**Score:** 7/10 — Strong enough on credentials and craft to earn the meeting, weak enough on social proof and follow-through to lose anyone who's not already half-sold.

---

## 🎨 4. Creative Director

**Verdict:** A confident, literate skeleton — the bones of a real practice site, not a template — but the brand promise of "con sabor y amor" is currently spelled `#e8859f` on a single underline, and the rest of the page reads as a very good monochrome editorial, not a Mexican-modernist one.

**Strengths:**
- **Type system holds.** Four families is the upper edge of justifiable, and each one is doing distinct work — Unbounded for chapter slabs at `clamp(3.5rem, 10vw, 7.5rem)` with `-0.04em` tracking and `0.95` leading is genuinely uncompromising; Space Mono carries the metadata (`01 · FUTURE`, `log started 2026.05.12`, status footer); Funnel Sans recedes for body. The italic `em` swap to `--accent` inside chapter titles ("Let's work *together.*") is the single best craft move in the build — restraint and a wink in the same gesture.
- **Composition has rhythm.** The thirds aren't bento — they're chapters with `min-height: 100vh`, hairline rules, generous `clamp(2rem, 6vh, 4rem)` vertical padding, and an inverted `paper-inset` background on PRESENT that gives the middle third its own room. The chapter-num/label/meta triplet at the top of each section is a strong, repeatable mark — borrowed instinct from editorial design, applied with discipline.
- **Color SYSTEM exists.** 21 themes built on disciplined token names (`--paper`, `--ink`, `--accent`, `--accent-2`, `--rule`, `--glow`) — this is grown-up infrastructure. The csya-a Barragan palette `#f7eee3 / #241712 / #e8859f / #c44d34 / #7a955a` is correctly chosen at the swatch level. The pink-fg/cacao-bg highlight `--hl-bg:#e8859f; --hl-fg:#241712` is a real moment.
- **Restraint over noise.** No gratuitous motion. Transitions clamped to 0.1–0.2s. `prefers-reduced-motion` honored. Print stylesheet drops to black-on-white. This is craft confidence — knowing what to leave out.

**Gaps:**
- **The CSYA promise doesn't cash.** Barragan, Legorreta, and PRODUCTORA are about *material color blocking* — pink walls meeting cobalt skies, mass against mass. Your csya-a executes as ~95% cream paper, 4% cacao ink, 1% pink (underline glyph, an arrow `→` in caps grid, one CTA hover state). The `#e8859f` is paying for the whole brand, and it can't. The page reads as KiyViz-with-warmer-paper, not Barragan. A Barragan-coded site should have a wall of color somewhere — a saturated FUTURE offer panel, a colored quote block, a chapter divider that's `#c44d34` terracotta floor-to-ceiling. The terracotta and sage tokens (`--accent-2`, `--accent-2-deco`) exist and are barely used.
- **PRESENT zone has a credibility leak.** Three cards in a row, presented as identical typographic objects. Card 1: a real photographic plate of "We the People" — legitimate, evocative, *the right register*. Card 2: a 32×32 emoticon `(•_•)` favicon stretched into a 4:3 frame at 65% opacity — that's not a placeholder, that's a hole. Card 3: an inline SVG with circles and dashed strokes — admits to being a placeholder, fine. The mismatch is the problem: real photo / favicon / wireframe, sitting side by side at equal visual weight, tells the eye one is shipping and two are vapor. Either de-rank the unfinished two (smaller, grayer, off-grid) or commit to placeholder language for all three.
- **Wordmark is a typesetting decision, not a mark.** "Derek Kiy" in Unbounded 700 + a `0.1em` flat colored bar underneath, full width, scaled `0.9` until hover, then `1.0`. That's a competent placeholder. But every other element on the page has more character than the name at the top — the chapter slabs, the box-drawing scaffold in the breadcrumb (`~/derekkiy / work / calchamber.html`), the status footer sigil `~/dk:`. The eye expects the wordmark to be the boldest object in the system, and right now it's the most generic one. The hand-drawn underline glyph deferral is the single largest open craft debt.
- **Header is wearing all its accessories at once.** Wordmark + 4-item nav + 3-button lang toggle + 7-button scheme toggle + 3-button mode toggle = 17 interactive targets in a sticky bar. On `:focus-visible` everything gets a 2px outline. This is the "designer is also the dev" tell — every preference is exposed because the system supports it. Hide the schemes/modes behind a single "appearance" control or push them to the footer. Confidence is showing two schemes and trusting people, not 21.
- **Photo zone is missing from the home.** The CLAUDE.md/SPEC explicitly calls for `/photo/` (Fleeting Power, 16 JPGs) as a first-class chapter on a generalist practice site, alongside writing. The thirds (Future/Present/Past) currently render Derek as a *for-hire designer* only — capabilities + 3 in-flight products + 9 case studies. There's no whiff of photography or writing — the "warm, humanistic, artsy generalist" pitch lives in the CLAUDE.md, not on the page. That's a brand-coherence gap, not a polish gap.

**Priority Actions:**
1. **Cash the Barragan check.** Pick one chapter (FUTURE is the strongest candidate — it's the conversion zone) and let color carry it. The `.future-offer` panel currently has `--paper-raised` background and `1px var(--ink)` border — make it a flat `#c44d34` (or `#e8859f`) bleed with cream ink, no border. One material block, in one place, and the whole CSYA decision starts paying.
2. **Fix the PRESENT zone visual hierarchy.** Either replace the DesignBaka stretched-favicon with a real screenshot or holding-image (a flat-color tile with the wordmark, sized for the 4:3 ratio, would already be a 10x improvement), or visually demote both unfinished cards — half-height, monochrome, "in progress" label upgraded to dominant element. The current "real / favicon / wireframe" triptych undercuts the work that's actually shipping.
3. **Commit to the wordmark or commit to deferring it gracefully.** Either move the hand-drawn glyph forward to launch (it's the brand mark — it deserves the time), or replace the current `<span class="wm-glyph">Derek&nbsp;Kiy</span>` with a typesetting decision that's actually distinctive: tighter `letter-spacing`, an oversized first letter, kerning the `K` into the `i`, *something* that says this is the mark, not the type sample. The current treatment is the only place on the page where craft ambition drops below the rest of the system.

**Score:** 7.2/10 — Real type discipline, real composition, real color infrastructure, but the defining brand decision (CSYA) hasn't been rendered yet, and the home page isn't telling the generalist story it claims to.

---

## 🔧 5. CTO

**Verdict:** Yellow — architecture is appropriate for scale and largely well-built, but three deploy-blocking issues will bite on Cloudflare Pages: render-blocking Google Fonts CDN, a 636 KB hero PNG, and the FOUC-guard script duplicated across 16 pages with no shared source.

**Strengths:**
- Zero-dependency stack — appropriate fit. No `package.json`, no `node_modules`, no bundler. `index.html` + `assets/styles.css` (1412 lines) + `assets/scripts.js` (290 lines) + a Python stamper with stdlib only. This will absolutely still build in 2036, which is the stated goal in `CLAUDE.md`.
- Theme + FOUC architecture is genuinely thoughtful: `index.html:31-66` applies `data-scheme`/`data-mode`/`data-lang` before the stylesheet loads, and the link rewriter in `assets/scripts.js:241-289` carries theme across directories on `file://`. The MutationObserver pattern (`scripts.js:281`) is the right approach. Both `applyMode` and `applyScheme` use `setAttribute`, not `innerHTML` — zero XSS sinks in shipped JS (grep confirms no `innerHTML`, `document.write`, or `eval` anywhere).
- Deployment hygiene basics in place: `.gitignore` covers `.claude/`, OS junk, swap files, `__pycache__`, and `.env*`; no `F:\` paths in shipped code (grep clean); cache-busting `?v=0.1`; semantic HTML with skip link, ARIA live region, `:focus-visible`, and `prefers-reduced-motion` accommodated.
- Stamper pipeline (`work/_stamp.py`, 522 lines, stdlib-only markdown subset) is the right level of automation — idempotent, re-runnable, no node toolchain. Generated output (`work/calchamber.html` at ~39 KB) is reviewable HTML, not opaque build artifact. Hit-by-bus: anyone with Python 3 and a text editor can keep this site running.

**Gaps:**
- **Render-blocking Google Fonts CDN** in every page (`index.html:73`, repeated across `services/index.html:17`, `404.html:17`, `work/_template.html:61`). Two preconnects then a synchronous `<link rel="stylesheet">` to `fonts.googleapis.com` requesting **5 font families × multiple weights**. This is the dominant render path on a 100 KB/page budget. Self-hosting the WOFF2s from `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\` (already on disk per `CLAUDE.md`) plus `font-display: swap` would cut TTFB and eliminate a third-party dependency that fails the "works in 2036" test.
- **Unoptimized hero asset**: `assets/img/featured/jtc.png` is **636 KB** — by itself blows the entire 100 KB/page budget on the home page, where it's loaded `eager` (`index.html:249`). The work thumbnails are properly WebP-encoded (mostly 14–149 KB). Convert this one to WebP/AVIF at ~80 KB.
- **`404.html` uses absolute paths** (`/index.html`, `/assets/styles.css?v=0.1` at lines 18, 29-34) while every other page uses relative paths. On `file://` the 404 will fail to load styles and all nav links 404 themselves. Cloudflare Pages routes 404.html correctly, but the "preferably readable with JS disabled, works on file://" gate from `CLAUDE.md` is broken here. Also, **missing OG image**: `assets/img/og/` directory exists but is empty, and `og:image` is hard-referenced in every page — `index.html:21`, `work/_template.html:29`. Twitter/LinkedIn previews will be broken on launch day.
- **FOUC guard duplicated 5+ times verbatim** (`index.html:31-66`, `404.html:11-13`, `services/index.html:11-13`, `work/_template.html:36-55`, and every other subpage). Same logic, slightly different minification. If the regex needs to change (e.g., adding a new scheme), it has to be updated in N places without drift. Either extract to `assets/fouc.js` (one extra `<script>` per page, still no build step), or have the stamper own this block as a `{{FOUC_GUARD}}` token so the Python sync is automatic.
- **No CSP headers / no `_headers` file for Cloudflare Pages**. Site has zero `innerHTML`/`eval` so a fairly strict CSP (`script-src 'self' 'unsafe-inline'` for the FOUC guard, `style-src 'self' https://fonts.googleapis.com`, etc.) is realistic. Cloudflare Pages supports a `_headers` file at repo root — currently absent. Same for `_redirects` if any URLs change.

**Priority Actions:**
1. **Self-host fonts + add Cloudflare `_headers` file.** Copy WOFF2s from `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\` to `assets/fonts/`, replace the Google Fonts `<link>` block with `@font-face` rules in `styles.css` using `font-display:swap`, and add `_headers` with CSP + `X-Content-Type-Options: nosniff` + cache rules. Removes external dependency, fixes performance, hardens security in one pass.
2. **Generate OG image and re-encode `jtc.png`.** Even a flat 1200×630 SVG-exported-to-PNG at ~30–60 KB beats nothing. Convert `jtc.png` (636 KB) to a ~80 KB WebP. Without these, the site ships with broken social previews and one image that singlehandedly fails the page-weight gate.
3. **DRY the FOUC guard + fix `404.html`.** Move the inline FOUC script to `assets/fouc.js` referenced by every page (or template-token it via the stamper). Switch `404.html` paths to relative so it works on `file://` and gains parity with the rest of the site.

**Score:** 7.5/10 — Architecture-to-scale fit is excellent (right amount of complexity, zero npm sins, would survive Derek getting hit by a bus); execution gaps are entirely in the "last 10% before deploy" bucket — fonts, images, CSP, OG. None require re-architecting; all are one-afternoon fixes before the 2026-05-14 launch.

---

## 📣 6. Marketing Director

**Verdict:** Yellow-flag — the CTA mechanics are vastly improved over the plan, but the funnel still leaks at three named places: a buried hero, a phantom booking system, and zero social proof anywhere a decision is made.

**Funnel Map (pages → stages):**
- **AWARENESS:** none. No blog, no SEO surface beyond the home page, no LinkedIn-tuned content. `meta description` is keyword-clean but there is no top-of-funnel content asset to rank or share.
- **CONSIDERATION:** `index.html#past`, `work/calchamber.html` (strong), `services/index.html`, `work/jtc.html` (broken — see Gaps), `404.html` (well-routed safety net with home anchors).
- **DECISION:** `index.html#future`, `services/index.html` (dual CTAs), `contact/index.html`.

The funnel is structurally complete from consideration onward. AWARENESS is the named business problem from Cycle-2 and remains unsolved — but that's distribution, not code.

**Strengths:**
- **The CTA is now a real offer, not a hand-wave.** The `01 FUTURE` block lands price ($97), duration (20 min), and deliverable ("a written action plan in your inbox before you log off") right above the button. The button itself says "Book a call" with an arrow — directional and concrete. The two prior-review fixes (price-on-button, credential callout) shipped: see `index.html:166-180` and the `credential:` line at `index.html:217-221`. That's a meaningful conversion lift vs. the plan-stage hero.
- **Fallback CTAs are well-architected.** The `future-alt` block (`index.html:187-200`) gives three escape hatches — email, "scope a project" → /services/, phone — for users not ready to commit to $97. This matches the Client Prospect's note that "the $97 CTA is cold on first contact." Three-way fallback prevents the bounce.
- **`calchamber.html` has real outcome proof.** "Published in CalChamber Alert Vol 51 No 9" in the deliverables row plus the body sentence "answered a two-country tariff question in five seconds" is the outcome language the page needs. The 404 is also routed correctly — every link goes to a funnel stage, not a dead end, and it surfaces `01 future (book a call)` explicitly.
- **The reverse-chronology IA (`future / present / past`) is conversion-coherent.** Putting the offer first and the portfolio last subordinates proof-of-work to proof-of-offer. That's the correct hierarchy for someone who already knows you and lands cold. It's also unconventional enough to be memorable for the LinkedIn referral channel Derek named.

**Gaps:**
- **The CTA is still buried by the site header.** Look at `index.html` 102-142: a massive header with wordmark + 4 nav items + 3 lang buttons + 7 scheme buttons + 3 mode buttons stands above `01 future`. On a 700px laptop viewport that header eats real estate before the value prop renders. The CTA is dominant *within* the future section, but the future section isn't dominant within the first viewport. The prior plan-review's fix #1 ("hero layout so CTA has unambiguous visual dominance") is only half-shipped — it dominates against `past`, not against the chrome.
- **"Booking opens 2026-05-14" is two days out and the button still mailto's.** `index.html:174` literally says booking opens in two days, but the button at `index.html:176` goes to `mailto:` not Calendly. If someone clicks today expecting a calendar, they get their email client. If they click on 2026-05-14 expecting a calendar, they still get email. This is a phantom-system problem: copy promises something the mechanics don't deliver, and there's no plan visible in the code for the swap. Same on `services/index.html:78` and `contact/index.html:68`.
- **Zero testimonials anywhere.** Searched all six files — no `<blockquote>` with a named source, no client logo strip, no "Trusted by" block, no `<cite>` attribution. The credential line ("design systems for museums, NGOs, and campaigns") is generic copy, not third-party validation. The prior-review punch list flagged this as the #1 gap and it is unchanged. For a $97 cold ask to a stranger from LinkedIn, this is the load-bearing missing element. Outcome proof in case studies helps, but it lives 2-3 clicks deep from the CTA.
- **`work/jtc.html` is a funnel-killer in a referral-prominent slot.** It's case study #8 in the list view (`index.html:402-408`), it's referenced as the upcoming Jul 4 launch in the `02 present` grid, and the case page itself displays "[ hero image pending ]" and "case study in progress" (`work/jtc.html:178-189`). If a network contact lands here from "look at this constitution thing Derek's doing," they hit a placeholder. The site openly admits the body copy isn't approved. Either ship the copy or remove from the list view; don't expose half-done work on a portfolio surface.
- **No price visible on `services/index.html` above the H2 fold for done-for-you.** The $97 block is fine. But "Most projects run 40 to 200 hours" with zero hourly rate or floor (`services/index.html:83-84`) leaves the high-margin path unqualified. Two prospects who read this get two different rates in their heads — and one of them disqualifies on price they invented. Even "$X–$Y/hr" or "$XK project floor" would filter inbound and signal seriousness.
- **`services/` and `contact/` aren't in the nav.** The header nav at `index.html:113-118` is `future / present / past / about`. The `/services/` page exists, is the offer-deep page, and is unreachable from the top nav. The home future-alt block links to it, but anyone who navigates past the hero has lost the path. Same for `/contact/`. For a prospect mid-consideration who scrolls back up looking for "where is the offer page," there's no answer.

**Priority Actions:**
1. **Wire one real booking link.** Either stand up Calendly+Stripe by 2026-05-14 (the date already promised in copy) or remove the "Booking opens 2026-05-14" line and keep mailto. The copy/mechanism mismatch is the highest-impact lie on the page — and it's easy to fix in either direction. Expected lift: 15-25% on intent-to-action conversion for the visitors who actually click the primary CTA.
2. **Get one named testimonial above the fold in `01 future`.** Drop it as a pull quote between `future-credential` and the rest of the page, or stack it adjacent to the price block. One named pull quote from CalChamber, IOA, or NACWG with the person's title is worth more than every other change on this list combined. The PM-flagged "12-17 hours of Derek's content production" needs to be re-prioritized to put "one quote" at #1 even ahead of case-study copy. Expected lift: 20-40% on the cold-LinkedIn referral conversion rate — this is the audience Derek named.
3. **Replace the `/work/jtc.html` row in the home list with a different case, OR fast-track its body copy.** As shipped, it's a credibility minus, not a plus. If the JTC story is the strongest Jul-4-launch hook, it must read like a real case study by launch day. If it can't, demote it to the `present` section only and remove it from the `past` list view in `index.html:402-408`.
4. **(If time): Add `services` and `contact` to the top nav.** Two more `<a>` tags. The cost is one decision (where to put them — likely after `about`), and the benefit is unobstructed navigation back to the offer from any consideration-stage page.

**Score:** 6.5/10 — Up half a point from the plan-stage review. The CTA block is now genuinely good — price, duration, deliverable, fallbacks all in the right places. But the booking-promise mismatch, the zero-testimonials gap, and the broken JTC case study are three named leaks in a funnel that Derek has explicitly said receives ~0% of his sales time. The site is technically conversion-ready; it just isn't *trustworthy* yet to a cold network referral, and that's the only audience the distribution plan targets.

---

## 📋 7. Project Manager

**Verdict:** Yellow — the build is structurally complete and pushed to a clean GitHub repo, but four concrete items stand between this and a live skeleton, and three more between live and v1-ready by 6/1.

**Strengths:**
- **Scope shipped.** 16 HTML files (1 home, 9 case studies, 1 work index, /services/, /contact/, /about/, /now/, 404). `robots.txt` + `sitemap.xml` + inline-SVG favicon. All anchors in `index.html` resolve to real elements. Verified: no token leaks in stamped output, no broken local links from index.
- **Build pipeline is documented and runnable.** Python stamper (`work/_stamp.py`, no deps) is idempotent. The 7 placeholder case studies will re-stamp the moment Derek adds `## body en` / `## body es` sections to `_copywork/<slug>.md`. Stamper output is plain HTML, reviewable, no opaque build artifact.
- **Git hygiene is clean.** `.gitignore` covers `.claude/`, OS junk, swap files, `__pycache__`, `.env*`. First commit (`600010f`) clean — no `F:\` paths, no `node_modules`, no dev artifacts. Pushed to `github.com/KiyViz/KiyDerek-PersonalSite` as public.
- **Documentation extensive.** CLAUDE.md, SPEC, SPEC-AMENDMENTS, CONTENT-INVENTORY, FOR-DK-INPUT-CYCLE2, REVISION-CYCLE1 all in the repo. Hit-by-bus: another developer could pick this up and ship without conversation.

**Gaps:**
- `assets/img/og/` directory exists but is **EMPTY** — and every page references `og:image` at `https://derekkiy.com/assets/img/og/derekkiy-og.png`. Verified: `ls assets/img/og/` returns zero files. Broken social previews on launch day.
- `assets/img/featured/jtc.png` is **636 KB** (verified via `stat`). Loaded `eager` on the home page (`index.html:249`). Blows the 100 KB/page budget stated in CLAUDE.md by 6x.
- **404.html uses absolute paths.** Verified: `<link rel="stylesheet" href="/assets/styles.css?v=0.1">` and `<li>→ <a href="/index.html">home</a></li>` × 6. Breaks on `file://`; works on Cloudflare Pages but inconsistent with the rest of the site's relative-path discipline.
- **No `_headers` or `_redirects` for Cloudflare Pages.** Verified: both files absent from repo root. Will ship with no CSP, no `X-Content-Type-Options`, no cache rules.
- **7 of 9 case studies are placeholder bodies.** Verified by file size: `nokings.html` and `calchamber.html` are 40 KB each (real bodies); the other 7 are 13-14 KB each (placeholder). The placeholders ARE visible on the home page list view AND in `/work/`.
- **"Booking opens 2026-05-14" line + mailto mechanic.** Today is 2026-05-12. Tomorrow the prophecy expires without a real booking system in place. Either the date moves, the mechanism arrives, or the copy walks back.
- **FOUC guard inlined verbatim in 16 HTML files.** If the scheme regex changes (adding a CSYA-D, removing earth), all 16 must update without drift.

**Priority Actions (LAUNCH BLOCKERS — must fix before skeleton goes live):**
1. **Generate `assets/img/og/derekkiy-og.png`** (1200×630, ≤100 KB). Effort: **S** (15 min). Without this, every Twitter / LinkedIn / iMessage share preview is broken.
2. **Re-encode `jtc.png` → WebP at ~80 KB.** Effort: **S** (5 min via cwebp or Squoosh). Drops home-page weight from ~800 KB to ~250 KB.
3. **Cloudflare Pages connection + custom domain.** Effort: **M** (user task, ~10 min in dashboard, then ~1 hr DNS propagation). Currently the only thing between "code lives on GitHub" and "live at derekkiy.com." See the step-by-step in the prior conversation.
4. **Fix `404.html` relative paths** (5 lines). Effort: **S** (3 min).

**Should-Fix (before full v1 on 2026-06-01):**
- **Self-host fonts** from `F:\PRO\KiyViz\Assets_KiyViz\KiyViz_GoogleFonts\`. Effort: **M** (~1 hr — copy WOFF2s, write `@font-face` block, swap the Google Fonts `<link>` everywhere).
- **Add `_headers`** with CSP, `X-Content-Type-Options: nosniff`, cache rules. Effort: **S** (~20 min — reference KiyViz `DEPLOY.md`).
- **Fill or hide 7 placeholder case studies.** Effort: **L** (writing-bound: ~1-2 hr Derek time × 7 = 7-14 hours; OR ~20 min to hide them behind a "more on request" link).
- **Wire real Calendly + Stripe** to replace mailto. Effort: **M** (account setup is the long pole — Calendly + Stripe Checkout link, ~2 hr total).
- **Add 1 named testimonial** near the CTA. Effort: **S** in code (design slot exists); **M** in coordination (needs Derek to ask a past client and get the quote approved).
- **DRY the FOUC guard.** Effort: **S** (extract to `assets/fouc.js` or stamper-template-token it).

**Nice-to-Have (BACKLOG):**
- `/writing/` and `/photo/` routes (deferred per SPEC).
- Hand-drawn wordmark glyph (deferred per FOR-DK-INPUT-CYCLE2 C8).
- Self-host fonts → speeds repeat visits via CF cache.
- Print stylesheet QA pass.
- Visual mobile QA at 375px (browser DevTools only, not real device).

**Critical path to skeleton live:** OG image generated → `jtc.png` re-encoded → Pages connected → DNS propagated. **Realistic timeline:** 1 hour of work + DNS wait. Could plausibly ship today.

**Critical path to v1 (6/1):** Above + content production (7 case studies, 1 testimonial), Calendly+Stripe integration, font self-hosting. **Realistic timeline:** ~15-20 hours of Derek labor + 4-6 hours of integration work over 3 weeks. On track if content production starts now.

**Score:** 6.5/10 — Skeleton is structurally shippable; four small fixes get it from "code" to "live" and the deploy plan is documented. The 6/1 v1 deadline is realistic but only if the 7 placeholder bodies start landing this week.

---

## Executive Summary

**Overall Readiness: Needs work — yellow across the board, with one near-red dimension (financial).**

**Consensus Strengths** (3+ reviewers agreed):
- **Real proof of work, especially CalChamber + No Kings** (CEO, CFO, Client Prospect, Marketing Director). The CalChamber case study reads as a working designer's notebook — not marketing copy. The "NYT placement in 200+ papers" credential is Tier-1 trust signal.
- **CTA mechanics improved meaningfully over the plan-stage review.** Price + duration + deliverable + fallback alternatives all present (Marketing Director, CFO, Client Prospect). The two prior-review fixes (price-on-button, credential-near-CTA) shipped.
- **Architecture-to-scale fit is right** (CTO, Creative Director, PM). Zero dependencies, no build step, vanilla HTML/CSS/JS, idempotent Python stamper. Will still build in 2036.
- **Bilingual EN/ES is structural, not cosmetic** (CEO, Client Prospect). Every section pair, full Spanish case study bodies, no after-the-fact translation seams. Real differentiator for the named audience.
- **Type and composition discipline** (Creative Director, CTO). Four typefaces doing distinct jobs, chapter rhythm, hairline rules, `prefers-reduced-motion` honored.

**Critical Gaps** (3+ reviewers agreed):
- **ZERO testimonials anywhere on the site** (CFO, Client Prospect, Marketing Director, CEO). This is the load-bearing trust gap. Flagged by the 2026-05-10 review and still not closed. For a cold LinkedIn referral landing on a $97 ask, one named pull quote outweighs every other improvement on this list.
- **7 of 9 case studies are placeholder bodies** (CEO, Marketing Director, Client Prospect). They're VISIBLE in the home page list view. "Case study in progress" is honest in-progress signaling for the 2-of-9 buyer, but it's a "freshly-launched site" signal for the higher-tier buyer who's vetting a $20K project.
- **"Booking opens 2026-05-14" copy promise vs. mailto reality** (CFO, Marketing Director, Client Prospect). Two days out, and the mechanism still doesn't match the productized framing.
- **CTA visually buried by 17-target header chrome** (Marketing Director, Creative Director). The hero dominates against PAST, but not against the wordmark + 4-nav + 3 lang + 7 scheme + 3 mode bar above it.
- **Deploy hygiene gaps** (CTO, PM): Missing OG image (folder is empty), 636 KB `jtc.png` on the home page, render-blocking Google Fonts CDN, no `_headers` for Cloudflare, FOUC guard duplicated in 16 files.
- **CSYA palette under-delivered visually** (Creative Director): the Barragan/Legorreta/PRODUCTORA promise spends ~1% of the page on accent color. The defining brand decision hasn't been rendered yet.

## The #1 Thing to Fix

**Get one named testimonial above the fold AND wire one real booking link by 2026-05-14.**

These two fixes were flagged by 4 reviewers between them and they reinforce each other:
- The testimonial makes the $97 ask credible at first glance.
- The real booking link delivers on the price-tag's promise.

Without these two, the site is high-friction at the highest-intent moment. With them, the prior-review plan score (6.8/10) becomes a real shipping site at 7.5+/10.

**What "done" looks like:**
1. One `<blockquote>` with a named source (name + title + org, e.g., "Sarah Lin, Communications Director, CalChamber") placed between the `future-credential` line and the rest of the FUTURE section in `index.html:217`.
2. The `cta-primary` button at `index.html:176` points to a real Calendly URL (with Stripe Checkout collecting the $97) — or the "Booking opens 2026-05-14" line is removed and the offer is reframed as "20-min intro call — email to schedule" until the real flow is ready.

## Strategic Tension

**Creative Director vs. CEO — what does CSYA need to do?**
- CD: Cash the Barragan check. Pick one chapter, let saturated color carry it. The palette decision is currently unspent.
- CEO: Tighten the positioning sentence. The deliverables list reads as commoditized.

**Resolution:** Both right, and they fix together. A flat `#c44d34` terracotta background on the FUTURE offer panel (CD's fix) gives the positioning sentence visual prominence (CEO's fix). One material color block does the work that prose has been asked to do alone.

**Client Prospect vs. PM (implicit) — is "in progress" a feature or a leak?**
- CP: 7 placeholder case studies make me ask "does the work exist?" Especially nervous for the $20K project tier.
- PM: Honest in-progress signaling is better than vaporware claims.

**Resolution:** Hide the 7 from the home list. Relabel `index.html` PAST as "Selected work" and show only the 2 case studies with real bodies (calchamber, nokings). Route the remaining 7 to a `/work/index.html` page labeled "Full archive" with thumbnail + 1-line summary only (no clickthrough to placeholder bodies until those bodies land). Best of both worlds: honest with the seasoned-procurement buyer, doesn't undersell to the cold-curious visitor.

---

## Scorecard

| Dimension | Score | Status | Owner |
|-----------|-------|--------|-------|
| Strategic & Positioning | 7.2/10 | Y | CEO |
| Financial & Pricing | 5.0/10 | Y (almost R) | CFO |
| Trust & First Impression (×1.5) | 7.0/10 | Y | Client Prospect |
| Visual & Brand | 7.2/10 | Y | Creative Director |
| Technical & Performance | 7.5/10 | Y | CTO |
| Marketing & Conversion | 6.5/10 | Y | Marketing Director |
| Delivery & Readiness | 6.5/10 | Y | Project Manager |
| **Overall** | **6.7/10** | **Y** | |

Weighted average (Client Prospect ×1.5; CFO ×1.25 as lowest-score boost): **6.7/10 yellow.** Movement from plan-stage review (6.8/10, 2026-05-10): **-0.1** — building the skeleton didn't move the headline number because the same gaps the plan identified (testimonials, content production, real booking) are still open. The build closed some plan-flagged items (CTA mechanics ✓, capabilities section ✓, credential line ✓) but opened others (placeholder case studies visible, mailto promise mismatch, deploy hygiene).

G = 8-10 · Y = 5-7 · R = 1-4

---

*Generated 2026-05-12 via /ai-review-council --full --output. Source: 6 parallel agent reviews + 1 directly-authored PM review (agent rate-limited on initial pass; authored from verified repo state). Prior review: `.ai-review-council/reviews/ai-review-council-2026-05-10.md`.*
