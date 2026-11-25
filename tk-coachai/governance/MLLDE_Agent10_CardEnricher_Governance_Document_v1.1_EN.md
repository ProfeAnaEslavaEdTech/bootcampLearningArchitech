# MLLDE · Agent 10 (real) — LEGACY CARD ENRICHER
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 10 · **Phase:** Adapt
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** P (practice)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators).
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the enricher-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `enriquecedor`. Component no. 10 of the real inventory (Alex, 1 Sep 2026).
- **Function:** rewrite and enrich legacy vocabulary cards (created before inventory v0.7.2) by adding situational context and linking them to the correct descriptor in the current inventory.
- **What it is NOT:** it does not create new cards for active sessions (that is the Card Generator), does not evaluate the student's production for the band, does not emit measurement evidence.
- **Current LRS trace:** none distinguishable. Legacy cards exist in the app database but their practice statements carry no `agent-id=enriquecedor`. Enriched terms inherit the «undefined» origin of the legacy pool.

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Common block: registry v0.8.3 + inventory v0.7.2 (382 descriptors) + glossary + §10.
- Enrichment is done ONLY by linking the legacy card to a descriptor in the current inventory.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| Legacy card (term + legacy definition) | The student's declared level |
| `target {id, label}` suggested by the code | Band, evidence, measurement result |
| Working level (±1) | Real student or company data |

## A.5 Output
- JSON: `{term, enriched_definition, example_sentence, context_note, descriptor_id}`.
- Written in English (working level ±1); `context_note` may be in Spanish.
- Code validation: `descriptor_id` must be in the inventory allow-list; any enrichment without a valid descriptor is discarded.

## A.6 xAPI emission (ACTIVITY flow — never measurement)
- Enriched cards emit `attempted` + `ext/srs-outcome` when the student practises them.
- **FIREWALL:** `attempted-card-firewall` template of Profile v0.8.3. The band is only born from the Evaluator's `completed`.
- Today: no statements attributed to `enriquecedor`; audit needed to count actually enriched legacy cards.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band.
- **Scoring firewall:** an `attempted` from an enriched card **never carries `rubric-scores` or feeds measurement**.
- **No valid descriptor → card does NOT leave «legacy» state** (anomaly opened, never improvised).
- **Traceability:** `agent-id=enriquecedor` + `agent-version` on every enriched artefact.

## A.8 Explicit prohibitions
✗ Inventing descriptors or ids · ✗ Reclassifying a legacy card without code confirmation · ✗ Emitting bands · ✗ Publishing a card with an invalid descriptor · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/legacy-card-unresolvable` — no descriptor in the current inventory covers the legacy term → card stays in «legacy-unresolved» state for human review.

## A.10 Admission and deployment tests
- **A1:** 20 enrichments → 100% with valid `descriptor_id` in the inventory.
- **A2:** 0 legacy-unresolved cards published as active.
- **A3:** no enrichment contains strings from the reference PDFs.
- **N3:** production prompt == approved.

## A.11 Versioning
Enrichment criterion change = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Code assigns descriptor (R-OBJ-1) | 🟡 — design planned; implementation audit pending |
| LRS trace of enriched cards | 🔴 MISSING — no statements with `agent-id=enriquecedor` |
| «legacy-unresolved» pool separated | 🔴 MISSING |
| `attempted-card-firewall` active | 🟡 — correct design, verification pending |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A3 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C10.1 | No LRS trace for enricher | Add `agent-id=enriquecedor` to all enriched cards | 100% of enrichments attributable | **P0** |
| C10.2 | Legacy pool not separated | Create `legacy-unresolved` state in the database | 0 legacy cards published without valid descriptor | **P0** |
| C10.3 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C10.4 | Tests without CI | Automate A1–A3 | 100% valid ids; 0 active legacy without descriptor | **P0** |
| C10.5 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| Closed base (the base defines) | Only enriches by linking to the descriptor the code provides | R-OBJ-1; test A1 |
| No automated decision (GDPR art. 22) | Activity/XP flow; never feeds the band | `attempted-card-firewall` template |
| Human oversight (AI Act art. 14) | legacy-unresolved → human review queue; no automatic publishing | §A.7 |
| Data minimisation | Only uuid + working level; no real student data | §A.4 |
| Traceability | `agent-id=enriquecedor` + `agent-version` per artefact | §A.7 |

**Conformity status:** 🔴 — C10.1–C10.2 (P0) block verification: no LRS trace and no legacy pool separation.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
