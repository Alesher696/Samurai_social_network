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
            <div className={p.avatar}>
                <div className={''}><img src={props.photo ? props.photo : avatar}/></div>
                 <span className={p.date}>12.04.2023</span>
                <div className={p.line}></div>
            </div>
            <span className={p.spanName}>NAME</span>
            <div className={p.postText}>
                <div>{props.value}</div>
            </div>
        </div>
    )
}