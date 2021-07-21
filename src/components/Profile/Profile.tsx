import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type PropsType = {
//     store: StoreType
//     // newPostText: string
//     // postPage: Array<PostsType>
//     // dispatch:(action:ActionsTypes)=>void
//
// }

function Profile() {

    return (
        <div>

            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                // posts={props.store.getState().profilePage.posts}
                // dispatch={props.store.dispatch.bind(props.store)}
                // newPostText={props.store.getState().profilePage.messageForNewPos}
            />
        </div>
    )
}

export default Profile