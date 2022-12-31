import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveredComponent } from './delivered.component';
import { OrderDescriptionModule } from "@star-food/ui";
import { RouterModule, Routes } from "@angular/router";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NotificationModule, OrderService } from "@star-food/service";
import { DeliveredResolver } from "./resolver/delivered.resolver";

export const routes: Routes = [
  {
    path: '',
    component: DeliveredComponent,
    resolve: {orders: DeliveredResolver}
  }
]

@NgModule({
  declarations: [DeliveredComponent],
  imports: [CommonModule, NzDescriptionsModule, RouterModule.forChild(routes), NzTagModule, NzButtonModule, NzIconModule, OrderDescriptionModule, NotificationModule],
  providers: [OrderService, DeliveredResolver]
})
export class DeliveredModule {}
