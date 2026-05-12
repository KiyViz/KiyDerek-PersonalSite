#!/usr/bin/env python3
"""
derekkiy.com · case-study stamper

Reads ./_template.html and the PROJECTS list below, writes one
<slug>.html per project with template tokens substituted.

For each project the stamper looks for a sidecar at
  ../_copywork/<slug>.md
and pulls a body section delimited by:
  ## body en
  ...markdown for the English body...
  ## body es
  ...markdown for the Spanish body...

If neither section is present, the stamper writes a "case study
in progress" placeholder body. Re-runnable, idempotent.

Adapted from KiyViz 26Q2.3's stamper. No museum-dte or heritage
projects — derekkiy.com is independent. Order is rough chronological
(newest first) and determines the prev/next nav.
"""

from __future__ import annotations
import sys, re, html
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = Path(__file__).parent
TEMPLATE = HERE / "_template.html"
COPYWORK = HERE.parent / "_copywork"


# ══════════════════════════════════════════════════════════════════════
# PROJECT CATALOG — 9 entries, newest-first order = prev/next nav order
# ══════════════════════════════════════════════════════════════════════

PROJECTS = [
    {
        "slug":        "nokings",
        "title_en":    "4th Amendment Campaign",
        "title_es":    "Campaña 4ª Enmienda",
        "subtitle_en": "Full-page USA-wide newspaper placement for a 4th Amendment campaign.",
        "subtitle_es": "Anuncio a página completa en medios de todo EE. UU. para una campaña sobre la 4ª Enmienda.",
        "bluf_en":     "200+ full-page newspaper placements across the United States, including the New York Times, for a private client's 4th Amendment campaign — a single image that had to survive every press condition in the country.",
        "bluf_es":     "Más de 200 anuncios a página completa en periódicos de todo EE. UU., incluido el New York Times, para la campaña 4ª Enmienda de un cliente privado — una sola imagen que tenía que sobrevivir todas las condiciones de imprenta del país.",
        "tags":        ["campaign", "identity", "print"],
        "specs": {
            "scope":        {"en": "Single news cycle, USA-wide",                            "es": "Un ciclo noticioso, todo EE. UU."},
            "service":      {"en": "Identity, layout, print art direction",                  "es": "Identidad, maquetación, dirección de arte para imprenta"},
            "deliverables": {"en": "Logo system, full-page ads, ran in 200+ publications including the New York Times", "es": "Sistema de logo, anuncios a página completa, publicados en más de 200 medios incluido el New York Times"},
            "timeline":     {"en": "February 2026",                                          "es": "Febrero de 2026"},
        },
        "hero":        "../assets/img/work/nokings-4th-amendment.webp",
        "hero_alt":    "No Kings 4th Amendment campaign layout — full-page newspaper placement.",
        "hero_w":      "1200",
        "hero_h":      "1512",
    },
    {
        "slug":        "calchamber",
        "title_en":    "Border Consumption Tax Map",
        "title_es":    "Mapa del Impuesto al Consumo Fronterizo",
        "subtitle_en": "Single-graphic op-ed map of U.S.–Mexico border consumption tax rates.",
        "subtitle_es": "Mapa editorial de un solo gráfico sobre las tasas de impuestos al consumo en la frontera EE. UU.–México.",
        "bluf_en":     "A single op-ed map that answered a two-country tariff question in five seconds, built in QGIS from INEGI and Natural Earth data on a tight production window.",
        "bluf_es":     "Un mapa editorial que respondió una pregunta arancelaria binacional en cinco segundos, construido en QGIS con datos de INEGI y Natural Earth bajo un plazo ajustado.",
        "tags":        ["cartography", "editorial", "policy"],
        "specs": {
            "scope":        {"en": "Single op-ed graphic, tight production window",         "es": "Un gráfico editorial, plazo ajustado"},
            "service":      {"en": "Cartography, editorial design",                          "es": "Cartografía, diseño editorial"},
            "deliverables": {"en": "Op-ed map + comparison sub-graphic, print-ready, published in CalChamber Alert Vol 51 No 9", "es": "Mapa editorial + sub-gráfico comparativo, listo para imprenta, publicado en CalChamber Alert Vol 51 No 9"},
            "timeline":     {"en": "March 2025",                                             "es": "Marzo de 2025"},
        },
        "hero":        "../assets/img/work/calchamber-border-tax.webp",
        "hero_alt":    "Newspaper mockup showing the Border Consumption Tax Map published in the CalChamber Alert.",
        "hero_w":      "1200",
        "hero_h":      "1200",
    },
    {
        "slug":        "sis",
        "title_en":    "Space Impact Study",
        "title_es":    "Estudio de Impacto Espacial",
        "subtitle_en": "Self-initiated communications package on orbital debris and space law.",
        "subtitle_es": "Proyecto propio: paquete de comunicaciones sobre basura orbital y derecho espacial.",
        "bluf_en":     "A self-initiated study testing whether a designer can translate highly technical orbital-debris policy into visuals a non-specialist can argue about without dumbing it down.",
        "bluf_es":     "Un estudio propio que prueba si un diseñador puede traducir la política altamente técnica sobre basura orbital en visuales que un no-especialista puede debatir sin simplificarla en exceso.",
        "tags":        ["policy", "editorial", "cartography"],
        "specs": {
            "scope":        {"en": "Self-initiated R&D, ongoing",                            "es": "I+D propia, en curso"},
            "service":      {"en": "Policy editorial, diagrams, methodology study",          "es": "Editorial de política pública, diagramas, estudio metodológico"},
            "deliverables": {"en": "Draft policy memo, supporting diagrams and sketches",    "es": "Borrador de memorando, diagramas y bocetos de apoyo"},
            "timeline":     {"en": "2025 – ongoing",                                         "es": "2025 – en curso"},
        },
        "hero":        "../assets/img/work/sis-space-impact-study.webp",
        "hero_alt":    "Diagram from the Space Impact Study communications package.",
        "hero_w":      "1200",
        "hero_h":      "900",
    },
    {
        "slug":        "nacwg",
        "title_en":    "NACWG — White Paper, Identity & Collateral",
        "title_es":    "NACWG — Documento, Identidad y Material",
        "subtitle_en": "Logo, typography, full report layout, custom orthographic cartography, and identity collateral for a trinational policy working group.",
        "subtitle_es": "Logo, tipografía, maquetación del reporte, cartografía ortográfica personalizada y material de identidad para un grupo de trabajo trinacional.",
        "bluf_en":     "An 80-hour engagement building a trinational identity, four custom data figures, and a full report layout for a policy working group that had to publish in academic and government contexts simultaneously.",
        "bluf_es":     "Un proyecto de 80 horas construyendo una identidad trinacional, cuatro figuras de datos personalizadas y la maquetación completa de un reporte para un grupo de trabajo que tenía que publicar en contextos académicos y gubernamentales simultáneamente.",
        "tags":        ["identity", "editorial", "cartography", "policy", "print"],
        "specs": {
            "scope":        {"en": "80+ hour engagement",                                    "es": "Proyecto de 80+ horas"},
            "service":      {"en": "Identity, typography, custom cartography, report layout, member collateral", "es": "Identidad, tipografía, cartografía personalizada, maquetación del reporte, material para miembros"},
            "deliverables": {"en": "Logo, palette, typography rules, four custom data figures, full report layout, identity collateral", "es": "Logo, paleta, reglas tipográficas, cuatro figuras de datos personalizadas, maquetación completa, material de identidad"},
            "timeline":     {"en": "June 2024",                                              "es": "Junio de 2024"},
        },
        "hero":        "../assets/img/work/nacwg-white-paper.webp",
        "hero_alt":    "Cover of the North American Competitiveness Working Group white paper.",
        "hero_w":      "1200",
        "hero_h":      "834",
    },
    {
        "slug":        "studiosun",
        "title_en":    "Studio Sun — Bilingual Identity System",
        "title_es":    "Studio Sun — Sistema de Identidad Bilingüe",
        "subtitle_en": "Logo, palette, and typography system for a narrative photography studio working across cultural contexts.",
        "subtitle_es": "Logo, paleta y sistema tipográfico para un estudio de fotografía narrativa que trabaja entre contextos culturales.",
        "bluf_en":     "A bilingual EN/ZH identity for a narrative photography studio that had to flex between black-tie weddings and candid editorial without changing its skin.",
        "bluf_es":     "Una identidad bilingüe EN/ZH para un estudio de fotografía narrativa que tenía que moverse entre bodas formales y editorial casual sin cambiar de piel.",
        "tags":        ["identity", "bilingual"],
        "specs": {
            "scope":        {"en": "Full identity system, public-facing brand",              "es": "Sistema completo de identidad, marca pública"},
            "service":      {"en": "Identity creation, typography, bilingual EN/ZH",         "es": "Creación de identidad, tipografía, bilingüe EN/ZH"},
            "deliverables": {"en": "Bilingual combomark, six-color tiered palette, typography rules, six application contexts", "es": "Logotipo bilingüe, paleta de seis colores por niveles, reglas tipográficas, seis contextos de aplicación"},
            "timeline":     {"en": "February 2024",                                          "es": "Febrero de 2024"},
        },
        "hero":        "../assets/img/work/studio-sun.webp",
        "hero_alt":    "Studio Sun identity system cover.",
        "hero_w":      "1200",
        "hero_h":      "771",
    },
    {
        "slug":        "symphonic",
        "title_en":    "Symphonic Stories Identity",
        "title_es":    "Identidad de Symphonic Stories",
        "subtitle_en": "Custom ligature and color system for a social-media studio serving classical musicians.",
        "subtitle_es": "Ligadura personalizada y sistema de color para un estudio de redes sociales al servicio de músicos clásicos.",
        "bluf_en":     "A deliberately quiet identity for a studio whose job is to elevate other people — anchored by a custom double-o ligature shaped like a musical tie.",
        "bluf_es":     "Una identidad deliberadamente tranquila para un estudio cuyo trabajo es elevar a otros — anclada en una ligadura doble-o personalizada con forma de ligadura musical.",
        "tags":        ["identity", "editorial"],
        "specs": {
            "scope":        {"en": "Brand identity package",                                 "es": "Paquete de identidad de marca"},
            "service":      {"en": "Identity creation, typography, color system",            "es": "Creación de identidad, tipografía, sistema de color"},
            "deliverables": {"en": "Custom double-o ligature, restricted typography palette, multi-tiered color system, social and poster applications", "es": "Ligadura doble-o personalizada, paleta tipográfica restringida, sistema de color por niveles, aplicaciones sociales y de póster"},
            "timeline":     {"en": "May 2024",                                               "es": "Mayo de 2024"},
        },
        "hero":        "../assets/img/work/symphonic-stories.webp",
        "hero_alt":    "Symphonic Stories identity title card.",
        "hero_w":      "1200",
        "hero_h":      "750",
    },
    {
        "slug":        "ioa",
        "title_en":    "IOA E-Mobility Multilingual Brochure",
        "title_es":    "Folleto Multilingüe de E-Mobility para IOA",
        "subtitle_en": "Trilingual brochure (EN / ES / PT) combining itinerary and briefing for a foreign delegation visit.",
        "subtitle_es": "Folleto trilingüe (EN / ES / PT) que combina itinerario e informe para una visita de delegación extranjera.",
        "bluf_en":     "A trilingual EN/ES/PT brochure and poster set for a foreign delegation's e-mobility visit to the Americas, designed in all three languages from the first draft rather than translated after the fact.",
        "bluf_es":     "Un folleto y set de pósters trilingüe EN/ES/PT para la visita de una delegación extranjera sobre movilidad eléctrica en las Américas, diseñado en los tres idiomas desde el primer borrador en lugar de traducirse después.",
        "tags":        ["editorial", "bilingual", "policy"],
        "specs": {
            "scope":        {"en": "Trilingual print package + supporting collateral",      "es": "Paquete impreso trilingüe + material de apoyo"},
            "service":      {"en": "Editorial design, multilingual typesetting",             "es": "Diseño editorial, tipografía multilingüe"},
            "deliverables": {"en": "Brochure (EN/ES/PT editions), poster set",                "es": "Folleto (ediciones EN/ES/PT), set de pósters"},
            "timeline":     {"en": "March 2023",                                             "es": "Marzo de 2023"},
        },
        "hero":        "../assets/img/work/ioa-emobility.webp",
        "hero_alt":    "E-Mobility brochure cover for the Institute of the Americas, English edition.",
        "hero_w":      "1200",
        "hero_h":      "900",
    },
    {
        "slug":        "deputy",
        "title_en":    "IOA Deputy Meeting Poster",
        "title_es":    "Póster de Reunión de Delegados del IOA",
        "subtitle_en": "Large-format A/B light/dark reception poster built for promotion and photo-op backdrop use.",
        "subtitle_es": "Póster de recepción en formato grande con variantes claro/oscuro A/B.",
        "bluf_en":     "Two complementary large-format posters designed as a light/dark diptych — a single hinged image that asks the viewer to look twice, built for both promotion and photo-op backdrop use.",
        "bluf_es":     "Dos pósters complementarios en formato grande diseñados como un díptico claro/oscuro — una sola imagen con bisagra que le pide al observador mirar dos veces.",
        "tags":        ["editorial", "poster"],
        "specs": {
            "scope":        {"en": "Single event, dual-purpose poster set",                  "es": "Un evento, set de pósters de doble propósito"},
            "service":      {"en": "Large-format design, art direction",                     "es": "Diseño en formato grande, dirección de arte"},
            "deliverables": {"en": "Two A/B poster variants for diptych display + photo-op backdrop", "es": "Dos variantes A/B para exhibición en díptico + fondo fotográfico"},
            "timeline":     {"en": "January 2023",                                           "es": "Enero de 2023"},
        },
        "hero":        "../assets/img/work/ioa-deputy-meeting.webp",
        "hero_alt":    "Large-format reception poster mockup for an IOA deputy meeting.",
        "hero_w":      "1200",
        "hero_h":      "900",
    },
    {
        "slug":        "jtc",
        "title_en":    "Just the Constitution",
        "title_es":    "Just the Constitution",
        "subtitle_en": "Civic-tech reading site for the U.S. Constitution, unabridged. Bilingual EN/ES, ad-free.",
        "subtitle_es": "Sitio de lectura cívica para la Constitución de EE. UU., sin abreviar. Bilingüe EN/ES, sin publicidad.",
        "bluf_en":     "A clean, accessible, ad-free, bilingual reading edition of the U.S. Constitution — paired with parchment facsimiles from the National Archives. A 2023+ project still shipping.",
        "bluf_es":     "Una edición de lectura limpia, accesible, sin publicidad y bilingüe de la Constitución de EE. UU. — emparejada con facsímiles de pergamino del Archivo Nacional. Un proyecto en marcha desde 2023.",
        "tags":        ["civic", "editorial", "typography"],
        "specs": {
            "scope":        {"en": "Ongoing personal project, public-facing site",          "es": "Proyecto personal en curso, sitio público"},
            "service":      {"en": "Design, typography, build, deploy",                      "es": "Diseño, tipografía, desarrollo, despliegue"},
            "deliverables": {"en": "Reading site (justtheconstitution.org), bilingual content, parchment plates from National Archives", "es": "Sitio de lectura (justtheconstitution.org), contenido bilingüe, placas de pergamino del Archivo Nacional"},
            "timeline":     {"en": "2023 – ongoing (v2 ships Jul 4, 2026)",                  "es": "2023 – en curso (v2 sale 4 jul 2026)"},
        },
        "hero":        None,
        "hero_alt":    "Just the Constitution screenshot pending.",
        "hero_w":      "1200",
        "hero_h":      "675",
    },
]


