export class PriceOperationsUtil {
  static totalPrice(array: Array<number>) {
    return array.reduce((total, num) => total + num, 0);
  }
}
