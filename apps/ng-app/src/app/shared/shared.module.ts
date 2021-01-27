import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// Components
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { SectionComponent } from './components/section/section.component';

// Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [SectionComponent, ScrollAnchorDirective],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
  ],
  exports: [
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ScrollAnchorDirective,
    SectionComponent,
  ],
})
export class SharedModule {}
