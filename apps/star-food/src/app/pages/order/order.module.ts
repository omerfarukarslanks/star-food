import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accepted'
  },
  {
    path: 'accepted',
    loadChildren: () => import('./accepted-order/accepted-order.module').then(m => m.AcceptedOrderModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create-order/create-order.module').then(m => m.CreateOrderModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
