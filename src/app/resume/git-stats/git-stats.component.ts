import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http/http.service';

@Component({
  selector: 'app-git-stats',
  templateUrl: './git-stats.component.html',
  styleUrls: ['./git-stats.component.scss']
})
export class GitStatsComponent implements OnInit {

  constructor(public contributions: HttpService, public events: HttpService) {
    contributions.get('https://github-contributions-api.now.sh/v1/robertschaedler3');
    events.get('https://api.github.com/users/robertschaedler3/events');
  }

  ngOnInit() {
  }

}
