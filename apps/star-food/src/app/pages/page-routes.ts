import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutResolver } from "./layout/resolver/layout.resolver";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'order'
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
        resolve: {sidebar: LayoutResolver}
      }
    ]
  },
]
