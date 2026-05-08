/* evo-tree.js — Ultimate Evolution Tree Engine
 *
 * ─── USAGE GUIDE & DOCUMENTATION ─────────────────────────────────────────
 *
 * 1. Basic Setup:
 *    <div id="evo-tree-root" data-bg="optional/bg/image.png"></div>
 *    Include this script at the bottom of your page.
 *
 * 2. Path Columns (Automatic or Forced):
 *    Add ", Path Name" at the end of the .unit-tier text (e.g. "Tier 2 , Defender Path").
 *    To force a specific column order or declare columns upfront, use:
 *    <div id="evo-tree-root" data-labels="Path A, Path B, Path C"></div>
 *
 * 3. Hybrid Units (Converging Paths):
 *    If a unit belongs to multiple paths, separate them with a slash in the text:
 *    "Tier 3 , Path A/Path B". The engine will perfectly center the card between them.
 *    Units without ANY path (like Officers) are automatically centered globally.
 *
 * 4. Wide Units (Dual Portraits or Panoramas):
 *    Add the class "t-wide" to the .unit-row element. 
 *    - If the container has 1 image, it becomes a single landscape panorama.
 *    - If the container has 2 images, they are kept square side-by-side.
 *
 * 5. Manual Edges (The Override Switch):
 *    By default, edges are computed automatically (Tier to Tier+1 based on Paths).
 *    To override and draw lines manually, add attributes to the .unit-row:
 *      data-evo-id="squire"              — unique ID for the source unit
 *      data-evo-to="knight witch-hunter" — space-separated list of target IDs
 *    IMPORTANT: As soon as ANY unit-row has data-evo-id, auto-routing is disabled.
 * ─────────────────────────────────────────────────────────────────────────
 */
