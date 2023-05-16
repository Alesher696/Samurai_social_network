import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {useNavigate} from "react-router-dom";




type ProfilePropsType = {
    profile: ProfileType | null
    isAuth: boolean
    // setUserProfile : (profile: ProfileType | null) => void

}

export const Profile = (props: ProfilePropsType) => {
    const navigate = useNavigate()
    if(!props.isAuth){
        navigate('/login')
    }
    return (
        <div className={p.Content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


