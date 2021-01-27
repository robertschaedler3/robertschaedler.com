import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Directive({
  selector: '[appScrollAnchor]',
})
export class ScrollAnchorDirective implements OnInit {

  @Input() appScrollAnchor = '';
  @Input() offset = 0;

  constructor(private el: ElementRef, private scroll: ScrollService) {}

  ngOnInit() {
    this.scroll.addScrollAnchor(this.appScrollAnchor, this.el, this.offset);
  }
}
