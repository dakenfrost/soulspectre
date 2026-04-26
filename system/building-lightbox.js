/* building-lightbox.js
 * Reusable image lightbox for building cards.
 *
 * Usage:
 *   1. Add CSS class  "building-img"  to every thumbnail <img> you want zoomable.
 *   2. The script reads the building name from the nearest  .building-name  element
 *      inside the same  .building-card  parent (optional — caption is skipped if absent).
 *   3. Include this script once at the bottom of any buildings page:
 *        <script src="../system/building-lightbox.js"></script>
 *
 *   The script injects its own overlay markup and CSS automatically.
 *   No external dependencies, no frameworks.
 */
(function () {
    'use strict';

    /* ── Inject styles ─────────────────────────────────────────────────── */
    if (!document.getElementById('bld-lightbox-style')) {
        var style = document.createElement('style');
        style.id = 'bld-lightbox-style';
        style.textContent = [
            '#bld-lightbox{',
                'display:none;position:fixed;inset:0;',
                'background:rgba(0,0,0,0.88);',
                'z-index:10000;',
                'align-items:center;justify-content:center;',
                'cursor:zoom-out;',
            '}',
            '#bld-lightbox.active{display:flex;}',
            '#bld-lightbox img{',
                'max-width:88vw;max-height:82vh;',
                'border-radius:6px;',
                'border:1px solid rgba(92,184,138,0.35);',
                'box-shadow:0 0 60px rgba(0,0,0,0.9),0 0 20px rgba(92,184,138,0.15);',
                'pointer-events:none;',
            '}',
            '#bld-lightbox-caption{',
                'position:absolute;bottom:28px;left:50%;transform:translateX(-50%);',
                'color:#5cb88a;font-size:0.85rem;letter-spacing:2px;',
                'text-transform:uppercase;',
                'text-shadow:0 0 8px rgba(0,0,0,0.8);',
                'pointer-events:none;white-space:nowrap;',
            '}',
            '.building-img{cursor:zoom-in;transition:border-color 0.2s;}',
            '.building-img:hover{border-color:rgba(92,184,138,0.7)!important;}',
        ].join('');
        document.head.appendChild(style);
    }

    /* ── Inject overlay markup ─────────────────────────────────────────── */
    if (!document.getElementById('bld-lightbox')) {
        var overlay = document.createElement('div');
        overlay.id = 'bld-lightbox';
        overlay.innerHTML =
            '<img id="bld-lightbox-img" src="" alt="">' +
            '<span id="bld-lightbox-caption"></span>';
        document.body.appendChild(overlay);
    }

    /* ── Wire up ────────────────────────────────────────────────────────── */
    function init() {
        var lb    = document.getElementById('bld-lightbox');
        var lbImg = document.getElementById('bld-lightbox-img');
        var lbCap = document.getElementById('bld-lightbox-caption');

        document.querySelectorAll('.building-img').forEach(function (img) {
            img.addEventListener('click', function (e) {
                e.stopPropagation();
                lbImg.src = this.src;
                lbImg.alt = this.alt;
                var card = this.closest('.building-card');
                var nameEl = card ? card.querySelector('.building-name') : null;
                lbCap.textContent = nameEl ? nameEl.textContent : '';
                lb.classList.add('active');
            });
        });

        lb.addEventListener('click', function () {
            lb.classList.remove('active');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') lb.classList.remove('active');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
