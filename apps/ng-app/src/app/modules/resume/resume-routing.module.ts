import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';

// Pages
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'experience', component: ExperiencePageComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'skills', component: SkillsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
