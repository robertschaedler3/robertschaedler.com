import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Sub-modules imports
import { MaterialModule } from './shared/material.module';
import { ResumeLayoutModule } from './resume-layout/resume-layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ResumeLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
