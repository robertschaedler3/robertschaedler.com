import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResumeComponent } from './resume/resume.component';
import { CourseworkComponent } from './resume/coursework/coursework.component';
import { DialogContent } from './resume/coursework/coursework.component';
import { GithubComponent } from './resume/github/github.component';
import { GitStatsComponent } from './resume/git-stats/git-stats.component';
import { HttpClientModule } from '@angular/common/http';

import { ResumeLayoutModule } from './resume-layout/resume-layout.module';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    // TODO: Refactor to submodules
    CourseworkComponent,
    DialogContent,
    GithubComponent,
    GitStatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ResumeLayoutModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [
    DialogContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
