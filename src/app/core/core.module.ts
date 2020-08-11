import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChipListComponent } from './components/chip-list.component';
import { HeaderComponent } from './components/header.component';
import { ImageComponent } from './components/image.component';
import { SectionComponent } from './components/section.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ChipListComponent,
    HeaderComponent,
    ImageComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ChipListComponent,
    HeaderComponent,
    ImageComponent,
    SectionComponent
  ]
})
export class CoreModule { }
