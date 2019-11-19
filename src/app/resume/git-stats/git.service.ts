import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as _ from 'lodash';

interface GitEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  },
  payload: {
    push_id: number;
    size: number;
    distinct_size: number;
    ref: string;
    head: string;
    before: string;
    commits: [
      {
        sha: string;
        author: {
          email: string;
          name: string;
        },
        message: string;
        distinct: boolean;
        url: string;
      }
    ]
  },
  public: boolean;
  created_at: string;
}

interface Year {
  year: string;
  total: number;
  range: {
    start: string;
    end: string;
  }
}

interface Contribution {
  date: string;
  count: number;
  color: string;
  intensity: number;
}

interface Contributions {
  years: Year[];
  contributions: Contribution[];
}

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private events$: Observable<GitEvent[]>;
  private contributions$: Observable<Contributions>;

  private eventsURL: string = 'https://api.github.com/users/robertschaedler3/events';
  private contributionsURL: string = 'https://github-contributions-api.now.sh/v1/robertschaedler3';

  constructor(private http: HttpClient) {
    this.getContributions();
    this.getEvents();
   }

  private getEvents() {
    return this.events$ = this.http.get(this.eventsURL).pipe(
      map(data => _.values(data)),
      tap(console.log),
    );
  }

  private getContributions() {
    return this.contributions$ = this.http.get(this.contributionsURL).pipe(
      map(data => _.values(data)),
      tap(console.log),
    );
  }
}
