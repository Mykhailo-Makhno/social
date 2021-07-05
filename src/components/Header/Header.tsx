import React from "react";
import s from './Header.module.css'

function Header() {
    return (
<div className='had'>
        <div className={s.header}>
            <div>
                <div className={s.logo} >
                    <img  src='https://static.thenounproject.com/png/562-200.png' alt=""/>
                </div>
                <div>
                    <div className={s.head}>
                    <img
                        src="https://www.ispo.com/sites/default/files/styles/full_page_width_desktop_wide/public/2020-01/Headerbilder-ISPO-Award_02_Outdoor.jpg?h=879f30d3&itok=nZLkDlpi"
                        alt=""/>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Header