import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelReadyComponent } from './parcel-ready.component';
import { OrderDescriptionModule } from "@star-food/ui";
import { RouterModule, Routes } from "@angular/router";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NotificationModule, OrderService } from "@star-food/service";
import { ParcelReadyResolver } from "./resolver/parcel-ready.resolver";

export const routes: Routes = [
  {
    path: '',
    component: ParcelReadyComponent,
    resolve: {orders: ParcelReadyResolver}
  }
]

@NgModule({
  declarations: [ParcelReadyComponent],
  imports: [CommonModule, NzDescriptionsModule, RouterModule.forChild(routes), NzTagModule, NzButtonModule, NzIconModule, OrderDescriptionModule, NotificationModule],
  providers: [OrderService, ParcelReadyResolver]
})
export class ParcelReadyModule {}
