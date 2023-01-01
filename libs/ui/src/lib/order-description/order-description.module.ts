import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDescriptionComponent } from './order-description.component';
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations: [OrderDescriptionComponent],
  imports: [CommonModule, NzDescriptionsModule, NzTagModule, NzButtonModule, NzIconModule],
  exports: [
    OrderDescriptionComponent
  ]
})
export class OrderDescriptionModule {}
