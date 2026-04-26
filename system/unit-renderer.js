(function () {
    'use strict';

    /* ── 1. Read JSON ────────────────────────────────────────────────── */
    var dataEl = document.getElementById('unit-data');
    if (!dataEl) return;

    var data;
    try { data = JSON.parse(dataEl.textContent); }
    catch (e) { console.error('unit-renderer: invalid JSON —', e); return; }

    /* ── 2. Accent colour + title ────────────────────────────────────── */
    if (data.accent) {
        var hex = data.accent.replace('#', '');
        var r = parseInt(hex.slice(0, 2), 16);
        var g = parseInt(hex.slice(2, 4), 16);
        var b = parseInt(hex.slice(4, 6), 16);
        document.documentElement.style.setProperty('--accent-color', data.accent);
        document.documentElement.style.setProperty('--accent-glow',
            'rgba(' + r + ',' + g + ',' + b + ',0.3)');
    }
    if (data.name) document.title = 'SOULSPECTRE | ' + data.name;

    /* ── 3. Background image ─────────────────────────────────────────── */
    if (data.bgImage) {
        var bgEl = document.getElementById('bg-image');
        if (bgEl) bgEl.style.backgroundImage = "url('" + data.bgImage + "')";
    }

    /* ── 4. Helpers ──────────────────────────────────────────────────── */
    function esc(s) {
        return String(s)
            .replace(/&/g,  '&amp;')
            .replace(/"/g,  '&quot;')
            .replace(/</g,  '&lt;')
            .replace(/>/g,  '&gt;');
    }

    function inject(html) {
        var wrap = document.createElement('div');
        wrap.innerHTML = html;
        while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    }

    /* ── 5. Navigation ───────────────────────────────────────────────── */
    var _selfSrc = document.currentScript ? document.currentScript.src : '';
    var _navSrc  = _selfSrc.replace(/unit-renderer\.js([^/]*)$/, 'navigation.js');

    inject('<global-navigation></global-navigation>');

    var _navScript = document.createElement('script');
    _navScript.src = _navSrc;
    document.head.appendChild(_navScript);

    /* ── 6. Breadcrumbs ──────────────────────────────────────────────── */
    if (data.breadcrumbs && data.breadcrumbs.length) {
        var crumbs = data.breadcrumbs.map(function (bc, i) {
            var isLast = (i === data.breadcrumbs.length - 1);
            return isLast
                ? '<span>' + esc(bc.label) + '</span>'
                : '<a href="' + esc(bc.href || '#') + '">' + esc(bc.label) + '</a>';
        }).join(' &rsaquo; ');

        inject('<div class="breadcrumbs">' + crumbs + '</div>');
    }

    /* ── 7. Header ───────────────────────────────────────────────────── */
    var name     = data.name     || '';
    var subtitle = data.subtitle || '';
    var header   = document.createElement('header');
    header.innerHTML =
        '<h1>' + esc(name) + '</h1>' +
        (subtitle ? '<div class="classification">' + esc(subtitle) + '</div>' : '');
    document.body.appendChild(header);

    /* ── 8. Main content ─────────────────────────────────────────────── */
    var main = document.createElement('main');

    /* -- Bio logic with Quote Box ----------------------------------- */
    var bioHtml = '';
    if (data.bio) {
        var bioBody = '';
        if (data.bio.quote) {
            bioBody += 
                '<div class="quote-box">' +
                    '<p class="quote-text"><em>&ldquo;' + esc(data.bio.quote) + '&rdquo;</em></p>' +
                '</div>';
        }
        (data.bio.paragraphs || []).forEach(function (p) {
            bioBody += '<p>' + p + '</p>';
        });
        bioHtml =
            '<div class="hero-bio">' +
                '<h2>' + esc(data.bio.title || 'Biography') + '</h2>' +
                bioBody +
            '</div>';
    }

    /* -- Stats mapping ---------------------------------------------- */
    var STAT_MAP = [
        ['tier',      'Tier',        'tier'],
        ['hp',        'Hit Points',  'hp'],
        ['atk',       'Attack',      'atk'],
        ['ini',       'Initiative',  ''],
        ['armor',     'Armor',       ''],
        ['res',       'Resistance',  ''],
        ['size',      'Size',        ''],
        ['immunity',  'Immunity',    'special'],
        ['crit_chance','Crit Chance', ''],
        ['dodge',     'Dodge',       'dodge'],
        ['protection','Protection',  '']
    ];

    var statsHtml = '';
    if (data.stats) {
        var usedKeys = {};
        STAT_MAP.forEach(function (row) {
            var key = row[0], label = row[1], cls = row[2];
            var val = data.stats[key];
            if (val === undefined || val === null || val === '' || val === 0) return;
            usedKeys[key] = true;
            statsHtml +=
                '<div class="stat-item">' +
                    '<span class="stat-label">' + label + '</span>' +
                    '<span class="stat-value' + (cls ? ' ' + cls : '') + '">' + val + '</span>' +
                '</div>';
        });

        Object.keys(data.stats).forEach(function (key) {
            if (usedKeys[key]) return;
            var val = data.stats[key];
            if (val === undefined || val === null || val === '' || val === 0) return;
            var label = key.charAt(0).toUpperCase() + key.slice(1);
            statsHtml +=
                '<div class="stat-item">' +
                    '<span class="stat-label">' + label + '</span>' +
                    '<span class="stat-value">' + val + '</span>' +
                '</div>';
        });
    }

    /* -- Hero Card Assembly (Split Portrait + Content) -------------- */
    var faction = (data.faction || 'generic').toLowerCase();
    var combatRaw = data.combat || [];
    var combatImgs = Array.isArray(combatRaw) ? combatRaw : [combatRaw];
    var combatHtml = combatImgs.map(function (src, i) {
        return '<img src="' + esc(src) + '" alt="' + esc(name) + '"' +
            (i > 0 ? ' class="combat-anim"' : '') + '>';
    }).join('');

    main.innerHTML =
        '<div class="hero-card">' +
            '<div class="combat-frame frame-' + faction + '">' +
                '<div class="portrait-decorator"></div>' +
                '<div class="combat-container">' +
                    combatHtml +
                '</div>' +
            '</div>' +
            '<div class="hero-content">' +
                bioHtml +
                (statsHtml ? '<div class="stats-row">' + statsHtml + '</div>' : '') +
            '</div>' +
        '</div>';

    /* -- Skills Section --------------------------------------------- */
    var SKILL_LABEL = {
        base:    'Base',
        active:  'Active',
        passive: 'Passive',
        ultimate:'Ultimate'
    };

    if (data.skills && data.skills.length) {
        var skillsHtml = data.skills.map(function (sk) {
            var type  = (sk.type || 'base').toLowerCase();
            var label = SKILL_LABEL[type] || sk.type || type;
            return (
                '<div class="skill-item sk-' + type + '">' +
                    (sk.icon
                        ? '<img src="' + esc(sk.icon) + '" alt="" class="skill-icon">'
                        : '') +
                    '<div class="skill-info">' +
                        '<div class="skill-header">' +
                            '<h4 class="skill-name">' + esc(sk.name || '') + '</h4>' +
                            '<span class="skill-tag ' + type + '">' + label + '</span>' +
                        '</div>' +
                        '<p class="skill-desc">' + (sk.desc || '') + '</p>' +
                    '</div>' +
                '</div>'
            );
        }).join('');

        main.innerHTML +=
            '<h3 class="skills-section-title">Combat Doctrine</h3>' +
            '<div class="skills-list">' + skillsHtml + '</div>';
    }

    /* -- Gallery Section -------------------------------------------- */
    if (data.gallery && data.gallery.length) {
        var galleryItems = data.gallery.map(function (src, i) {
            return (
                '<div class="carousel-item">' +
                    '<img src="' + esc(src) + '" alt="Portrait ' + (i + 1) + '">' +
                '</div>'
            );
        }).join('');

        main.innerHTML +=
            '<div class="portrait-gallery-module">' +
                '<h2 class="gallery-header">Gallery</h2>' +
                '<div class="carousel-wrap">' +
                    '<div class="carousel-track" id="carouselTrack">' + galleryItems + '</div>' +
                '</div>' +
                '<div class="carousel-nav">' +
                    '<button class="nav-btn" id="prevBtn">&#8592;</button>' +
                    '<button class="nav-btn" id="nextBtn">&#8594;</button>' +
                '</div>' +
            '</div>';
    }

    /* -- Back Link -------------------------------------------------- */
    if (data.backLink) {
        main.innerHTML +=
            '<a href="' + esc(data.backLink.href) + '" class="back-link">' +
                '&#8592; ' + esc(data.backLink.label) +
            '</a>';
    }

    /* -- Lightbox --------------------------------------------------- */
    if (data.gallery && data.gallery.length) {
        inject(
            '<div class="lightbox-overlay" id="lightbox">' +
                '<button class="lightbox-close" id="lightbox-close">&times;</button>' +
                '<img src="" alt="" class="lightbox-img" id="lightbox-img">' +
            '</div>'
        );
    }

    document.body.appendChild(main);

    /* -- Carousel & Lightbox Logic --------------------------------- */
    var track = document.getElementById('carouselTrack');
    if (track) {
        var slides  = track.querySelectorAll('.carousel-item');
        var current = 0;
        function slide() {
            if (!slides.length) return;
            track.style.transform =
                'translateX(-' + (current * (slides[0].offsetWidth + 15)) + 'px)';
        }
        document.getElementById('nextBtn').addEventListener('click', function () {
            if (current < slides.length - 1) { current++; slide(); }
        });
        document.getElementById('prevBtn').addEventListener('click', function () {
            if (current > 0) { current--; slide(); }
        });
    }

    var lightbox      = document.getElementById('lightbox');
    var lightboxImg   = document.getElementById('lightbox-img');
    var lightboxClose = document.getElementById('lightbox-close');
    if (lightbox) {
        document.querySelectorAll('.carousel-item img').forEach(function (img) {
            img.addEventListener('click', function () {
                lightboxImg.src = this.src;
                lightbox.classList.add('active');
            });
        });
        function closeLightbox() { lightbox.classList.remove('active'); }
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    }

})();
