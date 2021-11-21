import {ActionsTypes, DialogPageType, RootStateType, StoreType} from "./store";

let initialState = {
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
    }

const dialogsReducer = (state: DialogPageType=initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {

        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (body: string) => ({
       type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const )


export const sendMessageCreator = () => ({type: "SEND-MESSAGE"} as const) //Обязательно писать as const, во ВСЕХ ActionCreator-ах, иначе нигде не работает!


export default dialogsReducer;