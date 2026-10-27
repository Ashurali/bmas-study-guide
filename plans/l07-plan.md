# L07 plan — The polymerase chain reaction (PCR)

Deck: `2026 Lesson 07.pdf`, 60 pages. Week 8, lecture 2026-10-27. Lesson folder: `docs/lessons/l07-pcr/`.

**Pilot change:** on 2026-10-27 the owner asked for L07 instead of L04 as the pilot (spec §15 Phase 2–3), because it's the current lecture. This plan takes the place of spec §11 for the pilot build; §11 (L04) waits for L04's turn. The pilot still includes `shared/biosensor-anatomy.html` (§11.9).

Biosensor-anatomy focus: `?focus=recognizer`. PCR is a Part II µTAS topic. Its specificity comes from DNA primers, i.e. the recognizer member "DNA/RNA/PNA", which will link to this lesson.

Tags: `pcr`, `dna`, `enzyme`, `microfluidics`, `sequencing`.

L07 colour roles (spec §8.3: one colour per role, kept across the lesson): template strand = cyan, new strand = amber, primer = violet, junk product / errors = red; polymerase = rounded grey-blue blob. Temperature zones use a fixed scale: 95 °C red-orange, 72 °C amber, 55 °C blue.

## 1. Page audit

Type key (spec §8.2): **P** process → step-through · **T** trade-off → slider · **S** structure → tap-to-explore · **C** comparison table → page table + quiz drill · **R** result/photo/product/logo → one line + pointer · **—** skip (title, divider, admin).

