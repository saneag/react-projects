import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className='nav_logo'>HackProtect</Link>
          <div className='nav_links'>
            <NavLink to="/" className={({ isActive }) => (isActive) ? "active_page" : ""}>home</NavLink>
            <NavBarLink pageName="results" />
            <NavBarLink pageName="about" />
            <NavBarLink pageName="services" />
            <NavBarLink pageName="contact" />
          </div>
        </nav>
      </div>
    </header>
  )
}

function NavBarLink({ pageName }) {
  return (
    <NavLink to={`/${pageName}`} className={({ isActive }) => (isActive) ? "active_page" : ""}>{pageName}</NavLink>
  )
}

export default Header