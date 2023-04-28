import React, {ChangeEvent} from "react";
import m from './MyPosts.module.css'
import avatar from '../../../avatar.jpg'
import {Post} from "./Posts/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useAutoAnimate} from "@formkit/auto-animate/react";




export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postList = props.profilePage.posts.map(p => <Post key={p.id} value={p.data} likes={p.like} photo={props.profilePage.profile?.photos.small}/>)

    const onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    const [listRef] = useAutoAnimate<HTMLDivElement>()

    return (
        <div className={m.myPostsBlock}>
            <div className={m.addPost}>
                <img src={props.profilePage.profile?.photos.small ? props.profilePage.profile?.photos.small : avatar} className={m.avatar}/>
                <textarea
                    onFocus={props.onFocusHandler}
                    // ref={newPostElement}
                    value={props.profilePage.newPostText}
                    onChange={onChangeHandlerPost}
                    className={m.textArea}
                />
                <button
                    onClick={props.addPost}
                    className={m.btnAddPost}> Add Post</button>
            </div>
            <div className={m.postsList} ref={listRef}>
                {postList}
            </div>
        </div>

    )
}



