import { TestBed } from '@angular/core/testing';

import { OrderService } from "@star-food/service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { NgxsModule } from "@ngxs/store";
import { OrderState } from "@star-food/store";
import { CreateOrderModel, OrderStatusEnum, TransferTypeEnum } from "@star-food/model";
import { CookingResolver } from "./cooking.resolver";

describe('CookingOrderResolver', () => {
  let resolver: CookingResolver;
  const dummyOrder: CreateOrderModel = {
    id: 1,
    orderNumber: "141231",
    orderDate: "1/1/2023, 12:20:28 AM",
    name: "Ömer Faruk Arslan",
    phoneNumber: "+90 5312894363",
    transferType: TransferTypeEnum.DELIVERY,
    message: "Please send salad and green chantni with 2 paper dish.",
    totalPrice: 78,
    cod: true,
    orderStatus: OrderStatusEnum.ACCEPTED,
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

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([OrderState])],
      providers: [CookingResolver, OrderService, ]
    });
    resolver = TestBed.inject(CookingResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('sholud be get orders', () => {
    const status = OrderStatusEnum.COOKING;
    resolver.resolve().subscribe(data => {
      expect(data).toEqual(dummyOrder);
    })

    const request = httpTestingController.expectOne(`http://localhost:3000/orders?orderStatus=${status}&_sort=orderDate&_order=desc`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyOrder);
  })
});
