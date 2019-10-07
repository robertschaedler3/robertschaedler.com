import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { CourseworkComponent } from './resume/coursework/coursework.component';
import { DialogContent } from './resume/coursework/coursework.component';
import { GithubComponent } from './resume/github/github.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


import { NotesLayoutComponent } from './layouts/notes-layout/notes-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    CourseworkComponent,
    DialogContent,
    GithubComponent,
    NotesLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    AppRoutingModule
  ],
  entryComponents: [
    DialogContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
