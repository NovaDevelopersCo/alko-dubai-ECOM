import { RootState } from '@/lib/store'
import { InputFetch } from '@/type/interfaceFilter'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InputFetch = {
    price: 'asc',
    popularity: false,
    news: false,
    sale: false,
    max_price: 12000,
    min_price: 0,
    limit: 100,
    category: '',
    search: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<InputFetch['price']>) => {
            state.price = action.payload
        },
        setPopularity: (
            state,
            action: PayloadAction<InputFetch['popularity']>,
        ) => {
            state.popularity = action.payload
        },
        setNews: (state, action: PayloadAction<InputFetch['news']>) => {
            state.news = action.payload
        },
        setSale: (state, action: PayloadAction<InputFetch['sale']>) => {
            state.sale = action.payload
        },
        setMaxPrice: (
            state,
            action: PayloadAction<InputFetch['max_price']>,
        ) => {
            state.max_price = action.payload
        },
        setMinPrice: (
            state,
            action: PayloadAction<InputFetch['min_price']>,
        ) => {
            state.min_price = action.payload
        },
        setLimit(
            state,
            action: PayloadAction<InputFetch['limit']>,
        ) {
            state.limit = action.payload
        },
        setCategory(
            state,
            action: PayloadAction<InputFetch['category']>,
        ) {
            state.category = action.payload
        },
        setSearch(
            state,
            action: PayloadAction<InputFetch['category']>,
        ) {
            state.search = action.payload
        }
    },
})

export const selectFilter = (state: RootState) => state.filters

export const {
    setPrice,
    setPopularity,
    setNews,
    setMaxPrice,
    setMinPrice,
    setLimit,
    setSale,
    setCategory,
    setSearch,
} = filterSlice.actions

export default filterSlice.reducer
