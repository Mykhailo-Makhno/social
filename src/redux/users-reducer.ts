import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType,} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType={
    id:string
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location:LocationType
}
 type LocationType={
    city:string
    country:string
}

export type InitialStateType={
    users:Array<UserType>
}
const initialState:InitialStateType = {
users:[]

}

// export type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return <InitialStateType>{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (...u, followed: true)
                    }
                    return u
                })
            }



        case UNFOLLOW:
            return <InitialStateType>{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (...u, followed: false)
                    }
                    return u
                })
            }

        case SET_USERS:{
            return  {...state,users:[...state.users, action.users]}
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
export const setUsersAC = (users:UserType) => {
    return {
        type: SET_USERS,
        users
    } as const
}


export default usersReducer