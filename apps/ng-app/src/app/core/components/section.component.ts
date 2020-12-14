import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
  <div class="section" [ngClass]="{'padd-top': paddTop, 'padd-bottom': paddBottom}">
    <div class="container">
        <ng-content></ng-content>
    </div>
  </div>`,
  styles: [
    `.padd-top {
      padding-top: 8rem !important;
    }
    .padd-bottom {
      padding-bottom: 8rem !important;
    }`
  ]
})
export class SectionComponent {

  @Input() paddTop: boolean = true;
  @Input() paddBottom: boolean = true;

  constructor() { }

}
