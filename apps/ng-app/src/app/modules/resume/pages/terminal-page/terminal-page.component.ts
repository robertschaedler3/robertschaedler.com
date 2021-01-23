import { Component, OnInit } from '@angular/core';
import { Command, CommandService } from '../../../../core/services/command.service';

@Component({
  selector: 'app-terminal-page',
  templateUrl: './terminal-page.component.html',
  styleUrls: ['./terminal-page.component.scss'],
})
export class TerminalPageComponent implements OnInit {

  commands: Command[] = [];

  constructor(private cli: CommandService) {
    this.cli.$command.subscribe(command => this.commands.push(command));
  }

  ngOnInit(): void {}

}
