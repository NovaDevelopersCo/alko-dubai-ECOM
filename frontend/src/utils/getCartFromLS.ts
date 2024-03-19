import { calcTotalPrice, calcTotalSale } from './calcTotalPrice'

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)
    const totalSale = calcTotalSale(items)
    return { items, totalPrice, totalSale }
}
