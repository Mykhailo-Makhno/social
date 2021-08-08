import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DalogItem/DialogItem";
import Message from "./Message/Message";
import {
    MessagesPageType,
} from "../../redux/store";
import {updateNewMessageBody, sendMessageCreator} from '../../redux/message-reducer'

type PropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage:() => void
    messagesPage:MessagesPageType
}

function Dialogs(props: PropsType) {
    let state = props.messagesPage

    let dialogsElement =
        state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElement =
        state.messages.map(m => <DialogItem key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessagesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder='text your message'
                                  onChange={onNewMessagesChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs