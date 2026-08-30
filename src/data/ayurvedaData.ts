import { Therapy, Program, DoshaInfo, QuizQuestion } from '../types';

export const ASSETS = {
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi1uXkit1Q760HdhStvIdTgsRplM1WG8NOO1j65o2ES3rN-GT4lKfFPdGdQuqXIgVuJIia9OqfClJT9ffpT5qG7gN9ZvWmOQajUi-p__TE8zCBLeJLwds80K-HET0InHs2EnXMtgQe4_o9UqDGfolYHgycQ9u8yhWK2cd9UM8pTr5_7anJ4RtKj1DX20eEXwLEhX7UY0P1-ReIovsRoLvZNJ_QzDyqAO4-o6h4aQm_u62TMaBB9UGH',
  essenceBowl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATtBvhDsXpaR84idKtHunE7DqYMSThrj497psiRhG3KpX9PouUR4xWtkb1RG2PEE9kATKUExTPTZHbzqlDv8fp8Re6s2sIYN5-S8Abj6heY2wSV55HiF2jCUjuMFC9B4lB-5A50rUyHPz6wrvyys3IG29EmEg28n6gx6TbCZ-TGk0cDO68Q0NwBrXKON5pe-mXghRwZw8Kw_6JUG5IwKndMBg5tbs3jylfgIWGNJjzyQhvK4uOalN3',
  assistantAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZNbTUrxflHuPJV_zgMrkEQWFdXLEBv9_uXIHtEiUYsBESG5Ybnr6W8ORHRQF__EMM7I8bTgXLHchDWEu6Jw9GygOJ4tV8vC-SOVD3aZ6C6pOQgQA4MG-mMnkqxfW4qUIOVELpwcTHb59JPSyvVEMpr3IjxNGebatVicXFWq4hRonDHRpmKF06H-i7uW1w0v0H_GQTcZdjhZI1FdbCoRn7m4TFVAcUNerW9CnthSf7FBRQCM7HIivF',
  scienceHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5b9cppLM7q8FRF544N7PAglg8JJKUiKAc3MSKBhKREXziR2LvUFsWHNPrLlHDBAOC_4ZirV5vw6WlfdnBgc2tHZ_b69yCj6-61ciAFQmKMdT5EwTMwBJVupUlvnGFRLgu3gSqgtkaAZ1by_CpuAj9p5sMFhDlIuOGHZR-iTveAFtTo5l4QuU8_K41S5kCqoI42RwNB5VNioBnZKIvV3IpVMaJOC1rhH1hFS2M1Su1OkdYYlAt4Rro',
  programRejuvenation: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANqnkSa-zcGkOiL6-_tbyWsduy6xaY6rAiuvDaF84wU4Lgj7zqRWkBSwmCH6HJ1YqFmddFAsuVc-VfVj3CmdvfzPWLIAniaRuf9FnZtW0ppdAKVRjz8yTeqkmCbUxCEnzDyvQAAo6St0e0NiOHobwB9Xi8J5IeUC49TJ09rSsaDUcYfv9Vzexirg08m8Pe-w9B1MDtK2v6l97195VYK2zcnRvQx2An4VI6S0hr5-QRq1htflgzYiH1',
  programStress: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0lCE2hUnpq0voxmNwVbrJep-ROddIFpBS5vSYtVeafKx3or-D5xmAFWjpJVp3E8el5IsfhvSEaQqgMTQ-ZPiKexzkXkygRph3u7Z-fbLil0qWrdCkG-Xu9HsnGqMtgSuSDKnbLzmyvCqYxh07u85dGAZ6zil0el2TRZ0ZAuOV14Q5CQ24U-NsC7vjyvh1ONrPebR-VMYixpfWhcDoox3W3MQ6Te-paaWNAygkpv1hELJ9YI7R02R',
  programDetox: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpNkexoPJMh6wPnBPMllzx2YfSI5NWpq4H_Iize6juPcRJuNgRNxK8RUQDMOTU3vMuuDBOEiUlyXStRNoxKu4JGRFPQXWY69wBUGfFkoLY4jwh2HHhiLi5yjuNCEPzdhdtlz6F4SlEO2ZbJikuJ62lC8wFb3Kesml9Tptb9v_SIhDkUwfg_z5eDHj479t3S6FgcPbJDYc8lZlQUVnKwYGZesM7erdwQ8TN-Y_JJF9lXEQNxmXp2FH3',
  therapyAbhyanga: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtb2SaecjeijGtLyU_IsRJik3wvSfGDHj4JxvdmHfRbYFaySLRfHkvGMHmgUDTZyiORLELPqkoU_7pGSpc2mnUYKmHUe99Sw-6hTmki8oug9gylF0q3Vn1YjCooMsiqiLMdeTU_1Rs5i9tTu0-E2ypnj-AHz1SzDL-rGFrk08evb8OnPepwG8UiZiQc0WZ552mEY5mR4kh0NSO76wHNvZmZWNneiARRzJQoV4_Yy15DBIc9Drb93r7',
  therapyShirodhara: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALNoB-VFth3yC6WDybKNrr6hXjCgpq2jb3speks8ISBktmOXBzVtjKX2HBg_gsxWhtdEF_-Onxp4DUXwWjSLpUC7zVB3uQbdCRfLkarRNEZemGL1Fjy3KADPN4CJnPhd6TtBsZL0Lin3HcJDSR343hAf07B_iVSSdeEEje0l-a9S33tdn79OjjWGTHg3RZHPqOGBjjS5XLd1KoVRqPoBzvFk5wzYgngCnDX0I_0FALAvmHSEWdYT3t',
  therapySwedana: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG23NC4lCabnQcxK5bTiEG9QMm1CavcYYZ6cYwqS19CsC0T58pINWU9chVj0oGFgAR4uDc_IRpPnMbFxfhw-M1sXFcmbd9R2FG3o2pAH2JrUAaUGvuZozPluUIXFQzCnEXqPpkjt748-bd7h1Hzb34GBnYEIWTzzhjIw1x-RpEiHoQhHF3Te1jv7yZbjZlqY0Fsl-XW0Y41la_nvFbsPlB2sqd37qt8q5LqqUaLI4SUNtjMdrb56fW',
  therapyPizhichil: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgXIPzqlK_PkrqaBFErlpYghdTNGAXSg4_U-0TT2gf1eZw8S4Mqr5KbGcn0qNeBxvTowmv08jnfgMvGfvT6TcDNWb13epyrH_fBrkxUNvirvDWatqQxEkVB-sVpg6EHx4stDgU4OcDzFnMhB6iriUCxDj-5wgZYf2T8MPLKGRiaPuOCwLn38yyz04cfWhHCBGqb2vs4YYnQVlBA5hIvD1iVhrvtXIHDoIwD6x_PU-zrbGHVU6GAxDs',
  therapyNasya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5gf1Q1o8Jeki-RMNbRDhVPbQEaGSuytik3_QdP7DIKtfCyLQL4Ge-aMaovViFeh5_IYvjoQqpou_9IfEeyONCXk8K3456zG0k-m0ATzqh_la5IETHJk1VfnKHVgICNX-d-b27FK61jBLSLi0NvgSMKytNkfm5ValgbUwYp75G_FJ-aGFKZUE4QNU8-cn2ufz2T3ZszXGDEZSoo7m6SCpEMZxZOZcU_bqz6fJHAHym_Z4gDbheBtBl',
  therapyUdvartana: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5BRXQQ_RlumyU06Z_gktyD5M1EQ6Ia1-2clX_qiV9l_HsdpIGyUY1nGQw_Eg04C0J_TPak6ewVqXTzyPaMT6tRRx0YzsLenvpbeJKsiPsVD9qRDp_pk97LY0fH3_at0VhSvB9OstqdBJyS5444bJYWOajgqReL7BUIgLCHTwaG1m3clFvxdK35-pvAAiilfhCwzomsUxVBZXd7Xwb_YKi48aXsMY8ly1MuDVZ3GN8T_3aN9_zKZPl',
  ctaTexture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5VaiV52BpUNlUgurILdbc2g--v17txJh4TxOEwy5ok1FmqIPdaK-YRzcZKXnj0UQMHpZBbvh7Fg998Te_xpRwFJADX6MnTpfxUql8EdsyE506bCslP0w4zpA3URCdg1QcRptrhsda-6KprTV_C_rVEdkZa3V5UBkSZYYJkDcXWk0Mu1dGhiOjvuNfL05JpVij3vwIbWzpQxolN53SQD-ogsnYtGIVR_KAW_Ah0B4Pdf81jzUewPlG'
};

