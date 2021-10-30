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

  getPullRequestAction(
    pullRequestAction: PullRequestAction,
    pullRequest: PullRequest
  ): string {
    if (pullRequestAction === 'closed' && pullRequest.merged_at) {
      return 'merged';
    }
    const action = pullRequestAction.replace('_', ' ');
    return action;
  }

  getTimestamp(
    pullRequestAction: PullRequestAction,
    pullRequest: PullRequest
  ): string {
    if (pullRequestAction === 'closed' && pullRequest.merged_at) {
      return pullRequest.merged_at;
    }
    return pullRequest.created_at;
  }
}
