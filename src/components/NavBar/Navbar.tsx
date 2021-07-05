import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'


function Navbar() {

    return (
        <div className='nav'>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>dialogs</NavLink>
            </div>
        </div>
    );
}

export default Navbar