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

  /* ══ COPY + TOAST UTILITIES (lifted from justtheconstitution) ══
     Clipboard write with execCommand fallback for older browsers,
     plus a fixed-position toast with smooth fade for confirmation.
     ════════════════════════════════════════════════════════ */

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      ta.setAttribute("readonly", "");
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) {}
      document.body.removeChild(ta);
      return ok;
    }
  }

  let toastEl = null;
  let toastTimer = null;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("toast-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("toast-visible");
    }, 1600);
  }

  /* ══ DIRECT-CONTACT COPY BUTTONS ════════════════════════ */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async (ev) => {
      ev.preventDefault();
      const text = btn.getAttribute("data-copy");
      const label = btn.getAttribute("data-copy-label") || text;
      const ok = await copyText(text);
      showToast(ok ? "Copied " + label : "Copy failed — select and copy manually");
      btn.focus();
    });
  });

  /* ══ GALLERY — spotify-shuffle work feed ════════════════════
     Reads CONTENT.library, shuffles with a seeded PRNG (seed
     cached to localStorage), renders cards into the container,
     wires filter chips, shuffle button, and a lightweight
     <dialog> lightbox for cards without an href.
     ════════════════════════════════════════════════════════ */

  const galleryEl = document.querySelector("[data-gallery]");
  if (galleryEl && CONTENT.library && CONTENT.library.length) {
    const SEED_KEY = "dk-gallery-seed";
    const FILTER_KEY = "dk-gallery-filter";

    function newSeed() {
      return (Math.random() * 0xffffffff) >>> 0;
    }
    function getSeed() {
      try {
        const raw = localStorage.getItem(SEED_KEY);
        if (raw) {
          const n = parseInt(raw, 10);
          if (!isNaN(n)) return n;
        }
      } catch (e) {}
      const s = newSeed();
      try { localStorage.setItem(SEED_KEY, String(s)); } catch (e) {}
      return s;
    }
    function setSeed(s) {
      try { localStorage.setItem(SEED_KEY, String(s)); } catch (e) {}
    }

    // mulberry32 seeded PRNG — small, deterministic, good enough for shuffle
    function mulberry32(seed) {
      let a = seed >>> 0;
      return function () {
        a = (a + 0x6D2B79F5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), 1 | t);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    function shuffleSeeded(arr, seed) {
      const rng = mulberry32(seed);
      const out = arr.slice();
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const tmp = out[i]; out[i] = out[j]; out[j] = tmp;
      }
      return out;
    }

    // Filter state — { kind: "all"|<kind>, polish: "all"|<polish> }
    function loadFilter() {
      try {
        const raw = localStorage.getItem(FILTER_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { kind: "all", polish: "all" };
    }
    function saveFilter(state) {
      try { localStorage.setItem(FILTER_KEY, JSON.stringify(state)); } catch (e) {}
    }
    let filterState = loadFilter();

    function parseRatio(r) {
      if (!r) return "4 / 3";
      const m = String(r).match(/^([\d.]+)\s*[:/]\s*([\d.]+)$/);
      if (m) return `${m[1]} / ${m[2]}`;
      return "4 / 3";
    }

    function renderCard(asset) {
      const a = document.createElement(asset.href ? "a" : "button");
      a.className = "gallery-card";
      a.setAttribute("data-kind", asset.kind || "");
      a.setAttribute("data-polish", asset.polish || "");
      a.setAttribute("data-slug", asset.slug);
      if (asset.href) {
        a.href = asset.href;
      } else {
        a.type = "button";
        a.setAttribute("data-lightbox", asset.slug);
      }

      const fig = document.createElement("figure");
      fig.className = "gallery-card-img";
      fig.style.aspectRatio = parseRatio(asset.ratio);
      const img = document.createElement("img");
      img.src = asset.img;
      img.alt = asset.caption || asset.slug;
      img.loading = "lazy";
      img.decoding = "async";
      fig.appendChild(img);
      a.appendChild(fig);

      const body = document.createElement("div");
      body.className = "gallery-card-body";
      const cap = document.createElement("p");
      cap.className = "gallery-card-caption";
      cap.textContent = asset.caption || "";
      body.appendChild(cap);
      const meta = document.createElement("p");
      meta.className = "gallery-card-meta";
      const parts = [];
      if (asset.year)   parts.push(asset.year);
      if (asset.kind)   parts.push(asset.kind);
      if (asset.polish) parts.push(asset.polish);
      meta.textContent = parts.join(" · ");
      body.appendChild(meta);
      a.appendChild(body);

      return a;
    }

    function applyFilter() {
      galleryEl.querySelectorAll(".gallery-card").forEach((card) => {
        const kindOk = filterState.kind === "all" || card.dataset.kind === filterState.kind;
        const polishOk = filterState.polish === "all" || card.dataset.polish === filterState.polish;
        if (kindOk && polishOk) card.removeAttribute("hidden");
        else card.setAttribute("hidden", "");
      });
      // Update chip pressed states
      document.querySelectorAll("[data-filter-chip]").forEach((chip) => {
        const facet = chip.dataset.filterFacet;
        const value = chip.dataset.filterValue;
        chip.setAttribute("aria-pressed", filterState[facet] === value ? "true" : "false");
      });
    }

    function renderGallery() {
      const seed = getSeed();
      const ordered = shuffleSeeded(CONTENT.library, seed);
      galleryEl.innerHTML = "";
      ordered.forEach((asset) => galleryEl.appendChild(renderCard(asset)));
      applyFilter();
    }

    renderGallery();

    // Wire shuffle button
    const shuffleBtn = document.querySelector("[data-gallery-shuffle]");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        const s = newSeed();
        setSeed(s);
        renderGallery();
        announce("Gallery reshuffled");
      });
    }

    // Wire filter chips
    document.querySelectorAll("[data-filter-chip]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const facet = chip.dataset.filterFacet;
        const value = chip.dataset.filterValue;
        filterState[facet] = value;
        saveFilter(filterState);
        applyFilter();
      });
    });

    /* ── LIGHTBOX — for cards without an href ─────────────── */
    const lightbox = document.querySelector("[data-lightbox-dialog]");
    if (lightbox) {
      const lbImg = lightbox.querySelector("[data-lightbox-img]");
      const lbCaption = lightbox.querySelector("[data-lightbox-caption]");
      const lbMeta = lightbox.querySelector("[data-lightbox-meta]");
      const lbClose = lightbox.querySelector("[data-lightbox-close]");

      galleryEl.addEventListener("click", (ev) => {
        const trigger = ev.target.closest("[data-lightbox]");
        if (!trigger) return;
        ev.preventDefault();
        const slug = trigger.getAttribute("data-lightbox");
        const asset = CONTENT.findAsset(slug);
        if (!asset) return;
        lbImg.src = asset.img;
        lbImg.alt = asset.caption || asset.slug;
        lbCaption.textContent = asset.caption || "";
        const parts = [];
        if (asset.year)   parts.push(asset.year);
        if (asset.kind)   parts.push(asset.kind);
        if (asset.polish) parts.push(asset.polish);
        lbMeta.textContent = parts.join(" · ");
        if (typeof lightbox.showModal === "function") {
          lightbox.showModal();
        } else {
          lightbox.setAttribute("open", "");
        }
      });
      if (lbClose) {
        lbClose.addEventListener("click", () => {
          if (typeof lightbox.close === "function") lightbox.close();
          else lightbox.removeAttribute("open");
        });
      }
      // Click backdrop to close
      lightbox.addEventListener("click", (ev) => {
        if (ev.target === lightbox) {
          if (typeof lightbox.close === "function") lightbox.close();
          else lightbox.removeAttribute("open");
        }
      });
    }
  }

  /* ══ STICKY CONTACT — mobile bottom drawer ══════════════════
     On wide screens the sticky pane lives as a right rail. On
     narrow viewports it collapses to a slim bottom bar; tapping
     the bar expands the drawer. Escape and backdrop-click close.
     ════════════════════════════════════════════════════════ */
  const stickyContact = document.querySelector("[data-sticky-contact]");
  if (stickyContact) {
    const expandBtn = stickyContact.querySelector("[data-drawer-expand]");
    const closeBtn = stickyContact.querySelector("[data-drawer-close]");
    function open() {
      stickyContact.setAttribute("data-drawer-open", "true");
      document.body.classList.add("drawer-open");
      const firstFocusable = stickyContact.querySelector("a, button");
      if (firstFocusable) firstFocusable.focus();
    }
    function close() {
      stickyContact.removeAttribute("data-drawer-open");
      document.body.classList.remove("drawer-open");
      if (expandBtn) expandBtn.focus();
    }
    if (expandBtn) expandBtn.addEventListener("click", open);
    if (closeBtn)  closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && stickyContact.hasAttribute("data-drawer-open")) {
        close();
      }
    });
    // Click outside the drawer (on the body but not the drawer) closes on mobile
    document.addEventListener("click", (e) => {
      if (!stickyContact.hasAttribute("data-drawer-open")) return;
      if (e.target === expandBtn) return;
      if (stickyContact.contains(e.target)) return;
      close();
    });
  }

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
