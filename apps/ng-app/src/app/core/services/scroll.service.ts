import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ScrollAnchor {
  name: string;
  el: ElementRef;
  offset: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private anchors: ScrollAnchor[] = [];

  private activeAnchor = new BehaviorSubject('');
  public activeAnchor$ = this.activeAnchor.asObservable();

  private scrollPosition = new BehaviorSubject(0);
  public scrollPosition$ = this.scrollPosition.asObservable();

  private scrollTo = new BehaviorSubject(0);
  public scrollTo$ = this.scrollTo.asObservable();

  constructor() {}

  updateScrollPosition(position: number): void {
    this.scrollPosition.next(position);

    const sorted = this.anchors.sort(
      (a, b) => b.el.nativeElement.offsetTop - a.el.nativeElement.offsetTop
    );

    // TODO: clean up
    for (const anchor of sorted) {
      if (position >= anchor.el.nativeElement.offsetTop + anchor.offset) {
        this.activeAnchor.next(anchor.name);
        break;
      }
    }
  }

  addScrollAnchor(name: string, el: ElementRef, offset: number) {
    this.anchors.push({ name, el, offset });
  }

  scrollToAnchor(anchorName: string) {
    // TODO: clean up
    for (const anchor of this.anchors) {
      if (anchor.name === anchorName) {
        const position = anchor.el.nativeElement.offsetTop + anchor.offset + 5;
        this.scrollPosition.next(position);
        this.scrollTo.next(position);
        break;
      }
    }
    // TODO: handle error?
  }
}
