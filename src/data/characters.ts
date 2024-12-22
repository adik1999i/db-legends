import { CharacterDetails } from '../types';



// Define the characters mapping type
export type CharactersMap = Record<CharacterId, CharacterDetails>;

export const SSJ2_GOKU: CharacterDetails = {
  name: "Super Saiyan 2 Goku",
  title: "Otherworld Warrior",
  image: "/ssj3.webp",
  stats: {
    hp: 24800,
    strikeAtk: 2663,
    strikeDef: 1739,
    blastAtk: 2527,
    blastDef: 1705,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: "13.31%",
    kiRecover: "22.13%",
    vanishRecover: "20.00%",
    changeCd: "10s"
  },
  traits: {
    tags: [
      "Son Family",
      "Saiyan",
      "Otherworld Warrior",
      "Super Saiyan 2",
      "Male",
      "SPARKING"
    ],
    type: "Melee Type",
    color: "GRN",
    saga: "Majin Buu Saga (Z)",
    characterName: "Goku",
    style: "Assault",
    abilities: [
      "Armored Strike Arts",
      "Healer",
      "Transform",
      "Special Cover Change (Strike)",
      "Special Cover Change Nullification",
      "Unique Gauge"
    ]
  },
  mainAbility: {
    name: "I call it Super Saiyan 3!!",
    description: `Transform into "Super Saiyan 3". 
Restores own health by 50% and Ki by 50. 
Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" to self for 10 timer counts. 
Nullifies enemy's "Restores health when it reaches 0" effects when this character attacks for 15 timer counts. 
Cancels own Attribute Downgrades and Abnormal Conditions. 

The following effects occur if own Unique Gauge is full:
- Randomly draws at most 4 new cards when you have 3 or fewer cards.
- Restores own Vanishing Gauge by 100%.
- Increases own Dragon Balls by 1.
- Applies Buff Effect "Nullifies enemy's 'Destroy Card' effects" to self for 20 timer counts.
- Applies Attribute Upgrade "Shortens substitution count by 2" to self (cannot be cancelled).
- Destroys all of your enemy's cards.`,
    requirements: "20 timer counts must elapse"
  },
  uniqueAbilities: [
    {
      name: "Ready for a Serious Fight",
      description: `Applies the following effects to self when battle starts:
- +160% to damage inflicted (cannot be cancelled).
- Reduces damage received by 70% (cannot be cancelled).
- +30% to Ki Recovery (cannot be cancelled).
- Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
- -5 to Arts costs (cannot be cancelled).`
    },
    {
      name: "Earthshaking Super Power",
      description: `Knocks enemy back to long range if a cover change is performed against their Strike Arts attack (activates during assists).

[Comboable Arts]: Special Move Arts

Effects when changing cover:
- Randomly destroys 1 enemy card.
- Randomly destroys 1 enemy card (activates three times).
*Activation count is shared before and after transforming.
- Inflicts all enemies with Attribute Downgrade "+5 to Strike, Blast & Special Move Arts costs" for 10 timer counts.`
    }
  ],
  zAbility: [
    {
      level: "I",
      effect: `+22% to "Episode: Majin Buu Saga (Z)" base Strike Attack & Blast Defense during battle.`
    }
  ],
  heldArtsCards: [
    {
      type: "Strike [Damage UP]",
      effect: "+10% to damage inflicted for 10 timer counts."
    },
    {
      type: "Blast",
      effect: "Normal Blast Cards"
    }
  ],
  extraArtsCard: {
    name: "Explosive High Tension",
    description: `Randomly draws 1 new card. 
Restores own health by 15% and Ki by 40. 
Charges own Unique Gauge by 20%. 
+20% to damage inflicted for 10 timer counts. 
Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" to self for 10 timer counts.`
  },
  specialArtsCard: {
    name: "Super Dragon Dual Barrage",
    description: `Deals massive Impact damage.
+30% to Special Move damage inflicted for 3 timer counts upon activation.

Effects on hit:
- Shortens allies' substitution counts by 3.
- Reduces enemy Ki by 60.

*Blast Armor when charging forward.`
  }
};

