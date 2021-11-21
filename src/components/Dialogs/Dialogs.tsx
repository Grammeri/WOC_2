import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import { StoreType } from '../../redux/redux-store';

export type PropsType = {
    /*state: DialogPageType*/
    store:StoreType
    }


const Dialogs = (props:PropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements =  state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () =>{
       props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{ //неправильно подсказывает "ChangeEventHandler", пишем "ChangeEvent"
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;