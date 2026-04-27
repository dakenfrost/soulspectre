(function () {
    'use strict';

    var dataEl = document.getElementById('unit-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); }
    catch (e) { console.error('Errore nel database JSON:', e); return; }

    /* ── 1. Accent & Theme (Applica il colore del Tier) ── */
    if (data.accent) {
        var hex = data.accent.replace('#', '');
        var r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
        document.documentElement.style.setProperty('--accent-color', data.accent);
        document.documentElement.style.setProperty('--accent-glow', 'rgba(' + r + ',' + g + ',' + b + ', 0.3)');
    }
    document.title = 'SOULSPECTRE | ' + (data.name || 'Unit');

    if (data.bgImage) {
        var bg = document.getElementById('bg-image');
        if (bg) bg.style.backgroundImage = "url('" + data.bgImage + "')";
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    /* ── 2. Global Navigation ( prende lo script navigation.js e cre la sidebar ) ── */
    var _selfSrc = document.currentScript ? document.currentScript.src : '';
    var _navSrc  = _selfSrc.replace(/unit-renderer\.js([^/]*)$/, 'navigation.js');

    // Inject the custom element first — it will be upgraded once the script loads
    inject('<global-navigation></global-navigation>');

    var _navScript = document.createElement('script');
    _navScript.src = _navSrc;
    document.head.appendChild(_navScript);

    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    function toggleMenu() { sidebar.classList.toggle('active'); overlay.classList.toggle('active'); }

    // 2.5 NavBar Breadcrumbs (se specificati nel JSON, renderizza i breadcrumbs sotto la navbar)
    if (data.breadcrumbs) {
        var crumbs = data.breadcrumbs.map(function(bc, i) {
            return (i === data.breadcrumbs.length - 1) ? '<span>'+esc(bc.label)+'</span>' : '<a href="'+esc(bc.href)+'">'+esc(bc.label)+'</a>';
        }).join(' &rsaquo; ');
        var bcDiv = document.createElement('div');
        bcDiv.className = 'breadcrumbs';
        bcDiv.innerHTML = crumbs;
        document.body.appendChild(bcDiv);
    }
    

    /* ── 3. Rendering Layout (Hero Card + Stats) ── */
    var main = document.createElement('main');


    // Header
    var header = document.createElement('header');
    header.innerHTML = '<h1>' + esc(data.name) + '</h1>' + (data.subtitle ? '<div class="classification">' + esc(data.subtitle) + '</div>' : '');
    document.body.appendChild(header);

    // Hero Card
    var bioHtml = '<div class="hero-bio"><h2>Biography</h2>' + (data.bio.paragraphs || []).map(function(p){ return '<p>'+p+'</p>'; }).join('') + '</div>';
    var statsHtml = '';
    // solo le keys che recupera per mettere le statistiche, se non c'è la key non viene mostrata
    var statKeys = [        
        ['tier',      'Tier',        'tier'],
        ['hp',        'Hit Points',  'hp'],
        ['atk',       'Attack',      'atk'],
        ['ini',       'Initiative',  ''],
        ['armor',     'Armor',       ''],
        ['res',       'Resistance',  ''],
        ['size',      'Size',        ''],
        ['immunity',  'Immunity',    'special'],
        ['crit_chance','Crit Chance', ''],
        ['dodge',     'Dodge',       ''],
        ['protection','Protection',  '']
    ]; 
    statKeys.forEach(function(k) {
        if (data.stats[k[0]]) statsHtml += '<div class="stat-item"><span class="stat-label">'+k[1]+'</span><span class="stat-value '+k[2]+'">'+data.stats[k[0]]+'</span></div>';
    });

    // Combat Images (può essere un array o una singola stringa)
    var combatImgs = Array.isArray(data.combat) ? data.combat : [data.combat];
    // Il primo è statico, gli altri animati (se presenti)
    var combatHtml = combatImgs.map(function(src, i){ return '<img src="'+esc(src)+'" '+(i>0?'class="combat-anim"':'')+'>'; }).join('');

    main.innerHTML = '<div class="hero-card"><div class="combat-container">' + combatHtml + '</div><div class="hero-content">' + bioHtml + '<div class="stats-row">' + statsHtml + '</div></div></div>';

    // Skills
    // Se ci sono, renderizza le skill. Ogni skill ha un tipo (base, active, passive) che determina lo stile.
    if (data.skills) {
        var skHtml = data.skills.map(function(sk) {
            var type = (sk.type || 'base').toLowerCase();
            return '<div class="skill-item sk-'+type+'">' + (sk.icon ? '<img src="'+esc(sk.icon)+'" class="skill-icon">' : '') +
                   '<div class="skill-info"><div class="skill-header"><h4 class="skill-name">'+esc(sk.name)+'</h4><span class="skill-tag '+type+'">'+type+'</span></div><p class="skill-desc">'+sk.desc+'</p></div></div>';
        }).join('');
        main.innerHTML += '<h3 class="skills-section-title">Combat Doctrine</h3><div class="skills-list">' + skHtml + '</div>';
    }

    // Gallery
    // Se ci sono immagini aggiuntive, crea una sezione galleria con carosello. Ogni immagine è cliccabile per ingrandire (lightbox).
    if (data.gallery) {
        var items = data.gallery.map(function(src){ return '<div class="carousel-item"><img src="'+esc(src)+'"></div>'; }).join('');
        main.innerHTML += '<div class="portrait-gallery-module"><h2 class="gallery-header">Gallery</h2>' +
                          '<div class="carousel-wrap"><div class="carousel-track" id="carouselTrack">' + items + '</div></div>' +
                          '<div class="carousel-nav"><button class="nav-btn" id="prevBtn">&#8592;</button><button class="nav-btn" id="nextBtn">&#8594;</button></div></div>';
    }

    // link infondo per tornare alla pagina precedente, se specificato nel JSON
    if (data.backLink) main.innerHTML += '<a href="'+esc(data.backLink.href)+'" class="back-link">&#8592; '+esc(data.backLink.label)+'</a>';
    document.body.appendChild(main);

    /* ── 4. Logica Lightbox ── */
    var lb = document.createElement('div');
    lb.className = 'lightbox-overlay'; lb.id = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" id="lbClose">&times;</button><img src="" id="lbImg" class="lightbox-img">';
    document.body.appendChild(lb);
    
    var lbImg = document.getElementById('lbImg');
    var galleryImgs = document.querySelectorAll('.carousel-item img');
    for (var n = 0; n < galleryImgs.length; n++) {
        galleryImgs[n].style.cursor = 'zoom-in';
        galleryImgs[n].onclick = function() { lbImg.src = this.src; lb.classList.add('active'); };
    }

    function closeLB() { lb.classList.remove('active'); }
    document.getElementById('lbClose').onclick = closeLB;
    lb.onclick = function(e) { if(e.target === lb) closeLB(); };

    // Funzione di utilità per iniettare HTML (usata per la navbar)
    function inject(html) {
        var wrap = document.createElement('div');
        wrap.innerHTML = html;
        while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    }

    /* Carosello */
    var track = document.getElementById('carouselTrack'), current = 0;
    if (track) {
        var slides = track.querySelectorAll('.carousel-item');
        document.getElementById('nextBtn').onclick = function() { if(current < slides.length - 1){ current++; slide(); } };
        document.getElementById('prevBtn').onclick = function() { if(current > 0){ current--; slide(); } };
        function slide() { track.style.transform = 'translateX(-' + (current * (slides[0].offsetWidth + 15)) + 'px)'; }
    }
})();
