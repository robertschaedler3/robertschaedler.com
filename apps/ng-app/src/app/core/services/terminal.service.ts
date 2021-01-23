import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Executable {
  name: string;
  run: (...args) => string;
}

export interface Command {
  cmd: string;
  context: string;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class TerminalService {

  private commands = new BehaviorSubject<Array<Command>>([]);
  $commands = this.commands.asObservable();

  private context = new BehaviorSubject<string>('~/');
  $context = this.context.asObservable();

  private EXECUTABLES: Executable[] = [
    {
      name: 'help',
      run: () => {
        return `Have a look around with 'ls'`;
      },
    },
    {
      name: 'clear',
      run: () => {
        this.commands.next([]);
        return undefined;
      },
    },
    {
      name: 'cd',
      run: (dir) => {
        return this.cd(dir);
      },
    },
    {
      name: 'ls',
      run: () => {
        return this.ls();
      },
    },
  ];

  constructor() {}

  public exec(cmd: string) {
    let result = '';
    const context = this.context.value;

    if (cmd.length > 0) {
      result = this.processCommand(cmd);
    }

    if (result !== undefined) {
      const currCmds = this.commands.value;
      const nextCmds = [...currCmds, { cmd, context, result }];
      this.commands.next(nextCmds);
    }
  }

  private processCommand(command: string): string {
    const cmd = command.split(' ');

    for (const exe of this.EXECUTABLES) {
      if (exe.name === cmd[0]) {
        return exe.run(cmd.slice(1));
      }
    }

    return `Error: '${cmd[0]}' is not recognized as a command.`;
  }

  private cd(dir: string): string {
    // TODO: check dirs
    this.context.next(`~/${dir}`);
    return '';
  }

  private ls(): string {
    return '/projects /resume /repos';
  }
}
