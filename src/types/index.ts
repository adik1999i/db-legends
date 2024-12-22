// Base interfaces
interface TeamMember {
    name: string;
    attack: string;
    defense: string;
    imageSrc: string;
  }
  
  interface Team {
    name: string;
    description: string;
    image: string;
    members: TeamMember[];
  }
  
  interface Character {
    id: string;
    name: string;
    element: string;
    tier: string;
    imageSrc: string;
    attack: string;
    defense: string;
  }
  
  // Character Details interfaces
  interface CharacterStats {
    hp: number;
    strikeAtk: number;
    strikeDef: number;
    blastAtk: number;
    blastDef: number;
    pierceResist: number;
    sliceResist: number;
    impactResist: number;
    explodeResist: number;
    criticalRate: string;
    kiRecover: string;
    vanishRecover: string;
    changeCd: string;
  }
  
  interface CharacterTraits {
    tags: string[];
    type: string;
    color: string;
    saga: string;
    characterName: string;
    style: string;
    abilities: string[];
  }
  interface ZAbility {
    level: string;
    effect: string;
  }
  
  interface HeldArtsCard {
    type: string;
    effect: string;
  }
  
   interface ExtraArtsCard {
    name: string;
    description: string;
  }
  
   interface SpecialArtsCard {
    name: string;
    description: string;
  }  

   interface UltimateArtsCard {
    name: string;
    description: string;
    requirements?: string;
  }
  
   interface CharacterDetails {
    name: string;
    title: string;
    image: string;
    stats: CharacterStats;
    traits: CharacterTraits;
    mainAbility: {
      name: string;
      description: string;
      requirements: string;
    };
    uniqueAbilities: Array<{
      name: string;
      description: string;
    }>;
    zAbility: ZAbility[];
    heldArtsCards: HeldArtsCard[];
    extraArtsCard: ExtraArtsCard;
    specialArtsCard: SpecialArtsCard;
    ultimateArtsCard?: UltimateArtsCard;  // Optional since not all characters have it
  }
  
  
  // Featured Card Props
  interface FeaturedCardProps {
    title: string;
    description: string;
    imageSrc: string;
    type: 'character' | 'team' | 'guide';
    characterId?: string;
    stats?: {
      attack?: string;
      defense?: string;
      [key: string]: string | undefined;
    };
  }
  
  // Team Dialog Props and Details
  interface TeamDialogProps {
    team: Team | null;
    isOpen: boolean;
    onClose: () => void;
  }
  
  interface TeamDetails {
    image: string;
    subtitle: string;
    description: string;
    strategy: string;
  }
  
  interface TeamDetailsMapping {
    [key: string]: TeamDetails;
  }
  
  export type {
    TeamMember,
    Team,
    Character,
    CharacterStats,
    CharacterTraits,
    CharacterDetails,
    FeaturedCardProps,
    TeamDialogProps,
    TeamDetails,
    TeamDetailsMapping
  };