import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType, RootStateType} from "../../redux/state";

export type PropsType = {
    addPost: (/*message:string*/) => void
    profilePage: ProfilePageType
    updateNewPostText:(newText:string)=>void
}

const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText={props.updateNewPostText}

            />
        </div>
    )
}

export default Profile;