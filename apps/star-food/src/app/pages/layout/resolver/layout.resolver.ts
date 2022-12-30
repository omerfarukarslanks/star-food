import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { OrderStatusEnum, SidebarItemType } from '@star-food/model';
import { Store } from '@ngxs/store';
import { OrderService } from '@star-food/service';
import { forkJoin } from 'rxjs';
import { SetSidebarItemsAction, SidebarState } from '@star-food/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class LayoutResolver implements Resolve<Array<SidebarItemType>> {
  store = inject(Store);
  orderService = inject(OrderService);
  sidebarItems = new Array<SidebarItemType>();

  resolve(): any {
    const sidebarItemTypes = this.store.selectSnapshot(SidebarState.getSidebarItems);
    if (!sidebarItemTypes || (sidebarItemTypes && sidebarItemTypes.length === 0)) {
      forkJoin([
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.ACCEPTED),
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.COMPLETED),
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.COOKING),
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.DELIVERED),
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.NEW_ORDER),
        this.orderService.getOrdersByOrderStatus(OrderStatusEnum.PARCEL_READY),
      ]).pipe(untilDestroyed(this)).subscribe(results => {
        this.sidebarItems.push(
          {
            title: 'New Order',
            order: 1,
            count: results[4].length,
            routerLink: ''
          },
          {
            title: 'Accepted',
            order: 2,
            count: results[1].length,
            routerLink: '/ui/order/accepted'
          },
          {
            title: 'Cooking',
            order: 3,
            count: results[2].length,
            routerLink: ''
          },
          {
            title: 'Parcel Ready',
            order: 4,
            count: results[5].length,
            routerLink: ''
          },
          {
            title: 'Delivered',
            order: 5,
            count: results[3].length,
            routerLink: ''
          },
          {
            title: 'Completed',
            order: 6,
            count: results[1].length,
            routerLink: ''
          }
        )
        this.store.dispatch(new SetSidebarItemsAction(this.sidebarItems));
      });
    }
  }
}
