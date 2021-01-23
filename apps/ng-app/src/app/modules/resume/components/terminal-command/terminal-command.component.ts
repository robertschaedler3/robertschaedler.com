import { Component, Input, OnInit } from '@angular/core';
import { Command, CommandService } from '../../../../core/services/command.service';


@Component({
  selector: 'app-terminal-command',
  templateUrl: './terminal-command.component.html',
  styleUrls: ['./terminal-command.component.scss'],
})
export class TerminalCommandComponent implements OnInit {

  @Input() command: Command;

  constructor() {}

  ngOnInit(): void {}

}
