export type GlassLevel = "glass-1" | "glass-2" | "glass-3";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  industry: string;
  services: string[];
  year: string;
  description: string;
  metrics?: { label: string; value: string };
  technologies: string[];
  link: string;
  featuredVisual: {
    type: "canvas" | "gradient" | "code";
    accentColor: string;
    tag: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface ProcessNode {
  step: string;
  name: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  industry: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  whoItsFor: string;
  timeline: string;
  isPopular?: boolean;
  priceLabel: string;
  features: string[];
  deliverables: string[];
  ctaText: string;
}

export interface InsightItem {
  id: string;
  category: "Technology" | "AI" | "Design" | "Development" | "Architecture";
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EstimatorFormData {
  projectType: string;
  projectStage: string;
  budget: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
}
