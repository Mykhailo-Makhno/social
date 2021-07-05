import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";
import {ActionsTypes,  PostsType, } from "../../../store/state";
import {addPostActionCreator,uppgradeNewPostTextActionCreator} from '../../../store/profile-reducer'

type PropsType = {
    newPostText:string
    posts: Array<PostsType>
    dispatch:(action:ActionsTypes)=>void

}


function MyPosts(props: PropsType) {
    let postsItem =
        props.posts.map(p => <Posts message={p.message} count={p.likeCount} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {

        props.dispatch(addPostActionCreator(props.newPostText));

         }


    let onPostChange=()=>{




        if(newPostElement.current) {
            let text=newPostElement.current.value
            props.dispatch( uppgradeNewPostTextActionCreator(text));

        }
    }
    return (

        <div>
            <div className={s.posts}>

                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>add post</button>
                {postsItem}
            </div>
        </div>
    )
}

export default MyPosts