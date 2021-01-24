import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { TerminalService } from '../../core/services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;

  constructor(public terminal: TerminalService) {}

  ngOnInit() {
    this.terminal.$commands.subscribe(() => {
      if (this.componentRef && this.componentRef.directiveRef) {
        this.componentRef.directiveRef.scrollToBottom();
      }
    });
  }
}
