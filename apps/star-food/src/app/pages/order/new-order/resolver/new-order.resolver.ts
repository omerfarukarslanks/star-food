import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from "@star-food/service";
import { OrderListType, OrderStatusEnum } from "@star-food/model";
import { SetSidebarItemsAction } from "@star-food/store";
import { Store } from "@ngxs/store";

@Injectable()
export class NewOrderResolver implements Resolve<Array<OrderListType>> {
  orderService = inject(OrderService);
  store = inject(Store);

  resolve(): Observable<Array<OrderListType>> {
    this.store.dispatch(new SetSidebarItemsAction());
    return this.orderService.getOrdersByOrderStatus(OrderStatusEnum.NEW_ORDER);
  }
}
