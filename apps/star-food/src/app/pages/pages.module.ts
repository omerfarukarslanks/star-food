import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from "@angular/router";
import { PagesRoutes } from "./page-routes";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { DrawerService, OrderService } from '@star-food/service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { LayoutResolver } from "./layout/resolver/layout.resolver";
import { HeaderModule, SidebarModule } from "@star-food/ui";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule,
    RouterModule.forChild(PagesRoutes), NzLayoutModule, SidebarModule, HeaderModule],
  providers: [DrawerService, NzDrawerService, LayoutResolver, OrderService]
})
export class PagesModule {
}
