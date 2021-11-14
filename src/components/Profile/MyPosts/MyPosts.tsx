import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";
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
        // @ts-ignore
        /*let action:ActionsTypes = addPostActionCreator;*/
        props.dispatch(addPostActionCreator(props.newPostText))
              }


        let onPostChange = ()=> {
            let newText = newPostElement.current ? newPostElement.current.value : ''
       /* props.updateNewPostText(text)*/
            /*let action:ActionsTypes = updateNewPostTextActionCreator(text);*/
            props.dispatch(updateNewPostTextActionCreator(newText))
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