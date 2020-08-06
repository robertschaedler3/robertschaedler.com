import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './components/image.component';
import { SectionComponent } from './components/section.component';
import { ChipListComponent } from './components/chip-list.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ChipListComponent,
    ImageComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ChipListComponent,
    ImageComponent,
    SectionComponent
  ]
})
export class CoreModule { }
