import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import store, {StoreType} from "./redux/store";
import store, {ReduxStoreType} from "./redux/redux-store";

 const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'))
    ;
}
renderEntireTree()
store.subscribe(renderEntireTree)


