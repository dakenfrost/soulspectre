/* evo-tree.js — Dynamic evolution tree, shared across all order pages.
 * Usage: add  <div id="evo-tree-root" data-bg=""></div>  where the tree should appear,
 * then include this script. Set data-bg to an image path to use a background.
 */
(function () {
    'use strict';

    /* ── Inject styles once ───────────────────────────────────────────── */
    if (!document.getElementById('evo-tree-style')) {
        var s = document.createElement('style');
        s.id = 'evo-tree-style';
        s.textContent = [
            '.evo-tree-wrapper{width:100%;margin-bottom:60px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.6);}',
            '.evo-tree-topbar{display:flex;align-items:center;padding:10px 16px;background:rgba(0,0,0,0.5);border-bottom:1px solid rgba(255,255,255,0.08);}',
            '.evo-tree-topbar-title{color:#5cb88a;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;font-weight:bold;}',
            '.evo-tree-canvas{position:relative;width:100%;overflow:hidden;background:#050d07;background-size:cover;background-position:center;}',
            /* horizontal card node */
            '.evo-node{position:absolute;display:flex;align-items:center;border-radius:5px;border:2px solid;z-index:2;box-sizing:border-box;overflow:hidden;cursor:default;}',
            '.evo-node-label{flex:1;padding:0 10px;color:#fff;font-size:0.72rem;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
            '.evo-node-imgs{display:flex;gap:3px;padding:4px 4px 4px 0;flex-shrink:0;}',
            '.evo-node-img-wrap{position:relative;overflow:hidden;border-radius:3px;border:1px solid rgba(255,255,255,0.25);flex-shrink:0;}',
            '.evo-node-img-wrap img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}',
        ].join('');
        document.head.appendChild(s);
    }

    /* ── Build wrapper HTML inside #evo-tree-root ─────────────────────── */
    function buildShell() {
        var root = document.getElementById('evo-tree-root');
        if (!root) return;
        var bg = root.getAttribute('data-bg') || '';
        root.innerHTML =
            '<div class="evo-tree-wrapper">' +
                '<div class="evo-tree-topbar">' +
                    '<span class="evo-tree-topbar-title">&#9670; Evolution Path</span>' +
                '</div>' +
                '<div class="evo-tree-canvas" id="evo-tree-canvas">' +
                    '<svg id="evo-tree-svg" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none;overflow:visible;"></svg>' +
                '</div>' +
            '</div>';
        if (bg) document.getElementById('evo-tree-canvas').style.backgroundImage = "url('" + bg + "')";
    }

    /* ── Tier colours ─────────────────────────────────────────────────── */
    var TC  = { 0: '#6b8de3', 1: '#c0c0c0', 2: '#4dd0e1', 3: '#81c784', 4: '#ffb300', 5: '#ce93d8' };
    var TBG = { 0: 'rgba(50,65,170,0.82)', 1: 'rgba(80,80,80,0.72)', 2: 'rgba(20,130,155,0.82)', 3: 'rgba(45,145,60,0.82)', 4: 'rgba(165,110,10,0.82)', 5: 'rgba(120,50,160,0.82)' };

    /* ── Extract path label from tier text (e.g. "Tier 2 , Defender Path" → "Defender Path") */
    function getPathLabel(t) {
        var m = t.match(/,\s*([^,]+?)\s*$/i);
        return m ? m[1].trim() : '';
    }

    /* ── Parse units from the roster list on the page ────────────────── */
    function parseUnits() {
        var rows = Array.from(document.querySelectorAll('.unit-row'));

        /* First pass: collect distinct path labels in order of appearance.
           The first path found → 'left', the second → 'right'.
           This is fully dynamic — no hardcoded path names. */
        var pathKeys = [];
        rows.forEach(function (row) {
            if (/\bt-officer\b/.test(row.className)) return;
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var label = getPathLabel(tierText);
            if (label) {
                var key = label.toLowerCase();
                if (pathKeys.indexOf(key) === -1) pathKeys.push(key);
            }
        });

        /* Second pass: build unit objects with dynamic path assignment */
        return rows.map(function (row) {
            var name = ((row.querySelector('.unit-name') || {}).textContent || '').trim();
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var imgs = row.querySelectorAll('.portrait-container img');
            var imgSrc = imgs.length > 0 ? (imgs[0].getAttribute('src') || '') : '';
            var imgSrc2 = imgs.length > 1 ? (imgs[1].getAttribute('src') || '') : '';
            var cl = row.className;
            var tier;
            if (/\bt-officer\b/.test(cl)) tier = 0;
            else if (/\bt-1\b/.test(cl)) tier = 1;
            else if (/\bt-2\b/.test(cl)) tier = 2;
            else if (/\bt-3\b/.test(cl)) tier = 3;
            else if (/\bt-4\b/.test(cl)) tier = 4;
            else if (/\bt-5\b/.test(cl)) tier = 5;
            else tier = 1;
            var color = TC[tier] || '#5cb88a';
            var pathLabel = tier === 0 ? '' : getPathLabel(tierText);
            var path;
            if (tier === 0 || !pathLabel) {
                path = 'center';
            } else {
                var idx = pathKeys.indexOf(pathLabel.toLowerCase());
                path = idx === 0 ? 'left' : idx === 1 ? 'right' : 'center';
            }
            var bg = TBG[tier] || 'rgba(0,0,0,0.7)';
            return { name: name, tier: tier, path: path, pathLabel: pathLabel, imgSrc: imgSrc, imgSrc2: imgSrc2, color: color, bg: bg };
        });
    }

    /* ── Compute which units evolve into which ───────────────────────── */
    function computeEdges(units) {
        var edges = [];
        for (var i = 0; i < units.length; i++) {
            for (var j = 0; j < units.length; j++) {
                var u = units[i], v = units[j];
                if (v.tier !== u.tier + 1) continue;
                if (u.tier === 0) continue; /* Officer has no outgoing arrows */
                if ((u.path === 'left' && v.path === 'right') || (u.path === 'right' && v.path === 'left')) continue;
                if (u.path === 'center' || v.path === 'center' || u.path === v.path) edges.push([i, j]);
            }
        }
        return edges;
    }

    /* ── Main render ──────────────────────────────────────────────────── */
    function render() {
        var canvas = document.getElementById('evo-tree-canvas');
        if (!canvas) return;
        var units = parseUnits();
        if (!units.length) return;

        var W = Math.max(canvas.offsetWidth || 0, canvas.clientWidth || 0, 300);
        var CARD_H  = 66;
        var CARD_GAP = 10;
        var ROW_H   = CARD_H + 52;
        var maxTier = Math.max.apply(null, units.map(function (u) { return u.tier; }));
        var PAD_TOP = 36, PAD_BOT = 48;
        var CANVAS_H = PAD_TOP + (maxTier + 1) * ROW_H + PAD_BOT;

        canvas.style.minHeight = CANVAS_H + 'px';

        var hasPaths = units.some(function (u) { return u.path !== 'center'; });

        /* max cards in any single tier+path slot → determines card width */
        var maxPerSlot = 1;
        for (var t = 0; t <= maxTier; t++) {
            ['left', 'right', 'center'].forEach(function (p) {
                var c = units.filter(function (u) { return u.tier === t && u.path === p; }).length;
                if (c > maxPerSlot) maxPerSlot = c;
            });
        }
        var zoneW  = hasPaths ? W * 0.42 : W * 0.65;
        var CARD_W = Math.min(240, Math.max(150, Math.floor((zoneW - (maxPerSlot - 1) * CARD_GAP) / maxPerSlot)));
        var IMG_SZ = CARD_H - 8;

        var colCX = {
            left:   hasPaths ? W * 0.21 : W * 0.5,
            center: W * 0.5,
            right:  hasPaths ? W * 0.79 : W * 0.5
        };

        var positions = units.map(function (unit, idx) {
            var before = units.slice(0, idx).filter(function (v) { return v.tier === unit.tier && v.path === unit.path; }).length;
            var total  = units.filter(function (v) { return v.tier === unit.tier && v.path === unit.path; }).length;
            var slotW  = total * CARD_W + (total - 1) * CARD_GAP;
            var cx = colCX[unit.path] || W * 0.5;
            var x  = cx - slotW / 2 + before * (CARD_W + CARD_GAP);
            var y  = PAD_TOP + unit.tier * ROW_H;
            return { x: x, y: y, cx: x + CARD_W / 2, topY: y, botY: y + CARD_H };
        });

        /* SVG edges + column labels */
        var svg = document.getElementById('evo-tree-svg');
        var edges = computeEdges(units);
        var svgHTML = '';

        if (hasPaths) {
            var colLabels = {};
            units.forEach(function (u) {
                if (u.path !== 'center' && u.pathLabel && !colLabels[u.path])
                    colLabels[u.path] = { label: u.pathLabel, color: u.color };
            });
            Object.keys(colLabels).forEach(function (p) {
                var pl = colLabels[p];
                svgHTML += '<text x="' + (colCX[p] || W * 0.5) + '" y="20" fill="' + pl.color + '" font-size="10" font-family="Segoe UI,sans-serif" text-anchor="middle" font-weight="bold" opacity="0.55" letter-spacing="1">' + pl.label.toUpperCase() + '</text>';
            });
        }

        edges.forEach(function (e) {
            var p1 = positions[e[0]], p2 = positions[e[1]];
            var x1 = p1.cx, y1 = p1.botY + 1, x2 = p2.cx, y2 = p2.topY - 2;
            var my = (y1 + y2) / 2;
            svgHTML += '<path d="M' + x1 + ',' + y1 + ' C' + x1 + ',' + my + ' ' + x2 + ',' + my + ' ' + x2 + ',' + y2 + '" stroke="' + units[e[1]].color + '" stroke-width="1.8" fill="none" stroke-opacity="0.5"/>';
            svgHTML += '<polygon points="' + x2 + ',' + y2 + ' ' + (x2 - 4) + ',' + (y2 - 7) + ' ' + (x2 + 4) + ',' + (y2 - 7) + '" fill="' + units[e[1]].color + '" opacity="0.45"/>';
        });

        svg.innerHTML = svgHTML;
        svg.setAttribute('width', W);
        svg.setAttribute('height', CANVAS_H);
        svg.style.width = W + 'px';
        svg.style.height = CANVAS_H + 'px';

        /* Remove old nodes */
        canvas.querySelectorAll('.evo-node,.evo-tier-lbl').forEach(function (n) { n.remove(); });

        /* Render card nodes */
        units.forEach(function (unit, idx) {
            var pos = positions[idx];
            var d = document.createElement('div');
            d.className = 'evo-node';
            d.style.cssText = 'left:' + pos.x + 'px;top:' + pos.y + 'px;width:' + CARD_W + 'px;height:' + CARD_H + 'px;' +
                'border-color:' + unit.color + ';background:' + unit.bg + ';' +
                'box-shadow:0 0 14px ' + unit.color + '44;';

            var imgsHTML = '';
            if (unit.imgSrc) {
                imgsHTML += '<div class="evo-node-img-wrap" style="width:' + IMG_SZ + 'px;height:' + IMG_SZ + 'px;">' +
                    '<img src="' + unit.imgSrc + '" alt="' + unit.name + '" loading="lazy" onerror="this.style.opacity=0.2">' +
                    '</div>';
            }
            if (unit.imgSrc2) {
                imgsHTML += '<div class="evo-node-img-wrap" style="width:' + IMG_SZ + 'px;height:' + IMG_SZ + 'px;">' +
                    '<img src="' + unit.imgSrc2 + '" alt="" loading="lazy" onerror="this.style.opacity=0.2">' +
                    '</div>';
            }

            d.innerHTML =
                '<div class="evo-node-label">' + unit.name + '</div>' +
                (imgsHTML ? '<div class="evo-node-imgs">' + imgsHTML + '</div>' : '');
            canvas.appendChild(d);
        });

        /* Tier labels on left edge */
        var TN = { 0: 'Officer', 1: 'Tier I', 2: 'Tier II', 3: 'Tier III', 4: 'Tier IV', 5: 'Tier V' };
        var done = {};
        units.forEach(function (unit) {
            if (!done[unit.tier]) {
                done[unit.tier] = true;
                var lbl = document.createElement('div');
                lbl.className = 'evo-tier-lbl';
                var y = PAD_TOP + unit.tier * ROW_H + CARD_H / 2 - 8;
                lbl.style.cssText = 'position:absolute;left:5px;top:' + y + 'px;color:' + unit.color + ';font-size:0.58rem;text-transform:uppercase;letter-spacing:1px;opacity:0.5;font-weight:bold;white-space:nowrap;';
                lbl.textContent = TN[unit.tier] || ('T' + unit.tier);
                canvas.appendChild(lbl);
            }
        });
    }

    /* ── Boot ─────────────────────────────────────────────────────────── */
    function init() {
        buildShell();
        render();
        var t;
        window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(render, 150); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
