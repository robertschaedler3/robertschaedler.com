import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {

  myControl = new FormControl;
  markdown;
  previousText = '';

  constructor(public rd: Renderer2) { }

  @ViewChild('editor', { static: false }) el: ElementRef;
  // @ViewChild('someVar') el: ElementRef

  ngOnInit() {
    this.myControl.setValue('');
    // this.myControl.valueChanges.subscribe(this.keysTyped);
    this.markdown = this.myControl;
  }

  @HostListener('document:keydown.enter')
  enter() {
    this.markdown = "\n"
    var d = this.rd.createElement('hr')
    // let text = this.rd.createText('testing123')
    // this.rd.appendChild(d, text);
    this.rd.appendChild(this.el, d);
  }

  keysTyped(k: string) {
    this.markdown = k;
    // console.log(k)
  }
  // preRenderFunc(content: string) {
  //   return content.replace(/something/g, 'new value'); // must return a string
  // }

  // addMarkdown() {
  //   var val = this.myControl.valueChanges;
  //   this.markdown = `${val}`
  // }

}
