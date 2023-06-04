import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
  profile: ProfileType | null
}

export const Profile = (props: ProfilePropsType) => {
  return (
      <div className={p.Content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
  )
}


