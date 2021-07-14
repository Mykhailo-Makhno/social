import {v1} from "uuid";
import {ActionsTypes, MessagesPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'how are you'},
        {id: v1(), message: 'im good'},
        {id: v1(), message: 'and you'},
        {id: v1(), message: 'im fine'}
    ],
    dialogs: [
        {id: v1(), name: 'Mike'},
        {id: v1(), name: 'Helen'},
        {id: v1(), name: 'Nike'},
        {id: v1(), name: 'Jon'},
        {id: v1(), name: 'Sveta'}
    ],
    newMessageBody: ''
}

const messageReducer = (state: MessagesPageType = initialState, action: ActionsTypes) => {
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