(function () {
    'use strict';

    if (!document.getElementById('evo-tree-style')) {
        var s = document.createElement('style');
        s.id = 'evo-tree-style';
        s.textContent = [
            '.evo-tree-wrapper{width:100%;margin-bottom:60px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;overflow-x:auto;overflow-y:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.6);}',
            '.evo-tree-topbar{display:flex;align-items:center;gap:14px;padding:10px 16px;background:rgba(0,0,0,0.5);border-bottom:1px solid rgba(255,255,255,0.08);}',
            '.evo-tree-topbar-title{color:#5cb88a;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;font-weight:bold;flex:1;}',
            '.evo-zoom-ctrl{display:flex;align-items:center;gap:8px;user-select:none;}',
            '.evo-zoom-icon{font-size:0.75rem;color:rgba(255,255,255,0.4);cursor:pointer;transition:color 0.2s;}',
            '.evo-zoom-icon:hover{color:#5cb88a;}',
            '.evo-zoom-label{font-size:0.65rem;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:1px;white-space:nowrap;}',
            '.evo-zoom-slider{-webkit-appearance:none;appearance:none;width:80px;height:3px;background:rgba(255,255,255,0.15);border-radius:2px;outline:none;cursor:pointer;}',
            '.evo-zoom-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:11px;height:11px;border-radius:50%;background:#5cb88a;cursor:pointer;box-shadow:0 0 5px #5cb88a88;}',
            '.evo-zoom-slider::-moz-range-thumb{width:11px;height:11px;border-radius:50%;background:#5cb88a;cursor:pointer;border:none;box-shadow:0 0 5px #5cb88a88;}',
            '.evo-tree-canvas{position:relative;width:100%;overflow:hidden;background:#050d07;background-size:cover;background-position:center;}',
            '.evo-magnifier{position:fixed;pointer-events:none;border-radius:50%;border:2px solid rgba(92,184,138,0.6);box-shadow:0 0 0 1px rgba(0,0,0,0.5),0 4px 24px rgba(0,0,0,0.8);overflow:hidden;z-index:9999;display:none;background:#050d07;}',
            '.evo-magnifier canvas{position:absolute;top:0;left:0;}',
            '.evo-node{position:absolute;display:flex;align-items:center;border-radius:5px;border:2px solid;z-index:2;box-sizing:border-box;overflow:hidden;cursor:default;}',
            '.evo-node-label{flex:1;min-width:0;padding:0 10px;color:#fff;font-size:0.68rem;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.2;}',
            '.evo-node-imgs{display:flex;gap:3px;padding:4px 4px 4px 0;flex-shrink:0;}',
            '.evo-node-img-wrap{position:relative;overflow:hidden;border-radius:3px;border:1px solid rgba(255,255,255,0.25);flex-shrink:0;}',
            '.evo-node-img-wrap img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}',
        ].join('');
        document.head.appendChild(s);
    }

    var _magZoom = 2.5, _magSize = 160, _magEl = null, _magInner = null, _magActive = false;

    function buildShell() {
        var root = document.getElementById('evo-tree-root');
        if (!root) return;
        var bg = root.getAttribute('data-bg') || '';
        root.innerHTML =
            '<div class="evo-tree-wrapper">' +
                '<div class="evo-tree-topbar">' +
                    '<span class="evo-tree-topbar-title">&#9670; Tactical Doctrine</span>' +
                    '<div class="evo-zoom-ctrl">' +
                        '<span class="evo-zoom-label">&#128269; Zoom</span>' +
                        '<span class="evo-zoom-icon" id="evo-zoom-minus">&#8722;</span>' +
                        '<input type="range" class="evo-zoom-slider" id="evo-zoom-slider" min="1.5" max="5" step="0.1" value="2.5">' +
                        '<span class="evo-zoom-icon" id="evo-zoom-plus">&#43;</span>' +
                    '</div>' +
                '</div>' +
                '<div class="evo-tree-canvas" id="evo-tree-canvas">' +
                    '<svg id="evo-tree-svg" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none;overflow:visible;"></svg>' +
                '</div>' +
            '</div>';
        if (bg) document.getElementById('evo-tree-canvas').style.backgroundImage = "url('" + bg + "')";

        var slider = document.getElementById('evo-zoom-slider');
        if (slider) slider.addEventListener('input', function () { _magZoom = parseFloat(this.value); });
        document.getElementById('evo-zoom-minus').addEventListener('click', function () { _magZoom = Math.max(1.5, parseFloat((+_magZoom - 0.25).toFixed(2))); if (slider) slider.value = _magZoom; });
        document.getElementById('evo-zoom-plus').addEventListener('click', function () { _magZoom = Math.min(5, parseFloat((+_magZoom + 0.25).toFixed(2))); if (slider) slider.value = _magZoom; });

        if (!document.getElementById('evo-magnifier')) {
            _magEl = document.createElement('div');
            _magEl.id = 'evo-magnifier';
            _magEl.className = 'evo-magnifier';
            _magEl.style.width  = _magSize + 'px';
            _magEl.style.height = _magSize + 'px';
            _magInner = document.createElement('div');
            _magInner.style.cssText = 'position:absolute;top:0;left:0;transform-origin:0 0;pointer-events:none;';
            _magEl.appendChild(_magInner);
            document.body.appendChild(_magEl);
        }

        var canvas = document.getElementById('evo-tree-canvas');
        if (canvas) {
            canvas.addEventListener('mouseenter', function () { _magActive = true; _magEl.style.display = 'block'; });
            canvas.addEventListener('mouseleave', function () { _magActive = false; _magEl.style.display = 'none'; });
            canvas.addEventListener('mousemove', onMagMove);
        }
    }

    function onMagMove(e) {
        if (!_magActive || !_magEl || !_magInner) return;
        var canvas = document.getElementById('evo-tree-canvas');
        if (!canvas) return;

        var lx = e.clientX + (_magSize / 2 + 16), ly = e.clientY - _magSize / 2;
        if (lx + _magSize > window.innerWidth) lx = e.clientX - (_magSize / 2 + 16) - _magSize;
        if (ly < 0) ly = 0;
        if (ly + _magSize > window.innerHeight) ly = window.innerHeight - _magSize;

        _magEl.style.left = lx + 'px';
        _magEl.style.top  = ly + 'px';

        var rect = canvas.getBoundingClientRect();
        var tx = -(e.clientX - rect.left) * _magZoom + _magSize / 2;
        var ty = -(e.clientY - rect.top) * _magZoom + _magSize / 2;

        _magInner.style.width  = canvas.offsetWidth + 'px';
        _magInner.style.height = canvas.offsetHeight + 'px';
        _magInner.style.background = canvas.style.backgroundImage ? canvas.style.backgroundImage + ' center/cover' : '#050d07';
        _magInner.style.transform = 'scale(' + _magZoom + ') translate(' + (tx / _magZoom) + 'px,' + (ty / _magZoom) + 'px)';

        _syncMagClone(canvas);
    }

    function _syncMagClone(canvas) {
        var ver = parseInt(canvas.getAttribute('data-mag-ver') || '0', 10);
        if (_magInner._ver === ver) return;
        _magInner._ver = ver;

        while (_magInner.firstChild) _magInner.removeChild(_magInner.firstChild);
        var svg = canvas.querySelector('#evo-tree-svg');
        if (svg) {
            var svgClone = svg.cloneNode(true);
            svgClone.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;';
            _magInner.appendChild(svgClone);
        }
        canvas.querySelectorAll('.evo-node,.evo-tier-lbl').forEach(function (el) { _magInner.appendChild(el.cloneNode(true)); });
    }

    var TC  = { 0: '#6b8de3', 1: '#c0c0c0', 2: '#4dd0e1', 3: '#81c784', 4: '#ffb300', 5: '#ce93d8' };
    var TBG = { 0: 'rgba(50,65,170,0.82)', 1: 'rgba(80,80,80,0.72)', 2: 'rgba(20,130,155,0.82)', 3: 'rgba(45,145,60,0.82)', 4: 'rgba(165,110,10,0.82)', 5: 'rgba(120,50,160,0.82)' };

    function getPathLabel(t) { var m = t.match(/,\s*(.+)$/i); return m ? m[1].trim() : ''; }

    function parseUnits() {
        var rows = Array.from(document.querySelectorAll('.unit-row'));
        var root = document.getElementById('evo-tree-root');
        var dataLabels = root ? root.getAttribute('data-labels') : null;
        var pathKeys = [];

        if (dataLabels) {
            pathKeys = dataLabels.split(',').map(function(s) { return s.trim().toLowerCase(); }).filter(function(s) { return s; });
        } else {
            rows.forEach(function (row) {
                if (/\bt-officer\b/.test(row.className)) return;
                var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
                var label = getPathLabel(tierText);
                if (label) {
                    var key = label.toLowerCase();
                    if (pathKeys.indexOf(key) === -1) pathKeys.push(key);
                }
            });
        }
        var numCols = Math.max(1, pathKeys.length);

        return rows.map(function (row) {
            var name = ((row.querySelector('.unit-name') || {}).textContent || '').trim();
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var imgs = row.querySelectorAll('.portrait-container img');
            var cl = row.className;
            
            var tier = /\bt-officer\b/.test(cl) ? 0 : /\bt-1\b/.test(cl) ? 1 : /\bt-2\b/.test(cl) ? 2 : /\bt-3\b/.test(cl) ? 3 : /\bt-4\b/.test(cl) ? 4 : /\bt-5\b/.test(cl) ? 5 : 1;
            var wide = /\bt-wide\b/.test(cl);
            var evoId = row.getAttribute('data-evo-id') || '';
            var evoTo = (row.getAttribute('data-evo-to') || '').trim();

            var pathLabel = getPathLabel(tierText);
            var matchedCols = [];
            
            if (!pathLabel && tier === 0) {
                for (var k = 0; k < numCols; k++) matchedCols.push(k); 
            } else if (!pathLabel) {
                 for (var k = 0; k < numCols; k++) matchedCols.push(k); 
            } else {
                pathKeys.forEach(function(key, idx) {
                    if (pathLabel.toLowerCase().indexOf(key) !== -1) matchedCols.push(idx);
                });
                if (matchedCols.length === 0) { for (var k = 0; k < numCols; k++) matchedCols.push(k); }
            }

            return { 
                name: name, tier: tier, matchedCols: matchedCols, wide: wide,
                evoId: evoId, evoToList: evoTo ? evoTo.split(/\s+/) : [],
                imgSrc: imgs.length > 0 ? imgs[0].getAttribute('src') : '', 
                imgSrc2: imgs.length > 1 ? imgs[1].getAttribute('src') : '', 
                color: TC[tier] || '#5cb88a', bg: TBG[tier] || 'rgba(0,0,0,0.7)' 
            };
        });
    }

    function computeEdges(units) {
        var edges = [];
        var idMap = {};
        var manualMode = false;
        
        units.forEach(function (u, i) { 
            if (u.evoId) { idMap[u.evoId] = i; manualMode = true; } 
        });

        for (var i = 0; i < units.length; i++) {
            var u = units[i];
            if (u.tier === 0) continue; 
            
            if (manualMode) {
                u.evoToList.forEach(function (targetId) {
                    if (idMap[targetId] !== undefined) edges.push([i, idMap[targetId]]);
                });
            } else {
                for (var j = 0; j < units.length; j++) {
                    var v = units[j];
                    if (v.tier !== u.tier + 1) continue;
                    var isConnected = false;
                    for (var m = 0; m < u.matchedCols.length; m++) {
                        if (v.matchedCols.indexOf(u.matchedCols[m]) !== -1) isConnected = true;
                    }
                    if (isConnected) edges.push([i, j]);
                }
            }
        }
        return edges;
    }

    function render() {
        var canvas = document.getElementById('evo-tree-canvas');
        if (!canvas) return;
        var units = parseUnits();
        if (!units.length) return;

        var wrapper = canvas.parentElement;
        var W = Math.max((wrapper ? (wrapper.clientWidth || wrapper.offsetWidth || 0) : 0) || 0, 800);
        
        var root = document.getElementById('evo-tree-root');
        var dataLabels = root ? root.getAttribute('data-labels') : null;
        var pathKeys = dataLabels ? dataLabels.split(',').map(function(s){return s.trim();}) : [];
        if (pathKeys.length === 0) {
            units.forEach(function(u) {
                var label = getPathLabel(document.querySelectorAll('.unit-row')[units.indexOf(u)].querySelector('.unit-tier').textContent);
                if (label && pathKeys.indexOf(label) === -1) pathKeys.push(label);
            });
        }
        var numCols = Math.max(1, pathKeys.length);

        var maxPerSlot = 1;
        var slotCounts = {};
        units.forEach(function(u) {
            var key = u.tier + '_' + u.matchedCols.join(',');
            slotCounts[key] = (slotCounts[key] || 0) + 1;
            if (slotCounts[key] > maxPerSlot) maxPerSlot = slotCounts[key];
        });

        var BASE_ZONE = 240;
        var scale = Math.min(1, W / Math.max(1, numCols * BASE_ZONE * maxPerSlot));
        scale = Math.max(0.45, scale);

        var CARD_H   = Math.round(66 * scale);
        var CARD_GAP = Math.max(6, Math.round(16 * scale));
        var ROW_H    = CARD_H + Math.round(52 * scale);
        var maxTier = Math.max.apply(null, units.map(function (u) { return u.tier; }));
        var PAD_TOP = Math.round(36 * scale), PAD_BOT = Math.round(48 * scale);
        var CANVAS_H = PAD_TOP + (maxTier + 1) * ROW_H + PAD_BOT;

        canvas.style.minHeight = CANVAS_H + 'px';
        canvas.style.width = W + 'px';

        /* INVIOLABLE TIER LABEL SAFE-ZONE */
        var LEFT_GUTTER = Math.max(75, W * 0.08); 
        var RIGHT_GUTTER = W * 0.05;
        var drawW = W - LEFT_GUTTER - RIGHT_GUTTER;
        var zoneW = drawW / numCols;
        
        var colCenters = [];
        for (var i = 0; i < numCols; i++) { 
            colCenters[i] = LEFT_GUTTER + (zoneW * i) + (zoneW / 2); 
        }

        var CARD_W = Math.min(Math.round(220*scale), Math.max(Math.round(100*scale), Math.floor(zoneW - CARD_GAP)));
        var IMG_SZ = CARD_H - 8;

        var positions = units.map(function (unit, idx) {
            var before = units.slice(0, idx).filter(function (v) { return v.tier === unit.tier && v.matchedCols.join(',') === unit.matchedCols.join(','); }).length;
            var total  = units.filter(function (v) { return v.tier === unit.tier && v.matchedCols.join(',') === unit.matchedCols.join(','); }).length;
            
            var avgCX = 0;
            if (unit.matchedCols.length > 0) {
                for (var m = 0; m < unit.matchedCols.length; m++) avgCX += colCenters[unit.matchedCols[m]];
                avgCX /= unit.matchedCols.length;
            } else { avgCX = W * 0.5; }

            /* A wide card gets space for exactly 1 extra square image */
            var cardFinalW = unit.wide ? CARD_W + IMG_SZ + 3 : CARD_W; 
            var slotW  = total * cardFinalW + (total - 1) * CARD_GAP;
            var x  = avgCX - slotW / 2 + before * (cardFinalW + CARD_GAP);
            var y  = PAD_TOP + unit.tier * ROW_H;
            return { x: x, y: y, cx: x + cardFinalW / 2, topY: y, botY: y + CARD_H, cardW: cardFinalW };
        });

        var svg = document.getElementById('evo-tree-svg');
        var edges = computeEdges(units);
        var svgHTML = '';

        if (numCols > 1) {
            pathKeys.forEach(function (label, i) {
                if (!label) return;
                svgHTML += '<text x="' + colCenters[i] + '" y="20" fill="' + TC[2] + '" font-size="' + (12*scale) + 'px" font-family="Segoe UI,sans-serif" text-anchor="middle" font-weight="bold" opacity="0.55" letter-spacing="1">' + label.toUpperCase() + '</text>';
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

        canvas.querySelectorAll('.evo-node,.evo-tier-lbl').forEach(function (n) { n.remove(); });

        units.forEach(function (unit, idx) {
            var pos = positions[idx];
            var d = document.createElement('div');
            d.className = 'evo-node';
            d.style.cssText = 'left:' + pos.x + 'px;top:' + pos.y + 'px;width:' + pos.cardW + 'px;min-height:' + CARD_H + 'px;height:auto;' +
                'border-color:' + unit.color + ';background:' + unit.bg + ';' +
                'box-shadow:0 0 14px ' + unit.color + '44;';

            var imgsHTML = '';
            /* SMART PORTRAIT HANDLING */
            if (unit.wide && !unit.imgSrc2) {
                // Wide class with only ONE image -> Make it a panoramic block
                imgsHTML += '<div class="evo-node-img-wrap" style="width:' + (IMG_SZ * 2 + 3) + 'px;height:' + IMG_SZ + 'px;"><img src="' + unit.imgSrc + '" alt="' + unit.name + '" loading="lazy" onerror="this.style.opacity=0.2"></div>';
            } else {
                // Wide class with TWO images (or normal card) -> Keep them square
                if (unit.imgSrc) imgsHTML += '<div class="evo-node-img-wrap" style="width:' + IMG_SZ + 'px;height:' + IMG_SZ + 'px;"><img src="' + unit.imgSrc + '" alt="' + unit.name + '" loading="lazy" onerror="this.style.opacity=0.2"></div>';
                if (unit.imgSrc2) imgsHTML += '<div class="evo-node-img-wrap" style="width:' + IMG_SZ + 'px;height:' + IMG_SZ + 'px;"><img src="' + unit.imgSrc2 + '" alt="" loading="lazy" onerror="this.style.opacity=0.2"></div>';
            }

            d.innerHTML = '<div class="evo-node-label" style="font-size:'+ Math.max(0.45, 0.68*scale).toFixed(2) +'rem;">' + unit.name + '</div>' + (imgsHTML ? '<div class="evo-node-imgs">' + imgsHTML + '</div>' : '');
            canvas.appendChild(d);
        });

        var TN = { 0: 'Officer', 1: 'Tier I', 2: 'Tier II', 3: 'Tier III', 4: 'Tier IV', 5: 'Tier V' };
        var done = {};
        units.forEach(function (unit) {
            if (!done[unit.tier]) {
                done[unit.tier] = true;
                var lbl = document.createElement('div');
                lbl.className = 'evo-tier-lbl';
                var y = PAD_TOP + unit.tier * ROW_H + CARD_H / 2 - 8;
                lbl.style.cssText = 'position:absolute;left:10px;top:' + y + 'px;color:' + unit.color + ';font-size:' + Math.max(0.38, 0.58*scale).toFixed(2) + 'rem;text-transform:uppercase;letter-spacing:1px;opacity:0.5;font-weight:bold;white-space:nowrap;';
                lbl.textContent = TN[unit.tier] || ('T' + unit.tier);
                canvas.appendChild(lbl);
            }
        });

        var ver = parseInt(canvas.getAttribute('data-mag-ver') || '0', 10);
        canvas.setAttribute('data-mag-ver', ver + 1);
    }

    function init() {
        buildShell();
        render();
        var t;
        function onResize() { clearTimeout(t); t = setTimeout(render, 150); }
        window.addEventListener('resize', onResize);
        if (window.ResizeObserver) { var root = document.getElementById('evo-tree-root'); if (root) new ResizeObserver(onResize).observe(root); }
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
