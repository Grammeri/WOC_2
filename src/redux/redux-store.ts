import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

let rootReducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});

let store = createStore(rootReducers);

/*export type StoreType = typeof store*/
export type RootStateType = ReturnType<typeof rootReducers>

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
    newMessageBody:string

    }
/*export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
}*/
export type StoreType = {
/*    _state:RootStateType*/
/*    updateNewPostText:(newText:string)=>void*/
/*    addPost:()=>void*/
/*    _callSubscriber:()=>void*/
    subscribe:(observer:() => void) => void
    getState:()=>RootStateType
    dispatch:(action:ActionsTypes)=>void
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>


export default store;