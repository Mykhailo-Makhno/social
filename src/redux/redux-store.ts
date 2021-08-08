import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messageReducer,
    usersPage:usersReducer
})
export type AppStateType = ReturnType<typeof reducers>
export type AppDispatchType = typeof store.dispatch;

let store = createStore(reducers)

export default store