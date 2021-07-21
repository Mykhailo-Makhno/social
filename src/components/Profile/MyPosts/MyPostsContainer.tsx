import React from "react";
import {addPostActionCreator, uppgradeNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";





let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        updateNewPostText: (text:string) => {
            let action = uppgradeNewPostTextActionCreator(text)
            dispatch(action);

        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profilePage.messageForNewPos,
        posts: state.profilePage.posts
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer