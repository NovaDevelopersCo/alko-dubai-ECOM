// third-party
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
// utils
import axiosServices from '@/utils/axios'

// types
import { AppDispatch } from '@/lib/store'
import { DefaultRootStateProps, InputFetch } from '@/type/interface'

const initialState: DefaultRootStateProps['items'] = {
  error: null,
  success: null,
  posts: {
    items: [],
    totalPages: 0,
  },
  isLoading: false,
}

// export function fetchItems() {
//   return async (dispatch: AppDispatch) => {
//     dispatch(slice.actions.startLoading())

//     try {
//       const response = await axiosServices.get('api/items')
//       dispatch(slice.actions.fetchItemsSuccess(response.data))
//     } catch (error) {
//       dispatch(slice.actions.hasError(error))
//     } finally {
//       dispatch(slice.actions.finishLoading())
//     }
//   }
// }

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (inputFetch: InputFetch = { price: 'asc', popularity: true, news: true, max_price: 12000, min_price: 0 }) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        // Логика для состояния "pending"
        state.isLoading = true
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        // Логика для успешного завершения
        state.isLoading = false
        state.posts.items = action.payload
        state.error = null
      })
      .addCase(fetchItems.rejected, (state) => {
        // Логика для состояния "rejected"
        state.isLoading = false
        state.error = 'Failed to fetch items'
      })
  },
})

export const selectItems = createSelector(
  (state) => state.items,
  (items) => items.posts.items
)
export default itemsSlice.reducer