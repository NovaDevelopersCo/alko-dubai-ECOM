import { configureStore } from '@reduxjs/toolkit'

// project import
import itemsReducer from './features/items/items'
import categories from './features/categories/categories'
import filterReducer from "./features/filter/filter"

export const makeStore = () => {
  return configureStore({
    reducer: {
      items:itemsReducer,
      filters:filterReducer,
      categories
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
