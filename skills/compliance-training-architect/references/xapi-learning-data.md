<!-- © 2026 Ana Eslava-Graterol. All Rights Reserved. profeanaeslava · profeanaeslavaedtech.
     xAPI © ADL/IEEE (IEEE 9274.1.1); SCORM & cmi5 © ADL. Standards cited, not redistributed.
     IRI sources: ADL Verb Registry http://adlnet.gov/expapi/verbs/ (canonical);
     TinCan Community Registry https://registry.tincanapi.com (community-maintained).
     For CEFR/MLLDE-specific xAPI schemas and the MLLDE IRI registry, see cefr-learning-metrics-architect. -->

# xAPI Learning Data — Universal Reference

This file covers the **generic xAPI layer** that applies to ALL Articulate/e-learning
courses, regardless of topic (compliance, technical, onboarding, language).

For the standard-selection decision (SCORM vs cmi5 vs xAPI), see
`references/scorm-cmi5-packaging.md`. For CEFR-anchored language metrics with
MLLDE-specific extensions, see the `cefr-learning-metrics-architect` skill.

---

## 1. Statement anatomy

Every xAPI statement: **actor · verb · object · result · context**.

```json
{
  "actor":   { "account": { "homePage": "https://your-lms.example", "name": "user-id-9981" } },
  "verb":    { "id": "http://adlnet.gov/expapi/verbs/completed",
               "display": { "en-US": "completed" } },
  "object":  { "id": "https://your-lms.example/courses/spill-response/v2",
               "definition": { "type": "http://adlnet.gov/expapi/activities/course",
                               "name": { "en-US": "Spill Response — Chemical Safety" } } },
  "result":  { "success": true, "completion": true, "score": { "scaled": 1.0, "raw": 100, "min": 0, "max": 100 },
               "extensions": {
                 "https://your-lms.example/ext/first-attempt-score": 85,
                 "https://your-lms.example/ext/error-count": 0 } },
  "context": { "registration": "uuid-session-here",
               "extensions": {
                 "https://your-lms.example/ext/sop-version": "SOP-EHS-012-v3",
                 "https://your-lms.example/ext/site": "Barcelona-Plant-01" } }
}
```

**IRI discipline (must follow):**
- Reuse canonical ADL verbs (Section 2 below) → use `http://adlnet.gov/expapi/verbs/*` (**http**, not https — mixing schemes duplicates the verb in aggregation).
- Mint project-specific extensions under a namespaced IRI the project owns (e.g. `https://your-client.example/xapi/ext/`) — never invent ad hoc. Keep one registry per project.
- Use learner `account` (LMS user ID), never personal email → GDPR minimisation.
- Statements are **immutable**. Corrections use the xAPI voiding verb.

---

## 2. Canonical ADL verbs (use these; do NOT mint equivalents)

Source: **http://adlnet.gov/expapi/verbs/** — the authoritative ADL verb registry.

| Verb (display) | IRI | When to use in a course |
|---|---|---|
| initialized | `http://adlnet.gov/expapi/verbs/initialized` | Course/AU launches for this learner |
| launched | `http://adlnet.gov/expapi/verbs/launched` | LMS launches the SCO/AU |
| experienced | `http://adlnet.gov/expapi/verbs/experienced` | Learner viewed a non-assessed page/media |
| interacted | `http://adlnet.gov/expapi/verbs/interacted` | Learner interacted with a non-scored element |
| attempted | `http://adlnet.gov/expapi/verbs/attempted` | Learner began a knowledge check / assessment attempt |
| answered | `http://adlnet.gov/expapi/verbs/answered` | Learner answered one question item |
| scored | `http://adlnet.gov/expapi/verbs/scored` | Intermediate score emitted (not final) |
| passed | `http://adlnet.gov/expapi/verbs/passed` | Passed the assessment (zero-error or threshold met) |
| failed | `http://adlnet.gov/expapi/verbs/failed` | Failed the assessment; triggers remediation |
| completed | `http://adlnet.gov/expapi/verbs/completed` | Finished the course/module (all required content viewed + assessment done) |
| mastered | `http://adlnet.gov/expapi/verbs/mastered` | Zero-error mastery gate confirmed |
| progressed | `http://adlnet.gov/expapi/verbs/progressed` | % completion milestone emitted |
| suspended | `http://adlnet.gov/expapi/verbs/suspended` | Learner exited without completing (bookmark) |
| resumed | `http://adlnet.gov/expapi/verbs/resumed` | Learner returned to a bookmarked session |
| terminated | `http://adlnet.gov/expapi/verbs/terminated` | Session ended (normal or abnormal exit) |
| commented | `http://adlnet.gov/expapi/verbs/commented` | Learner left a free-text reflection/note |

