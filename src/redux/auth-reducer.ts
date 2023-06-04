import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

export type authActions = setUserDataACType

export const authReducer = (state: authInitialType = initialState, action: authActions): authInitialType => {
  switch (action.type) {
    case 'SET-USER-DATA': {
      return {...state, ...action.data, isAuth: true}
    }
    default:
      return state
  }
}

export type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userId: number, email: string, login: string) => {
  return {
    type: "SET-USER-DATA",
    data: {
      userId,
      email,
      login
    }
  } as const
}

export const GetAuthUserDataTC = () => {
  return (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(data => {
          if (data.resultCode === 0) {
            const {email, id, login} = data.data
            dispatch(setUserDataAC(id, email, login))
          }
        })
  }
}

export const logOutTC = () => (dispatch: Dispatch) => {
  authAPI.logOut().then(res => res.data)
}