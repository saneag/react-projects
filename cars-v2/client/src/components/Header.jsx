import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/slices/changeThemeSlice'

import NavBarLink from './NavBarLink'

import themeIcon from '../assets/color_change.webp'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import BurgerMenu from '../components/BurgerMenu'

function Header() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.changeTheme.theme)

    const toggleTheme = React.useCallback(
        () => {
            dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
        }, [dispatch, theme]
    )

    const navLinks = React.useMemo(() => ['home', 'about', 'contact'], [])

    const [isVisible, setIsVisible] = React.useState(false)

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
                <div id="menu_btn">
                    <div id="burger_menu_btn" onClick={() => setIsVisible(!isVisible)}>
                        <span className={`${isVisible ? 'change' : ''} bar top`}></span>
                        <span className={`${isVisible ? 'change' : ''} bar middle`}></span>
                        <span className={`${isVisible ? 'change' : ''} bar bottom`}></span>
                    </div>
                </div>
                {isVisible &&
                    <BurgerMenu
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                }
            </nav>
        </header>
    )
}

export default Header