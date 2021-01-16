import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../shared/shared.module';

// Components
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ResumeComponent, ResumeSectionComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
