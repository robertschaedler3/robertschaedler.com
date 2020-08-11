import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  template: `
    <app-section [paddTop]="paddTop" [paddBottom]="paddBottom" [class]="color">
      <div class="row">
          <div class="col-md-4">
              <h5 class="title">
                  <mat-icon inline="true">{{icon}}</mat-icon> {{title}}
              </h5>
          </div>
          <div class="col-md-8">
              <ng-content></ng-content>
          </div>
      </div>
    </app-section>`,
  styles: [`
    app-section {
      padding: 7rem 0rem;
    }`
  ]
})
export class ResumeSectionComponent {

  @Input() title: string;
  @Input() icon: string;

  @Input() color: string = 'bkg-white';
  @Input() paddTop: boolean = true;
  @Input() paddBottom: boolean = true;

  constructor() { }

}
