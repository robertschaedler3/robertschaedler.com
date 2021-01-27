import { AfterViewInit, Component, NgZone, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild(PerfectScrollbarComponent)
  scrollbarRef?: PerfectScrollbarComponent;

  constructor(private ngZone: NgZone, private scroll: ScrollService) {}

  ngAfterViewInit() {
    this.scroll.scrollTo$.subscribe((position) => {
      console.log(`Scrolling to: '${position}'`);
      this.scrollbarRef.directiveRef.scrollToY(position, 500);
    });
  }

  onScroll($event) {
    const scrollPosition = $event.srcElement.scrollTop;
    this.ngZone.run(() => this.scroll.updateScrollPosition(scrollPosition));
  }
}
