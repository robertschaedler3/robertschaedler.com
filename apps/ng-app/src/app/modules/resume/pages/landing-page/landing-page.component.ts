import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  name: string;
  location: string;
  company: string;
  job: string;
  team: string;
  instagram: string;

  constructor() {}

  ngOnInit(): void {
    const profile = environment.profile;
    this.name = profile.name.first;
    this.location = profile.location;
    this.company = profile.currentPosition.company;
    this.job = profile.currentPosition.jobTitle;
    this.team = profile.currentPosition.team;
    this.instagram = profile.socialLinks.instagram;
  }
}
