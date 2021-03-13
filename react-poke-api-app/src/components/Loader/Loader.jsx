import React from 'react';
import Loading from './35.svg';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <span>Loading...</span>
            <img src={Loading} alt=''/>
        </div>
    )
}

export default Loader;