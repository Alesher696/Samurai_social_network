import {combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


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
    auth: authReducer
})



export type storeType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;