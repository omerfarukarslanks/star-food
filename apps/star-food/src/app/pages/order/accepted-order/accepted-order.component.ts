import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetPageTitle } from '@star-food/store';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { OrderListType, OrderStatusEnum, UpdateOrderModel } from "@star-food/model";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService, OrderService } from "@star-food/service";
import { PriceOperationsUtil } from "@star-food/util";

@UntilDestroy()
@Component({
  selector: 'star-food-accepted-order',
  templateUrl: './accepted-order.component.html',
  styleUrls: ['./accepted-order.component.scss'],
})
export class AcceptedOrderComponent implements OnInit {
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  orderService = inject(OrderService);
  notificationService = inject(NotificationService);
  orders = new Array<OrderListType>();
  listOfOrders = new Array<OrderListType>();
  isShowingTenOrders = false;
  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Accepted'));
    this.orders = this.activatedRoute.snapshot.data['orders'];
    this.listOfOrders = [...this.orders];
  }

  orderStatusUpdate(order: UpdateOrderModel) {
    if (order) {
      order.orderStatus = OrderStatusEnum.COOKING;
      this.orderService.orderStatusUpdate(order).pipe(untilDestroyed(this)).subscribe(() => {
        this.notificationService.success(
          'Success',
          'Status update successful',
        );
        this.router.navigate(['/ui/order/cooking']);
      });
    }
  }

  showingOrder() {
    this.listOfOrders = [];
    this.isShowingTenOrders = !this.isShowingTenOrders;
    if(this.isShowingTenOrders) {
      this.orders.forEach(order => {
        const totalQuantity = PriceOperationsUtil.totalPrice(order.items.map(item => item.quantity));
        totalQuantity > 10 ? this.listOfOrders.push(order) : null;
      });
    } else {
      this.listOfOrders = [...this.orders];
    }
  }
}
