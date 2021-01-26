import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  $projects: Observable<Project[]>;

  constructor(private http: HttpClient) {
    this.$projects = this.http.get<Project[]>(
      'https://api.github.com/users/robertschaedler3/repos',
      {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json',
        },
        params: {
          sort: 'pushed',
          per_page: '6',
        },
      }
    );
  }

  ngOnInit(): void {}
}
