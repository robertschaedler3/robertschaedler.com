import { Component, Input } from '@angular/core';
import { PushEvent } from '@github/events';

@Component({
  selector: 'app-push-event',
  templateUrl: './push-event.component.html',
  styleUrls: ['./push-event.component.scss'],
})
export class PushEventComponent {
  @Input() event: PushEvent | undefined;
}
