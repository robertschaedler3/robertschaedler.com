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

export interface Project {
  name: string;
  year: number;
  description: string;
  tools: string[];
  github?: string;
  link?: string;
  company?: string;
}

export interface FeaturedProject extends Project {
  thumbnail: string;
}
