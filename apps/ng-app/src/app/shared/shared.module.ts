import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { ChipListComponent } from '../shared/components/chip-list.component';
import { ImageComponent } from '../shared/components/image.component';
import { SectionComponent } from '../shared/components/section.component';

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

@NgModule({
  declarations: [
    ChipListComponent,
    ImageComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ],
  exports: [
    RouterModule,
    ChipListComponent,
    ImageComponent,
    SectionComponent,
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
  ],
})
export class SharedModule {}
