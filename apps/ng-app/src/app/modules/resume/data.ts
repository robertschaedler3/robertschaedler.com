import { FeaturedProject, Project } from './models/resume.model';

// {
//     name: '',
//     year: 0,
//     description: '',
//     tools: [''],
//     github: '',
//     link: '',
//     company: '',
//     thumbnail: '',
//   },

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: 'Scalable Angular',
    year: 2021,
    description:
      'A highly scalable Angular project structure built for short-term clarity of implementation with the goal of structural longevity.',
    tools: ['Angular', 'Typescript', 'HTML & (S)CSS'],
    github: '',
    link: '',
    thumbnail: '',
  },
  {
    name: 'Trendease',
    year: 2020,
    description: 'Engineering at its finest',
    tools: ['C/C++', 'Typescript', 'Azure'],
    github: '',
    link: '',
    thumbnail: '',
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    name: '',
    year: 0,
    description: '',
    tools: [''],
    github: '',
    link: '',
    company: '',
  },
];

export const PROJECT_ARCHIVE: Project[] = [
  ...FEATURED_PROJECTS,
  ...OTHER_PROJECTS,
];
