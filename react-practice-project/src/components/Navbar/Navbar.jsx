import React from "react";
import s from "./navbar.module.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    console.log('Navbar rendering');
    return (
        <header>
            <div className={`${s.container}`}>
                <nav className={`${s.navbar}`}>
                    <span className={`${s.title} ${s.border}`}>Note App</span>
                    <ul className={`${s.links} ${s.border}`}>
                        <li>
                            <NavLink to="/" exact activeClassName={s.active} >Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeClassName={s.active}>Информация</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;