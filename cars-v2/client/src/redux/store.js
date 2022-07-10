import { configureStore } from '@reduxjs/toolkit'
import sort from './slices/sortSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
    reducer: {
        sort,
    },
})