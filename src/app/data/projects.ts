export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  timeframe: string;
  description: string;
  about: string;
  goal: string;
  role: string;
  processFlow: string[];
  screenshots: number;
}

export const projects: Project[] = [
  {
    id: 'bitray',
    title: 'BitRay',
    year: '2025',
    category: 'Product Design & Branding',
    timeframe: '4 months',
    description: 'E-commerce platform for clothing with complete brand identity and user experience design.',
    about: 'BitRay is a modern e-commerce platform that revolutionizes the online shopping experience for fashion-forward consumers. The project involved creating a complete brand identity from scratch and designing an intuitive shopping experience that converts browsers into buyers.',
    goal: 'Create a seamless e-commerce experience that reduces cart abandonment, increases conversion rates, and establishes BitRay as a premium fashion destination. The platform needed to handle complex product variations while maintaining a clean, elegant interface.',
    role: 'Lead Product Designer & Brand Strategist - Responsible for end-to-end design including brand identity, user research, wireframing, high-fidelity mockups, design system creation, and developer handoff.',
    processFlow: [
      'Discovery & Research - Competitive analysis, user interviews, market research',
      'Brand Identity - Logo design, color palette, typography, visual guidelines',
      'Information Architecture - Sitemap, user flows, navigation structure',
      'Wireframing - Low-fidelity sketches and wireframes for key screens',
      'Visual Design - High-fidelity mockups with brand application',
      'Prototyping - Interactive prototype for user testing',
      'User Testing - Usability testing with 15+ participants',
      'Design System - Component library and documentation',
      'Developer Handoff - Specifications, assets, and implementation support',
    ],
    screenshots: 8,
  },
  {
    id: 'nannynest',
    title: 'NannyNest',
    year: '2025',
    category: 'Mobile UI/UX',
    timeframe: '3 months',
    description: 'Mobile application connecting families with trusted childcare providers.',
    about: 'NannyNest addresses the challenge of finding reliable childcare by creating a trusted platform that connects families with verified nannies and babysitters. The app emphasizes safety, transparency, and ease of use for both parents and caregivers.',
    goal: 'Design a mobile-first platform that builds trust between families and childcare providers through comprehensive profiles, verified credentials, real-time availability, and seamless booking. The goal was to reduce the stress of finding quality childcare.',
    role: 'Senior UI/UX Designer - Led mobile design strategy, created user personas, designed all app screens, conducted usability testing, and collaborated with developers on implementation.',
    processFlow: [
      'User Research - Interviews with parents and nannies to understand pain points',
      'Persona Development - Created detailed user personas for both user groups',
      'Journey Mapping - Mapped the end-to-end experience for booking childcare',
      'Wireframing - Sketched key user flows and screen layouts',
      'UI Design - Designed all screens with focus on trust and simplicity',
      'Prototyping - Created interactive prototype for iOS and Android',
      'Usability Testing - Multiple rounds of testing with target users',
      'Iteration - Refined design based on user feedback',
      'Handoff - Delivered design specifications and assets to development team',
    ],
    screenshots: 12,
  },
  {
    id: 'teachwithdaba',
    title: 'TeachWithDABA',
    year: '2024',
    category: 'SaaS Product Design',
    timeframe: '5 months',
    description: 'Digital learning platform empowering educators with modern teaching tools.',
    about: 'TeachWithDABA is a comprehensive SaaS platform designed to empower educators with modern tools for course creation, student management, and interactive learning. The platform bridges the gap between traditional teaching methods and digital-first education.',
    goal: 'Create an intuitive platform that enables educators to easily transition to digital teaching without technical barriers. The platform needed to support course creation, student engagement tracking, assessment tools, and seamless content delivery.',
    role: 'Product Designer - Conducted user research with educators, designed the complete platform interface, created interactive prototypes, established the design system, and supported the product team through launch.',
    processFlow: [
      'Stakeholder Workshops - Aligned on product vision and key features',
      'User Research - Conducted interviews with 20+ educators',
      'Feature Prioritization - Created feature roadmap based on user needs',
      'Information Architecture - Structured complex platform into logical sections',
      'Wireframing - Designed low-fidelity layouts for all major features',
      'Visual Design - Applied modern, professional design language',
      'Design System - Built reusable component library',
      'Prototyping - Created clickable prototypes for user testing',
      'Testing & Iteration - Multiple testing rounds with educators',
      'Implementation Support - Worked closely with developers during build',
    ],
    screenshots: 10,
  },
  {
    id: 'pocketfood',
    title: 'PocketFood',
    year: '2023',
    category: 'UX Design',
    timeframe: '4 months',
    description: 'Meal planning application reducing decision stress and simplifying daily food choices.',
    about: 'PocketFood tackles the daily challenge of meal planning by providing personalized recommendations, smart grocery lists, and nutrition tracking. The app learns user preferences over time to suggest meals that fit dietary needs and lifestyle.',
    goal: 'Eliminate decision fatigue around meal planning by creating an intelligent system that suggests personalized meal options, automates grocery lists, and helps users maintain healthy eating habits without the stress.',
    role: 'UX Designer - Led user research, created information architecture, designed user flows, developed wireframes and high-fidelity mockups, and conducted usability testing throughout the design process.',
    processFlow: [
      'Discovery Phase - Research on meal planning behaviors and pain points',
      'User Interviews - Spoke with 25 users about their meal planning habits',
      'Competitive Analysis - Analyzed existing meal planning solutions',
      'Persona Creation - Developed 3 primary user personas',
      'User Journey Mapping - Mapped current state and ideal future state',
      'Wireframing - Created low-fidelity wireframes for key features',
      'Visual Design - Designed interface with focus on simplicity',
      'Prototyping - Built interactive prototype for testing',
      'Usability Testing - Conducted 3 rounds of testing with iterations',
      'Final Delivery - Delivered complete design package to developers',
    ],
    screenshots: 9,
  },
  {
    id: 'saare',
    title: 'Saare',
    year: '2023',
    category: 'Food Product',
    timeframe: '2 months',
    description: 'Brand identity and digital experience for a modern food product.',
    about: 'Saare is a modern food brand that needed a complete visual identity and digital presence to launch in a competitive market. The project focused on creating a memorable brand that resonates with health-conscious millennials and Gen Z consumers.',
    goal: 'Establish Saare as a fresh, trustworthy food brand with a distinctive visual identity that stands out on shelves and digital platforms. The brand needed to communicate quality, sustainability, and modern values.',
    role: 'Brand & Digital Designer - Created complete brand identity including logo, packaging concepts, color system, typography, and designed the brand website and social media templates.',
    processFlow: [
      'Brand Workshop - Defined brand values, personality, and positioning',
      'Market Research - Analyzed competitive landscape and trends',
      'Mood Boarding - Created visual direction and style exploration',
      'Logo Design - Designed multiple concepts and refined selected direction',
      'Brand Guidelines - Developed comprehensive visual identity system',
      'Packaging Design - Created packaging concepts and mockups',
      'Website Design - Designed responsive website showcasing the brand',
      'Social Templates - Created Instagram and Facebook content templates',
      'Launch Support - Assisted with brand rollout and marketing materials',
    ],
    screenshots: 10,
  },
  {
    id: 'bitray-app',
    title: 'BitRay APP',
    year: '2025',
    category: 'E-commerce',
    timeframe: '3 months',
    description: 'Native mobile application for seamless shopping experience.',
    about: 'BitRay APP is the mobile companion to the BitRay e-commerce platform, designed specifically for on-the-go shopping. The app provides a native experience optimized for mobile users, featuring personalized recommendations, quick checkout, and seamless order tracking.',
    goal: 'Create a native mobile shopping experience that converts mobile traffic into sales. The app needed to load quickly, provide intuitive navigation, and offer features specifically designed for mobile shoppers like barcode scanning and one-tap checkout.',
    role: 'Mobile Product Designer - Designed the complete mobile app experience for iOS and Android, created motion design specifications, built a mobile-specific design system, and collaborated with native developers.',
    processFlow: [
      'Mobile Strategy - Defined mobile-specific features and user flows',
      'User Research - Analyzed mobile shopping behaviors and preferences',
      'Wireframing - Created mobile wireframes for all key screens',
      'UI Design - Designed native-feeling interfaces for iOS and Android',
      'Micro-interactions - Designed animations and transitions',
      'Prototyping - Created high-fidelity interactive prototypes',
      'User Testing - Tested with target users on actual devices',
      'Design System - Built mobile component library',
      'Developer Collaboration - Worked closely with iOS and Android teams',
      'Quality Assurance - Reviewed implementation and provided feedback',
    ],
    screenshots: 11,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
