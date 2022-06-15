import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './Routes'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/App.scss'

export const ThemeContext = React.createContext(null)

function App() {

  const [theme, setTheme] = React.useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const routes = useRoutes(false)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        {/* <Loading /> */}
        <div className='container'>
          <Router>
            <Header toggleTheme={toggleTheme} />
            {routes}
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App