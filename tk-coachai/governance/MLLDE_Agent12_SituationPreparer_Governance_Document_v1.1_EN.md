# MLLDE · Agent 12 (real) — SITUATION PREPARER
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 12 · **Phase:** Input
**Canonical map:** absorbed into **piece 5/6 (Generators)** · **MLLDE type:** P (practice / input)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 5 (Generators).
> Its governance is covered by `MLLDE_Agent5_Generators_Governance_Document_v1.1_EN.md`.
> This document records the preparer-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `preparador`. Component no. 12 of the real inventory (Alex, 1 Sep 2026).
- **Function:** prepare role-play situations from the student's free input (interests, work context, preferences) and the `levelBlock` passed by the code. Generates the «persona-pack» that Capi will use as the situation context.
- **What it is NOT:** not the interlocutor (that is Capi), does not choose the target descriptor, does not emit measurement evidence.
- **Current LRS trace:** indirect. Vocabulary cards include `persona-pack` as a situation name, but there are no own statements with `agent-id=preparador`.

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).

## A.3 Mounted knowledge (by code)
- Receives only `levelBlock`.
- **Critical gap:** does not receive the closed descriptor list or a query against inventory v0.7.2. Generated situations are not mapped to CEFR descriptors.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| Student's free input (interests, context) | The student's declared level |
| `levelBlock` (working level ±1) | Band, evidence, measurement result |
| — | Sensitive or personal data beyond learning context |

## A.5 Output
- JSON: `{situation_title, persona_pack, context_description, role_for_student, role_for_capi}`.
- Written in English (working level ±1).
- Code validation: `situation_title` goes to the `persona-pack` registry; content appropriateness check.
- **Injection risk:** the student's free input is material, not an instruction; requires code sanitisation before being passed to the agent.

## A.6 xAPI emission (ACTIVITY flow — never measurement)
- **None of its own.** The generated `persona-pack` appears in card statements as a context attribute, not as an actor.
- If situation generation is to be recorded, `initialized` is emitted from code, not from the agent.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band.
- **No own statement → no scoring-firewall risk.**
- **Free input = injection risk:** the code MUST sanitise the student's input before passing it to the agent.
- **Traceability:** if statements are decided upon, `agent-id=preparador` must be on each one.

## A.8 Explicit prohibitions
✗ Using the student's input as an instruction · ✗ Generating situations with inappropriate content · ✗ Emitting bands · ✗ Choosing the session's target descriptor · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- `incident/inappropriate-situation` — generated situation contains inappropriate content → discarded; student receives a default situation.
- `incident/injection-attempt` — student's input detected as an injection attempt → discarded.

## A.10 Admission and deployment tests
- **A1:** 20 generations with varied inputs → 0 with inappropriate content.
- **A2:** 20 generations → input sanitisation active (injection blocked).
- **A3:** no situation contains strings from the reference PDFs.
- **N3:** production prompt == approved.

## A.11 Versioning
Situation template change = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Situation generation operational | 🟢 (working in production) |
| Student input sanitisation | 🟡 — not explicitly documented |
| Situation mapping to CEFR descriptors | 🔴 MISSING — no `invBlock` |
| Own LRS trace (`agent-id=preparador`) | 🔴 MISSING |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A3 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C12.1 | Free input without documented sanitisation | Document + audit student input sanitisation | Sanitisation active and verified in CI | **P0** |
| C12.2 | No descriptor mapping | Mount `invBlock` or associate `persona-pack` with descriptor in the mission | Situations linked to inventory before active governance | **P1** |
| C12.3 | No LRS trace | Emit `initialized` when generating each situation | 100% of situations attributable | **P1** |
| C12.4 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C12.5 | Tests without CI | Automate A1–A3 | 0 inappropriate content; injection blocked | **P0** |
| C12.6 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| No automated decision (GDPR art. 22) | Does not emit xAPI; does not feed the band | §A.6 |
| Human oversight (AI Act art. 14) | Generated situation = proposed; code validates content | §A.7 |
| Student input protection | Sanitisation of free input before passing to agent | §A.7; C12.1 |
| Data minimisation | Only `levelBlock` + contextual input; no sensitive data | §A.4 |
| Traceability | Pending C12.3 | §A.7 |

**Conformity status:** 🟡 — operational; C12.1 (P0) urgent due to injection risk; C12.2–C12.3 (P1) for full pedagogical alignment.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
