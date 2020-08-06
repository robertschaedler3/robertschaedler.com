import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ResumeLayoutRoutingModule } from './resume-layout-routing.module';

import { ResumeLayoutComponent } from './resume-layout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ResumeLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ResumeLayoutRoutingModule
  ]
})
export class ResumeLayoutModule { }
