import { Component } from '@angular/core';
import { Chip } from '../core/components/chip-list.component';
import { ExternalRedirectService } from '../core/services/external-redirect.service';

import { Skill, WorkExperience } from './types/resume';
import { EXPERIENCES, SKILLS, SOCIAL_CHIPS } from './types/data';

import { fadeUp } from '../animations/fades';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss'],
  animations: [fadeUp]
})
export class ResumeLayoutComponent {

  skills: Skill[] = SKILLS;
  experiences: WorkExperience[] = EXPERIENCES;
  chips: Chip[] = SOCIAL_CHIPS;

  constructor(public redirect: ExternalRedirectService) { }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
