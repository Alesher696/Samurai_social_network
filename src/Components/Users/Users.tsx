import React from 'react';
import users from "./users.module.css";
import avatar from "../../avatar.jpg";
import {userType} from "../../redux/users-reducer";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageHandler: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    usersPage: userType[]
    isFetching: boolean
    showLoader: (isFetching: boolean) => void
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
                props.usersPage.map((u: userType) => (
                    <div key={u.id}>
                        <div><img className={users.avatar} src={avatar} alt={'avatar'}/></div>
                        <span>{u.name}</span>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                        <span>{u.status}</span>
                        <div>
                            <span>{'u.location.country'}</span>
                            <br/>
                            <span>{'u.location.city'}</span>
                        </div>
                    </div>))
            }
        </div>)
}



