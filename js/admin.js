/* ===== ADMIN — Immo-Business International ===== */

(function () {
  'use strict';

  /* ── AUTH ── */
  var ADMIN_USER = 'admin',
    ADMIN_PASS = 'immo2026';

  function tryLogin() {
    var u = document.getElementById('loginUser').value.trim();
    var p = document.getElementById('loginPass').value;
    var err = document.getElementById('loginErr');
    if (u === ADMIN_USER && p === ADMIN_PASS) {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      renderStats();
      renderTable();
    } else {
      if (err) err.style.display = 'block';
      document.getElementById('loginPass').value = '';
    }
  }

  function logout() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
  }

  var loginPass = document.getElementById('loginPass');
  var loginUser = document.getElementById('loginUser');
  if (loginPass) loginPass.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryLogin(); });
  if (loginUser) loginUser.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryLogin(); });

  window.tryLogin = tryLogin;
  window.logout = logout;

  // Empty function referenced by onchange in the select
  /* ── SALUTATION SELON L'HEURE ── */
  function setGreeting() {
    var el = document.getElementById('adminGreeting');
    if (!el) return;
    var h = new Date().getHours();
    var msg;
    var icon;
    if (h >= 5 && h < 12) {
      msg = 'Bonjour';
      icon = 'fa-sun';
    } else if (h >= 12 && h < 17) {
      msg = 'Bon après-midi';
      icon = 'fa-cloud-sun';
    } else if (h >= 17 && h < 21) {
      msg = 'Bonsoir';
      icon = 'fa-moon';
    } else {
      msg = 'Bonne nuit';
      icon = 'fa-star';
    }
    el.innerHTML = '<i class="fa-solid ' + icon + ' text-terre mr-2.5"></i>' + msg + ', admin';
  }
  setGreeting();

  /* ── DONNÉES ── */
  var FLAGS = { cameroun: '🇨🇲', congo: '🇨🇬', gabon: '🇬🇦', rca: '🇨🇫', tchad: '🇹🇩' };
  var PAYS_LABELS = { cameroun: 'Cameroun', congo: 'Congo', gabon: 'Gabon', rca: 'RCA', tchad: 'Tchad' };

  var biens = [
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bastos, Yaoundé', titre: 'Villa moderne avec jardin', type: 'À vendre', prix: '85 000 000', unite: 'FCFA', det: ['5 ch.', '220 m²'], img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Kintélé, Brazzaville', titre: 'Terrain titré, viabilisé', type: 'À vendre', prix: '25 000 000', unite: 'FCFA', det: ['600 m²', 'Titré'], img: 'images/Congo/Bien_1/720286546_1658192892137939_5436816513672571744_n.jpeg' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Glass, Libreville', titre: 'Appartement meublé standing', type: 'À louer', prix: '350 000', unite: 'FCFA / mois', det: ['3 ch.', '110 m²'], img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Boy-Rabe, Bangui', titre: 'Maison familiale', type: 'À vendre', prix: '38 000 000', unite: 'FCFA', det: ['4 ch.', '180 m²'], img: 'images/Centrafrique/Bien1/723686760_1472986368179534_1342459871268264140_n.jpg' },
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bonapriso, Douala', titre: 'Duplex vue mer', type: 'À vendre', prix: '95 000 000', unite: 'FCFA', det: ['4 ch.', '260 m²'], img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Centre-ville, Brazzaville', titre: 'Local commercial', type: 'À louer', prix: '600 000', unite: 'FCFA / mois', det: ['120 m²', 'RDC'], img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Akanda, Libreville', titre: 'Villa en bord de mer', type: 'À vendre', prix: '120 000 000', unite: 'FCFA', det: ['6 ch.', '340 m²'], img: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Lakouanga, Bangui', titre: 'Terrain résidentiel', type: 'À vendre', prix: '12 000 000', unite: 'FCFA', det: ['400 m²'], img: 'images/Centrafrique/Bien_2/724764602_1472940564850781_4738221180956559236_n.jpg' },
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Mvan, Yaoundé', titre: 'Studio meublé', type: 'À louer', prix: '95 000', unite: 'FCFA / mois', det: ['1 ch.', '35 m²'], img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Pointe-Noire', titre: 'Villa avec piscine', type: 'À vendre', prix: '110 000 000', unite: 'FCFA', det: ['5 ch.', '300 m²'], img: 'images/Congo/Bien_2/720435694_1932618927391413_3486246096623244127_n.jpeg' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Owendo, Libreville', titre: 'Entrepôt industriel', type: 'À louer', prix: '1 200 000', unite: 'FCFA / mois', det: ['800 m²'], img: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Centre-ville, Bangui', titre: 'Bureau standing', type: 'À louer', prix: '450 000', unite: 'FCFA / mois', det: ['90 m²'], img: 'images/Centrafrique/Bien_3/684922424_1431399079004930_7827493068638778354_n.jpg' },
    { id: uid(), pays: 'tchad', flag: '🇹🇩', loc: 'Centre-ville, N\'Djaména', titre: 'Appartement meublé', type: 'À louer', prix: '280 000', unite: 'FCFA / mois', det: ['2 ch.', '70 m²'], img: 'images/724666206_1472985994846238_7251162334942360209_n.jpg' },
    { id: uid(), pays: 'tchad', flag: '🇹🇩', loc: 'Chagoua, N\'Djaména', titre: 'Villa avec terrain', type: 'À vendre', prix: '45 000 000', unite: 'FCFA', det: ['3 ch.', '150 m²', 'Terrain 400 m²'], img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&q=80' }
  ];

  function uid() { return 'b' + Math.random().toString(36).slice(2, 9); }

  /* ── TRI ── */
  var sortCol = '',
    sortAsc = true;

  window.sortBy = function (col) {
    if (sortCol === col) { sortAsc = !sortAsc; } else { sortCol = col; sortAsc = true; }
    renderTable();
  };

  function filtered() {
    var q = document.getElementById('searchInput').value.toLowerCase();
    var type = document.getElementById('filtreType').value;
    var pays = document.getElementById('filtrePays').value;
    return biens.filter(function (b) {
      var matchQ = !q || b.titre.toLowerCase().includes(q) || b.loc.toLowerCase().includes(q);
      var matchType = type === 'tous' || b.type === type;
      var matchPays = pays === 'tous' || b.pays === pays;
      return matchQ && matchType && matchPays;
    });
  }

  window.renderTable = renderTable;
  window.renderStats = renderStats;
  window.showToast = showToast;

  function renderStats() {
    var el = function (id) { return document.getElementById(id); };
    if (el('statTotal')) el('statTotal').textContent = biens.length;
    if (el('statVendre')) el('statVendre').textContent = biens.filter(function (b) { return b.type === 'À vendre'; }).length;
    if (el('statLouer')) el('statLouer').textContent = biens.filter(function (b) { return b.type === 'À louer'; }).length;
  }

  function renderTable() {
    var list = filtered();
    if (sortCol) {
      list = list.slice().sort(function (a, b) {
        var av = a[sortCol] || '',
          bv = b[sortCol] || '';
        return sortAsc ? av.localeCompare(bv, undefined, { numeric: true }) : bv.localeCompare(av, undefined, { numeric: true });
      });
    }
    var tbody = document.getElementById('tableBody');
    if (!list.length) {
      tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><i class="fa-regular fa-building"></i><p>Aucun bien ne correspond à cette recherche.</p></div></td></tr>';
      return;
    }
    tbody.innerHTML = list.map(function (b) {
      var badgeClass = b.type === 'À louer' ? 'badge-type badge-louer' : 'badge-type badge-vendre';
      return '<tr>' +
        '<td><img class="td-thumb" src="' + b.img + '" alt="" onerror="this.style.opacity=0.3"></td>' +
        '<td class="td-titre">' + escHtml(b.titre) + '</td>' +
        '<td><div class="td-flag">' + b.flag + ' ' + escHtml(b.loc) + '</div></td>' +
        '<td><span class="' + badgeClass + '">' + b.type + '</span></td>' +
        '<td>' + PAYS_LABELS[b.pays] + '</td>' +
        '<td style="white-space:nowrap;">' + escHtml(b.prix) + ' <span style="font-size:0.76rem;opacity:.7;">' + escHtml(b.unite) + '</span></td>' +
        '<td><div class="td-actions">' +
        '<button class="btn-ico" title="Modifier" onclick="editBien(\'' + b.id + '\')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="btn-ico danger" title="Supprimer" onclick="askDelete(\'' + b.id + '\')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td>' +
        '</tr>';
    }).join('');
  }

  /* ── MODAL ── */
  var editingId = null,
    dets = [];

  window.openModal = function (b) {
    // Nettoyer les erreurs précédentes
    document.querySelectorAll('.field-err').forEach(function (el) {
      el.classList.remove('visible');
      el.textContent = '';
    });
    document.querySelectorAll('.input-error').forEach(function (el) {
      el.classList.remove('input-error');
    });

    editingId = b ? b.id : null;
    document.getElementById('modalTitle').textContent = b ? 'Modifier le bien' : 'Ajouter un bien';
    document.getElementById('fTitre').value = b ? b.titre : '';
    document.getElementById('fPays').value = b ? b.pays : 'cameroun';
    document.getElementById('fLoc').value = b ? b.loc : '';
    document.getElementById('fType').value = b ? b.type : 'À vendre';
    document.getElementById('fPrix').value = b ? b.prix : '';
    document.getElementById('fUnite').value = b ? b.unite : 'FCFA';
    document.getElementById('fImg').value = b ? b.img : '';
    renderDets(b ? b.det : []);
    previewImg();
    document.getElementById('modalBg').classList.add('open');
  };

  window.closeModal = function () {
    document.getElementById('modalBg').classList.remove('open');
  };

  function renderDets(list) {
    dets = list ? list.slice() : [];
    redrawDets();
  }

  function redrawDets() {
    var c = document.getElementById('detContainer');
    c.innerHTML = dets.map(function (d, i) {
      return '<div class="det-row"><input type="text" value="' + escHtml(d) + '" placeholder="ex: 3 ch. ou 120 m²" oninput="dets[' + i + ']=this.value"><button class="btn-det-rm" type="button" onclick="removeDet(' + i + ')"><i class="fa-solid fa-xmark"></i></button></div>';
    }).join('');
  }

  window.addDet = function () {
    dets.push('');
    redrawDets();
    var inputs = document.getElementById('detContainer').querySelectorAll('input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  };

  window.removeDet = function (i) {
    dets.splice(i, 1);
    redrawDets();
  };

  window.previewImg = function () {
    var url = document.getElementById('fImg').value.trim();
    var prev = document.getElementById('imgPreview');
    var ph = document.getElementById('imgPlaceholder');
    if (url) { prev.src = url; prev.style.display = 'block'; ph.style.display = 'none'; } else { prev.style.display = 'none'; ph.style.display = 'flex'; }
  };

  /* ── VALIDATION FORMULAIRE ── */
  var adminFields = ['fTitre', 'fLoc', 'fPrix', 'fImg'];

  // Nettoyage d'erreur en temps réel
  adminFields.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () {
      this.classList.remove('input-error');
      var errEl = document.getElementById('err-' + this.id);
      if (errEl) {
        errEl.classList.remove('visible');
        errEl.textContent = '';
      }
    });
  });

  window.saveBien = function () {
    // Nettoyer les erreurs précédentes
    document.querySelectorAll('.field-err').forEach(function (el) {
      el.classList.remove('visible');
      el.textContent = '';
    });
    document.querySelectorAll('.input-error').forEach(function (el) {
      el.classList.remove('input-error');
    });

    var titre = document.getElementById('fTitre').value.trim();
    var loc = document.getElementById('fLoc').value.trim();
    var prix = document.getElementById('fPrix').value.trim();
    var imgUrl = document.getElementById('fImg').value.trim();

    var fields = [
      { id: 'fTitre', msg: 'Le titre du bien est requis.', validate: function (v) { return v.trim().length > 0; } },
      { id: 'fLoc', msg: 'La localisation est requise.', validate: function (v) { return v.trim().length > 0; } },
      { id: 'fPrix', msg: 'Le prix est requis.', validate: function (v) { return v.trim().length > 0; } },
      { id: 'fImg', msg: 'L\'URL de l\'image semble invalide.', validate: function (v) {
        if (!v.trim()) return true; // optionnel
        return /^https?:\/\/.+\..+/i.test(v.trim());
      } },
    ];

    var hasError = false;

    fields.forEach(function (f) {
      var el = document.getElementById(f.id);
      var errEl = document.getElementById('err-' + f.id);
      if (!el || !errEl) return;

      var val = el.value || '';
      if (!f.validate(val)) {
        errEl.textContent = f.msg;
        errEl.classList.add('visible');
        el.classList.add('input-error');
        hasError = true;
      }
    });

    if (hasError) return;

    var pays = document.getElementById('fPays').value;
    var cleanDets = dets.filter(function (d) { return d.trim(); });
    var bien = {
      id: editingId || uid(),
      pays: pays,
      flag: FLAGS[pays],
      loc: loc,
      titre: titre,
      type: document.getElementById('fType').value,
      prix: prix,
      unite: document.getElementById('fUnite').value,
      det: cleanDets,
      img: imgUrl || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80'
    };
    if (editingId) {
      var idx = biens.findIndex(function (b) { return b.id === editingId; });
      if (idx > -1) biens[idx] = bien;
      showToast('Bien mis à jour.', 'succes');
    } else {
      biens.unshift(bien);
      showToast('Bien ajouté au portefeuille.', 'succes');
    }
    closeModal();
    renderStats();
    renderTable();
  };

  window.editBien = function (id) {
    var b = biens.find(function (x) { return x.id === id; });
    if (b) openModal(b);
  };

  /* ── SUPPRESSION ── */
  var deleteId = null;

  window.askDelete = function (id) { deleteId = id; document.getElementById('confirmBg').classList.add('open'); };

  function closeConfirm() { document.getElementById('confirmBg').classList.remove('open'); deleteId = null; }
  window.closeConfirm = closeConfirm;

  window.confirmDelete = function () {
    if (!deleteId) return;
    biens = biens.filter(function (b) { return b.id !== deleteId; });
    closeConfirm();
    renderStats();
    renderTable();
    showToast('Bien supprimé.', 'erreur');
  };

  /* ── TOAST ── */
  var toastTimer;

  function showToast(msg, type) {
    var t = document.getElementById('toast');
    t.innerHTML = '<i class="fa-solid ' + (type === 'succes' ? 'fa-circle-check' : type === 'erreur' ? 'fa-circle-xmark' : 'fa-circle-info') + '"></i> ' + msg;
    t.className = 'toast ' + (type || '');
    t.classList.add('show');

    // Effet de transition sur l'en-tête admin
    var header = document.querySelector('.header-wrap-admin');
    if (header && type) {
      header.classList.add('toast-' + type);
    }

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
      if (header && type) {
        header.classList.remove('toast-' + type);
      }
    }, 3000);
  }

  /* fermer modales en cliquant dehors */
  var modalBg = document.getElementById('modalBg');
  var confirmBg = document.getElementById('confirmBg');
  if (modalBg) modalBg.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
  if (confirmBg) confirmBg.addEventListener('click', function (e) { if (e.target === this) closeConfirm(); });

})();
