import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
        price: 0,
        address: '',
    },
    isLoading: false,
}

export const fetchOrder = createAsyncThunk(
    'order/fetchOrder',
    async (dispatch: AppDispatch) => {
        dispatch(OrderSlice.actions.startLoading())

        try {
            const response = await axiosServices.get('api/order')
            dispatch(
                OrderSlice.actions.fetchOrderSuccess(response.data as order),
            )
        } catch (error) {
            dispatch(OrderSlice.actions.hasError(error))
        } finally {
            dispatch(OrderSlice.actions.finishLoading())
        }
    },
)

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.order = action.payload as unknown as order
                state.error = null
            })
            .addCase(fetchOrder.rejected, (state) => {
                state.isLoading = false
                state.error = 'Failed to fetch order'
            })
    },
})

export const selectItem = (state: RootState) => state.order as orderStateProps

export default OrderSlice.reducer
