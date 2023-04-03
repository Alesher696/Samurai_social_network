// import {dialogsReducer} from "./dialogs-reducer"
// import {profileReducer} from "./profile-reducer";
// import {ActionType} from "./types";
//
// const store: any = {
// //export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, data: "Hello its my first", like: 9},
//                 {id: 2, data: "Hello its my second", like: 15},
//                 {id: 3, data: "What's up guys?", like: 2},
//             ],
//             newPostText: 'Что у вас нового?',
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Yo'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'How a you?'},
//                 {id: 4, message: "What's up?"},
//                 {id: 5, message: 'When you invite me???'},
//                 {id: 6, message: 'I love u man'},
//             ],
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Alex'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Andrey'},
//                 {id: 5, name: 'Max'},
//                 {id: 6, name: 'Anya'}
//             ],
//             newMessageBody: '',
//         },
//         sideBar: [],
//     },
//
//     subscribers: [] as any[],
//     getState() {
//         return this._state
//     },
//     /**
//      * Subscribe on event "state-changed"
//      * @param observerFunction function that will be called when stae will be changed
//      */
//     subscribe(observerFunction: any) {
//         this.subscribers.push(observerFunction)
//
//         return () => {
//             this.subscribers = this.subscribers.filter((s: any) => s !== observerFunction)
//         }
//     },
//
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(store._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
//         //this.subscriber();
//         this.subscribers.forEach((sub: () => any) => sub())
//     }
// }
//
// // publisher (observable) (event) - subscriber/observer/listener/handler <- FUNCTION
//
// //input.addEventListener('click', () => {})
// //input.addEventListener('change', () => {})
//
// const unsubscribe1 = store.subscribe(()=>{ console.log(store.getState())})
//
//
//  export const unsubscribe2 = store.subscribe(()=>{ console.log(store.getState()) })
//store.subscribe(()=>{})

export const unsubscribe2 = 2
