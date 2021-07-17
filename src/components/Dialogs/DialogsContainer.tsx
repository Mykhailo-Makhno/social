import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DalogItem/DialogItem";
import Message from "./Message/Message";
import store, {
    MessagesPageType,
    ActionsTypes, StoreType
} from "../../redux/store";
import {updateNewMessageBody, sendMessageCreator} from '../../redux/message-reducer'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// type PropsType = {
//     store: StoreType
//     // dispatch: (action: ActionsTypes) => void
//     // messagesPage: MessagesPageType
//     // profilePage: ProfilePageType
//     // messCallback: (messageText: string) => void
// }

function DialogsContainer() {

    // let dialogsElement =
    //     state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> )
    // let messagesElement =
    //     state.messages.map(m => <DialogItem key={m.id} message={m.message}/>)




    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let newMessageBody = state.messagesPage.newMessageBody

                let onSendMessageClick = () => {

                    store.dispatch(sendMessageCreator(newMessageBody))

                }
                let onNewMessagesChange = (body: string) => {

                    store.dispatch(updateNewMessageBody(body))
                }

                return <Dialogs store={store} updateNewMessageBody={onNewMessagesChange}
                                sendMessage={onSendMessageClick}
                                messagesPage={state.messagesPage}/>
            }
        }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer