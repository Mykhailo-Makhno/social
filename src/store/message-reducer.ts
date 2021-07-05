import {v1} from "uuid";
import {ActionsTypes, MessagesPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const messageReducer =(state:MessagesPageType,action:ActionsTypes)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: body})
            break;
    }
    return state;
}
export const updateNewMessageBody = (message: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: message
    } as const
}
export const sendMessageCreator = (message: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: message
    } as const
}

export default messageReducer