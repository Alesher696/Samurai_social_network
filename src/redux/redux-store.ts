import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileActions, profileReducer} from "./profile-reducer";
import {dialogsActions, dialogsReducer} from "./dialogs-reducer";
import {usersActions, usersReducer} from "./users-reducer";
import {authActions, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch } from "redux-thunk"
import {appActions, appReducer} from "../../src/redux/app-reducer";


declare global {
    interface Window {
        REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
    }
}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof store.getState>
export type storeType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = ThunkDispatch<RootState, unknown,ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>


export type ActionsType = profileActions | dialogsActions | usersActions | authActions | appActions

// @ts-ignore
window.store = store;
