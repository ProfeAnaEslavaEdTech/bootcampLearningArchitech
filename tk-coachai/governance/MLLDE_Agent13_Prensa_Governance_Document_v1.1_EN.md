# MLLDE · Agent 13 (real) — PRENSA (HIDDEN)
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 13 · **Phase:** Outside the loop
**Canonical map:** **NOT declared in the architecture** · **Status:** ⏳ PENDING DECISION
**Does it measure?** UNKNOWN · **Does it decide?** UNKNOWN
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **GOVERNANCE ALERT.**
> «Prensa» is a hidden component not declared in the official architecture of TK CoachAI.
> Located in `api/tk-coach.js` (line 817). Function unknown. No LRS trace.
> **Verdict:** pending decision by Ana Eslava-Graterol: retire or R-ADM examination.
> **Governance rule:** no undeclared component may remain active in production.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose
- **Real id:** `prensa`. Component no. 13 of the real inventory (Alex, 1 Sep 2026).
- **Code location:** `api/tk-coach.js`, line 817 (hidden).
- **Function:** unknown. Not declared in the system architecture or in the agent inventory documented by Alex.
- **LRS trace:** none.
- **Status:** hidden — not visible to the student or to the governance system until discovered in the 9 November 2026 audit.

## A.2 Governance risk
- **Undeclared component running in production** = maximum governance risk level per the rule: «we know everything that runs».
- Without knowing its function, it is impossible to assess whether it:
  - Accesses student data.
  - Generates content that affects the pedagogical flow.
  - Emits untraced xAPI statements.
  - Has a verified NO-TRAIN contract.

## A.3 Decision options
| Option | Description | Requirement |
|---|---|---|
| **Retire** | Remove `prensa` from the code | Verify no active dependencies before removing |
| **R-ADM examination** | Submit to formal admission (R-ADM) | Document function + model + contract + A1–A3 tests + N3 |

## A.4 While pending decision
- The component must not run in any student session until the decision is made.
- If active: **deactivate immediately** (feature flag to false) and open an incident.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

| Component | Status |
|---|---|
| Function documented | 🔴 UNKNOWN |
| NO-TRAIN contract | 🔴 NOT VERIFIED |
| LRS trace | 🔴 NONE |
| Ana's decision (retire / R-ADM) | ⏳ PENDING |
| Signed specification | 🔴 IMPOSSIBLE until function is known |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C13.1 | Function unknown | Audit code at `api/tk-coach.js` line 817 | Function documented | **P0 — URGENT** |
| C13.2 | Active component undeclared | Deactivate (feature flag to false) until decision | 0 executions of `prensa` in production until decided | **P0 — URGENT** |
| C13.3 | Decision pending | Ana decides: retire or R-ADM | Decision documented and signed | **P0** |
| C13.4 | If R-ADM: fully document | Follow standard admission process | Complete v1.1 card signed | **P0 (if R-ADM)** |

---

# PART D — DECLARATION OF CONFORMITY

**Conformity status:** 🔴 — undeclared component; conformity cannot be declared until function is known. C13.1–C13.3 (P0) are blocking.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
