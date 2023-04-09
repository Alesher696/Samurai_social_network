import React from 'react';
import {Profile} from "./profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import axios from "axios";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";





type PathParamsType ={
    userId: string
}

// type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

// export type mapStateToPropsType = {
//     profile: ProfileType | null
// }

// export type mapDispatchToPropsType = {
//     setUserProfile: (profile: ProfileType | null) => void
// }

export type ProfilePropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>



export class ProfileAPI extends React.Component<ProfilePropsType, {}> {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: storeType) => {
    return {
        profilePage: state.profilePage.profile
    }
}

const mapDispatchToProps =(dispatch: Dispatch)=>{
    return {
        setUserProfile : (profile: ProfileType)=> {
            dispatch(setUserProfileAC(profile))
        }
    }
}

// const WithRouterProfile = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI)



