import React, { useEffect, useRef, useState } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './ListPage.module.css';

const ListPage = (props) => {
    const {pokelist} = props; 
    const [scrollsCount, setScrollsCount] = useState(0);
    const [currentScroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);
    const scroller = useRef();
    const ul = useRef();
   
    
    useEffect(() => {
        setTop(((scroller.current.offsetHeight * currentScroll) * -1) + 'px');
    }, [currentScroll])

    useEffect(() => {
        setScrollsCount(Math.ceil(ul.current.offsetHeight / scroller.current.offsetHeight) - 1);
    }, [])

    const onUpClickHandler = (e) => {
        if (currentScroll === 0) return;
        setScroll((currentScroll) => --currentScroll);
    }

    const onDownClickHandler = (e) => {
        if (currentScroll === scrollsCount) return;
        setScroll((currentScroll) => ++currentScroll);
    }

    return (
        <div className={`${s.list_container}`}>
            <h3>Список покемонов</h3>
            <span onClick={onUpClickHandler}>&and;</span>
            <div className={s.scroller} ref={scroller}>
                <ul ref={ul} style={{top}}>
                    {
                        pokelist.map((item) => <li key={item.name}><NavLink to={item.url.slice(25)}>{item.name}</NavLink></li>)
                    }
                </ul>
            </div>
            <span onClick={onDownClickHandler}>&or;</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokelist: state.pokelist.pokelist
    }
}

export default connect(mapStateToProps)(ListPage);