import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType,} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType={
    id:string
    photos:PhotosType
    followed:boolean
    name:string
    status:string
    location:LocationType
}

export type PhotosType={
    small:string
    large:string
}
 export type LocationType={
    city:string
    country:string
}

const initialState:InitialStateType = {
    users:[]
}

export type InitialStateType={
    users: Array<UserType>
}


 const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }



        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:{
            return  {...state,
                users: [ ...state.users].concat(action.users)
                //users: state.users.map((user) => user).concat(action.users)
            }
        }

        default:
            return state;
    }
}
export const followAC = (userId:string) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowAC = (userId:string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}


export default usersReducer