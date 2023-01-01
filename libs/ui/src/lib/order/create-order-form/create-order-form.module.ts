import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderFormComponent } from './create-order-form.component';
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzListModule } from "ng-zorro-antd/list";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { PhoneMaskModule } from "@star-food/directive";

@NgModule({
  declarations: [CreateOrderFormComponent],
  imports: [CommonModule, NzFormModule, ReactiveFormsModule, NzRadioModule, NzSelectModule, NzTableModule, NzListModule, NzInputModule, FormsModule, NzIconModule, PhoneMaskModule],
  exports: [
    CreateOrderFormComponent
  ]
})
export class CreateOrderFormModule {}
