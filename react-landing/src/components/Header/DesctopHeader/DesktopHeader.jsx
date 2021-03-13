import React from 'react';
import s from './DesktopHeader.module.css';
import { NavLink } from 'react-router-dom'


const DesktopHeader = (props) => {
    const {color, fontFamily, items} = props;
    return (
        <div className={s.header_wrap}>
            <header style={{color, fontFamily}}>
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </header>
            <hr style={{backgroundColor: color}} />
        </div>
    )
}

export default DesktopHeader;