import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: [],
    carsLimit: 12,
    showReadMore: true,
    loading: true,
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload
        },
        setCarsLimit(state, action) {
            state.carsLimit = action.payload
        },
        setShowReadMore(state, action) {
            state.showReadMore = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
    }
})

export const { setCars, setCarsLimit, setShowReadMore, setLoading } = carSlice.actions

export default carSlice.reducer
