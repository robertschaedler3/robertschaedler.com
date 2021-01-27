export interface Duration {
  start: string;
  end: string;
}

export interface Skill {
  name: string;
}

export interface WorkExperience {
  company: string;
  companyLink?: string;
  position: string;
  description: string[];
  duration: Duration;
}

export interface FeaturedProject {
  name: string;
  year: number;
  thumbnail: string;
  description: string;
  tools: string[];
  github?: string;
  link?: string;
  company?: string;
}
