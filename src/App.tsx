import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
/*import {DialogPageType, ProfilePageType, RootStateType, StoreType} from "./redux/state";*/
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import {ActionsTypes, AddPostActionType, RootStateType, UpdateNewPostTextType} from "./redux/state";

export type PropsType = {
/*    addPost:()=>void
    updateNewPostText:(newText:string)=>void*/
    state:RootStateType
    dispatch:(action:ActionsTypes)=>void
       }

const App:React.FC<PropsType> = (props) => {

    return (

            <div className='app-wrapper'>
                <Header />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile  profilePage={props.state.profilePage}
                                                    dispatch = {props.dispatch}
                                                    /*addPost ={props.addPost}
                                                    updateNewPostText={props.updateNewPostText}*/

                           /> }/>
                </div>
            </div>
        )
}

export default App;