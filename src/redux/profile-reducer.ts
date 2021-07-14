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

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPos = ''
            break;
        case UPPGRADE_NEW_POST_TEXT:
            state.messageForNewPos = action.newText
            break;
    }
    return state;
}
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        postText: newPostText
    } as const
}
export const uppgradeNewPostTextActionCreator = (text: string) => {
    return {
        type: UPPGRADE_NEW_POST_TEXT,
        newText: text
    } as const
}


export default profileReducer