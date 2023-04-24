import React from "react";
import n from "./Nav.module.css"
import {NavLink, useLocation} from "react-router-dom";
import start from './icons/play-store (1).png'
import message from './icons/letter (1).png'
import music from './icons/music-player (1).png'
import users from './icons/multiple-users-silhouette (1).png'
import settings from './icons/gear (1).png'
import {useSelector} from "react-redux";
import {storeType} from "../../redux/redux-store";


type NavPropsType={
    activeButton:boolean
}
export const Nav = (props:NavPropsType) => {

    const profileId = useSelector<storeType>(state=> state.profilePage.profile?.userId)
    const buttonsName = ['start', 'messages', 'users', 'music', 'settings']
    const [btnName,setBtnName] = React.useState('start')
    const onClickButtonHandler=(value:string)=>{
        setBtnName(value)
    }

    const location = useLocation();
    const isActiveProfile = location.pathname === `/profile/${profileId}`;
    const isActiveUsers = location.pathname === '/users';
    //isActive нужен параметр айди

    return (
        <div className={props.activeButton ? n.navPanel : n.navPanelClosed}>
            <div className={n.navLinks}>

                <NavLink
                    onClick={()=>onClickButtonHandler('start')}
                    className={n.btn}
                    to='/profile/2'>
                    <div className={isActiveProfile ? n.btnLinkActive : n.btnLink}>

                        <img src={start} className={n.icons}/>
                       <span className={n.spanText}>
                             Start page
                       </span>

                    </div>
                </NavLink>

                <NavLink
                    onClick={()=>onClickButtonHandler('messages')}
                    className={n.btn}
                    to='/dialogs'>
                    <div className={btnName === 'messages' ? n.btnLinkActive : n.btnLink}>
                        <img src={message} className={n.icons}/>
                        <span className={n.spanText}>
                             Messages
                       </span>
                    </div>
                </NavLink>

                <NavLink
                    onClick={()=>onClickButtonHandler('music')}
                    className={n.btn}
                    to='/music'>
                    <div className={btnName === 'music' ? n.btnLinkActive : n.btnLink}>
                        <img src={music} className={n.icons}/>
                        <span className={n.spanText}>
                            Music
                       </span>
                    </div>
                </NavLink>

                <NavLink
                    onClick={()=>onClickButtonHandler('users')}
                    className={n.btn}
                    to='/users'>
                    <div className={isActiveUsers ? n.btnLinkActive : n.btnLink}>
                        <img src={users} className={n.icons}/>
                        <span className={n.spanText}>
                             Users
                       </span>
                    </div>
                </NavLink>

                <div className={n.space}/>

                <NavLink
                    onClick={()=>onClickButtonHandler('settings')}
                    className={n.btn}
                    to='/users'>
                    <div className={btnName === 'settings' ? n.btnLinkActive : n.btnLink}>
                        <img src={settings} className={n.icons}/>
                        <span className={n.spanText}>
                             Settings
                       </span>
                    </div>
                </NavLink>


            </div>
        </div>
    )
}