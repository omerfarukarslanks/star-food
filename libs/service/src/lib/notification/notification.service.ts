import { inject, Injectable } from '@angular/core';
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable()
export class NotificationService {
  notificationService = inject(NzNotificationService);

  success(title: string, content: string, duration = 2000) {
    this.notificationService.success(title, content, {nzDuration: duration});
  }

  error(title: string, content: string, duration: 2000) {
    this.notificationService.error(title, content, {nzDuration: duration});
  }
}
