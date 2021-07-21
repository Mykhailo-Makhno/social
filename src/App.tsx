import React from 'react';
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



// type PropsType = {
//     store: StoreType
//
// }

//  type ProviderType={
//     store:StoreType
//     children:React.ReactNode
// }

function App() {

    // const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    {/*// store={props.store}*/}

                <Route exact path={'/Profile'} render={() => <Profile/>}/>
                    {/*// store={props.store}*/}



            </div>
        </div>
    );
}


export default App;