export const ULTRA_MAJIN_VEGETA: CharacterDetails = {
  name: "Majin Vegeta",
  title: "Fury Unleashed",
  image: "/ul-majin.webp",
  stats: {
    hp: 25600,
    strikeAtk: 2950,
    strikeDef: 1825,
    blastAtk: 2830,
    blastDef: 1750,
    pierceResist: 105,
    sliceResist: 105,
    impactResist: 105,
    explodeResist: 105,
    criticalRate: "14.50%",
    kiRecover: "25.00%",
    vanishRecover: "22.00%",
    changeCd: "10s"
  },
  traits: {
    tags: [
      "Saiyan",
      "Majin",
      "Super Saiyan 2",
      "Vegeta Family",
      "Male",
      "ULTRA"
    ],
    type: "Balanced Type",
    color: "RED",
    saga: "Majin Buu Saga (Z)",
    characterName: "Vegeta",
    style: "Revenge",
    abilities: [
      "Ultra Blast Arts",
      "Unique Gauge",
      "Transformation",
      "Damage Cut Nullification",
      "Anti-Cover Mechanic",
      "Self-Healing"
    ]
  },
  mainAbility: {
    name: "Now, I'll Crush You!",
    description: `Transform into "Majin Vegeta". 
Restores own health by 40% and Ki by 50. 
+30% to damage inflicted by allies for 20 timer counts. 
Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" for 15 timer counts. 
Cancels own Attribute Downgrades and Abnormal Conditions. 

The following effects occur if own Unique Gauge is full:
- Restores own Vanishing Gauge by 100%.
- Draws an Ultimate Arts Card "Final Explosion" next.
- Restores health by 20%.
- Reduces enemy Ki by 50.`,
    requirements: "25 timer counts must elapse"
  },
  uniqueAbilities: [
    {
      name: "Cursed Power of the Majin",
      description: `Applies the following effects to self when battle starts:
- +170% to damage inflicted (cannot be cancelled).
- Reduces damage received by 60% (cannot be cancelled).
- +40% to Ki Recovery (cannot be cancelled).
- Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
- -5 to Strike & Blast Arts costs (cannot be cancelled).

The following effects occur when this character enters the battlefield:
- Restores health by 15% and Ki by 30.
- Charges Unique Gauge by 15%.
- +70% to next Strike or Blast Arts damage inflicted.
- Reduces enemy's Dragon Balls by 1 (activates once).`
    },
    {
      name: "Explosive Wrath",
      description: `Effects when this character is hit with an enemy Arts attack:
- Restores own health by 5% (activates four times).
- Reduces damage received by 15% for 5 timer counts.

Effects when enemy activates Rising Rush:
- Reduces enemy Ki by 70.
- Cancels enemy Attribute Upgrades.
- Increases own Dragon Balls by 1.

Effects when own Unique Gauge is full:
- Randomly destroys 2 enemy cards.
- Seals enemy's Main Ability for 10 timer counts.
- Draws a Special Arts Card next.
- Applies Buff Effect "Nullifies enemy's Blast Armor" for 15 timer counts.`
    }
  ],
  zAbility: [
    {
      level: "I",
      effect: `+22% to "Episode: Majin Buu Saga (Z)" or "Vegeta Family" base Strike Attack & Blast Defense during battle.`
    }
  ],
  heldArtsCards: [
    {
      type: "Blast [Damage UP]",
      effect: "+10% to damage inflicted for 15 timer counts."
    },
    {
      type: "Strike",
      effect: "Normal Strike Cards"
    }
  ],
  extraArtsCard: {
    name: "Dark Energy Wave",
    description: `Restores own health by 10% and Ki by 30. 
Charges own Unique Gauge by 20%. 
+20% to damage inflicted for 10 timer counts. 
Applies Attribute Upgrade "Reduces damage received by 20%" for 5 timer counts.`
  },
  specialArtsCard: {
    name: "Big Bang Assault",
    description: `Deals massive Impact damage.
+40% to Special Move damage inflicted for 3 timer counts upon activation.

Effects on hit:
- Reduces enemy Ki by 60.
- Destroys 2 enemy cards.

*Blast Armor when charging forward.`
  },
  ultimateArtsCard: {
    name: "Final Explosion",
    description: `Deals supreme Self-Destructive damage to all enemies.
+50% to Ultimate damage inflicted for 3 timer counts upon activation. 
Restores own Vanishing Gauge by 100%.

Effects upon activation:
- Reduces enemy Ki to 0.
- Cancels own buffs and reduces own health by 70%.`,
    requirements: "Unique Gauge must be full"
  }
};

