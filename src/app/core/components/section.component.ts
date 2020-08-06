import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
  <div class="section">
    <div class="container">
        <ng-content></ng-content>
    </div>
  </div>`,
  styles: [
    `.section {
      width: 100%;
      background-color: inherit;
      padding: 7rem 0rem;
    }
    .container {
      padding: 0rem 2rem;
    }`
  ]
})
export class SectionComponent {

  constructor() { }

}
