/* unit-banner.js — Dynamic dual-portrait banner for unit pages.
 * Replaces the static img inside .intro-banner with a side-by-side
 * F (left) / M (right) portrait layout, or a single centred portrait.
 * The unit title is overlaid at the bottom centre.
 *
 * Usage: add  <script src="../../system/unit-banner.js"></script>
 * before </body> on any unit page. No other changes needed.
 */
(function () {
    'use strict';

    /* ── Inject styles once ─────────────────────────────────────────── */
    if (!document.getElementById('unit-banner-style')) {
        var s = document.createElement('style');
        s.id = 'unit-banner-style';
        s.textContent = [
            '.ubanner-root{position:relative;width:100%;height:512px;overflow:hidden;display:flex;background:#000;}',
            '.ubanner-panel{flex:1;position:relative;overflow:hidden;}',
            '.ubanner-panel img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;}',
            /* divider line between panels */
            '.ubanner-panel+.ubanner-panel::before{content:"";position:absolute;top:0;left:0;width:1px;height:100%;background:rgba(255,255,255,0.08);z-index:2;}',
            /* inner fade: left panel fades right edge, right panel fades left edge */
            '.ubanner-panel.ubanner-left::after{content:"";position:absolute;top:0;right:0;width:25%;height:100%;background:linear-gradient(to right,transparent,rgba(0,0,0,0.55));z-index:1;pointer-events:none;}',
            '.ubanner-panel.ubanner-right::after{content:"";position:absolute;top:0;left:0;width:25%;height:100%;background:linear-gradient(to left,transparent,rgba(0,0,0,0.55));z-index:1;pointer-events:none;}',
            /* bottom gradient + title */
            '.ubanner-footer{position:absolute;bottom:0;left:0;width:100%;z-index:4;background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.4) 60%,transparent 100%);padding:18px 20px 14px;box-sizing:border-box;text-align:center;pointer-events:none;}',
            '.ubanner-title{display:inline-block;color:#fff;font-size:1.5rem;font-weight:bold;letter-spacing:4px;text-transform:uppercase;text-shadow:0 0 20px rgba(0,0,0,0.9),0 2px 4px rgba(0,0,0,0.8);}',
            /* solo (single portrait) — full width, image centred with contain */
            '.ubanner-panel.ubanner-solo{flex:1;}',
            '.ubanner-panel.ubanner-solo img{object-fit:contain;object-position:center center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}',
            '.ubanner-panel.ubanner-solo::after{display:none;}',
            /* blurred ambient background for solo mode */
            '.ubanner-solo-bg{position:absolute;top:-5%;left:-5%;width:110%;height:110%;background-size:cover;background-position:center;filter:blur(18px) brightness(0.55) saturate(1.3);z-index:0;}',

        ].join('');
        document.head.appendChild(s);
    }

    /* ── Build the banner ───────────────────────────────────────────── */
    function buildBanner(srcF, srcM) {
        var banner = document.querySelector('.intro-banner');
        if (!banner) return;

        var title = (document.querySelector('h1') || {}).textContent || '';
        var isSolo = !srcM;
        var panels = '';

        if (isSolo) {
            panels =
                '<div class="ubanner-panel ubanner-solo">' +
                    '<div class="ubanner-solo-bg" style="background-image:url(' + srcF + ')"></div>' +
                    '<img src="' + srcF + '" alt="' + title + '">' +
                '</div>';
        } else {
            panels =
                '<div class="ubanner-panel ubanner-left">' +
                    '<img src="' + srcF + '" alt="' + title + ' F">' +
                '</div>' +
                '<div class="ubanner-panel ubanner-right">' +
                    '<img src="' + srcM + '" alt="' + title + ' M">' +
                '</div>';
        }

        banner.innerHTML =
            '<div class="ubanner-root">' +
                panels +
                '<div class="ubanner-footer">' +
                    '<span class="ubanner-title">' + title + '</span>' +
                '</div>' +
            '</div>';
    }

    function preload(src, cb) {
        var img = new Image();
        img.onload  = function () { cb(true);  };
        img.onerror = function () { cb(false); };
        img.src = src;
    }

    /* ── Detect subdirectory from existing <img> tags on the page ───── */
    function detectSubdir() {
        var re = /img\/forgotten\/([^/]+)\//;
        var imgs = document.querySelectorAll('img[src]');
        for (var i = 0; i < imgs.length; i++) {
            var m = re.exec(imgs[i].getAttribute('src'));
            if (m) return m[1] + '/';
        }
        return '';
    }

    function build() {
        var banner = document.querySelector('.intro-banner');
        if (!banner) return;

        /* Derive base portrait path from the current HTML filename
           and the subdirectory detected from other images already in the page.
           e.g. forgotten_frontline_defender.html + arborei/ found in existing imgs
           → ../../img/forgotten/arborei/forgotten_frontline_defender_f_portrait.jpg */
        var page   = location.pathname.split('/').pop().replace('.html', '');
        var subdir = detectSubdir();
        var base   = '../../img/forgotten/' + subdir;
        var srcF      = base + page + '_f_portrait.jpg';
        var srcM      = base + page + '_m_portrait.jpg';
        var srcSingle = base + page + '_portrait.jpg';

        preload(srcF, function (okF) {
            if (!okF) {
                /* No _f_ variant — try plain _portrait */
                preload(srcSingle, function (okS) {
                    if (okS) buildBanner(srcSingle, '');
                });
                return;
            }
            preload(srcM, function (okM) {
                buildBanner(srcF, okM ? srcM : '');
            });
        });
    }

    /* ── Boot ───────────────────────────────────────────────────────── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();
