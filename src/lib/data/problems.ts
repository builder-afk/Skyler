export type Region = 'Global' | 'North America' | 'Europe' | 'Asia Pacific' | 'LATAM' | 'Africa' | 'Middle East'

export type Category = 
  | 'B2B Services'
  | 'Beauty & Personal Care'
  | 'Consumer Services'
  | 'E-commerce'
  | 'EdTech'
  | 'FinTech'
  | 'Food & Beverage'
  | 'Home Services'
  | 'Logistics'
  | 'Payment Issues'
  | 'Real Estate'
  | 'SaaS'
  | 'Transportation'
  | 'Travel'
  | 'Healthtech'
  | 'Other'

export interface MarketProblem {
  id: string
  title: string
  description: string
  region: Region
  category: Category
  tam: string
  severityScore: number // 1 to 10 (10 = critically painful)
  whitespaceScore: number // 1 to 10 (10 = highly underserved)
  suggestedStack: string
}

export const MARKET_PROBLEMS: MarketProblem[] = [
  {
    id: "prob-1",
    title: "AI Compliance Automation for Clinics",
    description: "Healthcare clinics struggle with increasing data compliance regulations (HIPAA, GDPR). Current solutions are enterprise-only and cost $5k+/month. Local clinics need an automated, affordable AI auditing tool.",
    region: "North America",
    category: "Healthtech",
    tam: "$12.4B",
    severityScore: 9,
    whitespaceScore: 8,
    suggestedStack: "ai-tool-nextjs",
  },
  {
    id: "prob-2",
    title: "Mobile Money Interoperability API",
    description: "Mobile money (like M-Pesa) is heavily used, but cross-border or cross-network transfers are highly fragmented and expensive. Merchants need a unified API to accept all local digital wallets.",
    region: "Africa",
    category: "Payment Issues",
    tam: "$15B",
    severityScore: 10,
    whitespaceScore: 7,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-3",
    title: "Unstructured Address Logistics Router",
    description: "Last-mile delivery frequently fails because addresses in rapidly expanding megacities are unstructured and rely on landmarks. Drivers need AI-powered visual routing and local landmark translation.",
    region: "Asia Pacific",
    category: "Logistics",
    tam: "$25B",
    severityScore: 9,
    whitespaceScore: 9,
    suggestedStack: "mobile-reactnative",
  },
  {
    id: "prob-4",
    title: "Building Energy Retrofit Compliance",
    description: "Strict EU regulations require massive energy-efficiency reporting and upgrades for old commercial buildings by 2030. Property managers lack tools to automate these audits and source green contractors.",
    region: "Europe",
    category: "Real Estate",
    tam: "$40B",
    severityScore: 9,
    whitespaceScore: 8,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-5",
    title: "Stablecoin Payroll for Remote Teams",
    description: "Hyperinflation instantly devalues fiat currencies. Remote workers and freelancers need a way to receive international payroll instantly converted into stablecoins to protect their earnings.",
    region: "LATAM",
    category: "FinTech",
    tam: "$18B",
    severityScore: 10,
    whitespaceScore: 7,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-6",
    title: "Informal Transit Tracking (Colectivos)",
    description: "Minibuses and informal transit run without fixed schedules, leaving commuters stranded. A crowd-sourced tracking app incentivizing drivers/riders to share real-time location data.",
    region: "LATAM",
    category: "Transportation",
    tam: "$8B",
    severityScore: 8,
    whitespaceScore: 9,
    suggestedStack: "mobile-reactnative",
  },
  {
    id: "prob-7",
    title: "E-commerce Return Fraud Prevention",
    description: "Post-purchase return fraud and reverse-logistics are costing independent Shopify merchants up to 20% of their revenue. An AI tool to verify return conditions via video/photo before approval.",
    region: "North America",
    category: "E-commerce",
    tam: "$35B",
    severityScore: 8,
    whitespaceScore: 6,
    suggestedStack: "ai-tool-nextjs",
  },
  {
    id: "prob-8",
    title: "Halal Cosmetics Transparency Tracker",
    description: "Muslim consumers struggle to verify if international cosmetic brands use Halal-compliant ingredients. A mobile barcode scanner that analyzes ingredient lists against regional certification databases.",
    region: "Asia Pacific",
    category: "Beauty & Personal Care",
    tam: "$10B",
    severityScore: 7,
    whitespaceScore: 9,
    suggestedStack: "mobile-reactnative",
  },
  {
    id: "prob-9",
    title: "Overtourism Distribution Pricing",
    description: "Municipalities and local tourism boards are overwhelmed by dense tourism in small city centers. A dynamic pricing and crowd-distribution platform to incentivize tourists to visit hidden socio-cultural spots.",
    region: "Europe",
    category: "Travel",
    tam: "$5B",
    severityScore: 8,
    whitespaceScore: 7,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-10",
    title: "AI Call Receptionist for Tradies",
    description: "Plumbers, electricians, and independent contractors frequently miss calls while on the job, leading to lost revenue. An AI voice agent capable of booking estimates and answering basic trade questions.",
    region: "North America",
    category: "B2B Services",
    tam: "$12B",
    severityScore: 9,
    whitespaceScore: 6,
    suggestedStack: "ai-tool-nextjs",
  },
  {
    id: "prob-11",
    title: "Aging-in-Place Gig Matching",
    description: "Seniors living independently need help with non-medical tasks (light organization, tech support, meal prep). A vetted, ultra-simple platform matching seniors with local gig-workers.",
    region: "North America",
    category: "Home Services",
    tam: "$22B",
    severityScore: 8,
    whitespaceScore: 8,
    suggestedStack: "mobile-reactnative",
  },
  {
    id: "prob-12",
    title: "Vernacular Chronic Disease Management",
    description: "High rates of diabetes require daily tracking, but existing Western apps don't support local dialects, diets, or cultural habits. A highly localized, WhatsApp-integrated health companion.",
    region: "Middle East",
    category: "Healthtech",
    tam: "$7B",
    severityScore: 9,
    whitespaceScore: 8,
    suggestedStack: "mobile-reactnative",
  },
  {
    id: "prob-13",
    title: "AgriTech Cold Chain Monitoring",
    description: "Up to 30% of harvested produce spoils before reaching the market due to broken cold chains. Small transport fleets need cheap IoT-integrated dashboards to monitor temperature thresholds via SMS.",
    region: "Africa",
    category: "Food & Beverage",
    tam: "$14B",
    severityScore: 10,
    whitespaceScore: 9,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-14",
    title: "Accent Neutralization & BPO Training",
    description: "Call center workers need constant communication training to adapt to various Western client accents. An AI speech coach providing real-time feedback on pronunciation and cultural context.",
    region: "Asia Pacific",
    category: "EdTech",
    tam: "$4B",
    severityScore: 7,
    whitespaceScore: 8,
    suggestedStack: "ai-tool-nextjs",
  },
  {
    id: "prob-15",
    title: "Shadow IT Discovery for SMBs",
    description: "With the explosion of self-serve SaaS and AI wrappers, company data is being uploaded to unvetted apps by employees. A lightweight browser extension to audit software usage and control permissions.",
    region: "Global",
    category: "SaaS",
    tam: "$28B",
    severityScore: 8,
    whitespaceScore: 6,
    suggestedStack: "saas-nextjs",
  },
  {
    id: "prob-16",
    title: "Personalized Digital Memorials",
    description: "Families want secure, long-lasting digital spaces to preserve memories, voicemails, and stories of deceased relatives, moving beyond fragmented social media tributes.",
    region: "Global",
    category: "Consumer Services",
    tam: "$3B",
    severityScore: 5,
    whitespaceScore: 9,
    suggestedStack: "saas-nextjs",
  }
];
