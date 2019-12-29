import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-git-stats',
  templateUrl: './git-stats.component.html',
  styleUrls: []
})
export class GitStatsComponent implements OnInit {

  today: number = Date.now();

  constructor(public git: GitService) { }

  ngOnInit() {
  }

}