export const THERAPIES: Therapy[] = [
  {
    id: 'abhyanga',
    name: 'Abhyanga',
    sanskritName: 'अभ्यङ्ग',
    category: 'rejuvenation',
    tagline: 'Synchronized Full-Body Herbal Oleation Massage',
    description: 'A rhythmic, full-body warm oil massage performed by two synchronized Ayurvedic therapists using tailored botanical oils cooked with 30+ herbs over brass cauldrons.',
    duration: '60 - 90 Minutes',
    idealDosha: ['Vata', 'Pitta', 'Kapha'],
    imageUrl: ASSETS.therapyAbhyanga,
    featured: true,
    priceEstimate: '$140 / session',
    benefits: [
      'Lubricates deep joint tissues and dissolves micro-stiffness',
      'Stimulates lymphatic drainage and cellular waste elimination',
      'Nourishes all 7 Dhatus (bodily tissues) from plasma to marrow',
      'Restores skin luster, vitality, and deep neuromuscular tone'
    ],
    keyHerbs: ['Mahanarayan Oil', 'Ashwagandha', 'Bala Root', 'Sesame Matrix'],
    protocolSteps: [
      { stepNumber: 1, title: 'Pulse & Dosha Diagnostics', description: 'Vaidya determines the specific heated herbal formulation for the day.' },
      { stepNumber: 2, title: 'Synchronized Anointing', description: 'Two therapists work in precise 7-position classical choreography.' },
      { stepNumber: 3, title: 'Marma Pressure Points', description: 'Gentle activation of vital energy points along meridians.' },
      { stepNumber: 4, title: 'Herbal Thermal Rest', description: 'Tissues absorb medicated lipids before light steam swedana.' }
    ],
    contraindications: ['Acute fever', 'Severe indigestion (Ama)', 'Active skin infections']
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    sanskritName: 'शिरोधारा',
    category: 'nervous',
    tagline: 'Continuous Medicated Oil Stream on the Third Eye',
    description: 'A continuous, rhythmic stream of warm medicated herbal oil, buttermilk, or herbal decoctions poured onto the forehead (Ajna chakra) to soothe the autonomic nervous system.',
    duration: '45 - 60 Minutes',
    idealDosha: ['Vata', 'Pitta'],
    imageUrl: ASSETS.therapyShirodhara,
    featured: true,
    priceEstimate: '$160 / session',
    benefits: [
      'Induces profound alpha-theta brainwave states and deep peace',
      'Alleviates chronic insomnia, anxiety, panic, and mental exhaustion',
      'Regulates autonomic stress hormones (cortisol & adrenaline)',
      'Improves memory recall, mental clarity, and ocular tension'
    ],
    keyHerbs: ['Brahmi (Bacopa)', 'Ksheerabala 101 Taila', 'Shankhpushpi', 'Jatamansi'],
    protocolSteps: [
      { stepNumber: 1, title: 'Scalp & Neck Preparation', description: 'Warm herbal oil application on upper spinal and cranial channels.' },
      { stepNumber: 2, title: 'Rhythmic Oil Pendulum', description: 'A copper vessel continuously oscillates warm herbal oil across the brow.' },
      { stepNumber: 3, title: 'Neurological Stillness', description: '20 minutes of meditative silent absorption.' },
      { stepNumber: 4, title: 'Warm Herbal Rinse', description: 'Removal of oil with organic chickpea and shikakai powder.' }
    ],
    contraindications: ['Severe conjunctivitis', 'Acute sinus blockage with fever', 'Severe neck trauma']
  },
  {
    id: 'swedana',
    name: 'Swedana',
    sanskritName: 'स्वेदन',
    category: 'detox',
    tagline: 'Herbalized Steam Sudation & Micro-Channel Dilator',
    description: 'An aromatic herbal steam therapy inside a handcrafted cedar wood steam chamber, allowing medicated steam infused with Dashamoola roots to open Srotas (micro-channels).',
    duration: '30 - 45 Minutes',
    idealDosha: ['Vata', 'Kapha'],
    imageUrl: ASSETS.therapySwedana,
    priceEstimate: '$95 / session',
    benefits: [
      'Dilates Srotas (micro-channels) to mobilize locked cellular toxins (Ama)',
      'Relieves muscular spasms, joint stiffness, and chronic heaviness',
      'Keeps the head and heart cool while the body safely perspires',
      'Enhances post-massage oil bioavailability deep into bone marrow'
    ],
    keyHerbs: ['Dashamoola 10-Root Blend', 'Eucalyptus Leaves', 'Camphor', 'Nirgundi'],
    protocolSteps: [
      { stepNumber: 1, title: 'Head Cooling Band', description: 'Cool lotus rose compress placed on the brow and crown.' },
      { stepNumber: 2, title: 'Cedar Steam Immersion', description: 'Seated steam bath infused with decocted medicinal roots.' },
      { stepNumber: 3, title: 'Targeted Sudation', description: '15-20 minutes of regulated therapeutic perspiration.' },
      { stepNumber: 4, title: 'Electrolyte Herbal Tea', description: 'Coriander-cumin-fennel infusion to rebalance hydration.' }
    ],
    contraindications: ['Pregnancy', 'Severe dehydration', 'Uncontrolled hypertension']
  },
  {
    id: 'pizhichil',
    name: 'Pizhichil',
    sanskritName: 'पिऴिच्चिल्',
    category: 'rejuvenation',
    tagline: 'The Royal Treatment: Warm Medicated Oil Bath',
    description: 'Known historically as the Treatment of Kings (Maharaja Chikitsa), warm medicated oil is continuously squeezed over the whole body from cloth bundles while synchronized massage is applied.',
    duration: '60 - 75 Minutes',
    idealDosha: ['Vata'],
    imageUrl: ASSETS.therapyPizhichil,
    priceEstimate: '$180 / session',
    benefits: [
      'Unsurpassed deep nervous system rejuvenation and neuro-protection',
      'Reverses chronic muscular dystrophy, hemiplegia, and degenerative joint pain',
      'Provides intense cellular hydration to aged, dry bodily tissues',
      'Rebuilds Ojas (the subtle essence of immune vitality and radiant longevity)'
    ],
    keyHerbs: ['Dhanwantharam Thailam', 'Mahamasha Thailam', 'Shatavari', 'Licorice Root'],
    protocolSteps: [
      { stepNumber: 1, title: 'Kettle Oil Infusion', description: 'Gallons of warm herbal oil continuously maintained at exact body warmth.' },
      { stepNumber: 2, title: 'Dual Therapist Pouring', description: 'Continuous pouring through linen cloths with synchronous flowing strokes.' },
      { stepNumber: 3, title: 'Deep Tissue Sinking', description: 'Lipid absorption into fascia, joints, and peripheral nerves.' },
      { stepNumber: 4, title: 'Sattvic Rest Period', description: 'Warm herbal decoction bath to conclude.' }
    ],
    contraindications: ['High Kapha congestion', 'Acute inflammatory arthritis', 'Indigestion']
  },
  {
    id: 'nasya',
    name: 'Nasya',
    sanskritName: 'नस्य',
    category: 'nervous',
    tagline: 'Cranial Clearance & Medicated Nasal Administration',
    description: 'The nasal cavity is the direct classical gateway to the head and consciousness (Shiras). Medicated herbal drops, oils, or herbal smokes are gently instilled to clear cranial sinuses.',
    duration: '30 - 45 Minutes',
    idealDosha: ['Vata', 'Kapha'],
    imageUrl: ASSETS.therapyNasya,
    priceEstimate: '$85 / session',
    benefits: [
      'Clears deep chronic sinus congestion, allergies, and migraines',
      'Enhances mental acuity, sensory perception, and oxygenation',
      'Alleviates cervical spondylosis, jaw clenching (TMJ), and frozen shoulder',
      'Prevents premature graying of hair and stimulates hair follicles'
    ],
    keyHerbs: ['Anu Thailam', 'Shadbindu Oil', 'Kumkumadi', 'Tulsi Extract'],
    protocolSteps: [
      { stepNumber: 1, title: 'Facial Steam & Marma', description: 'Warm herbal steam towel applied to forehead, cheeks, and neck.' },
      { stepNumber: 2, title: 'Facial Oleation', description: 'Targeted massage over sinus cavities and temples.' },
      { stepNumber: 3, title: 'Micro-Droplet Instillation', description: 'Careful instillation of Anu Thailam into each nostril with deep inhalation.' },
      { stepNumber: 4, title: 'Medicated Herbal Gargle', description: 'Warm salt-turmeric water rinse to expel mobilized mucus.' }
    ],
    contraindications: ['Immediately after eating', 'Acute heavy nosebleed', 'Intoxication']
  },
  {
    id: 'udvartana',
    name: 'Udvartana',
    sanskritName: 'उद्वर्तन',
    category: 'metabolic',
    tagline: 'Lymphatic Detox & Herbal Powder Exfoliation',
    description: 'An invigorating, upward deep-tissue massage using warm, dry herbal powders (Choornas) and medicinal clays to stimulate subcutaneous fat metabolism and lymphatic circulation.',
    duration: '45 - 60 Minutes',
    idealDosha: ['Kapha'],
    imageUrl: ASSETS.therapyUdvartana,
    priceEstimate: '$125 / session',
    benefits: [
      'Breaks down stubborn subcutaneous adipose tissue and cellulite',
      'Stimulates sluggish lymphatic drainage and metabolic sluggishness',
      'Exfoliates dead skin cells, giving tone, firmness, and radiance to the epidermis',
      'Improves insulin sensitivity and reduces lethargy and water retention'
    ],
    keyHerbs: ['Triphala Powder', 'Karanja', 'Kolakulathadi Choornam', 'Musta Root'],
    protocolSteps: [
      { stepNumber: 1, title: 'Upward Powder Scrub', description: 'Deep friction strokes applied strictly against the direction of hair follicles (Pratiloma).' },
      { stepNumber: 2, title: 'Subcutaneous Activation', description: 'Targeted lymphatic manipulation on thighs, abdomen, and arms.' },
      { stepNumber: 3, title: 'Herbal Steam Chamber', description: 'Short Swedana session to sweat out mobilized toxins.' },
      { stepNumber: 4, title: 'Toning Herbal Wash', description: 'Nourishing botanical astringent splash.' }
    ],
    contraindications: ['Very dry, cracked Vata skin', 'Active eczema or psoriasis lesions', 'Extreme emaciation']
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'program-detox',
    title: 'Personalized Panchakarma Detox & Reset',
    subtitle: 'Comprehensive 7 or 14-Day Cellular Cleansing Sanctuary',
    durationDays: 7,
    durationLabel: '7 / 14 Days Immersion',
    idealFor: 'Chronic Fatigue, Digestive Weakness, Metabolic Sluggishness, Post-Stress Reset',
    description: 'A doctor-led authentic Panchakarma cleansing protocol designed to systematically dislodge deep cellular waste (Ama), rekindle digestive fire (Agni), and balance bio-energies.',
    imageUrl: ASSETS.programDetox,
    priceStarting: '$1,850 / week',
    highlights: [
      'Daily 1-on-1 Nadi Pariksha (Ayurvedic Pulse Diagnostics)',
      '2 Custom therapeutic sessions daily (Abhyanga, Swedana, Nasya, Basti)',
      'Individualized Sattvic Detox Cuisine (Tri-Doshic organic meals)',
      'Daily Sunrise Hatha Yoga, Pranayama, and Evening Yoga Nidra'
    ],
    includedTherapies: ['Abhyanga', 'Swedana', 'Nasya', 'Herbal Basti', 'Shirodhara'],
    dietaryPlan: 'Seasonal Kitchari cleanse, warm digestive teas, freshly pressed organic herbal decoctions, ghee oleation.',
    dailySchedule: [
      { time: '06:00 AM', activity: 'Ushapan (Herbal Infusion) & Morning Dinacharya Cleansing', category: 'dinacharya' },
      { time: '07:00 AM', activity: 'Therapeutic Yoga & Pranayama Breathwork', category: 'yoga' },
      { time: '08:30 AM', activity: 'Sattvic Organic Ayurvedic Breakfast', category: 'diet' },
      { time: '10:00 AM', activity: 'Morning Panchakarma Session (Abhyanga & Swedana)', category: 'therapy' },
      { time: '01:00 PM', activity: 'Medicinal Lunch & Doctor Consultation', category: 'diet' },
      { time: '03:30 PM', activity: 'Afternoon Specialized Therapy (Nasya / Marma Healing)', category: 'therapy' },
      { time: '06:00 PM', activity: 'Sunset Meditation & Vedic Chanting', category: 'meditation' },
      { time: '07:30 PM', activity: 'Nourishing Digestive Supper & Sleep Prep', category: 'diet' }
    ]
  },
  {
    id: 'program-stress',
    title: 'Stress Relief, Mental Clarity & Nervous Rebalance',
    subtitle: '5 or 7-Day Deep Neurological Sanctuary for Burnout',
    durationDays: 5,
    durationLabel: '5 / 7 Days Immersion',
    idealFor: 'Anxiety, Insomnia, Corporate Burnout, Sensory Overload, Hyperactive Vata',
    description: 'Calm the mind, restore deep restorative sleep, and calm nervous exhaustion through Shirodhara, herbal head steams, therapeutic oil baths, and restorative mindfulness.',
    imageUrl: ASSETS.programStress,
    priceStarting: '$1,450 / 5 days',
    highlights: [
      'Daily Shirodhara & Cranial Oil Therapy with Brahmi & Jatamansi',
      'Neuro-regenerative Pizhichil warm oil immersion sessions',
      'Private meditation & sound bath sessions with Tibetan singing bowls',
      'Sleep-enhancing herbal adaptogen protocols (Ashwagandha, Shankhpushpi)'
    ],
    includedTherapies: ['Shirodhara', 'Abhyanga', 'Pizhichil', 'Karna Poorana', 'Shirobhyanga'],
    dietaryPlan: 'Grounding warm root vegetables, soothing golden turmeric milk, almond-cardamom tonics, pacifying warm grains.',
    dailySchedule: [
      { time: '06:30 AM', activity: 'Gentle Guided Awakening & Brahmi Herbal Infusion', category: 'dinacharya' },
      { time: '07:30 AM', activity: 'Somatic Breathwork & Gentle Yin Yoga', category: 'yoga' },
      { time: '09:00 AM', activity: 'Warm Nourishing Sattvic Breakfast', category: 'diet' },
      { time: '10:30 AM', activity: 'Core Neurological Session: Shirodhara & Cranial Marma', category: 'therapy' },
      { time: '01:00 PM', activity: 'Grounding Lunch in Sanctuary Botanical Gardens', category: 'diet' },
      { time: '04:00 PM', activity: 'Restorative Abhyanga or Warm Herbal Foot Bath (Padabhyanga)', category: 'therapy' },
      { time: '06:30 PM', activity: 'Sound Healing & Trataka Candle Meditation', category: 'meditation' },
      { time: '08:00 PM', activity: 'Golden Elixir Tonic & Restorative Sleep Protocol', category: 'diet' }
    ]
  },
  {
    id: 'program-rejuvenation',
    title: 'Rasayana Rejuvenation & Cellular Longevity',
    subtitle: '14 or 21-Day Complete Tissue Regeneration Protocol',
    durationDays: 14,
    durationLabel: '14 / 21 Days Immersion',
    idealFor: 'Anti-Aging, Post-Illness Recovery, Auto-Immune Support, Radiant Ojas Building',
    description: 'The crown jewel of Ayurvedic medicine: a transformative longevity retreat that rebuilds all seven bodily tissue layers (Dhatus) and boosts the master immune essence (Ojas).',
    imageUrl: ASSETS.programRejuvenation,
    priceStarting: '$3,400 / 14 days',
    highlights: [
      'Full sequence: Purva Karma, Shodhana Cleansing & Rasayana Building',
      'Rare botanical gold and pearl preparations (Swarna Bhasma, Mukta)',
      'Intensive Daily Pizhichil, Udvartana, and Herbal Enemas',
      'Comprehensive take-home 90-day herbal longevity regimen'
    ],
    includedTherapies: ['Pizhichil', 'Abhyanga', 'Udvartana', 'Swedana', 'Rasayana Basti', 'Nasya'],
    dietaryPlan: 'Organic Rasayana superfoods, cultured A2 ghee infusions, amla gooseberry preserves (Chyawanprash), saffron milk.',
    dailySchedule: [
      { time: '05:45 AM', activity: 'Brahma Muhurta Awakening & Copper Pot Water Cleansing', category: 'dinacharya' },
      { time: '06:45 AM', activity: 'Longevity Yoga, Kriya Cleansing & Pranayama', category: 'yoga' },
      { time: '08:30 AM', activity: 'Nutrient-Dense Regenerative Breakfast', category: 'diet' },
      { time: '10:00 AM', activity: 'Intensive Royal Therapy (Pizhichil / Synchronized Abhyanga)', category: 'therapy' },
      { time: '01:00 PM', activity: 'Doctor Review & Tridosha Regenerative Feast', category: 'diet' },
      { time: '03:30 PM', activity: 'Udvartana Herbal Scrub or Rasayana Facial Mask', category: 'therapy' },
      { time: '06:00 PM', activity: 'Pranic Energy Meditation & Sacred Chants', category: 'meditation' },
      { time: '07:45 PM', activity: 'Restorative Dinner & Ashwagandha Ojas Elixir', category: 'diet' }
    ]
  }
];

