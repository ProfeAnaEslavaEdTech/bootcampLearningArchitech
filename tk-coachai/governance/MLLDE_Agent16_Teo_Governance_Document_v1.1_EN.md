# MLLDE · Agent 16 (real) — TEO (EMAIL SUPPORT)
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 16 · **Phase:** Outside the loop
**Canonical map:** **separate domain (support)** — no canonical piece · **Type:** Support / email channel
**Does it measure?** NO · **Does it decide?** NO · **Does it touch the LRS?** NO
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.** Teo is a support agent operating via email channel.
> It has no canonical piece because it is completely outside the pedagogical loop.
> It never touches learning data or the LRS. It signs its responses as «supervised AI agent».
> This document records its governance card to complete the inventory of 16 real components.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `teo`. Component no. 16 of the real inventory (Alex, 1 Sep 2026).
- **Function:** student/user support assistant via email channel. Answers usage questions, technical issues and general queries. Signs as «supervised AI agent».
- **Domain:** support — completely separate from the pedagogical domain.
- **What it is NOT:** does not generate pedagogical content, does not access learning data or the LRS, does not emit xAPI.

## A.2 Model
- Model with verified NO-TRAIN contract.
- Prompt version declared in the agent registry.

## A.3 Domain separation
- **Channel:** email only. Teo never has access to:
  - The LRS (Veracity or any other).
  - The student's profile (declared level, band, statement history).
  - The prompts of the pedagogical agents.
  - The CEFR descriptor inventory.

## A.4 Inputs and outputs
| INPUT | OUTPUT |
|---|---|
| User email message | Support response (text) |
| — | Signature: «supervised AI agent» |

## A.5 xAPI emission
- **None.** The email channel is external to the LRS. No support thread data enters the LRS.

## A.6 Transparency to the user
- Every Teo response includes the visible signature «supervised AI agent».
- The user can escalate to human support at any time.

## A.7 Governance guardrails
- **Strict domain separation:** no access to pedagogical data.
- **No decision about learning:** Teo cannot confirm or deny the student's level, progress, or any LRS data.
- **Human oversight:** support team reviews Teo's responses per Talketika's protocol.

## A.8 Explicit prohibitions
✗ Accessing the LRS · ✗ Accessing the student's profile · ✗ Giving information about levels or bands · ✗ Generating pedagogical content · ✗ Responding without identifying as an AI agent.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

🟢 compliant · 🟡 partial · 🔴 MISSING · ⚫ not verifiable

| Component | Status |
|---|---|
| Email channel separated from pedagogical domain | 🟢 |
| Visible «supervised AI agent» signature | 🟢 |
| No LRS or student profile access | 🟢 (by domain separation) |
| NO-TRAIN contract verified | 🟡 — assumed; documented verification pending |
| Human escalation protocol | 🟡 — operational; formal documentation pending |
| N3 (prompt-hash) | 🟡 — recommended but not blocking |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C16.1 | NO-TRAIN contract not documented | Verify and document the contract for the model used by Teo | Contract verified in the registry | **P0** |
| C16.2 | Escalation protocol not formalised | Document the human escalation protocol | Protocol signed by Talketika | **P1** |
| C16.3 | N3 not implemented | Implement prompt-hash for Teo | Prompt == approved | **P1** |
| C16.4 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | How this component complies | Evidence |
|---|---|---|
| No automated decision (GDPR art. 22) | Does not touch learning data or the LRS | §A.3 |
| Transparency (AI Act art. 50) | Visible «supervised AI agent» signature | §A.6 |
| Human oversight (AI Act art. 14) | Support team review; escalation available | §A.7 |
| Data minimisation | Only the user's message; no pedagogical data | §A.4 |

**Conformity status:** 🟢 — operational with correct domain separation; C16.1 (P0) to formally document the NO-TRAIN contract.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
