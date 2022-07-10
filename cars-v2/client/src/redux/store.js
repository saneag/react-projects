import { configureStore } from '@reduxjs/toolkit'
import sort from './slices/sortSlice'
import changeTheme from './slices/changeThemeSlice'
import search from './slices/searchSlice'
import showModalCar from './slices/showModalCarSlice'

export const store = configureStore({
    reducer: {
        sort,
        changeTheme,
        search,
        showModalCar,
    },
})