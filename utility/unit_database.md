# SOULSPECTRE – Database unità giocabili

Generato il 2026-10-06 dalle schede in `units/<fazione>/` (blocco JSON `unit-data`) e dagli alberi evolutivi degli ordini. Incluse solo le unità presenti negli alberi degli ordini (niente "Extra"/neutrali). Fazioni incluse: Valkyrion, Kharos, Syndicate.

## Regole di combattimento

- **Squadra**: 1 ufficiale + da 3 a 5 membri aggiuntivi (in base al livello).
- **Skill**
  - *Base*: sempre usabile.
  - *Attiva*: ha cooldown.
  - *Passiva*: sempre attiva.
  - *Ultimate*: ha cooldown e inizia la battaglia in cooldown.
- **Attacco (ATK)**: scala il danno delle abilità.
- **Iniziativa (INI)**: a inizio turno agiscono prima le unità con iniziativa più alta; a parità, ordine casuale.
- **Armatura**: riduce i danni subiti da qualsiasi tipo di danno.
- **Protezione (fonte X)**: dimezza i danni subiti da quella fonte e riduce del 50% (arrotondato per eccesso) la durata dei debuff di quell'elemento.
- **Immunità (fonte X)**: azzera i danni subiti da quella fonte e i debuff relativi.

## Riepilogo

| Fazione | Ordini | Unità |
| --- | --- | --- |
| Valkyrion Empire | Order of the Sword, Order of Light, Order of Knowledge, Order of Engineering | 48 |
| Kharos Dominion | Tribe Warriors, The Reapers, The Outsiders, The Boundless | 46 |
| Devil Syndicate | House of Duty, The Black Guards, Contracted Demons, Eclipse Ravens | 45 |

---

# Valkyrion Empire

## Order of the Sword

### Hero

**Valkyrion - Hero - Ufficiale - HP 150 - ATK 50 - INI 50**

Skill:
- Base: **Commanding Slash** – The Hero slashes while issuing orders. Deals Physical damage. Target takes +20% increased damage for 1 turn.
- Attiva: **Defensive Formation** – Orders a defensive stance. Units in the group gain a shield equal to 30% of their maximum HP.
- Passiva: **Leading Charisma** – Group gains +5 damage. Once per battle, if the Hero would die, he recovers 30% HP.
- Ultimate: **Heroism** – Powerful speech: +20% damage, +20% armor, +10 Initiative (2 turns), Restore 20% HP.

### Squire

**Valkyrion - Squire - T1 - HP 100 - ATK 25 - INI 50**

Path: Offensive/Defensive Path · Evolve in: Knight, Witch Hunter

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).

### Knight

**Valkyrion - Knight - T2 - HP 150 - ATK 50 - INI 50**

Path: Offensive/Defensive Path · Evolve in: Crusader, Paladin

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Wide Cut** – Deals Physical damage to all enemies in front of the unit.

### Witch Hunter

**Valkyrion - Witch Hunter - T2 - HP 140 - ATK 50 - INI 50 - Immunity Mind**

Path: Inquisition Path · Evolve in: Monster Hunter

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Silencing Strike** – Deals 150% Physical damage to one enemy (melee). Silences the target for 2 turns (Mind attack).

### Crusader

**Valkyrion - Crusader - T3 - HP 200 - ATK 75 - INI 50**

Path: Offensive Path · Evolve in: Holy Avenger

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Wide Cut** – Deals Physical damage to all enemies in front of the unit.
- Passiva: **Judge and Executioner** – Holy fervor empowers the Crusader’s attacks. Deals an additional 20% Light damage whenever the unit deals damage.

### Paladin

**Valkyrion - Paladin - T3 - HP 175 - ATK 60 - Armor 30% - INI 70**

Path: Defensive Path · Evolve in: Guardian

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Shield Cover** – Heals the target for 40% of his attack. Then if it's another ally Paladin interposes himself between danger and him. Takes all damage intended for a target friendly unit for 2 turns. Effect ends early if the Paladin is Incapacitated.
- Passiva: **Knight Resolve** – Deep devotion mends the Paladin's wounds. Restores 10% of maximum HP each turn.

### Monster Hunter

**Valkyrion - Monster Hunter - T3 - HP 180 - ATK 75 - INI 50 - Immunity Mind - Protection Soul**

Path: Inquisition Path · Evolve in: Inquisitor

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Silencing Strike** – Deals 150% Physical damage to one enemy (melee). Silences the target for 2 turns (Mind attack).
- Passiva: **Silver Blades** – The Monster Hunter’s skills (both damage and debuffs) bypass resistances and immunities.

### Holy Avenger

**Valkyrion - Holy Avenger - T4 - HP 300 - ATK 50 - INI 50**

Path: Offensive Path · Evolve in: Knight of Dusk

Skill:
- Base: **Holy Cross Slash** – Deals Physical damage to one enemy (melee) twice in a crushing cross formation.
- Attiva: **Consacration** – The Holy Avenger calls upon divine power to sanctify the ground. Deals Light damage 200% attack to all enemies around the unit and Heals all friendly units in the same area.
- Passiva: **Eternal Crusade** – An unwavering vow fuels every strike. Deals an additional 30% Light damage whenever the unit deals damage.

### Guardian

**Valkyrion - Guardian - T4 - HP 225 - ATK 80 - Armor 30% - INI 70**

Path: Defensive Path · Evolve in: Knight of Dusk

Skill:
- Base: **Disarming Attack** – Deals Physical damage to one enemy. Target deals 25% less Physical damage for 1 turn as their weapon is deflected or pinned.
- Attiva: **Divine Shield Cover** – Heals the target for 100% of his attack. If target is another ally then the Guardian shields him with divine protection. Takes all damage intended for a target friendly unit for 2 turns. Damage taken is reduced by 30% and the Guardian cannot be Incapacitated while active.
- Passiva: **Guardian Resolve** – Holy energy mends the Guardian's body constantly. Restores 15% of maximum HP each turn.

### Inquisitor

**Valkyrion - Inquisitor - T4 - HP 220 - ATK 100 - INI 50 - Immunity Mind, Soul - Protection Dark**

Path: Inquisition Path · Evolve in: Knight of Dusk

Skill:
- Base: **Silencing Soul Strike** – Deals Soul damage to one enemy (melee). Silences the target for 1 turn (Mind attack).
- Attiva: **Judgement Chains** – Binds the target with magical chains of spiritual energy. Deals Soul damage and stuns the target for 2 turns.
- Passiva: **Soul Mastery** – Inquisitor debuffs ignore resistances and immunities. If a target is not resistant or immune to Soul damage, damage dealt is increased by 50%.

### Knight of Dusk

**Valkyrion - Knight of Dusk - T5 - HP 300 - ATK 125 - INI 50 - Armor 30% - Immunity Mind, Soul, Dark**

Skill:
- Base: **Soulblaze Slash** – Deals Physical damage to all enemies in front of the unit. Additionally deals 50% of the attack as Soul damage.
- Attiva: **Chains of Despair** – Binds the target with magical chains. Deals Soul damage and Stuns for 2 turns. Target takes 50% Soul damage each turn while bound.
- Passiva: **Grim Determination** – Debuffs ignore resistances/immunities. Restores 15% HP each turn. Upon defeat, enters Downed state: revives after 2 turns with 30% HP.
- Ultimate: **Oblivion** – Target Instantly Kills the target (unless Ruler). Against Rulers: Deals 400 Soul damage. Requires target not immune to Soul.

## Order of Light

### Chaplain

**Valkyrion - Chaplain - Ufficiale - HP 125 - ATK 50 - INI 50**

Path: Clergy Path

Skill:
- Base: **Hammer Smash** – The Chaplain smashes a target with their hammer. Deals Physical damage with a 40% chance to Stun for 1 turn.
- Attiva: **Holy Light** – Channels divine light to Heal a target for 200% of Attack OR deal 200% of Attack as Light damage to an enemy.
- Passiva: **Renewal** – Allies in the group regenerate 5 HP at the start of their turn. If the Chaplain takes >25% Max HP in one hit, they recover 10% HP.
- Ultimate: **Prayer of Light** – Protects allies with a Shield (30% Max HP) and restores 20% of their maximum HP.

### Acolyte

**Valkyrion - Acolyte - T1 - HP 50 - ATK 20 - INI 40**

Path: Clergy Path · Evolve in: Priest, Seer

Skill:
- Base: **Light Heal** – Channels a spark of divinity to mend flesh. Heals any target for 100% of the unit’s Attack value.

### Priest

**Valkyrion - Priest - T2 - HP 75 - ATK 40 - INI 40**

Path: Clergy Path · Evolve in: Bishop, Exorcist

Skill:
- Base: **Light Heal** – A quick prayer for minor wounds. Heals any target for 100% of Attack value.
- Attiva: **Greater Heal** – A deep communion with the Divine to mend severe trauma. Heals any target for 300% of Attack value.

### Seer

**Valkyrion - Seer - T2 - HP 65 - ATK 35 - INI 60 - Dodge 5%**

Path: Mystic Path · Evolve in: Oracle, Monk

Skill:
- Base: **Spear Stab** – A controlled thrust toward vital points. Deals Physical damage to one enemy (melee).
- Attiva: **Sense Future** – The Seer grants target unit part of their divine sense to perceive incoming strikes. Target unit gains Light buff "Precognition" which increases dodge by 15% for 2 turns.

### Bishop

**Valkyrion - Bishop - T3 - HP 100 - ATK 60 - INI 40**

Path: Clergy Path · Evolve in: Primarch

Skill:
- Base: **Light Heal** – A fundamental restorative prayer. Heals any target for 100% of attack value.
- Attiva: **Greater Heal** – An advanced communion with the Divine. Heals any target for 300% of attack value.
- Passiva: **Healing Echos** – Any healing performed by this unit also bounces to up to 2 nearby allied units, carrying the divine resonance forward.

### Exorcist

**Valkyrion - Exorcist - T3 - HP 150 - ATK 60 - INI 50**

Path: Offensive Path · Evolve in: Abolisher

Skill:
- Base: **Holy Smite** – Strikes an enemy with sacred energy. Deals Light damage to one enemy (melee).
- Attiva: **Divine Light** – Channels a versatile beam of radiance. Heals any target for 200% of Attack OR Deals 200% of Attack as Light damage to an enemy.
- Passiva: **Holy Rites** – Ancient rituals of banishment. Damage dealt to Devils, Demons or Undeads is doubled.

### Oracle

**Valkyrion - Oracle - T3 - HP 80 - ATK 50 - INI 60 - Dodge 10%**

Path: Mystic Path · Evolve in: Herald

Skill:
- Base: **Spear Stab** – Deals Physical damage to one enemy (melee). A precise thrust guided by intuition.
- Attiva: **Greater Sense Future** – The Oracle shares their divine vision with an ally. Target unit gains Light buff "High Precognition" which increases dodge by 20% for 2 turns.
- Passiva: **Reckoning** – If attacked in melee and the attack is dodged, the Oracle immediately counters that enemy with a Spear Stab.

### Monk

**Valkyrion - Monk - T3 - HP 150 - ATK 60 - INI 50**

Path: Body Path · Evolve in: Ascendant

Skill:
- Base: **Holy Smite** – Strikes an enemy with sacred energy. Deals Light damage to one enemy (melee).
- Attiva: **Divine Light** – Channels a versatile beam of radiance. Heals any target for 200% of Attack OR Deals 200% of Attack as Light damage to an enemy.
- Passiva: **Holy Rites** – Ancient rituals of banishment. Damage dealt to Devils, Demons or Undeads is doubled.

### Primarch

**Valkyrion - Primarch - T4 - HP 125 - ATK 80 - INI 40**

