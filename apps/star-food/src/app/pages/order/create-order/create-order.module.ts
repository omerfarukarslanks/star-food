import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order.component';
import { RouterModule, Routes } from "@angular/router";

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
    RouterModule.forChild(routes)
  ],
})
export class CreateOrderModule {
}
