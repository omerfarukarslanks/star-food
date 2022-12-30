import { OrderItemType } from './order-item.type';
import { TransferTypeEnum } from '../../enum';
import { OrderStatusEnum } from '../../enum';

export type CreateOrderType = {
  id: string;
  orderNumber: string;
  orderDate: string;
  name: string;
  phoneNumber: string;
  transferType: TransferTypeEnum;
  message: string;
  items: Array<OrderItemType>;
  totalPrice: number;
  orderStatus: OrderStatusEnum;
  cod: boolean;
}
