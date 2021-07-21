import React, {ChangeEvent, Dispatch} from "react";
import {updateNewMessageBody, sendMessageCreator} from '../../redux/message-reducer'
import Dialogs from "./Dialogs";
import {connect,} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
// import {Dispatch} from "redux"



let mapStateToProps = (state:AppStateType) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer