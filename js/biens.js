/* ===== BIENS — Immo-Business International ===== */

(function () {
  'use strict';

  var _uid = (function () { var c = 0; return function () { return 'b' + (++c); }; })();

  function daysAgo(n) {
    var d = new Date();
    d.setDate(d.getDate() - n);
    return d;
  }

  var biensListe = [
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bastos, Yaoundé', titre: 'Villa moderne avec jardin', type: 'À vendre', prix: '85 000 000', unite: 'FCFA', det: ['5 ch.', '220 m²'], imgs: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'], dateAdded: daysAgo(3), views: 18 },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Kintélé, Brazzaville', titre: 'Terrain titré, viabilisé', type: 'À vendre', prix: '25 000 000', unite: 'FCFA', det: ['600 m²', 'Titré'], imgs: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'], dateAdded: daysAgo(45), views: 42 },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Glass, Libreville', titre: 'Appartement meublé standing', type: 'À louer', prix: '350 000', unite: 'FCFA / mois', det: ['3 ch.', '110 m²'], imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80'], dateAdded: daysAgo(7), views: 35 },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Boy-Rabe, Bangui', titre: 'Maison familiale', type: 'À vendre', prix: '38 000 000', unite: 'FCFA', det: ['4 ch.', '180 m²'], imgs: ['https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'], dateAdded: daysAgo(60), views: 27 },
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bonapriso, Douala', titre: 'Duplex vue mer', type: 'À vendre', prix: '95 000 000', unite: 'FCFA', det: ['4 ch.', '260 m²'], imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'], dateAdded: daysAgo(1), views: 5 },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Centre-ville, Brazzaville', titre: 'Local commercial', type: 'À louer', prix: '600 000', unite: 'FCFA / mois', det: ['120 m²', 'RDC'], imgs: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80'], dateAdded: daysAgo(90), views: 63 },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Akanda, Libreville', titre: 'Villa en bord de mer', type: 'À vendre', prix: '120 000 000', unite: 'FCFA', det: ['6 ch.', '340 m²'], imgs: ['https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=80', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'], dateAdded: daysAgo(14), views: 11 },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Lakouanga, Bangui', titre: 'Terrain résidentiel', type: 'À vendre', prix: '12 000 000', unite: 'FCFA', det: ['400 m²'], imgs: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'], dateAdded: daysAgo(120), views: 89 },
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Mvan, Yaoundé', titre: 'Studio meublé', type: 'À louer', prix: '95 000', unite: 'FCFA / mois', det: ['1 ch.', '35 m²'], imgs: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'], dateAdded: daysAgo(2), views: 3 },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Pointe-Noire', titre: 'Villa avec piscine', type: 'À vendre', prix: '110 000 000', unite: 'FCFA', det: ['5 ch.', '300 m²'], imgs: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'], dateAdded: daysAgo(30), views: 55 },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Owendo, Libreville', titre: 'Entrepôt industriel', type: 'À louer', prix: '1 200 000', unite: 'FCFA / mois', det: ['800 m²'], imgs: ['https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80'], dateAdded: daysAgo(180), views: 112 },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Centre-ville, Bangui', titre: 'Bureau standing', type: 'À louer', prix: '450 000', unite: 'FCFA / mois', det: ['90 m²'], imgs: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'], dateAdded: daysAgo(20), views: 22 }
  ];

  /* ─── PERSISTANCE LOCALSTORAGE ─── */
  var STORAGE_KEY = 'adjun_immo_views';

  function loadViewsFromStorage() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && typeof saved === 'object') {
        biensListe.forEach(function (b) {
          if (saved[b.id] != null) {
            b.views = Math.max(b.views, saved[b.id]);
          }
        });
      }
    } catch (e) { /* ignore */ }
  }

  function saveViewsToStorage() {
    try {
      var data = {};
      biensListe.forEach(function (b) { data[b.id] = b.views; });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* ignore */ }
  }

  loadViewsFromStorage();

  var ICONS = {
    'ch': 'fa-bed',
    'm²': 'fa-ruler-combined',
    'titré': 'fa-file-lines',
    'rdc': 'fa-door-open',
    'étage': 'fa-layer-group',
    'parking': 'fa-car',
    'piscine': 'fa-water',
    'jardin': 'fa-tree',
    'meublé': 'fa-couch',
  };

  function detIcon(d) {
    var lower = d.toLowerCase();
    for (var key in ICONS) {
      if (lower.indexOf(key) !== -1) return ICONS[key];
    }
    return 'fa-tag';
  }

  function isRecent(date) {
    var diff = new Date() - new Date(date);
    return diff < 30 * 24 * 60 * 60 * 1000; // moins de 30 jours
  }

  function isPopulaire(id) {
    // Top 3 des biens les plus vus
    return biensListe.slice().sort(function (a, b) { return b.views - a.views; }).slice(0, 3).some(function (x) { return x.id === id; });
  }

  function cardHTML(b) {
    var badgeClass = b.type === 'À louer' ? 'bg-[#33483B] text-white' : 'bg-white text-[#1C1B19]';
    var nouveau = isRecent(b.dateAdded);
    return '<div class="bien-card-full cursor-pointer" data-pays="' + b.pays + '" data-id="' + b.id + '">' +
      '<div class="bien-card-img relative overflow-hidden h-60 bg-[#42413D]">' +
      '<img src="' + b.imgs[0] + '" alt="' + b.titre + '" class="w-full h-full object-cover">' +
      '<div class="absolute top-4 left-4 ' + badgeClass + ' px-3 py-1 text-[0.7rem] tracking-wider uppercase font-semibold">' +
      b.type + '</div>' +
      (nouveau ? '<div class="badge-nouveau absolute top-4 right-4 bg-terre text-sable px-2.5 py-1 text-[0.65rem] tracking-wider uppercase font-bold rounded-sm shadow-md flex items-center gap-1"><i class="fa-solid fa-sparkles" style="font-size:0.55rem"></i> Nouveau</div>' : '') +
      (isPopulaire(b.id) ? '<div class="badge-populaire absolute top-4 left-4 translate-y-[36px] bg-[#D4A017] text-white px-2.5 py-1 text-[0.65rem] tracking-wider uppercase font-bold rounded-sm shadow-md flex items-center gap-1.5"><i class="fa-solid fa-fire" style="font-size:0.55rem"></i> Populaire</div>' : '') +
      '<div class="absolute bottom-3 right-3 bg-encre/70 text-sable/80 text-[0.62rem] px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm"><i class="fa-solid fa-eye" style="font-size:0.55rem"></i> <span class="bien-view-count">' + b.views + '</span></div>' +
      '</div>' +
      '<div class="pt-[18px]">' +
      '<div class="text-[0.74rem] tracking-wide uppercase text-[#7C4B2A] flex items-center gap-1.5 font-semibold">' +
      b.flag + ' ' + b.loc + '</div>' +
      '<h3 class="font-serif text-[1.22rem] font-medium text-[#1C1B19] mt-2 mb-1.5">' + b.titre + '</h3>' +
      '<div class="flex gap-4 text-[0.8rem] text-[#42413D]">' +
      b.det.map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</div>' +
      '<div class="font-serif text-[1.18rem] text-[#1C1B19] font-medium border-t border-[#DFD9C9] pt-3.5 mt-3.5 flex justify-between items-baseline mb-4">' +
      b.prix + ' <span class="text-[0.78rem] text-[#42413D] font-sans font-normal">' + b.unite + '</span></div>' +
      '<div class="flex gap-2">' +
        '<button onclick="event.stopPropagation(); openDetailModal(\'' + b.id + '\')" class="btn-action flex-1 bg-encre text-white py-2.5 text-[0.82rem] font-semibold rounded cursor-pointer border-none hover:bg-terre-fonce flex items-center justify-center gap-1.5">' +
          '<i class="fa-solid fa-eye"></i> Détails' +
        '</button>' +
        '<button onclick="event.stopPropagation(); window.open(\'https://wa.me/?text=' + encodeURIComponent('Bonjour, je suis intéressé par : ' + b.titre + ' (' + b.loc + ')') + '\', \'_blank\')" class="btn-action flex-1 bg-[#25D366] text-white py-2.5 text-[0.82rem] font-semibold rounded cursor-pointer border-none hover:bg-[#1ebe5a] flex items-center justify-center gap-1.5">' +
          '<i class="fa-brands fa-whatsapp"></i> Visite' +
        '</button>' +
      '</div>' +
      '</div></div>';
  }

  /* ─── CARROUSEL ─── */
  var carouselIdx = 0;
  var carouselImages = [];

  function renderCarousel() {
    var track = document.getElementById('modalCarouselTrack');
    var dots = document.getElementById('modalCarouselDots');
    var counter = document.getElementById('modalCarouselCounter');
    if (!track || !carouselImages.length) return;

    track.innerHTML = carouselImages.map(function (url, i) {
      return '<div class="carousel-slide' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + url + '\')"></div>';
    }).join('');

    dots.innerHTML = carouselImages.map(function (_, i) {
      return '<div class="carousel-dot' + (i === 0 ? ' active' : '') + '" onclick="event.stopPropagation(); carouselGo(' + i + ')"></div>';
    }).join('');

    carouselIdx = 0;
    if (counter) counter.textContent = '1 / ' + carouselImages.length;
  }

  function updateCarousel() {
    var track = document.getElementById('modalCarouselTrack');
    var dots = document.getElementById('modalCarouselDots');
    var counter = document.getElementById('modalCarouselCounter');
    if (!track) return;
    Array.from(track.children).forEach(function (slide, i) {
      slide.classList.toggle('active', i === carouselIdx);
    });
    if (dots) {
      Array.from(dots.children).forEach(function (d, i) {
        d.classList.toggle('active', i === carouselIdx);
      });
    }
    if (counter) counter.textContent = (carouselIdx + 1) + ' / ' + carouselImages.length;
  }

  window.carouselPrev = function () {
    if (!carouselImages.length) return;
    carouselIdx = (carouselIdx - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  };

  window.carouselNext = function () {
    if (!carouselImages.length) return;
    carouselIdx = (carouselIdx + 1) % carouselImages.length;
    updateCarousel();
  };

  window.carouselGo = function (n) {
    if (n < 0 || n >= carouselImages.length) return;
    carouselIdx = n;
    updateCarousel();
  };

  /* ─── TOUCH SWIPE ─── */
  var _touchSwipeInit = false;
  var _touchStartX = 0;
  var _touchStartY = 0;

  function initTouchSwipe() {
    if (_touchSwipeInit) return;
    _touchSwipeInit = true;

    var track = document.getElementById('modalCarouselTrack');
    if (!track) return;

    track.addEventListener('touchstart', function (e) {
      var t = e.changedTouches[0];
      _touchStartX = t.screenX;
      _touchStartY = t.screenY;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      var t = e.changedTouches[0];
      var dx = t.screenX - _touchStartX;
      var dy = t.screenY - _touchStartY;

      // Seuil : 50px horizontal, pas plus de 40% de déplacement vertical
      if (Math.abs(dx) < 50) return;
      if (Math.abs(dy) > Math.abs(dx) * 0.4) return;

      if (dx < 0) {
        carouselNext();
      } else {
        carouselPrev();
      }
    }, { passive: true });
  }

  // Initialiser le swipe tactile une fois au chargement
  initTouchSwipe();

  /* ─── MODALE DÉTAILS ─── */
  function openDetailModal(id) {
    var b = biensListe.find(function (x) { return x.id === id; });
    if (!b) return;

    // Initialiser le carrousel
    carouselImages = b.imgs || [b.imgs[0]];
    renderCarousel();

    // Badge
    var badge = document.getElementById('modalDetailBadge');
    if (b.type === 'À louer') {
      badge.className = 'inline-block px-4 py-1.5 text-[0.7rem] tracking-wider uppercase font-semibold bg-[#33483B] text-white';
    } else {
      badge.className = 'inline-block px-4 py-1.5 text-[0.7rem] tracking-wider uppercase font-semibold bg-white text-[#1C1B19]';
    }
    badge.textContent = b.type;

    // Infos
    document.getElementById('modalDetailFlag').textContent = b.flag + ' ' + b.loc;
    document.getElementById('modalDetailTitre').textContent = b.titre;
    document.getElementById('modalDetailLoc').textContent = b.loc;
    document.getElementById('modalDetailPrix').textContent = b.prix + ' ' + b.unite;
    document.getElementById('modalDetailUnite').textContent = '';

    // Détails
    var detsEl = document.getElementById('modalDetailDets');
    detsEl.innerHTML = b.det.map(function (d) {
      return '<span class="detail-det-item"><i class="fa-solid ' + detIcon(d) + '"></i> ' + d + '</span>';
    }).join('');

    // Incrémenter le compteur de vues
    incrementViews(id);

    // WhatsApp
    var waLink = 'https://wa.me/?text=' + encodeURIComponent('Bonjour, je suis intéressé par le bien : ' + b.titre + ' (' + b.loc + ') - ' + b.prix + ' ' + b.unite);
    document.getElementById('modalDetailWhatsApp').href = waLink;

    // Afficher
    document.getElementById('detailModalOverlay').style.display = 'flex';
    document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
    document.body.style.overflow = 'hidden';
  }

  window.openDetailModal = openDetailModal;

  function incrementViews(id) {
    var b = biensListe.find(function (x) { return x.id === id; });
    if (!b) return;
    b.views = (b.views || 0) + 1;
    // Persister dans localStorage
    saveViewsToStorage();
    // Mettre à jour l'affichage du compteur sur la carte
    var card = document.querySelector('.bien-card-full[data-id="' + id + '"]');
    if (card) {
      var viewEl = card.querySelector('.bien-view-count');
      if (viewEl) viewEl.textContent = b.views;
    }
  }

  window.closeDetailModal = function () {
    document.getElementById('detailModalOverlay').style.display = 'none';
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  };

  /* ─── GRILLE ─── */
  var grid = document.getElementById('biensGridPage');
  if (!grid) return;

  var currentSort = 'date';

  function trier(liste, mode) {
    if (mode === 'popularite') {
      return liste.slice().sort(function (a, b) { return b.views - a.views; });
    }
    // Par défaut : tri par date (plus récents d'abord)
    return liste.slice().sort(function (a, b) { return b.dateAdded - a.dateAdded; });
  }

  function renderGrid(filtre) {
    var liste = filtre === 'tous' ? biensListe : biensListe.filter(function (b) { return b.pays === filtre; });
    liste = trier(liste, currentSort);
    grid.innerHTML = liste.map(cardHTML).join('');
    Array.from(grid.querySelectorAll('.bien-card-full')).forEach(function (card) {
      card.addEventListener('click', function () {
        openDetailModal(this.dataset.id);
      });
    });
  }

  renderGrid('tous');

  // Filtres pays
  var chips = document.querySelectorAll('.filtre-chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('actif'); });
      chip.classList.add('actif');
      renderGrid(chip.dataset.pays);
    });
  });

  // Filtres tri
  var sortChips = document.querySelectorAll('.sort-chip');
  sortChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      sortChips.forEach(function (c) { c.classList.remove('actif'); });
      chip.classList.add('actif');
      currentSort = chip.dataset.sort;
      // Récupérer le filtre pays actif
      var paysActif = document.querySelector('.filtre-chip.actif');
      renderGrid(paysActif ? paysActif.dataset.pays : 'tous');
    });
  });

  // Fermer la modale avec Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var overlay = document.getElementById('detailModalOverlay');
      if (overlay && overlay.style.display === 'flex') {
        closeDetailModal();
      }
    }
  });

  // Navigation carrousel au clavier (flèches gauche/droite)
  document.addEventListener('keydown', function (e) {
    var overlay = document.getElementById('detailModalOverlay');
    if (!overlay || overlay.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') { carouselPrev(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { carouselNext(); e.preventDefault(); }
  });

})();
