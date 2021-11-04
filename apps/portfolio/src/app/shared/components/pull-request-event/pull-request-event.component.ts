import { Component, Input } from '@angular/core';
import {
  PullRequest,
  PullRequestAction,
  PullRequestEvent,
} from '@github/events';

@Component({
  selector: 'app-pull-request-event',
  templateUrl: './pull-request-event.component.html',
  styleUrls: ['./pull-request-event.component.scss'],
})
export class PullRequestEventComponent {
  @Input() event: PullRequestEvent | undefined;

  getPullRequestAction(): string {
    if (!this.event) {
      return '';
    }

    const pullRequestAction: PullRequestAction = this.event.payload.action;
    const pullRequest: PullRequest = this.event.payload.pull_request;

    if (pullRequestAction === 'closed' && pullRequest.merged_at) {
      return 'merged';
    }

    return pullRequestAction.replace('_', ' ');
  }

  getTimestamp(): string {
    if (!this.event) {
      return '';
    }

    const pullRequestAction: PullRequestAction = this.event.payload.action;
    const pullRequest: PullRequest = this.event.payload.pull_request;

    if (pullRequestAction === 'closed' && pullRequest.merged_at) {
      return pullRequest.merged_at;
    }

    return pullRequest.created_at;
  }
}
