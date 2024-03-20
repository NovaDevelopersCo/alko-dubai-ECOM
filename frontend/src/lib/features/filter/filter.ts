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
    currentPage: 0,
    limit: 100,
    category: ''
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
        setCurrentPage(
            state,
            action: PayloadAction<InputFetch['currentPage']>,
        ) {
            state.currentPage = action.payload
        },
        setCategory(
            state,
            action: PayloadAction<InputFetch['category']>,
        ) {
            state.category = action.payload
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
    setSale,
} = filterSlice.actions

export default filterSlice.reducer
