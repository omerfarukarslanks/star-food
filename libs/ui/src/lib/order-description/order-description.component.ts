import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderListType, TransferTypeEnum, UpdateOrderModel } from "@star-food/model";

@Component({
  selector: 'star-food-order-description',
  templateUrl: './order-description.component.html',
  styleUrls: ['./order-description.component.scss'],
})
export class OrderDescriptionComponent {
  OrderTransferType = TransferTypeEnum;

  @Input() orderStatusUpdateButtonName = '';
  @Input() orders = new Array<OrderListType>();
  @Output() orderStatusUpdateEvent = new EventEmitter();

  orderStatusUpdate(order: UpdateOrderModel) {
    this.orderStatusUpdateEvent.emit(order);
  }
}