export const DOSHAS: Record<string, DoshaInfo> = {
  Vata: {
    name: 'Vata',
    sanskrit: 'वात',
    elements: 'Ether (Space) + Air (Vayu)',
    governance: 'Movement, nervous system, breath, circulation, elimination, and creativity.',
    qualities: ['Dry', 'Light', 'Cold', 'Rough', 'Subtle', 'Mobile'],
    physicalTraits: ['Light, slender bone frame', 'Dry skin and fine hair', 'Tendency toward cold extremities', 'Variable digestion and appetite', 'Light, interrupted sleep'],
    mentalTraits: ['Quick, imaginative mind', 'Enthusiastic and expressive', 'High creativity and intuition', 'Learns quickly, forgets quickly'],
    signsOfImbalance: ['Anxiety, restlessness, insomnia', 'Constipation and abdominal bloating', 'Dry, flaky skin and stiff joints', 'Mental fatigue and erratic energy'],
    balancingTips: {
      diet: ['Favor warm, freshly cooked, grounding foods', 'Emphasize healthy fats (ghee, sesame oil, avocados)', 'Sweet, sour, and salty tastes', 'Avoid raw, cold salads, iced drinks, and dried beans'],
      lifestyle: ['Maintain steady daily routines and regular sleep schedules', 'Daily warm oil massage (Abhyanga) with sesame oil', 'Gentle, grounding yoga and restorative walking in nature', 'Stay warm and avoid cold, windy drafts'],
      herbs: ['Ashwagandha (Adaptogen & nerve tonic)', 'Brahmi (Mind pacifier)', 'Haritaki (Gentle bowel toner)', 'Bala (Strength builder)']
    },
    recommendedTherapies: ['Abhyanga', 'Shirodhara', 'Pizhichil', 'Matra Basti'],
    color: '#8b9b8e',
    accentColor: '#334537'
  },
  Pitta: {
    name: 'Pitta',
    sanskrit: 'पित्त',
    elements: 'Fire (Tejas) + Water (Jala)',
    governance: 'Digestion, metabolism, body temperature, enzymes, vision, and intellect.',
    qualities: ['Hot', 'Sharp', 'Light', 'Oily', 'Spreading', 'Liquid'],
    physicalTraits: ['Medium, athletic build', 'Warm skin with freckles or redness', 'Strong, sharp appetite and thirst', 'Sound, medium-length sleep', 'Excessive sweating and body heat'],
    mentalTraits: ['Sharp intellect and focus', 'Organized, ambitious, and precise', 'Natural leadership qualities', 'Courageous and articulate'],
    signsOfImbalance: ['Acid reflux, heartburn, and ulcers', 'Inflammatory skin rashes and acne', 'Irritability, anger, and impatience', 'Excessive body heat and burning sensations'],
    balancingTips: {
      diet: ['Favor cooling, hydrating, and nourishing foods', 'Sweet, bitter, and astringent tastes', 'Cucumber, coconut, leafy greens, melons, basmati rice', 'Avoid chili, spicy salsa, fermented foods, vinegar, alcohol, and caffeine'],
      lifestyle: ['Avoid excessive heat and direct midday sun exposure', 'Practice cooling Pranayama (Sheetali & Sheetkari)', 'Cultivate playfulness, relaxation, and non-competitive recreation', 'Moon bathing and serene nature walks by water'],
      herbs: ['Shatavari (Cooling rejuvenator)', 'Guduchi (Immune modulator)', 'Neem (Blood purifier)', 'Amla (High natural Vitamin C)']
    },
    recommendedTherapies: ['Shirodhara with coconut/brahmi oil', 'Abhyanga with sandalwood/sunflower oil', 'Virechana (Purgation)', 'Takradhara'],
    color: '#c5a059',
    accentColor: '#775a19'
  },
  Kapha: {
    name: 'Kapha',
    sanskrit: 'कफ',
    elements: 'Water (Jala) + Earth (Prithvi)',
    governance: 'Structure, lubrication, immunity, cellular cohesion, and stability.',
    qualities: ['Heavy', 'Slow', 'Cool', 'Oily', 'Smooth', 'Dense', 'Soft'],
    physicalTraits: ['Broad, sturdy, solid bone structure', 'Thick, lustrous hair and large eyes', 'Smooth, hydrated, supple skin', 'Steady digestion, slow appetite', 'Deep, prolonged sleep with difficulty waking'],
    mentalTraits: ['Calm, tolerant, and forgiving nature', 'Loyal, grounded, and steady', 'Excellent long-term memory', 'Methodical and supportive'],
    signsOfImbalance: ['Weight gain and sluggish metabolism', 'Excessive mucus, sinus congestion, and allergies', 'Lethargy, depression, and excessive sleepiness', 'Mental fog and resistance to change'],
    balancingTips: {
      diet: ['Favor light, warm, dry, and stimulating meals', 'Pungent, bitter, and astringent tastes', 'Abundant spices (ginger, black pepper, turmeric, cinnamon)', 'Minimize heavy dairy, sweets, fried foods, and cold treats'],
      lifestyle: ['Engage in vigorous daily exercise and cardio', 'Wake up early before sunrise (before 6:00 AM)', 'Seek new experiences, challenges, and variety', 'Dry brushing and vigorous Udvartana herbal scrubs'],
      herbs: ['Trikatu (Digestive fire stimulant)', 'Tulsi (Holy Basil for respiratory clear)', 'Guggulu (Metabolic and lipid detox)', 'Punarnava (Fluid balancer)']
    },
    recommendedTherapies: ['Udvartana (Powder scrub)', 'Swedana (Steam sweating)', 'Vamana', 'Nasya'],
    color: '#65776a',
    accentColor: '#223025'
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Body Frame & Structure',
    question: 'How would you describe your natural physical body frame and build?',
    options: [
      { text: 'Slender, thin, or bony; difficult to gain weight with prominent veins/joints.', dosha: 'Vata', description: 'Light and airy frame characteristic of Vata.' },
      { text: 'Medium, symmetrical build with good muscle definition and moderate weight stability.', dosha: 'Pitta', description: 'Fiery, athletic structure characteristic of Pitta.' },
      { text: 'Broad, sturdy, heavy-set frame; gains weight easily and carries it around hips/chest.', dosha: 'Kapha', description: 'Solid, grounded structure characteristic of Kapha.' }
    ]
  },
  {
    id: 2,
    category: 'Skin & Complexion',
    question: 'What is the natural texture and tendency of your skin?',
    options: [
      { text: 'Dry, thin, cool to the touch, prone to cracking or rough patches.', dosha: 'Vata', description: 'Dry and mobile qualities.' },
      { text: 'Warm, slightly oily in T-zone, prone to redness, acne, moles, or sunburns.', dosha: 'Pitta', description: 'Warm and oily qualities.' },
      { text: 'Thick, smooth, soft, well-hydrated, cool, and slow to age or wrinkle.', dosha: 'Kapha', description: 'Moist and heavy qualities.' }
    ]
  },
  {
    id: 3,
    category: 'Digestion & Appetite',
    question: 'How does your appetite and digestive fire (Agni) behave throughout the day?',
    options: [
      { text: 'Irregular and variable; sometimes very hungry, other times easily bloated or gassy.', dosha: 'Vata', description: 'Vishama Agni (Variable fire).' },
      { text: 'Intense and sharp; cannot skip meals without getting irritable or experiencing acid reflux.', dosha: 'Pitta', description: 'Tikshna Agni (Sharp fire).' },
      { text: 'Slow, steady, and moderate; can easily skip meals, but digestion feels slow and heavy after food.', dosha: 'Kapha', description: 'Manda Agni (Slow fire).' }
    ]
  },
  {
    id: 4,
    category: 'Sleep Patterns',
    question: 'What describes your typical sleep quality and nightly rhythm?',
    options: [
      { text: 'Light, restless, easily awakened by small noises; mind tends to race at night.', dosha: 'Vata', description: 'Light and mobile sleep.' },
      { text: 'Moderate (6-7 hours), sound and efficient; wake up alert but can wake if overheated.', dosha: 'Pitta', description: 'Direct and efficient sleep.' },
      { text: 'Deep, heavy, prolonged (8+ hours); love to sleep in and struggle to wake up in the morning.', dosha: 'Kapha', description: 'Dense and restorative sleep.' }
    ]
  },
  {
    id: 5,
    category: 'Response to Stress & Emotion',
    question: 'Under high stress or sudden changes, what is your most immediate reaction?',
    options: [
      { text: 'Anxiety, overwhelm, racing thoughts, worry, or fear.', dosha: 'Vata', description: 'Vata nervous excitation.' },
      { text: 'Irritability, frustration, anger, impatience, or critical judgment.', dosha: 'Pitta', description: 'Pitta heat and intensity.' },
      { text: 'Withdrawal, stubbornness, procrastination, comfort-eating, or quiet silence.', dosha: 'Kapha', description: 'Kapha inertia and attachment.' }
    ]
  },
  {
    id: 6,
    category: 'Weather & Climate Preference',
    question: 'What type of weather makes you feel most uncomfortable?',
    options: [
      { text: 'Cold, dry, windy, or drafty weather makes my joints stiff and skin dry.', dosha: 'Vata', description: 'Aversion to cold and dry.' },
      { text: 'Hot, humid, sunny weather drains my energy and causes irritability or rashes.', dosha: 'Pitta', description: 'Aversion to heat and sun.' },
      { text: 'Cold, damp, rainy, or overcast days make me feel lethargic, congested, and heavy.', dosha: 'Kapha', description: 'Aversion to damp and cold.' }
    ]
  },
  {
    id: 7,
    category: 'Mind & Memory',
    question: 'How does your mind absorb new information and recall memories?',
    options: [
      { text: 'I learn very fast and grasp concepts instantly, but I also forget details quickly.', dosha: 'Vata', description: 'Quick acquisition, short retention.' },
      { text: 'Sharp, analytical, and structured; I remember facts with logical precision.', dosha: 'Pitta', description: 'Analytical and organized retention.' },
      { text: 'I take longer to absorb new information, but once learned, I retain it for years.', dosha: 'Kapha', description: 'Methodical acquisition, long retention.' }
    ]
  },
  {
    id: 8,
    category: 'Physical Energy & Stamina',
    question: 'How would you characterize your physical stamina and energy bursts?',
    options: [
      { text: 'Quick bursts of high energy followed by sudden crashes or exhaustion.', dosha: 'Vata', description: 'Fluctuating energy reserves.' },
      { text: 'Strong, focused stamina; I push myself hard until the goal is accomplished.', dosha: 'Pitta', description: 'Driven, purposeful stamina.' },
      { text: 'High endurance and steady stamina, but slow to get started or motivated.', dosha: 'Kapha', description: 'High reservoir, slow initiation.' }
    ]
  }
];

