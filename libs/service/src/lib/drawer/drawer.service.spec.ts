import { TestBed } from '@angular/core/testing';

import { DrawerService } from './drawer.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('DrawerService', () => {
  let service: DrawerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DrawerService]
    });
    service = TestBed.inject(DrawerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
