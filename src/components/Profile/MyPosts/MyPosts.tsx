import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type PropsType = {
    posts:PostType[]
    addPost:(message:string)=>void
    }

const MyPosts = (props:PropsType) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () =>{
/*        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }*/

       let text = newPostElement.current ? newPostElement.current.value : ''
        props.addPost(text);
        newPostElement.current!.value = '';// Проговорить
        }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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