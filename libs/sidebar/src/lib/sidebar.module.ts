import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterLink } from "@angular/router";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
    imports: [CommonModule, RouterLink, NzMenuModule, NzIconModule],
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {}
