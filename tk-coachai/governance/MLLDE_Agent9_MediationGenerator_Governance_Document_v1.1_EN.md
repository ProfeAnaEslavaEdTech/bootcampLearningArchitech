# MLLDE · Agent 9 (real) — MEDIATION GENERATOR
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 9 · **Phase:** Input / Process
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** P (practice)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators).
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the mediation-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `generador-mediacion`. Component no. 9 of the real inventory (Alex, 1 Sep 2026).
- **Function:** generate mediation activities (5th MLLDE skill, design decision 2026-08-04) from the descriptor and level the code passes. Operates in both Input (before the session) and Process (turn by turn).
- **Fifth MLLDE skill:** mediation per the Companion Volume (CEFR 2020). Emitted statements carry **two simultaneous IRIs**: the mediation scale IRI AND the output-channel skill IRI (oral or written), per design decision 2026-08-04.
- **What it is NOT:** it does not choose the mediation descriptor, does not evaluate the result for the band, does not emit measurement evidence.
- **Current LRS trace:** pending separate audit for mediation statements; not yet distinguishable from the general pool.

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Common block: registry v0.8.3 + inventory v0.7.2 (382 descriptors, mediation scales included) + glossary + §10.
- The activity is written ONLY around the mediation descriptor and output channel the code passes.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| `target {id, label}` (mediation descriptor) chosen by the code | The student's declared level |
| Output channel: `oral` or `written` | Band, evidence, measurement result |
| Working level (±1) | Real student or company data |

## A.5 Output
- JSON: `{task_description, source_text, instructions, expected_output_channel}`.
- Written in English (working level ±1); instructions may be in Spanish.
- Code validation: mediation IRI + channel IRI in allow-list; both must be present.

## A.6 xAPI emission (ACTIVITY flow — never measurement)
- `answered` with **two object IRIs**: mediation scale IRI + channel skill IRI.
- **FIREWALL:** `answered-practice-firewall` template of Profile v0.8.3. The band is only born from the Evaluator's `completed`.
- Today: pending pool separation to count correctly attributed mediation statements.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band; works with the working level from the code.
- **Mandatory dual IRI:** every mediation statement carries mediation scale + output channel.
- **Scoring firewall:** an `answered` from a mediation activity **never carries `rubric-scores` or feeds measurement**.
- **No verified mediation descriptor → activity not published**.
- **Traceability:** `agent-id=generador-mediacion` + `agent-version` on every artefact.

## A.8 Explicit prohibitions
✗ Choosing or changing the mediation descriptor · ✗ Omitting one of the two IRIs · ✗ Emitting bands · ✗ Publishing an activity with an unverified descriptor · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/coverage-insufficient` — no mediation descriptors for the requested level.
- `incident/missing-channel-iri` — output channel IRI missing → activity discarded.

## A.10 Admission and deployment tests
- **A1:** 20 generations → 100% with valid mediation IRI in the inventory.
- **A2:** 20 generations → 100% with output channel IRI (`oral` or `written`).
- **A3:** no activity contains strings from the reference PDFs.
- **N3:** production prompt == approved.

## A.11 Versioning
Mediation template or dual-IRI decision change = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Code chooses mediation descriptor (R-OBJ-1) | 🟢 (by design) |
| Dual IRI implemented (decision 2026-08-04) | 🟡 — correct design; statement audit pending |
| Mediation statements separated in the LRS | 🔴 MISSING — not distinguishable from general pool today |
| `answered-practice-firewall` active | 🟡 — correct design, verification pending |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A3 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C9.1 | Statements not separated in the LRS | Add `agent-id=generador-mediacion` audit filter | 100% of mediation statements identifiable | **P0** |
| C9.2 | Dual IRI unverified | Audit existing statements; confirm presence of both IRIs | 100% with mediation-scale + channel before active governance | **P0** |
| C9.3 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C9.4 | Tests without CI | Automate A1–A3 | 100% valid ids; 100% dual IRI; 0 PDF strings | **P0** |
| C9.5 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Closed base (the base defines) | Only writes around the mediation descriptor + channel the code passes | R-OBJ-1; tests A1–A2 |
| No automated decision (GDPR art. 22) | Activity/XP flow; never feeds the band | `answered-practice-firewall` template |
| Human oversight (AI Act art. 14) | Generated content = proposed content; dual IRI validated by code | §A.7 |
| Data minimisation | Only uuid + working level; no real student data | §A.4 |
| Traceability | `agent-id=generador-mediacion` + `agent-version` per artefact | §A.7 |

**Conformity status:** 🟡 — correct design; C9.1–C9.2 (P0) pending to verify dual IRI implementation in production.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
