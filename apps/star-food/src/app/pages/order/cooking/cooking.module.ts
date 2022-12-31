import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingComponent } from './cooking.component';
import { OrderDescriptionModule } from "@star-food/ui";
import { RouterModule, Routes } from "@angular/router";
import { CookingResolver } from "./resolver/cooking.resolver";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { OrderService } from "@star-food/service";

export const routes: Routes = [
  {
    path: '',
    component: CookingComponent,
    resolve: {orders: CookingResolver}
  }
]

@NgModule({
  declarations: [CookingComponent],
  imports: [CommonModule, NzDescriptionsModule, RouterModule.forChild(routes), NzTagModule, NzButtonModule, NzIconModule, OrderDescriptionModule],
  providers: [OrderService, CookingResolver]
})
export class CookingModule {}
