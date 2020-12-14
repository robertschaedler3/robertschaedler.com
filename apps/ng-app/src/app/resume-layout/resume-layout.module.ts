import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material.module';

import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';
import { ResumeLayoutComponent } from './resume-layout.component';
import { ResumeSectionComponent } from './components/resume-section.component';


@NgModule({
  declarations: [
    ResumeLayoutComponent,
    ResumeSectionComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    ResumeLayoutRoutingModule
  ]
})
export class ResumeLayoutModule { }
