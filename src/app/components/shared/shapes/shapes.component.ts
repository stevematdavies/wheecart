import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent implements OnInit {

  @Input() shape: string;

  constructor() { }

  ngOnInit() {
  }

  isSelectedShape(shape: string) {
    return this.shape.toLocaleLowerCase() === shape;
  }

}
