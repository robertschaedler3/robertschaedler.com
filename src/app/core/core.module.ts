import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './components/image.component';
import { SectionComponent } from './components/section.component';


@NgModule({
  declarations: [
    ImageComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageComponent,
    SectionComponent
  ]
})
export class CoreModule { }
