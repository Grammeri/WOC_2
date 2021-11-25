import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

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
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
}
export type StoreType = {
    _state:RootStateType
    /*updateNewPostText:(newText:string)=>void
    addPost:()=>void*/
    _callSubscriber:()=>void
    subscribe:(observer:() => void) => void
    getState:()=>RootStateType
    dispatch:(action:ActionsTypes)=>void
    }

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>



// @ts-ignore
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
            ],
            newPostText: "it-kamasutra"
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
            ],
            newMessageBody: ""
        },
        /*sidebar: {}*/
    },
    _callSubscriber() {
        console.log("state is changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber();
        }
    }
/*@ts-ignore
window.store = store*/

export default store;
