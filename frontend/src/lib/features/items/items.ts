// third-party
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
// utils
import axiosServices from '@/utils/axios'

// types
import { DefaultRootStateProps, InputFetch } from '@/type/interface'
import { AppDispatch, RootState } from '@/lib/store'

const initialState: DefaultRootStateProps['items'] = {
    error: null,
    success: null,
    posts: {
        items: [],
        totalPages: 0,
    },
    item: null,
    isLoading: false,
}

export function fetchItemById(id: string) {
    return async (dispatch: AppDispatch) => {
        dispatch(itemsSlice.actions.startLoading())

        try {
            const response = await axiosServices.get(`/api/items/${id}`)
            dispatch(itemsSlice.actions.fetchItemSuccess(response.data))
        } catch (error) {
            dispatch(itemsSlice.actions.hasError(error))
        } finally {
            dispatch(itemsSlice.actions.finishLoading())
        }
    }
}

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (
        inputFetch: InputFetch = {
            price: 'asc',
            popularity: false,
            news: false,
            max_price: 12000,
            min_price: 0,
            currentPage: 0,
            limit: 100,
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

const itemsSlice = createSlice({
    name: 'item',
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
            state.item = action.payload
            state.success = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts.items = action.payload
                state.error = null
            })
            .addCase(fetchItems.rejected, (state) => {
                state.isLoading = false
                state.error = 'Failed to fetch items'
            })
    },
})

export const selectItems = createSelector(
    (state) => state.items,
    (items) => items.posts.items,
)
export const { hasError, startLoading, finishLoading, fetchItemSuccess } =
    itemsSlice.actions

export const selectItem = (state: RootState) => state.items.item
export default itemsSlice.reducer
