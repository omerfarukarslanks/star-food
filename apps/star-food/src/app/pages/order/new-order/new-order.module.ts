import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order.component';
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { RouterModule, Routes } from "@angular/router";
import { NewOrderResolver } from "./resolver/new-order.resolver";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { OrderService } from "@star-food/service";

export const routes: Routes = [
  {
    path: '',
    component: NewOrderComponent,
    resolve: {orders: NewOrderResolver}
  }
]

@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule, NzDescriptionsModule, RouterModule.forChild(routes), NzTagModule, NzButtonModule, NzIconModule],
  providers: [OrderService, NewOrderResolver]
})
export class NewOrderModule {
}
