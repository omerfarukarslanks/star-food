import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDetailsComponent } from './delivery-details.component';
import { NgxsModule } from "@ngxs/store";
import { OrderState } from "@star-food/store";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";

describe('DeliveryDetailsComponent', () => {
  let component: DeliveryDetailsComponent;
  let fixture: ComponentFixture<DeliveryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryDetailsComponent],
      imports: [NgxsModule.forRoot([OrderState]), NzDescriptionsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
