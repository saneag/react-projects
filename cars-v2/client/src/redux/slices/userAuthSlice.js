import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

// const initialState = {
//     email: '',
//     name: '',
//     password: '',
//     repeatPassword: '',
//     isLogged: false,
//     stayLogged: false,
//     message: ''
// }

// const userAuthSlice = createSlice({
//     name: 'userAuth',
//     initialState,
//     reducers: {
//         setEmail: (state, action) => {
//             state.email = action.payload
//         },
//         setName(state, action) {
//             state.name = action.payload
//         },
//         setPassword(state, action) {
//             state.password = action.payload
//         },
//         setRepeatPassword(state, action) {
//             state.repeatPassword = action.payload
//         },
//         setIsLogged(state, action) {
//             state.isLogged = action.payload
//         },
//         setStayLogged(state, action) {
//             state.stayLogged = action.payload
//         },
//         setMessage(state, action) {
//             state.message = action.payload
//         },
//     }
// })

// export const { setEmail, setName, setPassword, setRepeatPassword, setIsLogged, setStayLogged, setMessage } = userAuthSlice.actions

// export default userAuthSlice.reducer

export const fetchUserData = createAsyncThunk('auth/fetUserData', async (params) => {
    const { data } = await axios.post('/auth/login', params)
    return data
})

const initialState = {
    data: null,
    status: 'loading'
}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.status = 'success'
            state.data = action.payload
        },
        [fetchUserData.rejected]: (state, action) => {
            state.status = 'error'
            state.data = null
        }
    }
})

export const userReducer = userAuthSlice.reducer
