import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import './styles/App.scss'

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                </Routes>
            </Router>
        </div>
    )
}

export default App