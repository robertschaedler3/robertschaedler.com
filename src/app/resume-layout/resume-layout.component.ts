import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.scss']
})
export class ResumeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: move to service
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
