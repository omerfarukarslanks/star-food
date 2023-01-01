import { Component, inject, Input } from '@angular/core';
import { CreateOrderModel, OrderItemType, OrderStatusEnum, TransferTypeEnum } from "@star-food/model";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { PriceOperationsUtil } from "@star-food/util";
import { Store } from "@ngxs/store";
import { SetCreateOrderAction, SetCreateOrderValidAction } from "@star-food/store";
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'star-food-create-order-form',
  templateUrl: './create-order-form.component.html',
  styleUrls: ['./create-order-form.component.scss'],
})
export class CreateOrderFormComponent {
  formBuilder = inject(FormBuilder);
  store = inject(Store);

  TransferTypeEnum = TransferTypeEnum;
  @Input() orderItems = new Array<OrderItemType>();
  listOfSelectedOrderItems = new Array<OrderItemType>();
  setOfCheckedId = new Set<number>();

  createOrderFormGroup = this.formBuilder.group({
    orderNumber: new FormControl(`${Math.floor(100000 + Math.random() * 900000)}`),
    orderDate: new FormControl(new Date().toLocaleString()),
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    phoneNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    transferType: new FormControl(TransferTypeEnum.DELIVERY, {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    message: new FormControl('', {initialValueIsDefault: true}),
    items: new FormControl<Array<OrderItemType>>([], {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    orderStatus: new FormControl(OrderStatusEnum.NEW_ORDER, {initialValueIsDefault: true}),
    totalPrice: new FormControl(0, {initialValueIsDefault: true})
  });

  constructor() {
    this.createOrderFormGroup.valueChanges.pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))).subscribe((form) => {
      this.listOfSelectedOrderItems = new Array<OrderItemType>();
      this.listOfSelectedOrderItems = [...form.items as Array<OrderItemType>];
      this.updatedCreateOrderFormGroup();
    });
  }

  onItemChecked(orderItem: OrderItemType, checked: boolean): void {
    this.updateCheckedSet(orderItem, checked);
  }

  updateCheckedSet(orderItem: OrderItemType, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(orderItem.id);
    } else {
      this.setOfCheckedId.delete(orderItem.id);
    }
    let list = [] as Array<OrderItemType>;
    if (this.setOfCheckedId.size > 0) {
      list = this.orderItems.filter(item => this.setOfCheckedId.has(item.id))
    }
    this.createOrderFormGroup.get('items')?.setValue(list);
  }

  orderItemSelectChange(orderItems: Array<OrderItemType>) {
    this.setOfCheckedId = new Set<number>();
    this.setOfCheckedId = new Set(orderItems.map(item => item.id));
  }

  deleteSelectedOrderItem(orderItem: OrderItemType) {
    const index = this.listOfSelectedOrderItems.findIndex(item => item.id === orderItem.id);
    this.listOfSelectedOrderItems.splice(index, 1);
    this.createOrderFormGroup.patchValue({items: this.listOfSelectedOrderItems});
    this.setOfCheckedId.delete(orderItem.id);
  }

  minus(orderItem: OrderItemType) {
    orderItem.quantity -= 1;
    if (orderItem.quantity === 0) {
      this.listOfSelectedOrderItems = this.listOfSelectedOrderItems.filter(item => item.id !== orderItem.id);
      this.orderItems.forEach(item => item.id === orderItem.id ? item.quantity = 1 : null);
    }
    this.updatedCreateOrderFormGroup();
  }

  plus(orderItem: OrderItemType) {
    orderItem.quantity += 1;
    this.updatedCreateOrderFormGroup();
  }

  updatedCreateOrderFormGroup() {
    const totalPrice = PriceOperationsUtil.totalPrice(this.listOfSelectedOrderItems.map(item => (item.price * item.quantity)));
    this.createOrderFormGroup.patchValue({items: this.listOfSelectedOrderItems, totalPrice});
    this.store.dispatch(new SetCreateOrderAction(this.createOrderFormGroup.value as CreateOrderModel));
    this.store.dispatch(new SetCreateOrderValidAction(this.createOrderFormGroup.valid));
  }
}
