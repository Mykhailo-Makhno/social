import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";
import {ActionsTypes,  PostsType, } from "../../../redux/store";
import {addPostActionCreator,uppgradeNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";

type PropsType = {
    newPostText:string
    posts: Array<PostsType>
    dispatch:(action:ActionsTypes)=>void

}


function MyPostsContainer(props: PropsType) {
    // let postsItem =
    //     props.posts.map(p => <Posts message={p.message} count={p.likeCount} id={p.id}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {

        props.dispatch(addPostActionCreator(props.newPostText));

         }


    let onPostChange=(text:string)=>{

        // if(newPostElement.current) {

            props.dispatch( uppgradeNewPostTextActionCreator(text));

        // }
    }
    return (

        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                 posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}
        />
    )
}

export default MyPostsContainer