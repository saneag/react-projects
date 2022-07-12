import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useRoutes } from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'

function App() {
  const theme = useSelector(state => state.changeTheme.theme)

  const routes = useRoutes(false)

  return (
    <div className='App' id={theme}>
      <div className='container'>
        <Router>
          <Header />
          {routes}
        </Router>
        <Footer />
      </div>
    </div>
  )
}

export default App