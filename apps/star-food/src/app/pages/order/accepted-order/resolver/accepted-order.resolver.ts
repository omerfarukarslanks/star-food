import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderListType, OrderStatusEnum } from "@star-food/model";
import { OrderService } from "@star-food/service";
import { Store } from "@ngxs/store";
import { SetSidebarItemsAction } from "@star-food/store";

@Injectable()
export class AcceptedOrderResolver implements Resolve<Array<OrderListType>> {

  orderService = inject(OrderService);
  store = inject(Store);

  resolve(): Observable<Array<OrderListType>> {
    this.store.dispatch(new SetSidebarItemsAction());
    return this.orderService.getOrdersByOrderStatus(OrderStatusEnum.ACCEPTED);
  }
}
