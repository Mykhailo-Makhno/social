import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";
import {ActionsTypes, PostsType, StoreType,} from "../../../redux/store";
import {addPostActionCreator, uppgradeNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type PropsType = {
//     store: StoreType
//     // newPostText: string
//     // posts: Array<PostsType>
//     // dispatch: (action: ActionsTypes) => void
//
// }


function MyPostsContainer() {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.messageForNewPos));
                }


                let onPostChange = (text: string) => {
                    store.dispatch(uppgradeNewPostTextActionCreator(text));
                }
                return <MyPosts
                    updateNewPostText={onPostChange} addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.messageForNewPos}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer