import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Buy_Sell from './pages/Buy_Sell'
import Grow from './pages/Grow'
import Markets from './pages/Markets'
import Business from './pages/Business'
import Support from './pages/Support'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Home from './pages/Home'

import './styles/App.scss'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='buy_sell' element={<Buy_Sell />} />
                    <Route path='grow' element={<Grow />} />
                    <Route path='markets' element={<Markets />} />
                    <Route path='business' element={<Business />} />
                    <Route path='support' element={<Support />} />
                    <Route path='signin' element={<SignIn />} />
                    <Route path='sign_up' element={<SignUp />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}

export default App