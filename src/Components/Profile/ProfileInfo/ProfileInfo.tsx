import React from "react";
import p from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import avatar from '../../../avatar.jpg'
import loader from "../../../tail-spin.svg";
import font from './fonts/font.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.profile === null) {
        return <div><img src={loader} alt={'loader'}/></div>
    }

    return <div className={p.container}>
        <div className={p.font}>
            <img src={props.profile.photos.large} className={p.avatar}/>

            <div className={p.UserDescriber}>
                <h1>{props.profile.fullName}</h1>
                <div>
                    <div>О себе: {props.profile.aboutMe}</div>
                    <div>О работе: {props.profile.lookingForAJobDescription}</div>
                </div>

            </div>
        </div>

    </div>
}


// <div>
//     <img src={props.profile.photos.large}/>
// </div>
// <div className={p.UserDescriber}>
//     <h1>{props.profile.fullName}</h1>
//
//     <div>О себе: {props.profile.aboutMe}</div>
//     <div>О работе: {props.profile.lookingForAJobDescription}</div>
// </div>