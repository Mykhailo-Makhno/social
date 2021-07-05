import React from "react";
import s from "./Posts.module.css"

type PropsType={
    id:string
    message:string
    count:number
}

function Posts(props:PropsType){
    return(
        <div>

            <textarea >{props.message}</textarea>
            <div className={s.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" alt=""/>
            <span>post</span>
                <div>
                <span>like</span> <span>{props.count}</span>
                </div>
            </div>

        </div>
    )
}
export default Posts