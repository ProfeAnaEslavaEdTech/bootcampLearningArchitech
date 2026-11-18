# MLLDE · Agent 11 (real) — HINT 💡
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 11 · **Phase:** Process
**Canonical map:** absorbed into **piece 1/6 (Capi)** · **MLLDE type:** P (practice / scaffolding)
**Does it measure?** NO · **Does it decide?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** This agent is absorbed into canonical piece 1 (Capi).
> Its governance is covered by `MLLDE_Agent1_Capi_Governance_Document_v1.1_EN.md`.
> Capi's rule 3 already provides for graduated on-demand hints.
> This document records the Hint-specific operative details to complete the map of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `pista`. Component no. 11 of the real inventory (Alex, 1 Sep 2026).
- **Function:** offer an on-demand help hint when the student requests it during the role-play conversation. Receives only `levelBlock`; delivers a graduated scaffold (hint).
- **What it is NOT:** not the main interlocutor (that is Capi), does not formally correct, does not emit measurement evidence.
- **Current LRS trace:** none. Hints do not generate their own xAPI statements; their effect (if the student uses one) is implicit in the Capi session flow.

## A.2 Model (fixed)
- Free tier with verified NO-TRAIN contract.
- Model and prompt version declared in the agent registry; production == approved (N3 pending).
- **Absorption note:** after absorption, the hint may be implemented as a branch in Capi's prompt (rule 3) rather than a separate LLM call. Engineering decides the implementation.

## A.3 Mounted knowledge (by code)
- Receives only `levelBlock` (working level ±1).
- Does NOT receive the closed descriptor list; the hint is free-text vocabulary/grammar scaffolding.
- **Gap:** absence of the closed base means the hint cannot guarantee alignment with inventory v0.7.2.

## A.4 Inputs (contract)
| RECEIVES | NEVER RECEIVES |
|---|---|
| `levelBlock` (working level ±1) | The student's declared level |
| Current turn conversation fragment | Band, evidence, measurement result |
| — | Real student or company data |

## A.5 Output
- Text: a short hint (1–2 sentences), framed as help, not correction.
- In English or Spanish according to the session context.
- No structured JSON; plain text in chat.

## A.6 xAPI emission
- **None of its own.** If hint usage is to be recorded, the statement is emitted from Capi's code, not from the Hint directly.
- **FIREWALL:** not applicable (no own xAPI output). The band is only born from the Evaluator's `completed`.

## A.7 Governance guardrails
- **G-NIVEL-1:** does not know the declared level or the band.
- **No own statement → no scoring-firewall risk.**
- **Free-text hint does not affect the session's target descriptor.**
- **Traceability:** if statements are decided upon, `agent-id=pista` must be on each one.

## A.8 Explicit prohibitions
✗ Giving the correct answer directly · ✗ Emitting bands · ✗ Generating content that formally corrects (that is the Corrector) · ✗ Reproducing text from commercial PDFs.

## A.9 Incidents it opens (via code)
- None specific. If a hint generates an inappropriate response, it escalates to the Capi incident flow.

## A.10 Admission and deployment tests
- **A1:** 20 hints → none contains the correct answer directly.
- **A2:** 20 hints → none contains strings from the reference PDFs.
- **N3:** production prompt == approved.
- **Post-absorption note:** if the hint is integrated into Capi's prompt, Capi's tests (piece 1 A.10) cover this component.

## A.11 Versioning
Hint rule change or absorption into Capi = version bump + signature + map update.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| On-demand functionality operational | 🟢 (working in production) |
| Own LRS trace (`agent-id=pista`) | 🔴 MISSING — no own statements |
| Closed base (inventory mounted) | 🔴 MISSING — receives only `levelBlock` |
| Formal absorption into Capi (rule 3) | 🟡 — pending implementation |
| N3 (prompt-hash) | 🔴 MISSING |
| Tests A1–A2 in CI | 🔴 MISSING |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C11.1 | No LRS trace | Decide: (a) absorb into Capi prompt (rule 3) or (b) emit `scaffolded` statement | Decision documented + implemented | **P0** |
| C11.2 | No closed base | Mount `invBlock` on hint or absorb into Capi (which will have it) | Hint aligned with inventory before active governance | **P1** |
| C11.3 | N3 not implemented | Shared prompt-hash component | Prompt == approved; start-up blocked if different | **P0** |
| C11.4 | Tests without CI | Automate A1–A2 | 0 hints with direct answer; 0 PDF strings | **P0** |
| C11.5 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| No automated decision (GDPR art. 22) | Does not emit xAPI statements; does not feed the band | §A.6 |
| Human oversight (AI Act art. 14) | Hint = proposed help; the student decides whether to use it | §A.7 |
| Data minimisation | Only `levelBlock` + conversation fragment | §A.4 |
| Traceability | Pending C11.1 | §A.7 |

**Conformity status:** 🟡 — operational without trace; C11.1 (P0) defines the absorption or traceability path.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
