import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<Theme>(Theme.Light);
  $theme = this._theme.asObservable();

  constructor() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.theme = Theme.Dark;
    }

    // Listen for system theme changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        this.theme = event.matches ? Theme.Dark : Theme.Light;
      });
  }

  private set theme(theme: Theme) {
    this._theme.next(theme);
  }

  setLightTheme(): void {
    this.theme = Theme.Light;
  }

  setDarkTheme(): void {
    this.theme = Theme.Dark;
  }
}
