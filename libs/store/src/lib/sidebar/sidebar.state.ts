import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetIsCollapseAction, SidebarStateModel } from "./sidebar.action";
import { Injectable } from "@angular/core";

@State<SidebarStateModel>({
  name: 'sidebar',
  defaults: {
    isCollapse: false,
  }
})
@Injectable()
export class SidebarState {

  @Selector()
  static getIsCollapse(ctx: SidebarStateModel): boolean  {
    return ctx.isCollapse;
  }

  @Action(SetIsCollapseAction)
  setIsCollapseAction(ctx: StateContext<SidebarStateModel>, action: SetIsCollapseAction) {
    ctx.patchState({
      isCollapse: action.isCollapse
    });
  }
}
