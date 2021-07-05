import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.box}>

            <img className={s.main_img}
                 src='https://www.gunstock.com/upload/cache/header_image.image/lg/headerimage_hikers-summit-sunset.jpg'
                 alt=""/>
            <div className={s.description}>
                some info
            </div>
        </div>
    )
}

export default ProfileInfo