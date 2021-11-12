import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type PropsType = {
    posts:PostType[]
    addPost:(/*message:string*/)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
    }

const MyPosts = (props:PropsType) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () =>{
/*        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }*/



      /* let text = newPostElement.current ? newPostElement.current.value : ''*/
        props.addPost(/*text*/);
       /* props.updateNewPostText("")*/ //не будем зачищать при удалении поста, пойдем в state
        /*newPostElement.current!.value = '';// Проговорить*/
        }

        let onPostChange = ()=> {
            let text = newPostElement.current ? newPostElement.current.value : ''
        props.updateNewPostText(text)
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