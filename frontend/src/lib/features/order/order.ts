import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axiosServices from '@/utils/axios'
import { InputFetch } from '@/type/interfaceFilter'
import { RootState } from '@/lib/store'
import { orderStateProps } from '@/type/interfaceOrder'

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
    async (
        inputFetch: InputFetch = {
            price: 'asc',
            popularity: false,
            news: false,
            sale: false,
            max_price: 12000,
            min_price: 0,
            limit: 100,
            category: '',
            search: '',
        },
    ) => {
        try {
            // Ваш код для запроса данных, используя inputFetch
            const response = await axiosServices.get('api/items', {
                params: inputFetch,
            })

            // Возвращаем данные
            return response.data
        } catch (error) {
            return error || 'Ошибка получения товаров'
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
        fetchItemSuccess(state, action) {
            state.order = action.payload
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
                state.order = action.payload
                state.error = null
            })
            .addCase(fetchOrder.rejected, (state) => {
                state.isLoading = false
                state.error = 'Failed to fetch order'
            })
    },
})

export const selectItems = createSelector(
    (state) => state,
    (order) => order,
)
export const { hasError, startLoading, finishLoading, fetchItemSuccess } =
    OrderSlice.actions
export const selectItem = (state: RootState) => state.items.item
export default OrderSlice.reducer