Path: Clergy Path · Evolve in: Angel

Skill:
- Base: **Divine Heal** – Absolute restoration of the flesh. Heals any target for 100% of Attack value and Removes one debuff.
- Attiva: **Sanctuary** – Creates a small Light area lasting 3 turns. Heals allies standing in the area for 100% of Attack value at the start of their turn.
- Passiva: **Divine Healer** – Divine Heal bounces to up to 2 nearby allied units. Additionally, if a friendly unit drops below 50% HP, the Primarch automatically heals it for 100% Attack (max 3 activations per turn).

### Abolisher

**Valkyrion - Abolisher - T4 - HP 200 - ATK 80 - INI 50 - Armor 15% - Immunity Dark/Mind**

Path: Offensive Path · Evolve in: Angel

Skill:
- Base: **Holy Smite** – Strikes with pure celestial energy. Deals Light damage to one enemy (melee).
- Attiva: **Extirpate Evil** – Emits a beam of absolute light. Deals 200% Attack as Light damage. Devils, Demons and Undead are also blinded for 2 turns.
- Passiva: **Evil's Bane** – Damage dealt to Profane entities is doubled, damage taken is halved. Nullifies Dark debuffs.

### Herald

**Valkyrion - Herald - T4 - HP 100 - ATK 75 - Dodge 15% - INI 60**

Path: Mystic Path · Evolve in: Angel

Skill:
- Base: **Holy Stab** – A thrust infused with celestial power. Deals Light damage to one enemy (melee) and increase dodge by 10% until the start of next turn.
- Attiva: **Divine Divider** – The spear unleashes a massive light beam. Deals 200% Attack as Light damage to all units in a line.
- Passiva: **Divine Reckoning** – If attacked in melee and the attack is dodged, the Herald immediately counters with Holy Stab and reduces the cooldown of Divine Divider by 1 turn.

### Ascendant

**Valkyrion - Ascendant - T4 - HP 200 - ATK 80 - INI 50 - Armor 15% - Immunity Dark/Mind**

Path: Body Path · Evolve in: Angel

Skill:
- Base: **Holy Smite** – Strikes with pure celestial energy. Deals Light damage to one enemy (melee).
- Attiva: **Extirpate Evil** – Emits a beam of absolute light. Deals 200% Attack as Light damage. Devils, Demons and Undead are also blinded for 2 turns.
- Passiva: **Evil's Bane** – Damage dealt to Profane entities is doubled, damage taken is halved. Nullifies Dark debuffs.

### Angel

**Valkyrion - Angel - T5 - HP 250 - ATK 100 - INI 60 - Dodge 20% - Immunity Dark/Mind/Soul**

Skill:
- Base: **Heaven Divider** – The spear unleashes a colossal beam. Deals 100% Attack as Holy Damage to all units in a line.
- Attiva: **Absolute Light** – Deals Light damage to nearby enemies. Unholy creatures are Blinded and Burning. Heals and buffs allies with +10% Dodge.
- Passiva: **Savior** – Counters dodged melee attacks. Heals allies below 50% HP (max 2/turn). Doubles damage vs Profane.
- Ultimate: **Miracle** – The ultimate divine intervention. Heals all allies for 50% Max HP, Resurrects dead allies at 50% HP, and removes all debuffs.

## Order of Knowledge

### Summoner

**Valkyrion - Summoner - Ufficiale - HP 75 - ATK 30 - INI 40**

Skill:
- Base: **Invoke Sword** – The Summoner conjures a spectral blade and launches it. Deals Physical damage to one enemy (ranged).
- Attiva: **Summon Golem Knight** – Conjures a Golem Knight to fight at their side. The Knight inherits 100% of the Summoner’s Max HP, Attack, and Initiative, and performs basic melee attacks.
- Passiva: **Conjure Shields** – Passively protects allies by conjuring Shields when they are attacked (reduces damage taken by 5). If the Summoner is targeted by a single-target skill and a Golem Knight is active, the Golem Knight intercepts the attack.
- Ultimate: **Summon Golem King** – Conjures a colossal Golem King (inherits 300% HP, 200% Attack, 100% Initiative; melee hits affect a full line). Additionally, summons standard Golem Knights until there are at least two active on the field.

### Apprentice

**Valkyrion - Apprentice - T1 - HP 35 - ATK 15 - INI 40**

Path: Elemental Path · Evolve in: Mage, Witch

Skill:
- Base: **Wind Cut** – Channels sharp currents of atmospheric pressure. Deals Air damage to enemies in a group.

### Glossant

**Valkyrion - Glossant - T1 - HP 85 - ATK 20 - Dodge 5% - INI 55**

Path: Tactical Path · Evolve in: Prescient

Skill:
- Base: **Piercing Slash** – A surgically precise strike targeting known anatomical vulnerabilities. Deals Physical damage to an enemy.

### Mage

**Valkyrion - Mage - T2 - HP 65 - ATK 30 - INI 40**

Path: Elemental Path · Evolve in: Wizard

Skill:
- Base: **Wind Cut** – Channels sharp currents of atmospheric pressure. Deals Air damage to enemies in a group.
- Attiva: **Fireball** – Conjures a highly condensed sphere of thermal energy. Deals 150% of attack as Fire damage to enemies in a group.

### Witch

**Valkyrion - Witch - T2 - HP 70 - ATK 30 - INI 45**

Path: Occult Path · Evolve in: Sorceress

Skill:
- Base: **Wind Cut** – Channels sharp currents of atmospheric pressure. Deals Air damage to enemies in a group.
- Attiva: **Poison Roots** – Summons toxic ethereal vegetation. Deals Primal damage to enemies in a group and applies Poison for 2 turns. Poison inflicts damage equal to 50% of the Witch's Attack at the start of the afflicted unit's turn.

### Prescient

**Valkyrion - Prescient - T2 - HP 140 - ATK 40 - INI 55 - Dodge 5%**

Path: Tactical Path · Evolve in: Strategist, Retaliator

Skill:
- Base: **Piercing Slash** – A surgically precise strike targeting known anatomical vulnerabilities. Deals Physical damage to an enemy.
- Attiva: **Counter Stance** – Assumes a calculated defensive posture. Gains the "Counter Stance" buff for 3 turns. Upon being attacked by a melee attack, the buff is removed to completely dodge the hit and automatically retaliate, dealing 200% of attack as Physical damage.

### Wizard

**Valkyrion - Wizard - T3 - HP 95 - ATK 45 - INI 40**

Path: Elemental Path · Evolve in: Thaumaturge

Skill:
- Base: **Wind Cut** – Channels sharp currents of atmospheric pressure. Deals Air damage to enemies in a group.
- Attiva: **Fireball** – Conjures a highly condensed sphere of thermal energy. Deals 150% of attack as Fire damage to enemies in a group.
- Passiva: **Mage Armor** – A persistent kinetic barrier. At the start of each combat turn (excluding its own), the Wizard gains 20 Shield points.

### Sorceress

**Valkyrion - Sorceress - T3 - HP 100 - ATK 45 - INI 45**

Path: Occult Path · Evolve in: Hexarch

