import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import LinksPage from './pages/LinksPage'
import Error from './pages/Error'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" element={<LinksPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path='*' element={<CreatePage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}