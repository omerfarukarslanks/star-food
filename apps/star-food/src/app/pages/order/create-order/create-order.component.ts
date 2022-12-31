import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetPageTitle } from "@star-food/store";
import { FormBuilder, FormControl, UntypedFormControl, Validators } from "@angular/forms";
import { OrderItemType, TransferTypeEnum } from "@star-food/model";
import { OrderService } from "@star-food/service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'star-food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  store = inject(Store);
  formBuilder = inject(FormBuilder);
  orderService = inject(OrderService);

  TransferTypeEnum = TransferTypeEnum;
  orderItems = new Array<OrderItemType>();
  listOfSelectedOrderItems = new Array<OrderItemType>();
  setOfCheckedId = new Set<number>();
  checked = false;
  itemsLength = 0;

  createOrderFormGroup = this.formBuilder.group({
    orderNumber: new FormControl(`#${Math.floor(100000 + Math.random() * 900000)}`, {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    orderDate: new FormControl(new Date().toLocaleString(), {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    phoneNumberPrefix: new FormControl('', {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    phoneNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    transferType: new FormControl('', {
      initialValueIsDefault: true,
      nonNullable: true,
      validators: Validators.required
    }),
    message: new FormControl('', {initialValueIsDefault: true}),
    items: new FormControl([], {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    orderStatus: new FormControl('', {initialValueIsDefault: true})
  });

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Create Order'));
    this.getOrderItems();
    this.createOrderFormGroup.controls.items.valueChanges.subscribe(items => {
      this.itemsLength = items.length;
      this.listOfSelectedOrderItems = items;
    })
  }

  getOrderItems() {
    this.orderService.getOrderItems().pipe(untilDestroyed(this)).subscribe(orderItems => this.orderItems = orderItems);
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
    // @ts-ignore
    this.createOrderFormGroup.get('items')?.setValue(list);
  }

  confirmationValidator = (control: UntypedFormControl): {[s: string]: boolean} => {
    if (!control.value) {
      return {required: true};
    }
    return {};
  };

  orderItemSelectChange(orderItems: Array<OrderItemType>) {
    this.setOfCheckedId = new Set<number>();
    this.setOfCheckedId = new Set(orderItems.map(item => item.id));
  }

  deleteSelectedOrderItem(orderItem: OrderItemType) {
    const index = this.listOfSelectedOrderItems.findIndex(item => item.id === orderItem.id);
    this.listOfSelectedOrderItems.splice(index, 1);
    this.setOfCheckedId.delete(orderItem.id);
    // @ts-ignore
    this.createOrderFormGroup.controls.items.patchValue(this.listOfSelectedOrderItems);

  }
}
