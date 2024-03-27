import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice, calcTotalSale } from '@/utils/calcTotalPrice'
import { CartItem } from '@/type/interfaceCart'
import { RootState } from '@/lib/store'

export const initialState = {
    items: [],
    name: '',
    email: '',
    phone: '',
    details: '',
    price: 0,
    address: '',
}

const OrderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addOrder(state, action) {
            const { id, count } = action.payload
        },
    },
})

export const selectOrder = (state: RootState) => state.order

export const { addOrder } = OrderSlice.actions

export default OrderSlice.reducer
