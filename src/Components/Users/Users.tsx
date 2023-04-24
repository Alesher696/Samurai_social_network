import React from 'react';
import users from "./users.module.css";
import avatar from "../../avatar.jpg";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageHandler: (page: number) => void
    users: userType[]
    isFetching: boolean
    toggleFollowingProgress: (userId: number, isFetching: boolean) => void
    followingInProgress: Number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div className={users.usersContainer}>
            <div className={users.pages}>
                {pages.map(el => {
                    return <span className={el === props.currentPage ? users.activePage : ''}
                                 onClick={() => props.onClickPageHandler(el)}>{el}</span>
                })}
            </div>
            {
                props.users.map((u: userType) => {

                    return (
                        <div key={u.id}>
                            <NavLink key={u.id} to={'/profile/' + u.id}>
                                <div><img className={users.avatar} src={avatar} alt={'avatar'}/></div>
                            </NavLink>
                            <span>{u.name}</span>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id=> id === u.id)}
                                                  onClick={() => {props.unFollow(u.id)}}
                                        >UnFollow</button>

                                        : <button disabled={props.followingInProgress.some(id=> id === u.id)}
                                                  onClick={() => {props.follow(u.id)}}
                                        >Follow</button>
                                }
                            </div>
                            <span>{u.status}</span>
                            <div>
                                <span>{'u.location.country'}</span>
                                <br/>
                                <span>{'u.location.city'}</span>
                            </div>
                        </div>)
                })
            }

        </div>)
}



