import React from "react";
import s from "./Notes.module.css";

const Notes = (props) => {

    let {notes, onRemove} = props;
    return (
        <ul>
            {
                notes.map((item) => <li className={`${s.note}`} key={item.id}>
                    <div>
                        <strong>{item.title}</strong>
                        <small>{item.date}</small>
                    </div>
                    <button onClick={() => onRemove(item.id)} className={`${s.del}`}>&times;</button> 
                </li>)
                
            }
        </ul>
    )
}

export default Notes;