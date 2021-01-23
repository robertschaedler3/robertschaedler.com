import { Component, OnInit } from '@angular/core';
import {  Command, CommandService} from '../../core/services/command.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {

  commands: Command[] = [];

  constructor(private cli: CommandService) {
    this.cli.$command.subscribe((command) => this.commands.push(command));
  }

  ngOnInit() { }

}
