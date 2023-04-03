import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";





export const Profile = () => {

    return (
        <div className={p.Content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}


