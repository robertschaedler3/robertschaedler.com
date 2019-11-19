import { Component, OnInit } from '@angular/core';



declare interface Panel {
    title: string;
    level: string;
    description: string;
    chips: Chip[];
}

declare interface Chip {
    link: string;
    name: string;
}

declare interface SocialItem {
    name: string;
    url: string;
}



@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    panels: Panel[] = [
        {
            title: 'Java',
            level: 'Advanced',
            description: '',
            chips: [
                { link: '', name: 'Data Structures' },
                { link: '', name: 'OOP' },
                { link: '', name: 'Obj. Oriented Software Engineering' },
            ]
        },
        {
            title: 'Python',
            level: 'Advanced',
            description: 'I have used python for a wide variety of different projects. From data science and network security analysis to RESTful APIs I\'ve done it all',
            chips: [
                { link: '', name: 'numpy' },
                { link: '', name: 'pyshark' },
                { link: '', name: 'pandas' },
                { link: '', name: 'Flask' },

            ]
        },
        {
            title: 'TypeScript',
            level: 'Advanced',
            description: '',
            chips: [
                { link: '', name: 'Angular CLI' },
                { link: '', name: 'React' },
                { link: '', name: 'Express' },
            ]
        },
        {
            title: 'C++',
            level: 'Proficient',
            description: 'My main used for C++ have been in the world of IoT. Writing firmware for IoT devices that connect and stream data to the cloud.',
            chips: [
                { link: '', name: 'Particle' },
                { link: '', name: 'Arduino' },
                { link: '', name: 'Rapsberry PI'}
            ]
        },
        {
            title: 'NodeJS',
            level: 'Intermediate',
            description: '',
            chips: [
                { link: '', name: 'TypeScript' },
                { link: '', name: 'Express' },
                { link: '', name: 'RESTful' },
                { link: '', name: 'Parse Server' },
            ]
        },
        {
            title: 'HTML/CSS/Javascript',
            level: 'Advanced',
            description: '',
            chips: [
                { link: '', name: 'Angular' },
                { link: '', name: 'React' },
                { link: '', name: 'Webpack' },
            ]
        },

    ];

    socialList: SocialItem[] = [
        { name: "Github", url: "https://github.com/robertschaedler3" },
        { name: "LinkedIn", url: "https://linkedin.com/in/robert-schaedler-iii/" },
        { name: "Instagram", url: "https://www.instagram.com/robertschaedleriii/" }
    ]


    constructor() { }

    ngOnInit() {
    }

}
