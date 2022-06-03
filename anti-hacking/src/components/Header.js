import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className='nav_logo'>HackProtect</Link>
          <div className='nav_links'>
            <Link to="/" className="active_page">Home</Link>
            <Link to="/results">Results</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header