import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from "ng-zorro-antd/icon";
import { HeaderComponent } from "./header.component";

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
