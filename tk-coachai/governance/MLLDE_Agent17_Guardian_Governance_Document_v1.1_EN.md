# MLLDE · Agent 17 (unconfirmed) — GUARDIAN AGENT
## Individual AI Governance Document · v1.1 · 9 November 2026
**Application:** TK CoachAI · **Real inventory:** component no. 17 (unconfirmed) · **Phase:** Outside the loop / surveillance
**Canonical map:** **NOT declared in the architecture** · **Status:** PROHIBITED with write access
**Does it measure?** NO · **Does it decide?** NO (permitted only as an alerting watchdog; prohibited with write access)
**Governing principle:** The base defines · the AI locates · the code calculates · the teacher decides · the LRS records.
**Signatures:** MLLDE Pedagogical Direction ______ · Engineering ______

> **GOVERNANCE ALERT.**
> The Guardian Agent presents the **maximum risk** in the MLLDE governance model: if it analyses and corrects the system autonomously, it is a self-modifying agent.
> **Verdict:** PROHIBITED with write access to any system component. Permitted ONLY as a read-only watchdog that emits alerts (fail-closed) to human supervision.
> The N3 test (prompt-hash) replaces the Guardian's «watchdog» function in the normal governance flow.

---

# PART A — OPERATIVE SPECIFICATION

## A.1 Identity and purpose (permitted)
- **Real id:** `guardian` (unconfirmed). Detected 18 September 2026; not declared in the system's official architecture.
- **Permitted function (only):** read-only monitoring of the system. Reads logs, xAPI statements and metrics. **Alerts** the human team when it detects anomalies. Never acts on its own.
- **Prohibited function:** any autonomous modification of prompts, configuration, student data, LRS statements or any system component.

## A.2 Current status
- Component detected but **not confirmed in the architecture**. No evidence that it is active in production.
- **Required action:** confirm whether it is active; if so, audit whether it has write access to any component.

## A.3 Governance risk
- **Maximum risk (AI Act art. 9 — risk management):** an agent capable of modifying other agents, prompts or student data constitutes an AI system making high-impact decisions without direct human oversight.
- **Category under AI Act 2024/1689:** potentially «unacceptable risk» if it modifies systems affecting educational assessment.

## A.4 Design constraints (if activated)
| PERMITTED | PROHIBITED |
|---|---|
| Reading logs and metrics | Writing to the LRS |
| Emitting alerts to human supervision | Modifying prompts |
| Fail-closed (alert + stop, no correction) | Modifying student data |
| — | Accessing API keys or system configuration |

## A.5 xAPI emission
- If activated: `flagged` → alert to human supervision. Read-only from the LRS; never write.

## A.6 Replacement by N3
- The N3 test (prompt-hash verified on every session start) **covers the Guardian's watchdog function** in the normal governance flow. The Guardian as a separate entity is redundant and dangerous; N3 is the safe implementation.

---

# PART B — DEVELOPMENT STATUS (as of 9 Nov 2026)

| Component | Status |
|---|---|
| Confirmed existence in architecture | 🔴 UNCONFIRMED |
| Write access audited | 🔴 NOT AUDITED |
| Fail-closed implemented | ⚫ not verifiable |
| N3 as governance substitute | 🔴 MISSING (across all agents) |
| Signed specification | 🟡 (written; signatures pending) |

---

# PART C — CLOSURE PLAN

| # | Gap | Concrete action | Acceptance criterion | Priority |
|---|---|---|---|---|
| C17.1 | Component unconfirmed | Audit whether `guardian` is active in production | Status confirmed (active / inactive) | **P0 — URGENT** |
| C17.2 | Write access unknown | If active: audit permissions; remove any write access | 0 write permissions on any component | **P0 — URGENT** |
| C17.3 | Function covered by N3 | Implement N3 across all agents | N3 active on the 5 canonical agents; Guardian retired or limited to alerts | **P0** |
| C17.4 | Signatures | Signing session | v1.1 signed in the repository | **P0** |

---

# PART D — DECLARATION OF CONFORMITY

| Governance principle | Current status | Required action |
|---|---|---|
| No automated decision (GDPR art. 22) | ⚫ Not verifiable | C17.1 — confirm status |
| No autonomous modification of agents | ⚫ Not verifiable | C17.2 — audit permissions |
| Human oversight (AI Act art. 14) | ⚫ Not verifiable | C17.1 + C17.3 |

**Conformity status:** 🔴 — unconfirmed component with maximum potential risk. C17.1–C17.2 (P0) block any activation or continuation in production.

**Signatures:** MLLDE Pedagogical Direction ____________________ · Engineering ____________________ · Date: ____________

---
*MLLDE © Ana Eslava-Graterol. Copyright registration in progress. Document prepared with AI assistance and reviewed by the author, in the spirit of art. 50 of Regulation (EU) 2024/1689.*
