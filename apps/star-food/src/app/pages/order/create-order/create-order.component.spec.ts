import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule } from "@ngxs/store";
import { OrderState } from "@star-food/store";
import { RouterTestingModule } from "@angular/router/testing";
import { NotificationModule, OrderService } from "@star-food/service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateOrderModel, OrderStatusEnum, TransferTypeEnum, UpdateOrderModel } from "@star-food/model";
import { CreateOrderFormModule, OrderDescriptionModule } from "@star-food/ui";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CreateOrderComponent } from "./create-order.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DeliveryDetailsComponent } from "./delivery-details/delivery-details.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;
  let httpTestingController: HttpTestingController;
  let service: OrderService;
  const dummyOrder: UpdateOrderModel = {
    id: 1,
    orderNumber: "141231",
    orderDate: "1/1/2023, 12:20:28 AM",
    name: "Ömer Faruk Arslan",
    phoneNumber: "+90 5312894363",
    transferType: TransferTypeEnum.DELIVERY,
    message: "Please send salad and green chantni with 2 paper dish.",
    totalPrice: 78,
    cod: true,
    orderStatus: OrderStatusEnum.COMPLETED,
    items: [
      {
        id: 11,
        name: "Paneer Tikka Masala",
        price: 40,
        quantity: 5
      },
      {
        id: 12,
        name: "Tawa butter roti",
        price: 5,
        quantity: 4
      },
      {
        id: 13,
        name: "Papad",
        price: 9,
        quantity: 2
      }
    ]
  };
  const dummyUpdateOrder: CreateOrderModel = {
    id: 1,
    orderNumber: "141231",
    orderDate: "1/1/2023, 12:20:28 AM",
    name: "Ömer Faruk Arslan",
    phoneNumber: "+90 5312894363",
    transferType: TransferTypeEnum.DELIVERY,
    message: "Please send salad and green chantni with 2 paper dish.",
    totalPrice: 78,
    cod: true,
    orderStatus: OrderStatusEnum.NEW_ORDER,
    items: [
      {
        id: 11,
        name: "Paneer Tikka Masala",
        price: 40,
        quantity: 5
      },
      {
        id: 12,
        name: "Tawa butter roti",
        price: 5,
        quantity: 4
      },
      {
        id: 13,
        name: "Papad",
        price: 9,
        quantity: 2
      }
    ]
  }
  let route: ActivatedRoute;
  let router: Router;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrderComponent],
      imports: [NgxsModule.forRoot([OrderState]),ReactiveFormsModule, NoopAnimationsModule, RouterTestingModule, HttpClientTestingModule,
        NotificationModule, RouterTestingModule.withRoutes([]), CreateOrderFormModule,  NzDividerModule],
      providers: [OrderService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    router = TestBed.inject(Router)
    service = TestBed.inject(OrderService);
    route = TestBed.inject(ActivatedRoute)
    route.snapshot.data = {orders: [dummyOrder]};
    fixture = TestBed.createComponent(CreateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
