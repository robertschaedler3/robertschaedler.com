import { Component, Input } from '@angular/core';
import { ForkEvent } from '@github/events';

@Component({
  selector: 'app-fork-event',
  templateUrl: './fork-event.component.html',
  styleUrls: ['./fork-event.component.scss'],
})
export class ForkEventComponent {
  @Input() event: ForkEvent | undefined;
}
