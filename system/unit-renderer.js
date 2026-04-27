(function () {
    'use strict';
    var dataEl = document.getElementById('unit-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }

    /* Accent & Background */
    if (data.accent) {
        document.documentElement.style.setProperty('--accent-color', data.accent);
    }
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

    /* Nav & Sidebar Script */
    var _selfSrc = document.currentScript ? document.currentScript.src : '';
    var _navSrc  = _selfSrc.replace(/unit-renderer\.js([^/]*)$/, 'navigation.js');
    inject('<global-navigation></global-navigation>');
    var _navScript = document.createElement('script');
    _navScript.src = _navSrc;
    document.head.appendChild(_navScript);

    /* Header */
    var header = document.createElement('header');
    header.innerHTML = '<h1>' + esc(data.name || '') + '</h1>' + (data.subtitle ? '<div class="classification">' + esc(data.subtitle) + '</div>' : '');
    document.body.appendChild(header);

    /* Main Content */
    var main = document.createElement('main');
    var bioHtml = '<div class="hero-bio"><h2>Biography</h2>' + (data.bio.paragraphs || []).map(function(p){ return '<p>'+p+'</p>'; }).join('') + '</div>';
    
    var statsHtml = '';
    var keys = [['tier','Tier','tier'],['hp','Hit Points','hp'],['atk','Attack','atk'],['ini','Initiative','']];
    keys.forEach(function(k){
        if(data.stats[k[0]]) statsHtml += '<div class="stat-item"><span class="stat-label">'+k[1]+'</span><span class="stat-value '+k[2]+'">'+data.stats[k[0]]+'</span></div>';
    });

    var combatImgs = Array.isArray(data.combat) ? data.combat : [data.combat];
    var combatHtml = combatImgs.map(function(src, i){ return '<img src="'+esc(src)+'" '+(i>0?'class="combat-anim"':'')+'>'; }).join('');

    main.innerHTML = '<div class="hero-card"><div class="combat-container">'+combatHtml+'</div><div class="hero-content">'+bioHtml+'<div class="stats-row">'+statsHtml+'</div></div></div>';

    /* Skills */
    if (data.skills) {
        var skillsHtml = data.skills.map(function(sk){
            return '<div class="skill-item sk-'+sk.type+'">'+(sk.icon?'<img src="'+esc(sk.icon)+'" class="skill-icon">':'')+'<div class="skill-info"><h4 class="skill-name">'+esc(sk.name)+'</h4><p class="skill-desc">'+sk.desc+'</p></div></div>';
        }).join('');
        main.innerHTML += '<div class="skills-list">'+skillsHtml+'</div>';
    }

    document.body.appendChild(main);
})();
