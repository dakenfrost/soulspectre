/* evo-tree-v2.js — compact vertical evolution tree (trial on the Order of the Sword page)
 *
 * Reads the same .unit-row markup as evo-tree.js (data-evo-id / data-evo-to, t-officer / t-1..t-5,
 * .portrait-container img, .unit-name, .unit-tier, .unit-desc, .btn-tactical) and draws:
 *   - one COLUMN per final path (the branches' leaves, ordered by #evo-tree-root data-labels),
 *     shared ancestors centred over the columns they feed (Squire over all, Knight over its two);
 *     where a line forks, the branch name from the child's data-evo-path ("Knight Path"…);
 *   - one square portrait per unit (male/female cross-fade when both exist), no names;
 *   - hover / focus = compact card (large portrait, name, classification, HP/ATK/INI read from the
 *     unit's own page, "Click for more info"), click = that page;
 *   - Tier V = RECRUITED, not evolved: dashed lines from the units it inherits from;
 *   - the Officer apart, at the top.
 * Usage: <div id="evo-tree-root" data-bg="..." data-labels="Path A, Path B, ..."></div>
 *        <script src="../../system/evo-tree-v2.js"></script>
 */
(function () {
    'use strict';

    var TC = { 0: '#9e9e9e', 1: '#b0bec5', 2: '#81c784', 3: '#64b5f6', 4: '#ba68c8', 5: '#ffb300' };
    var TN = { 0: 'Officer', 1: 'Tier I', 2: 'Tier II', 3: 'Tier III', 4: 'Tier IV', 5: 'Tier V' };
    var TS = { 0: 'OFF', 1: 'T1', 2: 'T2', 3: 'T3', 4: 'T4', 5: 'T5' };

    var css = [
        '.evo2{position:relative;margin-bottom:60px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.6);background:#05080d center/cover no-repeat;}',
        '.evo2::before{content:"";position:absolute;inset:0;background:linear-gradient(rgba(4,7,12,0.55),rgba(4,7,12,0.82));}',
        '.evo2-head{position:relative;display:flex;align-items:baseline;gap:12px;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.35);}',
        '.evo2-title{color:#fff;font-size:0.95rem;font-weight:bold;letter-spacing:2px;text-transform:uppercase;}',
        '.evo2-hint{color:rgba(255,255,255,0.45);font-size:0.75rem;letter-spacing:0.5px;}',
        '.evo2-stage{position:relative;}',
        '.evo2-stage svg{position:absolute;top:0;left:0;pointer-events:none;overflow:visible;}',
        '.evo2-path{position:absolute;transform:translate(-50%,-100%);padding:2px 8px;border-radius:3px;background:rgba(0,0,0,0.72);color:#fff;font-weight:bold;font-size:0.7rem;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;text-shadow:0 1px 3px #000;}',
        '.evo2-tier{position:absolute;left:10px;transform:translateY(-50%);padding:3px 8px;border-radius:3px;background:rgba(0,0,0,0.7);font-size:0.68rem;font-weight:bold;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;}',
        '.evo2-node{position:absolute;display:block;border-radius:6px;border:3px solid;overflow:hidden;background:#000;transform:translate(-50%,0);transition:transform .15s ease,box-shadow .15s ease;outline:none;}',
        '.evo2-node:hover,.evo2-node:focus-visible{transform:translate(-50%,0) scale(1.08);z-index:3;}',
        '.evo2-node:focus-visible{box-shadow:0 0 0 3px #fff;}',
        '.evo2-node img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;}',
        '.evo2-node img.evo2-alt{animation:evo2fade 8s ease-in-out infinite;}',
        '@keyframes evo2fade{0%,40%{opacity:0}50%,90%{opacity:1}100%{opacity:0}}',
        '@media (prefers-reduced-motion:reduce){.evo2-node img.evo2-alt,.evo2-pic img.evo2-alt{animation:none;opacity:0}.evo2-node{transition:none}}',
        '.evo2-card{position:fixed;z-index:9999;width:220px;max-width:calc(100vw - 24px);display:none;flex-direction:column;gap:8px;padding:10px;border-radius:6px;background:rgba(8,12,20,0.97);border:1px solid rgba(255,255,255,0.12);border-left:3px solid;box-shadow:0 10px 30px rgba(0,0,0,0.8);pointer-events:none;color:#ddd;}',
        '.evo2-pic{position:relative;width:100%;aspect-ratio:1/1;border-radius:4px;overflow:hidden;background:#000;}',
        '.evo2-pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;}',
        '.evo2-pic img.evo2-alt{animation:evo2fade 6s ease-in-out infinite;}',
        '.evo2-card h4{margin:2px 0 2px;color:#fff;font-size:1rem;letter-spacing:1px;text-transform:uppercase;}',
        '.evo2-card .evo2-cls{font-size:0.68rem;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.55);margin-bottom:6px;}',
        '.evo2-more{font-size:0.7rem;color:rgba(255,255,255,0.5);letter-spacing:0.5px;margin-top:2px;}',
        '.evo2-stats{display:flex;gap:10px;font-size:0.75rem;font-variant-numeric:tabular-nums;}',
        '.evo2-stats span{background:rgba(255,255,255,0.06);padding:2px 7px;border-radius:3px;}',
        '.evo2-stats b{color:#fff;margin-left:3px;}',
    ].join('');
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    function tierOf(cl) {
        if (/\bt-officer\b/.test(cl)) return 0;
        var m = cl.match(/\bt-(\d)\b/); return m ? +m[1] : 1;
    }

    function parse() {
        return Array.from(document.querySelectorAll('.unit-row')).map(function (row, i) {
            var imgs = Array.from(row.querySelectorAll('.portrait-container img')).map(function (im) { return im.getAttribute('src'); });
            var link = row.querySelector('.btn-tactical');
            var tierEl = row.querySelector('.unit-tier');
            return {
                idx: i, id: row.getAttribute('data-evo-id') || ('u' + i),
                to: (row.getAttribute('data-evo-to') || '').trim().split(/\s+/).filter(Boolean),
                tier: tierOf(row.className),
                name: ((row.querySelector('.unit-name') || {}).textContent || '').trim(),
                cls: tierEl ? tierEl.textContent.replace(/^\s*Classification:\s*/i, '').replace(/\s+,/g, ',').trim() : '',
                desc: ((row.querySelector('.unit-desc') || {}).textContent || '').trim(),
                imgs: imgs, href: link ? link.getAttribute('href') : null,
                // Name shown where a line forks into this unit: data-evo-path, else the "… Path" in its classification.
                branch: row.getAttribute('data-evo-path') || (function () {
                    var m = (tierEl ? tierEl.textContent : '').match(/,\s*([^,]*\bPath)\s*$/i);
                    return m && m[1].indexOf('/') < 0 ? m[1].trim() : '';
                })(),
            };
        });
    }

    function layout(units, labels) {
        var byId = {}; units.forEach(function (u) { byId[u.id] = u; });
        units.forEach(function (u) { u.kids = []; u.heirs = []; u.parents = []; });
        units.forEach(function (u) {
            u.to.forEach(function (t) {
                var v = byId[t]; if (!v) return;
                if (v.tier === 5) { u.heirs.push(v); v.parents.push(u); }   // recruited T5: inherits, doesn't evolve
                else u.kids.push(v);
            });
        });
        var tree = units.filter(function (u) { return u.tier >= 1 && u.tier <= 4; });
        var leaves = tree.filter(function (u) { return u.kids.length === 0; });
        function pathRank(u) {
            var c = u.cls.toLowerCase();
            for (var i = 0; i < labels.length; i++) {
                var k = labels[i].toLowerCase().replace(/\s*path\s*/g, '').trim();
                if (k && c.indexOf(k) !== -1) return i;
            }
            return 99;
        }
        leaves.sort(function (a, b) { return (pathRank(a) - pathRank(b)) || (a.idx - b.idx); });
        leaves.forEach(function (u, i) { u.col = i; });
        function colOf(u) {   // a shared ancestor sits in the middle of the columns it feeds
            if (u.col !== undefined) return u.col;
            var cs = u.kids.map(colOf);
            u.col = (Math.min.apply(null, cs) + Math.max.apply(null, cs)) / 2;
            return u.col;
        }
        tree.forEach(colOf);
        var nCols = Math.max(1, leaves.length);
        units.filter(function (u) { return u.tier === 5; }).forEach(function (u) {
            var cs = u.parents.map(function (p) { return p.col; });
            u.col = cs.length ? cs.reduce(function (a, b) { return a + b; }, 0) / cs.length : (nCols - 1) / 2;
        });
        // two Tier V side by side (e.g. the casters): spread them if they'd overlap
        var t5 = units.filter(function (u) { return u.tier === 5; }).sort(function (a, b) { return a.col - b.col; });
        for (var i = 1; i < t5.length; i++) if (t5[i].col - t5[i - 1].col < 0.9) t5[i].col = t5[i - 1].col + 0.9;
        units.filter(function (u) { return u.tier === 0; }).forEach(function (u) { u.col = (nCols - 1) / 2; });
        return { nCols: nCols, leaves: leaves };
    }

    var statCache = {};
    function loadStats(href, cb) {
        if (!href) return cb(null);
        if (statCache[href] !== undefined) return cb(statCache[href]);
        fetch(href).then(function (r) { return r.text(); }).then(function (t) {
            var m = t.match(/id="unit-data">([\s\S]*?)<\/script>/);
            var s = null; try { s = m ? JSON.parse(m[1]).stats || null : null; } catch (e) {}
            statCache[href] = s; cb(s);
        }).catch(function () { statCache[href] = null; cb(null); });
    }

    var card;
    function showCard(u, node) {
        if (!card) { card = document.createElement('div'); card.className = 'evo2-card'; document.body.appendChild(card); }
        var color = TC[u.tier];
        card.style.borderLeftColor = color;
        // Portrait alternates male/female (same cross-fade as the tile) — both genders without any click.
        card.innerHTML = '<div class="evo2-pic"><img src="' + (u.imgs[0] || '') + '" alt="">' +
            (u.imgs[1] ? '<img class="evo2-alt" src="' + u.imgs[1] + '" alt="">' : '') + '</div>' +
            '<div><h4>' + u.name + '</h4><div class="evo2-cls" style="color:' + color + '">' + (u.cls || TN[u.tier]) + '</div>' +
            '<div class="evo2-stats">…</div>' + (u.href ? '<div class="evo2-more">Click for more info</div>' : '') + '</div>';
        card.style.display = 'flex';
        var r = node.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight;
        var x = r.right + 12; if (x + cw > window.innerWidth - 8) x = r.left - cw - 12; if (x < 8) x = Math.max(8, (window.innerWidth - cw) / 2);
        var y = r.top + r.height / 2 - ch / 2; y = Math.max(8, Math.min(window.innerHeight - ch - 8, y));
        card.style.left = x + 'px'; card.style.top = y + 'px';
        card._for = u;   // BEFORE loadStats: a cached unit answers synchronously
        loadStats(u.href, function (s) {
            if (!card || card._for !== u) return;
            var box = card.querySelector('.evo2-stats');
            box.innerHTML = s ? '<span>HP<b>' + s.hp + '</b></span><span>ATK<b>' + s.atk + '</b></span><span>INI<b>' + s.ini + '</b></span>' : '';
        });
    }
    function hideCard() { if (card) { card.style.display = 'none'; card._for = null; } }

    function render(root, units, info, labels) {
        var W = root.clientWidth || 800;
        var narrow = W < 560;
        var gutter = narrow ? 46 : 96, right = narrow ? 10 : 30;
        var colW = (W - gutter - right) / info.nCols;
        var D = Math.round(Math.max(54, Math.min(108, colW * 0.62)));
        var rowH = D + (narrow ? 40 : 52);
        var hasOff = units.some(function (u) { return u.tier === 0; });
        var top = 16;
        var tiers = units.map(function (u) { return u.tier; });
        var maxT = Math.max.apply(null, tiers);
        function rowOf(t) { return hasOff ? t : t - 1; }
        function X(u) { return gutter + (u.col + 0.5) * colW; }
        function Y(u) { return top + rowOf(u.tier) * rowH; }
        var capH = 16;
        var H = top + (rowOf(maxT) + 1) * rowH + capH;

        var stage = root.querySelector('.evo2-stage');
        stage.innerHTML = ''; stage.style.height = H + 'px';
        var svg = '<svg width="' + W + '" height="' + H + '">';
        var accent = getComputedStyle(document.documentElement).getPropertyValue('--order-accent').trim() || '#5c9ce6';

        units.forEach(function (u) {
            var x1 = X(u), y1 = Y(u) + D;
            u.kids.forEach(function (v) {   // evolution: elbow line (down, across, down) + chevron
                var x2 = X(v), y2 = Y(v) - 4, my = (y1 + y2) / 2;
                svg += '<path d="M' + x1 + ',' + (y1 + 2) + ' V' + my + ' H' + x2 + ' V' + y2 + '" stroke="' + accent + '" stroke-width="2" fill="none" opacity="0.8"/>' +
                       '<path d="M' + (x2 - 6) + ',' + (y2 - 7) + ' L' + x2 + ',' + y2 + ' L' + (x2 + 6) + ',' + (y2 - 7) + '" stroke="' + accent + '" stroke-width="2" fill="none"/>';
            });
            u.heirs.forEach(function (v) {   // Tier V inherits (recruited, not evolved): dashed gold
                var x2 = X(v), y2 = Y(v) - 4, my = (y1 + y2) / 2;
                svg += '<path d="M' + x1 + ',' + (y1 + 2) + ' V' + my + ' H' + x2 + ' V' + y2 + '" stroke="' + TC[5] + '" stroke-width="2" stroke-dasharray="5 5" fill="none" opacity="0.85"/>';
            });
        });
        svg += '</svg>';
        stage.insertAdjacentHTML('beforeend', svg);

        // Branch names only where a line FORKS (data-evo-path on the child): just above the horizontal run,
        // at the child's end — e.g. Squire › "Knight Path" / "Inquisition Path".
        units.forEach(function (u) {
            if (u.kids.length < 2) return;
            var my = (Y(u) + D + Y(u.kids[0]) - 4) / 2;
            u.kids.forEach(function (v) {
                if (!v.branch) return;
                var d = document.createElement('div'); d.className = 'evo2-path';
                d.style.left = X(v) + 'px'; d.style.top = (my - 3) + 'px';   // over the child's end of the fork
                if (narrow) d.style.fontSize = '0.55rem';
                d.textContent = v.branch;
                stage.appendChild(d);
            });
        });

        var seen = {};
        units.forEach(function (u) {
            if (seen[u.tier]) return; seen[u.tier] = 1;
            var d = document.createElement('div'); d.className = 'evo2-tier';
            d.style.top = (Y(u) + D / 2) + 'px'; d.style.color = TC[u.tier]; d.style.border = '1px solid ' + TC[u.tier] + '55';
            d.textContent = narrow ? TS[u.tier] : TN[u.tier];
            stage.appendChild(d);
        });

        units.forEach(function (u) {
            var a = document.createElement(u.href ? 'a' : 'div');
            a.className = 'evo2-node';
            if (u.href) a.href = u.href;
            a.setAttribute('aria-label', u.name + ' — ' + (u.cls || TN[u.tier]));
            a.style.cssText = 'left:' + X(u) + 'px;top:' + Y(u) + 'px;width:' + D + 'px;height:' + D + 'px;border-color:' + TC[u.tier] + ';box-shadow:0 0 14px ' + TC[u.tier] + '55;';
            a.innerHTML = (u.imgs[0] ? '<img src="' + u.imgs[0] + '" alt="" loading="lazy">' : '') +
                          (u.imgs[1] ? '<img class="evo2-alt" src="' + u.imgs[1] + '" alt="" loading="lazy">' : '');
            a.addEventListener('mouseenter', function () { showCard(u, a); });
            a.addEventListener('mouseleave', hideCard);
            a.addEventListener('focus', function () { showCard(u, a); });
            a.addEventListener('blur', hideCard);
            stage.appendChild(a);
        });
    }

    function init() {
        var root = document.getElementById('evo-tree-root'); if (!root) return;
        var labels = (root.getAttribute('data-labels') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
        var units = parse(); if (!units.length) return;
        var info = layout(units, labels);
        root.innerHTML = '<div class="evo2"><div class="evo2-head"><span class="evo2-title">Evolution Paths</span>' +
                         '<span class="evo2-hint">Hover a portrait for details · click to open</span></div><div class="evo2-stage"></div></div>';
        var bg = root.getAttribute('data-bg'); if (bg) root.querySelector('.evo2').style.backgroundImage = "url('" + bg + "')";
        var go = function () { hideCard(); render(root, units, info, labels); };
        go();
        var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(go, 120); });
        window.addEventListener('scroll', hideCard, { passive: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