Skill:
- Base: **Venom Roots** – Deals Primal damage equal to 50% of Attack to enemies in a group. Applies Poison for 1 turn (deals 50% Attack at the start of the afflicted unit's turn).
- Attiva: **Dark Mist** – Conjures an obscuring miasma. Deals Dark damage to enemies in a group and applies the "Dark Fog" debuff for 2 turns (afflicted units have a 20% lower chance to hit).
- Passiva: **Debilitating Magic** – The Sorceress's hexes sap physical strength. Targets currently afflicted by any of her debuffs also deal 10% less damage.

### Strategist

**Valkyrion - Strategist - T3 - HP 175 - ATK 60 - INI 60 - Dodge 10%**

Path: Tactical Path · Evolve in: Enlightened

Skill:
- Base: **Piercing Slash** – A surgically precise strike targeting known anatomical vulnerabilities. Deals Physical damage to an enemy.
- Attiva: **Counter Stance** – Assumes a calculated defensive posture. Gains the "Counter Stance" buff for 3 turns. Upon being attacked, the buff is removed to completely dodge the hit and automatically retaliate, dealing 200% of attack as Physical damage.
- Passiva: **Unpredictable Movements** – Masters evasion against projectiles. Increases the base Dodge stat by an additional 10% against non-AoE ranged attacks.

### Retaliator

**Valkyrion - Retaliator - T3 - HP 180 - ATK 70 - INI 55 - Dodge 5%**

Path: Retribution Path · Evolve in: Vindicator

Skill:
- Base: **Slash** – A heavy, momentum-driven sweep. Deals Physical damage to an enemy.
- Attiva: **Counter Stance** – Assumes a calculated defensive posture. Gains the "Counter Stance" buff for 3 turns. Upon being attacked, the buff is removed to completely dodge the hit and automatically retaliate, dealing 200% of attack as Physical damage.
- Passiva: **Spiked Armor** – The Retaliator's armor is inherently hazardous. Reduces all damage taken by a flat 10. If struck by a melee attack, it automatically deals 10 Physical damage back to the attacker.

### Thaumaturge

**Valkyrion - Thaumaturge - T4 - HP 125 - ATK 60 - INI 40**

Path: Elemental Path · Evolve in: Magus

Skill:
- Base: **Fireball** – The fundamental tool of destruction, now a mere basic attack. Deals Fire damage to enemies in a group.
- Attiva: **Meteor Storm** – Rips thermal anomalies from the sky to crush the enemy formation. Deals 200% of attack as Fire damage to enemies in a group.
- Passiva: **Arcane Armor** – An advanced, persistent kinetic barrier. At the start of each combat turn (excluding its own), the Thaumaturge gains 40 Shield points.

### Hexarch

**Valkyrion - Hexarch - T4 - HP 135 - ATK 60 - INI 45**

Path: Occult Path · Evolve in: Magus

Skill:
- Base: **Venom Roots** – Deals Primal damage equal to 50% of Attack to enemies in a group. Applies Poison for 1 turn (deals 50% Attack at the start of the afflicted unit's turn).
- Attiva: **Draining Mist** – Unleashes a suffocating miasma. Deals Dark damage to a group and applies two debuffs for 2 turns: "Dark Fog" (-20% hit chance) and "Frail" (takes 20% more damage).
- Passiva: **Hex Mastery** – Absolute control over affliction. Targets affected by Hexarch debuffs deal 10% less damage. Furthermore, all Hexarch skills and debuffs bypass Resistance to Primal and Dark damage.

### Enlightened

**Valkyrion - Enlightened - T4 - HP 220 - ATK 80 - INI 60 - Dodge 10%**

Path: Tactical Path · Evolve in: Archon

Skill:
- Base: **Weakspot Piercing Slash** – A flawless strike that exploits molecular structural flaws. Deals Physical damage to an enemy and ignores up to 20% of the target's Armor.
- Attiva: **Crushing Counter Stance** – Applies the "Crushing Counter Stance" to itself for 2 turns. Upon receiving an attack, dodges it completely. If the attacker is at melee range, the Enlightened instantly counters, dealing 200% of attack as Physical damage.
- Passiva: **Impossible Reflexes** – Movement transcending natural limits. Increases Dodge by 10% against ranged attacks. Uniquely, the Enlightened is permitted to dodge Area of Effect (AoE) skills.

### Vindicator

**Valkyrion - Vindicator - T4 - HP 230 - ATK 100 - INI 55 - Dodge 5%**

Path: Retribution Path · Evolve in: Archon

Skill:
- Base: **Magic Slash** – A heavy sweep augmented by raw mana. Deals 50% of attack as Physical damage and 50% of attack as Arcane damage to an enemy.
- Attiva: **Retribution** – Applies "Retribution" to self for 3 turns. Gains 1 stack for every point of damage taken. For each stack, increases damage output on the base skill by half a point (rounded up).
- Passiva: **Armor of Vengeance** – Reduces all damage taken by a flat 10. Additionally, if damaged by any enemy attack (including damage over time debuffs), automatically deals 10 Arcane damage back to the attacker.

### Magus

**Valkyrion - Magus - T5 - HP 250 - ATK 80 - INI 45**

Path: Champion , Elemental/Occult Path

Skill:
- Base: **Pyroclasm** – Deals Fire damage to enemies in a group. Applies Burn for 1 turn (deals 50% of attack at the start of the afflicted unit's turn).
- Attiva: **Lightning Storm** – Deals Air damage equal to 150% of attack to a group with a 40% chance to stun. Applies the "Shocked" debuff for 2 turns (units take 20% more damage and have a 10% chance to be stunned on their turn).
- Passiva: **Magic Mastery** – Targets afflicted by Magus debuffs deal 10% less damage. All Magus skills and debuffs bypass Resistance to Fire, Dark, and Primal damage. At the start of each combat turn (excluding its own) gains 50 Shield.
- Ultimate: **Primal Explosion** – A cataclysmic burst of raw energy. Deals Primal damage equal to 200% of attack to enemies in a group. Applies the "Silence" debuff for 1 turn (prevents the use of active skills).

### Archon

**Valkyrion - Archon - T5 - HP 280 - ATK 120 - INI 60 - Dodge 10%**

Path: Champion , Tactical/Retribution Path

Skill:
- Base: **Piercing Magic Slash** – Deals 50% Attack as Physical and 50% Attack as Arcane damage. Ignores up to 20% Armor.
- Attiva: **Force Redirection** – Enters the "Redirection" state. Completely prevents damage from the next attack and inflicts that exact damage back to the attacker.
- Passiva: **Lore Runic Armor** – Reduces damage taken by 10 and deals 10 Arcane damage back. Gains "Energy" stacks that increase skill damage.
- Ultimate: **Trascend Reality** – Bends the fabric of the battlefield. Grants the entire party absolute immunity to all attacks and debuffs for 1 turn.

## Order of Engineering

### Ranger

**Valkyrion - Ranger - Ufficiale - HP 90 - ATK 40 - INI 60**

Skill:
- Base: **Bow Shot** – The Ranger shoots a target with their bow. Deals Physical damage to one enemy (ranged).
- Attiva: **Deploy Bear Trap** – Deploys a specialized tactical snare. Applies the “Bear Trap” Physical debuff to an enemy. If the enemy attacks while active, the debuff escalates to “Bear Trap Activated”, preventing all melee attacks for 2 turns.
- Passiva: **Hawk’s Eyes** – Improves allied battlefield awareness via constant reconnaissance. Units in the group gain +10% accuracy with skills. Ranger skills cannot miss.
- Ultimate: **Explosive Shot** – Fires an experimental arrow packed with explosive gunpowder. Deals 200% Attack as Physical damage to the main target, and 100% Attack as Fire damage to all adjacent enemies.

### Archer

**Valkyrion - Archer - T1 - HP 45 - ATK 25 - INI 60**

Evolve in: Crossbowman

Skill:
- Base: **Bow Shot** – A standard projectile attack. Deals Physical damage to one enemy at any range.

### Crossbowman

**Valkyrion - Crossbowman - T2 - HP 90 - ATK 40 - INI 60**

Evolve in: Arbalester, Marksman

Skill:
- Base: **Crossbow Shot** – A heavy mechanical bolt. Deals Physical damage to one enemy at any range.
- Attiva: **Penetrating Shot** – Fires a high-tension bolt designed to over-penetrate. Deals Physical damage to one enemy at any range, and deals the same damage to the first enemy directly behind the target.

### Arbalester

**Valkyrion - Arbalester - T3 - HP 135 - ATK 60 - INI 60**

Path: Heavy Path · Evolve in: Engineer

Skill:
- Base: **Crossbow Shot** – A heavy mechanical bolt. Deals Physical damage to one enemy at any range.
- Attiva: **Penetrating Shot** – Fires a high-tension bolt designed to over-penetrate. Deals Physical damage to one enemy and the same damage to the target directly behind it.
- Passiva: **Portable Pavise** – Deploys a heavy shield for cover. Gains +20% dodge chance against Physical ranged attacks.

### Marksman

**Valkyrion - Marksman - T3 - HP 120 - ATK 80 - INI 60**

Path: Gunpowder Path · Evolve in: Sharpshooter

Skill:
- Base: **Gun Shot** – Fires a high-velocity lead bullet. Deals Physical damage to one enemy at any range.
- Attiva: **Emergency Reload** – Forces a rapid chambering of a round. Ignores reload penalties and deals Physical damage to one enemy at any range.
- Passiva: **Heavy Firearm** – Skills ignore up to 20% of the target’s Armor. After each shot, the Marksman gains “Empty Magazine”, preventing the use of the Base Skill. After one turn without using skills, the weapon reloads and the debuff is removed.

### Engineer

**Valkyrion - Engineer - T4 - HP 180 - ATK 80 - INI 60**

Path: Heavy Path · Evolve in: Dragoon

Skill:
- Base: **Penetrating Shot** – Fires a heavy ballista bolt. Deals Physical damage to one enemy at any range, and deals the same damage to the first enemy behind the target.
- Attiva: **Portable Shield** – Deploys localized mechanical cover. Grants a friendly unit a Shield equal to 200% of the Engineer’s Attack.
- Passiva: **Mechanical Fortress** – The Engineer acts as a bulwark. Gains +20% dodge chance against Physical ranged attacks, and reduces damage taken from non-debuff skills by 10.

### Sharpshooter

**Valkyrion - Sharpshooter - T4 - HP 150 - ATK 120 - INI 60**

Path: Gunpowder Path · Evolve in: Dragoon

Skill:
- Base: **Gun Shot** – A lethal, high-caliber discharge. Deals Physical damage to one enemy at any range.
- Attiva: **Experimental Magazine** – Spends the turn installing a customized, specialized magazine. Gains the “Quick Reload” effect for 3 turns, entirely preventing the Empty Magazine penalty.
- Passiva: **Heavy Firearm** – Skills ignore up to 20% of the target’s Armor. After each shot, gains “Empty Magazine”, preventing Base Skill use. After one turn without using skills, the weapon reloads and the debuff is cleared.

### Dragoon

**Valkyrion - Dragoon - T5 - HP 200 - ATK 150 - INI 60 - Armor 20%**

Skill:
- Base: **Cannon Shot** – Fires a massive explosive round. Deals Physical damage to one enemy and all adjacent enemies.
- Attiva: **Defensive Protocol** – Deploys advanced tactical plating. Grants a friendly unit 100 Shield and applies the “Reinforced” buff, granting +20% Armor.
- Passiva: **Heavy Cannoneer** – Skills ignore up to 40% of target Armor. Uses the Marksman reload mechanic (Empty Magazine after firing, requires 1 turn without skills to clear). Reduces damage taken from non-debuff skills by a flat 10.
- Ultimate: **Armageddon** – Unleashes the full payload of the Dragon cannon. Deals devastating Physical damage to all enemies on the battlefield.

---

# Kharos Dominion

## Tribe Warriors

### Chieftain

**Kharos - Chieftain - Ufficiale - HP 150 - ATK 50 - INI 50**

Skill:
- Base: **Commanding Slash** – Slashes with their mighty axe, dealing Physical damage to one enemy (melee). The brutal cut inflicts Bleeding for 1 turn, dealing secondary damage equal to 50% of their attack.
- Attiva: **Warcry** – Unleashes a terrifying shout to rally the warband. All units in the group gain the Warcry buff, which increases damage done by 10% for 2 turns.
- Passiva: **Intimidating Presence** – The Chieftain's sheer ferocity inspires allies and terrifies foes. Allied units in the group gain a flat +5 damage on Physical attacks. Concurrently, enemy units deal 5 less Physical damage when directly attacking the Chieftain.
- Ultimate: **Bloodlust** – Enters a state of absolute frenzy, pushing past mortal limits. For 2 turns, the Chieftain gains +40% damage, +10 Initiative, restores 10% of any damage dealt as HP, and their HP cannot drop below 1.

### Thug

**Kharos - Thug - T1 - HP 120 - ATK 30 - INI 40**

Path: Brute Path · Evolve in: Basher

Skill:
- Base: **Smash** – Deals Physical damage to one enemy (melee).

### Fighter

**Kharos - Fighter - T1 - HP 80 - ATK 25 - INI 60**

Path: Agile Path · Evolve in: Raider

Skill:
- Base: **Slash** – Executes a swift melee attack dealing Physical damage to one enemy.

### Basher

**Kharos - Basher - T2 - HP 170 - ATK 60 - INI 40**

Path: Brute Path · Evolve in: Mauler, Warrior

Skill:
- Base: **Smash** – Deals Physical damage to one enemy (melee).
- Attiva: **Heavy Blow** – A devastating swing that deals Physical damage equal to 150% of their attack to one enemy (melee).

### Raider

**Kharos - Raider - T2 - HP 130 - ATK 50 - INI 60**

Path: Agile Path · Evolve in: Ambusher, Rager

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Low Blow** – Executes a dirty and unexpected strike. Has an 80% chance to inflict Stun on an enemy for 1 turn.

### Mauler

**Kharos - Mauler - T3 - HP 220 - ATK 90 - INI 40**

Path: Brute Path · Evolve in: Destroyer

Skill:
- Base: **Heavy Smash** – Deals heavy Physical damage to one enemy (melee). The sheer impact carries a 10% chance to inflict Stun on the target.
- Attiva: **Mortal Blow** – A devastating overhead swing dealing Physical damage equal to 150% of their attack to one enemy (melee), with a 20% chance to Stun the target.
- Passiva: **Crushing Strikes** – The kinetic power of the Mauler's hammer is enough to cave in even the thickest plating. All skills bypass up to 20% of the target's Armor.

### Warrior

**Kharos - Warrior - T3 - HP 190 - ATK 90 - INI 40 - Armor 20%**

Path: Brute Path · Evolve in: Champion

Skill:
- Base: **Slash** – Executes a sweeping strike, dealing Physical damage to one enemy (melee).
- Attiva: **Second Wind** – Taps into deep reserves of stamina and sheer willpower to restore 50% of their maximum HP, keeping the Warrior firmly in the fight.
- Passiva: **Thirst for Blood** – The bloodshed sustains them. The Warrior passively restores 10% of any damage dealt as HP, making them incredibly difficult to take down in prolonged engagements.

### Ambusher

**Kharos - Ambusher - T3 - HP 160 - ATK 75 - INI 60**

Path: Agile Path · Evolve in: Assassin

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee). If attacking from Stealth, the unit exits Stealth and applies Bleeding for 1 turn, dealing damage equal to 75% of their attack.
- Attiva: **Stealth** – Grants the Stealth buff for 2 turns. While stealthed, the Ambusher cannot be directly targeted by enemy skills and does not count as occupying their space (allowing enemy attacks to pass through to the backrow).
- Passiva: **Emergency Escape** – Survival instincts take over when gravely wounded. The Ambusher automatically enters Stealth when their HP drops below 30%.

### Rager

**Kharos - Rager - T3 - HP 180 - ATK 40 - INI 60**

Path: Agile Path · Evolve in: Berserker

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee) twice in rapid succession.
- Attiva: **Frenzy** – Pushes the body beyond its limits to increase attack power by 30% for 2 turns. Upon activation, the Rager immediately uses their Base Skill before their current turn ends.
- Passiva: **Rage** – Pain fuels the fire. The Rager gains 10% of their missing health as extra base attack power.

### Destroyer

**Kharos - Destroyer - T4 - HP 320 - ATK 120 - INI 40**

Path: Brute Path

Skill:
- Base: **Heavy Smash** – Deals heavy Physical damage to one enemy (melee). The massive impact carries a 10% chance to inflict Stun on the target.
- Attiva: **Heavy Blow** – A devastating, full-force swing dealing Physical damage equal to 150% of their attack to one enemy (melee), with a 20% chance to inflict Stun.
- Passiva: **Devastating Strikes** – The unparalleled power of the hammer turns the enemy's armor against them. All skills bypass up to 20% of the target's Armor. Furthermore, any bypassed armor percentage directly increases the damage dealt by the same amount.

### Champion

**Kharos - Champion - T4 - HP 250 - ATK 120 - INI 40 - Armor 20%**

Path: Brute Path

Skill:
- Base: **Mortal Blow** – Executes a lethal strike, dealing Physical damage to one enemy (melee).
- Attiva: **Life Surge** – Taps into immense, primal vitality to instantly restore 75% of their maximum HP, allowing them to endure the heaviest assaults.
- Passiva: **Blood for Blood** – The Champion thrives in the carnage. Passively restores 15% of any damage dealt as HP.

### Assassin

**Kharos - Assassin - T4 - HP 210 - ATK 100 - INI 60**

Path: Agile Path

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee). If attacking from Stealth, the unit exits Stealth and applies Bleeding for 1 turn, dealing damage equal to 75% of their attack.
- Attiva: **Stealth** – Grants the Stealth buff for 2 turns. While stealthed, the Assassin cannot be directly targeted by enemy skills and does not count as occupying their space (allowing enemy attacks to pass through to the backrow).
- Passiva: **Subtle Tactics** – The Assassin starts the fight in Stealth. Additionally, survival instincts automatically trigger Stealth when their HP drops below 30%.

