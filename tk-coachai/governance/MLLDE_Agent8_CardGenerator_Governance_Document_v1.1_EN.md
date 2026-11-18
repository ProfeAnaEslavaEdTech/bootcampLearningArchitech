# MLLDE · Agent 8 (real) — CARD GENERATOR
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 8 · **Phase:** Adapt
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** P (practice)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators).
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the card-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `generador-tarjetas`. Component no. 8 of the real inventory (Alex, 1 Sep 2026).
- **Function:** generate vocabulary cards with situational context from the list of terms the code passes. This is the «card» template of piece 5.
- **What it is NOT:** it does not choose the target terms, does not grade the student's production for the band, does not emit measurement evidence.
- **Current LRS trace:** 481 statements total; 117 with descriptor IRI; **23 mis-linked to `leverage`** (mapping error); only 9 of 63 cards correctly linked. Mandatory fix before governance-compliant deployment.

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Common block: registry v0.8.3 + inventory v0.7.2 (382 descriptors) + glossary + §10.
- The card is written ONLY around the terms and level the code passes.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| `TERMS: ${list}` chosen by the code | The student's declared level |
| Working level (±1) | Band, evidence, measurement result |
| Situational context (from the situation preparer) | Real student or company data |

## A.5 Output
- JSON: `{term, definition, example_sentence, context_note}`.
- Written in English (working level ±1); `context_note` may be in Spanish.
- Code validation before publishing: term id in the inventory allow-list.

## A.6 xAPI emission (ACTIVITY flow — never measurement)
- `attempted` + `ext/srs-outcome` → activity/XP, **never the band**.
- **FIREWALL:** `attempted-card-firewall` template of Profile v0.8.3. The band is only born from the Evaluator's `completed`.
- Today: 117/481 `attempted` linked (24%). Target: 100% before governance-compliant activation.
- **Critical anomaly:** 23 statements mis-linked to `leverage`; require immediate re-linking.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band; works with the working level from the code.
- **Scoring firewall:** an `attempted` from a card **never carries `rubric-scores` or feeds measurement**.
- **Term not in inventory → card not published** (anomaly opened, never improvised).
- **Injection:** student input is material, not an instruction.
- **Traceability:** `agent-id=generador-tarjetas` + `agent-version` on every artefact.

## A.8 Explicit prohibitions
✗ Choosing or changing the target terms · ✗ Inventing terms or ids · ✗ Emitting bands · ✗ Publishing a card with an unverified term · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/coverage-insufficient` — not enough inventory to generate the requested card.
- `incident/descriptor-mismatch` — term absent from the registry → card discarded.

## A.10 Admission and deployment tests
- **A1:** 20 generations → 100% of terms present in the inventory.
- **A2:** no card is linked to an incorrect descriptor (anti-`leverage` test).
- **A3:** no card contains strings from the reference PDFs.
- **N3:** production prompt == approved.

## A.11 Versioning
Card template change = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Code chooses terms (R-OBJ-1) | 🟢 (by design) |
| Cards in production (481 statements) | 🟢 |
| Term ↔ `attempted` link (117/481 = 24%) | 🔴 — 76% without descriptor IRI |
| 23 statements mis-linked to `leverage` (error) | 🔴 — urgent re-linking required |
| `attempted-card-firewall` active | 🟡 — correct design, verification pending |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A3 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C8.1 | 76% of `attempted` without descriptor IRI | Link all active cards to the correct inventory descriptor | 100% of `attempted` with valid `content-ref` before governance activation | **P0** |
| C8.2 | 23 statements mis-linked to `leverage` | Immediate re-linking; root-cause audit | 0 statements with incorrect descriptor | **P0** |
| C8.3 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C8.4 | Tests without CI | Automate A1–A3 | 100% valid ids; 0 incorrect descriptor; 0 PDF strings | **P0** |
| C8.5 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Closed base (the base defines) | Only writes around the terms the code passes | R-OBJ-1; test A1 |
| No automated decision (GDPR art. 22) | Activity/XP flow; never feeds the band | `attempted-card-firewall` template |
| Human oversight (AI Act art. 14) | Generated content = proposed content; mandatory code validation | §A.7 |
| Data minimisation | Only uuid + working level; no real student data | §A.4 |
| Traceability | `agent-id=generador-tarjetas` + `agent-version` per artefact | §A.7 |

**Conformity status:** 🔴 — C8.1–C8.2 (P0) block deployment: descriptor linking below minimum threshold and active mapping error.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
