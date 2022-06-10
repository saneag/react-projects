import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarLink({ pageName, i }) {
    return (
        <NavLink to={`/${pageName}`} className={({ isActive }) => (isActive) ? "active_page" : ""}>{pageName.replace(/_/, ' / ')}</NavLink>
    )
}

export default NavBarLink