# ══════════════════════════════════════════════════════════════════════
# MARKDOWN → HTML CONVERTER (minimal, no deps)
# ══════════════════════════════════════════════════════════════════════

_INLINE_RULES = [
    (re.compile(r'!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)'), '__FIGURE__'),
    (re.compile(r'\[([^\]]+)\]\(([^)]+)\)'), r'<a href="\2">\1</a>'),
    (re.compile(r'`([^`]+)`'), lambda m: f'<code>{html.escape(m.group(1))}</code>'),
    (re.compile(r'\*\*([^*]+)\*\*'), r'<strong>\1</strong>'),
    (re.compile(r'(?<![*\w])\*([^*\n]+)\*(?!\w)'), r'<em>\1</em>'),
    (re.compile(r'(?<![_\w])_([^_\n]+)_(?!\w)'), r'<em>\1</em>'),
    (re.compile(r'\[\^(\w+)\]'), r'<sup class="fn-ref"><a href="#fn-\1" id="fnref-\1">[\1]</a></sup>'),
]


def _process_inline_figure(m: re.Match) -> str:
    alt = m.group(1)
    src = m.group(2)
    cap = m.group(3) if m.lastindex and m.lastindex >= 3 else None
    classes = ["case-fig"]
    if "[bleed]" in alt:
        classes.append("bleed"); alt = alt.replace("[bleed]", "").strip()
    if "[wide]" in alt:
        classes.append("wide");  alt = alt.replace("[wide]", "").strip()
    fig = f'<figure class="{" ".join(classes)}">\n'
    fig += f'  <img src="{html.escape(src)}" alt="{html.escape(alt)}" loading="lazy" decoding="async">\n'
    if cap:
        fig += f'  <figcaption>{html.escape(cap)}</figcaption>\n'
    fig += "</figure>"
    return fig


