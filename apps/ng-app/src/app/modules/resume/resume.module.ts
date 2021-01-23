import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../shared/shared.module';

// Components
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArchivePageComponent } from './pages/archive-page/archive-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ArchivePageComponent,
    ExperiencePageComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    ProjectsPageComponent,
    ResumeComponent,
    SidebarComponent,
    SkillsPageComponent,
    SocialLinkComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
