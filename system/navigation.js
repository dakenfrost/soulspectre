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
                <a href="${base}factions/valkyrion_leader.html" class="menu-link" style="color: #d4af37">Leader <br><strong>The Empress / Emperor</strong></a>
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
                <a href="${base}factions/forgotten_leader.html" class="menu-link" style="color: #d4af37">Leader<br><strong style="color: #5cb88a;"> Malicott</strong></a>
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
        <div class="sub-faction-row">
            <a href="${base}factions/kharos.html" class="inner-link" style="color: #e53935;">Kharos Dominion</a>
            <button class="sub-toggle" aria-label="expand branches">▶</button>
        </div>
        <div class="sub-accordion-content">
            <div class="branch-row">
                <a href="${base}factions/kharos_lore.html" class="menu-link" style="color: #b0bec5">Lore</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/kharos_culture.html" class="menu-link" style="color: #4db6ac">Culture</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/kharos_leader.html" class="menu-link" style="color: #d4af37">Leader<br><strong style="color: #e53935;"> The Warchief</strong></a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/kharos_roster.html" class="menu-link" style="color: #ef5350">Unit</a>
                <button class="branch-toggle" aria-label="expand faction menu">▶</button>
            </div>
            <div class="sub-accordion-content">
                <div class="branch-row">
                    <a href="${base}units/kharos/kharos_tribe_warriors.html" class="branch-unit-link">Tribe Warriors<span class="branch-role role-melee">Melee</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/kharos/kharos_chieftain.html" class="unit-link">Chieftain</a>
                    <a href="${base}units/kharos/kharos_thug.html" class="unit-link">Thug</a>
                    <a href="${base}units/kharos/kharos_fighter.html" class="unit-link">Fighter</a>
                    <a href="${base}units/kharos/kharos_basher.html" class="unit-link">Basher</a>
                    <a href="${base}units/kharos/kharos_raider.html" class="unit-link">Raider</a>
                    <a href="${base}units/kharos/kharos_mauler.html" class="unit-link">Mauler</a>
                    <a href="${base}units/kharos/kharos_warrior.html" class="unit-link">Warrior</a>
                    <a href="${base}units/kharos/kharos_ambusher.html" class="unit-link">Ambusher</a>
                    <a href="${base}units/kharos/kharos_rager.html" class="unit-link">Rager</a>
                    <a href="${base}units/kharos/kharos_destroyer.html" class="unit-link">Destroyer</a>
                    <a href="${base}units/kharos/kharos_champion.html" class="unit-link">Champion</a>
                    <a href="${base}units/kharos/kharos_assassin.html" class="unit-link">Assassin</a>
                    <a href="${base}units/kharos/kharos_berserker.html" class="unit-link">Berserker</a>
                    <a href="${base}units/kharos/kharos_conqueror.html" class="unit-link">Conqueror</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/kharos/kharos_reapers.html" class="branch-unit-link">The Reapers<span class="branch-role role-support">Support</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/kharos/kharos_necromancer.html" class="unit-link">Necromancer</a>
                    <a href="${base}units/kharos/kharos_skeleton.html" class="unit-link">Skeleton</a>
                    <a href="${base}units/kharos/kharos_skeleton_fighter.html" class="unit-link">Skeleton Fighter</a>
                    <a href="${base}units/kharos/kharos_skeleton_archer.html" class="unit-link">Skeleton Archer</a>
                    <a href="${base}units/kharos/kharos_skeleton_warrior.html" class="unit-link">Skeleton Warrior</a>
                    <a href="${base}units/kharos/kharos_zombie.html" class="unit-link">Zombie</a>
                    <a href="${base}units/kharos/kharos_skeleton_bowman.html" class="unit-link">Skeleton Bowman</a>
                    <a href="${base}units/kharos/kharos_skeleton_champion.html" class="unit-link">Skeleton Champion</a>
                    <a href="${base}units/kharos/kharos_flesh_golem.html" class="unit-link">Flesh Golem</a>
                    <a href="${base}units/kharos/kharos_skeleton_sniper.html" class="unit-link">Skeleton Sniper</a>
                    <a href="${base}units/kharos/kharos_death_dragon.html" class="unit-link">Death Dragon</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/kharos/kharos_boundless.html" class="branch-unit-link">The Boundless<span class="branch-role role-mage">Mage</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/kharos/kharos_arcanist.html" class="unit-link">Arcanist</a>
                    <a href="${base}units/kharos/kharos_cultist.html" class="unit-link">Cultist</a>
                    <a href="${base}units/kharos/kharos_warlock.html" class="unit-link">Warlock</a>
                    <a href="${base}units/kharos/kharos_druid.html" class="unit-link">Druid</a>
                    <a href="${base}units/kharos/kharos_demonologist.html" class="unit-link">Demonologist</a>
                    <a href="${base}units/kharos/kharos_possessed.html" class="unit-link">Possessed</a>
                    <a href="${base}units/kharos/kharos_feral_druid.html" class="unit-link">Feral Druid</a>
                    <a href="${base}units/kharos/kharos_doom_caller.html" class="unit-link">Doom Caller</a>
                    <a href="${base}units/kharos/kharos_demon_host.html" class="unit-link">Demon Host</a>
                    <a href="${base}units/kharos/kharos_primal_druid.html" class="unit-link">Primal Druid</a>
                    <a href="${base}units/kharos/kharos_incarnation.html" class="unit-link">Incarnation</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/kharos/kharos_outsiders.html" class="branch-unit-link">The Outsiders<span class="branch-role role-ranged">Ranged</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/kharos/kharos_rogue.html" class="unit-link">Rogue</a>
                    <a href="${base}units/kharos/kharos_thief.html" class="unit-link">Thief</a>
                    <a href="${base}units/kharos/kharos_bandit.html" class="unit-link">Bandit</a>
                    <a href="${base}units/kharos/kharos_mercenary.html" class="unit-link">Mercenary</a>
                    <a href="${base}units/kharos/kharos_bomber.html" class="unit-link">Bomber</a>
                    <a href="${base}units/kharos/kharos_veteran.html" class="unit-link">Veteran</a>
                    <a href="${base}units/kharos/kharos_bounty_hunter.html" class="unit-link">Bounty Hunter</a>
                    <a href="${base}units/kharos/kharos_demolisher.html" class="unit-link">Demolisher</a>
                    <a href="${base}units/kharos/kharos_alchemist.html" class="unit-link">Alchemist</a>
                    <a href="${base}units/kharos/kharos_overseer.html" class="unit-link">Overseer</a>
                </div>
                <a href="${base}units/kharos/kharos_extra.html" class="branch-unit-link">Others</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/kharos_spells.html" class="menu-link" style="color: #ab47bc">Spell</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/kharos_buildings.html" class="menu-link" style="color: #f57c00">Buildings</a>
            </div>
        </div>

        <div class="sub-faction-row">
            <a href="${base}factions/syndicate.html" class="inner-link" style="color: #d4af37;">Devil Syndicate</a>
            <button class="sub-toggle" aria-label="expand branches">▶</button>
        </div>
        <div class="sub-accordion-content">
            <div class="branch-row">
                <a href="${base}factions/syndicate_lore.html" class="menu-link" style="color: #b0bec5">Lore</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/syndicate_culture.html" class="menu-link" style="color: #4db6ac">Culture</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/syndicate_leader.html" class="menu-link" style="color: #d4af37">Leader<br><strong style="color: #d4af37;"> The CEO</strong></a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/syndicate_roster.html" class="menu-link" style="color: #ef5350">Unit</a>
                <button class="branch-toggle" aria-label="expand faction menu">▶</button>
            </div>
            <div class="sub-accordion-content">
                <div class="branch-row">
                    <a href="${base}units/syndicate/syndicate_black_guards.html" class="branch-unit-link">The Black Guards<span class="branch-role role-melee">Melee</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/syndicate/syndicate_noble_scion.html" class="unit-link">Noble Scion</a>
                    <a href="${base}units/syndicate/syndicate_soldier.html" class="unit-link">Soldier</a>
                    <a href="${base}units/syndicate/syndicate_legionary.html" class="unit-link">Legionary</a>
                    <a href="${base}units/syndicate/syndicate_hellguard.html" class="unit-link">Hellguard</a>
                    <a href="${base}units/syndicate/syndicate_enforcer.html" class="unit-link">Enforcer</a>
                    <a href="${base}units/syndicate/syndicate_dark_knight.html" class="unit-link">Dark Knight</a>
                    <a href="${base}units/syndicate/syndicate_blood_knight.html" class="unit-link">Blood Knight</a>
                    <a href="${base}units/syndicate/syndicate_arbiter.html" class="unit-link">Arbiter</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/syndicate/syndicate_contracted_demons.html" class="branch-unit-link">Contracted Demons<span class="branch-role role-support">Support</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/syndicate/syndicate_contractor.html" class="unit-link">Contractor</a>
                    <a href="${base}units/syndicate/syndicate_demon.html" class="unit-link">Demon</a>
                    <a href="${base}units/syndicate/syndicate_greater_demon.html" class="unit-link">Greater Demon</a>
                    <a href="${base}units/syndicate/syndicate_demon_lord.html" class="unit-link">Demon Lord</a>
                    <a href="${base}units/syndicate/syndicate_chaos_spawn.html" class="unit-link">Chaos Spawn</a>
                    <a href="${base}units/syndicate/syndicate_demon_prince.html" class="unit-link">Demon Prince</a>
                    <a href="${base}units/syndicate/syndicate_overlord.html" class="unit-link">Overlord</a>
                    <a href="${base}units/syndicate/syndicate_dread_lord.html" class="unit-link">Dread Lord</a>
                    <a href="${base}units/syndicate/syndicate_herald_of_ruin.html" class="unit-link">Herald of Ruin</a>
                    <a href="${base}units/syndicate/syndicate_abyssal_tyrant.html" class="unit-link">Abyssal Tyrant</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/syndicate/syndicate_house_of_duty.html" class="branch-unit-link">House of Duty<span class="branch-role role-mage">Mage</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/syndicate/syndicate_keeper.html" class="unit-link">Keeper</a>
                    <a href="${base}units/syndicate/syndicate_page.html" class="unit-link">Page</a>
                    <a href="${base}units/syndicate/syndicate_servant.html" class="unit-link">Servant</a>
                    <a href="${base}units/syndicate/syndicate_jailer.html" class="unit-link">Jailer</a>
                    <a href="${base}units/syndicate/syndicate_courtesan.html" class="unit-link">Courtesan</a>
                    <a href="${base}units/syndicate/syndicate_maid.html" class="unit-link">Maid</a>
                    <a href="${base}units/syndicate/syndicate_butler.html" class="unit-link">Butler</a>
                    <a href="${base}units/syndicate/syndicate_torturer.html" class="unit-link">Torturer</a>
                    <a href="${base}units/syndicate/syndicate_temptress.html" class="unit-link">Temptress</a>
                    <a href="${base}units/syndicate/syndicate_head_maid.html" class="unit-link">Head Maid</a>
                    <a href="${base}units/syndicate/syndicate_steward.html" class="unit-link">Steward</a>
                    <a href="${base}units/syndicate/syndicate_judge.html" class="unit-link">Judge</a>
                    <a href="${base}units/syndicate/syndicate_succubus.html" class="unit-link">Succubus</a>
                    <a href="${base}units/syndicate/syndicate_mistress.html" class="unit-link">Mistress</a>
                    <a href="${base}units/syndicate/syndicate_chamberlain.html" class="unit-link">Chamberlain</a>
                    <a href="${base}units/syndicate/syndicate_governor.html" class="unit-link">Governor</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/syndicate/syndicate_eclipse_ravens.html" class="branch-unit-link">Eclipse Ravens<span class="branch-role role-ranged">Ranged</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/syndicate/syndicate_commander.html" class="unit-link">Commander</a>
                    <a href="${base}units/syndicate/syndicate_trooper.html" class="unit-link">Trooper</a>
                    <a href="${base}units/syndicate/syndicate_archer.html" class="unit-link">Archer</a>
                    <a href="${base}units/syndicate/syndicate_shadow.html" class="unit-link">Shadow</a>
                    <a href="${base}units/syndicate/syndicate_magic_archer.html" class="unit-link">Magic Archer</a>
                    <a href="${base}units/syndicate/syndicate_gunslinger.html" class="unit-link">Gunslinger</a>
                    <a href="${base}units/syndicate/syndicate_shade.html" class="unit-link">Shade</a>
                    <a href="${base}units/syndicate/syndicate_infernal_sniper.html" class="unit-link">Infernal Sniper</a>
                    <a href="${base}units/syndicate/syndicate_hitman.html" class="unit-link">Hitman</a>
                    <a href="${base}units/syndicate/syndicate_nightblade.html" class="unit-link">Nightblade</a>
                    <a href="${base}units/syndicate/syndicate_endsinger.html" class="unit-link">Endsinger</a>
                </div>
                <a href="${base}units/syndicate/syndicate_extra.html" class="branch-unit-link">Others</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/syndicate_spells.html" class="menu-link" style="color: #ab47bc">Spell</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/syndicate_buildings.html" class="menu-link" style="color: #f57c00">Buildings</a>
            </div>
        </div>

        <div class="sub-faction-row">
            <a href="${base}factions/coalition.html" class="inner-link" style="color: #a1887f;">Primal Coalition</a>
            <button class="sub-toggle" aria-label="expand branches">▶</button>
        </div>
        <div class="sub-accordion-content">
            <div class="branch-row">
                <a href="${base}factions/coalition_lore.html" class="menu-link" style="color: #b0bec5">Lore</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/coalition_culture.html" class="menu-link" style="color: #4db6ac">Culture</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/coalition_leader.html" class="menu-link" style="color: #d4af37">Leader <br><strong>Khora</strong></a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/coalition_roster.html" class="menu-link" style="color: #ef5350">Unit</a>
                <button class="branch-toggle" aria-label="expand faction menu">▶</button>
            </div>
            <div class="sub-accordion-content">
                <div class="branch-row">
                    <a href="${base}units/coalition/coalition_order_mele.html" class="branch-unit-link">The Apex Predators<span class="branch-role role-melee">Melee</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/coalition/primal_predator.html" class="unit-link">Predator</a>
                    <a href="${base}units/coalition/primal_juvenile.html" class="unit-link">Juvenile</a>
                    <a href="${base}units/coalition/primal_warrior.html" class="unit-link">Warrior</a>
                    <a href="${base}units/coalition/primal_stalker.html" class="unit-link">Stalker</a>
                    <a href="${base}units/coalition/primal_alpha.html" class="unit-link">Alpha</a>
                    <a href="${base}units/coalition/primal_shadow.html" class="unit-link">Shadow</a>
                    <a href="${base}units/coalition/primal_titan.html" class="unit-link">Titan</a>
                    <a href="${base}units/coalition/primal_mist.html" class="unit-link">Mist</a>
                    <a href="${base}units/coalition/primal_matriarch.html" class="unit-link">Terrestrial Matriarch</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/coalition/coalition_order_ranged.html" class="branch-unit-link">The Echoes<span class="branch-role role-ranged">Ranged</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/coalition/coalition_matriarch.html" class="unit-link">Matriarch</a>
                    <a href="${base}units/coalition/coalition_venomous.html" class="unit-link">Venomous</a>
                    <a href="${base}units/coalition/coalition_druid.html" class="unit-link">Druid</a>
                    <a href="${base}units/coalition/coalition_sniper.html" class="unit-link">Sniper</a>
                    <a href="${base}units/coalition/coalition_sebiolega.html" class="unit-link">Sembiolega</a>
                    <a href="${base}units/coalition/coalition_regina_f.html" class="unit-link">Regina delle Sementi</a>
                    <a href="${base}units/coalition/coalition_sorceress_f.html" class="unit-link">Sorceress dell'Albero</a>
                    <a href="${base}units/coalition/coalition_radicalista.html" class="unit-link">Radicalista</a>
                    <a href="${base}units/coalition/coalition_forest_warden.html" class="unit-link">Forest Warden</a>
                    <a href="${base}units/coalition/coalition_poisoner.html" class="unit-link">Poisoner</a>
                    <a href="${base}units/coalition/coalition_terremoto.html" class="unit-link">Terremoto</a>
                    <a href="${base}units/coalition/coalition_regina_delle_sogni_f.html" class="unit-link">Regina dei Sogni</a>
                    <a href="${base}units/coalition/coalition_tree_knight.html" class="unit-link">Tree Knight</a>
                    <a href="${base}units/coalition/coalition_colosso_f.html" class="unit-link">Colosso della Terra</a>
                    <a href="${base}units/coalition/coalition_leaf_blade.html" class="unit-link">Leaf Blade</a>
                    <a href="${base}units/coalition/coalition_great_elder.html" class="unit-link">Great Elder</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/coalition/coalition_order_mage.html" class="branch-unit-link">The Ember Choir<span class="branch-role role-mage">Mage</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/coalition/coalition_spore_acolyte.html" class="unit-link">Spore Acolyte</a>
                    <a href="${base}units/coalition/coalition_ash_caster.html" class="unit-link">Ash Caster</a>
                    <a href="${base}units/coalition/coalition_myco_witch.html" class="unit-link">Myco-Witch</a>
                    <a href="${base}units/coalition/coalition_storm_weaver.html" class="unit-link">Storm Weaver</a>
                    <a href="${base}units/coalition/coalition_pyroclast.html" class="unit-link">Pyroclast</a>
                    <a href="${base}units/coalition/coalition_dream_spore.html" class="unit-link">Dream Spore</a>
                    <a href="${base}units/coalition/coalition_tempest_dancer.html" class="unit-link">Tempest Dancer</a>
                    <a href="${base}units/coalition/coalition_magma_oracle.html" class="unit-link">Magma Oracle</a>
                    <a href="${base}units/coalition/coalition_hive_witch.html" class="unit-link">Hive Witch</a>
                    <a href="${base}units/coalition/coalition_void_tempest.html" class="unit-link">Void Tempest</a>
                    <a href="${base}units/coalition/coalition_burning_thought.html" class="unit-link">The Burning Thought</a>
                </div>
                <div class="branch-row">
                    <a href="${base}units/coalition/coalition_order_support.html" class="branch-unit-link">The Deep Weave<span class="branch-role role-support">Support</span></a>
                    <button class="branch-toggle" aria-label="expand units">▶</button>
                </div>
                <div class="unit-accordion-content">
                    <a href="${base}units/coalition/coalition_pale_novice.html" class="unit-link">Pale Novice</a>
                    <a href="${base}units/coalition/coalition_vivid_novice.html" class="unit-link">Vivid Novice</a>
                    <a href="${base}units/coalition/coalition_gill_tender.html" class="unit-link">Gill Tender</a>
                    <a href="${base}units/coalition/coalition_bell_drifter.html" class="unit-link">Bell Drifter</a>
                    <a href="${base}units/coalition/coalition_scale_moth.html" class="unit-link">Scale Moth</a>
                    <a href="${base}units/coalition/coalition_petal_nudis.html" class="unit-link">Petal Nudis</a>
                    <a href="${base}units/coalition/coalition_neotene_matron.html" class="unit-link">Neotene Matron</a>
                    <a href="${base}units/coalition/coalition_phosphor_veil.html" class="unit-link">Phosphor Veil</a>
                    <a href="${base}units/coalition/coalition_cocoon_keeper.html" class="unit-link">Cocoon Keeper</a>
                    <a href="${base}units/coalition/coalition_chromodoris.html" class="unit-link">Chromodoris</a>
                    <a href="${base}units/coalition/coalition_eternal_larva.html" class="unit-link">Eternal Larva</a>
                    <a href="${base}units/coalition/coalition_pelagic_crown.html" class="unit-link">Pelagic Crown</a>
                    <a href="${base}units/coalition/coalition_dust_saint.html" class="unit-link">Dust Saint</a>
                    <a href="${base}units/coalition/coalition_stolen_fire.html" class="unit-link">Stolen Fire</a>
                    <a href="${base}units/coalition/coalition_still_point.html" class="unit-link">The Still Point</a>
                    <a href="${base}units/coalition/coalition_gilded_archive.html" class="unit-link">The Gilded Archive</a>
                </div>
            </div>
            <div class="branch-row">
                <a href="${base}factions/coalition_spells.html" class="menu-link" style="color: #ab47bc">Spell</a>
            </div>
            <div class="branch-row">
                <a href="${base}factions/coalition_buildings.html" class="menu-link" style="color: #f57c00">Buildings</a>
            </div>
        </div>

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
