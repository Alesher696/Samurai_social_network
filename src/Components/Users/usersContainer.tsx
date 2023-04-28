import React from 'react';
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    followTC, getUsersTC,
    SetCurrentPageAC,
    toggleIsFollowingAC, unFollowTC,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import loader from '../../tail-spin.svg'
import users from "./users.module.css";



type mapStateToPropsType = {
    usersPage: userType[]
    currentPage: number
    pageSize: number,
    totalUsersCount: number,
    isFetching: boolean,
    followingInProgress: Number[]
}

type mapDispatchToPropsType = {
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    SetCurrentPageAC: (page: number) => void
    toggleIsFollowingAC: (userId: number, isFetching: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersAPIComponent extends React.Component <UsersPropsType, {}> {

    componentDidMount() {
       this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onClickPageHandler = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render() {
        return (<div className={users.usersContainer}>

                {this.props.isFetching ? <img src={loader} alt={'loader'}/> :
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onClickPageHandler={this.onClickPageHandler}
                           unFollow={this.props.unFollowTC}
                           follow={this.props.followTC}
                           users={this.props.usersPage}
                           isFetching={this.props.isFetching}
                           toggleFollowingProgress={this.props.toggleIsFollowingAC}
                           followingInProgress={this.props.followingInProgress}
                    />}
            </div>
        )
    }
}

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(FollowAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(UnFollowAC(userId))
//         },
//         setUsers: (users: userType[]) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(SetCurrentPageAC(page))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setUserTotalCountAC(totalCount))
//         },
//         showLoader: (isFetching: boolean) => {
//             dispatch(ShowLoaderAC(isFetching))
//         },
//         toggleFollowingProgress: (userId: number, isFetching: boolean) => {
//             dispatch(toggleIsFollowingAC(userId, isFetching))
//         },
//
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    followTC, unFollowTC, SetCurrentPageAC,
    toggleIsFollowingAC, getUsersTC,
})(UsersAPIComponent)