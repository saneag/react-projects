import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './Routes'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/App.scss'

export const ThemeContext = React.createContext(null)
export const ShowModalCar = React.createContext(null)

function App() {

  const [theme, setTheme] = React.useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const [selectedImg, setSelectedImg] = React.useState(null)

  const routes = useRoutes(false)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ShowModalCar.Provider value={{ selectedImg, setSelectedImg }}>
        <div className='App' id={theme}>
          <div className='container'>
            <Router>
              <Header toggleTheme={toggleTheme} />
              {routes}
            </Router>
          </div>
        </div>
      </ShowModalCar.Provider>
    </ThemeContext.Provider>
  )
}

export default App