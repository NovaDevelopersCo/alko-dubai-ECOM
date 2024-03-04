import { configureStore } from '@reduxjs/toolkit'

// project import
import item from './features/items/items'
import categories from './features/categories/categories'

export const makeStore = () => {
  return configureStore({
    reducer: {
      item,
      categories
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
