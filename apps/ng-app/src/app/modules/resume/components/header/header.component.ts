import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ROUTES, RouteInfo } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private routeItems: RouteInfo[];
  private location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.routeItems = ROUTES.filter((route) => route);
  }

  getTitle() {
    let title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice(1);
    }

    for (const routeItem of this.routeItems) {
      if (routeItem.path === title) {
        return routeItem.title;
      }
    }

    return 'About';
  }
}
