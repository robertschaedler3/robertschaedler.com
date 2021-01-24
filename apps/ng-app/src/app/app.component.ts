import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Robert Schaedler III';
  private currentTheme: string;

  constructor(private renderer: Renderer2, private themeSvc: ThemeService) {}

  ngOnInit() {
    this.themeSvc.$theme.subscribe((theme) => {
      this.renderer.removeClass(document.body, this.currentTheme);
      this.renderer.addClass(document.body, theme);
      this.currentTheme = theme;
    });
  }
}
