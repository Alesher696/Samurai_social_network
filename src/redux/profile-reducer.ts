import {ActionType} from "./ActionType"



export type PostsPropsType = {
    id: number
    data: string
    like: number
}

export type InitialStateType = {
        posts: PostsPropsType[]
        newPostText: string

}

const initialState: InitialStateType = {
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
    ],
    newPostText: 'Что у вас нового?',
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


