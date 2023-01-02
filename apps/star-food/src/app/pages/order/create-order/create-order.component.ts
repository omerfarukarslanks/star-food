import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { OrderState, SetPageTitle } from "@star-food/store";
import { OrderItemType,TransferTypeEnum } from "@star-food/model";
import { NotificationService, OrderService } from "@star-food/service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Router } from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'star-food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  store = inject(Store);
  orderService = inject(OrderService);
  router = inject(Router);
  notificationService = inject(NotificationService);

  TransferTypeEnum = TransferTypeEnum;
  orderItems = new Array<OrderItemType>();
  listOfSelectedOrderItems = new Array<OrderItemType>();
  totalPrice = 0;
  checkFormValid = false;

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Create Order'));
    this.getOrderItems();
    this.store.select(OrderState.checkFormValid).subscribe(valid => this.checkFormValid = valid);
  }

  getOrderItems() {
    this.orderService.getOrderItems().pipe(untilDestroyed(this)).subscribe(orderItems => this.orderItems = orderItems);
  }

  createOrder() {
    if (this.checkFormValid) {
      const order = this.store.selectSnapshot(OrderState.getCreateOrder);
      this.orderService.createOrder(order).pipe(untilDestroyed(this)).subscribe(() => {
        this.router.navigate(['/ui/order/new-order']);
      });
    } else {
      this.notificationService.info('Warning','It is mandatory to fill all fields' );
    }
  }

  cancelOrder() {
    this.router.navigate(['/ui/order/accepted']);
  }
}
