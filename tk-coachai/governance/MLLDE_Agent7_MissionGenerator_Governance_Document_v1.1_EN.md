# MLLDE · Agent 7 (real) — MISSION GENERATOR
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 6 · **Phase:** Input
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** I (influences objectives)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators), «mission» template.
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the Mission Generator's specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `generador-misiones`. Component no. 6 of the real inventory (Alex, 1 Sep 2026).
- **Function:** write a spoken mission (scene, roles and task) that forces the student to use the descriptor the code chose. This is the «mission» template of piece 5.
- **What it is NOT:** it does not choose the target descriptor (the code does), does not evaluate mission execution.
- **Current LRS trace:** 72 missions produced. Their objectives are NOT recorded in the LRS (mandatory fix, R-OBJ-1).

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version registered; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Common block: registry v0.8.3 + inventory v0.7.2 + glossary + §10.
- Scene and roles come from the inventory or from the student's input (as material, not an instruction).

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| `target {id, label}` chosen by the code — DOES NOT CHANGE IT | The student's declared level |
| `{uuid, working level, style}` | Band, evidence, measurement result |
| `persona-pack?` / student input (as material) | PII data (name, company, job title) |

**R-OBJ-1:** each mission must declare a minimum of 1 grammar descriptor + 1 vocabulary descriptor at the working level, plus the pending i+1. Without declared objectives → global falls to the average with an anomaly.

## A.5 Output
- JSON: `{scene, roles: {student_role, coach_role}, task, declared_targets[]}`.
- Explicit roles: the coach never does the student's work.
- Code validation: ids in allow-list, level ±1.

## A.6 xAPI emission
- The mission itself does not emit to the LRS. Its declared objectives are registered with the mission (rule 5.3 uses them for the global score).
- The mission cycle (open, dialogue, close) emits to the MEASUREMENT flow via the Evaluator and to the ACTIVITY flow via the Corrector/drills.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band.
- **Fictional scene:** never reproduces the student's or company's real data. Student input «prepare my meeting tomorrow about X» is material for the scene, not PII.
- **Injection:** student input cannot change the target descriptor or skip the template.
- **Traceability:** `agent-id=generador-misiones` + `agent-version` on every artefact.

## A.8 Explicit prohibitions
✗ Choosing or changing the target descriptor · ✗ Inventing terms outside the inventory · ✗ Reproducing student PII in the scene · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/coverage-insufficient` — not enough inventory for the requested objective.
- `incident/missing-declared-targets` — generated mission without declared descriptors → escalated, not published.

## A.10 Admission and deployment tests
- **A1:** 20 generations → 100% of ids/terms in the inventory.
- **A2:** the artefact's `declared_targets[]` includes the target passed by the code in 20/20.
- **A3:** no mission contains strings from reference PDFs.
- **A4:** student input as material → does not alter the target descriptor.
- **N3:** production prompt == approved.

## A.11 Versioning
Mission template change = bump + signature + updated map.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

| Component | Status |
|---|---|
| Code chooses descriptor (R-OBJ-1) | 🟢 (by design) |
| Missions in production (72 units) | 🟢 |
| Declared objectives registered in LRS | 🔴 MISSING — 0/135 closed cycles with registered objectives |
| Fictional scenes without PII | 🟢 (by template design) |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A4 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C7.1 | Objectives not registered (0/135) | Record `declared_targets[]` with the mission in the LRS | 100% of missions with traceable declared objectives | **P0** |
| C7.2 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C7.3 | Tests without CI | Automate A1–A4 | Threshold defined; 0 PII in scenes; 0 PDF strings | **P0** |
| C7.4 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Closed base (the base defines) | Only writes around the descriptor the code passes | R-OBJ-1; test A2 |
| No automated decision (GDPR art. 22) | Does not evaluate execution; produces no scores | Mission flow |
| Human oversight (AI Act art. 14) | Proposed content; mandatory code validation | §A.7 |
| PII protection | Fictional scenes; student input = material | §A.7 |
| Traceability | `agent-id=generador-misiones` + `agent-version` | §A.7 |

**Conformity status:** 🟡 — pedagogical operation correct by design; C7.1–C7.4 (P0) pending.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
