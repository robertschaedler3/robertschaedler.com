import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { TagComponent } from './components/tag/tag.component';
import { FeedComponent } from './components/feed/feed.component';

import { GuardTypePipe } from './pipes/guard-type.pipe';
import { PushEventComponent } from './components/push-event/push-event.component';

@NgModule({
  declarations: [NavComponent, TagComponent, FeedComponent, GuardTypePipe, PushEventComponent],
  imports: [CommonModule],
  exports: [NavComponent, TagComponent, FeedComponent, GuardTypePipe],
})
export class SharedModule {}
