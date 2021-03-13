import React from 'react';
import s from './DesktopHeader.module.css';
import poke_logo from './../../../imgs/poke_logo.png';
import { NavLink } from 'react-router-dom';

const DesktopHeader = (props) => {
    return (
        <header className={s.desktop}>
            <div className={s.header_container}>
                <div className={s.logo}>
                    <img src={poke_logo} alt=""/>
                </div>
                <ul>
                    <li>
                        <NavLink to='/'>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to='/list'>Все покемоны</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default DesktopHeader;