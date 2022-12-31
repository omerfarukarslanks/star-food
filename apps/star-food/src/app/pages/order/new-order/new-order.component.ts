import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderListType, OrderStatusEnum, TransferTypeEnum, UpdateOrderModel } from "@star-food/model";
import { SetPageTitle } from "@star-food/store";
import { OrderService } from "@star-food/service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { PriceOperationsUtil } from "@star-food/util";

@UntilDestroy()
@Component({
  selector: 'star-food-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute);
  orderService = inject(OrderService);
  router = inject(Router);
  orders = new Array<OrderListType>();
  OrderTransferType = TransferTypeEnum;

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('New Order'));
    this.orders = this.activatedRoute.snapshot.data['orders'];
  }

  orderStatusUpdate(order: UpdateOrderModel) {
    order.orderStatus = OrderStatusEnum.ACCEPTED;
    order.totalPrice = PriceOperationsUtil.totalPrice(order.items.map(item => item.price));
    this.orderService.orderStatusUpdate(order.id, order).pipe(untilDestroyed(this)).subscribe(() => {
      this.router.navigate(['/ui/order/accepted']);
    });
  }
}
