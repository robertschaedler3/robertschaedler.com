import { Component, OnInit } from '@angular/core';
import { Chip } from '../core/components/chip-list.component';

// TODO: move types to single location in module
export interface Skill {
  title: string;
  level: string;
  description: string;
  chips: Chip[];
}

// TODO: move to data file
export const SKILLS: Skill[] = [
  {
    title: 'Docker',
    level: 'Advanced',
    description: '',
    chips: [
      { url: '', name: 'docker-compose' },
      { url: '', name: 'Dockerfile' },
      { url: 'https://github.com/robertschaedler3/Docker-Cheatsheet', name: 'Docker Cheatsheet' }
    ]
  },
  {
    title: 'Java',
    level: 'Advanced',
    description: '',
    chips: [
      { url: '', name: 'Data Structures' },
      { url: '', name: 'OOP' },
      { url: '', name: 'Obj. Oriented Software Engineering' }
    ]
  },
  {
    title: 'Python',
    level: 'Advanced',
    description: 'I have used python for a wide variety of different projects. From data science and network security analysis to RESTful APIs I\'ve done it all',
    chips: [
      { url: '', name: 'numpy' },
      { url: '', name: 'pyshark' },
      { url: '', name: 'pandas' },
      { url: '', name: 'Flask' }

    ]
  },
  {
    title: 'TypeScript',
    level: 'Advanced',
    description: '',
    chips: [
      { url: '', name: 'Angular' },
      { url: '', name: 'Graphql' },
      { url: '', name: 'Express' }
    ]
  },
  {
    title: 'C++',
    level: 'Proficient',
    description: 'My main used for C++ have been in the world of IoT. Writing firmware for IoT devices that connect and stream data to the cloud.',
    chips: [
      { url: 'https://github.com/robertschaedler3/CS-385', name: 'Algorithms' },
      { url: '', name: 'Particle' },
      { url: '', name: 'Arduino' },
      { url: '', name: 'Rapsberry PI' }
    ]
  },
  {
    title: 'C',
    level: 'Proficient',
    description: 'My main used for C++ have been in the world of IoT. Writing firmware for IoT devices that connect and stream data to the cloud.',
    chips: [
      { url: 'https://github.com/robertschaedler3/CS-392', name: 'Systems Programming' },
      { url: '', name: 'Particle' },
      { url: '', name: 'Arduino' },
      { url: '', name: 'Rapsberry PI' }
    ]
  },
  {
    title: 'NodeJS',
    level: 'Intermediate',
    description: '',
    chips: [
      { url: '', name: 'TypeScript' },
      { url: '', name: 'Express' },
      { url: '', name: 'RESTful' },
      { url: '', name: 'Parse Server' },
      { url: '', name: 'Graphql' }
    ]
  },
  {
    title: 'HTML/CSS/Javascript',
    level: 'Advanced',
    description: '',
    chips: [
      { url: '', name: 'Angular' },
      { url: '', name: 'Webpack' }
    ]
  }
];

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  skills: Skill[] = SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

  showCoursework() {
    console.log('TODO: open dialog')
  }

}
