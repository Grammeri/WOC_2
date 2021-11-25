import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import {ActionsTypes, RootStateType, StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



export type AppPropsType = {
   state: RootStateType
    dispatch:(action:ActionsTypes)=>void
    store:StoreType
 /*   profilePage: ProfilePageType*/
    /*addPost:()=>void
    updateNewPostText:(newText:string)=>void*/
       }

const App:React.FC<AppPropsType> = (props) => {

    return (

            <div className='app-wrapper'>
                <Header />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer store={props.store}/> }/>
                    <Route path='/profile'
                           render={ () => <Profile
                               store={props.store}
                                                   /* addPost ={props.addPost}
                                                    updateNewPostText={props.updateNewPostText}*/
                           /> }/>
                </div>
            </div>
        )
}

export default App;