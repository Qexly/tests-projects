import React from 'react';
import s from './Nextscroll.module.css';

const Nextscroll = (props) => {
    let {text, icon, scrolltarget} = props;

    const onScrollClickHandler = (e) => {
        if (scrolltarget) {
            scrolltarget.current.scrollIntoView(); 
        }
    }

    return (
        <div className={s.scroll_arrow} >
            <span className={s.scroll_text}>{text}</span>
            <div className={s.arrow} onClick={onScrollClickHandler}>
                <img src={icon} alt='click me' />
            </div>
        </div>
    )
}

export default Nextscroll;