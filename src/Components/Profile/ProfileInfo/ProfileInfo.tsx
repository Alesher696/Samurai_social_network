import React from "react";
import p from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
            <div className={p.container}>
                <div className={p.avatar}></div>
                <div className={p.profileInfo}>Info</div>
            </div>

    )
}