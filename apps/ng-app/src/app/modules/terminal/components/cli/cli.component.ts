import { Component, HostListener, OnInit } from '@angular/core';
import { CommandService } from '../../../../core/services/command.service';

export const SPECIAL_CHARS = [
  ' ',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '`',
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  ';',
  ':',
  "'",
  '"',
  ',',
  '<',
  '>',
  '.',
  '/',
  '?',
  '|',
  '\\',
];

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss'],
})
export class CliComponent implements OnInit {

  command = '';

  constructor(private cli: CommandService) {}

  ngOnInit(): void {}

  @HostListener('document:keydown', ['$event'])
  protected handleKeydownEvent(event: KeyboardEvent) {
    const code = event.code;
    switch (code) {
      case 'Backspace':
        this.command = this.command.slice(0, -1);
        break;
      case 'Enter':
        this.cli.exec(this.command);
        this.command = '';
        break;
      default:
        if (code.startsWith('Key') || SPECIAL_CHARS.includes(event.key)) {
          this.command += event.key;
        } else {
          console.error(event.key);
        }
    }
  }

}
