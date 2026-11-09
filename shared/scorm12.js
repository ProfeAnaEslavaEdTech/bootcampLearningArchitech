/* shared/scorm12.js — SCORM 1.2 wrapper + auto-instrumentation
   Inject via pack-scorm.py; not loaded by GitHub Pages builds.

   Hooks two in-page interaction patterns:
     Pattern A: button.quiz-option + onclick="ans(this,'qN', correct)"
     Pattern B: button.opt[data-ok="0|1"] with addEventListener

   Per-page config via window.SCORM_CONFIG (optional):
     masteryScore    {number}  Pass threshold %, default 80
     finalStep       {number}  Step index that triggers completion (Pattern A pages)
     completionMode  'scroll'  Content-only pages: complete on 90% scroll
     requireInteractions {bool} false = mark completed even with no interactions
*/
(function (w) {
  'use strict';

  /* ── 1. Find SCORM 1.2 API ───────────────────────────────────────────── */
  var API = null;
  var _interactionCount = 0;
  var _totalInteractions = 0;
  var _correctInteractions = 0;

  function findAPI(win) {
    var tries = 0;
    while (!win.API && win.parent && win.parent !== win && tries < 10) {
      win = win.parent;
      tries++;
    }
    return win.API || null;
  }

  /* ── 2. SCORM 1.2 primitives ─────────────────────────────────────────── */
  var SCORM = {
    initialized: false,
    _resumeLocation: null,

    start: function () {
      API = findAPI(window);
      if (!API) { console.info('[SCORM] No API — preview mode'); return; }
      var r = API.LMSInitialize('');
      if (r === 'true' || r === true) {
        SCORM.initialized = true;
        var loc = API.LMSGetValue('cmi.core.lesson_location');
        if (loc) SCORM._resumeLocation = loc;
        var st = API.LMSGetValue('cmi.core.lesson_status');
        if (!st || st === 'not attempted') {
          API.LMSSetValue('cmi.core.lesson_status', 'incomplete');
          API.LMSCommit('');
        }
      }
    },

    setLocation: function (loc) {
      if (!SCORM.initialized) return;
      API.LMSSetValue('cmi.core.lesson_location', String(loc));
      API.LMSCommit('');
    },

    trackInteraction: function (id, type, response, correct, weight) {
      if (!SCORM.initialized) return;
      var n = _interactionCount++;
      var p = 'cmi.interactions.' + n + '.';
      API.LMSSetValue(p + 'id', String(id).slice(0, 255));
      API.LMSSetValue(p + 'type', type || 'choice');
      API.LMSSetValue(p + 'student_response', String(response).slice(0, 255));
      API.LMSSetValue(p + 'result', correct ? 'correct' : 'wrong');
      API.LMSSetValue(p + 'weighting', String(weight !== undefined ? weight : 1));
      var now = new Date();
      API.LMSSetValue(p + 'time',
        [now.getHours(), now.getMinutes(), now.getSeconds()]
          .map(function (v) { return String(v).padStart(2, '0'); }).join(':'));

      _totalInteractions++;
      if (correct) _correctInteractions++;
      SCORM._pushScore();
      API.LMSCommit('');
    },

    _pushScore: function () {
      if (!SCORM.initialized || _totalInteractions === 0) return;
      var pct = Math.round((_correctInteractions / _totalInteractions) * 100);
      API.LMSSetValue('cmi.core.score.raw', String(pct));
      API.LMSSetValue('cmi.core.score.min', '0');
      API.LMSSetValue('cmi.core.score.max', '100');
    },

    complete: function (passed) {
      if (!SCORM.initialized) return;
      var cfg = w.SCORM_CONFIG || {};
      var threshold = cfg.masteryScore !== undefined ? cfg.masteryScore : 80;
      var score = _totalInteractions > 0
        ? Math.round((_correctInteractions / _totalInteractions) * 100)
        : 100;
      var status;
      if (passed !== undefined) {
        status = passed ? 'passed' : 'failed';
      } else {
        status = score >= threshold ? 'passed' : 'failed';
      }
      API.LMSSetValue('cmi.core.score.raw', String(score));
      API.LMSSetValue('cmi.core.score.min', '0');
      API.LMSSetValue('cmi.core.score.max', '100');
      API.LMSSetValue('cmi.core.lesson_status', status);
      API.LMSCommit('');
    },

    finish: function () {
      if (!SCORM.initialized) return;
      if (_totalInteractions === 0) {
        var cfg = w.SCORM_CONFIG || {};
        if (!cfg.requireInteractions) {
          var cur = API.LMSGetValue('cmi.core.lesson_status');
          if (cur === 'incomplete' || cur === 'not attempted') {
            API.LMSSetValue('cmi.core.lesson_status', 'completed');
          }
        }
      }
      API.LMSSetValue('cmi.core.exit', 'normal');
      API.LMSFinish('');
      SCORM.initialized = false;
    }
  };

  w.SCORM = SCORM;

  /* ── 3. Auto-instrumentation ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    SCORM.start();
    var cfg = w.SCORM_CONFIG || {};

    /* Pattern A — quiz-option buttons + ans(btn, qId, correct) */
    if (typeof w.ans === 'function') {
      var _origAns = w.ans;
      w.ans = function (btn, qId, correct) {
        _origAns.call(this, btn, qId, correct);
        var response = (btn.textContent || btn.innerText || '').trim();
        SCORM.trackInteraction(qId, 'choice', response, !!correct, 1);
      };
    }

    /* Pattern A — step navigation via goTo() */
    if (typeof w.goTo === 'function') {
      var _origGoTo = w.goTo;
      w.goTo = function (idx) {
        _origGoTo.call(this, idx);
        SCORM.setLocation(String(idx));
        if (cfg.finalStep !== undefined && idx >= cfg.finalStep) {
          SCORM.complete();
        }
      };
    }

    /* Pattern A — completeStep() */
    if (typeof w.completeStep === 'function') {
      var _origStep = w.completeStep;
      w.completeStep = function (idx, xp) {
        _origStep.call(this, idx, xp);
        SCORM.setLocation(String(idx));
      };
    }

    /* Pattern B — button.opt[data-ok] */
    document.querySelectorAll('button.opt[data-ok]').forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var correct = btn.getAttribute('data-ok') === '1';
        var qEl = btn.closest('[data-q], [data-question], [class*="q-block"], [class*="scenario"]')
          || btn.parentElement;
        var qId = qEl.getAttribute('data-q') || qEl.id || ('opt_q_' + i);
        var response = (btn.textContent || btn.innerText || '').trim();
        SCORM.trackInteraction(qId, 'choice', response, correct, 1);
      }, true);
    });

    /* Section location tracking via IntersectionObserver */
    var sections = document.querySelectorAll(
      'section[id], .step[id], [data-section], .slide[id], .card[id]'
    );
    if (sections.length && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var loc = e.target.id
              || e.target.getAttribute('data-section')
              || '';
            if (loc) SCORM.setLocation(loc);
          }
        });
      }, { threshold: 0.5 });
      sections.forEach(function (s) { obs.observe(s); });
    }

    /* Content-only pages: 90% scroll = complete */
    if (cfg.completionMode === 'scroll') {
      var _scrollDone = false;
      window.addEventListener('scroll', function () {
        if (_scrollDone) return;
        var pct = (window.scrollY + window.innerHeight)
          / document.documentElement.scrollHeight;
        if (pct >= 0.9) {
          _scrollDone = true;
          SCORM.complete(true);
        }
      }, { passive: true });
    }
  });

  /* ── 4. Finish on unload ─────────────────────────────────────────────── */
  window.addEventListener('beforeunload', function () { SCORM.finish(); });

})(window);
