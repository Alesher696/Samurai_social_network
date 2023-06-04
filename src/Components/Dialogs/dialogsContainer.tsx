import React from 'react';
import {Dialogs} from "./dialogs";
import {
    initialStateType,
    SendMessageAC,
    UpdateNewMessageBodyAC
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStatePropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}

type mapDispatchPropsType = {
    addNewMessage: (value: string) => void
    sendMessage: () => void
}

export type DialogsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: storeType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNewMessage: (value: string) => {
            dispatch(UpdateNewMessageBodyAC(value))
        },
        sendMessage: () => {
            dispatch(SendMessageAC())
        },
    }
}

const mapStateToPropsForRedirect = (state:storeType)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

const AuthRedirectComponent = withAuthRedirect(Dialogs)
const AuthRedirectComponentForConnect = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponentForConnect)

//
// type DialogsContainerType={
// }
//
// export const DialogsContainer: React.FC<DialogsContainerType> = () => {
//
//     return (
//         <MyContext.Consumer>
//             {(store) => {
//             const state = store.getState()
//
//             const addNewMessage = (value:string) => {
//                 store.dispatch(UpdateNewMessageBodyAC(value))
//             }
//
//             const sendMessage = () => {
//                 store.dispatch(SendMessageAC())
//             }
//
//             return <Dialogs addNewMessage={addNewMessage} sendMessage={sendMessage}
//                      newMessageBody={state.dialogsPage.newMessageBody}
//                      dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}
//         }
//         </MyContext.Consumer>
//
//     );
// };