def _apply_inline(text: str) -> str:
    parts = []
    last = 0
    for m in re.finditer(r'!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)', text):
        parts.append(("text", text[last:m.start()]))
        parts.append(("fig", m))
        last = m.end()
    parts.append(("text", text[last:]))
    out = []
    for kind, payload in parts:
        if kind == "fig":
            out.append(_process_inline_figure(payload))
        else:
            s = payload
            for rule, repl in _INLINE_RULES:
                if repl == '__FIGURE__': continue
                s = rule.sub(repl, s)
            out.append(s)
    return "".join(out)


def md2html(md: str) -> str:
    if not md or not md.strip():
        return ""
    lines = md.splitlines()
    out = []
    i = 0
    n = len(lines)
    footnotes = []

    def flush_paragraph(buf):
        if not buf: return
        text = " ".join(line.strip() for line in buf).strip()
        if text:
            out.append(f"<p>{_apply_inline(text)}</p>")

    while i < n:
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            i += 1; continue
        m = re.match(r'^\[\^(\w+)\]:\s*(.+)$', stripped)
        if m:
            footnotes.append((m.group(1), _apply_inline(m.group(2))))
            i += 1; continue
        if stripped.startswith("### "):
            out.append(f"<h3>{_apply_inline(stripped[4:])}</h3>"); i += 1; continue
        if stripped.startswith("## "):
            out.append(f"<h2>{_apply_inline(stripped[3:])}</h2>"); i += 1; continue
        if re.match(r'^[-*_]{3,}\s*$', stripped):
            out.append("<hr>"); i += 1; continue
        if stripped.startswith("```"):
            i += 1
            code_lines = []
            while i < n and not lines[i].strip().startswith("```"):
                code_lines.append(lines[i]); i += 1
            i += 1
            out.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
            continue
        if stripped.startswith(">"):
            quote_lines = []
            while i < n and lines[i].strip().startswith(">"):
                quote_lines.append(lines[i].strip().lstrip(">").lstrip()); i += 1
            out.append(f"<blockquote><p>{_apply_inline(' '.join(quote_lines))}</p></blockquote>")
            continue
        if re.match(r'^[-*]\s+', stripped):
            items = []
            while i < n and re.match(r'^[-*]\s+', lines[i].strip()):
                item_text = re.sub(r'^[-*]\s+', '', lines[i].strip())
                items.append(f"<li>{_apply_inline(item_text)}</li>")
                i += 1
            out.append("<ul>\n" + "\n".join(items) + "\n</ul>")
            continue
        if re.match(r'^\d+\.\s+', stripped):
            items = []
            while i < n and re.match(r'^\d+\.\s+', lines[i].strip()):
                item_text = re.sub(r'^\d+\.\s+', '', lines[i].strip())
                items.append(f"<li>{_apply_inline(item_text)}</li>")
                i += 1
            out.append("<ol>\n" + "\n".join(items) + "\n</ol>")
            continue
        if re.match(r'^!\[[^\]]*\]\([^)]+\)\s*$', stripped):
            out.append(_apply_inline(stripped)); i += 1; continue
        para = []
        while i < n and lines[i].strip() and not _is_block_start(lines[i]):
            para.append(lines[i]); i += 1
        flush_paragraph(para)

    if footnotes:
        out.append('<section class="case-footnotes">')
        out.append('<h2>Footnotes</h2>')
        out.append('<ol class="case-footnotes-list">')
        for num, body in footnotes:
            out.append(f'<li id="fn-{num}">{body} <a href="#fnref-{num}" aria-label="back to text">↩</a></li>')
        out.append('</ol>')
        out.append('</section>')
    return "\n".join(out)


