(function () {
    'use strict';

    /* ── 1. Caricamento Dati ── */
    var dataEl = document.getElementById('unit-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); }
    catch (e) { console.error('Errore JSON:', e); return; }

    /* ── 2. Colore Accento e Titolo ── */
    if (data.accent) {
        document.documentElement.style.setProperty('--accent-color', data.accent);
    }
    document.title = 'SOULSPECTRE | ' + (data.name || 'Unit');

    if (data.bgImage) {
        var bg = document.getElementById('bg-image');
        if (bg) bg.style.backgroundImage = "url('" + data.bgImage + "')";
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    /* ── 3. Iniezione Menu e Sidebar (Integrata) ── */
    var navHtml = 
        '<nav class="global-nav">' +
            '<button class="menu-toggle" id="menuToggle">☰</button>' +
            '<div class="nav-logo-container"><img src="../../img/soul_spectre_logo.png"></div>' +
        '</nav>' +
        '<div class="sidebar-overlay" id="sidebarOverlay"></div>' +
        '<aside class="sidebar" id="sidebar">' +
            '<button class="close-sidebar" id="closeSidebar">&times;</button>' +
            '<a href="../../index.html" class="direct-link">Dashboard</a>' +
            '<button class="accordion-btn">Factions <span class="chevron">▼</span></button>' +
            '<div class="accordion-content">' +
                '<a href="../../factions/valkyrion.html" class="sub-link">Valkyrion Empire</a>' +
                '<a href="#" class="sub-link locked">The Forgotten</a>' +
            '</div>' +
            '<a href="https://civitai.com" class="direct-link" target="_blank">Civitai</a>' +
        '</aside>';
    
    var navContainer = document.createElement('div');
    navContainer.innerHTML = navHtml;
    document.body.insertBefore(navContainer, document.body.firstChild);

    /* Logica Apertura Menu */
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    
    document.getElementById('menuToggle').onclick = toggleMenu;
    document.getElementById('closeSidebar').onclick = toggleMenu;
    overlay.onclick = toggleMenu;

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    /* ── 4. Rendering Contenuto ── */
    var main = document.createElement('main');

    // Breadcrumbs
    if (data.breadcrumbs) {
        var crumbs = data.breadcrumbs.map(function(bc, i) {
            return (i === data.breadcrumbs.length - 1) ? '<span>'+esc(bc.label)+'</span>' : '<a href="'+esc(bc.href)+'">'+esc(bc.label)+'</a>';
        }).join(' &rsaquo; ');
        var bcDiv = document.createElement('div');
        bcDiv.className = 'breadcrumbs';
        bcDiv.innerHTML = crumbs;
        document.body.appendChild(bcDiv);
    }

    // Header
    var header = document.createElement('header');
    header.innerHTML = '<h1>' + esc(data.name) + '</h1>' + (data.subtitle ? '<div class="classification">' + esc(data.subtitle) + '</div>' : '');
    document.body.appendChild(header);

    // Hero Card (Bio + Stats)
    var bioHtml = '<div class="hero-bio"><h2>Biography</h2>' + (data.bio.paragraphs || []).map(function(p){ return '<p>'+p+'</p>'; }).join('') + '</div>';
    var statsHtml = '';
    var statKeys = [['tier','Tier','tier'],['hp','Hit Points','hp'],['atk','Attack','atk'],['ini','Initiative','']];
    statKeys.forEach(function(k) {
        if (data.stats[k[0]]) statsHtml += '<div class="stat-item"><span class="stat-label">'+k[1]+'</span><span class="stat-value '+k[2]+'">'+data.stats[k[0]]+'</span></div>';
    });

    var combatImgs = Array.isArray(data.combat) ? data.combat : [data.combat];
    var combatHtml = combatImgs.map(function(src, i){ return '<img src="'+esc(src)+'" '+(i>0?'class="combat-anim"':'')+'>'; }).join('');

    main.innerHTML = 
        '<div class="hero-card">' +
            '<div class="combat-container">' + combatHtml + '</div>' +
            '<div class="hero-content">' + bioHtml + '<div class="stats-row">' + statsHtml + '</div></div>' +
        '</div>';

    document.body.appendChild(main);

    // Lightbox finale
    var lb = document.createElement('div');
    lb.className = 'lightbox-overlay'; lb.id = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" id="lbClose">&times;</button><img src="" id="lbImg">';
    document.body.appendChild(lb);
})();
