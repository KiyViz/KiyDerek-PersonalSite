# derekkiy.com — Executive Summary

**Prepared:** 2026-04-29
**For:** Derek Kiy
**Companion docs:** `SPEC.md` (full website spec) · `RESEARCH-FINDINGS.md` (raw evidence)

---

## TL;DR (60 seconds)

You bought `derekkiy.com` and now need to use it. After reading the Obsidian vault, the active client folders, the KiyViz design system, and the S07 coaching update, the recommendation is:

> **`derekkiy.com` should be the personal portfolio that proves the practice — a curated atlas of your work, photography, writing, and ideas, sharing the KiyViz design system but in a different role.** It is the depth that backs `kiyviz.com`'s pitch. Lead gen happens on `kiyviz.com`. Proof and personality live on `derekkiy.com`.

This split fixes the lead-gen visibility problem you flagged in S07 without bloating KiyViz, gives every prospect a reason to deepen trust before they email, and is small enough to ship inside 2–3 working weeks without disturbing the Museum DTE audit or the kiyviz.com 26Q2.3 push.

---

## The strategic decision

You currently have three live web identities at three altitudes:

| Property | Role | Audience | Voice |
|---|---|---|---|
| **kiyviz.com** | Services / "hire me" | Buyers (museum directors, foundation program officers, comms leads) | Tight, transactional, formal-letter |
| **justtheconstitution.org** | A specific civic project | Anyone reading the Constitution | Disappearing-craftsman; document-first |
| **derekkiy.com** | *(undefined — currently 403)* | *(?)* | *(?)* |

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

| Risk | What it'd look like | Counter |
|---|---|---|
| **Concurrency overload** | derekkiy.com competes with the Museum DTE audit (Apr 13–30) and the 26Q2.3 KiyViz finishing pass. Output quality on all three drops. | MVP must be ruthlessly small. The spec defaults to "ship the index card hero + 5 case studies + 1 photo set + 1 writing piece" and **explicitly punts** on hand-drawn art, Spanish copy completeness, and video integration to v1.1. |
| **Duplicate-of-KiyViz feeling** | If derekkiy.com ends up as a longer KiyViz with more pictures, it competes with itself for SEO and dilutes both pitches. | The `SPEC.md` IA is structurally different (work / photo / writing / about / now) vs KiyViz's bento (about / services / work / contact). |
| **Webflow keeps charging** | Both kiyviz.com and any old derekkiy.com Webflow plan keep auto-renewing. | Spec includes a launch-week "kill the Webflow renewal" task. |
| **Spanish translation drag** | Waiting for a fluent-speaker pass blocks launch. | Launch EN-only, scaffold ES, ship ES in v1.1. Same approach you took with KiyViz hand-drawn assets. |
| **Greenfield drift** | Without a constraint, the site grows to fit every interest you have. | The 100 KB / page principle and the version-folder discipline are the hard constraints. Apply them. |
| **Discoverability** | `derekkiy.com` is a person-name domain with no inbound links. | Spec includes the cross-link plan, JSON-LD `Person` schema, and a one-shot inbound-link campaign (KiyViz footer, JTC footer, GitHub profile, LinkedIn, every active-client deliverable). |

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