### Berserker

**Kharos - Berserker - T4 - HP 230 - ATK 60 - INI 60**

Path: Agile Path

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee) twice in a flurry of violent strikes.
- Attiva: **Blood Frenzy** – Pushes their physical limits to increase attack power by 40% for 2 turns. Upon activation, the Berserker enters a blood-drunk state and immediately uses their Base Skill before their current turn ends.
- Passiva: **Rage** – Agony is quickly converted into raw power. The Berserker gains 10% of their missing health as extra base attack.

### Conqueror

**Kharos - Conqueror - T5 - HP 350 - ATK 125 - INI 50 - Armor 20%**

Skill:
- Base: **Devastating Slash** – Deals heavy Physical damage to one enemy (melee). Has a 20% chance to Stun the target. If the target is in the backrow, the chance to stun increases to 30%.
- Attiva: **Whirlwind** – A violent spin attack that deals Physical damage to all enemies around the unit (melee). Hits the targets multiple times, dealing 50% of the unit's attack 3 times.
- Passiva: **Relentless Soul** – The ultimate amalgamation of tribal traits. Gains 10% of their missing health as extra base attack and restores 15% of any damage dealt as HP. Furthermore, all skills bypass up to 20% of the target's Armor; any bypassed armor directly increases the damage dealt by the same amount.
- Ultimate: **Ground Break** – Shatters the earth itself. Deals massive Physical damage to all enemies in front of the unit (melee) and guarantees a Stun on all hit targets for 1 turn.

## The Reapers

### Necromancer

**Kharos - Necromancer - Ufficiale - HP 75 - ATK 30 - INI 40**

Skill:
- Base: **Death Nova** – Unleashes a burst of shadow, dealing Dark damage to the entire enemy group.
- Attiva: **Death Coil** – Channels concentrated necrotic energy. Deals Dark damage equal to 200% of their attack to one enemy. Alternatively, can be cast on an allied Undead unit to heal them for 300% of the Necromancer's attack.
- Passiva: **Necromantic Arts** – The Necromancer's mere presence empowers the dead. All allied Undead units in the group gain a flat +5 Physical damage. Furthermore, all allied units recover 5 HP every time they use a skill that deals damage.
- Ultimate: **Unholy Pact** – A ruthless sacrifice for the greater good of the horde. Instantly kills an allied Undead unit. In exchange, the entire group gains +30% of the sacrificed unit’s Attack for 2 turns, and is healed for 30% of the sacrificed unit’s max HP.

### Skeleton

**Kharos - Skeleton - T1 - HP 85 - ATK 25 - INI 50 - Immunity Soul, Mind, Bleeding, Poison**

Evolve in: Skeleton Fighter, Skeleton Archer

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).

### Skeleton Fighter

**Kharos - Skeleton Fighter - T2 - HP 135 - ATK 50 - INI 50 - Immunity Soul, Mind, Bleeding, Poison**

Path: Melee/Abomination Path · Evolve in: Skeleton Warrior, Zombie

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Wide Cut** – Executes a broad, sweeping strike. Deals Physical damage to all enemies in front of the unit.

### Skeleton Archer

**Kharos - Skeleton Archer - T2 - HP 90 - ATK 40 - INI 60 - Immunity Soul, Mind, Bleeding, Poison**

Path: Ranged Path · Evolve in: Skeleton Bowman

Skill:
- Base: **Bow Shot** – Fires a crude arrow, dealing Physical damage to one enemy (ranged).
- Attiva: **Poison Shot** – Fires a toxic arrow that deals Physical damage (ranged) and inflicts Poison for 2 turns, dealing secondary damage equal to 50% of their Attack.

### Skeleton Warrior

**Kharos - Skeleton Warrior - T3 - HP 185 - ATK 75 - INI 50 - Immunity Soul, Mind, Bleeding, Poison**

Path: Melee Path · Evolve in: Skeleton Champion

Skill:
- Base: **Slash** – Deals Physical damage to one enemy (melee).
- Attiva: **Wide Cut** – Executes a broad, sweeping strike. Deals Physical damage to all enemies in front of the unit.
- Passiva: **Tough Bones** – Their shadow-reinforced skeletal structure passively reduces all incoming damage by 5.

### Zombie

**Kharos - Zombie - T3 - HP 235 - ATK 60 - INI 40 - Immunity Soul, Mind, Poison**

Path: Abomination Path · Evolve in: Flesh Golem

Skill:
- Base: **Assault** – Throws their putrid mass forward, dealing Physical damage to one enemy (melee).
- Attiva: **Bite** – Tears into the target, dealing Physical damage to one enemy (melee) and instantly healing the Zombie for 100% of the damage dealt.
- Passiva: **Regeneration** – Their grafted skin constantly knits itself back together. Passively restores 10% of max HP each turn.

### Skeleton Bowman

**Kharos - Skeleton Bowman - T3 - HP 130 - ATK 60 - INI 60 - Immunity Soul, Mind, Bleeding, Poison**

Path: Ranged Path · Evolve in: Skeleton Sniper

Skill:
- Base: **Bow Shot** – Fires an arrow with lethal precision, dealing Physical damage to one enemy (ranged).
- Attiva: **Poison Shot** – Shoots an arrow dripping with corrosive venom. Deals Physical damage (ranged) and applies Poison for 2 turns, dealing secondary damage equal to 50% of their Attack.
- Passiva: **Truesight** – Pierces through trickery and shadow. Their attacks entirely ignore Invisibility and Stealth.

### Skeleton Champion

**Kharos - Skeleton Champion - T4 - HP 320 - ATK 120 - INI 50 - Immunity Soul, Mind, Bleeding, Poison**

Path: Melee Path · Evolve in: Death Dragon

Skill:
- Base: **Focus Slash** – A highly precise strike that deals Physical damage to one enemy (melee). This attack cannot miss.
- Attiva: **Wide Cut** – Executes a broad, sweeping strike. Deals Physical damage to all enemies in front of the unit.
- Passiva: **Tough Armor** – Equipped with thick, reinforced plating that passively reduces all incoming damage by 10.

### Flesh Golem

**Kharos - Flesh Golem - T4 - HP 400 - ATK 80 - INI 40 - Immunity Soul, Mind,  Poison**

Path: Abomination Path · Evolve in: Death Dragon

Skill:
- Base: **Merciless Bite** – Tears into the target with unnatural jaw strength, dealing Physical damage to one enemy (melee). Instantly heals the Golem for 50% of the damage dealt.
- Attiva: **Consume Flesh** – Devours the remnants of the dead. Consumes an allied corpse on the battlefield, restoring the Golem's HP by an amount equal to the consumed unit’s max HP.
- Passiva: **Regeneration** – The fused biomass constantly knits back together. Passively restores 15% of max HP each turn.

### Skeleton Sniper

**Kharos - Skeleton Sniper - T4 - HP 150 - ATK 80 - INI 60 - Immunity Soul, Mind, Bleeding, Poison**

Path: Ranged Path · Evolve in: Death Dragon

Skill:
- Base: **Bow Shot** – Fires a deadly projectile, dealing Physical damage to one enemy (ranged).
- Attiva: **Poison Shot** – Shoots a highly toxic arrow that deals Physical damage (ranged) and inflicts Poison for 2 turns, dealing secondary damage equal to 50% of their Attack.
- Passiva: **Implacable Truesight** – Their gaze is inescapable. Entirely ignores Invisibility and Stealth. Furthermore, deals an additional +50% damage to any target currently attempting to use Invisible or Stealthed states.

### Death Dragon

**Kharos - Death Dragon - T5 - HP 600 - ATK 80 - INI 40 - Immunity Soul, Mind, Bleeding, Poison - Size 2**

Path: Masterpiece

Skill:
- Base: **Poison Breath** – Exhales a cloud of toxic fumes, dealing Poison damage to the entire enemy group.
- Attiva: **Relentless Assault** – Unleashes a savage flurry of attacks. Strikes a single enemy (melee) with 3 consecutive Physical attacks.
- Passiva: **Undead Abomination** – A perfect synthesis of necromantic resilience. Entirely ignores Invisibility and Stealth. Passively restores 15% of max HP each turn, and its massive bulk reduces all incoming damage by 10.
- Ultimate: **Death Breath** – Channels the deepest essence of the void. Exhales pure necrotic energy, dealing devastating Dark damage to the entire enemy group twice.

## The Outsiders

### Rogue

**Kharos - Rogue - Ufficiale - HP 100 - ATK 50 - INI 60 - Dodge 15%**

Skill:
- Base: **Stab** – A quick, precise thrust dealing Physical damage to one enemy (melee).
- Attiva: **Retaliation** – Prepares for incoming strikes. Applies Retaliation to self for 1 turn. If attacked by a Physical melee attack during this time, the Rogue cancels that attack entirely and immediately strikes back at the attacker.
- Passiva: **Subtle Insight** – Coordinates the warband's lethal methods. Bleeding and Poison damage dealt by the entire group is increased by 5. Furthermore, the Dodge chance of the group is increased by 5%.
- Ultimate: **Vanish** – Melts into the shadows. Applies Vanish to self for 2 turns, rendering them untargetable by direct enemy skills, and instantly heals 50% of their maximum HP. While in Vanish, using Stab dispels the Vanish state but inflicts Bleeding for 1 turn equal to 100% of the damage done by Stab.

### Thief

**Kharos - Thief - T1 - HP 80 - ATK 20 - INI 50**

Evolve in: Bandit

Skill:
- Base: **Throw Knife** – Hurls a sharpened dagger with practiced accuracy, dealing Physical damage to one enemy (ranged).

### Bandit

**Kharos - Bandit - T2 - HP 130 - ATK 40 - INI 50**

Evolve in: Mercenary, Bomber

