import { Component, Input } from '@angular/core';
import { PullRequestEvent } from '@github/events';

@Component({
  selector: 'app-pull-request-event',
  templateUrl: './pull-request-event.component.html',
  styleUrls: ['./pull-request-event.component.scss'],
})
export class PullRequestEventComponent {
  @Input() event: PullRequestEvent | undefined;
}
