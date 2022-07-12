import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
    isLogged: false,
    stayLogged: false,
    message: ''
}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setName(state, action) {
            state.name = action.payload
        },
        setPassword(state, action) {
            state.password = action.payload
        },
        setRepeatPassword(state, action) {
            state.repeatPassword = action.payload
        },
        setIsLogged(state, action) {
            state.isLogged = action.payload
        },
        setStayLogged(state, action) {
            state.stayLogged = action.payload
        },
        setMessage(state, action) {
            state.message = action.payload
        },
    }
})

export const { setEmail, setName, setPassword, setRepeatPassword, setIsLogged, setStayLogged, setMessage } = userAuthSlice.actions

export default userAuthSlice.reducer