import {ActionType} from "./ActionType"

export type dialogsPropsType = {
    name: string
    id: number
}

export type messagesPropsType = {
    id: number
    message: string
}


export type UpdateNewMessageBodyACType ={
    type: "UPDATE-NEW-MESSAGE-BODY",
    text: string
}

export type SendMessageACType = {
    type: 'SEND-MESSAGE'
}

export type initialStateType ={
    messages: messagesPropsType[]
    dialogs: dialogsPropsType[]
    newMessageBody: string
}

const initialState: initialStateType ={
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How a you?'},
        {id: 4, message: "What's up?"},
        {id: 5, message: 'When you invite me???'},
        {id: 6, message: 'I love u man'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Anya'}
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {...state, newMessageBody: action.text }
        }
        case "SEND-MESSAGE": {
            const n = 6
            const newMessage = {id: n + 1, message: state.newMessageBody}
            return state = {
                ...state,  messages:[...state.messages, newMessage],
                newMessageBody: '',
            }
        }
        default:
            return state
    }
}

// export type UpdateNewMessageBodyACType = ReturnType<typeof UpdateNewMessageBodyAC>

export const UpdateNewMessageBodyAC = (text: string):UpdateNewMessageBodyACType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        text
    }
}

// export type SendMessageACType = ReturnType<typeof SendMessageAC>

export const SendMessageAC = ():SendMessageACType => {
    return {
        type: 'SEND-MESSAGE'
    }
}

