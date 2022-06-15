import React from 'react'
import { Link } from 'react-router-dom'

import NavBarLink from './NavBarLink'

import themeIcon from '../assets/color_change.webp'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Header({ toggleTheme }) {
    const navLinks = ['home', 'about', 'contact']

    return (
        <header>
            <nav>
                <div id='theme-changer_btn'>
                    <button onClick={() => { toggleTheme() }}>
                        <img src={themeIcon} id='tc_img' />
                    </button>
                </div>
                <ul>
                    {navLinks.map((linkName, index) => { return <li key={index}><NavBarLink pageName={linkName} /></li> })}
                </ul>
                <div className='auth_buttons'>
                    <Link to="/signin" element={<SignIn />} className='sign_in auth_btn'>Sign in</Link>
                    <Link to="/signup" element={<SignUp />} className='sign_up auth_btn'>Sign up</Link>
                </div>
            </nav>
        </header>
    )
}

function NavLinks() {

}

export default Header