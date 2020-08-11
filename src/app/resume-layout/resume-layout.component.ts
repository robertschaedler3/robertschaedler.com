import { Component } from '@angular/core';
import { ExternalRedirectService } from '../core/services/external-redirect.service';

import { Skill, WorkExperience } from './types/resume';
import { Chip } from '../core/components/chip-list.component';
import { EXPERIENCES, SKILLS, SOCIAL_CHIPS } from './types/data';


@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent {

  skills: Skill[] = SKILLS;
  experiences: WorkExperience[] = EXPERIENCES;
  chips: Chip[] = SOCIAL_CHIPS;

  constructor(public redirect: ExternalRedirectService) { }

}
