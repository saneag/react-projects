import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import About from './pages/About'
import AddCar from './pages/AddCar'
import EditCar from './pages/EditCar'
import Contact from './pages/Contact'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/add_car" element={<AddCar />} />
                <Route path="/edit_car" element={<EditCar />} />
                <Route path='*' element={<Error />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}