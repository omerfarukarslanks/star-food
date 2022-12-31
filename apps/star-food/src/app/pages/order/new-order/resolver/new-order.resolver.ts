import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from "@star-food/service";
import { OrderListType, OrderStatusEnum } from "@star-food/model";

@Injectable()
export class NewOrderResolver implements Resolve<Array<OrderListType>> {
  orderService = inject(OrderService);

  resolve(): Observable<Array<OrderListType>> {
    return this.orderService.getOrdersByOrderStatus(OrderStatusEnum.NEW_ORDER);
  }
}