| p. | What it shows | Type | Use |
|---|---|---|---|
| 1 | Course title card (course numbers, lecturer, email) | — | skip (admin, §2.3) |
| 2 | Title "The polymerase chain reaction (PCR)" | — | skip |
| 3 | Outline: 1 DNA replication · 2 PCR system · 3 Advanced DNA replication | — | slide map |
| 4 | Divider: Part I DNA replication | — | slide map |
| 5 | Replication definition (origins, initiator proteins); 1 copy → 2 copies, template blue / new red; binary fission (replicate → segregate → cytokinesis) | P | §1 `replication.html` tab "Copy"; fission = one line |
| 6 | In vitro doubling tree: 1 → 2 → 4 → 8 → 16 copies over 4 cycles; the 2 original strands persist | P | §2 `pcr-cycle.html` strand tree + 2ⁿ counter |
| 7 | In vivo chemistry: 3′-OH attacks the α-phosphate of the incoming dNTP, PPᵢ leaves; polymerase misincorporation → exonuclease removes mispaired base → correct base | P | §1 `replication.html` tabs "Add a nucleotide", "Proofreading" |
| 8 | PCR: 1980s, Kary Mullis; function (in vitro enzymatic synthesis, selective amplification); 5 requirements; Mullis photo | P | §2 `pcr-cycle.html` ingredients panel; photo → none; typo "DNC/cDNA" → Slide note |
| 9 | PCR schematic: denaturation 94–96 °C, annealing ~68 °C, elongation ca. 72 °C; strands → 4 copies | P | §2 `pcr-cycle.html`; temperatures → Slide note (inconsistent across deck) |
| 10 | "Requires" list, polymerase highlighted | — | slide map (§3 starts here) |
| 11 | Embedded video (blank in PDF) | R | pointer "PCR video shown in class" |
| 12 | Mullis receiving the 1993 Nobel Prize in Chemistry (photo) | R | one line in §2 |
| 13 | 98 °C denature → 48–72 °C annealing → 68–72 °C extending, cycle arrow; polymerase blob on DNA | P | §2 `pcr-cycle.html`; temperatures → Slide note |
| 14 | Taq: Thermus aquaticus, Chien et al. 1976, hot springs; replaced E. coli polymerase; optimum 75–80 °C; half-life >2 h at 92.5 °C, 40 min at 95 °C, 9 min at 97.5 °C; 1000 bp in <10 s at 72 °C; photos | T | §3 `polymerase.html` tab "Heat survival"; photos → none |
| 15 | Table: Taq, HS Taq, FS Taq, Pfu, Taq Plus, LongTaq, Fusion pfu × feature / amplification size / fidelity / sensitivity / product ends / application | C | §3 page table + quiz; "5′-3′ Exonclease" → Slide note |
| 16 | Price list, e.g. Power Taq 500 U NT$500 vs Superior Pfu 500 U NT$3,500 | R | one line in §3 (Pfu costs more) |
| 17 | PCR error table (Nucl. Acids Res. 1996, 24(18), 3546): Pfu 1.3 ± 0.2, Taq 8.0 ± 3.9 (×10⁻⁶) | R→T | numbers drive §3 `polymerase.html` tab "Fidelity" |
| 18 | Pfu fidelity vs pH (best ~8.5–9; exo⁻ Pfu 25–230 ×10⁻⁶), MgSO₄ (worst at 1 mM, best ~2 mM), dNTP (rises with concentration) | R | one line per trend in §3 + pointer; "Mg+" → Slide note |
| 19 | Thermal profile: initial denaturation, 94/55/72 °C, 25–30 cycles, 10⁵-fold amplification, hold 4 °C; non-specific annealing during the ramp (mispriming, primer dimers); Taq antibody denatured at the first heat step | P | §4 `hot-start.html` ramp race + tab "Antibody"; "10⁵-fold" → Slide note |
| 20 | Hot-start types: 1 CleanAmp primer (heat-removable group at the 3′ end), 2 CleanAmp dNTP (thermolabile THF group on 3′-O, removed at 95 °C), 3 aptamer-blocked Taq (released >60 °C, rebinds <55 °C) | P | §4 `hot-start.html` tabs "Primer", "dNTP", "Aptamer" |
| 21 | Additives: BSA 0.1–0.8 µg/µL; DMSO 2–5 % v/v; glycerol 5–10 % v/v; stringency enhancers (formamide, betaine, TMAC); non-ionic detergents 0.1–1 %, NOT SDS (0.01 % SDS → ~10 % Taq activity) | C | §4 page table + quiz; "inhibitory at ≤ 10 %" → Slide note |
| 22 | Divider: Part II PCR system (waterbath, thermocyclers, BioChip) | — | slide map |
| 23 | Temperature–time profile from 25 °C: denature ~94, anneal ~50, extend ~72, with strand sketches | P | §2 `pcr-cycle.html` temperature trace |
| 24 | "Requires" list, temperature cycles highlighted | — | slide map |
| 25 | Divider: 5. PCR → waterbath | — | slide map |
| 26 | Waterbath PCR: 95 °C 5 min → 55 °C 3 min → 72 °C 5 min, 35 cycles = 8 hours; Mullis "Yes, that is what I did." | P | §5 `move-the-sample.html` tab "Water baths" |
| 27 | Three-chamber PCR bath (95/72/55 °C, 3 × 1.2 L, $1,000) | R | one line in §5 |
| 28 | "PCR from 1980 to 2010": 1987 homemade rig, 3-bath machine, modern cycler | R | one line in §5 |
| 29 | Divider: 5. PCR → thermocyclers | — | slide map |
| 30 | Thermocycler program: 94.0 °C 5:00 → 25 × (94.0 0:30, 55.0 0:30, 72.0 0:30) → 72.0 7:30 → 4.0 ∞; 96-well block; 70 µL tube in the metal block | P | §6 `heat-in-place.html` tab "Thermocycler" |
| 31 | Measured block/sample temperature traces (Diagnostics 2013, 3, 33): sample lags the steps, slight undershoot at annealing | T | §6 `heat-in-place.html` lag view + pointer |
| 32 | Repeat of p.6 doubling tree | P | §2 (pointer only) |
| 33 | Gel electrophoresis: loading wells, cathode (−) → anode (+), band photo with ladders | P | §7 `gel-multiplex.html` tab "Run a gel" |
| 34 | Collage of thermocyclers, "$20,000" | R | one line in §6 |
| 35 | Multiplex PCR: 4 variants, 4 primer pairs in one tube → 4 bands of different sizes beside a marker | P | §7 `gel-multiplex.html` tab "Multiplex" |
| 36 | Divider: 5. PCR → BioChip | — | slide map |
| 37 | Continuous-flow chip (Science 280 (5366) 1046, 1998): serpentine channel through 95 °C melting / 77 °C extension / 60 °C annealing zones; buffer + sample in, product out; 10 mm scale | P | §8 `move-the-sample.html` tab "Flow chip" |
| 38 | Chip with 95/72/55 °C zones, RT + PCR inlets, outlets after 20/25/30/35/40 cycles; cycle diagram (Nature 422, 28, 2003) | P | §8 same tab (outlet picker) |
| 39 | Segmented flow: samples (black) separated by air bubbles and intervening washes | P | §8 same tab ("load 3 samples" toggle) |
| 40 | RT-PCR product vs cycle number (rises 20 → 30, levels off by 35–40) and vs input RNA (10⁸ molecules, 1 kb, 30 cycles) | R | one line in §8 (plateau) + pointer |
| 41 | Divider: Part III → microPCR | — | slide map |
| 42 | microPCR (Mol. BioSyst. 2006, 2, 292): 1 µL sample under oil on glass, over a silicon ring with heater + sensor, on a long link arm | S | §9 `heat-in-place.html` tab "microPCR" |
| 43 | Divider: Part III → Microdroplet PCR | — | slide map |
| 44 | Bulk volumes A, B vs the same volumes split into droplets; 2 red droplets visible only in the split version (no text) | T | §10 `droplets.html` tab "Why split?" |
| 45 | Droplet generation (oil + Rf-COOH surfactant, protein/buffer/substrate streams); one primer pair per target per tube → droplet library; beads with biotinylated primer 1 on streptavidin magnetic beads + templates → water-in-oil emulsion (Nature Biotechnology 27, 1025, 2009) | P | §10 `droplets.html` tab "Emulsion PCR" |
| 46 | Emulsion PCR on beads: one template + dNTPs + primer 2 + polymerase per droplet → bead coated with identical copies → fluorescent probes A/B → flow cytometry (FL1 Alexa 488 vs FL2 R-phycoerythrin) | P | §10 same tab |
| 47 | Droplet sequencing: single dsDNA molecule captured → pyrophosphorolysis releases nucleotides → one per droplet → cascade reaction fluoresces → call the base, keep droplet order → read sequence; chip photo | P | §10 `droplets.html` tab "Droplet sequencing" |
| 48 | Embedded video (blank) | R | pointer |
| 49 | Divider: Part III → Rotary PCR | — | slide map |
| 50 | Ultrafast rotary PCR (Lab Chip 2012, 12, 1598): motor rotates the microchip over 95 °C (i) / 55 °C (ii) / 72 °C (iii) thermal blocks = 1 cycle; Teflon cover | P | §11 `move-the-sample.html` tab "Rotary" |
| 51 | Photos: rotary stage, thermal blocks, chips | R | one line in §11 |
| 52 | Divider: Part III → Single DNA replication | — | slide map |
| 53 | PacBio SMRT ("single molecule, real-time"): polymerase fixed at the bottom of a well, labelled nucleotide incorporated, light from below; fluorescence trace 104.5–108.5 s with called bases | P | §12 `smrt.html` |
| 54 | Embedded video (blank) | R | pointer |
| 55 | "Extra addition — 4. Advanced PCR system": qPCR, LAMP, RPA, iiPCR | — | slide map |
| 56 | qPCR — embedded video only (blank) | R | §13 Background (see open question 2) |
| 57 | LAMP — embedded video only (blank) | R | §13 Background |
| 58 | RPA — embedded video only (blank) | R | §13 Background |
| 59 | iiPCR — embedded video only (blank) | R | §13 Background |
| 60 | Summary (outline + part 4) | — | slide map |

