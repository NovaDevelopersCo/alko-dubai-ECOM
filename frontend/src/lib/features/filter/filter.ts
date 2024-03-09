import { RootState } from '@/lib/store'
import { InputFetch } from '@/type/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InputFetch = {
  price: 'asc',
  popularity: true,
  news: true,
  max_price: 12000,
  min_price: 0,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<InputFetch['price']>) => {
      state.price = action.payload
    },
    setPopularity: (state, action: PayloadAction<InputFetch['popularity']>) => {
      state.popularity = action.payload
    },
    setNews: (state, action: PayloadAction<InputFetch['news']>) => {
      state.news = action.payload
    },
    setMaxPrice: (state, action: PayloadAction<InputFetch['max_price']>) => {
      state.max_price = action.payload
    },
    setMinPrice: (state, action: PayloadAction<InputFetch['min_price']>) => {
      state.min_price = action.payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filters

export const { setPrice, setPopularity, setNews, setMaxPrice, setMinPrice } =
  filterSlice.actions

export default filterSlice.reducer