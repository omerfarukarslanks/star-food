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
    path: 'new-order',
    loadChildren: () => import('./new-order/new-order.module').then(m => m.NewOrderModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create-order/create-order.module').then(m => m.CreateOrderModule)
  },
  {
    path: 'cooking',
    loadChildren: () => import('./cooking/cooking.module').then(m => m.CookingModule)
  },
  {
    path: 'parcel-ready',
    loadChildren: () => import('./parcel-ready/parcel-ready.module').then(m => m.ParcelReadyModule)
  },
  {
    path: 'delivered',
    loadChildren: () => import('./delivered/delivered.module').then(m => m.DeliveredModule)
  },
  {
    path: 'completed',
    loadChildren: () => import('./completed/completed.module').then(m => m.CompletedModule)
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
