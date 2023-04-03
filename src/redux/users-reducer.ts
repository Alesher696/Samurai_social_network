import {ActionType} from "./ActionType";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

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
}
const initialState: initialStateUsersType = {
    users: []
}

// type FollowType = {
//     type: 'FOLLOW'
//     userId: number
// }
// type UnFollowType={
//     type: 'UNFOLLOW'
//     userId : number
// }
// type SetUsersType ={
//     type: 'SET-USERS'
//     users : userType[]
// }



export const usersReducer = (state: initialStateUsersType = initialState, action: ActionType): initialStateUsersType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        }
        case UNFOLLOW: {
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
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

// export type InitialStateType = {
//     users: UsersType[]
// }
//
// export type UsersType = {
//     id: number,
//     photoUrl: string,
//     photos:{ small: string, large: string}
//     followed: boolean,
//     name: string,
//     status: string,
//     // location: LocationType
// }
//
// type LocationType = {
//     city: string,
//     counry: string
// }
//
// let initialState: InitialStateType = {
//     users: []
// }
//
// export const usersReducer = (state = initialState, action: MainUsersType) => {
//     switch (action.type) {
//         case "FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
//
//         }
//         case "UN_FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
//         }
//         case "SET_USERS": {
//             return {...state, users: [...state.users, ...action.users]}
//         }
//         default:
//             return state
//     }
// }
//
// type MainUsersType = FollowACType | UnFollowACType | setUsersACType
//
// type FollowACType = ReturnType<typeof followAC>
// export const followAC = (userId: number) => {
//     return {
//         type: "FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof UnfollowAC>
// export const UnfollowAC = (userId: number) => {
//     return {
//         type: "UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsersAC>
// export const setUsersAC = (users: UsersType[]) => {
//     return {
//         type: "SET_USERS",
//         users
//     } as const
// }

// case FOLLOW: {
//     let partOfStateCopy = {
//         ...partOfState,
//         users: partOfState.users.map(user => {
//             if (user.id === action.userId) {
//                 return {...user, followed: true}
//             }
//             return user;
//         })
//     };
//     return partOfStateCopy;
// }
// case UNFOLLOW: {
//     let partOfStateCopy = {
//         ...partOfState,
//         users: partOfState.users.map(user => {
//             if (user.id === action.userId) {
//                 return {...user, followed: false}
//             }
//             return user;
//         })
//     };
//     return partOfStateCopy;
// }