import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sortBy: 'marca',
    sortOrder: true
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy(state, action) {
            state.sortBy = action.payload
        },
        setSortOrder(state, action) {
            state.sortOrder = action.payload
        }
    }
})

export const { setSortBy, setSortOrder } = sortSlice.actions

export default sortSlice.reducer