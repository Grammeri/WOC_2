import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/redux-store";


export type PropsType = {
    /*addPost: () => void*/
    profilePage: ProfilePageType
    /*updateNewPostText:(newText:string)=>void*/
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     /*addPost = {props.addPost}*/
                     /*updateNewPostText={props.updateNewPostText}*/
                     dispatch={props.dispatch}

            />
        </div>
    )
}

export default Profile;