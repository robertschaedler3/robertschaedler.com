import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';

import { ResumeLayoutComponent } from './resume-layout.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { ResumeSectionComponent } from './resume-section/resume-section.component';


@NgModule({
  declarations: [
    ResumeLayoutComponent,
    HeaderComponent,
    ProfileComponent,
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
