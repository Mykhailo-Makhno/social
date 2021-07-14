import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType,} from "../../redux/store";


type PropsType = {
    newPostText: string
    postPage: Array<PostsType>
    dispatch:(action:ActionsTypes)=>void

}

function Profile(props: PropsType) {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts={props.postPage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
                     />
        </div>
    )
}

export default Profile