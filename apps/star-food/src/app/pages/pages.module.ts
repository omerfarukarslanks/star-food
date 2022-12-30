import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from "@angular/router";
import { PagesRoutes } from "./page-routes";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { SidebarModule } from '@star-food/sidebar';
import { HeaderModule } from '@star-food/header';
import { DrawerService } from '@star-food/service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule,
    RouterModule.forChild(PagesRoutes), NzLayoutModule, SidebarModule, HeaderModule
  ],
  providers: [DrawerService, NzDrawerService]
})
export class PagesModule {
}
