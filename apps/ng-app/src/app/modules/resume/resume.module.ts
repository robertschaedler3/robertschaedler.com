import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ResumeSectionComponent } from './components/resume-section.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ResumeComponent, ResumeSectionComponent],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
