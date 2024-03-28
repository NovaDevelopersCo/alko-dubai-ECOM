import { createSlice } from '@reduxjs/toolkit'
import axiosServices from '@/utils/axios'
import { AppDispatch, RootState } from '@/lib/store'
import { order, orderStateProps } from '@/type/interfaceOrder'

const initialState: orderStateProps = {
    error: null,
    success: null,
    order: {
        id: 0,
        items: [],
        name: '',
        email: '',
        phone: '',
        details: '',
        payment: '',
        price: 0,
        address: '',
    },
    isLoading: false,
}

export const fetchOrder = (order: order) => {
    console.log(order)

    return async (dispatch: AppDispatch) => {
        dispatch(OrderSlice.actions.startLoading())

        try {
            const response = await axiosServices.post(`api/order`, {
                ...order,
            })
            const items: any = response.data.items.map((item: any) => JSON.parse(item));
            response.data.items = items;
            dispatch(
                OrderSlice.actions.fetchOrderSuccess(response.data as order),
            )
        } catch (error) {
            dispatch(OrderSlice.actions.hasError(error))
        } finally {
            dispatch(OrderSlice.actions.finishLoading())
        }
    }
}
const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },

        startLoading(state) {
            state.isLoading = true
        },

        finishLoading(state) {
            state.isLoading = false
        },
        fetchOrderSuccess(state, action) {
            state.order = action.payload as order
            state.success = null
        },
    },
})

export const selectOrder = (state: RootState) => state.order as orderStateProps

export default OrderSlice.reducer