## 2. Section outline

Order follows the deck. Each H2 opens with its animation (spec §7). `?tab=` picks the starting tab of a multi-tab file, so one file can open several sections.

| § | H2 | Pages | Opens with | Page extras |
|---|---|---|---|---|
| 1 | DNA replication: one copy becomes two | 4–7 | `replication.html` | binary fission one-liner (p.5) |
| 2 | PCR: five ingredients, three temperatures | 8–13, 23, 32 | `pcr-cycle.html` (centerpiece) | Nobel 1993 line (p.12); temperatures Slide note; Background: exact-length product appears from cycle 3 |
| 3 | The polymerase: Taq vs Pfu | 10, 14–18 | `polymerase.html` | p.15 table; p.16 cost line; p.18 trend lines; proofreading-direction Slide note |
| 4 | Keeping PCR specific: hot start and additives | 19–21 | `hot-start.html` | p.21 additives table; DMSO Slide note |
| 5 | Water-bath PCR | 22, 24–28 | `move-the-sample.html?tab=bath` | p.27 and p.28 one-liners |
| 6 | Thermocyclers | 29–31, 34 | `heat-in-place.html?tab=cycler` | $20,000 line (p.34); comparison table of all heating methods |
| 7 | Reading the product: gel electrophoresis and multiplex PCR | 32–33, 35 | `gel-multiplex.html` | Background: why DNA runs to the anode, small runs fast |
| 8 | PCR on a chip: continuous flow | 36–40 | `move-the-sample.html?tab=flow` | plateau line (p.40) |
| 9 | microPCR: 1 µL on a micro-heater | 41–42 | `heat-in-place.html?tab=micro` | Background: why a small volume heats faster |
| 10 | Microdroplet PCR | 43–48 | `droplets.html` | Slide note: bead figures (pp. 45–46) and droplet sequencing (p.47) carry no citation of their own |
| 11 | Rotary PCR | 49–51 | `move-the-sample.html?tab=rotary` | photo line (p.51) |
| 12 | Single-molecule replication: PacBio SMRT | 52–54 | `smrt.html` | — |
| 13 | Beyond classic PCR: qPCR, LAMP, RPA, iiPCR | 55–59 | `beyond-pcr.html` | whole section in a Background note (videos only on slides) |
| — | Key vocabulary | | | table |
| — | Check yourself | | `quiz.html` | |

