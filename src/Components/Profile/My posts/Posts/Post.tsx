import React from "react";
import p from './Post.module.css'
import avatar from '../../../../avatar.jpg'



type PostPropsType = {
    value: string
    likes: number
    photo: string | undefined
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={p.post}>
            <div className={p.avatarAndLikes}><img src={props.photo ? props.photo : avatar}/> likes: {props.likes}</div>
            <div className={p.postText}>
                {props.value}
            </div>
            <div className={p.buttons}>
                <button className={p.btnLike}></button>
                <button className={p.btn}>editor</button>
            </div>
        </div>
    )
}