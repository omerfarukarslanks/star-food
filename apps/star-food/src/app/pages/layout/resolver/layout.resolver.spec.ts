import { TestBed } from '@angular/core/testing';

import { LayoutResolver } from './layout.resolver';
import { NgxsModule } from "@ngxs/store";
import { SidebarState } from "@star-food/store";
import { OrderService } from "@star-food/service";
import { OrderStatusEnum } from "@star-food/model";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LayouttResolver', () => {
  let resolver: LayoutResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([SidebarState])],
      providers: [OrderService, LayoutResolver]
    });
    resolver = TestBed.inject(LayoutResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('sholud be resolver', () => {
    resolver.resolve();
  })
});
