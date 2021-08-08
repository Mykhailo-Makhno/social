import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';


let UsersContainer;

type MapStateToPropsType = {
    usersPage: InitialStateType
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users:Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        }
        , setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },

    }
}


export default UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);