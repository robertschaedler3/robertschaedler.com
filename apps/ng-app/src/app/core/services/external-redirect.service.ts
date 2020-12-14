import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalRedirectService {

  constructor() { }

  open(url: string) {
    window.open(url);
  }
}
