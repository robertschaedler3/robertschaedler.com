import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Command {
  cmd: string;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommandService {

  private command = new Subject<Command>();
  $command = this.command.asObservable();

  constructor() { }

  public exec(command: string) {
    console.log(`Executing: "${command}"`);

    this.command.next({
      cmd: command,
      result: 'Command executed!'
    });
  }

}
