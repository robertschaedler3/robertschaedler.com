import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { TagComponent } from './components/tag/tag.component';
import { FeedComponent } from './components/feed/feed.component';

import { GuardTypePipe } from './pipes/guard-type.pipe';
import { PushEventComponent } from './components/push-event/push-event.component';
import { PullRequestEventComponent } from './components/pull-request-event/pull-request-event.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    DateAgoPipe,
    GuardTypePipe,
    NavComponent,
    TagComponent,
    FeedComponent,
    PushEventComponent,
    PullRequestEventComponent,
  ],
  imports: [CommonModule],
  exports: [
    DateAgoPipe,
    GuardTypePipe,
    NavComponent,
    TagComponent,
    FeedComponent,
  ],
})
export class SharedModule {}
