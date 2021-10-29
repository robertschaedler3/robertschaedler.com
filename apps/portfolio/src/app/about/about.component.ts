import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GithubEvent, PullRequestEvent, PushEvent } from '@github/events';
import { PULL_REQUEST_EVENT, PUSH_EVENT } from '@github/events';

import { TypeGuard } from '../shared/pipes/guard-type.pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  $events: Observable<GithubEvent[]>;

  private supportedEvents = [PULL_REQUEST_EVENT, PUSH_EVENT];

  constructor(private http: HttpClient) {
    this.$events = this.http
      .get<GithubEvent[]>(
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
      )
      .pipe(
        map((events) =>
          events.filter((event) => this.supportedEvents.includes(event.type))
        )
      );
  }

  isPullRequestEvent: TypeGuard<GithubEvent, PullRequestEvent> = (
    event: GithubEvent
  ): event is PullRequestEvent => event.type === PULL_REQUEST_EVENT;

  isPushEvent: TypeGuard<GithubEvent, PushEvent> = (
    event: GithubEvent
  ): event is PushEvent => event.type === PUSH_EVENT;
}
