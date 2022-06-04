import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/"><img src="/assets/logo.png" /></Link>
                    <div className='nav_links'>
                        <NavBarLink pageName="buy_Sell" />
                        <NavBarLink pageName="grow" />
                        <NavBarLink pageName="markets" />
                        <NavBarLink pageName="business" />
                        <NavBarLink pageName="support" />
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