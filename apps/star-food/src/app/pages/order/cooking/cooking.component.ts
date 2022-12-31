import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "@star-food/service";
import { OrderListType, OrderStatusEnum, TransferTypeEnum, UpdateOrderModel } from "@star-food/model";
import { SetPageTitle } from "@star-food/store";
import { PriceOperationsUtil } from "@star-food/util";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'star-food-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss'],
})
export class CookingComponent implements OnInit{
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute);
  orderService = inject(OrderService);
  router = inject(Router);
  orders = new Array<OrderListType>();
  OrderTransferType = TransferTypeEnum;

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Cooking'));
    this.orders = this.activatedRoute.snapshot.data['orders'];
  }

  orderStatusUpdate(order: UpdateOrderModel) {
    order.orderStatus = OrderStatusEnum.PARCEL_READY;
    this.orderService.orderStatusUpdate(order).pipe(untilDestroyed(this)).subscribe(() => {
      this.router.navigate(['/ui/order/parcel-ready']);
    });
  }
}
