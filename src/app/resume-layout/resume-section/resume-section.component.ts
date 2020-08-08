import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent {

  @Input() title: string;
  @Input() icon: string;

  @Input() color: string = 'bkg-white';
  @Input() paddTop: boolean = true;
  @Input() paddBottom: boolean = true;

  constructor() { }

}
