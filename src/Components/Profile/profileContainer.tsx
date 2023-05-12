import React, {useEffect} from 'react';
import {Profile} from "./profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";






type mapDispatchToPropsType = {
    getUserProfileTC:(profileId:number) => void
}
type mapStateToPropsType={
    profilePage: ProfileType
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

export const ProfileAPI2 = (props: ProfilePropsType) => {

    const Params = useParams<'profileId'>()
    const profileId = Params.profileId || '2'

    useEffect(() => {
        props.getUserProfileTC(+profileId)
    },[profileId])

    return <Profile profile={props.profilePage}/>
}

const mapStateToProps = (state: storeType) => {
    return {
        profilePage: state.profilePage.profile
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         setUserProfile: (profile: ProfileType) => {
//             dispatch(setUserProfileAC(profile))
//         },
//         getUsersTC:(profileId:string)=>{
//
//         }
//     }
// }

export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(ProfileAPI2)



