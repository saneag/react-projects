import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import coinFlip from '../assets/img/logo.png'

function Header() {
    const linksName = ['buy_sell', 'grow', 'markets', 'business', 'support']

    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/"><img src={coinFlip} /></Link>
                    <ul className='nav_links'>
                        {linksName.map((linkName, index) => { return <li key={index}><NavBarLink pageName={linkName} /> </li> })}
                    </ul>
                    <div className='sign_in_buttons'>
                        <Link to="/sign_in" className='sign_in'>Sign in</Link>
                        <Link to="/sign_up" className='sign_up'>Sign up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

function NavBarLink({ pageName, i }) {
    return (
        <NavLink to={`/${pageName}`} className={({ isActive }) => (isActive) ? "active_page" : ""}>{pageName.replace(/_/, ' / ')}</NavLink>
    )
}

export default Header