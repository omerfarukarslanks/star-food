import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedOrderComponent } from './accepted-order.component';
import { RouterModule, Routes } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { OrderService } from "@star-food/service";
import { AcceptedOrderResolver } from "./resolver/accepted-order.resolver";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";

export const routes: Routes = [
  {
    path: '',
    component: AcceptedOrderComponent,
    resolve: {orders: AcceptedOrderResolver}
  }
]

@NgModule({
  declarations: [AcceptedOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzTagModule
  ],
  providers: [OrderService, AcceptedOrderResolver]
})
export class AcceptedOrderModule {}
