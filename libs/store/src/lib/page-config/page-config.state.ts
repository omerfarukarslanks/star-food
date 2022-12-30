import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { PageConfigStateModel, SetPageTitle } from "./page-config.action";

@State<PageConfigStateModel>({
  name: 'pageConfig',
  defaults: {
    title: ''
  }
})

@Injectable()
export class PageConfigState {

  @Selector()
  static getPageTitle(state: PageConfigStateModel) {
    return state.title;
  }

  @Action(SetPageTitle)
  setPageTitle(ctx: StateContext<PageConfigStateModel>, action: SetPageTitle) {
    ctx.patchState({title: action.title});
  }
}
