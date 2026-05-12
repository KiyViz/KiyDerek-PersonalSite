/* ─────────────────────────────────────────────────────────
   derekkiy.com · v0.1 scripts
   No framework. No build. Reads window.DK_CONTENT.

   Responsibilities:
     1. Theme (scheme × mode × lang) toggles
     2. PAST zone list/grid view toggle + kind filter
     3. Active-section nav (IntersectionObserver)
     4. Status footer clock
     5. Theme-carrying link rewriter (file:// theme persistence)

   localStorage keys: dk-scheme, dk-mode, dk-lang-view, dk-past-view
   ───────────────────────────────────────────────────────── */
(function () {
  "use strict";

  const html = document.documentElement;
  const CONTENT = window.DK_CONTENT || { projects: [], featured: [] };

  /* ══ THEME SYSTEM ══════════════════════════════════════ */

  const SCHEME_KEY = "dk-scheme";
  const MODE_KEY   = "dk-mode";
  const LANG_KEY   = "dk-lang-view";
  const VALID_SCHEMES = ["amber", "green", "blue", "neutral"];
  const VALID_MODES   = ["light", "dark", "oled"];
  const VALID_LANGS   = ["all", "en", "es"];
  const DEFAULT_SCHEME = "amber";

  const schemeButtons = document.querySelectorAll(".scheme-toggle button[data-set-scheme]");
  const schemeSelect  = document.querySelector("[data-scheme-select]");
  const modeButtons   = document.querySelectorAll(".mode-toggle button[data-set-mode]");
  const langButtons   = document.querySelectorAll(".lang-toggle button[data-set-lang]");
  const announcer     = document.getElementById("theme-announcer");

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function getInitialScheme() {
    const s = lsGet(SCHEME_KEY);
    if (s && VALID_SCHEMES.includes(s)) return s;
    const attr = html.getAttribute("data-scheme");
    if (attr && VALID_SCHEMES.includes(attr)) return attr;
    return DEFAULT_SCHEME;
  }
  function getInitialMode() {
    const m = lsGet(MODE_KEY);
    if (m && VALID_MODES.includes(m)) return m;
    const attr = html.getAttribute("data-mode");
    if (attr && VALID_MODES.includes(attr)) return attr;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }
  function getInitialLang() {
    const l = lsGet(LANG_KEY);
    if (l && VALID_LANGS.includes(l)) return l;
    const attr = html.getAttribute("data-lang-view");
    if (attr && VALID_LANGS.includes(attr)) return attr;
    return "all";
  }

  function updateMetaThemeColor() {
    const paper = getComputedStyle(html).getPropertyValue("--paper").trim();
    let meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = paper;
  }

  function applyScheme(scheme) {
    if (!VALID_SCHEMES.includes(scheme)) scheme = DEFAULT_SCHEME;
    html.setAttribute("data-scheme", scheme);
    schemeButtons.forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.setScheme === scheme ? "true" : "false")
    );
    if (schemeSelect && schemeSelect.value !== scheme) {
      schemeSelect.value = scheme;
    }
    lsSet(SCHEME_KEY, scheme);
    updateMetaThemeColor();
    const ind = document.querySelector("[data-scheme-indicator]");
    if (ind) ind.textContent = scheme;
  }
  function applyMode(mode) {
    if (!VALID_MODES.includes(mode)) mode = "light";
    html.setAttribute("data-mode", mode);
    modeButtons.forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.setMode === mode ? "true" : "false")
    );
    lsSet(MODE_KEY, mode);
    updateMetaThemeColor();
    const ind = document.querySelector("[data-mode-indicator]");
    if (ind) ind.textContent = mode;
  }
  function applyLang(lang) {
    if (!VALID_LANGS.includes(lang)) lang = "all";
    html.setAttribute("data-lang-view", lang);
    langButtons.forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.setLang === lang ? "true" : "false")
    );
    lsSet(LANG_KEY, lang);
    const ind = document.querySelector("[data-lang-indicator]");
    if (ind) ind.textContent = lang;
  }
  function announce(text) { if (announcer) announcer.textContent = text || ""; }

  applyScheme(getInitialScheme());
  applyMode(getInitialMode());
  applyLang(getInitialLang());

  schemeButtons.forEach((b) => b.addEventListener("click", () => {
    applyScheme(b.dataset.setScheme);
    announce("Scheme: " + b.dataset.setScheme);
  }));
  if (schemeSelect) {
    schemeSelect.addEventListener("change", () => {
      applyScheme(schemeSelect.value);
      announce("Scheme: " + schemeSelect.value);
    });
  }
  modeButtons.forEach((b) => b.addEventListener("click", () => {
    applyMode(b.dataset.setMode);
    announce("Mode: " + b.dataset.setMode);
  }));
  langButtons.forEach((b) => b.addEventListener("click", () => {
    applyLang(b.dataset.setLang);
    announce("Language: " + b.dataset.setLang);
  }));

  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!lsGet(MODE_KEY)) applyMode(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else if (mq.addListener) mq.addListener(handler);
  }

  /* ══ FOOTER INDICATORS AS CYCLING EASTER-EGG BUTTONS ════
     The scheme/mode/lang readouts in the status footer cycle
     to the next valid value on click. Discoverable, not loud.
     ════════════════════════════════════════════════════════ */
  function nextIn(arr, current) {
    const i = arr.indexOf(current);
    return arr[(i + 1) % arr.length];
  }
  function wireCycler(el, validList, currentGetter, applyFn, labelFor) {
    if (!el) return;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("title", "click to cycle " + labelFor);
    function fire() {
      const cur = currentGetter() || validList[0];
      const next = nextIn(validList, cur);
      applyFn(next);
      announce(labelFor + ": " + next);
    }
    el.addEventListener("click", fire);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fire(); }
    });
  }
  wireCycler(
    document.querySelector("[data-scheme-indicator]"),
    VALID_SCHEMES,
    () => html.getAttribute("data-scheme"),
    applyScheme,
    "scheme"
  );
  wireCycler(
    document.querySelector("[data-mode-indicator]"),
    VALID_MODES,
    () => html.getAttribute("data-mode"),
    applyMode,
    "mode"
  );
  wireCycler(
    document.querySelector("[data-lang-indicator]"),
    VALID_LANGS,
    () => html.getAttribute("data-lang-view"),
    applyLang,
    "language"
  );

  /* ══ PAST ZONE — view toggle + kind filter ═════════════ */

  const pastZone = document.querySelector("[data-past-zone]");
  if (pastZone) {
    const PAST_VIEW_KEY = "dk-past-view";
    const VALID_VIEWS = ["list", "grid"];
    const VALID_KINDS = ["all", "cartography", "identity", "campaign", "editorial", "civic", "policy"];

    function applyPastView(view) {
      if (!VALID_VIEWS.includes(view)) view = "list";
      pastZone.setAttribute("data-past-view", view);
      pastZone.querySelectorAll(".past-views button").forEach((b) =>
        b.setAttribute("aria-pressed", b.dataset.setView === view ? "true" : "false")
      );
      lsSet(PAST_VIEW_KEY, view);
    }
    function applyPastFilter(kind) {
      if (!VALID_KINDS.includes(kind)) kind = "all";
      pastZone.setAttribute("data-past-filter", kind);
      pastZone.querySelectorAll(".past-filters button").forEach((b) =>
        b.setAttribute("aria-pressed", b.dataset.setKind === kind ? "true" : "false")
      );
      // Hide non-matching rows/cards
      pastZone.querySelectorAll(".past-row, .past-card").forEach((el) => {
        const k = el.getAttribute("data-kind") || "";
        if (kind === "all" || k.split(/\s+/).includes(kind)) {
          el.removeAttribute("hidden");
        } else {
          el.setAttribute("hidden", "");
        }
      });
    }

    const storedView = lsGet(PAST_VIEW_KEY);
    applyPastView(VALID_VIEWS.includes(storedView) ? storedView : "list");
    applyPastFilter("all");

    pastZone.addEventListener("click", (ev) => {
      const view = ev.target.closest(".past-views button[data-set-view]");
      if (view) { applyPastView(view.dataset.setView); return; }
      const filter = ev.target.closest(".past-filters button[data-set-kind]");
      if (filter) { applyPastFilter(filter.dataset.setKind); return; }
    });
  }

  /* ══ ACTIVE-SECTION NAV (IntersectionObserver) ════════ */

  const anchorLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const sections = anchorLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          anchorLinks.forEach((link) => {
            const active = link.getAttribute("href") === "#" + id;
            if (active) link.setAttribute("aria-current", "true");
            else if (link.getAttribute("aria-current") === "true") link.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => obs.observe(s));
  }

  /* ══ PAGE-LEVEL ACTIVE NAV (sub-pages) ════════════════ */

  const pagePath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/+$/, "/");
  document.querySelectorAll(".site-nav a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    try {
      const linkPath = new URL(href, window.location.href).pathname
        .replace(/\/index\.html$/, "/")
        .replace(/\/+$/, "/");
      if (linkPath === pagePath) link.setAttribute("aria-current", "page");
    } catch (e) {}
  });

  /* ══ STATUS FOOTER CLOCK ══════════════════════════════ */

  const clockEl = document.querySelector("[data-status-clock]");
  if (clockEl) {
    function tickClock() {
      const now = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/Los_Angeles" };
      try {
        clockEl.textContent = new Intl.DateTimeFormat("en-US", opts).format(now) + " PT";
      } catch (e) {
        const h = String((now.getUTCHours() - 8 + 24) % 24).padStart(2, "0");
        const m = String(now.getUTCMinutes()).padStart(2, "0");
        clockEl.textContent = h + ":" + m + " PT";
      }
    }
    tickClock();
    setInterval(tickClock, 30 * 1000);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) tickClock();
    });
  }

  /* ══ THEME-CARRYING LINK REWRITER (file://) ══════════════
     Every internal link picks up ?scheme=&mode=&lang= so the
     theme survives cross-directory nav on file://. The FOUC
     guard in each HTML reads these and strips them clean.
     ════════════════════════════════════════════════════════ */
  (function () {
    const H = document.documentElement;
    const EXTERNAL = /^(#|mailto:|tel:|javascript:|https?:\/\/|\/\/)/i;

    function snap() {
      return {
        scheme: H.getAttribute("data-scheme"),
        mode:   H.getAttribute("data-mode"),
        lang:   H.getAttribute("data-lang-view")
      };
    }
    function rewriteOne(a, s) {
      let orig = a.getAttribute("data-dk-orig-href");
      if (orig === null) {
        orig = a.getAttribute("href");
        if (orig === null) return;
        a.setAttribute("data-dk-orig-href", orig);
      }
      if (!orig || EXTERNAL.test(orig)) return;
      const hashIdx = orig.indexOf("#");
      const pathSearch = hashIdx === -1 ? orig : orig.slice(0, hashIdx);
      const hash = hashIdx === -1 ? "" : orig.slice(hashIdx);
      const parts = [];
      if (s.scheme) parts.push("scheme=" + encodeURIComponent(s.scheme));
      if (s.mode)   parts.push("mode="   + encodeURIComponent(s.mode));
      if (s.lang)   parts.push("lang="   + encodeURIComponent(s.lang));
      let newHref;
      if (!parts.length) newHref = orig;
      else {
        const glue = pathSearch.indexOf("?") === -1 ? "?" : "&";
        newHref = pathSearch + glue + parts.join("&") + hash;
      }
      if (a.getAttribute("href") !== newHref) a.setAttribute("href", newHref);
    }
    function rewriteAll() {
      const s = snap();
      document.querySelectorAll("a[href]").forEach((a) => rewriteOne(a, s));
    }
    rewriteAll();
    try {
      const mo = new MutationObserver(() => rewriteAll());
      mo.observe(H, { attributes: true, attributeFilter: ["data-scheme", "data-mode", "data-lang-view"] });
    } catch (e) {}
    // Insurance: rewrite once more right before a click navigates
    window.addEventListener("click", (ev) => {
      const a = ev.target.closest && ev.target.closest("a[href]");
      if (a) rewriteOne(a, snap());
    }, true);
  })();
})();