def _is_block_start(line: str) -> bool:
    s = line.strip()
    if not s: return True
    if s.startswith("## ") or s.startswith("### "): return True
    if s.startswith(">") or s.startswith("```"):    return True
    if re.match(r'^[-*]\s+', s):                    return True
    if re.match(r'^\d+\.\s+', s):                   return True
    if re.match(r'^[-*_]{3,}\s*$', s):              return True
    if re.match(r'^!\[[^\]]*\]\([^)]+\)\s*$', s):   return True
    if re.match(r'^\[\^\w+\]:', s):                 return True
    return False


# ══════════════════════════════════════════════════════════════════════
# BODY MARKDOWN LOADER
# ══════════════════════════════════════════════════════════════════════

_BODY_HEADING_RE = re.compile(r'^##\s*body\s+(en|es)\s*$', re.IGNORECASE | re.MULTILINE)

def load_body_markdown(slug):
    src = COPYWORK / f"{slug}.md"
    if not src.exists():
        return None
    text = src.read_text(encoding="utf-8")
    matches = list(_BODY_HEADING_RE.finditer(text))
    if not matches:
        return None
    sections = {}
    for idx, m in enumerate(matches):
        lang = m.group(1).lower()
        start = m.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        sections[lang] = text[start:end].strip()
    return (sections.get("en", "").strip(), sections.get("es", "").strip())


