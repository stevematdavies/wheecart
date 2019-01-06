import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { EventService } from 'src/app/services/event.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('customNotification') customNotificationTmpl;

  itemAddedSubScription: null;
  itemDeletedSubscription: null;
  private readonly notifier: NotifierService;

  constructor(
    private eventService: EventService,
    private notifierService: NotifierService,
    private shoppingCartService: ShoppingCartService) {
      this.notifier = notifierService;
    }

  ngOnInit() {
    if (!this.shoppingCartService.getShoppingCart()) {
      this.shoppingCartService.initStorage();
    }
    this.subscribeQueue();
  }

  subscribeQueue() {
    this.itemAddedSubScription = this.eventService.itemAddedToCart
      .subscribe((itemName: string) => this.showNotification(itemName, 'added'));
    this.itemDeletedSubscription = this.eventService.itemRemovedFromCart
      .subscribe((itemName: string) => this.showNotification(itemName, 'removed'));
  }

  unsubScribeQueue() {
    this.itemAddedSubScription = null;
    this.itemDeletedSubscription = null;
  }

  ngOnDestroy() {
    this.unsubScribeQueue();
  }

  showNotification(name: string, action: string) {
    this.notifierService.show({
      message: `${name} successfuly ${action} ${action === 'added' ? 'to' : 'from'} cart!`,
      type: 'default',
      template: this.customNotificationTmpl
    });
  }


}
