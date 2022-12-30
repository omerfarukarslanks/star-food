import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedOrderComponent } from './accepted-order.component';
import { RouterModule, Routes } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDividerModule } from "ng-zorro-antd/divider";

export const routes: Routes = [
  {
    path: '',
    component: AcceptedOrderComponent
  }
]

@NgModule({
  declarations: [AcceptedOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzIconModule,
    NzDividerModule
  ],
})
export class AcceptedOrderModule {}
