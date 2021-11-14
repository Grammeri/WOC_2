import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import {ActionsTypes, RootStateType} from "./redux/state";

export type PropsType = {
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