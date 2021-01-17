import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
})
export class SocialLinkComponent implements OnInit {

  @Input() link: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
