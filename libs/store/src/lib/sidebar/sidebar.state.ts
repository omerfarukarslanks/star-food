import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetIsCollapseAction, SetSidebarItemsAction, SidebarStateModel } from "./sidebar.action";
import { Injectable } from "@angular/core";
import { SidebarItemType } from '@star-food/model';

@State<SidebarStateModel>({
  name: 'sidebar',
  defaults: {
    isCollapse: false,
    sidebarItems: []
  }
})
@Injectable()
export class SidebarState {

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
  setSidebarItemsAction(ctx: StateContext<SidebarStateModel>, action: SetSidebarItemsAction) {
    if (!ctx.getState().sidebarItems || (ctx.getState().sidebarItems && ctx.getState().sidebarItems.length === 0)) {
      ctx.patchState({
        sidebarItems: action.sidebarItems
      });
    }
  }
}
