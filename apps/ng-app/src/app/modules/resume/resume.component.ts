import { Component } from '@angular/core';
import { ExternalRedirectService } from '../../core/services/external-redirect.service';

import { Skill, WorkExperience } from './types/resume';
import { Chip } from '../../shared/components/chip-list.component';
import { EXPERIENCES, SKILLS, SOCIAL_CHIPS } from './types/data';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  skills: Skill[] = SKILLS;
  experiences: WorkExperience[] = EXPERIENCES;
  chips: Chip[] = SOCIAL_CHIPS;

  constructor(public redirect: ExternalRedirectService) {}
}
