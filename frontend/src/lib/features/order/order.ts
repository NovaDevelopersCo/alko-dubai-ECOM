import { createSlice } from '@reduxjs/toolkit'
import axiosServices from '@/utils/axios'
import { AppDispatch, RootState } from '@/lib/store'
import { order, orderStateProps } from '@/type/interfaceOrder'

const initialState: orderStateProps = {
    error: null,
    success: null,
    order: {
        items: [],
        name: '',
        email: '',
        phone: '',
        details: '',
        price: 0,
        address: '',
    },
    isLoading: false,
}

export const fetchOrder = (id: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(OrderSlice.actions.startLoading())

        try {
            const response = await axiosServices.get(`api/order/${id}`)
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
