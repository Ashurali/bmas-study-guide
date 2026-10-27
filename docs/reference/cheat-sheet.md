---
title: "Cheat sheet"
---

# Cheat sheet

The numbers, formulas and must-know facts from each lesson, each linked to
the section that explains it.

## L07 — PCR

| Fact | Value | Section |
|---|---|---|
| Five PCR requirements | two primers · thermostable polymerase · dNTPs · template · temperature cycles | [§2](../lessons/l07-pcr/index.md#2-the-pcr-cycle) |
| Inventor | Kary Mullis, 1980s; Nobel Prize in Chemistry 1993 | [§2](../lessons/l07-pcr/index.md#2-the-pcr-cycle) |
| Cycle | denature (94–98 °C) → anneal (~55 °C) → extend (72 °C) | [§2](../lessons/l07-pcr/index.md#2-the-pcr-cycle) |
| p.30 program | 94 °C 5:00 · 25 × (94 / 55 / 72 °C, 0:30) · 72 °C 7:30 · 4 °C hold ≈ 50 min + ramps | [§2](../lessons/l07-pcr/index.md#2-the-pcr-cycle) |
| Chemistry | 3′-OH attacks the dNTP's α-phosphate → phosphodiester bond, PPᵢ leaves; strands grow 5′→3′ | [§1](../lessons/l07-pcr/index.md#1-dna-replication) |
| Taq | *Thermus aquaticus*, hot springs, Chien et al. 1976; optimum 75–80 °C | [§3](../lessons/l07-pcr/index.md#3-the-polymerase-taq-vs-pfu) |
| Taq half-life | > 2 h at 92.5 °C · 40 min at 95 °C · 9 min at 97.5 °C | [§3](../lessons/l07-pcr/index.md#3-the-polymerase-taq-vs-pfu) |
| Taq speed | ~1000 bp in < 10 s at 72 °C | [§3](../lessons/l07-pcr/index.md#3-the-polymerase-taq-vs-pfu) |
| Error rate (per base per doubling) | Pfu 1.3 × 10⁻⁶ · Taq 8.0 × 10⁻⁶ | [§3](../lessons/l07-pcr/index.md#3-the-polymerase-taq-vs-pfu) |
| Product ends | Taq 3′-dA (TA cloning) · Pfu blunt | [§3](../lessons/l07-pcr/index.md#3-the-polymerase-taq-vs-pfu) |
| Hot-start types | antibody · blocked primer · THF-blocked dNTP (off at 95 °C) · aptamer (off > 60 °C, on < 55 °C) | [§4](../lessons/l07-pcr/index.md#4-hot-start-and-additives) |
| Additives | BSA 0.1–0.8 µg/µL · DMSO 2–5 % · glycerol 5–10 % · non-ionic detergents 0.1–1 % · NOT SDS (0.01 % → ~10 % Taq activity) | [§4](../lessons/l07-pcr/index.md#4-hot-start-and-additives) |
| Water bath | 95 °C 5 min / 55 °C 3 min / 72 °C 5 min; 35 cycles = 8 h | [§5](../lessons/l07-pcr/index.md#5-water-bath-pcr) |
| Prices on the slides | 3-chamber bath $1,000 · thermocycler $20,000 · Taq NT$500 vs Pfu NT$3,500 per 500 U | [§5](../lessons/l07-pcr/index.md#5-water-bath-pcr), [§6](../lessons/l07-pcr/index.md#6-thermocyclers) |
| Volumes | thermocycler tube 70 µL · microPCR 1 µL | [§9](../lessons/l07-pcr/index.md#9-micropcr) |
| Flow-chip zones | 95 / 77 / 60 °C (Science 1998) · 95 / 72 / 55 °C (Nature 2003) | [§8](../lessons/l07-pcr/index.md#8-pcr-on-a-chip-continuous-flow) |
| Rotary blocks | 95 °C (i) → 55 °C (ii) → 72 °C (iii) = 1 cycle | [§11](../lessons/l07-pcr/index.md#11-rotary-pcr) |
| SMRT | single molecule, real time; one flash per base | [§12](../lessons/l07-pcr/index.md#12-single-molecule-replication-pacbio-smrt) |

**Formulas**

Copies after \(n\) cycles (ideal), per starting molecule:

$$ N_n = 2^n \qquad\text{e.g. } 2^{25} \approx 3.4\times10^{7} $$

Water-bath run time (p.26):

$$ 35 \times (5 + 3 + 5)\ \text{min} = 455\ \text{min} \approx 8\ \text{h} $$

Share of copies with at least one error — *Background formula*, rates from p.17:

$$ P_{\ge 1\ \text{error}} = 1 - (1 - r)^{L\,d} \approx r\,L\,d \quad (\text{small } r L d) $$

with \(r\) = error rate per base per doubling, \(L\) = product length (bp), \(d\) = doublings.
E.g. \(L = 1000\), \(d = 20\): Taq ≈ 15 %, Pfu ≈ 2.6 %.
