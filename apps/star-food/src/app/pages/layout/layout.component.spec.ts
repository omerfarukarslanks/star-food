import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { NgxsModule } from "@ngxs/store";
import { SidebarState } from "@star-food/store";
import { DrawerService, OrderService } from "@star-food/service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { HeaderModule, SidebarModule } from "@star-food/ui";
import { NzDrawerService } from "ng-zorro-antd/drawer";
import { RouterTestingModule } from "@angular/router/testing";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [NgxsModule.forRoot([SidebarState]), HttpClientTestingModule, NzLayoutModule, SidebarModule, HeaderModule, RouterTestingModule],
      providers: [OrderService, DrawerService, NzDrawerService]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be collapse change true', () => {
    component.collapseChange(true)
  })

  it('should be collapse change false', () => {
    component.collapseChange(false)
  })
});
