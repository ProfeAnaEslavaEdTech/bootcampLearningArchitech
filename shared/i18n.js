/* shared/i18n.js — Bilingual EN/ES infrastructure for all bootcamp sub-pages
   Include BEFORE the theme-toggle script. Each page must define window.PAGE_I18N
   with { en: { key: 'text' }, es: { key: 'texto' } } and add data-i18n="key"
   attributes to every translatable element.
   The lang preference is shared with the main index via localStorage('oi-lang').
*/
(function () {
  var lang = localStorage.getItem('oi-lang') || 'en';

  function applyLang(l) {
    lang = l;
    localStorage.setItem('oi-lang', l);
    document.documentElement.lang = l;

    var t = window.PAGE_I18N && window.PAGE_I18N[l];
    if (t) {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
      });
    }

    /* Section-level swap: data-i18n-sec="key" swaps innerHTML from <template id="key-{lang}"> */
    document.querySelectorAll('[data-i18n-sec]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-sec');
      var tmpl = document.getElementById(key + '-' + l);
      if (tmpl) el.innerHTML = tmpl.innerHTML;
    });

    var btn = document.getElementById('oi-lang-btn');
    if (btn) btn.textContent = l === 'en' ? 'ES' : 'EN';
  }

  window.setLang = applyLang;

  document.addEventListener('DOMContentLoaded', function () {
    var ctrlRow = document.querySelector('.oi-ctrl-row');
    if (ctrlRow) {
      var langBtn = document.createElement('button');
      langBtn.id = 'oi-lang-btn';
      langBtn.className = 'oi-ctrl-btn';
      langBtn.setAttribute('aria-label', 'Cambiar idioma / Switch language');
      langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
      langBtn.addEventListener('click', function () {
        applyLang(lang === 'en' ? 'es' : 'en');
      });
      var themeBtn = document.getElementById('oi-theme-btn');
      if (themeBtn) ctrlRow.insertBefore(langBtn, themeBtn);
      else ctrlRow.appendChild(langBtn);
    }
    applyLang(lang);
  });
})();
