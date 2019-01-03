import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  @Input() show: boolean;
  @Input() type: string;
  @Input() text: string;

  ngOnInit() {}

  getClass() {
    return `app-alert ${this.type} ${this.show ? 'opened' : 'closed'}`;
  }

}
