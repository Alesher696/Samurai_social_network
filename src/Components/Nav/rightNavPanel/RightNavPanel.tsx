import React, {useState} from 'react';
import r from './RightNavPanel.module.css'
import dialogs from './icons/speech-bubble (2) (1).png'
import folder from './icons/folder (1) (1).png'
import setting from './icons/setting (1) (1).png'
import arrow from './icons/up-arrows-angles-couple (2).png'

export const RightNavPanel = () => {

    const [showFriendPanel, setShowFriendPanel] = useState(false)
    const [active, setActive] = useState(false)
    const OnClickHandler = () => {
        setShowFriendPanel(!showFriendPanel)
    }
    const onClickActive = () => {
        setActive(!active)
    }


    return (
        <div>
            <div className={r.navPanel}>
                <div>
                    <div className={active ? `${r.element} ${r.isActive}` : r.element} onClick={onClickActive}>
                        <img src={dialogs} className={r.icons}/>
                        <span>All Dialogs</span>
                    </div>
                    <div className={r.element}>
                        <img src={folder} className={r.icons}/>
                        <span>новости</span>
                    </div>
                    <div className={r.element}>
                        <img src={folder} className={r.icons}/>
                        <span>учеба</span>
                    </div>
                    <div className={r.element}>
                        <img src={folder} className={r.icons}/>
                        <span>Контент</span>
                    </div>
                    <div className={r.element}>
                        <img src={setting} className={r.icons}/>
                        <span>Edit</span>
                    </div>
                </div>
                <div className={r.element}>
                    <img src={arrow} className={r.arrow} onClick={OnClickHandler}/>
                    {showFriendPanel ? <div className={r.friendList}>el</div> : ''}
                </div>

            </div>

        </div>

    );
};

