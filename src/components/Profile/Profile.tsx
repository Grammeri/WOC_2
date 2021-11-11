import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType, RootStateType} from "../../redux/state";

export type PropsType = {
    state:ProfilePageType
    addPost:(message:string)=>void
}

const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
            addPost = {props.addPost}
            />
        </div>
    )
}

export default Profile;