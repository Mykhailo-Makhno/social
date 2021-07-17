import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";
import {ActionsTypes, PostsType,} from "../../../redux/store";
import {addPostActionCreator, uppgradeNewPostTextActionCreator} from '../../../redux/profile-reducer'

type PropsType = {
    addPost: () => void
    newPostText: string
    posts: Array<PostsType>
    updateNewPostText: (text: string) => void
}


function MyPosts(props: PropsType) {


    let postsItem =
        props.posts.map(p => <Posts message={p.message} count={p.likeCount} id={p.id}/>)

    let onAddPost = () => {
        props.addPost()

    }


    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {

            let text = e.currentTarget.value

            props.updateNewPostText(text)

    }
    return (

        <div>
            <div className={s.posts}>

                <textarea  onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>add post</button>
                {postsItem}
            </div>
        </div>
    )
}

export default MyPosts