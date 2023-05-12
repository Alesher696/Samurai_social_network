import {ActionType} from "./ActionType";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-USER-TOTAL-COUNT'
const SHOW_LOADER = 'SHOW-LOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type userType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
}

export type initialStateUsersType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Number[]
}

const initialState: initialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state: initialStateUsersType = initialState, action: ActionType): initialStateUsersType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        }
        case UNFOLLOW: {
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SHOW_LOADER: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof FollowAC>

export const FollowAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}

export type UnFollowACType = ReturnType<typeof UnFollowAC>

export const UnFollowAC = (userId: number) => {
    return ({
        type: UNFOLLOW,
        userId: userId
    }) as const
}

export type SetUsersACType = ReturnType<typeof SetUsersAC>

export const SetUsersAC = (users: userType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof SetCurrentPageAC>

export const SetCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page
    } as const
}

export type setUserTotalCountACType = ReturnType<typeof setUserTotalCountAC>

export const setUserTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-USER-TOTAL-COUNT',
        totalCount
    } as const
}

export type ShowLoaderACType = ReturnType<typeof ShowLoaderAC>

export const ShowLoaderAC = (isFetching: boolean) => {
    return {
        type: 'SHOW-LOADER',
        isFetching
    } as const
}

export type toggleIsFollowingACType = ReturnType<typeof toggleIsFollowingAC>

export const toggleIsFollowingAC = (userId: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(ShowLoaderAC(true))
     usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(ShowLoaderAC(false))
                dispatch(SetUsersAC(data.items))
                dispatch(setUserTotalCountAC(data.totalCount))
            })
    }
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(userId, true))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(FollowAC(userId))
                }
                dispatch(toggleIsFollowingAC(userId, false))
            })
    }
}

export const unFollowTC = (userId:number)=> {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(userId, true))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(UnFollowAC(userId))
                }
                dispatch(toggleIsFollowingAC(userId, false))
            })
    }
}