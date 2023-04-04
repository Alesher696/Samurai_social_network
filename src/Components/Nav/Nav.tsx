import React from "react";
import n from "./Nav.module.css"
import h from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import start from './icons/play-store (1).png'
import message from './icons/letter (1).png'
import music from './icons/music-player (1).png'
import users from './icons/multiple-users-silhouette (1).png'
import settings from './icons/gear (1).png'

export const Nav = () => {
    return (
        <div className={n.navPanel}>
            <div className={n.navLinks}>

                <NavLink
                    className={n.btn}
                    to='/profile'>
                    <div className={n.btnLink}>
                        <img src={start} className={n.icons}/>

                       <span className={n.spanText}>
                             Start page
                       </span>

                    </div>
                </NavLink>

                <NavLink
                    className={n.btn}
                    to='/dialogs'>
                    <div className={n.btnLink}>
                        <img src={message} className={n.icons}/>
                        <span className={n.spanText}>
                             Messages
                       </span>
                    </div>
                </NavLink>

                <NavLink
                    className={n.btn}
                    to='/music'>
                    <div className={n.btnLink}>
                        <img src={music} className={n.icons}/>
                        <span className={n.spanText}>
                            Music
                       </span>
                    </div>
                </NavLink>

                <NavLink
                    className={n.btn}
                    to='/users'>
                    <div className={n.btnLink}>
                        <img src={users} className={n.icons}/>
                        <span className={n.spanText}>
                             Users
                       </span>
                    </div>
                </NavLink>

                <div className={n.space}/>

                <NavLink
                    className={n.btn}
                    to='/users'>
                    <div className={n.btnLink}>
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