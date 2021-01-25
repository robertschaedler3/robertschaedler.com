import {
  FeaturedProject,
  Project,
  WorkExperience,
} from './models/resume.model';

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

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Microsoft',
    companyLink: 'https://azure.microsoft.com/en-us/overview/future-of-cloud/',
    position: 'Software Engineering Intern',
    description: [
      'Worked in Enterprise and Security (EnS) under COSINE on the Intelligent Edge Management team.',
      'Developed a prototype for managing Linux IoT devices via desired configuration documents. Created a device agent for consuming and applying configurations.',
      'Developed a UX for authoring, storing, and applying documents to IoT devices via Azure.',
    ],
    duration: { start: 'May', end: 'July 2020' },
  },
  {
    company: 'Insure',
    companyLink: 'https://sercuarc.org/',
    position: 'Security Analyst',
    description: [
      'Researched the security of IoT networks by recording and analyzing WiFi, Bluetooth, and Zigbee protocols to identify trends and anomalies in device activity.',
      'Created a front-end interface (Angular) to interact with a database/API (Parse, Mongo, Express) for storage, upload, and download of research data.',
      'Researched trends in phishing site attacks by comparing the structure, raw HTML, and other heuristics to gather data with the intent to create and implement an efficient means of phishing detection.',
    ],
    duration: { start: 'May', end: 'August 2019' },
  },
  {
    company: 'Freelance',
    companyLink: '',
    position: 'Web Developer',
    description: [
      'Maintain and optimize a web template for an online art portfolio and storefront using Firebase Hosting, Authentication, and Firestore as well as Google Analytics to increase site traffic.',
      'Integrated payment systems for online purchases.',
    ],
    duration: { start: 'May 2017', end: 'Present' },
  },
];

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
