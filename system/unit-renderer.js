(function () {
    'use strict';

    var dataEl = document.getElementById('unit-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); }
    catch (e) { console.error('unit-renderer: invalid JSON —', e); return; }

    /* Accent & Theme */
    if (data.accent) {
        var hex = data.accent.replace('#', '');
        var r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
        document.documentElement.style.setProperty('--accent-color', data.accent);
        document.documentElement.style.setProperty('--accent-glow', 'rgba(' + r + ',' + g + ',' + b + ',0.3)');
    }
    if (data.name) document.title = 'SOULSPECTRE | ' + data.name;
    if (data.bgImage) {
        var bgEl = document.getElementById('bg-image');
        if (bgEl) bgEl.style.backgroundImage = "url('" + data.bgImage + "')";
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function inject(html) {
        var wrap = document.createElement('div');
        wrap.innerHTML = html;
        while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    }

    /* Navigation Injection */
    var _selfSrc = document.currentScript ? document.currentScript.src : '';
    var _navSrc  = _selfSrc.replace(/unit-renderer\.js([^/]*)$/, 'navigation.js');
    inject('<global-navigation></global-navigation>');
    var _navScript = document.createElement('script');
    _navScript.src = _navSrc;
    document.head.appendChild(_navScript);

    /* Breadcrumbs */
    if (data.breadcrumbs && data.breadcrumbs.length) {
        var crumbs = data.breadcrumbs.map(function (bc, i) {
            return (i === data.breadcrumbs.length - 1) ? '<span>' + esc(bc.label) + '</span>' : '<a href="' + esc(bc.href || '#') + '">' + esc(bc.label) + '</a>';
        }).join(' &rsaquo; ');
        inject('<div class="breadcrumbs">' + crumbs + '</div>');
    }

    /* Header */
    var header = document.createElement('header');
    header.innerHTML = '<h1>' + esc(data.name || '') + '</h1>' + (data.subtitle ? '<div class="classification">' + esc(subtitle) + '</div>' : '');
    document.body.appendChild(header);

    /* Main Content */
    var main = document.createElement('main');
    
    /* Bio & Stats Card */
    var bioHtml = '';
    if (data.bio) {
        var bioBody = (data.bio.quote ? '<p><em>&ldquo;' + data.bio.quote + '&rdquo;</em></p>' : '') + (data.bio.paragraphs || []).map(p => '<p>' + p + '</p>').join('');
        bioHtml = '<div class="hero-bio"><h2>' + esc(data.bio.title || 'Biography') + '</h2>' + bioBody + '</div>';
    }

    var STAT_MAP = [['tier','Tier','tier'],['hp','Hit Points','hp'],['atk','Attack','atk'],['ini','Initiative',''],['armor','Armor',''],['res','Resistance',''],['size','Size',''],['immunity','Immunity','special'],['crit_chance','Crit Chance',''],['dodge','Dodge',''],['protection','Protection','']];
    var statsHtml = '';
    if (data.stats) {
        STAT_MAP.forEach(row => {
            var val = data.stats[row[0]];
            if (val) statsHtml += '<div class="stat-item"><span class="stat-label">' + row[1] + '</span><span class="stat-value' + (row[2] ? ' ' + row[2] : '') + '">' + val + '</span></div>';
        });
    }

    var combatRaw = data.combat || [];
    var combatImgs = Array.isArray(combatRaw) ? combatRaw : [combatRaw];
    var combatHtml = combatImgs.map((src, i) => '<img src="' + esc(src) + '" alt=""' + (i > 0 ? ' class="combat-anim"' : '') + '>').join('');

    main.innerHTML = '<div class="hero-card"><div class="combat-container">' + combatHtml + '</div><div class="hero-content">' + bioHtml + (statsHtml ? '<div class="stats-row">' + statsHtml + '</div>' : '') + '</div></div>';

    /* Skills */
    if (data.skills) {
        var skillsHtml = data.skills.map(sk => {
            var type = (sk.type || 'base').toLowerCase();
            return '<div class="skill-item sk-' + type + '">' + (sk.icon ? '<img src="' + esc(sk.icon) + '" class="skill-icon">' : '') + '<div class="skill-info"><div class="skill-header"><h4 class="skill-name">' + esc(sk.name) + '</h4><span class="skill-tag ' + type + '">' + type + '</span></div><p class="skill-desc">' + (sk.desc || '') + '</p></div></div>';
        }).join('');
        main.innerHTML += '<h3 class="skills-section-title">Combat Doctrine</h3><div class="skills-list">' + skillsHtml + '</div>';
    }

    /* Gallery */
    if (data.gallery) {
        var items = data.gallery.map(src => '<div class="carousel-item"><img src="' + esc(src) + '"></div>').join('');
        main.innerHTML += '<div class="portrait-gallery-module"><h2 class="gallery-header">Gallery</h2><div class="carousel-wrap"><div class="carousel-track" id="carouselTrack">' + items + '</div></div><div class="carousel-nav"><button class="nav-btn" id="prevBtn">&#8592;</button><button class="nav-btn" id="nextBtn">&#8594;</button></div></div>';
    }

    /* Back link */
    if (data.backLink) main.innerHTML += '<a href="' + esc(data.backLink.href) + '" class="back-link">&#8592; ' + esc(data.backLink.label) + '</a>';

    inject('<div class="lightbox-overlay" id="lightbox"><button class="lightbox-close" id="lightbox-close">&times;</button><img src="" class="lightbox-img" id="lightbox-img"></div>');
    document.body.appendChild(main);

    /* Logic */
    var track = document.getElementById('carouselTrack'), current = 0;
    if (track) {
        var slides = track.querySelectorAll('.carousel-item');
        document.getElementById('nextBtn').addEventListener('click', () => { if (current < slides.length - 1) { current++; track.style.transform = 'translateX(-' + (current * (slides[0].offsetWidth + 15)) + 'px)'; } });
        document.getElementById('prevBtn').addEventListener('click', () => { if (current > 0) { current--; track.style.transform = 'translateX(-' + (current * (slides[0].offsetWidth + 15)) + 'px)'; } });
    }
    var lightbox = document.getElementById('lightbox'), lImg = document.getElementById('lightbox-img');
    document.querySelectorAll('.carousel-item img').forEach(img => img.addEventListener('click', function() { lImg.src = this.src; lightbox.classList.add('active'); }));
    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
})();
