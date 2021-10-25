import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagComponent } from './tag/tag.component';
import { FeedComponent } from './feed/feed.component';
import { GuardTypePipe } from './shared/pipes/guard-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    TagComponent,
    FeedComponent,
    GuardTypePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{ path: '', component: AboutComponent, pathMatch: 'full' }],
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
