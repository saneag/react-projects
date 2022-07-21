import { configureStore } from '@reduxjs/toolkit'
import sort from './slices/sortSlice'
import changeTheme from './slices/changeThemeSlice'
import showModalCar from './slices/showModalCarSlice'
// import userAuth from './slices/userAuthSlice'

import { userReducer } from './slices/userAuthSlice'

export const store = configureStore({
    reducer: {
        sort,
        changeTheme,
        showModalCar,
        auth: userReducer,
    },
})