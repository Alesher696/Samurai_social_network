import React from 'react';
import f from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={f.footerBlock}>
            <div className={f.links}>
                <div>Home</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>FAQs</div>
                <div>About</div>
            </div>
            <div className={f.border}></div>
            <div>
                <span>© 2023 Company, Inc</span>
            </div>

        </div>
    );
};

