import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent implements OnInit {

  @Input() buttonIconClass: string;

  constructor() { }

  ngOnInit() {
  }

}