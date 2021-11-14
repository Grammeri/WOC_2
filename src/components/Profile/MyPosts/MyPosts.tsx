import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, AddPostActionType, PostType} from "../../../redux/state";
import {text} from "stream/consumers";

type PropsType = {
    posts:PostType[]
   /* addPost:()=>void*/
    newPostText:string
 /*   updateNewPostText:(newText:string)=>void*/
    dispatch:(action:ActionsTypes)=>void
    }

const MyPosts = (props:PropsType) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () =>{
     /*   props.addPost();*/ //Раньше вызывали конкретный метод в Store
        /*props.dispatch({type:"ADD-POST"})*/ //Теперь вызываем один и тот же метод 21, 27
        let action:ActionsTypes = {type: "ADD-POST", newPostText:props.newPostText};
        props.dispatch(action)
              }


        let onPostChange = ()=> {
            let text = newPostElement.current ? newPostElement.current.value : ''
       /* props.updateNewPostText(text)*/
            let action:ActionsTypes = {type: "UPDATE-NEW-POST-TEXT", newText:text};
            props.dispatch(action)
        }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value ={props.newPostText}/>
                </div>
                <div>
                    <button onClick={() => addPost()}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;