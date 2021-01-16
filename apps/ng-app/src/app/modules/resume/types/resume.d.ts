import { Chip } from '../../../shared/components/chip-list.component';

export interface Skill {
  title: string;
  level: string;
  description: string;
  chips: Chip[];
}

export interface WorkExperience {
  name: string;
  time: string;
  position: string;
  description: string;
}