Skill:
- Base: **Throw Knife** – Hurls a sharpened dagger with practiced accuracy, dealing Physical damage to one enemy (ranged).
- Attiva: **Throw Dirt** – Throws a handful of blinding debris at the target's eyes. Applies the Physical Debuff Blinded to an enemy (ranged) for 3 turns. While Blinded, the target's chance to hit is lowered by 50%.

### Mercenary

**Kharos - Mercenary - T3 - HP 180 - ATK 60 - INI 50**

Path: Precision Path · Evolve in: Veteran, Bounty Hunter

Skill:
- Base: **Throw Knife** – Hurls a sharpened dagger with practiced accuracy, dealing Physical damage to one enemy (ranged).
- Attiva: **Throw Dirt** – Throws a handful of blinding debris at the target's eyes. Applies the Physical Debuff Blinded to an enemy (ranged) for 3 turns. While Blinded, the target's chance to hit is lowered by 50%.
- Passiva: **Expertise** – Their extensive training pays off. Increases Accuracy for all skills by 10%. Veteran.

### Bomber

**Kharos - Bomber - T3 - HP 160 - ATK 50 - INI 50**

Path: Explosives Path · Evolve in: Demolisher, Alchemist

Skill:
- Base: **Throw Bomb** – Throws a volatile explosive. Deals Physical damage to one enemy (ranged) and all units positioned near the primary target.
- Attiva: **Throw Toxic Bomb** – Deploys a chemical payload. Deals Poison damage to one enemy (ranged) and all units near them. Inflicts Poison for 2 turns, dealing secondary damage equal to 50% of the Bomber's attack.
- Passiva: **Explosion Veteran** – Having spent so much time handling explosives, they have learned how to mitigate blast impacts. Takes only 25% damage from any enemy active skill that hits more than one target at a time.

### Veteran

**Kharos - Veteran - T4 - HP 230 - ATK 80 - INI 50**

Path: Precision Path · Evolve in: Overseer

Skill:
- Base: **Throw Axe** – Hurls a heavy throwing axe, dealing Physical damage to one enemy (ranged). Has a 10% chance to apply Bleeding for 1 turn, dealing secondary damage equal to 50% of the unit's attack.
- Attiva: **Flash Bomb** – Detonates a high-intensity explosive payload. Applies the Physical Debuff Blinded to all enemies in a line (ranged) for 3 turns. While Blinded, the targets' chance to hit is lowered by 50%.
- Passiva: **Expertise** – Their unparalleled combat mastery guarantees devastating precision. Increases Accuracy for all skills by 20%.

### Bounty Hunter

**Kharos - Bounty Hunter - T4 - HP 200 - ATK 80 - INI 50**

Path: Precision Path · Evolve in: Overseer

Skill:
- Base: **Poison Dart** – Fires a precise, coated projectile. Deals Physical damage to one enemy (ranged) and applies Poison for 2 turns, dealing secondary damage equal to 50% of the unit's attack.
- Attiva: **Prison Net** – Throws a heavy, magically reinforced net. Inflicts a Stun on the target for 2 turns. This effect cannot be dispelled. Note: Ineffective against Large units.
- Passiva: **Human Hunter** – Expertise in anatomy and psychological warfare against their own kind. All damage dealt to Human targets is increased by 10.

### Demolisher

**Kharos - Demolisher - T4 - HP 200 - ATK 80 - INI 50**

Path: Explosives Path · Evolve in: Overseer

Skill:
- Base: **Throw High Explosive Bomb** – Deploys a devastating high-yield explosive. Deals Physical damage to one enemy (ranged) and all units in the immediate area. Has a 10% chance to Stun the targets for 1 turn.
- Attiva: **Throw Venomous Bomb** – Launches a volatile, toxin-filled payload. Deals Poison damage to one enemy (ranged) and all units near them. Inflicts Poison for 3 turns, dealing secondary damage equal to 50% of the Demolisher's attack.
- Passiva: **Explosion Master** – Their reinforced armor and experience allow them to shrug off blast waves. Takes only 50% damage from any enemy active skill that hits more than one target at a time.

### Alchemist

**Kharos - Alchemist - T4 - HP 220 - ATK 80 - INI 50 - Immunity Poison**

Path: Explosives Path · Evolve in: Overseer

Skill:
- Base: **Throw Bomb** – Throws an explosive payload. Deals Physical damage to one enemy (ranged) and all units near them.
- Attiva: **Throw Invigorating Bomb** – Deploys an aerosolized healing solution. Heals an ally (ranged) and all targets near them for 50% of the Alchemist's attack. Furthermore, grants the Powerful status, increasing the damage of affected units by 20% for 2 turns.
- Passiva: **Emergency Potion** – A hidden internal vial triggers automatically. When health drops below 50%, instantly heals 50% of their maximum HP. Note: Does not prevent death if the incoming damage is lethal. Maximum 1 time per battle.

### Overseer

**Kharos - Overseer - T5 - HP 300 - ATK 100 - INI 50 - Immunity Poison**

Skill:
- Base: **Throw Shrapnel Bomb** – Deals Physical damage to one enemy (ranged) and all units in the immediate area. Has a 20% chance to apply Bleeding for 1 turn, dealing secondary damage equal to 50% of the Overseer's attack.
- Attiva: **Throw Power-Drug Bomb** – Administers an potent combat cocktail. Heals an ally (ranged) and all targets near them for 50% of attack. Grants the Drugged effect (damage +50% for 2 turns). Warning: When Drugged expires, inflicts Abstinence for 1 turn, reducing damage by 50%.
- Passiva: **Master of Tools** – The Overseer utilizes every advantage. Passives: When below 50% HP, heals 50% max HP (1/battle). Takes only 25% damage from multi-target active skills. Accuracy increased by 20%. Bleeding damage increased by 10.
- Ultimate: **Armament L-33T** – Deploys a specialized experimental warhead. Deals 50% Physical damage to one enemy (ranged) and all units near it. Inflicts Bleeding (1 turn, 50% attack) and Poison (1 turn, 50% attack).

## The Boundless

### Arcanist

**Kharos - Arcanist - Ufficiale - HP 75 - ATK 40 - INI 40 - Protection Mind**

Skill:
- Base: **Arcane Shield** – Channels protective magic to grant a Shield equal to the Arcanist's attack value to any friendly unit.
- Attiva: **Energy Manipulation** – Weaves a broad protective matrix. All units in the group gain a Shield equal to 50% of their own attack value. Additionally, perfectly dispels one debuff from each member of the group.
- Passiva: **Keeper Protection** – A latent magical aura protects the warband. All allied units gain +5 Shield points at the start of their turn. If an ally is below 50% HP, the ward strengthens, granting them 10 Shield points instead.
- Ultimate: **Absolute Command** – Overrides the laws of life and death through sheer magical authority. Resurrects an allied unit, returning them to the battlefield with 50% of their original maximum HP.

### Cultist

**Kharos - Cultist - T1 - HP 35 - ATK 15 - INI 40**

Evolve in: Warlock, Druid

Skill:
- Base: **Fire Blast** – Channels volatile extra-planar energy to unleash a burst of flames, dealing Fire damage to enemies in a group.

### Warlock

**Kharos - Warlock - T2 - HP 65 - ATK 30 - INI 40**

Path: Infernal/Possession Path · Evolve in: Demonologist, Possessed

Skill:
- Base: **Fire Blast** – Channels volatile extra-planar energy to unleash a burst of flames, dealing Fire damage to enemies in a group.
- Attiva: **Dark Wave** – Unleashes a rolling tide of negative energy. Deals Dark damage equal to 150% of their attack to enemies in a group.

### Druid

**Kharos - Druid - T2 - HP 140 - ATK 50 - INI 50**

Path: Primal Path · Evolve in: Feral Druid

Skill:
- Base: **Bite** – Tears into the target with sharp fangs, dealing Physical damage to one enemy (melee).
- Attiva: **Pounce** – Leaps upon the target with overwhelming force. Deals Physical damage (melee) and inflicts a Stun on the enemy for 1 turn.

### Demonologist

**Kharos - Demonologist - T3 - HP 95 - ATK 45 - INI 40**

Path: Infernal Path · Evolve in: Doom Caller

Skill:
- Base: **Fire Blast** – Channels volatile extra-planar energy to unleash a burst of flames, dealing Fire damage to enemies in a group.
- Attiva: **Dark Wave** – Unleashes a rolling tide of negative energy. Deals Dark damage equal to 150% of their attack to enemies in a group.
- Passiva: **Demonic Regeneration** – Their pact grants them supernatural mending capabilities. Heals 30 HP at the start of their turn.

### Possessed

**Kharos - Possessed - T3 - HP 100 - ATK 60 - INI 40 - Protection Fire**

Path: Possession Path · Evolve in: Demon Host

Skill:
- Base: **Mind Spike** – Projects a sharp mental attack, dealing Mind damage to one enemy. Has a 30% chance to Paralyze the target for 1 turn.
- Attiva: **Haunt Mind** – Overwhelms the enemy's psyche. Deals Mind damage equal to 150% of their attack to one enemy, and instantly inflicts Paralyze on them for 2 turns.
- Passiva: **Demon Possession** – The chaotic entity within forcefully rejects external manipulation. Dispels one debuff on themselves at the start of each turn.

### Feral Druid

**Kharos - Feral Druid - T3 - HP 190 - ATK 75 - INI 50**

Path: Primal Path · Evolve in: Primal Druid

Skill:
- Base: **Rend** – Slashes violently with heavy claws, dealing Physical damage to one enemy (melee).
- Attiva: **Pounce** – Throws their massive weight onto the target. Deals Physical damage (melee) and inflicts a Stun for 1 turn.
- Passiva: **Feral Strength** – Their sheer physical power causes grievous wounds. All attacks have a 30% chance to inflict Bleeding for 1 turn, which deals secondary damage equal to 50% of their attack.

### Doom Caller

**Kharos - Doom Caller - T4 - HP 125 - ATK 60 - INI 40**

Path: Infernal Path · Evolve in: Incarnation

Skill:
- Base: **Fire Rain** – Calls down a torrent of flames, dealing Fire damage to enemies in a group. Has a 20% chance to apply Burn for 1 turn, dealing secondary damage equal to 50% of the unit's attack.
- Attiva: **Darkfire Blast** – Unleashes a dual-aspected inferno. Deals Fire damage equal to 100% of their attack to enemies in a group, immediately followed by Dark damage equal to 100% of their attack to the same group.
- Passiva: **Hell Regeneration** – Their mutated, demonically-infused physiology constantly repairs itself. Heals 45 HP at the start of their turn.

### Demon Host

**Kharos - Demon Host - T4 - HP 145 - ATK 80 - INI 40 - Protection Fire**

Path: Possession Path · Evolve in: Incarnation

Skill:
- Base: **Mind Blast** – Projects raw mental trauma, dealing Mind damage to one enemy. Has a 40% chance to Paralyze the target for 1 turn.
- Attiva: **Haunt Mind** – Invades the victim's psyche. Deals Mind damage equal to 150% of their attack to one enemy, and instantly inflicts Paralyze on them for 2 turns.
- Passiva: **Demon Control** – The possessing entity aggressively maintains its grip on reality. Dispels one debuff on themselves at the start of each turn. Furthermore, even if disabled by a debuff, the Demon Host can still act on their turn.

### Primal Druid

**Kharos - Primal Druid - T4 - HP 240 - ATK 100 - INI 50**

Path: Primal Path · Evolve in: Incarnation

Skill:
- Base: **Rend** – Tears into the target with razor-sharp claws, dealing Physical damage to one enemy (melee).
- Attiva: **Pounce** – Leaps upon the target with overwhelming predatory force. Deals Physical damage (melee) and inflicts a Stun for 1 turn.
- Passiva: **Primal Strength** – Their vicious strikes are exceptionally difficult to stop. All attacks have a 40% chance to inflict Bleeding for 1 turn, which deals secondary damage equal to 50% of their attack.

