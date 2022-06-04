import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/"><img src="/assets/logo.png" /></Link>
                    <div className='nav_links'>
                        <NavBarLink pageName="Buy_Sell" />
                        <NavBarLink pageName="Grow" />
                        <NavBarLink pageName="Markets" />
                        <NavBarLink pageName="Business" />
                        <NavBarLink pageName="Support" />
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