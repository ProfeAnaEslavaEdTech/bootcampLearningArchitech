# MLLDE · Agent 14 (rogue) — REAL ENGLISH
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 14 · **Phase:** Outside the loop
**Canonical map:** **NOT part of the MLLDE design** · **Status:** 🔴 RETIRE
**Designed by Ana Eslava-Graterol?** NO
**Does it measure?** UNKNOWN · **Does it decide?** UNKNOWN
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **Governance note.**
> This component **was not designed by Ana Eslava-Graterol**. It is a rogue agent that appeared in the code because Alex did not implement the governance harness during development. It is not part of the MLLDE architecture nor of the canonical 5-piece + consolidator inventory.
>
> **Architectural decision (Nov 2026):** reduce the system to the canonical minimum. This component is **retired**.

---

# PART A — ORIGIN AND DECISION

## A.1 Origin
- **Code id:** `ingles-real`. Located in `api/tk-coach.js` during the audit of 9 November 2026.
- **Origin:** undeclared agent that appeared in production because the governance harness was not implemented. It has no design card, no pedagogical mission assigned by MLLDE Pedagogical Direction, and no verified NO-TRAIN contract.
- **LRS trace:** none.
- **Visible to the student:** unconfirmed.

## A.2 Why it is not part of the MLLDE design
The canonical inventory of TK CoachAI (governed version) consists of **5 pieces + 1 code consolidator**:
1. Capi (role-play)
2. Corrector/Judge (feedback)
3. Evaluator (the ONLY piece that measures)
4. Summary Writer
5. Generators (mission, drill, card, mediation, enricher, preparer)
+ Code Consolidator

`Real English` does not fit into any of these pieces and does not respond to any pedagogical need identified in the MLLDE design. Its name suggests an authentic-content function, but there is no design card to support it. Its presence in the code is an implementation artefact, not a design decision.

## A.3 Additional risk
A component whose name refers to "real content" with no documented pedagogical specification poses a **risk of deviation from the MLLDE framework**: it could generate or present linguistic content outside the CEFR descriptor inventory v0.7.2 and without xAPI traceability. This is an additional reason to retire it.

## A.4 Decision
**RETIRE.** The component must be removed from the code before the governed deployment.

| Step | Action | Owner | Criterion |
|---|---|---|---|
| 1 | Deactivate (feature flag false) immediately | Engineering | 0 executions in production |
| 2 | Audit dependencies in `api/tk-coach.js` | Engineering | No active dependencies |
| 3 | Remove from code | Engineering | Absent in the governance branch |
| 4 | Confirm retirement in agent registry | Pedagogical Direction + Engineering | Registry updated |

---

# PART B — STATUS (as of 9 Nov 2026)

| Component | Status |
|---|---|
| Part of MLLDE design | 🔴 NO |
| Function documented | 🔴 UNKNOWN |
| NO-TRAIN contract | 🔴 NOT VERIFIED |
| LRS trace | 🔴 NONE |
| Risk of framework deviation | 🔴 PRESENT |
| Architectural decision | 🔴 RETIRE |

---

# PART C — DECLARATION

This component has **no MLLDE conformity declaration** because it is not a component of the MLLDE design. Its only governance status is: **retire before the governed deployment.**

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
