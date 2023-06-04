import React, {useEffect} from 'react';
import {Profile} from "./profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapDispatchToPropsType = {
  getUserProfileTC: (profileId: number) => void
}
type mapStateToPropsType = {
  profilePage: ProfileType
  isAuth: boolean
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

export const ProfileAPI2 = (props: ProfilePropsType) => {

  const Params = useParams<'profileId'>()
  const profileId = Params.profileId || '2'

  useEffect(() => {
    props.getUserProfileTC(+profileId)
  }, [profileId])

  return <Profile profile={props.profilePage}/>
}

const mapStateToProps = (state: storeType) => {
  return {
    profilePage: state.profilePage.profile,
  }
}

const mapStateToPropsForRedirect = (state: storeType) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileAPI2)
export const AuthRedirectComponentForConnect = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(AuthRedirectComponentForConnect)

