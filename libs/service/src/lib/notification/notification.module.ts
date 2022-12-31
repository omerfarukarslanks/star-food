import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from "./notification.service";
import { NzNotificationService } from "ng-zorro-antd/notification";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NotificationService, NzNotificationService]
})
export class NotificationModule { }
