import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderListType, OrderStatusEnum } from "@star-food/model";
import { OrderService } from "@star-food/service";

@Injectable()
export class AcceptedOrderResolver implements Resolve<Array<OrderListType>> {

  orderService = inject(OrderService);

  resolve(): Observable<Array<OrderListType>> {
    return this.orderService.getOrdersByOrderStatus(OrderStatusEnum.ACCEPTED);
  }
}
