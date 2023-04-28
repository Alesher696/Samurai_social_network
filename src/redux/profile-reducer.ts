import {ActionType} from "./ActionType"
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


export type PostsPropsType = {
    id: number
    data: string
    like: number
}


export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: null | string
    youtube: null | string
    mainLink: null | string
}

export type ProfileType = null | {
        aboutMe: string
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        photos: {
            large: string
            small: string
    }
}

export type InitialStateType = {
    posts: PostsPropsType[]
    newPostText: string
    profile: ProfileType | null

}

const initialState: InitialStateType = {
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
    ],
    newPostText: 'Что у вас нового?',
    profile : null

}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const n = 4
            const newPost = {id: n + 1, data: state.newPostText, like: 0}
            return {
                ...state, posts: [newPost, ...state.posts]
            }

        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.text}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile : action.profile}
        }
        default:
            return state
    }
}

export type updateNewPostTextACType = {
    type: "UPDATE-NEW-POST-TEXT",
    text: string
}

export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => ({
        type: "ADD-POST"
    } as const
)

// export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string): updateNewPostTextACType => ({
        type: "UPDATE-NEW-POST-TEXT",
        text: text
    } as const
)


export type setUserProfileType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const getUserProfileTC = (profileId: number) => {
    return (dispatch:Dispatch)=>{
        usersAPI.getProfile(+profileId)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
}}