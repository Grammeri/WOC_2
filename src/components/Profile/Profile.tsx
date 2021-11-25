import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { StoreType } from '../../redux/redux-store';



export type PropsType = {
    /*addPost: () => void*/
 /*   profilePage: ProfilePageType*/
    /*updateNewPostText:(newText:string)=>void*/
    store:StoreType
    }

const Profile = (props:PropsType) => {
debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
/*                              posts={props.profilePage.posts}
                              newPostText={props.profilePage.newPostText}
                              addPost={props.addPost}
                              updateNewPostText={props.updateNewPostText}*/
            />
        </div>
    )
}

export default Profile;