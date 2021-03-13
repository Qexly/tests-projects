import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Card.module.css';


const Card = (props) => {

    const {imgsrc, number, name, weight} = props;

    return (
        <NavLink to={`/pokemon/${number}`}>
            <div className={`${s.card}`} tabIndex="0" >
                <div className={s.icon}>
                    <img src={imgsrc} alt='' />
                </div>
                <p className={s.number}><span>{number}</span></p>
                <h3 className={s.name}>{name}</h3>
                <span className={s.weight}>Weight: {weight}</span>
            </div>
        </NavLink>
    )
}

export default Card;