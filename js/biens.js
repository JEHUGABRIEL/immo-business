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
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bastos, Yaoundé', titre: 'Villa moderne avec jardin', type: 'À vendre', prix: '85 000 000', unite: 'FCFA', det: ['5 ch.', '220 m²'], imgs: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'], dateAdded: daysAgo(3), populaire: true, desc: 'Superbe villa de standing située dans le quartier résidentiel de Bastos à Yaoundé. Elle dispose d\'un vaste jardin paysager, d\'une terrasse aménagée et de finitions haut de gamme. Idéale pour une famille recherchant calme et confort en plein coeur de la capitale camerounaise.' },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Kintélé, Brazzaville', titre: 'Terrain titré, viabilisé', type: 'À vendre', prix: '25 000 000', unite: 'FCFA', det: ['600 m²', 'Titré'], imgs: ['images/Congo/Bien_1/720286546_1658192892137939_5436816513672571744_n.jpeg', 'images/Congo/Bien_1/723747076_1350506283604982_3519700007137689530_n.jpeg', 'images/Congo/Bien_1/722769703_4465343477054798_7087451436475792484_n.jpeg'], dateAdded: daysAgo(45), populaire: true, desc: 'Terrain titré et viabilisé de 600 m² dans le secteur en plein développement de Kintélé, à Brazzaville. Borné, avec accès aux réseaux d\'eau et d\'électricité. Parfait pour y construire une villa ou un immeuble locatif.' },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Glass, Libreville', titre: 'Appartement meublé standing', type: 'À louer', prix: '350 000', unite: 'FCFA / mois', det: ['3 ch.', '110 m²'], imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80'], dateAdded: daysAgo(7), populaire: true, desc: 'Bel appartement meublé de standing au coeur du quartier Glass à Libreville. Entièrement équipé, il offre trois chambres spacieuses, un salon lumineux et une vue dégagée. Idéal pour un expatrié ou un cadre en mission au Gabon.' },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Boy-Rabe, Bangui', titre: 'Maison familiale', type: 'À vendre', prix: '38 000 000', unite: 'FCFA', det: ['4 ch.', '180 m²'], imgs: ['images/Centrafrique/Bien1/723686760_1472986368179534_1342459871268264140_n.jpg', 'images/Centrafrique/Bien1/724472476_1472986501512854_5169584994590378194_n.jpg', 'images/Centrafrique/Bien1/724189382_1472986431512861_5939535238041573334_n.jpg', 'images/Centrafrique/Bien1/724368842_1472986591512845_5614923701291725638_n.jpg', 'images/Centrafrique/Bien1/723173128_1472986281512876_8726237860519134227_n.jpg'], dateAdded: daysAgo(60), desc: 'Grande maison familiale de 180 m² située dans le quartier calme de Boy-Rabe à Bangui. Quatre chambres, un grand salon-salle à manger, une cuisine équipée et un terrain attenant. Idéale pour une famille sereine.' },
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bonapriso, Douala', titre: 'Duplex vue mer', type: 'À vendre', prix: '95 000 000', unite: 'FCFA', det: ['4 ch.', '260 m²'], imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'], dateAdded: daysAgo(1), desc: 'Magnifique duplex avec vue imprenable sur la mer dans le prestigieux quartier de Bonapriso à Douala. 260 m² habitables, 4 chambres dont une suite parentale, grande terrasse panoramique et prestations de luxe. Une propriété d\'exception.' },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Centre-ville, Brazzaville', titre: 'Local commercial', type: 'À louer', prix: '600 000', unite: 'FCFA / mois', det: ['120 m²', 'RDC'], imgs: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80'], dateAdded: daysAgo(90), desc: 'Local commercial de 120 m² en plein centre-ville de Brazzaville, idéalement situé sur un axe à forte circulation. Vitrine généreuse, ouvert sur rue. Convient pour une boutique, une agence, un restaurant ou des bureaux.' },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Akanda, Libreville', titre: 'Villa en bord de mer', type: 'À vendre', prix: '120 000 000', unite: 'FCFA', det: ['6 ch.', '340 m²'], imgs: ['https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=80', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'], dateAdded: daysAgo(14), desc: 'Ravissante villa les pieds dans l\'eau dans le secteur d\'Akanda, à quelques minutes de Libreville. 6 chambres, 340 m², grande piscine et accès direct à la plage. Le cadre idéal pour une résidence principale ou une maison de vacances de prestige.' },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Lakouanga, Bangui', titre: 'Terrain résidentiel', type: 'À vendre', prix: '12 000 000', unite: 'FCFA', det: ['400 m²'], imgs: ['images/Centrafrique/Bien_2/724764602_1472940564850781_4738221180956559236_n.jpg', 'images/Centrafrique/Bien_2/724230736_1472940718184099_8985837031657176854_n.jpg', 'images/Centrafrique/Bien_2/724534673_1472940958184075_7613891185839810397_n.jpg', 'images/Centrafrique/Bien_2/724300190_1472940888184082_6310131814158889637_n.jpg'], dateAdded: daysAgo(120), desc: 'Terrain résidentiel de 400 m² dans le quartier prisé de Lakouanga à Bangui. Zone calme et résidentielle, proche des commodités. Idéal pour construire votre maison ou un petit immeuble locatif. Titre foncier en règle.' },
    { id: _uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Mvan, Yaoundé', titre: 'Studio meublé', type: 'À louer', prix: '95 000', unite: 'FCFA / mois', det: ['1 ch.', '35 m²'], imgs: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'], dateAdded: daysAgo(2), desc: 'Studio meublé fonctionnel et bien situé dans le quartier Mvan à Yaoundé. Proche des transports en commun et des commerces. Parfait pour un étudiant ou un jeune actif. Entièrement équipé, prêt à habiter.' },
    { id: _uid(), pays: 'congo', flag: '🇨🇬', loc: 'Pointe-Noire', titre: 'Villa avec piscine', type: 'À vendre', prix: '110 000 000', unite: 'FCFA', det: ['5 ch.', '300 m²'], imgs: ['images/Congo/Bien_2/720435694_1932618927391413_3486246096623244127_n.jpeg'], dateAdded: daysAgo(30), desc: 'Superbe villa de 300 m² avec piscine située à Pointe-Noire, la capitale économique du Congo. 5 chambres, grand salon, cuisine moderne et jardin tropical. Une résidence de standing pour les amoureux de la côte congolaise.' },
    { id: _uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Owendo, Libreville', titre: 'Entrepôt industriel', type: 'À louer', prix: '1 200 000', unite: 'FCFA / mois', det: ['800 m²'], imgs: ['https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80'], dateAdded: daysAgo(180), desc: 'Grand entrepôt industriel de 800 m² dans la zone d\'Owendo, au sud de Libreville. Proche du port et des voies principales. Hauteur sous plafond généreuse, quai de chargement et bureau intégré. Idéal pour la logistique et le stockage.' },
    { id: _uid(), pays: 'rca', flag: '🇨🇫', loc: 'Centre-ville, Bangui', titre: 'Bureau standing', type: 'À louer', prix: '450 000', unite: 'FCFA / mois', det: ['90 m²'], imgs: ['images/Centrafrique/Bien_3/684922424_1431399079004930_7827493068638778354_n.jpg', 'images/Centrafrique/Bien_3/682053813_1431399322338239_4624531273153403132_n.jpg', 'images/Centrafrique/Bien_3/685621827_1431399275671577_1928622024898026131_n.jpg', 'images/Centrafrique/Bien_3/683690625_1431399215671583_2905136743984524500_n.jpg'], dateAdded: daysAgo(20), desc: 'Bureau de standing de 90 m² en plein centre-ville de Bangui. Climatisation, groupe électrogène, connexion internet haut débit et salle de réunion. Idéal pour une ONG, une entreprise ou une représentation diplomatique.' },
    { id: _uid(), pays: 'tchad', flag: '🇹🇩', loc: 'Centre-ville, N\'Djaména', titre: 'Appartement meublé', type: 'À louer', prix: '280 000', unite: 'FCFA / mois', det: ['2 ch.', '70 m²'], imgs: ['images/724666206_1472985994846238_7251162334942360209_n.jpg', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'], dateAdded: daysAgo(5), desc: 'Bel appartement meublé de 70 m² en plein centre-ville de N\'Djaména. Deux chambres spacieuses, salon lumineux, cuisine équipée. Idéal pour un cadre ou un expatrié. Groupe électrogène et climatisation inclus.' },
    { id: _uid(), pays: 'tchad', flag: '🇹🇩', loc: 'Chagoua, N\'Djaména', titre: 'Villa avec terrain', type: 'À vendre', prix: '45 000 000', unite: 'FCFA', det: ['3 ch.', '150 m²', 'Terrain 400 m²'], imgs: ['https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'], dateAdded: daysAgo(15), desc: 'Villa de 150 m² sur un terrain de 400 m² dans le quartier résidentiel de Chagoua à N\'Djaména. Trois chambres, grand salon, cuisine moderne, jardin et garage. Proche des commodités et des écoles.' }
  ];

  var PAYS_LABELS = { cameroun: 'Cameroun', congo: 'Congo', gabon: 'Gabon', rca: 'RCA', tchad: 'Tchad' };

  /* ── ANIMATION DE COMPTEUR ── */
  function animateCounter(el, target, duration) {
    if (!el) return;
    var start = null;
    var initial = parseInt(el.textContent, 10) || 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // ease-out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      var current = Math.round(initial + (target - initial) * eased);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  /* ── STATS HERO DYNAMIQUES ── */
  function updateHeroStats() {
    var el = function (id) { return document.getElementById(id); };
    var statBiens = el('statBiens');
    var statPays = el('statPays');
    var statVilles = el('statVilles');
    if (!statBiens) return;

    var nbrBiens = biensListe.length;

    var paysSet = {};
    var villesSet = {};
    biensListe.forEach(function (b) {
      paysSet[b.pays] = true;
      var parts = b.loc.split(',');
      var ville = parts.length > 1 ? parts[parts.length - 1].trim() : b.loc.trim();
      villesSet[ville] = true;
    });
    var nbrPays = Object.keys(paysSet).length;
    var nbrVilles = Object.keys(villesSet).length;

    // Lancer les animations (décalées pour plus de fluidité)
    animateCounter(statBiens, nbrBiens, 900);
    setTimeout(function () { animateCounter(statPays, nbrPays, 800); }, 200);
    setTimeout(function () { animateCounter(statVilles, nbrVilles, 800); }, 400);
  }

  updateHeroStats();

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
    return diff < 30 * 24 * 60 * 60 * 1000;
  }

  function isPopulaire(id) {
    var item = biensListe.find(function (x) { return x.id === id; });
    return item && item.populaire === true;
  }

  function cardHTML(b) {
    var badgeClass = b.type === 'À louer' ? 'bg-[#33483B] text-white' : 'bg-white text-[#1C1B19]';
    var nouveau = isRecent(b.dateAdded);
    var waMsg = encodeURIComponent('Bonjour, je suis int\u00e9ress\u00e9 par : ' + b.titre + ' (' + b.loc + ')');
    return '<div class="bien-card-full cursor-pointer" data-pays="' + b.pays + '" data-id="' + b.id + '">' +
      '<div class="bien-card-img relative overflow-hidden h-60 bg-[#42413D]">' +
      '<img src="' + b.imgs[0] + '" alt="' + b.titre + '" class="w-full h-full object-cover">' +
      '<div class="absolute top-4 left-4 ' + badgeClass + ' px-3 py-1 text-[0.7rem] tracking-wider uppercase font-semibold">' +
      b.type + '</div>' +
      (nouveau ? '<div class="badge-nouveau absolute top-4 right-4 bg-terre text-sable px-2.5 py-1 text-[0.65rem] tracking-wider uppercase font-bold rounded-sm shadow-md flex items-center gap-1"><i class="fa-solid fa-sparkles" style="font-size:0.55rem"></i> Nouveau</div>' : '') +
      (isPopulaire(b.id) ? '<div class="badge-populaire absolute top-4 left-4 translate-y-[36px] bg-[#D4A017] text-white px-2.5 py-1 text-[0.65rem] tracking-wider uppercase font-bold rounded-sm shadow-md flex items-center gap-1.5"><i class="fa-solid fa-fire" style="font-size:0.55rem"></i> Populaire</div>' : '') +
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
        '<button onclick="event.stopPropagation(); window.open(\'https://wa.me/?text=' + waMsg + '\', \'_blank\')" class="btn-action flex-1 bg-[#25D366] text-white py-2.5 text-[0.82rem] font-semibold rounded cursor-pointer border-none hover:bg-[#1ebe5a] flex items-center justify-center gap-1.5">' +
          '<i class="fa-brands fa-whatsapp"></i> Visite' +
        '</button>' +
      '</div>' +
      '</div></div>';
  }

  /* -- CARROUSEL -- */
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

  /* -- TOUCH SWIPE -- */
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

      if (Math.abs(dx) < 50) return;
      if (Math.abs(dy) > Math.abs(dx) * 0.4) return;

      if (dx < 0) {
        carouselNext();
      } else {
        carouselPrev();
      }
    }, { passive: true });
  }

  initTouchSwipe();

  /* -- MODALE DÉTAILS -- */
  function openDetailModal(id) {
    var b = biensListe.find(function (x) { return x.id === id; });
    if (!b) return;

    carouselImages = b.imgs || [b.imgs[0]];
    renderCarousel();

    var badge = document.getElementById('modalDetailBadge');
    if (b.type === 'À louer') {
      badge.className = 'inline-block px-4 py-1.5 text-[0.7rem] tracking-wider uppercase font-semibold bg-[#33483B] text-white';
    } else {
      badge.className = 'inline-block px-4 py-1.5 text-[0.7rem] tracking-wider uppercase font-semibold bg-white text-[#1C1B19]';
    }
    badge.textContent = b.type;

    document.getElementById('modalDetailFlag').textContent = b.flag + ' ' + b.loc;
    document.getElementById('modalDetailTitre').textContent = b.titre;
    document.getElementById('modalDetailLoc').textContent = b.loc;
    document.getElementById('modalDetailPrix').textContent = b.prix + ' ' + b.unite;
    document.getElementById('modalDetailUnite').textContent = '';

    var detsEl = document.getElementById('modalDetailDets');
    detsEl.innerHTML = b.det.map(function (d) {
      return '<span class="detail-det-item"><i class="fa-solid ' + detIcon(d) + '"></i> ' + d + '</span>';
    }).join('');

    var descEl = document.getElementById('modalDetailDesc');
    if (descEl) {
      descEl.textContent = b.desc || '';
    }

    var waLink = 'https://wa.me/?text=' + encodeURIComponent('Bonjour, je suis int\u00e9ress\u00e9 par le bien : ' + b.titre + ' (' + b.loc + ') - ' + b.prix + ' ' + b.unite);
    document.getElementById('modalDetailWhatsApp').href = waLink;

    document.getElementById('detailModalOverlay').style.display = 'flex';
    document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
    document.body.style.overflow = 'hidden';
  }

  window.openDetailModal = openDetailModal;
  window.closeDetailModal = function () {
    document.getElementById('detailModalOverlay').style.display = 'none';
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  };

  /* -- GRILLE -- */
  var grid = document.getElementById('biensGridPage');
  if (!grid) return;

  function trier(liste) {
    return liste.slice().sort(function (a, b) { return b.dateAdded - a.dateAdded; });
  }

  function matchSearch(b, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return b.titre.toLowerCase().indexOf(q) !== -1 ||
      b.loc.toLowerCase().indexOf(q) !== -1 ||
      (b.desc || '').toLowerCase().indexOf(q) !== -1 ||
      PAYS_LABELS[b.pays].toLowerCase().indexOf(q) !== -1 ||
      b.prix.toLowerCase().indexOf(q) !== -1 ||
      b.type.toLowerCase().indexOf(q) !== -1;
  }

  function renderGrid(filtre, query) {
    query = (query || '').trim();
    var liste = biensListe;
    if (filtre !== 'tous') {
      liste = liste.filter(function (b) { return b.pays === filtre; });
    }
    if (query) {
      liste = liste.filter(function (b) { return matchSearch(b, query); });
    }
    liste = trier(liste);
    grid.innerHTML = liste.map(cardHTML).join('');
    Array.from(grid.querySelectorAll('.bien-card-full')).forEach(function (card) {
      card.addEventListener('click', function () {
        openDetailModal(this.dataset.id);
      });
    });
  }

  var currentFiltre = 'tous';
  var searchQuery = '';

  function refilter() {
    renderGrid(currentFiltre, searchQuery);
  }

  renderGrid('tous', '');

  var chips = document.querySelectorAll('.filtre-chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('actif'); });
      chip.classList.add('actif');
      currentFiltre = chip.dataset.pays;
      refilter();
    });
  });

  var sortChips = document.querySelectorAll('.sort-chip');
  sortChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      sortChips.forEach(function (c) { c.classList.remove('actif'); });
      chip.classList.add('actif');
      refilter();
    });
  });

  /* ── RECHERCHE EN TEMPS RÉEL ── */
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value;
      if (searchClear) {
        searchClear.style.display = searchQuery ? 'block' : 'none';
      }
      refilter();
    });
    if (searchClear) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        refilter();
        searchInput.focus();
      });
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var overlay = document.getElementById('detailModalOverlay');
      if (overlay && overlay.style.display === 'flex') {
        closeDetailModal();
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    var overlay = document.getElementById('detailModalOverlay');
    if (!overlay || overlay.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') { carouselPrev(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { carouselNext(); e.preventDefault(); }
  });

})();
