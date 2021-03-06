import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store, {RootStateType} from "./redux/redux-store";
import App from "./App";


let rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                    store={store}/>
        </BrowserRouter>, document.getElementById('root'));
    }


rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


