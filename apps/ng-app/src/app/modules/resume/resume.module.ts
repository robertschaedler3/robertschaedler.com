import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../shared/shared.module';

// Components
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [ResumeComponent, ResumeSectionComponent, FooterComponent, HeaderComponent, SidebarComponent, SocialLinkComponent, ExperiencePageComponent, SkillsPageComponent, ProjectsPageComponent, AboutPageComponent],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
