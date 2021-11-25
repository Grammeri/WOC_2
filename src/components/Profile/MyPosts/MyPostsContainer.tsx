import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType, StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type PropsType = {
/*    posts:PostType[]
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void*/
    store:StoreType
    }

const MyPostsContainer = (props: PropsType) => {
debugger
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())//Adding store
    }


    let onPostChange = (newPostText:string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPostText))//Adding store
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}

    />)
}

export default MyPostsContainer;