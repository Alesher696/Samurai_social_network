import {SendMessageACType, UpdateNewMessageBodyACType} from "./dialogs-reducer";
import {addPostACType, updateNewPostTextACType} from "./profile-reducer";
import {
    FollowACType,
    SetCurrentPageACType,
    SetUsersACType,
    setUserTotalCountACType,
    UnFollowACType
} from "./users-reducer";
// import {FollowACType, SetUsersACType, UnFollowACType} from "./users-reducer";

export type ActionType =
    UpdateNewMessageBodyACType |
    SendMessageACType |
    addPostACType |
    updateNewPostTextACType |
    FollowACType |
    UnFollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    setUserTotalCountACType
