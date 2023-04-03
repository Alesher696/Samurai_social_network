import React from "react";

import {NavLink} from "react-router-dom";
import h from './Header.module.css'

export function Header() {
    return (
        <div className={h.Header}>
            <div className={h.btns}>
                <NavLink
                    className={h.btn}
                to='/profile'>Start page</NavLink></div>
            <div className={h.btns}>
                <NavLink
                    className={h.btn}
                to='/dialogs'>Messages</NavLink>
            </div>
            <div className={h.btns}>
                <NavLink
                    className={h.btn}
                    to='/music'>Music</NavLink>
            </div>
            {/*<div className={h.btns}>*/}
            {/*    <NavLink*/}
            {/*        className={h.btn}*/}
            {/*        to='/friends'>Friends</NavLink>*/}
            {/*</div>*/}
            <div className={h.space}/>

            <div className={h.btns}>
                <NavLink
                    className={h.btn}
                    to='/users'>Users</NavLink>
            </div>

        </div>
    )
}