**Tip — Articulate outputs:** Rise emits `initialized`, `experienced`, `passed`/`failed`, and
`completed` at course level. Storyline with xAPI emits these plus `answered` per question
(interaction IDs follow CMI format). Confirm in SCORM Cloud before delivery.

---

## 3. Activity types

### 3a. ADL registry — `http://adlnet.gov/expapi/activities/`

| Type | IRI suffix | Use for |
|---|---|---|
| course | `/course` | The whole course package |
| module | `/module` | A chapter/section of the course |
| lesson | `/lesson` | A single content page or lesson |
| assessment | `/assessment` | The scored knowledge check block |
| question | `/question` | One question item within an assessment |
| interaction | `/interaction` | A non-scored interactive element (drag/click/explore) |
| simulation | `/simulation` | A branching scenario or software sim |
| media | `/media` | A video or audio component |
| performance | `/performance` | An on-the-job task (L3 — outside the LMS) |
| attempt | `/attempt` | One attempt on a scored activity |

### 3b. TinCan community registry — https://registry.tincanapi.com

Use the community registry to discover additional types (job aids, surveys, meetings,
videos, webinars). IRIs there follow the `http://id.tincanapi.com/activitytype/` namespace.
Common entries relevant to compliance training:

| Type | IRI |
|---|---|
| job aid | `http://id.tincanapi.com/activitytype/job-aid` |
| resource | `http://id.tincanapi.com/activitytype/resource` |
| survey / reaction form | `http://id.tincanapi.com/activitytype/survey` |
| video | `http://id.tincanapi.com/activitytype/video` |
| webinar | `http://id.tincanapi.com/activitytype/webinar` |
| on-the-job task | `http://id.tincanapi.com/activitytype/work-performed` |
| goal | `http://id.tincanapi.com/activitytype/goal` |

Always **verify the IRI resolves** before using a community entry in a production
LRS. The community registry is a discovery tool; canonical ADL types are preferred.

---

## 4. The dual use case: in-course (L2) + on-the-job (L3)

### 4a. In-course statements (L2 Learning — the LMS records this)

Minimal set for a compliance course with a mastery gate:

1. **`initialized`** → course starts.
2. **`experienced`** per module (progression evidence).
3. **`answered`** per question item → `result.success`, `result.response`, `result.extensions.first-attempt` flag.
4. **`passed`** or **`failed`** on the assessment → `result.score.raw`, `result.extensions.error-count` = 0 for zero-error.
5. **`completed`** → course finished; this is the **record** the LMS uses.

Do NOT emit `completed` before the learner has both finished the content AND
met the mastery gate. Completion and success are separate states (SCORM 2004
convention, preserved in xAPI): `result.completion: true` + `result.success: true`.

### 4b. On-the-job statements (L3 Behaviour — the LRS records this)

Emitted by a manager observation app, a supervisor checklist app, or a device/sensor —
**not** by the Articulate course. Same actor namespace as the course so the LRS can join.

