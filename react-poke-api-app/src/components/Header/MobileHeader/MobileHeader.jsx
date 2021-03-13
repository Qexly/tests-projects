import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './MobileHeader.module.css';
import icon from './li.svg';

const MobileHeader = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const {list} = props;
    const active = isOpen ? s.active : null;

    return (
        <>
            <header className={s.mobile}>
                <div className={s.burger_btn} onClick={(e) => setIsOpen((prevSt => !prevSt))}>
                    <span></span>
                </div>
            </header>

            <div className={`${s.menu} ${active}`}>
                <ul>
                    {
                        list.map((item) => {
                            return (
                                <li key={item.href} onClick={() => setIsOpen(false)}>
                                    <NavLink to={item.href}>{item.value}</NavLink>
                                    <img src={icon} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default MobileHeader;