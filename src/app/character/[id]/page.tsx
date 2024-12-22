import CharacterDetail from '../../../components/Character';
import type { CharacterDetails } from '../../../types';

// You would typically fetch this data based on the ID
const characterData: CharacterDetails = {
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
  - -5 to Arts costs (cannot be cancelled).
  
  The following effects occur when this character enters the battlefield:
  - Randomly draws 1 new card when you have 3 or fewer cards.
  - Restores health by 10% and Ki by 20.
  - Charges Unique Gauge by 10%.
  - +60% to damage inflicted (cannot be cancelled) (activates once).
  - Reduces Impact, Explode & Slice damage received by 10% for 15 timer counts.
  
  Effects when using a Strike or Blast Arts Card:
  - Randomly draws 1 new card (activates twice).
  - Activation count resets after character switch.
  - +15% to damage inflicted for 10 timer counts.
  - Inflicts all enemies with Attribute Downgrade "-15% to Health Restoration" for 10 timer counts.
  
  Effects when enemy switches characters while this character is on the battlefield:
  - Restores own Ki by 30.
  - Shortens allies' substitution counts by 2.
  - Inflicts enemy with Attribute Downgrade "+10% to Damage Received" for 15 timer counts.
  - Inflicts enemy with Attribute Downgrade "-1 Arts Card Draw Speed level" for 15 timer counts.`
      },
      {
        name: "Earthshaking Super Power",
        description: `Knocks enemy back to long range if a cover change is performed against their Strike Arts attack (activates during assists).
  
  [Comboable Arts]: Special Move Arts
  
  Effects when changing cover:
  - Randomly destroys 1 enemy card.
  - Randomly destroys 1 enemy card (activates three times).
  *Activation count is shared before and after transforming.
  - Inflicts all enemies with Attribute Downgrade "+5 to Strike, Blast & Special Move Arts costs" for 10 timer counts.
  
  Effects when enemy activates certain Arts or Rising Rush:
  - Restores own health by 15% (activates three times).
  *Activation count is shared before and after transforming.
  - Shortens allies' substitution counts by 3.
  - Cancels enemy's Attribute Upgrades & Buff Effects (activates three times).
  *Activation count is shared before and after transforming.
  
  While on standby:
  - Shortens own substitution count by 3 when enemy activates an Ultimate Arts, Awakened Arts, or Rising Rush.
  
  Effects upon defeat:
  - Restores ally health by 20%.
  - +50% to own Unique Gauge charge rate when an ally other than this character is defeated (cannot be cancelled) (activates once).
  
  While on the battlefield:
  - Quickly charges own Unique Gauge according to Ki charge time.
  
  Once Unique Gauge is full:
  - Draw a Special Arts Card next.
  - Restores ally health by 15%.
  - +15% to damage inflicted by allies (cannot be cancelled).
  - Seals enemy's Special Move Arts. (Sealed Arts cannot be used for 5 timer counts.)`
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
  

export default function CharacterPage( ) {
  return <CharacterDetail character={characterData} />;
}