export const VEGITO_BLUE: CharacterDetails = {
    name: "Vegito",
    title: "And here's something new: Vegito Blue!!",
    image: "/vegito.webp",
    stats: {
      hp: 25814,
      strikeAtk: 2453,
      strikeDef: 1714,
      blastAtk: 2624,
      blastDef: 1748,
      pierceResist: 100,
      sliceResist: 100,
      impactResist: 100,
      explodeResist: 100,
      criticalRate: "12.87%",
      kiRecover: "23.87%",
      vanishRecover: "20.00%",
      changeCd: "10s"
    },
    traits: {
      tags: [
        "Saiyan",
        "Future",
        "Potara",
        "Fusion Warrior",
        "Male",
        "SPARKING"
      ],
      type: "Ranged Type",
      color: "GRN",
      saga: "\"Future\" Trunks Saga (S)",
      characterName: "Vegito",
      style: "Assault",
      abilities: [
        "Armored Strike Arts",
        "Transform",
        "Fast Draw (Multi)",
        "Special Cover Change (Strike)",
        "Special Cover Change Nullification",
        "Unfavorable Element Factor Nullification",
        "Unique Gauge"
      ]
    },
    mainAbility: {
      name: "And here's something new: Vegito Blue!!",
      description: `Transform into "Super Saiyan God SS".
  Randomly draws at most 2 new cards when you have 3 or fewer cards.
  Restores own health by 50% and Ki by 50.
  Restores own Vanishing Gauge by 100%.
  Cancels own Attribute Downgrades and Abnormal Conditions.`,
      requirements: "20 timer counts must elapse"
    },
    uniqueAbilities: [
      {
        name: "Beyond the Limits of Power",
        description: `Applies the following effects to self when battle starts:
  
  +150% to damage inflicted (cannot be cancelled).
  Reduces damage received by 70% (cannot be cancelled).
  Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
  -5 to Arts costs (cannot be cancelled).
  Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" for 30 timer counts (cannot be cancelled).
  
  The following effects occur when this character enters the battlefield:
  
  Restores own Ki by 30.
  +80% to damage inflicted (cannot be cancelled) (activates once).
  Inflicts all enemies with Attribute Downgrade "-15% to Strike & Blast Arts Power" for 10 timer counts.
  Inflicts all enemies with Attribute Downgrade "-30% to Special Move, Ultimate & Awakened Arts Power" for 10 timer counts.
  
  Applies the following effects to self every time this character uses a Strike or Blast Arts Card:
  
  Randomly draws 1 new card when you have 3 or fewer cards (activates once).
  Activation count resets after character switch.
  Restores Ki by 10.
  +15% to damage inflicted for 10 timer counts.
  
  The following effects occur when enemy activates autocounter or Evade Action while this character is not defeated (activates once):
  
  +50% to own Unique Gauge charge rate (cannot be cancelled).
  Shortens allies' substitution counts by 5.
  Reduces enemy Ki by 100.
  Cancels enemy's Attribute Upgrades & Buff Effects.
  Inflicts all enemies with Attribute Downgrade "+20 to all Arts costs" for 5 timer counts.
  
  *Activation count is shared before and after transforming.`
      },
      {
        name: "The Power of Two Warriors' Unyielding Spirit",
        description: `Knocks enemy back to long range if a cover change is performed against their Strike Arts attack (activates during assists).
  
  [Comboable Arts]
  Special Move Arts
  
  The following effects occur every time when hit with an enemy's Arts attack while this character is on the battlefield (activates once):
  
  Restores own health by 10%.
  Nullifies own unfavorable Element factors for damage sustained for 10 timer counts.
  Shortens allies' substitution counts by 1.
  Reduces enemy Ki by 20.
  
  Activation count resets after character switch.
  
  The following effects occur if own remaining health is 50% or below after being hit by an enemy's Arts attack while this character is on the battlefield (activates once):
  
  Restores own health by 20%.
  Charges own Unique Gauge by 50%.
  Inflicts enemy with Attribute Downgrade "+30 to all Arts costs" for 5 timer counts.
  
  Slightly charges own Unique Gauge every time this character uses an Arts Card while they are on the battlefield.
  Applies the following effects to self once Unique Gauge is full:
  
  Randomly draws at most 4 new cards when you have 3 or fewer cards.
  Restores health by 30%.
  Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
  Nullifies unfavorable Element factors for 5 timer counts.
  Applies Buff Effect "Nullifies enemy's 'Destroy Card' effects" for 5 timer counts.
  Applies Buff Effect "Nullifies enemy's 'Reduce Ki' effects" for 5 timer counts.
  Applies Buff Effect "Nullifies enemy's autocounters, Evade Actions, and special actions that activate when changing cover" for 10 timer counts.
  
  The following effects occur when enemy activates an Ultimate Arts, Awakened Arts, or Rising Rush while this character is on the battlefield (activates three times):
  
  Shortens allies' substitution counts by 5.
  Cancels enemy's Attribute Upgrades & Buff Effects.`
      }
    ],
    zAbility: [
      {
        level: "I",
        effect: `+22% to "Tag: Future" base Strike & Blast Attack during battle.`
      }
    ],
    heldArtsCards: [
      {
        type: "Strike",
        effect: "Strike (Impact) with Blast Damage armor."
      },
      {
        type: "Blast (Sustained Damage UP)",
        effect: "Inflicts enemy with Attribute Downgrade \"+10% to Damage Received\" for 15 timer counts on hit."
      }
    ],
    extraArtsCard: {
      name: "Atomic Overflow",
      description: `Randomly draws 1 new card.
  Restores own health by 15% and Ki by 50.
  Charges own Unique Gauge by 20%.
  +20% to damage inflicted for 15 timer counts.
  Shortens allies' substitution counts by 1.
  Inflicts all enemies with Attribute Downgrade "-50% to Health Restoration" for 10 timer counts.`
    },
    specialArtsCard: {
      name: "Atomic Strike",
      description: `Deals massive Impact damage.
  +30% to Special Move damage inflicted for 3 timer counts upon activation.
  Applies the following effects to enemy on hit:
  
  Randomly destroys 3 cards.
  Reduces Ki by 50.
  Reduces Dragon Balls by 1 (activates once).
  
  *Blast Armor when charging forward.`
    }
  };
  

  export const SSJ3_GOTENKS: CharacterDetails = {
    name: "Super Saiyan 3 Gotenks",
    title: "The Grim Reaper of Justice",
    image: "/ssj3-gotenks.webp",
    stats: {
      hp: 24800,
      strikeAtk: 2637,
      strikeDef: 1740,
      blastAtk: 2637,
      blastDef: 1722,
      pierceResist: 100,
      sliceResist: 100,
      impactResist: 100,
      explodeResist: 100,
      criticalRate: "13.31%",
      kiRecover: "22.13%",
      vanishRecover: "20.00%",
      changeCd: "8s"
    },
    traits: {
      tags: [
        "Hybrid Saiyan",
        "Kids",
        "Fusion",
        "Fusion Warrior",
        "Super Saiyan 3",
        "Male",
        "SPARKING"
      ],
      type: "Ranged Type",
      color: "RED",
      saga: "Majin Buu Saga (Z)",
      characterName: "Gotenks",
      style: "Speedy Attacker",
      abilities: [
        "Healer",
        "Fast Draw (Multi)",
        "Ultimate Arts",
        "Special Cover Change (Strike)",
        "Special Cover Change Nullification",
        "Unfavorable Element Factor Nullification",
        "Unique Gauge",
        "Endurance"
      ]
    },
    mainAbility: {
      name: "I'm gonna tear you apart into millions and millions of pieces!",
      description: `Randomly destroys 1 of your own cards and draws the Ultimate Arts Card "Charging Ultra Buu Buu Volleyball" next.
  Randomly draws at most 3 new cards when you have 3 or fewer cards.
  Restores own health by 30% and Ki by 50.
  Charges own Unique Gauge by 100%.
  Nullifies enemy's "Restores health when it reaches 0" effects when this character attacks for 10 timer counts.
  Nullifies own unfavorable Element factors for 10 timer counts.`,
      requirements: "25 timer counts must elapse"
    },
    uniqueAbilities: [
      {
        name: "Super Fusion Outburst",
        description: `Shortens own substitution count by 2 as default.
  
  Applies the following effects to self when battle starts:
  
  +140% to damage inflicted (cannot be cancelled).
  Reduces damage received by 70% (cannot be cancelled).
  +70% to Ki Recovery (cannot be cancelled).
  Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
  -5 to Arts costs (cannot be cancelled).
  
  Also applies the following effects to self from battle start for 100 timer counts:
  
  +30% to damage inflicted (cannot be cancelled).
  Increases Arts Card Draw Speed by 1 level (cannot be cancelled).
  -5 to Arts costs (cannot be cancelled).
  +20% to Health Restoration (cannot be cancelled).
  +50% to Unique Gauge charge rate (cannot be cancelled).
  Nullifies unfavorable Element factors for damage sustained (cannot be cancelled).
  Nullifies Attribute Downgrades and Abnormal Conditions (cannot be cancelled).
  
  The following effects occur when this character enters the battlefield:
  
  Restores own health by 15% and Ki by 30.
  +100% to damage inflicted (cannot be cancelled) (activates once).
  Reduces Impact, Explode & Slice damage received by 10% for 10 timer counts.
  Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" to self for 5 timer counts.
  Destroys 1 enemy Strike and Special Move Arts card.
  
  The following effects occur when this character performs a Vanishing Step:
  
  Randomly destroys 1 of your own cards and draws a Special Arts Card next (activates three times).
  Destroys 1 of your enemy's Strike Arts Cards.
  Inflicts all enemies with Attribute Downgrade "-1 Arts Card Draw Speed level" for 5 timer counts.`
      },
      {
        name: "Rambunctious Savior",
        description: `Knocks enemy back to long range if a cover change is performed against their Strike Arts attack (activates during assists).
  
  [Comboable Arts]
  Special Move Arts
  
  Charges own Unique Gauge every time this character uses an Arts Card while they are on the battlefield.
  The following effects occur once Unique Gauge is full:
  
  Randomly draws 1 new card when you have 3 or fewer cards.
  Restores own Ki by 50.
  +20% to damage inflicted (cannot be cancelled).
  Effect resets after character switch.
  +10% to damage inflicted (cannot be cancelled) (activates five times).
  Applies Attribute Upgrade "-4% to enemy's 'Sustained Damage CUT' effects" to allies (cannot be cancelled) (activates five times).
  Seals enemy's Strike and Special Move Arts.
  The sealed Arts cannot be used for 5 timer counts.
  
  If own Unique Gauge is full when this character is switched to standby, it resets to zero and the following effects occur:
  
  Randomly draws 1 new card when you have 3 or fewer cards.
  +50% to own next Arts damage inflicted (not expended on miss) (cannot be stacked) (cannot be cancelled).
  Restores ally health by 10% and Ki by 50.
  
  The following effects occur when own health reaches 0 (activates once):
  
  Restores own health by 30%.
  +30% to damage inflicted by allies (cannot be cancelled).
  
  Shortens own substitution count by 3 when enemy activates a Special Move Arts, Ultimate Arts, Awakened Arts, or Rising Rush while this character is on standby.`
      }
    ],
    zAbility: [
      {
        level: "I",
        effect: `+22% to "Episode: Majin Buu Saga (Z)" base Strike & Blast Defense during battle.`
      }
    ],
    heldArtsCards: [
      {
        type: "Strike",
        effect: "Restores Vanishing Gauge by 10% upon activation."
      },
      {
        type: "Blast [Damage UP]",
        effect: "+10% to damage inflicted to self for 10 timer counts when used."
      }
    ],
    extraArtsCard: {
      name: "The Grim Reaper of Justice Has Arrived!!",
      description: `Randomly draws 1 new card.
  Restores own Ki by 50.
  Restores own Vanishing Gauge by 60%.
  +100% to own Unique Gauge charge rate for 10 timer counts (cannot be stacked).
  Destroys 3 of your enemy's Strike Arts Cards.
  
  [If Unique Gauge is full]
  +30% to damage inflicted for 15 timer counts.
  Applies Buff Effect "Nullifies enemy's special actions that activate when changing cover" to self for 5 timer counts.`
    },
    specialArtsCard: {
      name: "Final Flash",
      description: `Deals massive Impact damage.
  Nullifies own unfavorable Element factors for 10 timer counts upon activation.
  
  Applies the following effects to enemy on hit:
  
  60% chance to reduce Dragon Balls by 1.
  20% chance to inflict Faint.
  
  [If Unique Gauge is full]
  +40% to Special Move damage inflicted for 3 timer counts upon activation.
  
  *Blast Armor when charging forward.`
    },
    ultimateArtsCard: {
      name: "Charging Ultra Buu Buu Volleyball",
      description: `Deals massive Impact damage.
  +30% to Ultimate damage inflicted for 3 timer counts upon activation.
  Destroys all of your own cards upon activation.
  Applies the following effects to self based on the types of Arts Cards destroyed:
  
  Strike Arts Card: +50% to Strike damage inflicted for 10 timer counts (cannot be stacked).
  Blast Arts Card: +50% to Blast damage inflicted for 10 timer counts (cannot be stacked).
  Special Move Arts Card: Applies Attribute Upgrade "-50% to enemy's 'Sustained Damage CUT' effects" for 10 timer counts (cannot be stacked).
  Special Arts Card: +50% to Critical Rate for 10 timer counts (cannot be stacked).
  
  Randomly draws 4 new cards on hit.
  
  *Blast Armor when charging forward.`,
      requirements: "Available via Main Ability"
    }
  };
  
  // Update ALL_CHARACTERS
  export const ALL_CHARACTERS: CharactersMap = {
    'ssj2-goku': SSJ2_GOKU,
    'ul-majin-vegeta': ULTRA_MAJIN_VEGETA,
    'vegito-blue': VEGITO_BLUE,
    'ssj3-gotenks': SSJ3_GOTENKS
  };
  
  // Update CharacterId type
  export type CharacterId = 'ssj2-goku' | 'ul-majin-vegeta' | 'vegito-blue' | 'ssj3-gotenks';