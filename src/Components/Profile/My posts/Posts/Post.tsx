import React from "react";
import p from './Post.module.css'
import avatar from '../../../../avatar.jpg'


type PostPropsType = {
    value : string
    likes : number
}


export const Post = (props:PostPropsType) => {
    return (
        <div className={p.post}>
            <img src={avatar}/>
            <div className={p.postText}>
                {props.value}
            </div>
            <button>like</button>
            <button>editor</button>
            <div>likes: {props.likes}</div>
        </div>
    )
}