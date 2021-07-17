import React, {createRef} from "react";
import s from "./../Dialogs.module.css"
import {MessageType} from "../../../redux/store";

type PropsType = {
    message: string
    id: string
}


function Message(props: PropsType) {


    return (
        <div className={s.message}>

            {props.message}


            {/*<textarea ref={newMessageElement}></textarea>*/}
            {/*<button onClick={addMessage}>add message</button>*/}
        </div>
    )
}


export default Message