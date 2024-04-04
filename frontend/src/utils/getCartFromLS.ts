import Cookies from 'js-cookie';
import { calcTotalPrice, calcTotalSale } from './calcTotalPrice';

export const  getCartFromLS  = () => {
    if (typeof window !== 'undefined') {
        const data = Cookies.get('cart');
        const items = data ? JSON.parse(data) : [];
        const totalPrice = calcTotalPrice(items);
        const totalSale = calcTotalSale(items);
        return { items, totalPrice, totalSale };
    } else {
        // Возвращаем значения по умолчанию, если cookies недоступны
        return { items: [], totalPrice: 0, totalSale: 0 };
    }
};