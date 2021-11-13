import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsType} from './App';
import * as serviceWorker from './serviceWorker';
import state, {RootStateType, subscribe, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)

// @ts-ignore
subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


