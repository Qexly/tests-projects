import React from 'react';
import Loading from './35.svg';
import './Loader.css';

export const Loader = () => {
    return (
        <div className="loader">
            <img src={Loading} />
        </div>
    )
}