export * from './github';

export type ProjectCategory = 'all' | 'ai-rag' | 'fullstack' | 'mobile' | 'enterprise' | 'automation';

export type SkillTier = 'core' | 'applied' | 'supporting';
export type SkillDomain = 'frontend' | 'backend' | 'ai-llm' | 'database' | 'mobile' | 'devops' | 'automation';

export interface Profile {
  name: string;
  title: string;
  secondaryTitle: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  telegram: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  codeforces?: string;
  facebook?: string;
  avatarUrl: string;
  philosophy: {
    title: string;
    description: string;
  }[];
  currentFocus: string[];
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  type: 'Professional Experience' | 'Current Role' | 'Internship & Research' | 'Academic Leadership';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ArchitectureStep {
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  typeLabel: 'Open Source' | 'Research Project' | 'Enterprise Software' | 'Mobile AI App';
  context: string;
  problem: string;
  approach: string;
  architectureSteps?: ArchitectureStep[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  domain: SkillDomain;
  tier: SkillTier;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
  badgeText: string;
  highlight?: string;
  link?: string;
}
