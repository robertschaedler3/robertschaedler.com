import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {

  private context = new BehaviorSubject<string>('');
  $context = this.context.asObservable();

  constructor() {}
}
