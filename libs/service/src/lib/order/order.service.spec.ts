import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { CreateOrderModel, OrderItemType, OrderStatusEnum, TransferTypeEnum } from "@star-food/model";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('OrderService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;
  const dummyOrderItems = [
    {
      "id": 111,
      "name": "Beef Stroganoff",
      "price": 29,
      "quantity": 1
    },
    {
      "id": 112,
      "name": "Reuben",
      "price": 18,
      "quantity": 1
    }
  ];
  const dummyCreateOrderReturn = {
    "id": 1,
    "orderNumber": "141231",
    "orderDate": "1/1/2023, 12:20:28 AM",
    "name": "Ömer Faruk Arslan",
    "phoneNumber": "+90 5312894363",
    "transferType": "DELIVERY",
    "message": "Please send salad and green chantni with 2 paper dish.",
    "totalPrice": 78,
    "cod": true,
    "orderStatus": "ACCEPTED",
    "items": [
      {
        "id": 11,
        "name": "Paneer Tikka Masala",
        "price": 40,
        "quantity": 5
      },
      {
        "id": 12,
        "name": "Tawa butter roti",
        "price": 5,
        "quantity": 4
      },
      {
        "id": 13,
        "name": "Papad",
        "price": 9,
        "quantity": 2
      }
    ]
  };
  const dummyCreateOrder: CreateOrderModel = {
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
    orderStatus: OrderStatusEnum.COOKING,
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    service = TestBed.inject(OrderService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return to orderItems', () => {
    let orderItems: Array<OrderItemType> | undefined;
    service.getOrderItems().subscribe(getOrderItems => {
      orderItems = getOrderItems;
      expect(orderItems).toEqual(dummyOrderItems);
    });
    const request = httpTestingController.expectOne(`http://localhost:3000/order-items`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyOrderItems);
  });

  it('should be create order', () => {
    service.createOrder(dummyCreateOrder).subscribe(order => {
      expect(order).toEqual(dummyCreateOrder)
    });
    const request = httpTestingController.expectOne(`http://localhost:3000/orders`);
    expect(request.request.method).toBe('POST');
    request.flush(dummyCreateOrderReturn);
  });

  it('should be get order by order status', () => {
    const status = OrderStatusEnum.ACCEPTED;
    service.getOrdersByOrderStatus(status).subscribe(order => {
      expect(order).toEqual(dummyCreateOrder);
    })
    const request = httpTestingController.expectOne(`http://localhost:3000/orders?orderStatus=${status}&_sort=orderDate&_order=desc`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCreateOrderReturn);
  })

  it('should be  order status update', () => {
    service.orderStatusUpdate(dummyCreateOrder).subscribe(order => {
      expect(order).toEqual(dummyUpdateOrder);
    })
    const request = httpTestingController.expectOne(`http://localhost:3000/orders/${dummyCreateOrder.id}`);
    expect(request.request.method).toBe('PUT');
    request.flush(dummyUpdateOrder);
  })

});
