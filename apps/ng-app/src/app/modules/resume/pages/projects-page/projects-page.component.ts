import { Component, OnInit } from '@angular/core';
import { FeaturedProject, Project } from '../../models/resume.model';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../../data';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {

  featProjects: FeaturedProject[] = FEATURED_PROJECTS.sort((a, b) => a.year - b.year);
  otherProjects: Project[] = OTHER_PROJECTS.sort((a, b) => a.year - b.year);

  constructor() {}

  ngOnInit(): void { }

}
