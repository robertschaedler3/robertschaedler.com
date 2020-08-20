import { Component, Input } from '@angular/core';
import { chipListFader } from 'src/app/animations/fades';

export interface Chip {
  name: string;
  url: string;
}

@Component({
  selector: 'app-chip-list',
  template: `
    <mat-chip-list [@chipListFader]="chips.length">
      <mat-chip *ngFor="let chip of chips">
          <a class="color-hover-dark-grey" href="{{chip.url}}">{{chip.name}}</a>
      </mat-chip>
    </mat-chip-list>
  `,
  styles: [],
  animations: [chipListFader]
})
export class ChipListComponent {

  @Input() chips: Chip[];

  constructor() { }

}
