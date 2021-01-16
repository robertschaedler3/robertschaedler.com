import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss'],
})
export class ResumeSectionComponent {
  @Input() title: string;
  @Input() icon: string;

  @Input() color = 'bkg-white';
  @Input() paddTop = true;
  @Input() paddBottom = true;

  constructor() {}
}