# ══════════════════════════════════════════════════════════════════════
# HTML BUILDERS
# ══════════════════════════════════════════════════════════════════════

def build_tags_html(tags):
    return "\n".join(f"    <li>{t}</li>" for t in tags)


SPEC_LABELS = [
    ("scope",        "scope",        "alcance"),
    ("service",      "service",      "servicio"),
    ("deliverables", "deliverables", "entregables"),
    ("timeline",     "timeline",     "fechas"),
]


def build_specs_html(specs):
    rows = []
    for key, label_en, label_es in SPEC_LABELS:
        v = specs.get(key, {})
        en = v.get("en", "—")
        es = v.get("es", "—")
        rows.append(
            '    <div class="case-specs-row">\n'
            f'      <dt><span lang="en">{label_en}</span><span lang="es">{label_es}</span></dt>\n'
            f'      <dd><span lang="en">{en}</span><span lang="es">{es}</span></dd>\n'
            '    </div>'
        )
    return "\n".join(rows)


PLACEHOLDER_BODY = '''\
    <section class="case-in-progress" aria-label="Case study in progress">
      <span class="case-in-progress-label" lang="en">case study in progress</span>
      <span class="case-in-progress-label" lang="es">estudio de caso en proceso</span>
      <p lang="en">Full write-up for this project lands here as soon as the body copy is approved. The BLUF and specs above already tell the bottom-line story.</p>
      <p lang="es">El texto completo del proyecto aparecerá aquí en cuanto la copia esté aprobada. El BLUF y las especificaciones arriba ya cuentan la historia esencial.</p>
    </section>
'''

