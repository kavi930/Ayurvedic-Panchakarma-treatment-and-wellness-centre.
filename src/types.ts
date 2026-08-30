export interface Therapy {
  id: string;
  name: string;
  sanskritName: string;
  category: 'detox' | 'nervous' | 'rejuvenation' | 'metabolic';
  tagline: string;
  description: string;
  duration: string;
  idealDosha: string[];
  imageUrl: string;
  featured?: boolean;
  benefits: string[];
  keyHerbs: string[];
  protocolSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  contraindications: string[];
  priceEstimate: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  durationLabel: string;
  idealFor: string;
  description: string;
  imageUrl: string;
  priceStarting: string;
  highlights: string[];
  dailySchedule: {
    time: string;
    activity: string;
    category: 'dinacharya' | 'yoga' | 'therapy' | 'diet' | 'meditation';
  }[];
  includedTherapies: string[];
  dietaryPlan: string;
}

export interface DoshaInfo {
  name: 'Vata' | 'Pitta' | 'Kapha';
  sanskrit: string;
  elements: string;
  governance: string;
  qualities: string[];
  physicalTraits: string[];
  mentalTraits: string[];
  signsOfImbalance: string[];
  balancingTips: {
    diet: string[];
    lifestyle: string[];
    herbs: string[];
  };
  recommendedTherapies: string[];
  color: string;
  accentColor: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    text: string;
    dosha: 'Vata' | 'Pitta' | 'Kapha';
    description: string;
  }[];
}

export interface QuizResult {
  dominantDosha: 'Vata' | 'Pitta' | 'Kapha' | 'Vata-Pitta' | 'Pitta-Kapha' | 'Vata-Kapha' | 'Tridoshic';
  vataScore: number;
  pittaScore: number;
  kaphaScore: number;
  vataPercentage: number;
  pittaPercentage: number;
  kaphaPercentage: number;
  summary: string;
  recommendations: {
    diet: string[];
    therapies: string[];
    lifestyle: string[];
    herbs: string[];
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface BookingForm {
  programId?: string;
  therapyId?: string;
  fullName: string;
  email: string;
  phone: string;
  startDate: string;
  durationDays: number;
  retreatLocation: 'Kerala Backwaters Sanctuary' | 'Himalayan Foothills Sanctuary';
  knownDosha?: string;
  healthGoals: string[];
  notes?: string;
  roomType: 'Deluxe Garden Villa' | 'Ayurvedic Heritage Suite' | 'Serenity River Pavilion';
}
