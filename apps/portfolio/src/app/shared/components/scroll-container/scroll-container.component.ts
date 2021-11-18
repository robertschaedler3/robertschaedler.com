import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { spin } from '../../../animations/motion.animation';

@Component({
  selector: 'app-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss'],
  animations: [spin],
})
export class ScrollContainerComponent implements AfterViewInit {
  @Input() scroll = true;
  @Input() arrow = false;
  @Input() hideArrow = 200;

  @ViewChild('scroll', { static: true })
  scrollContainer!: ElementRef;

  private scrollPosition = new BehaviorSubject(0);
  public $scrollPosition = this.scrollPosition.asObservable();

  ngAfterViewInit() {
    fromEvent(this.scrollContainer.nativeElement, 'scroll').subscribe({
      next: () => {
        this.scrollPosition.next(this.scrollContainer.nativeElement.scrollTop);
        console.log(this.scrollContainer.nativeElement.scrollTop);
      },
    });
  }

  get scrollable(): boolean {
    return this.scroll;
  }

  get hasArrow(): boolean {
    return this.arrow;
  }

  get $showArrow(): Observable<boolean> {
    return this.$scrollPosition.pipe<boolean>(
      map((position: number) => position < this.hideArrow)
    );
  }
}