export const PANCHAKARMA_PHASES = [
  {
    phase: 'Phase 1: Purva Karma',
    sanskrit: 'पूर्व कर्म',
    title: 'Preparation & Deep Oleation',
    duration: '3 to 7 Days',
    description: 'Before metabolic toxins can be expelled, they must be dislodged from deep cellular tissues and lubricated towards the gastrointestinal tract.',
    keyTreatments: ['Snehana (Internal medicated ghee & external warm herbal oil)', 'Swedana (Herbalized steam sudation to open Srotas micro-channels)'],
    purpose: 'Liquefies solidified toxins (Ama) trapped in fat and joint tissues.'
  },
  {
    phase: 'Phase 2: Pradhana Karma',
    sanskrit: 'प्रधान कर्म',
    title: 'The 5 Sacred Cleansing Actions',
    duration: '5 to 14 Days',
    description: 'The core physiological elimination protocols tailored to individual dosha imbalances under strict Vaidya supervision.',
    keyTreatments: [
      'Vamana (Therapeutic emesis for Kapha toxins)',
      'Virechana (Medicated herbal purgation for Pitta)',
      'Basti (Medicated herbal decoction & oil enemas for Vata)',
      'Nasya (Nasal cranial administration for sinus and brain clarity)',
      'Raktamokshana (Selective blood purification)'
    ],
    purpose: 'Eliminates deep-seated root imbalances at their foundational source.'
  },
  {
    phase: 'Phase 3: Paschat Karma',
    sanskrit: 'पश्चात् कर्म',
    title: 'Rejuvenation & Rasayana Longevity',
    duration: '7 to 21 Days',
    description: 'After purification, the digestive fire (Agni) is gently nurtured like a small ember, transitioning into tonification and longevity therapy.',
    keyTreatments: [
      'Samsarjana Krama (Graduated sattvic restorative diet: Peya, Vilepi, Yusha, Kitchari)',
      'Rasayana (Herbal tonics like Chyawanprash, Ashwagandha, and Brahma Rasayana)',
      'Dinacharya (Personalized daily lifestyle alignment)'
    ],
    purpose: 'Rebuilds pristine cellular immunity (Ojas) and locks in long-term vitality.'
  }
];

