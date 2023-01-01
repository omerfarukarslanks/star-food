import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { NotificationModule } from "./notification.module";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserTestingModule } from "@angular/platform-browser/testing";

describe('NotificationService', () => {
  let service: NotificationService;
  const notificationId = 'notification--0';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotificationModule, NoopAnimationsModule, BrowserTestingModule]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be notification info', () => {
    const info = service.info('Info', 'Test Info');
    expect(info.messageId).toEqual(notificationId);
  });

  it('should be notification info', () => {
    const info = service.info('Info', 'Test Info');
    expect(info.messageId).toEqual(notificationId);
  });

  it('should be notification success', () => {
    const info = service.info('Success', 'Test Success');
    expect(info.messageId).toEqual(notificationId);
  });

  it('should be notification info', () => {
    const info = service.info('Error', 'Test Error');
    expect(info.messageId).toEqual(notificationId);
  });
});
