function getNavTemplate(base) {
    return `
<nav class="global-nav">
    <button class="menu-toggle" id="menu-btn">&#9776;</button>
    <a href="${base}index.html" class="nav-logo-container">
        <img src="${base}img/logo.png" alt="SOULSPECTRE LOGO">
    </a>
</nav>

<div class="sidebar-overlay" id="sidebar-overlay"></div>

<aside class="sidebar" id="sidebar">
    <button class="close-sidebar" id="close-btn">&times;</button>
    <div class="nav-search-wrap">
        <input type="search" id="nav-search" class="nav-search-input" placeholder="Search..." autocomplete="off" spellcheck="false">
    </div>
    <div class="sidebar-scroll">
    <a href="${base}index.html" class="direct-link">Main Hub</a>

    <button class="accordion-btn">Gameplay <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <a href="${base}gameplay/basics.html" class="inner-link">Core Rules</a>
        <a href="${base}gameplay/cities.html" class="inner-link">Cities Mechanics</a>
        <a href="${base}gameplay/map_resources.html" class="inner-link">Map And Resources</a>
        <a href="${base}gameplay/officers.html" class="inner-link">Officers and Parties</a>
        <a href="${base}gameplay/progression.html" class="inner-link">Characters Progression</a>
    </div>

    <button class="accordion-btn">Factions <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <div class="sub-faction-row">
            <a href="${base}factions/valkyrion.html" class="inner-link" style="color: #5c9ce6;">Valkyrion Empire</a>
            <button class="sub-toggle" aria-label="expand branches">▶</button>
        </div>
        <div class="sub-accordion-content">
            <div class="branch-row">
                <a href="${base}factions/valkyrion_lore.html" class="menu-link" style="color: #b0bec5">Lore</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/valkyrion_culture.html" class="menu-link" style="color: #4db6ac">Culture</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/valkyrion_leader.html" class="menu-link" style="color: #d4af37">Leader</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/valkyrion_roster.html" class="menu-link" style="color: #ef5350">Unit</a>
                <button class="branch-toggle" aria-label="expand faction menu">▶</button>
            </div>
                <div class="sub-accordion-content">
                    <div class="branch-row">
                        <a href="${base}units/valkyrion/valkyrion_order_sword.html" class="branch-unit-link">Order of the Sword<span class="branch-role role-melee">Melee</span></a>
                        <button class="branch-toggle" aria-label="expand units">▶</button>
                    </div>
                    <div class="unit-accordion-content">
                        <a href="${base}units/valkyrion/valkyrion_hero.html" class="unit-link">Hero</a>
                        <a href="${base}units/valkyrion/valkyrion_squire.html" class="unit-link">Squire</a>
                        <a href="${base}units/valkyrion/valkyrion_knight.html" class="unit-link">Knight</a>
                        <a href="${base}units/valkyrion/valkyrion_witch_hunter.html" class="unit-link">Witch Hunter</a>
                        <a href="${base}units/valkyrion/valkyrion_crusader.html" class="unit-link">Crusader</a>
                        <a href="${base}units/valkyrion/valkyrion_paladin.html" class="unit-link">Paladin</a>
                        <a href="${base}units/valkyrion/valkyrion_monster_hunter.html" class="unit-link">Monster Hunter</a>
                        <a href="${base}units/valkyrion/valkyrion_holy_avenger.html" class="unit-link">Holy Avenger</a>
                        <a href="${base}units/valkyrion/valkyrion_guardian.html" class="unit-link">Guardian</a>
                        <a href="${base}units/valkyrion/valkyrion_inquisitor.html" class="unit-link">Inquisitor</a>
                        <a href="${base}units/valkyrion/valkyrion_knight_of_dusk.html" class="unit-link">Knight of Dusk</a>
                    </div>
                    <div class="branch-row">
                        <a href="${base}units/valkyrion/valkyrion_order_light.html" class="branch-unit-link">Order of Light<span class="branch-role role-support">Support</span></a>
                        <button class="branch-toggle" aria-label="expand units">▶</button>
                    </div>
                    <div class="unit-accordion-content">
                        <a href="${base}units/valkyrion/valkyrion_chaplain.html" class="unit-link">Chaplain</a>
                        <a href="${base}units/valkyrion/valkyrion_acolyte.html" class="unit-link">Acolyte</a>
                        <a href="${base}units/valkyrion/valkyrion_priest.html" class="unit-link">Priest</a>
                        <a href="${base}units/valkyrion/valkyrion_seer.html" class="unit-link">Seer</a>
                        <a href="${base}units/valkyrion/valkyrion_bishop.html" class="unit-link">Bishop</a>
                        <a href="${base}units/valkyrion/valkyrion_exorcist.html" class="unit-link">Exorcist</a>
                        <a href="${base}units/valkyrion/valkyrion_oracle.html" class="unit-link">Oracle</a>
                        <a href="${base}units/valkyrion/valkyrion_primarch.html" class="unit-link">Primarch</a>
                        <a href="${base}units/valkyrion/valkyrion_abolisher.html" class="unit-link">Abolisher</a>
                        <a href="${base}units/valkyrion/valkyrion_herald.html" class="unit-link">Herald</a>
                        <a href="${base}units/valkyrion/valkyrion_angel.html" class="unit-link">Angel</a>
                    </div>
                    <div class="branch-row">
                        <a href="${base}units/valkyrion/valkyrion_order_knowledge.html" class="branch-unit-link">Order of Knowledge<span class="branch-role role-mage">Mage</span></a>
                        <button class="branch-toggle" aria-label="expand units">▶</button>
                    </div>
                    <div class="unit-accordion-content">
                        <a href="${base}units/valkyrion/valkyrion_summoner.html" class="unit-link">Summoner</a>
                        <a href="${base}units/valkyrion/valkyrion_apprentice.html" class="unit-link">Apprentice</a>
                        <a href="${base}units/valkyrion/valkyrion_glossant.html" class="unit-link">Glossant</a>
                        <a href="${base}units/valkyrion/valkyrion_mage.html" class="unit-link">Mage</a>
                        <a href="${base}units/valkyrion/valkyrion_witch.html" class="unit-link">Witch</a>
                        <a href="${base}units/valkyrion/valkyrion_prescient.html" class="unit-link">Prescient</a>
                        <a href="${base}units/valkyrion/valkyrion_wizard.html" class="unit-link">Wizard</a>
                        <a href="${base}units/valkyrion/valkyrion_sorceress.html" class="unit-link">Sorceress</a>
                        <a href="${base}units/valkyrion/valkyrion_strategist.html" class="unit-link">Strategist</a>
                        <a href="${base}units/valkyrion/valkyrion_retaliator.html" class="unit-link">Retaliator</a>
                        <a href="${base}units/valkyrion/valkyrion_thaumaturge.html" class="unit-link">Thaumaturge</a>
                        <a href="${base}units/valkyrion/valkyrion_hexarch.html" class="unit-link">Hexarch</a>
                        <a href="${base}units/valkyrion/valkyrion_enlightened.html" class="unit-link">Enlightened</a>
                        <a href="${base}units/valkyrion/valkyrion_vindicator.html" class="unit-link">Vindicator</a>
                        <a href="${base}units/valkyrion/valkyrion_magus.html" class="unit-link">Magus</a>
                        <a href="${base}units/valkyrion/valkyrion_archon.html" class="unit-link">Archon</a>
                    </div>
                    <div class="branch-row">
                        <a href="${base}units/valkyrion/valkyrion_order_engineering.html" class="branch-unit-link">Order of Engineering<span class="branch-role role-ranged">Ranged</span></a>
                        <button class="branch-toggle" aria-label="expand units">▶</button>
                    </div>
                    <div class="unit-accordion-content">
                        <a href="${base}units/valkyrion/valkyrion_ranger.html" class="unit-link">Ranger</a>
                        <a href="${base}units/valkyrion/valkyrion_archer.html" class="unit-link">Archer</a>
                        <a href="${base}units/valkyrion/valkyrion_crossbowman.html" class="unit-link">Crossbowman</a>
                        <a href="${base}units/valkyrion/valkyrion_arbalester.html" class="unit-link">Arbalester</a>
                        <a href="${base}units/valkyrion/valkyrion_marksman.html" class="unit-link">Marksman</a>
                        <a href="${base}units/valkyrion/valkyrion_engineer.html" class="unit-link">Engineer</a>
                        <a href="${base}units/valkyrion/valkyrion_sharpshooter.html" class="unit-link">Sharpshooter</a>
                        <a href="${base}units/valkyrion/valkyrion_dragoon.html" class="unit-link">Dragoon</a>
                    </div>
                    <a href="${base}units/valkyrion/valkyrion_extra.html" class="branch-unit-link">Others</a>
                </div>
            <div class="branch-row">
                <a href="${base}factions/valkyrion_spells.html" class="menu-link" style="color: #ab47bc">Spell</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/valkyrion_buildings.html" class="menu-link" style="color: #f57c00">Buildings</a>
            </div>
        </div>

        <div class="sub-faction-row">
            <a href="${base}factions/forgotten.html" class="inner-link" style="color: #5cb88a;">The Forgotten</a>
            <button class="sub-toggle" aria-label="expand branches">▶</button>
        </div>
        <div class="sub-accordion-content">
            <div class="branch-row">
                <a href="${base}factions/forgotten_lore.html" class="menu-link" style="color: #b0bec5">Lore</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/forgotten_culture.html" class="menu-link" style="color: #4db6ac">Culture</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/forgotten_leader.html" class="menu-link" style="color: #d4af37">Leader</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/forgotten_roster.html" class="menu-link" style="color: #ef5350">Unit</a>
                <button class="branch-toggle" aria-label="expand faction menu">▶</button>
            </div>
            <div class="sub-accordion-content">
                <div class="branch-row">
                    <a href="${base}units/forgotten/forgotten_order_arborei.html" class="branch-unit-link">Arboreal Fighters<span class="branch-role role-melee">Melee</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/forgotten/forgotten_patrol.html" class="unit-link">Patrol</a>
                    <a href="${base}units/forgotten/forgotten_ethereal_swordsman.html" class="unit-link">Ashblade</a>
                    <a href="${base}units/forgotten/forgotten_frontline_defender.html" class="unit-link">Thornguard</a>
                    <a href="${base}units/forgotten/forgotten_shadow_combatant.html" class="unit-link">Duskblade</a>
                    <a href="${base}units/forgotten/forgotten_squire_homeland.html" class="unit-link">Skyguard</a>
                    <a href="${base}units/forgotten/forgotten_assassin_trees.html" class="unit-link">Thornwalker</a>
                    <a href="${base}units/forgotten/forgotten_valkyrie_defender.html" class="unit-link">Iron Valkyrie</a>
                    <a href="${base}units/forgotten/forgotten_elf_assassin.html" class="unit-link">Bladeclaw</a>
                    <a href="${base}units/forgotten/forgotten_assassin_defender.html" class="unit-link">Warden</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/forgotten/forgotten_order_linfa.html" class="branch-unit-link">Shadows of the Sap<span class="branch-role role-support">Support</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/forgotten/forgotten_priestess.html" class="unit-link">Priestess</a>
                    <a href="${base}units/forgotten/forgotten_wisps.html" class="unit-link">Wisps</a>
                    <a href="${base}units/forgotten/forgotten_spirit_guide.html" class="unit-link">Spirit Guide</a>
                    <a href="${base}units/forgotten/forgotten_inherited.html" class="unit-link">Inherited</a>
                    <a href="${base}units/forgotten/forgotten_vestal.html" class="unit-link">Vestal</a>
                    <a href="${base}units/forgotten/forgotten_herbalist.html" class="unit-link">Herbalist</a>
                    <a href="${base}units/forgotten/forgotten_valkyrie_guardian.html" class="unit-link">Valkyrie Guardian</a>
                    <a href="${base}units/forgotten/forgotten_elf_alchemist.html" class="unit-link">Elf Alchemist</a>
                    <a href="${base}units/forgotten/forgotten_emissary.html" class="unit-link">Emissary</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/forgotten/forgotten_order_araldi.html" class="branch-unit-link">Heralds of Dust<span class="branch-role role-mage">Mage</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/forgotten/forgotten_prince.html" class="unit-link">Prince</a>
                    <a href="${base}units/forgotten/forgotten_ash_fruit.html" class="unit-link">Ash Fruit</a>
                    <a href="${base}units/forgotten/forgotten_corrupted_light_mage.html" class="unit-link">Corrupted Light Mage</a>
                    <a href="${base}units/forgotten/forgotten_corrupted_wind_mage.html" class="unit-link">Corrupted Wind Mage</a>
                    <a href="${base}units/forgotten/forgotten_light_mage.html" class="unit-link">Light Mage</a>
                    <a href="${base}units/forgotten/forgotten_wind_mage.html" class="unit-link">Wind Mage</a>
                    <a href="${base}units/forgotten/forgotten_sun_valkyrie.html" class="unit-link">Sun Valkyrie</a>
                    <a href="${base}units/forgotten/forgotten_storm_elf.html" class="unit-link">Storm Elf</a>
                    <a href="${base}units/forgotten/forgotten_seraph_mage.html" class="unit-link">Seraph Mage</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/forgotten/forgotten_order_sentinelle.html" class="branch-unit-link">Amber Sentinels<span class="branch-role role-ranged">Ranged</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/forgotten/forgotten_noble.html" class="unit-link">Noble</a>
                    <a href="${base}units/forgotten/forgotten_amber_caster.html" class="unit-link">Amber Caster</a>
                    <a href="${base}units/forgotten/forgotten_custodian.html" class="unit-link">Custodian</a>
                    <a href="${base}units/forgotten/forgotten_archer.html" class="unit-link">Archer</a>
                    <a href="${base}units/forgotten/forgotten_justiciar.html" class="unit-link">Justiciar</a>
                    <a href="${base}units/forgotten/forgotten_marksman.html" class="unit-link">Marksman</a>
                    <a href="${base}units/forgotten/forgotten_valkyrie_lancer.html" class="unit-link">Valkyrie Lancer</a>
                    <a href="${base}units/forgotten/forgotten_elf_sniper.html" class="unit-link">Elf Sniper</a>
                    <a href="${base}units/forgotten/forgotten_eye_forest.html" class="unit-link">Eye of the Forest</a>
                </div>
                <a href="${base}units/forgotten/forgotten_extra.html" class="branch-unit-link">Others</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/forgotten_spells.html" class="menu-link" style="color: #ab47bc">Spell</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/forgotten_buildings.html" class="menu-link" style="color: #f57c00">Buildings</a>
            </div>
        </div>
        <a href="#" class="inner-link locked">Kharos Dominion</a>
        <a href="#" class="inner-link locked">Devil Syndicate</a>
        <a href="#" class="inner-link locked">Primal Coalition</a>
        <a href="#" class="inner-link locked">Iron Brotherhood</a>
        <a href="#" class="inner-link locked">Elven Enclave</a>
    </div>

    <button class="accordion-btn">Campaigns <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <a href="${base}campaigns/story_mode.html" class="inner-link">Story Mode</a>
        <a href="${base}campaigns/arcade_mode.html" class="inner-link">Arcade Mode</a>
    </div>

    <a href="${base}about/credits.html" class="direct-link">The Architects</a>
    </div>
</aside>
`;
}

