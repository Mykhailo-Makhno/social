import {v1} from "uuid";
import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogType = {
    name: string
    id: number | string
}
export type MessageType = {
    message: string
    id: string
}

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

export type InitialSateteType= typeof initialState


const messageReducer = (state:InitialSateteType  = initialState, action: ActionsTypes):InitialSateteType => {
    console.log(action)
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let newMessages = [...state.messages];
            newMessages.push({id: v1(), message: state.newMessageBody})
            return {
                ...state,
                newMessageBody: '',
                messages: newMessages
            }
    }
    return state;
}
export const updateNewMessageBody = (message: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: message
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export default messageReducer