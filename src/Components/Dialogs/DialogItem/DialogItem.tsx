import React from 'react';
import d from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import avatar from "../../../avatar.jpg"
import {dialogsPropsType} from "../../../redux/dialogs-reducer";


export const DialogItem = (props: dialogsPropsType) => {
    let path = 'dialogs/' + props.id
    return (
        <div className={d.dialogsItems}>
            <div>
                <img className={d.avatar} src={avatar}/>
            </div>
            <NavLink className={d.userName} to={path}>{props.name}</NavLink>
        </div>
    )
}