class GlobalNav extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute('base') || '../../';
        this.innerHTML = getNavTemplate(base);
        this.initScripts();
    }

    initScripts() {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        const toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        };

        if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
        if(overlay) overlay.addEventListener('click', toggleMenu);

        function openPanel(panel) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.addEventListener('transitionend', function handler(e) {
                if (e.propertyName === 'max-height') {
                    panel.style.maxHeight = 'none';
                    panel.removeEventListener('transitionend', handler);
                }
            });
        }

        function closePanel(panel) {
            // Set concrete px first (needed if maxHeight is 'none'), then animate to 0
            panel.style.maxHeight = panel.scrollHeight + 'px';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                panel.style.maxHeight = '0px';
            }));
        }

        function isOpen(panel) {
            return panel.style.maxHeight && panel.style.maxHeight !== '0px';
        }

        this.querySelectorAll('.accordion-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                isOpen(panel) ? closePanel(panel) : openPanel(panel);
            });
        });

        this.querySelectorAll('.sub-toggle').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.closest('.sub-faction-row').nextElementSibling;
                isOpen(panel) ? closePanel(panel) : openPanel(panel);
            });
        });

        this.querySelectorAll('.branch-toggle').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.closest('.branch-row').nextElementSibling;
                isOpen(panel) ? closePanel(panel) : openPanel(panel);
            });
        });

        const searchInput = this.querySelector('#nav-search');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const q = searchInput.value.trim().toLowerCase();
                const sidebarEl = document.getElementById('sidebar');
                const scroll = sidebarEl.querySelector('.sidebar-scroll');

                // Reset all
                scroll.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
                sidebarEl.classList.remove('nav-searching');
                if (!q) return;

                sidebarEl.classList.add('nav-searching');

                // Hide all links and rows by default
                scroll.querySelectorAll('a, .branch-row, .sub-faction-row').forEach(el => {
                    el.classList.add('search-hidden');
                });

                // Reveal matching links and their ancestor rows/panels
                scroll.querySelectorAll('a').forEach(link => {
                    const text = link.textContent.replace(/[\u25b6\u25bc]/g, '').trim().toLowerCase();
                    if (!text.includes(q)) return;

                    link.classList.remove('search-hidden');

                    let node = link.parentElement;
                    while (node && node !== scroll) {
                        if (node.classList.contains('branch-row') || node.classList.contains('sub-faction-row')) {
                            node.classList.remove('search-hidden');
                            const innerLink = node.querySelector('a');
                            if (innerLink) innerLink.classList.remove('search-hidden');
                        }
                        if (node.classList.contains('unit-accordion-content') ||
                            node.classList.contains('sub-accordion-content')) {
                            let prev = node.previousElementSibling;
                            while (prev) {
                                if (prev.classList.contains('branch-row') || prev.classList.contains('sub-faction-row')) {
                                    prev.classList.remove('search-hidden');
                                    const prevLink = prev.querySelector('a');
                                    if (prevLink) prevLink.classList.remove('search-hidden');
                                    break;
                                }
                                prev = prev.previousElementSibling;
                            }
                        }
                        node = node.parentElement;
                    }
                });

                // If an order header matched, also reveal its child units
                scroll.querySelectorAll('.branch-unit-link:not(.search-hidden)').forEach(link => {
                    const row = link.closest('.branch-row');
                    if (!row) return;
                    const unitPanel = row.nextElementSibling;
                    if (unitPanel && unitPanel.classList.contains('unit-accordion-content')) {
                        unitPanel.querySelectorAll('a').forEach(u => u.classList.remove('search-hidden'));
                    }
                });
            });
        }
    }
}

customElements.define('global-navigation', GlobalNav);
