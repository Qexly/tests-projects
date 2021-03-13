import React from 'react';
import s from './About.module.css';
import jason_ph from './../../imgs/jason_wood_ph.png';
import jason_ph_mobile from './../../imgs/jason_wood_mobile.png';
import { useMediaQuery } from 'react-responsive';

const About = (props) => {

    const isMobile = useMediaQuery({
        query: '(max-width: 321px)'
    });

    return (
        <div className={s.about_content}>
            <div className={s.photo}>
                {
                    isMobile ? 
                        <img src={jason_ph_mobile} alt="" />
                        : 
                        <img src={jason_ph} alt="" />
                }
            </div>
            <div className={s.text_content}>
                <h3>ABOUT ME</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus esse officia mollitia ullam officiis consequuntur quaerat expedita. Quaerat quo dolorem iure. Dolor, quasi fugit pariatur nisi soluta cupiditate nemo blanditiis ipsum quia ea?
            </p>
                <p>
                    Eligendi praesentium mollitia nesciunt quaerat vel sed molestias iste excepturi aspernatur, ea natus debitis veniam eaque!
            </p>
                <p className={s.sign}>
                    Jason Wood
            </p>
            </div>
        </div>
    )
}
    


export default About