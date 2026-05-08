/* evo-tree.js — Dynamic evolution tree, shared across all order pages.
 *
 * Usage:
 *   <div id="evo-tree-root" data-bg="optional/bg/image.png"></div>
 *   then include this script.
 *
 * Path columns:
 *   Add  ", Path Name"  at the end of the .unit-tier text to assign a unit to a
 *   named column (e.g. "Tier 2 , Defender Path").  Units with no path label are
 *   placed in a shared central column.  Any number of distinct path names is
 *   supported — columns are distributed evenly across the canvas width.
 *
 * Wide units (occupy 2 column-slots horizontally):
 *   Add the class  t-wide  to the .unit-row element.
 *
 * Manual edges:
 *   By default edges are computed automatically from tiers and path columns.
 *   To override, add  data-evo-id  and  data-evo-to  attributes to .unit-row:
 *     data-evo-id="squire"              — unique identifier for this unit
 *     data-evo-to="knight witch-hunter" — space-separated list of target IDs
 *   As soon as ANY unit-row in the page has data-evo-id, the script switches
 *   to fully manual mode and ignores the auto-detection logic entirely.
 *   Units without data-evo-to simply have no outgoing arrows.
 */
(function () {
    'use strict';

    /* ── Inject styles once ───────────────────────────────────────────── */
    if (!document.getElementById('evo-tree-style')) {
        var s = document.createElement('style');
        s.id = 'evo-tree-style';
        s.textContent = [
            '.evo-tree-wrapper{width:100%;margin-bottom:60px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;overflow-x:auto;overflow-y:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.6);}',
            '.evo-tree-topbar{display:flex;align-items:center;gap:14px;padding:10px 16px;background:rgba(0,0,0,0.5);border-bottom:1px solid rgba(255,255,255,0.08);}',
            '.evo-tree-topbar-title{color:#5cb88a;font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;font-weight:bold;flex:1;}',
            /* zoom controls */
            '.evo-zoom-ctrl{display:flex;align-items:center;gap:8px;user-select:none;}',
            '.evo-zoom-icon{font-size:0.75rem;color:rgba(255,255,255,0.4);cursor:pointer;transition:color 0.2s;}',
            '.evo-zoom-icon:hover{color:#5cb88a;}',
            '.evo-zoom-label{font-size:0.65rem;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:1px;white-space:nowrap;}',
            '.evo-zoom-slider{-webkit-appearance:none;appearance:none;width:80px;height:3px;background:rgba(255,255,255,0.15);border-radius:2px;outline:none;cursor:pointer;}',
            '.evo-zoom-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:11px;height:11px;border-radius:50%;background:#5cb88a;cursor:pointer;box-shadow:0 0 5px #5cb88a88;}',
            '.evo-zoom-slider::-moz-range-thumb{width:11px;height:11px;border-radius:50%;background:#5cb88a;cursor:pointer;border:none;box-shadow:0 0 5px #5cb88a88;}',
            /* canvas */
            '.evo-tree-canvas{position:relative;width:100%;overflow:hidden;background:#050d07;background-size:cover;background-position:center;}',
            /* magnifier lens */
            '.evo-magnifier{position:fixed;pointer-events:none;border-radius:50%;border:2px solid rgba(92,184,138,0.6);box-shadow:0 0 0 1px rgba(0,0,0,0.5),0 4px 24px rgba(0,0,0,0.8);overflow:hidden;z-index:9999;display:none;background:#050d07;}',
            '.evo-magnifier canvas{position:absolute;top:0;left:0;}',
            /* horizontal card node */
            '.evo-node{position:absolute;display:flex;align-items:center;border-radius:5px;border:2px solid;z-index:2;box-sizing:border-box;overflow:hidden;cursor:default;}',
            '.evo-node-label{flex:1;min-width:0;padding:0 10px;color:#fff;font-size:0.68rem;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.2;}',
            '.evo-node-imgs{display:flex;gap:3px;padding:4px 4px 4px 0;flex-shrink:0;}',
            '.evo-node-img-wrap{position:relative;overflow:hidden;border-radius:3px;border:1px solid rgba(255,255,255,0.25);flex-shrink:0;}',
            '.evo-node-img-wrap img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}',
        ].join('');
        document.head.appendChild(s);
    }

    /* ── Magnifier state ──────────────────────────────────────────────── */
    var _magZoom = 2.5;
    var _magSize = 160;
    var _magEl   = null;
    var _magInner = null;
    var _magActive = false;

    /* ── Build wrapper HTML inside #evo-tree-root ─────────────────────── */
    function buildShell() {
        var root = document.getElementById('evo-tree-root');
        if (!root) return;
        var bg = root.getAttribute('data-bg') || '';
        root.innerHTML =
            '<div class="evo-tree-wrapper">' +
                '<div class="evo-tree-topbar">' +
                    '<span class="evo-tree-topbar-title">&#9670; Evolution Path</span>' +
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
        var btnM   = document.getElementById('evo-zoom-minus');
        var btnP   = document.getElementById('evo-zoom-plus');
        if (slider) slider.addEventListener('input', function () { _magZoom = parseFloat(this.value); });
        if (btnM)   btnM.addEventListener('click',  function () { _magZoom = Math.max(1.5, parseFloat((+_magZoom - 0.25).toFixed(2))); if (slider) slider.value = _magZoom; });
        if (btnP)   btnP.addEventListener('click',  function () { _magZoom = Math.min(5,   parseFloat((+_magZoom + 0.25).toFixed(2))); if (slider) slider.value = _magZoom; });

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
            canvas.addEventListener('mouseenter', function () { _magActive = true;  _magEl.style.display = 'block'; });
            canvas.addEventListener('mouseleave', function () { _magActive = false; _magEl.style.display = 'none';  });
            canvas.addEventListener('mousemove', onMagMove);
        }
    }

    /* ── Magnifier move handler ───────────────────────────────────────── */
    function onMagMove(e) {
        if (!_magActive || !_magEl || !_magInner) return;
        var canvas = document.getElementById('evo-tree-canvas');
        if (!canvas) return;

        var offset = _magSize / 2 + 16;
        var lx = e.clientX + offset;
        var ly = e.clientY - _magSize / 2;
        if (lx + _magSize > window.innerWidth)  lx = e.clientX - offset - _magSize;
        if (ly < 0)                              ly = 0;
        if (ly + _magSize > window.innerHeight)  ly = window.innerHeight - _magSize;
        _magEl.style.left = lx + 'px';
        _magEl.style.top  = ly + 'px';

        var rect = canvas.getBoundingClientRect();
        var mx   = e.clientX - rect.left;
        var my   = e.clientY - rect.top;
        var tx = -mx * _magZoom + _magSize / 2;
        var ty = -my * _magZoom + _magSize / 2;

        var W = canvas.offsetWidth;
        var H = canvas.offsetHeight;
        _magInner.style.width  = W + 'px';
        _magInner.style.height = H + 'px';
        _magInner.style.background = canvas.style.backgroundImage
            ? canvas.style.backgroundImage + ' center/cover' : '#050d07';
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
            svgClone.style.position = 'absolute';
            svgClone.style.top = '0';
            svgClone.style.left = '0';
            svgClone.style.pointerEvents = 'none';
            _magInner.appendChild(svgClone);
        }
        canvas.querySelectorAll('.evo-node,.evo-tier-lbl').forEach(function (el) {
            _magInner.appendChild(el.cloneNode(true));
        });
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

        /* First pass: collect distinct named path labels in order of appearance.
         * A label only qualifies as a named column if it appears in ≥ 2 units —
         * this filters out one-off tier descriptors like "Champion" that are
         * written with a comma (e.g. "Tier 5 , Champion") but are NOT real paths. */
        var labelCount = {}; /* lowercase label → count */
        rows.forEach(function (row) {
            if (/\bt-officer\b/.test(row.className)) return;
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var label = getPathLabel(tierText);
            if (label) {
                var key = label.toLowerCase();
                labelCount[key] = (labelCount[key] || 0) + 1;
            }
        });
        var pathKeys = []; /* ordered list of lowercase path key strings (≥ 2 units) */
        rows.forEach(function (row) {
            if (/\bt-officer\b/.test(row.className)) return;
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var label = getPathLabel(tierText);
            if (label) {
                var key = label.toLowerCase();
                if ((labelCount[key] || 0) >= 2 && pathKeys.indexOf(key) === -1)
                    pathKeys.push(key);
            }
        });

        /* Second pass: build unit objects. */
        return rows.map(function (row) {
            var name = ((row.querySelector('.unit-name') || {}).textContent || '').trim();
            var tierText = ((row.querySelector('.unit-tier') || {}).textContent || '').trim();
            var imgs = row.querySelectorAll('.portrait-container img');
            var imgSrc  = imgs.length > 0 ? (imgs[0].getAttribute('src') || '') : '';
            var imgSrc2 = imgs.length > 1 ? (imgs[1].getAttribute('src') || '') : '';
            var cl = row.className;

            var tier;
            if      (/\bt-officer\b/.test(cl)) tier = 0;
            else if (/\bt-1\b/.test(cl))       tier = 1;
            else if (/\bt-2\b/.test(cl))       tier = 2;
            else if (/\bt-3\b/.test(cl))       tier = 3;
            else if (/\bt-4\b/.test(cl))       tier = 4;
            else if (/\bt-5\b/.test(cl))       tier = 5;
            else                                tier = 1;

            /* t-wide class → unit occupies 2 horizontal slots */
            var wide = /\bt-wide\b/.test(cl);

            /* manual edge identifiers */
            var evoId = row.getAttribute('data-evo-id') || '';
            var evoTo = (row.getAttribute('data-evo-to') || '').trim();
            var evoToList = evoTo ? evoTo.split(/\s+/) : [];

            var color = TC[tier] || '#5cb88a';
            var bg    = TBG[tier] || 'rgba(0,0,0,0.7)';

            var pathLabel = (tier === 0) ? '' : getPathLabel(tierText);
            /* pathIndex: -1 = no named path (center / shared) */
            var pathIndex = pathLabel ? pathKeys.indexOf(pathLabel.toLowerCase()) : -1;

            return { name: name, tier: tier, pathLabel: pathLabel, pathIndex: pathIndex,
                     imgSrc: imgSrc, imgSrc2: imgSrc2, color: color, bg: bg, wide: wide,
                     evoId: evoId, evoToList: evoToList };
        });
    }

    /* ── Compute which units evolve into which ───────────────────────── */
    /*
     * Manual mode: activated when ANY unit-row has a data-evo-id attribute.
     *   Edges come exclusively from data-evo-to lists on source units.
     *
     * Auto mode (fallback): tier-based rules —
     *   Officer (tier 0) has no outgoing arrows.
     *   Units connect T → T+1 unless they belong to different named paths.
     */
    function computeEdges(units) {
        var edges = [];

        /* Build id → index map (used only when at least one unit has evoId) */
        var idMap = {};
        units.forEach(function (u, i) { if (u.evoId) idMap[u.evoId] = i; });

        for (var i = 0; i < units.length; i++) {
            var u = units[i];
            if (u.tier === 0) continue; /* officers never emit edges */

            if (u.evoToList.length > 0) {
                /* Manual override: use explicitly declared targets */
                u.evoToList.forEach(function (targetId) {
                    if (idMap[targetId] !== undefined) edges.push([i, idMap[targetId]]);
                });
            } else {
                /* Auto mode for this unit: connect to all tier+1 units on same/unspecified path */
                for (var j = 0; j < units.length; j++) {
                    var v = units[j];
                    if (v.tier !== u.tier + 1) continue;
                    if (u.pathIndex !== -1 && v.pathIndex !== -1 && u.pathIndex !== v.pathIndex) continue;
                    edges.push([i, j]);
                }
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

        var wrapper = canvas.parentElement;
        var W = Math.max((wrapper ? (wrapper.clientWidth || wrapper.offsetWidth || 0) : 0) || 0, 200);
        canvas.style.width    = W + 'px';
        canvas.style.minWidth = '';

        var PAD_SIDE = 8;
        var maxTier  = Math.max.apply(null, units.map(function (u) { return u.tier; }));

        /* ── Collect all distinct named paths in appearance order ──────── */
        var pathKeys = [];
        units.forEach(function (u) {
            if (u.pathIndex !== -1 && pathKeys.indexOf(u.pathIndex) === -1)
                pathKeys.push(u.pathIndex);
        });
        var numPaths = pathKeys.length;
        var hasPaths = numPaths > 0;

        /* ── Early maxPerSlot (needed for scale) ──────────────────────── */
        var maxPerSlot = 1;
        for (var t = 0; t <= maxTier; t++) {
            pathKeys.forEach(function (pi) {
                var c = units.filter(function (u) { return u.tier === t && u.pathIndex === pi && !u.wide; }).length;
                if (c > maxPerSlot) maxPerSlot = c;
            });
            var cu = units.filter(function (u) { return u.tier === t && u.pathIndex === -1 && !u.wide; }).length;
            if (cu > maxPerSlot) maxPerSlot = cu;
        }

        /* ── Scale: fit everything into W without scrolling ───────────── */
        var BASE_ZONE = 240; /* comfortable px per path column per card slot */
        var scale = Math.min(1, W / Math.max(1, (hasPaths ? numPaths : 1) * BASE_ZONE * maxPerSlot));
        scale = Math.max(0.35, scale);

        var CARD_H   = Math.round(66 * scale);
        var CARD_GAP = Math.max(6, Math.round(16 * scale));  /* gap between cards in same slot */
        var COL_GAP  = Math.max(8, Math.round(24 * scale));  /* extra padding between columns */
        var ROW_H    = CARD_H + Math.round(52 * scale);
        var PAD_TOP  = Math.round(36 * scale);
        var PAD_BOT  = Math.round(48 * scale);
        var CANVAS_H = PAD_TOP + (maxTier + 1) * ROW_H + PAD_BOT;

        canvas.style.minHeight = CANVAS_H + 'px';

        function colCX(pathIndex) {
            if (!hasPaths || pathIndex === -1) return W / 2;
            /* Rank of this pathIndex among all named paths */
            var rank = pathKeys.indexOf(pathIndex);
            if (rank === -1) return W / 2;
            /* Evenly spaced: zone width = (W - 2*PAD_SIDE) / numPaths */
            var zoneW = (W - 2 * PAD_SIDE) / numPaths;
            return PAD_SIDE + zoneW * rank + zoneW / 2;
        }

        /* ── Card width ───────────────────────────────────────────────── */
        var zoneW_card = hasPaths ? (W - 2 * PAD_SIDE) / numPaths - COL_GAP : W * 0.65;
        var CARD_W = Math.min(Math.round(240 * scale), Math.max(Math.round(60 * scale), Math.floor((zoneW_card - (maxPerSlot - 1) * CARD_GAP) / maxPerSlot)));
        var IMG_SZ = CARD_H - 8;

        /* ── Compute positions ────────────────────────────────────────── */
        var positions = units.map(function (unit, idx) {
            var y = PAD_TOP + unit.tier * ROW_H;

            /* Wide unit: card grows only by the extra image width; label area unchanged. */
            if (unit.wide) {
                var wideW  = CARD_W + IMG_SZ; /* normal label area + double-wide portrait */
                var zoneCX = (unit.pathIndex !== -1) ? colCX(unit.pathIndex) : W / 2;
                var x  = zoneCX - wideW / 2;
                var cx = zoneCX;
                return { x: x, y: y, cx: cx, topY: y, botY: y + CARD_H, cardW: wideW };
            }

            /* Normal unit */
            var before = units.slice(0, idx).filter(function (v) { return v.tier === unit.tier && v.pathIndex === unit.pathIndex && !v.wide; }).length;
            var total  = units.filter(function (v) { return v.tier === unit.tier && v.pathIndex === unit.pathIndex && !v.wide; }).length;
            var slotW  = total * CARD_W + (total - 1) * CARD_GAP;
            var cx = colCX(unit.pathIndex);
            var x  = cx - slotW / 2 + before * (CARD_W + CARD_GAP);
            return { x: x, y: y, cx: x + CARD_W / 2, topY: y, botY: y + CARD_H, cardW: CARD_W };
        });

        /* ── SVG: column labels + edges ───────────────────────────────── */
        var svg = document.getElementById('evo-tree-svg');
        var edges = computeEdges(units);
        var svgHTML = '';

        /* Column header labels */
        if (hasPaths) {
            /* Collect first label+color per pathIndex */
            var colMeta = {};
            units.forEach(function (u) {
                if (u.pathIndex !== -1 && u.pathLabel && !colMeta[u.pathIndex])
                    colMeta[u.pathIndex] = { label: u.pathLabel, color: u.color };
            });
            Object.keys(colMeta).forEach(function (pi) {
                var m = colMeta[pi];
                svgHTML += '<text x="' + colCX(parseInt(pi, 10)) + '" y="20" fill="' + m.color + '" font-size="10" font-family="Segoe UI,sans-serif" text-anchor="middle" font-weight="bold" opacity="0.55" letter-spacing="1">' + m.label.toUpperCase() + '</text>';
            });
        }

        /* Edge arrows */
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
        svg.style.width  = W + 'px';
        svg.style.height = CANVAS_H + 'px';

        /* ── Remove old nodes ─────────────────────────────────────────── */
        canvas.querySelectorAll('.evo-node,.evo-tier-lbl').forEach(function (n) { n.remove(); });

        /* ── Render card nodes ────────────────────────────────────────── */
        units.forEach(function (unit, idx) {
            var pos = positions[idx];
            var cw  = pos.cardW;
            /* Wide cards: portrait is landscape (double width, same height as normal) */
            var imgW = unit.wide ? IMG_SZ * 2 : IMG_SZ;
            var imgH = IMG_SZ;
            var labelFs = Math.max(0.45, 0.68 * scale).toFixed(2);
            var d = document.createElement('div');
            d.className = 'evo-node';
            d.style.cssText = 'left:' + pos.x + 'px;top:' + pos.y + 'px;width:' + cw + 'px;min-height:' + CARD_H + 'px;height:auto;' +
                'border-color:' + unit.color + ';background:' + unit.bg + ';' +
                'box-shadow:0 0 14px ' + unit.color + '44;';

            var imgsHTML = '';
            if (unit.imgSrc) {
                imgsHTML += '<div class="evo-node-img-wrap" style="width:' + imgW + 'px;height:' + imgH + 'px;">' +
                    '<img src="' + unit.imgSrc + '" alt="' + unit.name + '" loading="lazy" onerror="this.style.opacity=0.2">' +
                    '</div>';
            }
            if (unit.imgSrc2) {
                imgsHTML += '<div class="evo-node-img-wrap" style="width:' + imgW + 'px;height:' + imgH + 'px;">' +
                    '<img src="' + unit.imgSrc2 + '" alt="" loading="lazy" onerror="this.style.opacity=0.2">' +
                    '</div>';
            }

            d.innerHTML =
                '<div class="evo-node-label" style="font-size:' + labelFs + 'rem;">' + unit.name + '</div>' +
                (imgsHTML ? '<div class="evo-node-imgs">' + imgsHTML + '</div>' : '');

            canvas.appendChild(d);
        });

        /* ── Tier labels on left edge ─────────────────────────────────── */
        var TN = { 0: 'Officer', 1: 'Tier I', 2: 'Tier II', 3: 'Tier III', 4: 'Tier IV', 5: 'Tier V' };
        var done = {};
        units.forEach(function (unit) {
            if (!done[unit.tier]) {
                done[unit.tier] = true;
                var lbl = document.createElement('div');
                lbl.className = 'evo-tier-lbl';
                var y = PAD_TOP + unit.tier * ROW_H + CARD_H / 2 - 8;
                lbl.style.cssText = 'position:absolute;left:5px;top:' + y + 'px;color:' + unit.color + ';font-size:' + Math.max(0.38, 0.58 * scale).toFixed(2) + 'rem;text-transform:uppercase;letter-spacing:1px;opacity:0.5;font-weight:bold;white-space:nowrap;';
                lbl.textContent = TN[unit.tier] || ('T' + unit.tier);
                canvas.appendChild(lbl);
            }
        });

        /* Signal magnifier clone to refresh */
        var ver = parseInt(canvas.getAttribute('data-mag-ver') || '0', 10);
        canvas.setAttribute('data-mag-ver', ver + 1);
    }

    /* ── Boot ─────────────────────────────────────────────────────────── */
    function init() {
        buildShell();
        render();
        var t;
        function onResize() { clearTimeout(t); t = setTimeout(render, 150); }
        window.addEventListener('resize', onResize);
        if (window.ResizeObserver) {
            var root = document.getElementById('evo-tree-root');
            if (root) new ResizeObserver(onResize).observe(root);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
