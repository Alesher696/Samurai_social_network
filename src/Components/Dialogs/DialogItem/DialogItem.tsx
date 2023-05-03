import React from 'react';
import d from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import avatar from "../../../avatar.jpg"
import {dialogsPropsType} from "../../../redux/dialogs-reducer";


export const DialogItem = (props: dialogsPropsType) => {
    let path = 'dialogs/' + props.id
    return (
        <NavLink className={d.dialogsItems} to={path}>
            <div>
                <img className={d.avatar} src={avatar}/>
            </div>
            <span className={d.userName}>{props.name}</span>
        </NavLink>
    )
}






