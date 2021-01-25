declare interface Profile {
  name: {
    full: string;
    first: string;
    last: string;
  };
  github: string;
  resume: string;
  location: string;
  education: {
    degree: string;
    university: string;
  };
  currentPosition: {
    company: string;
    jobTitle: string;
    team: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    medium: string;
    instagram: string;
  };
}

export const profile: Profile = {
  name: {
    full: 'Robert Schaedler III',
    first: 'Robert',
    last: 'Schaedler',
  },
  github: 'robertschaedler3',
  resume:
    'https://drive.google.com/file/d/1gPX_28rEpFXoHsIUR83QADNJUTk5HcRD/view',
  location: 'Hoboken, NJ',
  education: {
    degree: 'Software Engineering',
    university: 'Stevens Institute of Technology',
  },
  currentPosition: {
    company: 'Microsoft',
    jobTitle: 'Software Engineer',
    team: 'Intelligent Edge Management',
  },
  socialLinks: {
    github: 'https://github.com/robertschaedler3',
    linkedin: 'https://linkedin.com/in/robert-schaedler-iii/',
    medium: 'https://medium.com/@robertschaedler3',
    instagram: 'https://instagram.com/robertschaedleriii',
  },
};
