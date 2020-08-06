import { Component } from '@angular/core';
import { Chip } from 'src/app/core/components/chip-list.component';

export const SOCIAL_CHIPS: Chip[] = [
  { name: "Github", url: "https://github.com/robertschaedler3" },
  { name: "LinkedIn", url: "https://linkedin.com/in/robert-schaedler-iii/" },
  { name: "Instagram", url: "https://www.instagram.com/robertschaedleriii/" },
  { name: "Medium", url: "https://medium.com/@robertschaedler3" }
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  chips: Chip[] = SOCIAL_CHIPS;

  constructor() { }

}
