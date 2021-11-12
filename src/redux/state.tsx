import {rerenderEntireTree} from "../render";

export type MessageType = {
    id:number
    message:string
}
export type DialogType = {
    id:number
    name:string
}
export type PostType = {
    id:number
    message:string
    likesCount:number
}
export type ProfilePageType = {
    posts:Array<PostType>
    newPostText:string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
   }


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11},
        ],
        newPostText:"it-kamasutra"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}

// @ts-ignore
window.state = state

export let addPost = (/*postMessage*/) => { //удалили параметр postMessage

    let newPost:PostType = {
        id: 5,
        message: /*postMessage*/ state.profilePage.newPostText, // В качестве message берем, то что приходит в параметрах в нашу функцию
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "" //зануляем добавив из 67 строки приравняв к " "
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;