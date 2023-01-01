import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CreateOrderFormModule } from '@star-food/ui';
import { NotificationModule } from '@star-food/service';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';

export const routes: Routes = [
  {
    path: '',
    component: CreateOrderComponent,
  },
];

@NgModule({
  declarations: [CreateOrderComponent, DeliveryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule,
    NzDescriptionsModule,
    NzTableModule,
    NzToolTipModule,
    FormsModule,
    CreateOrderFormModule,
    NotificationModule,
  ],
  providers: [],
})
export class CreateOrderModule {}
