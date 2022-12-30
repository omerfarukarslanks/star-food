import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  imports: [CommonModule, NzIconModule],
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}
