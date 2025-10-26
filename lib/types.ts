// 型定義
export interface Profile {
  name: string;
  title: string;
  age: string;
  location: string;
  email: string;
  phone: string;
  description: string;
  bio: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skills {
  main: string[];
  categories: SkillCategory[];
  learningGoals: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  longDescription: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export interface Navigation {
  name: string;
  href: string;
}

export interface SectionContent {
  title: string;
  subtitle: string;
  experienceTitle?: string;
  educationTitle?: string;
  skillsTitle?: string;
  personalInfoTitle?: string;
  featuredTitle?: string;
  otherTitle?: string;
  certificationsTitle?: string;
  learningTitle?: string;
  learningDescription?: string;
  formTitle?: string;
  formDescription?: string;
  contactInfoTitle?: string;
  contactInfoDescription?: string;
  socialTitle?: string;
  socialDescription?: string;
  faqTitle?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface Sections {
  hero: {
    skillsLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: SectionContent;
  projects: SectionContent;
  skills: SectionContent;
  contact: SectionContent;
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}
