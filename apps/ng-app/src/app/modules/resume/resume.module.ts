import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../shared/shared.module';

// Components
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';

@NgModule({
  declarations: [ResumeComponent, ResumeSectionComponent],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
