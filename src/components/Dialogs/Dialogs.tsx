import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DalogItem/DialogItem";
import Message from "./Message/Message";
import {
    MessagesPageType,
     ActionsTypes, StoreType
} from "../../store/state";
import {updateNewMessageBody,sendMessageCreator} from '../../store/message-reducer'

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
    messagesPage: MessagesPageType
    // profilePage: ProfilePageType
    // messCallback: (messageText: string) => void
}

function Dialogs(props: PropsType) {
    let state = props.store.getState().messagesPage

    let dialogsElement =
        state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement =
    // state.messages.map(m => <p key={m.id}>{m.message}</p>)
        state.messages.map(m => <DialogItem key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody



    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(newMessageBody))

    }
    let onNewMessagesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBody(body))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='text your message'
                                   onChange={onNewMessagesChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs