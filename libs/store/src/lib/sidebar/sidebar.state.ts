import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetIsCollapseAction, SetSidebarItemsAction, SidebarStateModel } from "./sidebar.action";
import { inject, Injectable } from "@angular/core";
import { OrderStatusEnum, SidebarItemType } from '@star-food/model';
import { forkJoin } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { OrderService } from "@star-food/service";

@State<SidebarStateModel>({
  name: 'sidebar',
  defaults: {
    isCollapse: false,
    sidebarItems: []
  }
})
@UntilDestroy()
@Injectable()
export class SidebarState {

  orderService = inject(OrderService);

  @Selector()
  static getIsCollapse(ctx: SidebarStateModel): boolean {
    return ctx.isCollapse;
  }

  @Selector()
  static getSidebarItems(ctx: SidebarStateModel): Array<SidebarItemType> {
    return ctx.sidebarItems;
  }

  @Action(SetIsCollapseAction)
  setIsCollapseAction(ctx: StateContext<SidebarStateModel>, action: SetIsCollapseAction) {
    ctx.patchState({
      isCollapse: action.isCollapse
    });
  }

  @Action(SetSidebarItemsAction)
  setSidebarItemsAction(ctx: StateContext<SidebarStateModel>) {
    const sidebarItems = new Array<SidebarItemType>();
    forkJoin([
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.ACCEPTED),
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.COMPLETED),
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.COOKING),
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.DELIVERED),
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.NEW_ORDER),
      this.orderService.getOrdersByOrderStatus(OrderStatusEnum.PARCEL_READY),
    ]).pipe(untilDestroyed(this)).subscribe(results => {
      sidebarItems.push(
        {
          title: 'New Order',
          order: 1,
          count: results[4].length,
          routerLink: '/ui/order/new-order'
        },
        {
          title: 'Accepted',
          order: 2,
          count: results[0].length,
          routerLink: '/ui/order/accepted'
        },
        {
          title: 'Cooking',
          order: 3,
          count: results[2].length,
          routerLink: '/ui/order/cooking'
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
      ctx.patchState({
        sidebarItems: sidebarItems
      });
    });
  }
}
