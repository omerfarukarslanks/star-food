import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetPageTitle, SetSidebarItemsAction } from "@star-food/store";
import { FormBuilder, FormControl, UntypedFormControl, Validators } from "@angular/forms";
import { CreateOrderModel, OrderItemType, OrderStatusEnum, TransferTypeEnum } from "@star-food/model";
import { OrderService } from "@star-food/service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Router } from "@angular/router";
import { PriceOperationsUtil } from "@star-food/util";

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
  router = inject(Router);

  TransferTypeEnum = TransferTypeEnum;
  orderItems = new Array<OrderItemType>();
  listOfSelectedOrderItems = new Array<OrderItemType>();
  setOfCheckedId = new Set<number>();
  checked = false;

  totalPrice = 0;

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

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Create Order'));
    this.getOrderItems();
    this.createOrderFormGroup.controls.items.valueChanges.subscribe((items: Array<OrderItemType>) => {
      this.listOfSelectedOrderItems = items;
      this.totalPrice = PriceOperationsUtil.totalPrice(items.map(item => item.price));
      this.createOrderFormGroup.patchValue({totalPrice: this.totalPrice});
    });
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
    this.createOrderFormGroup.controls.items.patchValue(this.listOfSelectedOrderItems);

  }

  createOrder() {
    if (this.createOrderFormGroup.valid) {
      this.orderService.createOrder(this.createOrderFormGroup.value as CreateOrderModel).pipe(untilDestroyed(this)).subscribe(response => {
        this.store.dispatch(new SetSidebarItemsAction());
        this.router.navigate(['/ui/order/new-order']);
      });
    }
  }

  cancelOrder() {
    this.router.navigate(['/ui/order/accepted']);
  }
}
