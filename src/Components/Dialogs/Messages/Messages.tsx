import React from 'react';
import d from "../Dialogs.module.css"
import avatar from "../../../avatar.jpg";


type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={d.messagesInMessage}>
            {props.message}
            <img className={d.avatarMessage} src={avatar}/>
        </div>
    )
}


