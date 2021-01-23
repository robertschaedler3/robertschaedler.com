import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../../core/services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  constructor(public terminal: TerminalService) {}

  ngOnInit() {}
}
