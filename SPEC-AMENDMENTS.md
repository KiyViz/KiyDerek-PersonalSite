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

| Dimension | kiyviz.com | derekkiy.com |
|---|---|---|
| **Role** | Specialized infosplainer studio | Generalist freelance practice |
| **Voice** | Direct, productized, formal-letter | Artsy, approachable, humanistic |
| **Audience** | Orgs needing fast issue sites | Design professionals, network contacts, curious prospects |
| **Services** | Infosplainers (pricing under development) | Identity, cartography, museum, editorial, photography, writing |
| **Revenue model** | Productized, fixed-scope | Custom-scoped, project-based |
| **Hero** | Interactive CLI terminal | Index-card / contact-sheet wall |
| **Default scheme** | earth (warm) | con sabor y amor (bright, architecturally Mexican — Barragan/Legorreta/PRODUCTORA MX) |
| **Nav** | about / services / work / contact | work / photo / writing / about / now |
| **Contact** | CLI + footer strip | Dedicated contact section + footer strip |
| **Structural comp** | Polygraph (commercial arm) | The Pudding (editorial arm) |

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

**Old spec:** "routes hire-me intent through the email link to a KiyViz-monitored inbox (derek@kiyviz.com)."

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

| # | Decision | Resolution | Source |
|---|---|---|---|
| 1 | Hero device | Index-card / contact-sheet | Confirmed (SPEC default) |
| 2 | Default scheme | con sabor y amor (CSYA) | **REVISED** — was stone; changed to bright Mexican architectural palette |
| 3 | Default mode | light | Confirmed (SPEC default) |
| 4 | Bilingual launch | EN-led, ES scaffolded | Confirmed |
| 5 | First writing piece | No Kings campaign rationale | SPEC recommendation accepted |
| 6 | Photo commercialization | Portfolio-only at v1 | Confirmed |
| 7 | elDelicious in v1 | Defer to v1.1 | Confirmed |
| 8 | /lab/ in v1 | Defer to v1.2 | Confirmed |
| 9 | Cross-link footer | Yes, both directions | Confirmed |
| 10 | Headshot vs hand-drawn | Hand-drawn (defer until art exists; use spec-sheet placeholder) | Confirmed |
| 11 | LinkedIn URL | https://www.linkedin.com/in/derek-kiy/ | **RESOLVED** |
| 11b | GitHub URL | https://github.com/KiyViz | **RESOLVED** |
| 12 | Inbox routing | derek@kiyviz.com (shared) | Confirmed |
| 13 | Museum DTE case study | "Coming soon" page in v1 | Confirmed |

### New open decisions (for build session to resolve in real-time)

| # | Decision | Recommendation | Notes |
|---|---|---|---|
| 14 | Capabilities section: standalone page or home section? | Home section (lightweight) | A `/services/` page risks duplicating kiyviz.com's role |
| 15 | Contact: home section only, or also a `/contact/` route? | Home section + footer strip (no dedicated page) | Keeps IA tight; revisit if conversion data warrants it |
| 16 | About-letter tone: how warm? | Draft two versions during build and let Derek pick | The line between "warm professional" and "too casual" is subjective |

---

## Amendment 8: The "services list" prohibition — LIFTED

SPEC.md §1 says: "It MUST NOT: Pitch services. (KiyViz's job.)"
SPEC.md §15 says: "Out of scope: Service offers (kiyviz.com)."

**Overridden.** derekkiy.com IS a generalist practice and needs to signal what Derek does for hire. The distinction:

- **derekkiy.com:** warm capabilities overview (what kinds of work, in what spirit) — "I design identity systems, maps, exhibit content, and editorial publications. Bilingual EN/ES from the first draft."
- **kiyviz.com:** productized service pitch (fixed scope, fixed price, turnaround times) — "One page, one message, online in 48-72 hours. Starting at $3,000."

The framing, not the presence, is what differentiates them.
