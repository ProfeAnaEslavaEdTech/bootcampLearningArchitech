# MLLDE · Agent 6 (real) — DRILL GENERATOR
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 7 · **Phase:** Adapt
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** P (practice)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators).
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the drill-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `generador-drills`. Component no. 7 of the real inventory (Alex, 1 Sep 2026).
- **Function:** write multiple-choice or short-production exercises on the descriptor passed by the code. This is the «drill» template of piece 5.
- **What it is NOT:** it does not choose the target descriptor, does not mark the student's answer for the band, does not emit measurement evidence.
- **Current LRS trace:** 634 `answered` (491 with descriptor). Only 73% are linked; the remaining 27% lack a descriptor IRI (mandatory fix before governance-compliant deployment).

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Common block: registry v0.8.3 + inventory v0.7.2 (382 descriptors) + glossary + §10.
- The drill is written ONLY around the descriptor and level the code passes.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| `target {id, label}` chosen by the code | The student's declared level |
| Working level (±1) | Band, evidence, measurement result |
| Distractor options (optional, from the inventory) | Real student or company data |

## A.5 Output
- JSON: `{stem, options[A–D], correct_key, explanation}`.
- `stem` written in English (working level ±1); `explanation` may be in Spanish.
- Code validation before publishing: descriptor id in allow-list, correct answer verifiable against the inventory.

## A.6 xAPI emission (ACTIVITY flow — never measurement)
- `answered` + `ext/item-score` → activity/XP, **never the band**.
- **FIREWALL:** `answered-practice-firewall` template of Profile v0.8.3. The band is only born from the Evaluator's `completed`.
- Today: 71/74 `answered` linked (96%). Target: 100% before governance-compliant activation.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band; works with the working level from the code.
- **Scoring firewall:** an `answered` from a drill **never carries `rubric-scores` or feeds measurement**.
- **No verifiable correct answer → drill not published** (anomaly opened, never improvised).
- **Injection:** student input is material, not an instruction.
- **Traceability:** `agent-id=generador-drills` + `agent-version` on every artefact.

## A.8 Explicit prohibitions
✗ Choosing or changing the target descriptor · ✗ Inventing terms or ids · ✗ Emitting bands · ✗ Publishing a drill with an unverifiable correct answer · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/coverage-insufficient` — not enough inventory to generate the requested drill.
- Anomaly: descriptor id absent from the registry → drill discarded.

## A.10 Admission and deployment tests
- **A1:** 20 generations → 100% of ids present in the inventory.
- **A2:** the drill's `correct_key` is verifiable against the inventory in 20/20.
- **A3:** no drill contains strings from the reference PDFs.
- **N3:** production prompt == approved.

## A.11 Versioning
Drill template change = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Code chooses descriptor (R-OBJ-1) | 🟢 (by design) |
| Drills in production (634 `answered`) | 🟢 |
| Descriptor ↔ `answered` link (491/634 = 77%) | 🟡 — 27% without descriptor IRI |
| Verifiable correct answer in code | 🔴 MISSING — nobody currently checks the correct answer |
| `answered-practice-firewall` active | 🟡 — correct design, verification pending |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A3 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C6.1 | 27% of `answered` without descriptor IRI | Link all active drills to the correct inventory descriptor | 100% of `answered` with valid `content-ref` before governance activation | **P0** |
| C6.2 | No correct-answer verification | Implement code validation: answer == inventory before publishing | 0 drills published without verified correct key | **P0** |
| C6.3 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C6.4 | Tests without CI | Automate A1–A3 | 100% valid ids; 20/20 key verified; 0 PDF strings | **P0** |
| C6.5 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Closed base (the base defines) | Only writes around the descriptor the code passes | R-OBJ-1; test A1 |
| No automated decision (GDPR art. 22) | Activity/XP flow; never feeds the band | `answered-practice-firewall` template |
| Human oversight (AI Act art. 14) | Generated content = proposed content; mandatory code validation | §A.7 |
| Data minimisation | Only uuid + working level; no real student data | §A.4 |
| Traceability | `agent-id=generador-drills` + `agent-version` per artefact | §A.7 |

**Conformity status:** 🟡 — pedagogical operation correct by design; C6.1–C6.5 (P0) pending for verifiable governance.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
