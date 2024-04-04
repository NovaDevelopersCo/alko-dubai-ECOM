import { CartItem } from '@/type/interfaceCart';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
export const calcTotalSale = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    // Проверяем, определено ли свойство oldPrice
    if (obj.oldPrice !== undefined) {
      // Если определено, добавляем его к сумме
      return obj.oldPrice * obj.count + sum;
    } else {
      // Если не определено, пропускаем этот объект
      return sum;
    }
  }, 0);
};