import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './Routes'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/App.scss'

function App() {
  const routes = useRoutes(false)
  return (
    <>
      <Loading />
      <Router>
        <Header />
        {routes}
      </Router>
    </>
  )
}

export default App