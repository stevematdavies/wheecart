import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { EventService } from './../../../services/event.service';
import { ProductIconService } from './../../../services/product-icon.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  itemAddedSub: null;
  itemRemovedSub: null;

  constructor(
    private eventService: EventService,
    private productIconService: ProductIconService) { }

  @Input() show: boolean;
  @Input() type: string;
  @Input() text: string;
  @Input() itemName: string;


  ngOnInit() {

  }

  ngOnDestroy() {
    this.itemAddedSub = null;
    this.itemRemovedSub =  null;
  }

  getClass() {
    return `app-alert ${this.type} ${this.show ? 'opened' : 'closed'}`;
  }

  getIconForProduct(name: string) {
    console.log(name);
    return this.productIconService.getResource(name);
  }

}
