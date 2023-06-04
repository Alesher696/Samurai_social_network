import {Dispatch} from "redux";
import {GetAuthUserDataTC} from "../../src/redux/auth-reducer";
import {authAPI} from "../../src/api/api";
import {AppDispatch, AppThunk} from "../../src/redux/redux-store";


export type appInitialType = {
  isInitialized: boolean
}
const initialState: appInitialType = {
  isInitialized: false
}

export type appActions = ReturnType<typeof initializedAppAC>

export const appReducer = (state: appInitialType = initialState, action: appActions): appInitialType => {
  switch (action.type) {
    case 'app/INITIALIZED': {
      return {...state, isInitialized: action.isInitialized}
    }
    default:
      return state
  }
}

const initializedAppAC = (isInitialized: boolean) =>{
  return{
    type:'app/INITIALIZED',
    isInitialized
  } as const
}

export const initializeAppTC = ():AppThunk => (dispatch:AppDispatch) => {

authAPI.authMe().then(res=> {
  if(res.resultCode === 0){
    dispatch(GetAuthUserDataTC())
  }
})
  dispatch(initializedAppAC(true))
}
