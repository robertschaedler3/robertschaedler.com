import { Component } from '@angular/core';
import { ExternalRedirectService } from 'src/app/core/services/external-redirect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public redirect: ExternalRedirectService) { }

}
