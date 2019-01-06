import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss']
})
export class HeaderLogoComponent implements OnInit {

  @Input() subText: string;

  constructor() { }

  ngOnInit() {
  }

}