```json
{
  "actor":  { "account": { "homePage": "https://your-lms.example", "name": "user-id-9981" } },
  "verb":   { "id": "http://adlnet.gov/expapi/verbs/mastered",
              "display": { "en-US": "mastered" } },
  "object": { "id": "https://your-lms.example/tasks/spill-response/step-4-ppe",
              "definition": { "type": "http://adlnet.gov/expapi/activities/performance",
                              "name": { "en-US": "Don PPE before entering spill zone" } } },
  "result": { "success": true, "extensions": {
                "https://your-lms.example/ext/observation-method": "direct-supervisor",
                "https://your-lms.example/ext/days-post-training": 14 } },
  "context": { "extensions": {
                 "https://your-lms.example/ext/sop-version": "SOP-EHS-012-v3",
                 "https://your-lms.example/ext/site": "Barcelona-Plant-01",
                 "https://your-lms.example/ext/observer-role": "line-supervisor" } }
}
```

---

## 5. Metric patterns for the D6 Kirkpatrick plan

| Kirkpatrick level | xAPI signal | Query / report |
|---|---|---|
| L2 — Learning | `passed`/`failed` + `result.score.raw` + `ext/error-count` | % mastery; first-attempt accuracy per step |
| L2 — Effort/engagement | `experienced` per module + `progressed` milestones | Drop-off point; time-on-task per module |
| L2 — Reaction | `completed` with `ext/reaction-score` (survey result) | Mean relevance rating |
| L3 — On-the-job | `mastered` / `failed` on performance activity from observation app | SOP adherence rate; observation coverage |
| L4 — Results | Operational metric (incidents, deviations) linked by `ext/sop-version` | Trend vs. baseline |

**Always pair a metric with a baseline, owner, and measurement date.** A metric
without a measurement plan is a wish, not a KPI.

---

## 6. LRS practicalities (compliance projects)

- **Immutability.** Statements cannot be edited — corrections use xAPI voiding (`voided` verb against the original statement IRI).
- **Learner identity.** Use LMS account ID in the `account` object, never personal email (GDPR minimisation). Ensure the same ID is used across in-course and on-the-job streams so the LRS can join them.
- **Record retention.** Confirm the LRS retention period matches the client's regulatory requirement (GxP: often the life of the product + post-market + 5 years).
- **LRS conformance.** Recommend the client verify LRS conformance via the ADL test suite before go-live.
- **Articulate + LRS.** Rise and Storyline can send statements to both an LMS (SCORM) and a separate LRS simultaneously (dual-track) if the client's authoring template supports it. Confirm in the D1 brief.
- **Version tracking.** Record `ext/sop-version` or `ext/course-version` in context for every statement — this is the trace a GxP audit needs.

---

## 7. Tools & validation

| Tool | URL | Use for |
|---|---|---|
| **ADL xAPI Lab** | https://adlnet.github.io/xapi-lab/ | Build, preview and validate xAPI statements interactively before coding them into a course or observation app |
| **ADL Verb Registry** | http://adlnet.gov/expapi/verbs/ | Canonical source for all ADL verbs and their definitions |
| **TinCan Community Registry** | https://registry.tincanapi.com | Discover community activity types and verb extensions |
| **SCORM Cloud (Rustici)** | https://cloud.scorm.com | Test SCORM 1.2 / 2004 / cmi5 / xAPI packages before LMS deployment |
| **ADL xAPI Conformance Test Suite** | https://adlnet.gov/projects/xapi-conformance-testing/ | Verify LRS conformance before go-live |

**Always validate a statement in the xAPI Lab before writing it into production code.**
The lab surfaces missing required fields, malformed IRIs, and type errors that an LRS
may silently reject or store incorrectly.

---

## 8. Scope boundary

This file covers **universal xAPI** — the layer that applies to any e-learning
course regardless of subject matter.

For **CEFR/MLLDE-specific xAPI** (language learning only) — including the MLLDE IRI
registry, `ext/cefr-level` / `ext/cefr-skill` / `ext/cefr-scale` extensions, evidence
tiers 1–3, the dual performance+pedagogy stream, and the scoring firewall — see the
`cefr-learning-metrics-architect` skill. Those extensions do **not** apply here.
