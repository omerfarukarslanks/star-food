import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetPageTitle } from "@star-food/store";
import { FormArray, FormBuilder, FormControl, UntypedFormControl, Validators } from "@angular/forms";
import { TransferTypeEnum } from "@star-food/model";

@Component({
  selector: 'star-food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit{
  store = inject(Store);
  formBuilder = inject(FormBuilder);
  TransferTypeEnum = TransferTypeEnum;

  createOrderFormGroup = this.formBuilder.group({
    orderNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    orderDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    phoneNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    transferType: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    message: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    items: new FormArray([]),
    orderStatus: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required})
  });

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Create Order'));
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
  //  Promise.resolve().then(() => this.createOrderFormGroup.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    return {};
  };
}
