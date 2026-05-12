# `calchamber` — BLUF module

| | |
|---|---|
| **Status**       | `drafted` — awaiting user review |
| **Wave**         | 1 — core, legacy-ready |
| **Attribution**  | Real client OK — CalChamber Alert (Volume 51 Number 9, March 28 2025) |
| **Legacy source**| [`../_archive/kiyviz-com-legacy/projects/2025-03_calchamber-infographic/README.md`](../_archive/kiyviz-com-legacy/projects/2025-03_calchamber-infographic/README.md) |
| **Hero image**   | `26Q2.1/assets/img/work/calchamber-border-tax.webp` (already wired) |
| **Page output**  | `26Q2.1/work/calchamber.html` |

## Source material

### Legacy archive
- 5 archival originals at `_archive/.../2025-03_calchamber-infographic/images/`:
  - `Map_Border-Tariff@144x-100.jpg` — full final op-ed map (3.8 MB)
  - `Portfolio_sources-Annotation.jpg` — annotated source list
  - `TODO-MEXICO.png`, `TODO-USA.png`, `TODO-ZONA.png` — three detail insets
- Rich legacy copy with a complete **data sources** section worth lifting verbatim into Sources & credits

### Footnote candidates (from the legacy text)

| Term | Footnote gloss |
|---|---|
| `IVA` | *Impuesto al Valor Agregado* — Mexico's value-added tax. Functionally equivalent to a U.S. state sales tax for everyday consumer goods. |
| `INEGI` | *Instituto Nacional de Estadística y Geografía* — Mexico's national statistics office. Their *Marco Geoestadístico* dataset is the canonical municipal-boundary file. |
| `SAT` | *Servicio de Administración Tributaria* — Mexico's tax authority. They publish the list of border-zone municipalities eligible for the reduced 8% IVA rate. |
| `Marco Geoestadístico` | INEGI's official boundary file, updated periodically. The 2024 release reflects the 2022 creation of San Felipe as a new municipality (older boundary files don't). |
| `op-ed` | Opinion editorial — a non-staff opinion piece in a publication, typically arguing a single thesis with a single supporting graphic. |
| `QGIS` | Free open-source geographic information system. Standard tool for hand-built cartography. |

## Review of legacy copy

> KiyViz was tasked with creating a graphic for an Op-Ed in the March 28
> Edition of the CalChamber Alert to visualize consumption tax rates along
> the U.S.–Mexico border.
>
> The graphic was tasked with visualizing the op-ed's primary argument that
> imposing reciprocal tariffs would distort the region's status quo of
> comparable consumption tax rates on both sides of the U.S.–Mexico border.

**Strengths to preserve**

- Names the publication, edition, and date precisely (CalChamber Alert Vol 51 No 9, March 28 2025)
- Has a real **data sources** paragraph naming Natural Earth, INEGI, Tax Foundation, and SAT — that's gold for the Craft / Sources sections
- Names the *primary argument* of the op-ed (reciprocal-tariff effect on border-zone tax parity) which is the *why* this map mattered
- Notes the production-pressure rationale ("tight production window") and the format constraint ("space limitations from publication requirements")
- Describes the hybrid QGIS → Illustrator workflow

**Weaknesses to fix**

- Two consecutive sentences both open with "KiyViz was tasked with…" / "The graphic was tasked with…" (passive, stalls the read)
- Buries the *5-second-read* design thesis in the middle of paragraph 3
- "primary argument that imposing reciprocal tariffs would distort the region's status quo of comparable consumption tax rates on both sides of the U.S.–Mexico border" — 25-word subordinate clause; needs to be cut into two sentences
- Doesn't explicitly say the map's job: **make a visual answer to the policy question fast enough for a busy reader**
- No outcome — did the op-ed get pickup? Did the map get reprinted? Did CalChamber commission more cartography?

## Suggested changes

