export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectHighlight {
  title: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architecture: {
    nodes: string[];
    description: string;
  };
  technologies: string[];
  highlights: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: 'Lakehouse' | 'ETL/ELT' | 'API & Integration' | 'Analytics' | 'AI & Automation';
  image: string;
  imageAlt: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  companyUrl?: string;
  companyLinkLabel?: string;
  companyLinkType?: 'official' | 'third-party';
  ariaLabel?: string;
  responsibilities?: string[];
  employmentDetails?: string[];
  experienceLetterUrl?: string;
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateUrl?: string | null;
  isVerifiedCredential?: boolean;
  badgeType: 'Databricks' | 'IBM' | 'KPITB';
  skillsCovered?: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  graduationYear: string;
  cgpa: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  medallionArchitectureSummary: string;
}
