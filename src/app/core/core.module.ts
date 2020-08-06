import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './components/image.component';
import { SectionComponent } from './components/section.component';
import { ChipListComponent } from './components/chip-list.component';


@NgModule({
  declarations: [
    ChipListComponent,
    ImageComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipListComponent,
    ImageComponent,
    SectionComponent
  ]
})
export class CoreModule { }
