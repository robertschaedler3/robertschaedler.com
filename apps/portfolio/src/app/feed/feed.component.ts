import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GithubEvent, PullRequestEvent, PushEvent } from '@github/events';
import { PULL_REQUEST_EVENT, PUSH_EVENT } from '@github/events';

import { TypeGuard } from '../shared/pipes/guard-type.pipe';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  $events: Observable<GithubEvent[]>;

  constructor(private http: HttpClient) {
    this.$events = this.http.get<GithubEvent[]>(
      'https://api.github.com/users/robertschaedler3/events/public',
      {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json',
        },
        params: {
          sort: 'pushed',
          per_page: '6',
        },
      }
    );
  }

  isPullRequestEvent: TypeGuard<GithubEvent, PullRequestEvent> = (
    event: GithubEvent
  ): event is PullRequestEvent => event.type === PULL_REQUEST_EVENT;

  isPushEvent: TypeGuard<GithubEvent, PushEvent> = (
    event: GithubEvent
  ): event is PushEvent => event.type === PUSH_EVENT;
}
