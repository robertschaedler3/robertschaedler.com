import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// Components


// Material
// TODO: remove unused imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    PerfectScrollbarModule,
  ],
  exports: [
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    PerfectScrollbarModule,
  ],
})
export class SharedModule {}
