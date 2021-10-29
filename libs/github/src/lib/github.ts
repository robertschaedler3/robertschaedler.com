export const COMMIT_COMMENT_EVENT = 'CommitCommentEvent';
export const CREATE_EVENT = 'CreateEvent';
export const DELETE_EVENT = 'DeleteEvent';
export const FORK_EVENT = 'ForkEvent';
export const GOLLUM_EVENT = 'GollumEvent';
export const ISSUE_COMMENT_EVENT = 'IssueCommentEvent';
export const ISSUES_EVENT = 'IssuesEvent';
export const MEMBER_EVENT = 'MemberEvent';
export const PUBLIC_EVENT = 'PublicEvent';
export const PULL_REQUEST_EVENT = 'PullRequestEvent';
export const PULL_REQUEST_REVIEW_EVENT = 'PullRequestReviewEvent';
export const PULL_REQUEST_REVIEW_COMMENT_EVENT = 'PullRequestReviewCommentEvent';
export const PUSH_EVENT = 'PushEvent';
export const RELEASE_EVENT = 'ReleaseEvent';
export const SPONSORSHIP_EVENT = 'SponsorshipEvent';
export const WATCH_EVENT = 'WatchEvent';

export type EventType =
  | 'CommitCommentEvent'
  | 'CreateEvent'
  | 'DeleteEvent'
  | 'ForkEvent'
  | 'GollumEvent'
  | 'IssueCommentEvent'
  | 'IssuesEvent'
  | 'MemberEvent'
  | 'PublicEvent'
  | 'PullRequestEvent'
  | 'PullRequestReviewEvent'
  | 'PullRequestReviewCommentEvent'
  | 'PushEvent'
  | 'ReleaseEvent'
  | 'SponsorshipEvent'
  | 'WatchEvent';

export type PullRequestAction =
  | 'opened'
  | 'closed'
  | 'reopened'
  | 'assigned'
  | 'unassigned'
  | 'review_requested'
  | 'review_request_removed'
  | 'labeled'
  | 'unlabeled'
  | 'synchronize';
export interface PullRequest {
  id: number;
  url: string;
  title: string;
  number: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  head: {
    ref: string;
    repo: Repo;
  };
  base: {
    ref: string;
    repo: Repo;
  };
  // Other fields are not used
}

export interface Actor {
  id: string;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  url: string;
}

export interface GithubEvent {
  id: string;
  type: EventType;
  actor: Actor;
  repo: Repo;
  payload: Record<string, unknown>;
}
export interface PullRequestEvent extends GithubEvent {
  type: 'PullRequestEvent';
  payload: {
    action: PullRequestAction;
    number: number;
    pull_request: PullRequest;
  };
}
export interface PushEvent extends GithubEvent {
  type: 'PushEvent';
  payload: {
    push_id: number;
    size: number;
    distinct_size: number;
    ref: string;
    head: string;
    before: string;
    commits: Array<{
      sha: string;
      message: string;
      author: {
        name: string;
        email: string;
      };
      url: string;
      distinct: boolean;
    }>;
  };
  created_at: string;
}
