import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-git-stats',
  templateUrl: './git-stats.component.html',
  styleUrls: ['./git-stats.component.scss']
})
export class GitStatsComponent implements OnInit {

  constructor(public git: GitService) { }

  ngOnInit() {
  }

}