### Incarnation

**Kharos - Incarnation - T5 - HP 300 - ATK 120 - INI 50 - Protection Physical, Fire**

Skill:
- Base: **Rending Strike** – A brutal, mutating swipe that deals Physical damage to one enemy (melee). Has a 50% chance to apply Bleeding for 1 turn, dealing secondary damage equal to 50% of the unit's attack.
- Attiva: **Psychic Scream** – Unleashes an otherworldly shriek. Deals Mind damage equal to 75% of their attack to enemies in a group. Has a 60% chance to Paralyze the targets for 1 turn.
- Passiva: **Spirit Possession** – The entity within refuses to yield. Even if disabled by a debuff, the Incarnation can still act on their turn. Furthermore, the chaotic energy sustains them, healing 65 HP at the start of their turn.
- Ultimate: **Shadow Hell** – Ruptures the veil between dimensions. Deals Fire damage equal to 75% of their attack to enemies in a group, immediately followed by Dark damage equal to 75% of their attack to the same group.

---

# Devil Syndicate

## House of Duty

### Keeper

**Syndicate - Keeper - Ufficiale - HP 55 - ATK 30 - INI 40 - Resistance Fire - Immunity Dark**

Path: Executive Leadership

Skill:
- Base: **Darkness Wave** – Unleashes a sweeping pulse of shadowy energy, dealing 100% of their attack as Dark damage to all enemies in a group (AoE). Has a 10% chance to apply Blind for 2 turns, which reduces accuracy by 20%.
- Attiva: **Protection of the Void** – Envelops all allies in a protective shroud, granting the Protection of the Void dark buff which increases dodge by 10% for 2 turns and instantly heals them for 50% of their attack.
- Passiva: **Keeper of Secrets** – Channeling incoming trauma into corporate assets. When struck by a direct damage ability, gains Secret of Doom, increasing the damage of the next base skill used by 20%. When struck by a debuff, gains Secrets of Renewal, increasing the healing of the next ability by 50%. Furthermore, whenever any allied unit in the team is hit by a direct skill, passively heals them for 5 HP.
- Ultimate: **Pandora Box** – Unlocks forbidden corporate archives, dealing 150% of their attack as damage to all enemy units (AoE) and applying Blind on them for 2 turns. Fully heals all allies in the group by 100% and generates a massive Shield equal to 100% of their own maximum HP.

### Page

**Syndicate - Page - T1 - HP 35 - ATK 15 - INI 40**

Path: Control Path · Evolve in: Jailer, Courtesan

Skill:
- Base: **Dark Wave** – Projects a minor pulse of shadowy energy, dealing 100% of their attack as Dark damage to the target.

### Servant

**Syndicate - Servant - T1 - HP 45 - ATK 20 - INI 60 - Resistance Fire**

Path: Support Path · Evolve in: Maid, Butler

Skill:
- Base: **Boost Strength** – Administers prompt medical or energetic support, healing the target for 25% of their attack and granting allies in the group the Boost Strength buff for 1 turn, which increases damage done by 10%.

### Jailer

**Syndicate - Jailer - T2 - HP 70 - ATK 30 - INI 40**

Path: Control Path · Evolve in: Torturer

Skill:
- Base: **Dark Wave** – Unleashes a rolling pulse of shadows, dealing 100% of their attack as Dark damage to all units in an enemy group (AoE).
- Attiva: **Confusing Fog** – Discharges a haze of cognitive interference, dealing 50% of their attack as damage to an enemy group. Has a 20% chance on each target to apply the Confused dark debuff for 1 turn, preventing them from using any skill.

### Courtesan

**Syndicate - Courtesan - T2 - HP 80 - ATK 30 - INI 45**

Path: Control Path (Female) · Evolve in: Temptress

Skill:
- Base: **Dark Wave** – Unleashes a rolling pulse of shadows, dealing 100% of their attack as Dark damage to all units in an enemy group (AoE).
- Attiva: **Seduce** – Deploys hypnotic dark resonance, dealing 150% of their attack as Dark damage to a single target with a 60% chance to Charm the enemy for 1 turn. Charmed units are controlled by the AI during their turn and will attack their own team or support the opponent.

### Maid

**Syndicate - Maid - T2 - HP 70 - ATK 40 - INI 60 - Resistance Fire**

Path: Support Path (Female) · Evolve in: Head Maid

Skill:
- Base: **Boost Strength** – Administers energetic support, healing the target for 25% of their attack and granting allies in the group the Boost Strength buff for 1 turn, which increases damage done by 10%.
- Attiva: **Healing Winds** – Channels restorative currents across the battlefield, instantly healing the entire team for 50% of their attack.

### Butler

**Syndicate - Butler - T2 - HP 130 - ATK 50 - INI 50 - Resistance Fire, Air**

Path: Support Path (Male) · Evolve in: Steward

Skill:
- Base: **Lightning Punch** – Delivers a crackling blow, dealing 100% of their attack as Air damage to a melee enemy.
- Attiva: **Thunder Barrier** – Projects a dynamic electrostatic field, granting an allied target a Shield equal to 200% of their attack.

### Torturer

**Syndicate - Torturer - T3 - HP 100 - ATK 45 - INI 40**

Path: Control Path · Evolve in: Judge

Skill:
- Base: **Dark Wave** – Unleashes a sweeping pulse of shadows, dealing 100% of their attack as Dark damage to all units in an enemy group (AoE).
- Attiva: **Creeping Shadows** – Unleashes creeping darkness across the enemy team, dealing 50% of their attack as Dark damage. Applies the Creeping Shadow debuff for 2 turns, dealing secondary damage equal to 50% of their attack each turn.
- Passiva: **Crippling Arts** – Infuses dark attacks with cognitive static. Every time an enemy unit takes Dark damage originating from this unit, there is a 15% chance to inflict Confused as a dark debuff.

### Temptress

**Syndicate - Temptress - T3 - HP 110 - ATK 45 - INI 45**

Path: Control Path (Female) · Evolve in: Succubus

Skill:
- Base: **Seduce** – Deploys hypnotic dark resonance, dealing 150% of their attack as Dark damage to a single target. Has a 60% chance to Charm the enemy for 1 turn and a 75% chance to dispel 1 random buff from the target.
- Attiva: **Illusion Dream** – Cloaks an ally in empowering illusions, granting the Illusion Dream buff for 3 turns. Grants a 25% attack increase, 25% armor, and instantly cleanses 1 debuff from the ally.
- Passiva: **Feeling Manipulator** – Reflects emotional instability back at aggressors. When hit by an enemy direct attack, there is a 15% chance to Charm the unit that dealt the damage.

### Head Maid

**Syndicate - Head Maid - T3 - HP 95 - ATK 60 - INI 60 - Resistance Fire**

Path: Support Path (Female) · Evolve in: Mistress

Skill:
- Base: **Boost Strength** – Administers energetic support, healing the target for 25% of their attack and granting allies in the group the Boost Strength buff for 1 turn, which increases damage done by 10%.
- Attiva: **Healing Winds** – Channels restorative currents across the battlefield, instantly healing the entire team for 50% of their attack.
- Passiva: **Devoted Maid** – Maintains absolute operational vigilance. At the end of her turn, gains 1 stack of Devoted Maid. When any ally's HP drops below 50% of their maximum HP, instantly consumes a stack to heal them for 100% of her attack.

### Steward

**Syndicate - Steward - T3 - HP 180 - ATK 75 - INI 50 - Resistance Fire, Air**

Path: Support Path (Male) · Evolve in: Chamberlain

Skill:
- Base: **Lightning Punch** – Delivers a heavy crackling blow, dealing 100% of their attack as Air damage to a melee enemy.
- Attiva: **Thunder Barrier** – Projects a powerful electrostatic field, granting an allied target a massive Shield equal to 200% of their attack.
- Passiva: **Demonic Butler** – Maintains precise defensive positioning. Gains Uncanny Insight at the end of their turn for 1 turn, which increases melee dodge chance by 20%. If an attack is dodged this way, instantly counterattacks, dealing 50% of their attack as Air damage (consumes stack on trigger).

### Judge

**Syndicate - Judge - T4 - HP 130 - ATK 60 - INI 40**

Path: Control Path · Evolve in: Governor

Skill:
- Base: **Creeping Shadows** – Unleashes creeping darkness across the enemy team, dealing 50% of their attack as Dark damage. Applies the Creeping Shadow debuff for 2 turns, dealing secondary damage equal to 50% of their attack each turn.
- Attiva: **Dark Execution** – Conjures volatile shadow projectiles that bombard the opposition, dealing 50% of their attack as Dark damage 3 consecutive times to an entire enemy group (AoE).
- Passiva: **Crime and Punishment** – Systemic enforcement of retaliatory justice. Every time an enemy unit takes Dark damage originating from this unit, there is a 15% chance to inflict Confused as a dark debuff. Furthermore, each time an enemy deals direct damage with a skill to any ally, instantly reflects 5% of the damage taken back to the attacker as Dark damage.

### Succubus

**Syndicate - Succubus - T4 - HP 130 - ATK 60 - INI 50**

Path: Control Path (Female) · Evolve in: Governor

Skill:
- Base: **Charming Eyes** – Projects an irresistible dark gaze, dealing 150% of their attack as Dark damage to a single target with an 80% chance to Charm the enemy for 1 turn. Instantly dispels 1 random buff from the target.
- Attiva: **Illusion Nightmare** – Imbues an ally with terrifying, empowering visions, granting the Illusion Nightmare buff for 3 turns. Grants a 50% attack increase, 25% armor, and 10 initiative, while completely removing all debuffs from the ally.
- Passiva: **Drain Life** – Weaponizes emotional volatility. When hit by an enemy direct attack, there is a 25% chance to Charm the unit that dealt the damage. Furthermore, whenever a target is charmed by this unit, it siphons 10% of their maximum HP as plain damage and heals this unit for that exact amount.

### Mistress

**Syndicate - Mistress - T4 - HP 120 - ATK 80 - INI 60 - Resistance Fire**

Path: Support Path (Female) · Evolve in: Governor

Skill:
- Base: **Greater Boost Strength** – Administers advanced energetic support, healing the target for 25% of their attack and granting allies in the group the Greater Boost Strength buff for 1 turn, which increases damage done by 20%.
- Attiva: **Healing Spring** – Summons restorative currents, instantly healing the team for 50% of their attack and leaving an Air buff called Healing Spring for 1 turn, which heals them again for 50% of their attack.
- Passiva: **Loyal Maid** – Maintains deep operational oversight. At the end of her turn, gains 2 stacks of Devoted Maid. When any ally's HP drops below 50% of their maximum HP, instantly consumes a stack to heal them for 100% of her attack.

### Chamberlain

**Syndicate - Chamberlain - T4 - HP 230 - ATK 100 - INI 50 - Resistance Fire, Air**

Path: Support Path (Male) · Evolve in: Governor

Skill:
- Base: **Lightning Blast** – Unleashes a concentrated electrostatic surge, dealing 100% of their attack as Air damage to a melee enemy with a 30% chance to paralyze as an air debuff.
- Attiva: **Fulmination Barrier** – Projects a volatile electrostatic shield, granting an ally a Shield equal to 200% of their attack and the Fulmination Barrier buff for 2 turns. If the shielded target loses shield from a direct damage ability, it instantly reflects the exact same damage back to the attacker as Air damage.
- Passiva: **Diabolic Butler** – Mastery of evasive tactical positioning. Gains 2 stacks of Uncanny Insight at the end of their turn for 1 turn, which increases melee dodge chance by 20%. If an attack is dodged this way, instantly counterattacks, dealing 50% of their attack as Air damage (consumes a stack on successful counterattack).