export const SCIENCE_PILLARS = [
  {
    title: 'Cellular Autophagy & Ama Detox',
    sanskrit: 'आम शोधन',
    icon: 'Sparkles',
    scientificCorrelate: 'Proteostasis & Lysosomal Autophagy',
    description: 'Modern research shows that intermittent fasting, medicated ghee oleation, and steam dilation trigger cellular autophagy—the process where cells recycle damaged proteins and lipofuscin pigments.'
  },
  {
    title: 'Gut-Brain Axis & Agni Rekindling',
    sanskrit: 'जठराग्नि',
    icon: 'Flame',
    scientificCorrelate: 'Enteric Nervous System & Microbiome Optimization',
    description: 'In Ayurveda, 85% of diseases originate from sluggish digestive fire (Agni). Scientific trials confirm that classical spices (cumin, coriander, ginger, piperine) optimize the gut mucosal barrier and microbiome diversity.'
  },
  {
    title: 'Neuro-Endocrine Balance via Shirodhara',
    sanskrit: 'मज्जा धातु',
    icon: 'Brain',
    scientificCorrelate: 'Vagal Nerve Activation & Sympathetic Downregulation',
    description: 'Clinical EEG studies during Shirodhara reveal a profound shift from high-frequency beta stress waves to synchronized alpha and theta waves, dramatically reducing serum cortisol.'
  },
  {
    title: 'Lymphatic & Fascial Unwinding',
    sanskrit: 'रस संवहन',
    icon: 'Activity',
    scientificCorrelate: 'Intercellular Fluid Dynamics & Fascial Shear Mobility',
    description: 'Synchronized four-hand Abhyanga applies precise hydrostatic pressures that drain lymph nodes and release trapped inflammatory cytokines from the body-wide fascial web.'
  }
];
