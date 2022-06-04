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
                    <div className='nav_links'>
                        {linksName.map((linkName) => { return <NavBarLink pageName={linkName} /> })}
                    </div>
                    <div className='sign_in_buttons'>
                        <button className='sign_in'>Sign in</button>
                        <button className='sign_up'>Sign up</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

function NavBarLink({ pageName }) {
    return (
        <NavLink to={`/${pageName}`} className={({ isActive }) => (isActive) ? "active_page" : ""}>{pageName.replace(/_/, ' / ')}</NavLink>
    )
}

export default Header