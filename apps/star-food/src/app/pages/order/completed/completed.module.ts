import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './completed.component';
import { OrderDescriptionModule } from "@star-food/ui";
import { RouterModule, Routes } from "@angular/router";
import { ParcelReadyComponent } from "../parcel-ready/parcel-ready.component";
import { ParcelReadyResolver } from "../parcel-ready/resolver/parcel-ready.resolver";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NotificationModule, OrderService } from "@star-food/service";
import { CompletedResolver } from "./resolver/completed.resolver";

export const routes: Routes = [
  {
    path: '',
    component: CompletedComponent,
    resolve: {orders: CompletedResolver}
  }
]

@NgModule({
  declarations: [CompletedComponent],
  imports: [CommonModule, NzDescriptionsModule, RouterModule.forChild(routes), NzTagModule, NzButtonModule, NzIconModule, OrderDescriptionModule, NotificationModule],
  providers: [OrderService, CompletedResolver]
})
export class CompletedModule {
}
