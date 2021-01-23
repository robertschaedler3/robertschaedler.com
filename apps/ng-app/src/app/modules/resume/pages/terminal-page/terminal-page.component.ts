import { Component, HostListener, OnInit } from '@angular/core';

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
  selector: 'app-terminal-page',
  templateUrl: './terminal-page.component.html',
  styleUrls: ['./terminal-page.component.scss'],
})
export class TerminalPageComponent implements OnInit {
  commands = [''];

  constructor() {}

  ngOnInit(): void {}

  get currCmd() {
    return this.commands.length - 1;
  }

  @HostListener('document:keydown', ['$event'])
  protected handleKeydownEvent(event: KeyboardEvent) {
    const code = event.code;
    switch (code) {
      case 'Backspace':
        this.commands[this.currCmd] = this.commands[this.currCmd].slice(0, -1);
        break;
      case 'Enter':
        this.exec();
        break;
      default:
        if (code.startsWith('Key') || SPECIAL_CHARS.includes(event.key)) {
          this.type(event.key);
        } else {
          console.log(event.key);
        }
    }
  }

  private exec() {
    this.commands.push('');
  }

  private type(key: string) {
    this.commands[this.currCmd] += key;
  }
}
