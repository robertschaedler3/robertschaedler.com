import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../../core/services/scroll.service';
import { environment } from '../../../../../environments/environment';

export interface RouteInfo {
  path: string;
  title: string;
  class: string;
  anchor: string;
}

export const ROUTES: RouteInfo[] = [
  { anchor: 'experience', path: '/experience', title: 'Experience', class: '' },
  { anchor: 'projects', path: '/projects', title: 'Projects', class: '' },
  { anchor: 'archive', path: '/archive', title: 'Archive', class: '' },
  { anchor: 'contact', path: '/skills', title: 'Contact', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  activeAnchor = 'value';
  routeItems: RouteInfo[];
  name: string;
  job: string;
  university: string;
  location: string;
  social;

  constructor(public scroll: ScrollService) {
    this.routeItems = ROUTES.filter((menuItem) => menuItem);

    const profile = environment.profile;
    this.name = profile.name.full;
    this.job = `${profile.currentPosition.jobTitle} @${profile.currentPosition.company}`;
    this.university = profile.education.university;
    this.location = profile.location;
    this.social = profile.socialLinks;

    this.scroll.activeAnchor$.subscribe((val) => {
      this.activeAnchor = val;
    });
  }
  ngOnInit(): void {}
}
