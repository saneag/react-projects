import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showModal: false,
    selectedImg: null
}

const showModalCarSlice = createSlice({
    name: 'showModalCar',
    initialState,
    reducers: {
        setShowModal(state, action) {
            state.showModal = action.payload
        },
        setSelectedImg(state, action) {
            state.selectedImg = action.payload
        }
    }
})

export const { setShowModal, setSelectedImg } = showModalCarSlice.actions

export default showModalCarSlice.reducer