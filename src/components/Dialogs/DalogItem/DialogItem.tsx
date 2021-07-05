import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'


type DialogType = {
    name?: string
    id?: string | number
    message?: string
}


function DialogItem(props: DialogType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            <p>{props.message}</p>
        </div>
    )
}


export default DialogItem