import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPageType, ProfilePageType, RootStateType} from "./redux/state";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";

export type PropsType = {
    state:RootStateType
    addPost:(/*message:string*/)=>void
    updateNewPostText:(newText:string)=>void
    }

const App = (props:PropsType) => {

    return (

            <div className='app-wrapper'>
                <Header />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile  profilePage={props.state.profilePage} // Поменяли state={props.state.profilePage} на profilePage={props.state.profilePage}
                                                    addPost ={props.addPost}
                                                    updateNewPostText={props.updateNewPostText}

                           /> }/>
                </div>
            </div>
        )
}

export default App;