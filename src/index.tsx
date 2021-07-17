import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from "./redux/store";
import StoreContext from './StoreContext';

 const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App
                // store={store}
                 // dispatch={store.dispatch.bind(store)}
            />
                </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById('root'))
    ;
}
renderEntireTree()
store.subscribe(renderEntireTree)


