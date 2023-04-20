import React from "react";
import p from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import avatar from '../../../avatar.jpg'
import loader from "../../../tail-spin.svg";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if(props.profile === null) {

        return <div><img src={loader} alt={'loader'}/></div>
    }

    return <div className={p.container}>
        <div>
            <img src={props.profile.photos.large}/>
        </div>

        <div>
            <h3 >{props.profile.fullName}</h3>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>


    </div>


}