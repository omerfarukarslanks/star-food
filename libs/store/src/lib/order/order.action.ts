import { CreateOrderModel } from "@star-food/model";

export interface OrderStateModel {
  createOrder: CreateOrderModel;
  checkFormValid: boolean;
}

export class SetCreateOrderAction {
  static readonly type = '[order] SetCreateOrderAction';
  constructor(public order: CreateOrderModel) {}
}

export class SetCreateOrderValidAction {
  static readonly type = '[order] SetCreateOrderValidAction';
  constructor(public checkFormValid: boolean) {}
}
