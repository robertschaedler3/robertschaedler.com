import { Component, OnInit } from '@angular/core';
import { Chip } from '../core/components/chip-list.component';
import { ExternalRedirectService } from '../core/services/external-redirect.service';

// TODO: move types to single location in module
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

export const EXPERIENCES: WorkExperience[] = [
  {
    name: 'Stevens Cysec Research',
    time: 'Summer 2019',
    position: 'Full Stack Engineer/Security Analyst',
    description: 'Researched the security of IoT networks by recording and analyzing WiFi, Bluetooth, and Zigbee protocols to identify trends and anomalies in device activity. Created a front-end interface using Angular to facilitate uploads and downloads to a database (using Parse Server, Mongo, Express). Researched trends in phishing site attacks by comparing the structure, raw HTML, and other heuristics to gather data with the intent to create and implement an efficient means of phishing detection.'
  },
  {
    name: 'TrendEase',
    time: 'February 2019 - Present',
    position: 'Data Analytics & Security Start-Up',
    description: 'Designed and created scaleable data aquisition systems for improving location based recommender systems using 802.11 network traffic. Used the raw network data to profile certain activity while clustering devices based on trends and similarities. Implemented a fully functional interface to display and interact with findings on a map based system.'
  },
  {
    name: 'Web Design',
    time: 'May 2017–Present',
    position: 'Freelance Web Developer',
    description: 'Work to maintain and optimize existing and new website using Firebase and Angular. Implemented analytics to increase site traffic. Added site payment systems for online purchases.'
  }
]

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  skills: Skill[] = SKILLS;
  experiences: WorkExperience[] = EXPERIENCES;

  constructor(public redirect: ExternalRedirectService) { }

  ngOnInit(): void {
  }

  showCoursework() {
    console.log('TODO: open dialog')
  }

}
