import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { OrderListType, OrderStatusEnum } from '@star-food/model';
import { Observable } from "rxjs";

@Injectable()
export class OrderService {
  http = inject(HttpClient);

  getOrdersByOrderStatus(status: OrderStatusEnum): Observable<Array<OrderListType>> {
    return this.http.get<Array<OrderListType>>(` http://localhost:3000/orders?orderStatus=${status}`);
  }
}
