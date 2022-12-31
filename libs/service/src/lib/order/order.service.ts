import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CreateOrderModel, OrderItemType, OrderListType, OrderStatusEnum, UpdateOrderModel } from '@star-food/model';
import { Observable } from "rxjs";

@Injectable()
export class OrderService {
  http = inject(HttpClient);

  getOrdersByOrderStatus(status: OrderStatusEnum): Observable<Array<OrderListType>> {
    return this.http.get<Array<OrderListType>>(`http://localhost:3000/orders?orderStatus=${status}&_sort=orderDate&_order=desc`);
  }

  getOrderItems(): Observable<Array<OrderItemType>> {
    return this.http.get<Array<OrderItemType>>('http://localhost:3000/order-items')
  }

  createOrder(order: CreateOrderModel): Observable<CreateOrderModel> {
    return this.http.post<CreateOrderModel>('http://localhost:3000/orders', order);
  }

  orderStatusUpdate(id: number, order: UpdateOrderModel): Observable<UpdateOrderModel> {
    return this.http.put<UpdateOrderModel>(`http://localhost:3000/orders/${id}`, order)
  }
}
