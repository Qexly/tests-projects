import React from 'react';
import s from './MobileHeader.module.css';
import menu_icon from './../../../imgs/mobile_menu_icon.png';

const MobileHeader = (props) => {
    return (
        <div className={s.header}>
            <span>
                <img src={menu_icon} alt=""/>
            </span>
        </div>
    )
}

export default MobileHeader;