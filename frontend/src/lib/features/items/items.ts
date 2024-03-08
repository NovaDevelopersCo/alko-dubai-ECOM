// third-party
import { createSlice } from '@reduxjs/toolkit'
// utils
import axiosServices from '@/utils/axios'

// types
import { AppDispatch } from '@/lib/store'
import { DefaultRootStateProps } from '@/type/interface'

const initialState: DefaultRootStateProps['items'] = {
  error: null,
  success: null,
  posts: {
    items: [],
    totalPages: 0,
  },
  isLoading: false,
}

export function fetchItems() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading())

    try {
      const response = await axiosServices.get('api/items')
      dispatch(slice.actions.fetchItemsSuccess(response.data))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    } finally {
      dispatch(slice.actions.finishLoading())
    }
  }
}

const slice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    // TO INITIAL STATE
    hasInitialState(state) {
      state.error = null
      state.success = null
      state.isLoading = false
    },

    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload
    },

    startLoading(state) {
      state.isLoading = true
    },

    finishLoading(state) {
      state.isLoading = false
    },
    // GET ALL TUTORIALS
    fetchItemsSuccess(state, action) {
      state.posts = action.payload // Изменено
      state.success = null
    },
  },
})
export const {
  hasInitialState,
  hasError,
  startLoading,
  finishLoading,
  fetchItemsSuccess,
} = slice.actions

export default slice.reducer