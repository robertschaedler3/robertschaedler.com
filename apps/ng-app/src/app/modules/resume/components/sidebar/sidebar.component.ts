import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/experience', title: 'Experience', class: '' },
  { path: '/projects', title: 'Projects', class: '' },
  { path: '/skills', title: 'Skills', class: '' },
  { path: '/archive', title: 'Archive', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  routeItems: RouteInfo[];
  name: string;
  job: string;
  university: string;
  location: string;
  social;

  constructor() {}

  ngOnInit(): void {
    this.routeItems = ROUTES.filter((menuItem) => menuItem);

    const profile = environment.profile;
    this.name = profile.name.full;
    this.job = `${profile.currentPosition.jobTitle} @${profile.currentPosition.company}`;
    this.university = profile.education.university;
    this.location = profile.location;
    this.social = profile.socialLinks;
  }
}
