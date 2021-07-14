import React from 'react';
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import store, {ActionsTypes, RootStateType, StoreType} from "./redux/store";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void

}

function App(props: PropsType) {
    const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <Dialogs
                    messagesPage={props.store._state.messagesPage}
                    dispatch={props.dispatch}
                    store={props.store}

                />}/>
                <Route exact path={'/Profile'} render={() => <Profile
                    postPage={state.profilePage.posts}
                                                                      newPostText={state.profilePage.messageForNewPos}
                                                                      dispatch={props.dispatch}

                />}/>

            </div>
        </div>
    );
}


export default App;
