import { Component, Input } from '@angular/core';
import { IssuesEvent } from '@github/events';

@Component({
  selector: 'app-issues-event',
  templateUrl: './issues-event.component.html',
  styleUrls: ['./issues-event.component.scss'],
})
export class IssuesEventComponent {
  @Input() event: IssuesEvent | undefined;

  getIssueAction(): string {
    return this.event ? this.event.payload.action : '';
  }

  getTimestamp(): string {
    return this.event ? this.event.payload.issue.updated_at : '';
  }
}
