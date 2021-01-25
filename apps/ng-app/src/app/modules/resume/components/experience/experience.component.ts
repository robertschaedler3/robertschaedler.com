import { Component, OnInit } from '@angular/core';
import { WORK_EXPERIENCE } from '../../data';
import { WorkExperience } from '../../models/resume.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  experiences: WorkExperience[];
  selection: WorkExperience;

  constructor() {}

  ngOnInit(): void {
    this.experiences = WORK_EXPERIENCE;
    this.selection = this.experiences[0];
  }
}
