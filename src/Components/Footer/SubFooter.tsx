import React from 'react';
import f from './Footer.module.css'
import {NavLink} from "react-router-dom";
import h from "../Header/Header.module.css";

export const SubFooter = () => {
    return (
        <div className={f.subFooter}>
            <div className={f.news}>Подпишись на новости</div>

            <div className={f.icons}>
                    <a className={f.iconVK} href={'https://vk.com/'} target="_blank"></a>
                    <a className={f.iconFB} href={'https://facebook.com/'} target="_blank"></a>
                    <a className={f.iconYT} href={'https://youtube.com/'} target="_blank"></a>
                    <a className={f.iconTL} href={'https://web.telegram.org'} target="_blank"></a>
                    <a className={f.iconWU} href={'https://www.whatsapp.com/?lang=ru/'} target="_blank"></a>
            </div>
        </div>
    );
};

