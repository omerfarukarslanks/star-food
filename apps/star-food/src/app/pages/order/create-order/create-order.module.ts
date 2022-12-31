import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order.component';
import { RouterModule, Routes } from "@angular/router";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzFormModule } from "ng-zorro-antd/form";
import { ReactiveFormsModule } from "@angular/forms";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTableModule } from "ng-zorro-antd/table";
import { CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { NzListModule } from "ng-zorro-antd/list";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { PhoneMaskModule } from "@star-food/directive";

export const routes: Routes = [
  {
    path: '',
    component: CreateOrderComponent
  }
]

@NgModule({
  declarations: [CreateOrderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzDividerModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzSelectModule,
        NzButtonModule,
        NzRadioModule,
        NzIconModule,
        NzDescriptionsModule,
        NzTableModule,
        CdkVirtualScrollViewport,
        NzListModule,
        NzToolTipModule,
        CdkFixedSizeVirtualScroll,
        PhoneMaskModule
    ],
})
export class CreateOrderModule {
}