### Governor

**Syndicate - Governor - T5 - HP 250 - ATK 100 - INI 40 - Resistance Fire, Dark, Wind - Size 1**

Skill:
- Base: **Darkwind Blast** – Unleashes a volatile convergence of elements, dealing 50% of their attack as Dark damage and 50% of their attack as Wind damage to all enemies in a group (AoE).
- Attiva: **Demonic Boost** – Channels executive authority to invigorate the roster, instantly healing the party for 50% of their attack and granting the team the Demonic Boost buff, which increases attack by 30% for 2 turns.
- Passiva: **Hell Magic Weaver** – Mastery over multi-channel esoteric warfare. When dealt direct damage by an enemy, there is a 25% chance to Charm that attacker. When dealing Dark damage, there is a 20% chance to confuse the enemy. When dealing Wind damage, there is a 20% chance to self-heal for 50% of the damage dealt.
- Ultimate: **Gates of Hell** – Opens rifts to the underworld, dealing 50% of their attack as Fire damage to all enemies 3 consecutive times (AoE). Each of these hits simultaneously counts as Dark and Wind damage, triggering respective passive effects.

## The Black Guards

### Noble Scion

**Syndicate - Noble Scion - Ufficiale - HP 145 - ATK 50 - INI 50 - Resistance Fire**

Skill:
- Base: **Blazing Slash** – Executes a scorching melee strike. Deals 60% of their attack as Physical damage and an additional 60% of their attack as Fire damage to a single enemy.
- Attiva: **Demonic Barrier** – Gains a highly volatile shield equal to 150% of their attack and the Demonic Barrier buff for 3 turns. While active, every time this unit loses a portion of its shield to an attack, it retaliates, dealing 10% of their attack as Fire damage to all units in the attacker's group.
- Passiva: **Enhanced Weapons** – Leverages superior corporate armaments to augment the squad. Attacks from all allied units in the Scion's group passively ignore up to 10% of the target's armor.
- Ultimate: **Fiery Blast** – Unleashes a concentrated explosion of pure infernal heat, dealing 50% of their attack as Fire damage to all enemies within a targeted group.

### Soldier

**Syndicate - Soldier - T1 - HP 95 - ATK 25 - INI 50 - Resistance Fire**

Evolve in: Legionary

Skill:
- Base: **Axe Slash** – Strikes the target with a heavy corporate-issue axe, dealing 100% of their attack as Physical damage to a single enemy in melee range.

### Legionary

**Syndicate - Legionary - T2 - HP 145 - ATK 50 - INI 50 - Resistance Fire**

Path: Bulwark/Assault Path · Evolve in: Hellguard, Enforcer

Skill:
- Base: **Axe Slash** – Strikes the target with a heavy corporate-issue axe, dealing 100% of their attack as Physical damage to a single enemy in melee range.
- Attiva: **Steel Charge** – Rushes the enemy with overwhelming force. Deals 100% of their attack as Physical damage to a single target. Upon impact, the unit generates defensive shielding equal to 100% of their attack.

### Hellguard

**Syndicate - Hellguard - T3 - HP 160 - ATK 75 - INI 50 - Armor 30% - Resistance Fire**

Path: Bulwark Path · Evolve in: Dark Knight

Skill:
- Base: **Axe Slash** – Strikes the target with a heavy corporate-issue axe, dealing 100% of their attack as Physical damage to a single enemy in melee range.
- Attiva: **Steel Charge** – Rushes the enemy with overwhelming force. Deals 100% of their attack as Physical damage to a single target. Upon impact, the unit generates defensive shielding equal to 100% of their attack.
- Passiva: **Infernal Plates** – The Hellguard's armor dynamically reacts to trauma. Every time this unit is hit by an attack, it passively generates a Shield equal to 25% of the damage taken.

### Enforcer

**Syndicate - Enforcer - T3 - HP 175 - ATK 80 - INI 50 - Resistance Fire**

Path: Assault Path · Evolve in: Blood Knight

Skill:
- Base: **Axe Cleave** – Swings a massive weapon in a wide arc, dealing 50% of their attack as Physical damage to the target and nearby adjacent enemies (AoE).
- Attiva: **Power Strike** – Focuses all momentum into a single, crushing blow. Deals 150% of their attack as Physical damage to a single enemy, with a 25% chance to Stun the target.
- Passiva: **Merciless** – Programmed to permanently close accounts. The Enforcer deals 25% more damage to any enemy whose current HP is below 25%.

### Dark Knight

**Syndicate - Dark Knight - T4 - HP 200 - ATK 100 - INI 55 - Armor 30% - Resistance Fire**

Path: Bulwark Path · Evolve in: Arbiter

Skill:
- Base: **Rending Slash** – Delivers a brutal cleave, dealing 100% of their attack as Physical damage to a single target and reducing its armor by 10%. If the target's armor is already at 0, inflicts Bleeding for 1 turn, dealing secondary damage equal to 30% of their attack.
- Attiva: **Devastating Charge** – Charges an enemy position with catastrophic force. Deals 100% of their attack as Physical damage, generates a Shield equal to 100% of their attack, and applies Stun to the target for 1 turn.
- Passiva: **Obsidian Plates** – Enhanced obsidian layers absorb and redirect impact force. Every time this unit is hit by an attack, it passively generates a Shield equal to 35% of the damage taken.

### Blood Knight

**Syndicate - Blood Knight - T4 - HP 250 - ATK 100 - INI 50 - Resistance Fire**

Path: Assault Path · Evolve in: Arbiter

Skill:
- Base: **Crushing Cleave** – Executes a sweeping blow, dealing 50% of their attack as Physical damage to the target and nearby adjacent enemies (AoE). The strikes passively ignore up to 20% of the target's armor.
- Attiva: **Power Strike** – Focuses absolute momentum into a crushing assault. Deals 150% of their attack as Physical damage to a single target, with a 25% chance to Stun the enemy.
- Passiva: **Relentless Execution** – Built for terminal liquidations. The Blood Knight deals 40% more damage to any target whose current HP is below 35%.

### Arbiter

**Syndicate - Arbiter - T5 - HP 300 - ATK 130 - INI 50 - Armor 25% - Resistance Fire**

Skill:
- Base: **Shockwave Cleave** – Unleashes a seismic shockwave, dealing 50% of their attack as Physical damage to all enemies in a row (AoE) and reducing their armor by 10%. If a target's armor is already at 0, inflicts Bleeding for 1 turn, dealing secondary damage equal to 50% of their attack.
- Attiva: **Assaulting Strike** – Delivers a heavy punitive assault. Deals 100% of their attack as Physical damage to a single target, applies Stun for 1 turn, and generates defensive shielding equal to 50% of their attack.
- Passiva: **Judge of Hell** – Executes sentences with absolute finality. The Arbiter deals 25% more damage to enemies with less than 35% health. Furthermore, when hit by an attack, they gain a Shield equal to 25% of the damage taken and instantly retaliate, dealing the exact same shield gain as damage back as Dark damage.
- Ultimate: **Infernal Edict** – Decrees an absolute metaphysical mandate on an entire row (ally or enemy) for 2 turns as the Infernal Edict debuff/buff: all damage dealt is converted into healing, and all healing received is converted into damage.

## Contracted Demons

### Contractor

**Syndicate - Contractor - Ufficiale - HP 60 - ATK 30 - INI 40 - Resistance Fire**

Path: Submission Path

Skill:
- Base: **Call of Flame** – Manifests a burst of corporate hellfire, dealing 100% of their attack as Fire damage to all units in an enemy group (AoE). Has a 10% chance to apply the Burning fire debuff for 2 turns, dealing secondary damage equal to 50% of their attack.
- Attiva: **Call of Behemoth** – Briefly materializes the crushing weight of a Behemoth's strike. Deals 200% of their attack as Physical damage to a single target and applies Stun for 1 turn.
- Passiva: **Call of Cerberus** – Channels the protective aura of the three-headed hound. When struck by a direct attack, there is a 20% chance to reduce the damage taken by 75%. This protective ward also triggers on party units with a 5% probability.
- Ultimate: **Call of Cthulhu** – Unleashes a psychological fragment of the deep void, dealing 100% of their attack as damage to all enemies in a group and afflicting them with the Madness mind debuff for 1 turn. Targets under Madness are controlled by the AI and forced to use their base or active skill against random targets.

### Demon

**Syndicate - Demon - T1 - HP 170 - ATK 50 - INI 35 - Resistance Fire - Size 2**

Path: Physical Path, Chaos Path · Evolve in: Greater Demon

Skill:
- Base: **Claws Slash** – Lashes out with massive razor-sharp claws, dealing 100% of their attack as Physical damage to a single melee target.

### Greater Demon

**Syndicate - Greater Demon - T2 - HP 270 - ATK 80 - INI 35 - Resistance Fire - Size 2**

Path: Physical Path, Chaos Path · Evolve in: Demon Lord, Chaos Spawn

Skill:
- Base: **Claws Slash** – Lashes out with massive razor-sharp claws, dealing 100% of their attack as Physical damage to a single melee target.
- Attiva: **Firebolt** – Hurls a concentrated bolt of abyssal flame, dealing 75% of their attack as Fire damage to an enemy unit at any range (direct trajectory, non-homing).

### Demon Lord

**Syndicate - Demon Lord - T3 - HP 370 - ATK 110 - INI 35 - Resistance Fire - Size 2**

Path: Physical Path · Evolve in: Demon Prince, Overlord

Skill:
- Base: **Slash** – Delivers a heavy blade cut, dealing 100% of their attack as Physical damage to a single melee target.
- Attiva: **Firestrike** – Conjures a tracking projectile of hellfire, dealing 75% of their attack as Fire damage to an enemy unit at any range (Homing trajectory).
- Passiva: **Sword Demon** – Trained in the lethal arts of abyssal blade-fighting. Passively grants an additional 10% chance to dodge incoming physical attacks.

### Chaos Spawn

**Syndicate - Chaos Spawn - T3 - HP 320 - ATK 50 - INI 20 - Resistance Fire, Bio - Size 2**

Path: Chaos Path · Evolve in: Dread Lord, Herald of Ruin

Skill:
- Base: **Tentacle Assault** – Llashes out with a barrage of writhing appendages, dealing Physical damage to all units in an enemy group (AoE).
- Attiva: **Corruption** – Spews volatile biological decay, dealing 25% of their attack as Bio damage to all units in an enemy group (AoE) and applying the Poison bio debuff for 2 turns, dealing secondary damage equal to 25% of their attack each turn.
- Passiva: **Entropy Demon** – Embodies raw, unpredictable mutation. Passively grants robust resistance to all kinds of status ailments and incoming debuffs.

### Demon Prince

**Syndicate - Demon Prince - T4 - HP 470 - ATK 140 - INI 40 - Resistance Fire - Size 2**

Path: Physical Path · Evolve in: Abyssal Tyrant

Skill:
- Base: **Crushing Sword** – Delivers a devastating sword cut, dealing 100% of their attack as Physical damage to a melee target, with a 30% chance to Stun the enemy.
- Attiva: **Inferno Blast** – Unleashes a tracking surge of hellfire, dealing 75% of their attack as Fire damage to an enemy unit at any range (Homing trajectory). Applies the Burning fire debuff, dealing secondary damage equal to 25% of their attack each turn.
- Passiva: **Swordmaster Demon** – Mastery of transcendent abyssal fencing. Passively increases physical attack dodge chance by 15% and overall accuracy by 10%.

### Overlord

**Syndicate - Overlord - T4 - HP 350 - ATK 110 - INI 40 - Armor 25% - Resistance Fire, Dark - Immunity Mind - Size 2**

