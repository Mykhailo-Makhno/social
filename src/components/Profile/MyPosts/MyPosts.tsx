import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";
import {ActionsTypes, PostsType,} from "../../../redux/store";
import {addPostActionCreator, uppgradeNewPostTextActionCreator} from '../../../redux/profile-reducer'

type PropsType = {
    addPost: () => void
    newPostText: string
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
}


function MyPosts(props: PropsType) {
    let postsItem =
        props.posts.map(p => <Posts message={p.message} count={p.likeCount} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator(props.newPostText));

    }


    let onPostChange = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.dispatch( uppgradeNewPostTextActionCreator(text));
            props.updateNewPostText(text)
        }
    }
    return (

        <div>
            <div className={s.posts}>
                f
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>add post</button>
                {postsItem}
            </div>
        </div>
    )
}

export default MyPosts