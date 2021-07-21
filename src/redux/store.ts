import {v1} from "uuid";
import profileReducer, {addPostActionCreator, uppgradeNewPostTextActionCreator} from "./profile-reducer";
import messageReducer, {sendMessageCreator, updateNewMessageBody} from "./message-reducer";



// export type StoreType = {
//     _state: RootStateType
//     _renderTree: () => void
//     addMes: (messageText: string) => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }



export type ActionsTypes = ReturnType<typeof uppgradeNewPostTextActionCreator> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewMessageBody> |
    ReturnType<typeof sendMessageCreator>
//
//  let store: StoreType = {
//     _state: {
//         profilePage: {
//             messageForNewPos: '',
//             posts: [
//                 {id: v1(), message: 'this is my first post', likeCount: 23},
//                 {id: v1(), message: 'this is my second post', likeCount: 7},
//                 {id: v1(), message: 'this is my third post', likeCount: 76},
//                 {id: v1(), message: 'this is my four post', likeCount: 99}
//             ]
//         },
//
//         messagesPage: {
//             messages: [
//                 {id: v1(), message: 'hi'},
//                 {id: v1(), message: 'how are you'},
//                 {id: v1(), message: 'im good'},
//                 {id: v1(), message: 'and you'},
//                 {id: v1(), message: 'im fine'}
//             ],
//             dialogs: [
//                 {id: v1(), name: 'Mike'},
//                 {id: v1(), name: 'Helen'},
//                 {id: v1(), name: 'Nike'},
//                 {id: v1(), name: 'Jon'},
//                 {id: v1(), name: 'Sveta'}
//             ],
//             newMessageBody: ''
//         },
//
//
//     },
//
//     getState() {
//         return this._state;
//     },
//     _renderTree() {
//         console.log('state changed')
//     },
//     addMes(messageText: string) {
//         const newMessage: MessageType = {
//             message: messageText,
//             id: v1()
//         }
//         this._state.messagesPage.messages.push(newMessage)
//         this._renderTree()
//
//     },
//     subscribe(observer: () => void) {
//         this._renderTree = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = messageReducer(this._state.messagesPage, action)
//         this._renderTree()
//     }
// }


 type DialogType = {
    name: string
    id: number | string
}
type MessageType = {
    message: string
    id: string
}

export type PostsType = {
    id: string
    message: string
    likeCount: number

}

export type ProfilePageType = {
    messageForNewPos: string
    posts: Array<PostsType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType

}


//@ts-ignore
// window.store = store
// export default store
