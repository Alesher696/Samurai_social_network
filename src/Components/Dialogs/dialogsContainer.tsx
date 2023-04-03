import React from 'react';
import {Dialogs} from "./dialogs";
import {
    dialogsPropsType,
    initialStateType,
    messagesPropsType,
    SendMessageAC,
    UpdateNewMessageBodyAC
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    dialogsPage: initialStateType
}

type mapDispatchPropsType = {
    addNewMessage: (value: string) => void
    sendMessage: () => void
}

export type DialogsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: storeType) => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


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