- [ ] Lead with the visual thesis: "5-second snapshot" is the BLUF
- [ ] Quote the op-ed's question, then quote the map's answer
- [ ] Promote the data sources to a dedicated Sources section with INEGI/SAT/Tax Foundation footnoted
- [ ] Move the production-window detail into Process as a constraint
- [ ] Add the QGIS → Illustrator hybrid as a Craft bullet with the rationale (final styling needed Illustrator's path tools)
- [ ] Footnote IVA, SAT, INEGI, Marco Geoestadístico, op-ed
- [ ] Outcome — needs confirmation from Derek (was the op-ed picked up beyond CalChamber Alert?)

## Open questions for the user

1. **Outcome detail** — was the op-ed reprinted, cited, or referenced after publication? Did CalChamber commission follow-up cartography?
2. **Hero crop** — keep the full op-ed mockup as hero, or use the close-up `Map_Border-Tariff@144x-100.jpg` map detail without the newspaper frame?
3. **The three detail insets** (`TODO-MEXICO`, `TODO-USA`, `TODO-ZONA`) — are these final, or were they working files? OK to publish?
4. **Co-authorship credit** — was the op-ed author named in the CalChamber piece? If so, credit them in Sources.

## New copy — BLUF format

*Drafted in next pass. Stub only.*

### Bottom line
> *(≤ 25 words. The thesis: a 5-second visual answer to a tariff-policy question for a busy CalChamber readership.)*

### TL;DR
- **the ask** — A graphic for an op-ed in CalChamber Alert Vol 51 No 9.
- **the constraints** — *(deadline, space, technical sourcing across two countries)*
- **the approach** — *(the 5-second-read design move, county-level granularity)*
- **the deliverable** — *(single op-ed map + secondary comparison sub-graphic, print-ready)*
- **the outcome** — *(needs confirmation)*

### Context, Process, Craft notes, Gallery, Sources, Footnotes
*Drafted below under `## body en` and `## body es`.*

---

## Bottom line (for stamper catalog)

**EN:** A single op-ed map that answered a two-country tariff question in five seconds, built in QGIS from INEGI and Natural Earth data on a tight production window.

**ES:** Un mapa editorial que respondió una pregunta arancelaria binacional en cinco segundos, construido en QGIS con datos de INEGI y Natural Earth bajo un plazo ajustado.

---

## body en

## The ask

The CalChamber Alert[^1] was running an op-ed in Volume 51 Number 9 (March 28, 2025) about proposed reciprocal tariffs along the U.S.–Mexico border. The op-ed's core argument: imposing new tariffs would distort an existing equilibrium. U.S. state sales taxes and Mexican **IVA**[^2] rates are already roughly comparable in the border-zone municipalities on both sides.

They needed a single graphic that would make that equivalence visible in **five seconds**, on newsprint, inside the column width the op-ed had reserved.

## The approach

A single-frame thematic map is a rare thing in policy publishing. Usually a chart does the work. Here, the argument was geographic — *where* the tax rates matched mattered more than *how much* they matched — so a county-level choropleth was the right shape of answer.

The production constraint was the interesting part. A two-country border map needs administrative boundaries from two countries' statistics offices, and in early 2025 there was a catch: Mexico created a new municipality, San Felipe, in 2022. Natural Earth's global boundary file didn't reflect the change yet. Using the old file would have drawn the map wrong on the Mexican side, in print, in a newspaper the CalChamber readership actually reads. That's not an acceptable failure mode for a policy publication.

The fix was to substitute **INEGI**'s *Marco Geoestadístico 2024*[^3] for the Mexican half of the map. INEGI's file is the canonical current-year administrative boundary dataset for Mexico, and the 2024 release is the first one that reflects the San Felipe creation.

## Process

1. **Source U.S. boundaries** from Natural Earth's `ne_10m_admin_2_counties` for the county-level outlines on the California, Arizona, New Mexico, and Texas sides.
2. **Source Mexican boundaries** from INEGI's *Marco Geoestadístico 2024* — the only currently-accurate file that reflects the 2022 municipal changes.
3. **Join tax-rate data** from the Tax Foundation's *State and Local Sales Tax Rates, 2024* for the U.S. side and **SAT**[^4]'s published border-zone IVA list for the Mexican side (which includes the reduced 8% border-zone rate).
4. **Build the map in QGIS**, starting from the combined boundary layer and applying a choropleth fill keyed to the joined tax-rate data.
5. **Finish the styling in Adobe Illustrator** — QGIS handles cartography, Illustrator handles the final type, legend, and publication fit.
6. **Add a secondary sub-graphic** inside the space the op-ed had allocated — a small quantitative comparison of tax rates in the U.S.–Mexico border region to anchor the map's argument with numbers.

![Final published op-ed map showing U.S.–Mexico border-zone consumption tax rates by county and municipality](../assets/img/work/calchamber-border-tax.webp "Final published op-ed map. CalChamber Alert Vol 51 No 9, March 28 2025.")

## Craft notes

- **boundaries** — Natural Earth Admin 2 for the U.S. side; INEGI *Marco Geoestadístico 2024* for the Mexican side. The 2024 INEGI release is the only currently-accurate file that reflects the 2022 creation of San Felipe municipality.
- **projection** — Standard Web Mercator. The region is small enough relative to the earth that distortion is negligible at this scale.
- **tax data** — U.S. rates from Tax Foundation's 2024 state and local sales tax report; Mexican IVA rates from SAT's published border-zone eligibility list (the reduced 8% rate applies only to specific border municipalities).
- **hybrid workflow** — QGIS for the cartography, Illustrator for the final styling. Hybrid workflows beat single-tool purity when the deadline is short and the publication has specific column-width constraints.

## Sources & credits

- **Publication** — CalChamber Alert, Vol 51 No 9, March 28, 2025
- **Administrative boundaries (U.S.)** — [Natural Earth 1:10m Admin 2 Counties](https://www.naturalearthdata.com/)
- **Administrative boundaries (Mexico)** — INEGI, *Marco Geoestadístico 2024*
- **U.S. tax rates** — Tax Foundation, *State and Local Sales Tax Rates, 2024*
- **Mexican IVA rates** — SAT (Servicio de Administración Tributaria), border-zone eligibility list

[^1]: CalChamber Alert — the weekly policy publication of the California Chamber of Commerce. Circulates to California business leaders, legislators, and policy staff.
[^2]: IVA — *Impuesto al Valor Agregado*, Mexico's value-added consumption tax. Functionally comparable to a U.S. state sales tax for everyday consumer goods. The federal rate is 16%; specific border-zone municipalities qualify for a reduced 8% rate.
[^3]: Marco Geoestadístico — INEGI's canonical administrative-boundary file for Mexico, updated periodically as municipalities change. The 2024 release was the first to reflect the creation of San Felipe as a new municipality in 2022; older files still drew the old boundary.
[^4]: SAT — *Servicio de Administración Tributaria*, Mexico's federal tax authority. Equivalent to the IRS in the U.S. Publishes the annual list of border-zone municipalities eligible for the reduced 8% IVA rate.

## body es

## El encargo

CalChamber Alert[^1] publicaba un artículo de opinión en el Volumen 51 Número 9 (28 de marzo de 2025) sobre propuestas de aranceles recíprocos en la frontera EE. UU.–México. El argumento central del artículo: imponer nuevos aranceles distorsionaría un equilibrio existente. Los impuestos al consumo en EE. UU. y el **IVA**[^2] mexicano ya son aproximadamente comparables en los municipios fronterizos de ambos lados.

Necesitaban un gráfico único que volviera visible esa equivalencia en **cinco segundos**, en papel periódico, dentro del ancho de columna que el artículo tenía reservado.

## El enfoque

Un mapa temático de un solo cuadro es algo raro en publicaciones de política pública. Normalmente una gráfica de barras hace el trabajo. Aquí, el argumento era geográfico — *dónde* coincidían las tasas importaba más que *cuánto* coincidían — así que un coroplético a nivel de condado y municipio era la forma correcta de respuesta.

La restricción de producción fue lo interesante. Un mapa fronterizo binacional necesita límites administrativos de dos oficinas de estadística distintas, y a principios de 2025 había una trampa: México creó un nuevo municipio, San Felipe, en 2022. El archivo de límites globales de Natural Earth todavía no reflejaba el cambio. Usar el archivo viejo habría dibujado el mapa mal en el lado mexicano, en imprenta, en una publicación que los lectores de CalChamber realmente leen. Ese no es un modo de fallo aceptable para una publicación de política.

La solución fue sustituir el *Marco Geoestadístico 2024* de **INEGI**[^3] por la mitad mexicana del mapa. El archivo de INEGI es el conjunto de límites administrativos canónico y actual para México, y la versión 2024 es la primera que refleja la creación de San Felipe.

## El proceso

1. **Límites de EE. UU.** desde Natural Earth `ne_10m_admin_2_counties` para los condados de California, Arizona, Nuevo México y Texas.
2. **Límites de México** desde el *Marco Geoestadístico 2024* de INEGI — el único archivo actualmente correcto que refleja los cambios municipales de 2022.
3. **Datos de tasas** desde el reporte *State and Local Sales Tax Rates, 2024* de Tax Foundation para EE. UU. y la lista de zona fronteriza publicada por **SAT**[^4] para el IVA mexicano (incluida la tasa reducida del 8% para municipios fronterizos).
4. **Construcción del mapa en QGIS**, aplicando un relleno coroplético sobre la capa de límites combinada.
5. **Terminado en Adobe Illustrator** — QGIS maneja la cartografía, Illustrator maneja la tipografía final, la leyenda y el ajuste a la publicación.
6. **Sub-gráfico secundario** incluido en el espacio asignado — una comparación cuantitativa de las tasas en la región fronteriza que ancla el argumento del mapa con números.

![Mapa final publicado del artículo de opinión con las tasas del impuesto al consumo en la frontera EE. UU.–México por condado y municipio](../assets/img/work/calchamber-border-tax.webp "Mapa final publicado. CalChamber Alert Vol 51 No 9, 28 de marzo de 2025.")

## Detalles de ejecución

- **límites** — Natural Earth Admin 2 para el lado estadounidense; INEGI *Marco Geoestadístico 2024* para el lado mexicano. La versión 2024 del archivo de INEGI es la única actualmente correcta que refleja la creación del municipio de San Felipe en 2022.
- **proyección** — Web Mercator estándar. La región es suficientemente pequeña para que la distorsión sea despreciable a esta escala.
- **datos fiscales** — Tasas de EE. UU. desde el reporte de impuestos de Tax Foundation 2024; IVA mexicano desde la lista oficial de zona fronteriza publicada por SAT (la tasa reducida del 8% aplica solo a municipios fronterizos específicos).
- **flujo híbrido** — QGIS para la cartografía, Illustrator para el acabado. Los flujos híbridos ganan a la pureza de una sola herramienta cuando el plazo es corto y la publicación tiene restricciones específicas de columna.

## Fuentes y créditos

- **Publicación** — CalChamber Alert, Vol 51 No 9, 28 de marzo de 2025
- **Límites administrativos (EE. UU.)** — [Natural Earth 1:10m Admin 2 Counties](https://www.naturalearthdata.com/)
- **Límites administrativos (México)** — INEGI, *Marco Geoestadístico 2024*
- **Tasas de EE. UU.** — Tax Foundation, *State and Local Sales Tax Rates, 2024*
- **Tasas del IVA mexicano** — SAT (Servicio de Administración Tributaria), lista de zona fronteriza

[^1]: CalChamber Alert — la publicación semanal de política pública de la California Chamber of Commerce. Circula entre líderes empresariales, legisladores y personal de política pública en California.
[^2]: IVA — *Impuesto al Valor Agregado*, el impuesto al consumo federal de México. Comparable al impuesto sobre ventas estatal en EE. UU. para bienes de consumo diarios. La tasa federal es 16%; municipios específicos de la zona fronteriza califican para una tasa reducida del 8%.
[^3]: Marco Geoestadístico — el archivo canónico de límites administrativos de INEGI para México, actualizado periódicamente conforme cambian los municipios. La versión 2024 fue la primera en reflejar la creación de San Felipe como nuevo municipio en 2022; los archivos anteriores aún dibujaban el límite antiguo.
[^4]: SAT — *Servicio de Administración Tributaria*, la autoridad fiscal federal de México. Equivalente al IRS en EE. UU. Publica anualmente la lista de municipios fronterizos elegibles para la tasa reducida del 8% del IVA.
