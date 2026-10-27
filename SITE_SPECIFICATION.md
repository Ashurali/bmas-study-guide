# SPECIFICATION — "BMAS Study Guide"
## An animation-first GitHub Pages study site for NYCU *Biomedical Micro Analysis Systems* (生物微型檢測技術, IIE5039)

**Audience of this document:** Claude Code. Implement it phase by phase (§15). *(decided)* = don't revisit. *(your call)* = use judgment. Ask me before deviating from any **MUST**.

---

## 1. Goal

A study site I can open on my phone or laptop anywhere that teaches each lesson by **showing, not telling**: every concept is an animated or interactive diagram first, with a few lines of text under it.

Stack, look and deployment follow my earlier site **ssd-deep-dive** (repo https://github.com/Ashurali/ssd-deep-dive, live https://ashurali.github.io/ssd-deep-dive/). This site must fix that one's main weakness: its chapters are 4,300–5,800 words each, and their 1–6 animations sit in collapsed "🎬 Animate this" blocks. Here the ratio is inverted.

Reader: me — EECS/AI master's student and software engineer, not a chemist. Chemistry and biology have to be explained visually.

Success = before or after a lecture I can play through that lesson on my phone in 20–30 minutes and handle the in-class quiz, which can show a diagram and ask what it is.

## 2. Hard constraints — read first

1. **MUST NOT commit any slide image, page render, PDF or raster image** (png/jpg/gif/webp/bmp/tif/pdf/ppt/pptx) — ever. The repo and the site are public (a GitHub Pages site is public unless its repo belongs to a GitHub Enterprise Cloud org), and most slide figures are copyrighted journal figures. Every figure on the site is an original SVG drawn in code; the only image file is an SVG logo.
2. **MUST NOT trace slide figures.** Understand the mechanism from the slide, then draw it in this site's own visual language (§8.3) and layout. Short technical phrases from slides are fine; don't paste slide text.
3. **Nothing private or administrative on the site:** no emails, phone extensions, rooms, grading details, my midterm article, or anything about my Final Champion team or approach (other teams can read a public site).
4. **Git:** commit at the end of each phase and each lesson with a plain message. **Never push.** No AI/Claude attribution or Co-Authored-By lines anywhere. I create the GitHub repo and push myself.
5. **Code:** stupid-simple over clever. Vanilla HTML/CSS/JS; no frameworks, bundlers or JS libraries in animations. Repetition across animation files is fine. No fallback paths or compatibility shims.

## 3. Working setup *(decided)*

- Run from the course folder `D:\Foreign\NYCU\Semester 2\545452 Biomedical Micro Analysis Systems` (paths contain spaces — quote them).
- Source material — read only, never copied into the repo:
  - `2026 Lesson 01.pdf` … `2026 Lesson 09.pdf`: the lecture decks (18–82 pages, up to 231 MB, figure-heavy).
  - `_extracted_text/2026 Lesson NN.txt`: pdftotext output, one form feed per page. Mostly titles and citations; the teaching content is in the figures.
  - `CLAUDE.md`: course index — schedule, lesson summaries, known slide quirks. Read it first.
- Site repo: the empty subfolder `bmas-study-guide/`. `git init` there; everything published lives there.
- Slide renders for your own eyes: render every page of every deck to PNG with PyMuPDF (`pip install pymupdf`, ~100 dpi) into `_slide_pages/LNN/pNNN.png` in the **course folder**, i.e. outside the repo. Look at every page you write about; the text files alone are not enough.
- Python: a venv at `bmas-study-guide/.venv` (gitignored).
- Add a short "Study site" section to the course `CLAUDE.md`: the repo path, and that this spec governs it.

## 4. Stack *(decided — same as ssd-deep-dive)*

MkDocs + Material for MkDocs with ssd-deep-dive's pinned `requirements.txt`, deployed by GitHub Actions. Clone ssd-deep-dive into a temp folder outside the course folder, copy what's listed, then delete the clone:

- `mkdocs.yml`: keep theme, palette, fonts, features, plugins, markdown extensions and KaTeX setup; replace name, description and nav; `site_url: https://ashurali.github.io/bmas-study-guide/`; add `theme.custom_dir: overrides`.
- `docs/assets/extra.css` (rename the `sdd-` class prefix to `bm-`), `docs/assets/javascripts/katex.js`, `docs/assets/javascripts/iframe-resize.js`.
- `.github/workflows/deploy.yml` (audit step changed per §14).
- `scripts/build_glossary.py` (adapted per §13.1).
- The home page's hero / learning-path / tile markup pattern.

Don't copy `scripts/ingest.py`, `incoming/`, `private/`, `design/` or any SSD content.

`overrides/main.html` adds `<meta name="robots" content="noindex">`: the URL works anywhere, but search engines don't list it.

## 5. Repository layout *(decided)*

```
bmas-study-guide/
├── SITE_SPECIFICATION.md          # this file
├── README.md
├── mkdocs.yml
├── requirements.txt
├── .gitignore                     # .venv/, site/, __pycache__/, Thumbs.db, .DS_Store
├── .githooks/pre-commit           # §14 audit on staged files
├── .github/workflows/deploy.yml
├── overrides/main.html            # noindex
├── plans/                         # per-lesson slide audit + build plan (committed, not published)
├── scripts/build_glossary.py
└── docs/
    ├── index.md                   # home
    ├── assets/                    # extra.css, logo.svg, javascripts/
    ├── shared/biosensor-anatomy.html
    ├── lessons/
    │   └── l04-immobilization/
    │       ├── index.md           # the lesson page
    │       └── anim/              # this lesson's animations + quiz.html
    └── reference/
        ├── glossary.md            # generated
        ├── cheat-sheet.md
        ├── quizzes.md
        ├── animations.md
        └── tags.md
```

Lesson folders: `l01-intro`, `l02-bioanalytical`, `l03-biorecognition`, `l04-immobilization`, `l05-optical`, `l06-immunoassay`, `l07-pcr`, `l08-glucose`, `l09-sequencing`. The lesson ID is the **file** number (L04); show week + date beside it, because file numbers stop matching week numbers after week 5 (see the CLAUDE.md schedule).

Animations sit next to their lesson page, so an iframe is just `src="anim/<name>.html"`.

## 6. Information architecture *(decided)*

Tabs: **Home · Lessons · Animations · Reference**.

Home:
1. One-line hero.
2. **Biosensor anatomy** (`shared/biosensor-anatomy.html`) — the framework every deck uses: biosensor = recognizer + interface + transducer (Chen, Li et al., Nano Today 2011). Tap a layer → its members, each linking to the lesson that covers it (`target="_top"` on links inside iframes). Recognizer: enzyme, bioreceptor, antibody, aptamer, DNA/RNA/PNA, MIP. Interface: adsorption, entrapment, cross-linking, covalent linker, affinity, molecular imprint. Transducer: optical/SPR, QCM, SiNW-FET, EG-FET, electrochemical, photodiode.
3. Learning path: Part I Biosensor (L01–L04) and Part II Micro-TAS (L05–L09); each card shows week, date and status (ready / not yet). Week 6 (nano-crystal) has no slides: a card with no link.
4. Tiles: Glossary · Cheat sheet · Quizzes · All animations.

Each lesson page opens with `biosensor-anatomy.html?focus=<layer>`, highlighting where the lesson sits.

## 7. Lesson page rules **(MUST — this is the point of the site)**

```markdown
---
title: "L04 — Immobilization"
tags: [interface, immobilization, enzyme, antibody]
---
# L04 — Immobilization of biomolecules on transducer surfaces
One sentence: what this lesson adds to the biosensor.

<iframe class="anim" src="../../shared/biosensor-anatomy.html?focus=interface" loading="lazy" title="Biosensor anatomy"></iframe>

??? info "Slide map — L04, 70 pages"
    page ranges → section links, so I can jump to whatever is on screen in class

## 1. <Concept>

<iframe class="anim" src="anim/<name>.html" loading="lazy" title="<Title>"></iframe>

[Open full-screen ↗](anim/<name>.html)

- at most 5 bullets

!!! tip "Key takeaway"
    one line

!!! warning "Exam trap"
    optional, 1–2 lines

📎 L04 pp. 43–44 · Source: Analyst 2015, 140, 6467 — [find it](https://scholar.google.com/scholar?q=Analyst+2015+140+6467)

## Key vocabulary
| Term | 中文 | Meaning |

## Check yourself

<iframe class="anim" src="anim/quiz.html" loading="lazy" title="L04 quiz"></iframe>
```

- **Every concept section (H2) starts with an expanded, working animation or interactive.** No animation ever goes in a collapsed block.
- Prose: at most 5 bullets (~80 words) per section, at most 2 sentences per bullet; comparison tables are fine. Aim for ≤ 1,500 words of prose per lesson, excluding tables and vocabulary. A section that needs more words needs a better animation.
- Voice: plain and direct, no filler. Define each chemistry/biology term in one clause on first use and add it to the vocabulary table.
- iframe styling lives in `extra.css` (`.md-typeset iframe.anim`), not inline.

## 8. Animation rules **(MUST)**

### 8.1 Build
- One self-contained HTML file per animation (inline SVG/CSS/JS), like ssd-deep-dive's. The only external request allowed is Google Fonts. No localStorage, no other network calls.
- ssd-deep-dive's design tokens: bg `#0b1020`, panel `#111832`, line `#26304d`, cyan `#4dd0c4`, amber `#f2b13c`, violet `#a78bfa`, red `#ef6a6a`, text `#e8eeff`, dim `#8ea0c9`; Space Grotesk / IBM Plex Sans / IBM Plex Mono.
- **Mobile first:** designed at 360 px wide; no horizontal scroll; SVG `viewBox` + `width:100%`; tap targets ≥ 40 px; nothing hover-only.
- Processes get ▶ play / ⏸ pause / step ▸ / ↺ reset. Trade-offs get sliders with a live readout. A family of related reactions shares one file with tabs.
- Every step shows **one caption line** under the diagram. That is where the words go.
- `prefers-reduced-motion`: no auto-play, step mode only.

### 8.2 What to animate
Animate **mechanisms, not slides**: several slides showing stages of one process become one interactive. During the audit (§10) classify every figure:

| Figure type | Build |
|---|---|
| Process, reaction or protocol over time (EDC/NHS, PCR cycle, ELISA, SELEX) | step-through animation |
| Trade-off or curve (pore size vs leakage, SPR dip vs angle, calibration curve) | slider with live readout |
| Structure (antibody domains, SPR prism setup, sensor stack) | tap-to-explore diagram |
| Comparison table (the five immobilization methods) | table on the page + drill questions in the quiz |
| Paper result plot, device photo, product shot, logo | no drawing: one line saying what it shows + slide pointer + Scholar link |

### 8.3 Visual language (identical across the site)
- Transducer surface = flat bar at the bottom: gold = Au, grey = glass/SiO₂, dark = polymer or electrode.
- Enzyme/protein = rounded blob, active site = notch. Antibody = Y (Fab arms with paratope tips, Fc stem). Aptamer = folded single strand. DNA = ladder. Analyte = small dots.
- Dashed line = weak/non-covalent. Solid line = covalent.
- Colour roles: recognizer cyan, interface amber, transducer violet, signal/failure red. Inside a lesson each method gets one colour and keeps it.
- Chemistry: draw only the reacting groups as simplified structural formulas; the rest of the molecule is a blob. Which groups react, which bond forms and what leaves must be correct. Label simplifications ("not to scale").

## 9. Content rules **(MUST)**
- The slides are the source of truth. Anything not on them goes in `!!! note "Background (not on slides)"`, so I can tell what the lecturer actually covered.
- Every section cites its slide pages (📎 L04 pp. x–y).
- Papers: the citation as printed on the slide + a Google Scholar search link built from it. Never invent a DOI.
- Numbers exactly as on the slides.
- Slide mistakes and inconsistencies go in `!!! info "Slide note"` — e.g. L04's summary (p.69) numbers covalent 3rd and cross-linking 4th, while p.7 and the Part headings have them the other way round; L03's title slide says "Lesson 2".
- 中文 column: standard Taiwan (Traditional) terms; leave the cell blank when unsure.

## 10. Per-lesson procedure *(decided — repeat for every lesson)*
1. Render the deck if `_slide_pages/LNN/` doesn't exist.
2. Read the lesson's CLAUDE.md summary and its `_extracted_text` file, then **look at every page render**.
3. Write `plans/lNN-plan.md`: one row per page (page · what it shows · figure type from §8.2 · which section/animation, pointer-only, or skip), then the section outline with animations assigned, then the quiz topics.
4. Build the animations in `docs/lessons/lNN-…/anim/`.
5. Write the lesson page (§7) and `anim/quiz.html` (§13.3).
6. Update home status, `reference/animations.md`, `reference/quizzes.md` and `reference/cheat-sheet.md`; run `scripts/build_glossary.py`.
7. Check the lesson against §16, then commit `Add L0N <topic>`.

## 11. Lesson 4 pilot — required interactives
Page numbers come from the text extraction; confirm them on the renders. Keep to what the slides support and mark the rest Background.

1. `stress-test.html` — the centerpiece (pp. 7–8, 69). Five mini-surfaces side by side: adsorption, entrapment, cross-linking, covalent, affinity. Buttons: wash · pH shift · heat · competing proteins. Per-surface counters "attached" and "active". Adsorption loses enzyme and picks up foreign protein; entrapment leaks a few; cross-linked stays but some turn inactive (grey); covalent stays, with a few inactive where the bond hit an essential residue; affinity stays with every active site facing up (label it biotin–streptavidin — a His-tag would release with imidazole, see #7). Below it, a qualitative stability-vs-retained-activity plot of the five.
2. `adsorption.html` (pp. 10–15). Tabs for van der Waals (δ+/δ− flicker), electrostatic (+/−) and hydrophobic patches. A pH / ionic-strength slider: the electrostatic hold weakens and enzymes drift off. A toggle for non-specific adsorption of other proteins.
3. `entrapment.html` (pp. 17–23). (a) Pore-size slider: small pores → slow analyte diffusion (response-time readout); big pores → enzymes leak out (leak counter). (b) Sol-gel stepper with TMOS: hydrolysis Si(OCH₃)₄ + H₂O → Si–OH + CH₃OH, then condensation Si–OH + HO–Si → Si–O–Si + H₂O, the network closing around the enzyme. (c) Sol → gel → xerogel (evaporation, network collapses) vs aerogel (supercritical drying, network kept); hydrogel swelling to 35 times its own weight (p.19).
4. `crosslinking.html` (pp. 30–35). Glutaraldehyde bridges snapping between lysines of neighbouring enzymes, with optional BSA filler; carrier-free routes: CLEA (precipitate → cross-link) vs CLEC (crystallize → cross-link), plus spray-drying and direct cross-linking; a heat/pH toggle where free enzyme unfolds and the cross-linked one holds its shape (p.35's point, not its data).
5. `covalent.html` (pp. 38–53; split into two files if it gets unwieldy — your call). (a) Residue explorer: Lys/N-terminus –NH₂ (abundant → random attachment), Asp/Glu/C-terminus –COOH, Cys –SH (rare → site-specific), Ser/Thr/Tyr –OH. (b) EDC vs EDC/NHS race on a carboxylated surface (pp. 43, 49): the O-acylisourea hydrolyses fast, the NHS ester survives until an amine arrives → amide; counters for coupled vs hydrolysed. (c) Aminated surface: carbodiimide vs glutaraldehyde (pp. 44–45). (d) Thiol trio (p.46): maleimide → thioether, pyridyl disulfide → disulfide (reversible), vinyl sulfone → thioether. (e) Site-specific chemistry (pp. 47–48, 50–53): photoactive linker, thiazolidine from an N-terminal Cys, α-oxo semicarbazone, Diels–Alder (diene protein on a maleimide slide), Staudinger ligation, azide–alkyne click → triazole. Point to make: most of these groups don't occur in native proteins, so there are no side reactions, but the protein has to be tagged first.
6. `linker-picker.html` (pp. 40, 42, 54). Pick the surface group and the protein group → reagent, bond formed, and a mini animation. Cover the p.40 table (enzyme –NH₂ + surface –NH₂: glutaraldehyde; + surface –OH: epichlorohydrin, silane epoxide, cyanuric chloride, cyanogen bromide, tosyl chloride, …; + surface –COOH: carbodiimide, acyl azide, CDI; enzyme –COOH + surface –NH₂: carbodiimide; –SH + –SH: 2,2′-dipyridyl disulfide — p.40 is an image, so read it off the render) and the "sensor – bifunctional linker – protein" idea of pp. 42/54.
7. `affinity.html` (pp. 56–68). (a) Random vs oriented antibodies: 20 antibodies attach through random lysines vs through the Fc; count paratopes facing the solution; add antigen dots and compare the signal. (b) Tabs: biotin/streptavidin (tetramer, 4 biotin sites), GST/GSH (fusion protein), NTA–Ni²⁺–His₆ (an "add imidazole" button releases the protein, so the surface can be regenerated), cyclodextrins α/β/γ = 6/7/8 glucose units (the guest fits by size), boronic acid ↔ cis-diols of the Fc glycans (oriented; the 2015 paper makes it oriented and irreversible, p.68).
8. `quiz.html` — 12–15 questions, at least 4 of them "which method/chemistry is this?" using the lesson's own drawings. Include the traps: covalent = enzyme–surface vs cross-linking = enzyme–enzyme; why NHS is added; CLEA vs CLEC order; reversible His-tag vs near-permanent biotin; the "detection limit ~1 µM to 1 mM" slide repeated for every method (pp. 15, 28, 36, 41, 57) — so what does the immobilization method actually change?
9. `shared/biosensor-anatomy.html` (§6).

## 12. Candidate animations for the other lessons
Starting points from the course index; the audit decides. Tell me when something listed here isn't really on the slides.
- **L01** (18 pp): "big to small" instrument scale ladder; the biosensor definition.
- **L02** (22 pp): Clark enzyme electrode (1962) — glucose oxidase consumes O₂ and the O₂ electrode reads the drop; miniaturization; commercial µTAS examples as pointers unless the slides show a mechanism.
- **L03** (50 pp): sensor-characteristics playground (calibration curve: linear range, sensitivity = slope, an interferent for selectivity, a step response for t₉₅); enzyme specificity; paratope/epitope; ELISA indirect vs sandwich; SELEX cycle (bind → wash → elute → amplify → repeat); MIP (template → polymerize → extract → rebind; template leakage).
- **L05** (76 pp): absorbance; fluorescence (excite → relax → emit); FRET distance slider; luminescence vs fluorescence (luciferase needs no excitation light); SPR in the Kretschmann setup with an angle slider and a reflectivity dip that shifts as mass binds, then a sensorgram (association → dissociation); Otto vs Kretschmann; fiber-optic SPR.
- **L06** (82 pp): ELISA indirect vs sandwich with HRP colour; Western blot pipeline (prep → SDS-PAGE → transfer → immunostain); Protein G orientation; microfluidic ELISA; antibody microarray spotting; hybridoma → monoclonal; µWestern time cut (5–10 h → 10–60 min).
- **L07** (60 pp): PCR cycle with a temperature trace and a 2ⁿ copy counter (denature → anneal → extend); roles of primers, dNTPs, polymerase and template; hot-start; thermocycler vs continuous-flow chip PCR; droplet PCR; qPCR/LAMP/RPA as far as the slides go.
- **L08** (77 pp): Clark & Lyons GOx electrode; scrubbable history timeline (1941 → 1987 → smartphone); Amplex Red/ABTS enzyme-cascade colour assays; photonic-crystal hydrogel (glucose → swelling → lattice spacing → colour shift); boronic-acid glucose binding; non-invasive routes (tattoo iontophoresis, contact lens, sweat).
- **L09** (52 pp): Sanger chain termination → fragments sorted by length → read the sequence; capillary readout; pyrosequencing (nucleotide flow → PPi → light; a homopolymer gives a bigger flash); Illumina reversible-terminator cycle; Ion Torrent (H⁺ → pH; homopolymer limit); nanopore current trace. The sequencing-cost curve is data: pointer only.

## 13. Reference layer
1. **Glossary** — adapt `build_glossary.py` to read the `## Key vocabulary` tables (`| Term | 中文 | Meaning |`) from `docs/lessons/*/index.md` and write one alphabetized table (Term | 中文 | Meaning | Lesson) to `docs/reference/glossary.md`, with the lesson cells linking back to each vocabulary section. It runs in CI before the build, as in ssd-deep-dive.
2. **Cheat sheet** — hand-written: the numbers, formulas and must-know facts from each lesson (e.g. α/β/γ-cyclodextrin = 6/7/8 glucose units), each linked to its section. KaTeX for formulas.
3. **Quizzes** — each `anim/quiz.html` holds a plain JS array of `{q, options, answer, why, slide}` (plus optional inline SVG), shows one question at a time, gives the explanation and slide pointer right after each answer, shows the score at the end, and can retry only the missed ones. `reference/quizzes.md` links all of them.
4. **Animations index** — `reference/animations.md`, grouped by lesson: title · one line · link to the lesson section · full-screen link.
5. **Tags** — a small controlled list, added to only when needed: `recognizer`, `interface`, `transducer`, `enzyme`, `antibody`, `aptamer`, `dna`, `immobilization`, `optical`, `spr`, `electrochemical`, `fet`, `microfluidics`, `immunoassay`, `pcr`, `glucose`, `sequencing`.

## 14. Deployment
- `deploy.yml` as in ssd-deep-dive: audit → glossary → `mkdocs build --strict` → deploy to Pages.
- Audit: fail if any tracked file matches `\.(png|jpe?g|gif|webp|bmp|tiff?|pdf|pptx?)$`. The same check runs in `.githooks/pre-commit` on staged files; activate it with `git config core.hooksPath .githooks` in Phase 0. The hook is the one that matters: once pushed, a file is public in the repo history even if the deploy fails.
- README: local dev (`python -m venv .venv`, `pip install -r requirements.txt`, `mkdocs serve`); the per-lesson procedure in a few lines; the no-images rule in bold; my one-time steps (create the public repo `Ashurali/bmas-study-guide`, add the remote, push, Settings → Pages → Source: GitHub Actions).

## 15. Phases (commit after each)
0. **Scaffold** — §3–§6 and §14, with home and reference stubs. Done when `mkdocs serve` shows the themed empty site, `mkdocs build --strict` passes, and the hook blocks a test PNG.
1. **Render** all nine decks into `_slide_pages/` (nothing in the repo changes).
2. **L04 plan** — `plans/l04-plan.md` per §10.3, covering all 70 pages and every §11 item. Commit, then **STOP and show me a short summary.**
3. **L04 build** — §11, home and reference pages; check §16. Commit, then **STOP: I review it on my phone before you continue.**
4. **Every next lesson** = one run of §10 and one commit, with no stop after the plan unless I ask. Order: the next upcoming lecture first — L05 (lecture 10-06), L06 (10-20), L07 (10-27), L08 + L09 (11-03) — then the past ones, L03 → L02 → L01.

## 16. Acceptance checklist (every lesson)
- [ ] `git ls-files` contains no raster image, PDF or slide file; hook and CI audit in place.
- [ ] `mkdocs build --strict` passes.
- [ ] Every concept section starts with an expanded, working animation; prose within the §7 budget.
- [ ] Every animation opened in a real browser at 360 px and desktop width: no console errors, no horizontal scroll, controls work by touch, reduced-motion mode works. (ssd-deep-dive's `.claude/launch.json` shows the `mkdocs serve` preview config. If you have no browser tool, say so and I'll check.)
- [ ] Every claim traces to a cited slide page or sits in a Background note — re-check each section against its page renders before committing.
- [ ] The quiz works end to end, with at least 4 diagram questions.
- [ ] Glossary regenerated; home status, animations index, quiz index and cheat sheet updated.
- [ ] Nothing from §2.3 on the site.

## 17. Out of scope (don't build)
- The week-6 nano-crystal lecture (no slides yet) — added later via §10 when I have the file.
- Midterm (ACS Sensors paper) and Final Champion material — private, never on this site.
- Slide viewer, offline/PWA, light-theme animations, progress tracking, comments, analytics, PDF export.
