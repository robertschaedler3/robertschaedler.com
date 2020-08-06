import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div class="thumbnail">
      <a [href]="link">
        <img [ngClass]="{
          'large': size === 'large', 
          'medium': size === 'medium', 
          'small': size === 'small', 
          'round': rounded
        }" [src]="src" [alt]="alt">
      </a>
  </div>`,
  styles: [
    `.image-conainer {
      min-height: 5rem;
    },
    .small {
      width: 8rem;
    }
    .medium {
      width: 12rem;
    }
    .large {
      width: 18rem;
    }
    .round {
      border-radius: 0.675rem;
    }`
  ]
})
export class ImageComponent {

  // Image attributes
  @Input() link: string = '#';
  @Input() src: string;
  @Input() alt: string;

  // Style options
  @Input() size: 'small' | 'medium' | 'large';
  @Input() rounded: boolean = false;

  constructor() { }

}
