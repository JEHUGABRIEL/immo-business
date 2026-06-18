/* ===== INDEX — Immo-Business International ===== */

(function () {
  'use strict';

  /* ── HERO CARROUSEL ── */
  var hIdx = 0,
    hSlides = document.querySelectorAll('.hero-slide'),
    hDots = document.querySelectorAll('.hero-dot'),
    hTimer;
  var captions = [
    'Villa à Bastos, Yaoundé',
    'Résidence à Kintélé, Brazzaville',
    'Terrain en bord de route, Libreville'
  ];

  function goHero(n) {
    hSlides[hIdx].classList.remove('active');
    hDots[hIdx].classList.remove('active');
    hIdx = (n + hSlides.length) % hSlides.length;
    hSlides[hIdx].classList.add('active');
    hDots[hIdx].classList.add('active');
    var cap = document.getElementById('heroCaption');
    if (cap) cap.textContent = captions[hIdx];
  }

  if (hSlides.length) {
    hTimer = setInterval(function () { goHero(hIdx + 1); }, 6000);
    var hero = document.getElementById('heroCarousel');
    if (hero) {
      hero.addEventListener('mouseenter', function () { clearInterval(hTimer); });
      hero.addEventListener('mouseleave', function () {
        hTimer = setInterval(function () { goHero(hIdx + 1); }, 6000);
      });
    }
  }

  // Expose goHero globally for onclick
  window.goHero = goHero;

  /* ── TEMOIGNAGES CARROUSEL ── */
  var tIdx = 0,
    tTotal = 4,
    tTimer;
  var tTrack = document.getElementById('temoTrack');
  var tDots = document.querySelectorAll('.temo-dot-h');

  function goTemo(n) {
    tIdx = (n + tTotal) % tTotal;
    if (tTrack) tTrack.style.transform = 'translateX(-' + tIdx * 100 + '%)';
    tDots.forEach(function (d, i) {
      d.classList.toggle('active', i === tIdx);
    });
  }

  if (tTrack) {
    var nextBtn = document.getElementById('temoNext');
    var prevBtn = document.getElementById('temoPrev');
    if (nextBtn) nextBtn.addEventListener('click', function () { goTemo(tIdx + 1); });
    if (prevBtn) prevBtn.addEventListener('click', function () { goTemo(tIdx - 1); });
    tTimer = setInterval(function () { goTemo(tIdx + 1); }, 5000);
    tTrack.addEventListener('mouseenter', function () { clearInterval(tTimer); });
    tTrack.addEventListener('mouseleave', function () {
      tTimer = setInterval(function () { goTemo(tIdx + 1); }, 5000);
    });
  }

  window.goTemo = goTemo;

  /* ── MOSAÏQUE BIENS (défilement infini) ── */
  var biensData = [
    { flag: '🇨🇲', loc: 'Bastos, Yaoundé', titre: 'Villa moderne avec jardin', detail: '5 chambres &middot; 220 m²', prix: '85 000 000 FCFA', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80', populaire: true },
    { flag: '🇨🇬', loc: 'Kintélé, Brazzaville', titre: 'Terrain titré, 600 m²', detail: '', prix: '25 000 000 FCFA', img: 'images/Congo/Bien_1/720286546_1658192892137939_5436816513672571744_n.jpeg', populaire: true },
    { flag: '🇬🇦', loc: 'Glass, Libreville', titre: 'Appartement meublé', detail: '', prix: '350 000 FCFA / mois', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80', populaire: true },
    { flag: '🇨🇫', loc: 'Bangui', titre: 'Maison familiale', detail: '', prix: '38 000 000 FCFA', img: 'images/Centrafrique/Bien1/723686760_1472986368179534_1342459871268264140_n.jpg' },
    { flag: '🇨🇲', loc: 'Bonapriso, Douala', titre: 'Duplex vue mer', detail: '4 chambres &middot; 260 m²', prix: '95 000 000 FCFA', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80' },
    { flag: '🇨🇬', loc: 'Centre-ville, Brazzaville', titre: 'Local commercial', detail: '', prix: '600 000 FCFA / mois', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80' },
    { flag: '🇬🇦', loc: 'Akanda, Libreville', titre: 'Villa en bord de mer', detail: '', prix: '120 000 000 FCFA', img: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80' },
    { flag: '🇨🇫', loc: 'Boy-Rabe, Bangui', titre: 'Terrain résidentiel', detail: '', prix: '12 000 000 FCFA', img: 'images/Centrafrique/Bien_2/724764602_1472940564850781_4738221180956559236_n.jpg' },
    { flag: '🇹🇩', loc: 'N\'Djaména', titre: 'Appartement meublé', detail: '', prix: '280 000 FCFA / mois', img: 'images/724666206_1472985994846238_7251162334942360209_n.jpg' },
  ];

  function isPopulaire(b) {
    return b.populaire === true;
  }

  function tileHTML(b, isGrande) {
    var msgWa = encodeURIComponent('Bonjour, je suis intéressé par : ' + b.titre + ' (' + b.loc + ') - ' + b.prix);
    var populaire = isPopulaire(b);
    return '<div class=\"bien-tile' + (isGrande ? ' grande' : '') + '\">' +
      '<img src=\"' + b.img + '\" alt=\"' + b.titre + '\">' +
      (populaire ? '<div class=\"badge-populaire absolute top-3 left-3 z-10 bg-[#D4A017] text-white px-2.5 py-1 text-[0.6rem] tracking-wider uppercase font-bold rounded-sm shadow-md flex items-center gap-1.5\"><i class=\"fa-solid fa-fire\" style=\"font-size:0.5rem\"></i> Populaire</div>' : '') +
      '<div class=\"bien-overlay\">' +
      '<div class=\"bien-flag-tag text-[0.7rem] tracking-widest uppercase text-white/65 flex items-center gap-1.5\">' + b.flag + ' ' + b.loc + '</div>' +
      '<h3 class=\"font-serif font-medium text-white\">' + b.titre + '</h3>' +
      (isGrande && b.detail ? '<div class=\"text-sm text-white/85 mb-2\">' + b.detail + '</div>' : '') +
      '<div class=\"text-sm text-white/90 mb-3\">' + b.prix + '</div>' +
      '<div class=\"flex gap-1.5 mt-1\">' +
        '<a href=\"biens.html\" class=\"btn-action flex-1 bg-white/20 text-white text-[0.72rem] font-semibold py-2 px-3 rounded no-underline text-center backdrop-blur-sm hover:bg-white/40 transition-all border-0\">' +
          '<i class=\"fa-solid fa-eye\" style=\"font-size:0.6rem\"></i> Détails' +
        '</a>' +
        '<a href=\"https://wa.me/?text=' + msgWa + '\" target=\"_blank\" class=\"btn-action flex-1 bg-[#25D366]/80 text-white text-[0.72rem] font-semibold py-2 px-3 rounded no-underline text-center backdrop-blur-sm hover:bg-[#25D366] transition-all border-0\">' +
          '<i class=\"fa-brands fa-whatsapp\" style=\"font-size:0.6rem\"></i> Visite' +
        '</a>' +
      '</div>' +
      '</div></div>';
  }

  function frameHTML(items) {
    return '<div class=\"biens-frame grid grid-cols-[1.5fr_1fr] gap-1 min-w-full\">' +
      tileHTML(items[0], true) +
      '<div class=\"flex flex-col gap-1\">' + tileHTML(items[1], false) + tileHTML(items[2], false) + tileHTML(items[3], false) + '</div>' +
      '</div>';
  }

  var biensTrack = document.getElementById('biensTrack');
  if (biensTrack) {
    var biensPos = 0;

    function renderBiens() {
      var a = [];
      for (var i = 0; i < 4; i++) { a.push(biensData[(biensPos + i) % biensData.length]); }
      var b = [];
      for (var i = 0; i < 4; i++) { b.push(biensData[(biensPos + 1 + i) % biensData.length]); }
      biensTrack.style.transition = 'none';
      biensTrack.style.transform = 'translateX(0)';
      biensTrack.innerHTML = frameHTML(a) + frameHTML(b);
    }

    function slideBiens() {
      biensTrack.style.transition = 'transform .9s cubic-bezier(.65,0,.35,1)';
      biensTrack.style.transform = 'translateX(-100%)';
      setTimeout(function () {
        biensPos = (biensPos + 1) % biensData.length;
        renderBiens();
      }, 920);
    }

    renderBiens();
    var biensTimer = setInterval(slideBiens, 4200);
    var mosaicWrap = document.querySelector('.biens-mosaic-wrap');
    if (mosaicWrap) {
      mosaicWrap.addEventListener('mouseenter', function () { clearInterval(biensTimer); });
      mosaicWrap.addEventListener('mouseleave', function () {
        biensTimer = setInterval(slideBiens, 4200);
      });
    }
  }

  /* ── MARQUEE PAYS : vitesse adaptative ── */
  (function () {
    var track = document.querySelector('.pays-marquee-track');
    if (!track) return;

    function adjustSpeed() {
      var trackWidth = track.scrollWidth;
      var scrollDist = trackWidth / 2;
      if (scrollDist < 1) return;
      var vw = window.innerWidth;
      // Plus lent sur mobile (lisibilité), plus rapide sur desktop
      var speed = 20 + (vw - 320) * 0.015;
      speed = Math.min(Math.max(speed, 18), 48);
      var dur = Math.max(scrollDist / speed, 8);
      track.style.animationDuration = Math.round(dur * 10) / 10 + 's';
    }

    adjustSpeed();
    var timer;
    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(adjustSpeed, 150);
    });
  })();

})();
