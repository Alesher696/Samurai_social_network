import {ActionType} from "./ActionType";





export type authInitialType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
const initialState: authInitialType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authInitialType = initialState, action: ActionType): authInitialType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
          return {...state, ...action.data, isAuth:true}
        }
        default:
            return state
    }
}

export type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC= (userId:number, email:string, login:string)=>{
    return{
        type:"SET-USER-DATA",
        data:{
            userId,
            email,
            login
        }

    }as const
}