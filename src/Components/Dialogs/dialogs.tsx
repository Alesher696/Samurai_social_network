import React, {ChangeEvent} from 'react';
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Messages";
import {ActionType} from '../../redux/ActionType';
import {dialogsPropsType, messagesPropsType} from "../../redux/dialogs-reducer";
import {DialogsType} from "./dialogsContainer";





export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsList = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    const messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewMessage(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.sendMessage()
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsFriends}>
                {dialogsList}
            </div>
            <div className={d.message}>
                {messagesElement}
            </div>
            <div className={d.messageSend}>
                <textarea value={props.dialogsPage.newMessageBody} onChange={onChangeHandler}></textarea>
                <button onClick={onClickHandler}>send</button>
            </div>
<div className={d.ramka}> hello</div>
        </div>
    );
};

