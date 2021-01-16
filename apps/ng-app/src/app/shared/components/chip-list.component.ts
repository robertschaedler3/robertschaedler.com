import { Component, OnInit, Input } from '@angular/core';

export interface Chip {
  name: string;
  url: string;
}

@Component({
  selector: 'app-chip-list',
  template: `
    <mat-chip-list>
      <mat-chip *ngFor="let chip of chips">
        <a class="color-hover-dark-grey" href="{{ chip.url }}">
          {{ chip.name }}
        </a>
      </mat-chip>
    </mat-chip-list>
  `,
  styles: [],
})
export class ChipListComponent {
  @Input() chips: Chip[];

  constructor() {}
}
