/* ===== JS COMMUN — Immo-Business International ===== */

// --- Menu mobile toggle ---
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('navMenu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    // Fermer au clic sur un lien
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }
});

// --- Transitions de page (fade in/out) ---
(function () {
  'use strict';

  // Exclure les ancres (#) et les liens externes
  function isInternalNav(link) {
    if (!link || !link.href) return false;
    try {
      var u = new URL(link.href);
      // Même origine (hostname + protocole)
      if (u.origin !== window.location.origin) return false;
      // Exclure les ancres pures (#)
      if (u.pathname === window.location.pathname && u.hash) return false;
      // Exclure les liens avec download ou target="_blank"
      if (link.hasAttribute('download') || link.target === '_blank') return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  var _navPending = false;

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link || _navPending) return;
    if (!isInternalNav(link)) return;

    e.preventDefault();
    var target = link.href;

    // Fermer le menu mobile si ouvert
    var nav = document.getElementById('navMenu');
    if (nav) nav.classList.remove('open');

    // Lancer la sortie
    document.body.classList.add('page-exit');
    _navPending = true;

    setTimeout(function () {
      window.location.href = target;
    }, 250); // correspond à 0.25s du CSS
  });

  // Retirer la classe de transition après l'animation d'entrée
  window.addEventListener('pageshow', function () {
    document.body.classList.remove('page-exit');
  });
})();

// --- Header flou au scroll ---
(function () {
  'use strict';

  var headers = document.querySelectorAll('.header-wrap, .header-wrap-admin');
  if (!headers.length) return;

  function onScroll() {
    headers.forEach(function (h) {
      h.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // état initial
})();

// --- Ripple effect (Material Design) ---
(function () {
  'use strict';

  // Ajouter ripple-btn aux éléments interactifs au chargement
  document.addEventListener('DOMContentLoaded', function () {
    var selectors = '.btn-action, .filtre-chip, .sort-chip, .btn-ligne, .btn-voirplus, .btn-pleine-claire, .wa-float, button:not(.carousel-arrow):not(.temo-arrow):not(.menu-toggle)';
    document.querySelectorAll(selectors).forEach(function (el) {
      el.classList.add('ripple-btn');
    });
  });

  function createRipple(e) {
    var selectors = '.btn-action, .filtre-chip, .sort-chip, .btn-ligne, .btn-voirplus, .btn-pleine-claire, .wa-float, button:not(.carousel-arrow):not(.temo-arrow):not(.menu-toggle)';
    var btn = e.target.closest(selectors);
    if (!btn) return;

    // Garantir position:relative et overflow:hidden (même pour éléments dynamiques)
    btn.classList.add('ripple-btn');

    // Éviter les doublons
    var existing = btn.querySelector('.ripple');
    if (existing) existing.remove();

    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);

    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    var x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left - size / 2;
    var y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    // Ripple plus sombre sur fond clair
    var bg = window.getComputedStyle(btn).backgroundColor;
    var isLight = bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)' ||
      (bg.startsWith('rgb') && +bg.match(/\d+/)[0] > 200);
    if (isLight) {
      ripple.classList.add('ripple-dark');
    }

    btn.appendChild(ripple);

    // Nettoyer après l'animation
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  }

  // pointerdown fonctionne sur souris ET tactile sans délai
  document.addEventListener('pointerdown', createRipple);
})();

// --- Helpers ---
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