Prose budget: 13 sections × ≤ 5 bullets ≈ 1,000–1,300 words.

## 3. Animations

All live in `docs/lessons/l07-pcr/anim/` and follow spec §8: 360 px first, one caption line per step, ▶ ⏸ step ▸ ↺ on processes, no auto-play under reduced motion.

1. **`replication.html`** (pp. 5, 7). Tabs:
   - *Copy*: the helix unzips and each cyan template strand gets an amber partner → two helices, each half old and half new (semi-conservative; the term is Background).
   - *Add a nucleotide*: only the reacting groups drawn. The 3′-OH at the end of the growing strand attacks the α-phosphate of the incoming dNTP → a 3′–5′ phosphodiester bond forms, PPᵢ (β+γ phosphates) leaves, and the strand grows 5′→3′. The incoming base pairs with the template (A–T, G–C).
   - *Proofreading*: a wrong base goes in (red) → the strand moves to the exonuclease site → the base is cut off → the correct base goes in. Captions follow p.7's three panels.
2. **`pcr-cycle.html`** (pp. 6, 8–9, 13, 23, 30) — centerpiece.
   - Top: a tube with tap-to-name ingredients (template, 2 primers, dNTPs, thermostable polymerase) plus the 5th requirement, the temperature cycle, shown as the trace.
   - Middle: one template region. Denature (strands part) → anneal (violet primers land on their complementary sites, facing each other) → extend (polymerase adds amber nucleotides 5′→3′).
   - Bottom: the temperature trace drawn live from the p.30 program (94 °C 5:00 hold, then 94/55/72 °C for 0:30 each). Copy counter 2ⁿ with a log bar. Strand-tree view for cycles 1–4 that keeps the 2 original cyan strands visible (p.6).
   - Cycle slider up to 25 (p.30) / 35 (p.26): ideal 2ⁿ next to a "real" curve that levels off. The plateau is from p.40; the efficiency number used for the curve is Background.
