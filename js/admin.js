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
  window.updateFlag = function () {};

  /* ── DONNÉES ── */
  var FLAGS = { cameroun: '🇨🇲', congo: '🇨🇬', gabon: '🇬🇦', rca: '🇨🇫' };
  var PAYS_LABELS = { cameroun: 'Cameroun', congo: 'Congo', gabon: 'Gabon', rca: 'RCA' };

  var biens = [
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bastos, Yaoundé', titre: 'Villa moderne avec jardin', type: 'À vendre', prix: '85 000 000', unite: 'FCFA', det: ['5 ch.', '220 m²'], img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Kintélé, Brazzaville', titre: 'Terrain titré, viabilisé', type: 'À vendre', prix: '25 000 000', unite: 'FCFA', det: ['600 m²', 'Titré'], img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Glass, Libreville', titre: 'Appartement meublé standing', type: 'À louer', prix: '350 000', unite: 'FCFA / mois', det: ['3 ch.', '110 m²'], img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Boy-Rabe, Bangui', titre: 'Maison familiale', type: 'À vendre', prix: '38 000 000', unite: 'FCFA', det: ['4 ch.', '180 m²'], img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&q=80' },
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Bonapriso, Douala', titre: 'Duplex vue mer', type: 'À vendre', prix: '95 000 000', unite: 'FCFA', det: ['4 ch.', '260 m²'], img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Centre-ville, Brazzaville', titre: 'Local commercial', type: 'À louer', prix: '600 000', unite: 'FCFA / mois', det: ['120 m²', 'RDC'], img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Akanda, Libreville', titre: 'Villa en bord de mer', type: 'À vendre', prix: '120 000 000', unite: 'FCFA', det: ['6 ch.', '340 m²'], img: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Lakouanga, Bangui', titre: 'Terrain résidentiel', type: 'À vendre', prix: '12 000 000', unite: 'FCFA', det: ['400 m²'], img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80' },
    { id: uid(), pays: 'cameroun', flag: '🇨🇲', loc: 'Mvan, Yaoundé', titre: 'Studio meublé', type: 'À louer', prix: '95 000', unite: 'FCFA / mois', det: ['1 ch.', '35 m²'], img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80' },
    { id: uid(), pays: 'congo', flag: '🇨🇬', loc: 'Pointe-Noire', titre: 'Villa avec piscine', type: 'À vendre', prix: '110 000 000', unite: 'FCFA', det: ['5 ch.', '300 m²'], img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80' },
    { id: uid(), pays: 'gabon', flag: '🇬🇦', loc: 'Owendo, Libreville', titre: 'Entrepôt industriel', type: 'À louer', prix: '1 200 000', unite: 'FCFA / mois', det: ['800 m²'], img: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=500&q=80' },
    { id: uid(), pays: 'rca', flag: '🇨🇫', loc: 'Centre-ville, Bangui', titre: 'Bureau standing', type: 'À louer', prix: '450 000', unite: 'FCFA / mois', det: ['90 m²'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80' }
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

  window.saveBien = function () {
    var titre = document.getElementById('fTitre').value.trim();
    var loc = document.getElementById('fLoc').value.trim();
    var prix = document.getElementById('fPrix').value.trim();
    if (!titre || !loc || !prix) { showToast('Titre, localisation et prix sont requis.', 'erreur'); return; }
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
      img: document.getElementById('fImg').value.trim() || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80'
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
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3000);
  }

  /* fermer modales en cliquant dehors */
  var modalBg = document.getElementById('modalBg');
  var confirmBg = document.getElementById('confirmBg');
  if (modalBg) modalBg.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
  if (confirmBg) confirmBg.addEventListener('click', function (e) { if (e.target === this) closeConfirm(); });

})();
