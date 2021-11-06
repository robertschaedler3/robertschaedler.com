import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { SharedModule } from './shared/shared.module';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, FeedComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      [{ path: '', component: AboutComponent, pathMatch: 'full' }],
      { initialNavigation: 'enabledBlocking' }
    ),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
