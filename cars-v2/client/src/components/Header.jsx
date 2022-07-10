import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/slices/changeThemeSlice'

import NavBarLink from './NavBarLink'

import themeIcon from '../assets/color_change.webp'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Header() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.changeTheme.theme)

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
    }

    const navLinks = ['home', 'about', 'contact']

    const [isVisibleBtn, setIsVisibleBtn] = React.useState(false)

    return (
        <header>
            <nav>
                <div id='theme-changer_btn'>
                    <button onClick={() => { toggleTheme() }}>
                        <img src={themeIcon} id='tc_img' alt='theme_changer' />
                    </button>
                </div>
                <ul>
                    {navLinks.map((linkName, index) => { return <li key={index}><NavBarLink pageName={linkName} /></li> })}
                </ul>
                <div className='auth_buttons'>
                    <Link to="/signin" element={<SignIn />} className='sign_in auth_btn'>Sign in</Link>
                    <Link to="/signup" element={<SignUp />} className='sign_up auth_btn'>Sign up</Link>
                </div>
                {
                    isVisibleBtn && (
                        <div id="burger_menu_btn">
                            <span className='bar top'></span>
                            <span className='bar middle'></span>
                            <span className='bar bottom'></span>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Header