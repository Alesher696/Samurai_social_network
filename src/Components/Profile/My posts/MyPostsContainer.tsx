import React from 'react';
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    InitialStateType,
    updateNewPostTextAC
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    profilePage: InitialStateType
}

type mapDispatchPropsType = {
    addPost: () => void
    onFocusHandler: ()=> void
    onChangeHandler: (value: string)=> void
}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType


const mapStateToProps = (state: storeType): mapStatePropsType => {
    return {
       profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
            dispatch(updateNewPostTextAC("Что у вас нового?"))
        },
        onFocusHandler: () => {
            dispatch({type: 'UPDATE-NEW-POST-TEXT', text: ""})
        },
        onChangeHandler: (value: string) => {
            dispatch({type: "UPDATE-NEW-POST-TEXT", text: value})
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


// type MyPostContainerType = {
// }
//
// export const MyPostsContainer: React.FC<MyPostContainerType> = () => {
//
//     //Обращение к элементу через REF
//     // let newPostElement = React.createRef<HTMLTextAreaElement>()
//
//     return (
//         <MyContext.Consumer>
//             {
//             (store) => {
//                 const state = store.getState()
//
//                 const onChangeHandler = (value: string) => {
//                     // props.updateNewPostText(e.currentTarget.value)
//                     store.dispatch({type: "UPDATE-NEW-POST-TEXT", text: value})
//
//                 }
//                 const addPost = () => {
//                     // props.addPost()
//                     store.dispatch(addPostAC())
//                     store.dispatch(updateNewPostTextAC("Что у вас нового?"))
//                 }
//
//                 const onFocusHandler = () => {
//                     store.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: ""})
//                 }
//
//                 return <MyPosts addPost={addPost} onChangeHandler={onChangeHandler} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts}
//                          onFocusHandler={onFocusHandler}/>
//             }
//
//         }
//         </MyContext.Consumer>
//     )
// }

