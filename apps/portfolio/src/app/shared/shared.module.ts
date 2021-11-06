import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { GuardTypePipe } from './pipes/guard-type.pipe';

import { ForkEventComponent } from './components/fork-event/fork-event.component';
import { IssuesEventComponent } from './components/issues-event/issues-event.component';
import { NavComponent } from './components/nav/nav.component';
import { TagComponent } from './components/tag/tag.component';
import { PushEventComponent } from './components/push-event/push-event.component';
import { PullRequestEventComponent } from './components/pull-request-event/pull-request-event.component';
import { ScrollContainerComponent } from './components/scroll-container/scroll-container.component';

@NgModule({
  declarations: [
    DateAgoPipe,
    GuardTypePipe,
    ForkEventComponent,
    IssuesEventComponent,
    NavComponent,
    PullRequestEventComponent,
    PushEventComponent,
    TagComponent,
    ScrollContainerComponent,
  ],
  imports: [CommonModule],
  exports: [
    DateAgoPipe,
    GuardTypePipe,
    ForkEventComponent,
    IssuesEventComponent,
    NavComponent,
    PullRequestEventComponent,
    PushEventComponent,
    TagComponent,
    ScrollContainerComponent,
  ],
})
export class SharedModule {}
