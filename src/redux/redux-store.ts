import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profileReducer:profileReducer,
    messageReducer:messageReducer
})
 export type ReduxStoreType={

}
let store:StoreType = createStore(reducers)
export default store