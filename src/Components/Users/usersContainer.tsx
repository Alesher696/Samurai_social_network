import React from 'react';
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetUsersAC,
    setUserTotalCountAC, ShowLoaderAC,
    UnFollowAC,
    userType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import loader from '../../tail-spin.svg'
import users from "./users.module.css";



type mapStateToPropsType = {
    usersPage: userType[]
    currentPage: number
    pageSize: number,
    totalUsersCount: number,
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
    showLoader: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersAPIComponent extends React.Component <UsersPropsType, {}> {

    componentDidMount() {
        this.props.showLoader(true)
        setTimeout(()=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.showLoader(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                })
        },3000)

    }


    onClickPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.showLoader(true)
        setTimeout(()=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.showLoader(false)
                    this.props.setUsers(response.data.items)
                })
        }, 1500)

    }

    render() {
        return (<div className={users.usersContainer}>

                {this.props.isFetching ? <img src={loader} alt={'loader'}/> :  <Users totalUsersCount={this.props.totalUsersCount}
                                                                       pageSize={this.props.pageSize}
                                                                       currentPage={this.props.currentPage}
                                                                       onClickPageHandler={this.onClickPageHandler}
                                                                       unfollow={this.props.unfollow}
                                                                       follow={this.props.follow}
                                                                       users={this.props.usersPage}
                                                                       isFetching={this.props.isFetching}
                                                                       showLoader={this.props.showLoader}
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
        isFetching: state.usersPage.isFetching

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
        },
        setCurrentPage: (page: number) => {
            dispatch(SetCurrentPageAC(page))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
        showLoader: (isFetching: boolean) => {
            dispatch(ShowLoaderAC(isFetching))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)