PLACEHOLDER_HERO = '''\
  <figure class="case-hero" data-placeholder="soon">
    <span lang="en">[ hero image pending ]</span>
    <span lang="es">[ imagen principal pendiente ]</span>
  </figure>
'''


def build_body_html(slug):
    bodies = load_body_markdown(slug)
    if not bodies:
        return PLACEHOLDER_BODY.format(slug=slug)
    en_md, es_md = bodies
    parts = []
    if en_md:
        parts.append(f'    <div lang="en" class="case-body-lang">\n{md2html(en_md)}\n    </div>')
    if es_md:
        parts.append(f'    <div lang="es" class="case-body-lang">\n{md2html(es_md)}\n    </div>')
    return "\n".join(parts) if parts else PLACEHOLDER_BODY.format(slug=slug)


# ══════════════════════════════════════════════════════════════════════
# STAMPER MAIN
# ══════════════════════════════════════════════════════════════════════

def stamp_project(p, prev, nxt):
    tpl = TEMPLATE.read_text(encoding="utf-8")

    if p["hero"]:
        hero_block = (
            '<figure class="case-hero">\n'
            f'    <img src="{p["hero"]}" alt="{p["hero_alt"]}" '
            f'width="{p["hero_w"]}" height="{p["hero_h"]}" '
            'loading="eager" decoding="async">\n'
            '  </figure>'
        )
    else:
        hero_block = PLACEHOLDER_HERO.strip()

    tpl = re.sub(
        r'<figure class="case-hero">\s*\n\s*<img[^>]*>\s*\n\s*</figure>',
        hero_block,
        tpl,
        count=1,
    )

    subs = {
        "{{SLUG}}":        p["slug"],
        "{{TITLE_EN}}":    p["title_en"],
        "{{TITLE_ES}}":    p["title_es"],
        "{{SUBTITLE_EN}}": p["subtitle_en"],
        "{{SUBTITLE_ES}}": p["subtitle_es"],
        "{{TAGS_HTML}}":   build_tags_html(p["tags"]),
        "{{SPECS_HTML}}":  build_specs_html(p["specs"]),
        "{{BLUF_EN}}":     p.get("bluf_en", "Bottom line pending."),
        "{{BLUF_ES}}":     p.get("bluf_es", "Conclusión pendiente."),
        "{{HERO_ALT}}":    p["hero_alt"],
        "{{HERO_W}}":      p["hero_w"],
        "{{HERO_H}}":      p["hero_h"],
        "{{BODY_HTML}}":   build_body_html(p["slug"]),
        "{{PREV_HREF}}":   f'{prev["slug"]}.html' if prev else "index.html",
        "{{PREV_LABEL}}":  prev["title_en"] if prev else "all work",
        "{{NEXT_HREF}}":   f'{nxt["slug"]}.html'  if nxt  else "index.html",
        "{{NEXT_LABEL}}":  nxt["title_en"]  if nxt  else "all work",
    }
    for k, v in subs.items():
        tpl = tpl.replace(k, v)

    tpl = tpl.replace("{{HERO_IMG}}", p["hero"] or "../assets/img/og/derekkiy-og.png")

    out = HERE / f'{p["slug"]}.html'
    out.write_text(tpl, encoding="utf-8")
    print(f"  [ok] {out.name}  ({len(tpl)/1024:.0f} KB)")


def main():
    if not TEMPLATE.exists():
        print(f"[err] template not found: {TEMPLATE}")
        sys.exit(1)
    print(f"Stamping {len(PROJECTS)} case-study pages from _template.html")
    n = len(PROJECTS)
    for i, p in enumerate(PROJECTS):
        prev = PROJECTS[i - 1] if i > 0 else None
        nxt  = PROJECTS[i + 1] if i < n - 1 else None
        stamp_project(p, prev, nxt)
    print("\nDone.")


if __name__ == "__main__":
    main()
