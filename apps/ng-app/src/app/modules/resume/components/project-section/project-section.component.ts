import { Component, Input, OnInit } from '@angular/core';
import { FeaturedProject } from '../../models/resume.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent implements OnInit {

  @Input() project: FeaturedProject;

  constructor() {}

  ngOnInit(): void {}
}
