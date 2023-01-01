import { Component, inject } from '@angular/core';
import { OrderItemType } from "@star-food/model";
import { Store } from "@ngxs/store";
import { OrderState } from "@star-food/store";
import { PriceOperationsUtil } from "@star-food/util";

@Component({
  selector: 'star-food-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss'],
})
export class DeliveryDetailsComponent {
  listOfSelectedOrderItems = new Array<OrderItemType>();
  store = inject(Store);
  totalPrice = 0;

  constructor() {
    this.store.select(OrderState.getCreateOrderItems).subscribe(orderItems => {
      if (orderItems) {
        this.listOfSelectedOrderItems = orderItems;
        this.totalPrice = PriceOperationsUtil.totalPrice(this.listOfSelectedOrderItems.map(item => (item.price * item.quantity)));
      }
    });
  }
}