Path: Submission Path · Evolve in: Abyssal Tyrant

Skill:
- Base: **Mindbreak Strike** – Delivers a psychologically corrosive blow, dealing 100% of their attack as Physical damage to a melee target, with a 50% chance to paralyze the enemy as a mind debuff for 1 turn.
- Attiva: **Crush Wills** – Unleashes a sweeping wave of mental terror, dealing 50% of their attack as Mind damage to all units in a row (Homing trajectory) with a 50% chance to stun them as a mind debuff for 1 turn.
- Passiva: **Weaken Nerves** – Weaponizes psychological exhaustion. Any enemy unit afflicted by paralysis automatically suffers the Slow Reaction mind debuff for 2 turns, which halves their initiative.

### Dread Lord

**Syndicate - Dread Lord - T4 - HP 420 - ATK 70 - INI 20 - Resistance Fire - Immunity Bio - Size 2**

Path: Chaos Path · Evolve in: Abyssal Tyrant

Skill:
- Base: **Tentacle Assault** – Lashes out with a barrage of crushing appendages, dealing Physical damage to all units in an enemy group (AoE).
- Attiva: **Abyssal Corruption** – Unleashes a tidal wave of biological decay, dealing 40% of their attack as Bio damage to all units in an enemy group (AoE) that ignores resistances. Applies the Poison bio debuff for 2 turns, dealing secondary damage equal to 20% of their attack each turn.
- Passiva: **Corruption Lord** – Mastery over entropic contagion. Passively grants resistance to all kinds of debuffs. Furthermore, whenever this unit inflicts damage via a debuff, it instantly deals the exact same amount of damage back as Dark damage.

### Herald of Ruin

**Syndicate - Herald of Ruin - T4 - HP 420 - ATK 80 - INI 30 - Immunity Bio, Fire - Size 2**

Path: Destruction Path · Evolve in: Abyssal Tyrant

Skill:
- Base: **Inferno** – Unleashes a sweeping wave of destructive heat, dealing 100% of their attack as Fire damage to an entire enemy group (AoE).
- Attiva: **Molten Armor** – Hardens thermal plating, generating a Shield equal to 100% of their attack and 2 stacks of Molten Armor. Each time this unit is hit by a direct damage ability, it consumes a stack of Molten Armor and completely nullifies the incoming damage.
- Passiva: **Fire Rebuke** – Maintains an volatile thermal aura. While protected by a shield, if this unit loses a stack of Molten Armor or a portion of its shield, it violently lashes out, dealing damage equal to 50% of its attack back to the attacker.

### Abyssal Tyrant

**Syndicate - Abyssal Tyrant - T5 - HP 570 - ATK 170 - INI 45 - Resistance Fire - Immunity Bio, Mind, Dark - Size 2**

Skill:
- Base: **Doom Blade** – Delivers a catastrophic blow with the Doom Blade, dealing 100% of their attack as Physical damage to a melee target, with a 30% chance to paralyze the enemy as a mind debuff.
- Attiva: **Pain and Suffering** – Unleashes systemic agony, dealing Dark damage equal to 25% of their attack and Bio damage equal to 25% of their attack. Inflicts the Abyssal Pain dark debuff on enemies for 2 turns, which increases damage taken by 20%.
- Passiva: **The Only Dark Ruler** – Radiates absolute authority over the abyss. Paralyzed enemies automatically suffer the Slow Reaction mind debuff for 2 turns, which halves their initiative. Grants unwavering resistance to all debuffs regardless of element. Furthermore, when hitting a paralyzed target, deals an additional 25% damage as Dark damage.
- Ultimate: **Armageddon** – Brings forth absolute ruin, dealing 80% of their attack as Physical damage to all units in an enemy group (AoE) with a 30% chance to stun. Grants the The End has Come buff for 2 turns, which increases damage done by 30% and grants complete immunity to debuffs.

## Eclipse Ravens

### Commander

**Syndicate - Commander - Ufficiale - HP 85 - ATK 40 - INI 60 - Resistance Fire**

Path: Ranged Leader

Skill:
- Base: **Pistol Homing Shot** – Fires a calculated precision round, dealing Physical damage to a ranged target. This attack cannot be dodged.
- Attiva: **Assault Order** – Designates an operational priority, applying the Marked for Death void debuff which cannot be resisted or removed for 2 turns. Damage dealt to the target is increased by 30% (efficiency is reduced by 50% against Boss enemies).
- Passiva: **Flawless Command** – Maintains unyielding tactical discipline. At the start of the turn, automatically removes one crowd control or stun debuff from a friendly unit. Furthermore, the allied unit with the lowest HP instantly gains a Shield equal to 75% of this unit's attack.
- Ultimate: **Demonic Artillery** – Calls down heavy fire support, bombarding the enemy with cannons dealing 50% of their attack as Physical damage 3 consecutive times (AoE). Grants one permanent stack of Increased Authority, which increases attack by 50% and cannot be removed.

### Trooper

**Syndicate - Trooper - T1 - HP 40 - ATK 25 - INI 60 - Resistance Fire**

Evolve in: Archer, Shadow

Skill:
- Base: **Crossbow Shot** – Fires a standard bolt from distance, dealing Physical damage to a target at any range.

### Archer

**Syndicate - Archer - T2 - HP 85 - ATK 40 - INI 60 - Resistance Fire**

Path: Marksmanship / Ballistics Path · Evolve in: Magic Archer, Gunslinger

Skill:
- Base: **Bow Shot** – Delivers a precise draw shot, dealing 100% of their attack as Physical damage to a ranged target.
- Attiva: **Arrow Volley** – Unleashes a coordinated barrage into the enemy formation, dealing 75% of their attack as Physical damage to all units in an enemy row.

### Shadow

**Syndicate - Shadow - T2 - HP 90 - ATK 40 - INI 60 - Resistance Fire**

Path: Assassination Path · Evolve in: Shade

Skill:
- Base: **Backstab** – Strikes from concealment, dealing 100% of their attack as Physical damage to a ranged target. Although initiated from distance, this strike counts as melee physical damage.
- Attiva: **Poisoned Daggers** – Hurls venomous blades, dealing 75% of their attack as Physical damage (counts as melee physical damage) and applying the Poisoned bio debuff for 2 turns, causing the target to suffer 25% of attack as Bio damage each turn.

### Magic Archer

**Syndicate - Magic Archer - T3 - HP 125 - ATK 60 - INI 60 - Resistance Fire**

Path: Marksmanship Path · Evolve in: Infernal Sniper

Skill:
- Base: **Bow Shot** – Delivers a precise draw shot, dealing 100% of their attack as Physical damage to a ranged target.
- Attiva: **Arrow Volley** – Unleashes a coordinated barrage into the enemy formation, dealing 75% of their attack as Physical damage to all units in an enemy row.
- Passiva: **Enchanted Arrows** – Infuses all ammunition with raw esoteric elements. Deals an additional 20% damage as Primal damage with all skills.

### Gunslinger

**Syndicate - Gunslinger - T3 - HP 120 - ATK 35 - INI 60 - Resistance Fire**

Path: Ballistics Path · Evolve in: Hitman

Skill:
- Base: **Dual Shot** – Fires synchronized sidearms, dealing 50% of their attack as Physical damage to a ranged target 2 consecutive times (x2).
- Attiva: **Desperado** – Unleashes a wild, high-speed ballistic flurry, dealing 25% of their attack as Physical damage 8 times distributed across random enemy targets.
- Passiva: **Bouncing Bullets** – Ballistic trajectories engineered for maximum collateral disruption. Every instance of skill damage has a 10% chance to bounce onto a nearby target (up to a maximum of 3 bounces per bullet).

### Shade

**Syndicate - Shade - T3 - HP 135 - ATK 60 - INI 60 - Resistance Fire**

Path: Assassination Path · Evolve in: Nightblade

Skill:
- Base: **Backstab** – Strikes from deep concealment, dealing 100% of their attack as Physical damage to a ranged target. Although initiated from distance, this strike counts as melee physical damage.
- Attiva: **Poisoned Daggers** – Hurls toxic blades, dealing 75% of their attack as Physical damage (counts as melee physical damage) and applying the Poisoned bio debuff for 2 turns, causing the target to suffer 25% of attack as Bio damage each turn.
- Passiva: **Elusive Shadow** – Warped physiology and silhouette shifting grant a permanent 20% increased dodge chance against all incoming physical damage.

### Infernal Sniper

**Syndicate - Infernal Sniper - T4 - HP 165 - ATK 80 - INI 60 - Resistance Fire**

Path: Marksmanship Path · Evolve in: Endsinger

Skill:
- Base: **Arcane Shot** – Fires a concentrated high-velocity round, dealing 100% of their attack as Physical damage to a single ranged target. This attack completely ignores armor.
- Attiva: **Arrow Rain** – Unleashes a devastating cascading bombardment, dealing 75% of their attack as Physical damage to a primary row and 25% of their attack as Physical damage to all other enemy rows (AoE).
- Passiva: **Arcane Arrows** – Infuses all payload ballistics with volatile primordial forces. Deals an additional 30% damage as Primal damage with all skills.

### Hitman

**Syndicate - Hitman - T4 - HP 145 - ATK 50 - INI 60 - Resistance Fire**

Path: Ballistics Path · Evolve in: Endsinger

Skill:
- Base: **Dual Shot** – Fires synchronized sidearms, dealing 50% of their attack as Physical damage to a ranged target 2 consecutive times (x2). Has a 25% chance to trigger an additional 50% shot.
- Attiva: **Bullet Time** – Distorts temporal perception while maintaining rapid fire, dealing 25% of their attack as Physical damage 10 times (x10) distributed across random enemy targets at any range.
- Passiva: **Bullets Hell** – Ballistics engineered for devastating chain reactions. Every instance of skill damage has a 15% chance to bounce onto a nearby target (up to a maximum of 4 bounces per bullet).

### Nightblade

**Syndicate - Nightblade - T4 - HP 165 - ATK 80 - INI 60 - Resistance Fire**

Path: Assassination Path · Evolve in: Endsinger

Skill:
- Base: **Sudden Backstab** – Strikes instantly from absolute darkness, dealing 100% of their attack as Physical damage to a ranged target (counts as melee physical damage). This strike cannot be dodged.
- Attiva: **Toxic Blades** – Delivers a virulent envenomed strike, dealing 75% of their attack as Physical damage (counts as melee physical damage) and applying the Toxin bio debuff for 2 turns, causing the target to suffer 50% of attack as Bio damage each turn.
- Passiva: **Night Walker** – Complete assimilation into shadow grants a permanent 30% increased dodge chance against all incoming physical damage.

### Endsinger

**Syndicate - Endsinger - T5 - HP 200 - ATK 100 - INI 60 - Resistance Fire - Dodge 15%**

Skill:
- Base: **Sniper Shot** – Delivers an infallible execution shot, dealing 100% of their attack as Physical damage. This attack cannot be dodged.
- Attiva: **Full Auto** – Unleashes an absolute kinetic deluge, dealing 25% of their attack as Physical damage 15 consecutive times distributed across random enemies. Each hit has a 15% chance to bounce onto a random enemy unit (up to a maximum of 5 bounces per bullet).
- Passiva: **Requiem Bullets** – Ballistics forged in ultimate nullification. Skill damage completely ignores Physical Resistance or Physical Immunity. Targets possessing no physical resistance or immunity suffer an additional 20% damage. Every skill usage applies a stack of the permanent String buff (which cannot be removed).
- Ultimate: **Curtain Fall** – Pulls the strings of destiny to execute the doomed. Deals 100% of their attack as Physical damage to a random target, and repeats this strike for each stack of the String buff currently active (up to a maximum of 10 repeats).
