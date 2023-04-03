import React from 'react';
import u from "./users.module.css";
import axios from "axios";
import {UsersPropsType} from "./usersContainer";

export class UsersC extends React.Component <UsersPropsType, {}>{

    constructor(props:UsersPropsType){
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }


    render() {
        return (
            <div className={u.usersContainer}>
                {
                    this.props.usersPage.map(u => (
                        <div key={u.id}>
                            <div><img/></div>
                            <span>{u.name}</span>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                            </div>
                            <span>{u.status}</span>
                            <div>
                                <span>{'u.location.country'}</span>
                                <br/>
                                <span>{'u.location.city'}</span>
                            </div>
                        </div>))
                }
            </div>)
    }


}


// import React from 'react';
// import {UsersType} from "../../redux/users-reducer";
// import styled from "styled-components";
// import axios from "axios";
// import {avatar} from "../../assets/images/avatar";
//
//
// type PropsType = {
//     usersPage: UsersType[]
//     followHandler: (userId: number) => void
//     unFollowHandler: (userId: number) => void
//     setUsersHandler: (users: UsersType[]) => void
// }
//
//
// export class Users extends React.Component<PropsType> {
//     constructor(props: PropsType) {
//         super(props);
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((responce) =>
//             this.props.setUsersHandler(responce.data.items)
//         )
//     }
//
//     render() {
//         return (
//             <Wrapper>
//                 {this.props.usersPage.map(el => {
//                     return (
//                         <WrapperSide key={el.id}>
//                             <LeftSide>
//                                 <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
//                                 <div>
//                                     {el.followed
//                                         ? <button onClick={() => this.props.unFollowHandler(el.id)}>Follow</button>
//                                         : <button onClick={() => this.props.followHandler(el.id)}>UnFollow</button>
//                                     }
//                                 </div>
//
//                             </LeftSide>
//                             <RightSide>
//                                 <DivForMargin>
//                                     <div>{el.id}</div>
//                                     <div>{el.name}</div>
//                                     <div>{el.status}</div>
//                                     {/*<div>{el.location.city}</div>*/}
//                                     {/*<div>{el.location.counry}</div>*/}
//                                 </DivForMargin>
//                             </RightSide>
//
//                         </WrapperSide>
//
//                     )
//                 })}
//             </Wrapper>
//         );
//     }
// }
//
// const Wrapper = styled.div`
//   width: 100%;
//   //background-color: chartreuse;
// `
//
// const WrapperSide = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   //height: 100px;
//   //background-color: #ecb4c6;
//   margin-bottom: 10px;
// `
//
// const LeftSide = styled.div`
//   //background-color: #f5f50a;
//   min-width: 5%;
//   margin-bottom: 10px;
//   text-align: center;
//
//   & > img {
//     width: 50px;
//   }
// `
//
// const RightSide = styled.div`
//   //background-color: #1e3786;
//   width: 95%;
//   margin-bottom: 10px;
// `
//
// const DivForMargin = styled.div`
//   //background-color: #1e3786;
//   margin-left: 15px;
// `