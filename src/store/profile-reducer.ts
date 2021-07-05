import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType,} from "./state";

const ADD_POST = 'ADD-POST'
const UPPGRADE_NEW_POST_TEXT = 'UPPGRADE-NEW-POST-TEXT'

const profileReducer = (state:ProfilePageType, action:ActionsTypes) => {
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