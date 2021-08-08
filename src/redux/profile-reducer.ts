import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType,} from "./store";

const ADD_POST = 'ADD-POST'
const UPPGRADE_NEW_POST_TEXT = 'UPPGRADE-NEW-POST-TEXT'

let initialState = {
    messageForNewPos: '',
    posts: [
        {id: v1(), message: 'this is my first post', likeCount: 23},
        {id: v1(), message: 'this is my second post', likeCount: 7},
        {id: v1(), message: 'this is my third post', likeCount: 76},
        {id: v1(), message: 'this is my four post', likeCount: 99}
    ]
}

export type InitialStateType= typeof initialState


const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPos,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                messageForNewPos : ''
            }

        }
        case UPPGRADE_NEW_POST_TEXT: {

            return {
                ...state,
                messageForNewPos : action.newText
            }

        }
            default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}
export const uppgradeNewPostTextActionCreator = (text: string) => {
    return {
        type: UPPGRADE_NEW_POST_TEXT,
        newText: text
    } as const
}


export default profileReducer