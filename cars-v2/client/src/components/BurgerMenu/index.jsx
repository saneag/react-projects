import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import NavBarLink from '../NavBarLink'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'

import styles from './styles.module.scss'

function BurgerMenu({ isVisible, setIsVisible }) {
    const navLinks = ['home', 'about', 'contact']

    return (
        <motion.div
            className={styles.root}
            initial={{ opacity: 0, y: '-100vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsVisible(!isVisible)}
        >
            <motion.ul>
                {navLinks.map((linkName, index) => { return <li key={index}><NavBarLink pageName={linkName} /></li> })}
                <motion.div className={`${styles.auth_buttons} auth_buttons`}>
                    <Link to="/signin" element={<SignIn />} className={`${styles.auth_btn} sign_in auth_btn`}>Sign in</Link>
                    <Link to="/signup" element={<SignUp />} className={`${styles.auth_btn} ${styles.sign_up} sign_up auth_btn`}>Sign up</Link>
                </motion.div>
            </motion.ul>
        </motion.div >
    )
}

export default BurgerMenu