import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'

export const ThemeContext = React.createContext(null)

function App() {

  const [theme, setTheme] = React.useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const routes = useRoutes(false)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <div className='container'>
          <Router>
            <Header toggleTheme={toggleTheme} />
            {routes}
          </Router>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App