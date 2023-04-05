import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";




type ProfilePropsType = {
    profilePage: ProfileType | null
    // setUserProfile : (profile: ProfileType | null) => void

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={p.Content}>
            <ProfileInfo profile={props.profilePage}/>
            <MyPostsContainer/>
        </div>
    )
}