3. **`polymerase.html`** (pp. 14–17). Tabs:
   - *Heat survival*: denaturation temperature buttons 92.5 / 95 / 97.5 °C (half-life >2 h / 40 min / 9 min, p.14) and a cycle slider. Readout: % of Taq still active after the p.30 program's time at that temperature (exponential decay — the model is Background). An "E. coli polymerase" button shows it dying in the first denaturation (p.14 says Taq replaced it).
   - *Fidelity*: product length (bp) and template doublings sliders. Taq 8.0 vs Pfu 1.3 errors per 10⁶ bp per doubling (p.17). Readout: % of copies carrying ≥ 1 error, as 1 − (1 − rate)^(length × doublings) — the formula is Background. Row of 20 product molecules with red error ticks. An "exo⁻ Pfu" toggle uses the p.18 value to show what losing proofreading costs.
   - *Speed* readout on both tabs: 1000 bp in < 10 s at 72 °C (p.14) → minimum extension time for the chosen length.
4. **`hot-start.html`** (pp. 19–20).
   - *Ramp race*: two tubes heat from 22 °C. On the way up, primers misprime and form primer dimers. Ordinary Taq extends them (red junk); hot-start Taq stays blocked until the first 94 °C step. Readout: target vs junk after a few cycles.
   - Mechanism tabs: *Antibody* (p.19: antibody on Taq, denatured by the first heat), *Primer* (p.20: heat-removable group at the 3′ end blocks extension), *dNTP* (p.20: THF group on the 3′-O comes off at 95 °C), *Aptamer* (p.20: aptamer on Taq, released > 60 °C, rebinds < 55 °C, reversible).
   - Optional tab, all Background: an *annealing-temperature* slider. Too low → wrong sites bind (extra bands); too high → primers don't stay on (no product). Ties to p.13's 48–72 °C range.
5. **`gel-multiplex.html`** (pp. 33, 35).
   - *Run a gel*: load ladder + samples, press run: bands migrate from cathode (−) toward anode (+), small fragments farther. Tap a band → read its size off the ladder.
   - *Multiplex*: toggle 4 primer pairs in one tube → each adds a product of a different length → 4 separate bands beside the marker (p.35).
