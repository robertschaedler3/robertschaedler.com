import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { GuardTypePipe } from './pipes/guard-type.pipe';

import { NavComponent } from './components/nav/nav.component';
import { TagComponent } from './components/tag/tag.component';
import { PushEventComponent } from './components/push-event/push-event.component';
import { PullRequestEventComponent } from './components/pull-request-event/pull-request-event.component';

@NgModule({
  declarations: [
    DateAgoPipe,
    GuardTypePipe,
    NavComponent,
    PullRequestEventComponent,
    PushEventComponent,
    TagComponent,
  ],
  imports: [CommonModule],
  exports: [
    DateAgoPipe,
    GuardTypePipe,
    NavComponent,
    PullRequestEventComponent,
    PushEventComponent,
    TagComponent,
  ],
})
export class SharedModule {}
