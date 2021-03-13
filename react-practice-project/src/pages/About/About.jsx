import React from "react";
import s from "./About.module.css";


const About = () => {
    console.log('About rendering');
    return (
       <div className={`${s.about}`}>
           <h1>Лучшее React приложение</h1>
           <p>Версия приложения: 1.0.0</p>
       </div>
    )
}

export default About;