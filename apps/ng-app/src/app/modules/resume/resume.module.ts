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

@NgModule({
  declarations: [ResumeComponent, ResumeSectionComponent, FooterComponent, HeaderComponent, SidebarComponent, SocialLinkComponent, ExperiencePageComponent],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
