import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
export interface SocialLink {
  link: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/experience', title: 'Experience', class: '' },
  { path: '/projects', title: 'Projects', class: '' },
  { path: '/skills', title: 'Skills', class: '' },
  { path: '/archive', title: 'Archive', class: '' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    link: 'https://github.com/robertschaedler3',
    icon: 'github',
  },
  {
    link: 'https://linkedin.com/in/robert-schaedler-iii/',
    icon: 'linkedin-in',
  },
  {
    link: 'https://medium.com/@robertschaedler3',
    icon: 'medium-m',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routeItems: RouteInfo[];
  socialLinks: SocialLink[];

  constructor() {}

  ngOnInit(): void {
    this.routeItems = ROUTES.filter((menuItem) => menuItem);
    this.socialLinks = SOCIAL_LINKS.filter((socialLink) => socialLink);
  }
}
