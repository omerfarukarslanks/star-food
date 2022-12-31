import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService, OrderService } from "@star-food/service";
import { OrderListType, OrderStatusEnum, UpdateOrderModel } from "@star-food/model";
import { SetPageTitle } from "@star-food/store";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'star-food-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  orderService = inject(OrderService);
  notificationService = inject(NotificationService);
  orders = new Array<OrderListType>();

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Completed'));
    this.orders = this.activatedRoute.snapshot.data['orders'];
  }

  orderStatusUpdate(order: UpdateOrderModel) {
    if (order) {
      order.orderStatus = OrderStatusEnum.NEW_ORDER;
      this.orderService.orderStatusUpdate(order).pipe(untilDestroyed(this)).subscribe(() => {
        this.notificationService.success(
          'Success',
          'Status update successful',
        );
        this.router.navigate(['/ui/order/new-order']);
      });
    }
  }
}
