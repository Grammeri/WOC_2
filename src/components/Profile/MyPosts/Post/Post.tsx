import React from 'react';
import s from './Post.module.css';

export type PropsType = {
    id:number
    message:string
    likesCount:number
}

const Post = (props:PropsType) => {

  return (
    <div className={s.item}>
        {/*avatar*/}
      <img src='https://cdna.artstation.com/p/assets/images/images/022/342/774/large/nikita-poghainyi-viber-2019-08-04-15-41-05.jpg?1575061419' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;