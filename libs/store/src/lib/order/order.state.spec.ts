import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from "@ngxs/store";
import { OrderState, SetCreateOrderAction, SetCreateOrderValidAction } from "@star-food/store";
import { CreateOrderModel, OrderStatusEnum, TransferTypeEnum } from "@star-food/model";

describe('Order State', () => {
  let store: Store;
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
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([OrderState])]
    });

    store = TestBed.inject(Store);
  });

  it('it create order validation true', () => {
    store.dispatch(new SetCreateOrderValidAction(true));
    const valid = store.selectSnapshot(OrderState.checkFormValid);
    expect(valid).toBe(true);
  });

  it('it create order validation false', () => {
    store.dispatch(new SetCreateOrderValidAction(false));
    const valid = store.selectSnapshot(OrderState.checkFormValid);
    expect(valid).toBe(false);
  });

  it('it create order', () => {
    store.dispatch(new SetCreateOrderAction(dummyCreateOrder));
    const order = store.selectSnapshot(OrderState.getCreateOrder);
    expect(order).toBe(dummyCreateOrder);
  });

  it('it get order items', () => {
    store.dispatch(new SetCreateOrderAction(dummyCreateOrder));
    const items = store.selectSnapshot(OrderState.getCreateOrderItems);
    expect(items).toBe(dummyCreateOrder.items);
  });

});
