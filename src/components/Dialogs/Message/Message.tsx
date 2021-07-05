import React, {createRef} from "react";
import s from "./../Dialogs.module.css"
import {MessageType} from "../../../store/state";

type PropsType = {
    message: string
    id: string
}
// state.messages.map(m => <p key={m.id}>{m.message}</p>)


function Message(props: PropsType) {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    // let addMessage = () => {
    //     if (newMessageElement.current) {
    //         props.addMessag(newMessageElement.current.value)
    //     }
    // }
    return (
        <div className={s.message}>

            {props.message}


            {/*<textarea ref={newMessageElement}></textarea>*/}
            {/*<button onClick={addMessage}>add message</button>*/}
        </div>
    )
}


export default Message