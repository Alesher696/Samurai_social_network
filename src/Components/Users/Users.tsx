import React from 'react';
import axios from "axios";
import u from './users.module.css'



// export const Users = (props: UsersPropsType) => {
//     const getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     return (
//
//         <div className={u.usersContainer}>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.usersPage.users.map(u => (
//                     <div key={u.id}>
//                         <div><img/></div>
//                         <span>{u.name}</span>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
//                                 : <button onClick={() => props.follow(u.id)}>Follow</button>}
//                         </div>
//                         <span>{u.status}</span>
//                         <div>
//                             <span>{'u.location.country'}</span>
//                             <br/>
//                             <span>{'u.location.city'}</span>
//                         </div>
//                     </div>))
//             }
//         </div>
//     );
// }

