import { calcTotalPrice, calcTotalSale } from './calcTotalPrice'

export const getCartFromLS = () => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('cart')
        const items = data ? JSON.parse(data) : []
        const totalPrice = calcTotalPrice(items)
        const totalSale = calcTotalSale(items)
        return { items, totalPrice, totalSale }
    } else {
        // Возвращаем значения по умолчанию, если localStorage недоступен
        return { items: [], totalPrice: 0, totalSale: 0 }
    }
}
