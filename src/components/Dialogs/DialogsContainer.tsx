import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import { StoreType } from '../../redux/redux-store';
import Dialogs from "./Dialogs";

export type PropsType = {
    store:StoreType
    }


const DialogsContainer = (props:PropsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () =>{
       props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body:string) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />

}

export default DialogsContainer;