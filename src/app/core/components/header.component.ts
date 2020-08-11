import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <mat-toolbar>
          <div class="logo hide-on-mobile">
              <div class="logo-inner">
                  <a [routerLink]="[link]"><img [src]="image"/></a>
              </div>
          </div>
          <span class="spacer"></span>
          <ng-content></ng-content>
      </mat-toolbar>
    </div>`,
  styles: []
})
export class HeaderComponent {

  @Input() link: string = '';
  @Input() image: string;

  constructor() { }

}
