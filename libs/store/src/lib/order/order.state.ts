import { Action, Selector, State, StateContext } from "@ngxs/store";
import { OrderStateModel, SetCreateOrderAction, SetCreateOrderValidAction } from "./order.action";
import { CreateOrderModel } from "@star-food/model";
import { Injectable } from "@angular/core";

@State<OrderStateModel>({
  name: 'order',
  defaults: {
    createOrder: new CreateOrderModel(),
    checkFormValid: false
  }
})
@Injectable()
export class OrderState {

  @Selector()
  static getCreateOrder(state: OrderStateModel) {
    return state.createOrder;
  }

  @Selector()
  static getCreateOrderItems(state: OrderStateModel) {
    return state.createOrder.items;
  }

  @Selector()
  static checkFormValid(state: OrderStateModel) {
    return state.checkFormValid;
  }

  @Action(SetCreateOrderAction)
  setCreateOrderAction(ctx: StateContext<OrderStateModel>, action: SetCreateOrderAction) {
    ctx.patchState({createOrder: action.order});
  }

  @Action(SetCreateOrderValidAction)
  setCreaOrderValidAction(ctx: StateContext<OrderStateModel>, action: SetCreateOrderValidAction) {
    ctx.patchState({checkFormValid: action.checkFormValid});
  }
}