6. **`move-the-sample.html`** — fixed temperature zones, the sample moves (pp. 26–27, 37–39, 50). Tabs:
   - *Water baths* (p.26): the tube hops 95 → 55 → 72 °C by hand, 5 + 3 + 5 min; clock readout reaches 35 cycles ≈ 8 h (exactly 455 min).
   - *Flow chip* (pp. 37–39): a sample plug flows along a serpentine through 95 / 72 / 55 °C bands (p.38; p.37's 95/77/60 shown as a note). Each loop is one cycle; pick an outlet at 20/25/30/35/40 cycles; a "3 samples" toggle sends plugs separated by air bubbles and washes (p.39). Flow-speed slider: time per cycle drops, and if the plug crosses the 72 °C band faster than the extension time from p.14, product falls (Background trade-off).
   - *Rotary* (p.50): the chip arm turns over 95 °C (i) → 55 °C (ii) → 72 °C (iii) blocks = 1 cycle; dwell slider.
   - All tabs: the sample-temperature trace jumps between plateaus — no block to heat and cool.
7. **`heat-in-place.html`** — the sample stays put, the heater changes temperature (pp. 30–31, 42). Tabs:
   - *Thermocycler*: the p.30 program on a 96-well block, 70 µL tube. Programmed vs sample trace; the sample lags each step (p.31). Total-time readout ≈ 50 min plus ramps.
   - *microPCR*: tap-to-explore the p.42 structure (1 µL sample, oil cap, glass, silicon ring, heater, sensor, link arm). The same trace view with 1 µL instead of 70 µL: the lag nearly vanishes (physics Background).
8. **`droplets.html`** (pp. 44–47). Tabs:
   - *Why split?* (p.44): 2 target molecules in a bulk volume vs the same volume split into N droplets; partition slider (1 → 96); after "PCR" only droplets that held a target light up and can be counted. The p.44 slide has no text, so the "rare targets become countable" reading is labelled as the point of the figure.
   - *Emulsion PCR* (pp. 45–46): oil + surfactant pinch off droplets → beads carrying primer 1 + templates → most droplets get 0 or 1 template → bead gets covered with identical copies → fluorescent probe A or B → flow-cytometry dot plot with two clusters.
   - *Droplet sequencing* (p.47): a captured DNA molecule releases nucleotides one by one (pyrophosphorolysis) → each goes into its own droplet in order → droplet fluoresces with the base's colour → read the sequence from droplet order.
9. **`smrt.html`** (p.53): one polymerase fixed at the bottom of a well, lit from below. Each incoming labelled nucleotide flashes its colour while it is being incorporated; the fluorescence trace scrolls and the base call appears above each pulse; the read builds in real time.
10. **`beyond-pcr.html`** (pp. 55–59, all Background). Tabs:
    - *qPCR*: fluorescence read every cycle; more starting template → crosses the threshold earlier (Ct slider).
    - *LAMP*: one constant temperature, strand-displacing polymerase, 4–6 primers; no thermal cycling.
    - *RPA*: constant ~37–42 °C; a recombinase pushes primers into double-stranded DNA instead of heat denaturation.
    - *iiPCR*: a capillary heated from below; convection carries the sample through hot and cooler zones, so cycling happens without a programmed cycler.
11. **`quiz.html`** — §4 below.
12. **`shared/biosensor-anatomy.html`** — replaces the Phase 0 placeholder (spec §6, §11.9).

Comparison and drill content that stays as page tables: p.15 polymerase table (§3), p.21 additives (§4), and a heating-method table in §6: method · heat moves or sample moves · volume · numbers on slides · pages.

## 4. Quiz topics (15 questions; ★ = diagram question using this lesson's drawings)

1. ★ Temperature trace with one plateau highlighted → which step (denature / anneal / extend), and roughly what temperature? (pp. 13, 30)
2. ★ Strand tree after cycle 3 → how many copies after n cycles, and how many still contain an original strand? (2ⁿ; always 2) (p.6)
3. Which is NOT one of the five PCR requirements (e.g. ligase, RNA primer, ribosome)? (p.8)
4. Why must the polymerase be thermostable? Where does Taq come from (Thermus aquaticus, hot springs, Chien 1976)? (p.14)
5. Taq half-life at 95 °C — >2 h, 40 min or 9 min? (p.14)
6. Taq vs Pfu: which has the lower error rate, and why (proofreading exonuclease)? 8.0 vs 1.3 ×10⁻⁶ (pp. 15, 17)
7. ★ Proofreading drawing → what is happening (exonuclease removing a mispaired base)? (p.7)
8. ★ Chemistry drawing → which group attacks which, and what leaves (3′-OH → α-phosphate; PPᵢ)? So which direction does a strand grow? (p.7)
9. What does hot start prevent (mispriming and primer dimers before the first denaturation)? (p.19)
10. ★ Aptamer-on-polymerase drawing → which hot-start type, and is it reversible? (p.20)
11. Additive match: GC-rich template with secondary structure → DMSO; trap: SDS (0.01 % SDS cuts Taq to ~10 %). (p.21)
12. Water-bath PCR: 35 cycles took how long (≈ 8 h)? What does a thermocycler change? (pp. 26, 30)
13. ★ Serpentine chip across three bands → which system, and what sets the number of cycles (number of loops)? Trap: in continuous-flow and rotary PCR the sample moves, not the heater. (pp. 37, 50)
14. ★ Gel drawing → which band is the smallest product; in multiplex PCR why must the products differ in length? (pp. 33, 35)
15. Emulsion/droplet PCR: why put ~one template per droplet? SMRT: what does one fluorescence pulse mean? (pp. 44–46, 53)

## 5. Slide notes (go in `!!! info "Slide note"`)

- PCR temperatures differ between slides. Denature: 94–96 (p.9), 98 (p.13), 94 (pp. 19, 30), 95 °C (pp. 26, 37, 38, 50). Anneal: ~68 (p.9), 48–72 (p.13), ~50 (p.23), 55 (pp. 19, 26, 30, 38, 50), 60 °C (p.37). Extend: 72 °C on most slides, 68–72 (p.13), 77 °C (p.37). The animations use p.30's program (94/55/72 °C).
- p.8: "DNC/cDNA" should read DNA/cDNA.
- p.15: the table credits Pfu and the "Plus"/"Long"/"Fusion" enzymes with "5′-3′ Exonclease activity". The proofreading exonuclease works 3′→5′ (Background); "Sensivity" is also a typo.
- p.18: the middle panel is titled "Mg+", but the axis is MgSO₄ concentration (Mg²⁺).
- p.19: the figure says "10⁵-fold amplification" after 25–30 cycles. Perfect doubling would give 2²⁵–2³⁰ ≈ 3×10⁷–10⁹; real reactions run below 100 % efficiency and plateau (p.40).
- p.21: DMSO "inhibitory at ≤ 10 % v/v" presumably means ≥ 10 %.
- pp. 11, 48, 54, 56–59 are embedded videos, blank in the PDF. pp. 56–59 (qPCR, LAMP, RPA, iiPCR) have no content beyond their titles.
- pp. 45–47: only p.45 carries a citation (Nature Biotechnology 2009). The bead-based emulsion PCR (pp. 45–46) and droplet sequencing (p.47) figures carry no citation of their own.

## 6. Vocabulary candidates

PCR · DNA polymerase · primer · dNTP · template · denaturation · annealing · extension · thermostable · Taq polymerase · Pfu polymerase · fidelity · proofreading · exonuclease · phosphodiester bond · pyrophosphate (PPᵢ) · semi-conservative replication · hot-start PCR · mispriming · primer dimer · aptamer · thermocycler · gel electrophoresis · DNA ladder · multiplex PCR · continuous-flow PCR · microdroplet · emulsion PCR · flow cytometry · pyrophosphorolysis · SMRT sequencing · qPCR · isothermal amplification (LAMP, RPA). 中文 per spec §9 (Taiwan terms, blank when unsure).

## 7. Open questions for the owner

1. **ChatGPT-made figures.** The spec's MUSTs say no raster images at all (§2.1; the hook blocks png/jpg/webp) and no tracing of slide figures (§2.2). An image generated from a slide figure could count as a derivative. Keep SVG-only, or change §2.1?
2. **§13 Beyond classic PCR.** qPCR, LAMP, RPA and iiPCR are title-only in the PDF (their content was videos). Build `beyond-pcr.html` as a Background-only section (planned), or reduce it to one pointer line?
3. **Spec text.** The spec still says L04 is the pilot (§11, §15). Leave the spec as is, with this plan as the record (planned), or edit §15's order?
