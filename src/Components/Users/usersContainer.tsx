import React from 'react';
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {UsersC} from "./UsersC";
import {FollowAC, SetUsersAC, UnFollowAC, userType} from "../../redux/users-reducer";


type mapStateToPropsType = {
    usersPage: userType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)


//=======================================================================
// type MapStateToPropsType = {
//     usersPage: initialStateUsersType
// }
//
// type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: userType[]) => void
// }
//
// export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
//
// const mapStateToProps = (state: storeType): MapStateToPropsType => {
//     return {
//         usersPage: state.usersPage
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(FollowAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(UnFollowAC(userId))
//         },
//         setUsers: (users: userType[]) => {
//             dispatch(SetUsersAC(users))
//         }
//     }
// }
//
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

//=======================================================================
// import React from 'react';
// import {Users} from "./Users";
// import {followAC, setUsersAC, UnfollowAC, UsersType} from "../../redux/users-reducer";
// import {connect} from "react-redux";
// import {reducersType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
//
//


// const mapStateToProps=(state:storeType) =>{
//     return{
//         usersPage:state.usersPage.users
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         followHandler: (userId:number) => {
//             dispatch(followAC(userId))
//         },
//         unFollowHandler: (userId:number) => {
//             dispatch(UnfollowAC(userId))
//         },
//         setUsersHandler: (users:any) => {
//             dispatch(setUsersAC(users))
//         },
//     }
// }
//
// const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
// export default UsersContainer