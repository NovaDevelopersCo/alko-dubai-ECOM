import { createSlice } from '@reduxjs/toolkit'
import { getCartFromLS } from '@/utils/getCartFromLS'
import { calcTotalPrice, calcTotalSale } from '@/utils/calcTotalPrice'
import { CartItem } from '@/type/interfaceCart'
import { RootState } from '@/lib/store'
import Cookies from 'js-cookie';

const { items, totalPrice, totalSale } = getCartFromLS()

export const initialState = {
    totalPrice,
    items,
    totalSale,
}

export const saveCartToLocalStorage = (items: CartItem[]): void => {
    Cookies.set('cart', JSON.stringify(items), { expires: 7}); // Устанавливаем срок действия cookies на 1 год
};

export const setInitialCartItems = (items: CartItem[]) => {
    return {
        ...initialState,
        items: items,
    }
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const { id } = action.payload

            const existingItem = state.items.find(
                (item: CartItem) => item.id === id,
            )

            if (existingItem) {
                if (existingItem.count < 20) {
                    existingItem.count++
                }
            } else {
                if (state.items.length < 20) {
                    const newItem = {
                        ...action.payload,
                        count: 1,
                    }
                    state.items.push(newItem)
                }
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalSale = calcTotalSale(state.items)

            // Вызываем функцию сохранения корзины в localStorage
            saveCartToLocalStorage(state.items)
        },

        addItems(state, action) {
            const { id, count } = action.payload

            const existingItem = state.items.find(
                (item: CartItem) => item.id === id,
            )

            if (existingItem) {
                if (existingItem.count + count <= 20) {
                    existingItem.count += count
                } else {
                    existingItem.count = 20
                }
            } else {
                const totalItemCount = state.items.reduce(
                    (total: number, item: CartItem) => total + item.count,
                    0,
                )
                if (totalItemCount + count <= 20) {
                    const newItem = {
                        ...action.payload,
                        count: count,
                    }
                    state.items.push(newItem)
                } else {

                }
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalSale = calcTotalSale(state.items)

            // Вызываем функцию сохранения корзины в localStorage
            saveCartToLocalStorage(state.items)
        },

        minusItem(state, action) {
            const itemId = action.payload

            const itemToDecrement = state.items.find(
                (item: CartItem) => item.id === itemId,
            )

            if (itemToDecrement) {
                if (itemToDecrement.count > 0) {
                    itemToDecrement.count--

                    if (itemToDecrement.count === 0) {
                        state.items = state.items.filter(
                            (item: CartItem) => item.id !== itemId,
                        )
                    }
                }
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalSale = calcTotalSale(state.items)

            // Вызываем функцию сохранения корзины в localStorage
            saveCartToLocalStorage(state.items)
        },
        removeItem(state, action) {
            const itemIdToRemove = action.payload
            state.items = state.items.filter(
                (item: CartItem) => item.id !== itemIdToRemove,
            )
            state.totalPrice = calcTotalPrice(state.items)
            state.totalSale = calcTotalSale(state.items)

            // Вызываем функцию сохранения корзины в localStorage
            saveCartToLocalStorage(state.items)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            state.totalSale = 0
            saveCartToLocalStorage(state.items)
        },
    },
})

export const selectCart = (state: RootState) => state.cart

export const { addItem, removeItem, minusItem, clearItems, addItems } =
    CartSlice.actions

export default CartSlice.reducer
