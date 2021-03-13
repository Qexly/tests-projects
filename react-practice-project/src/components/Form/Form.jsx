import React, {useState, useContext} from "react";
import AlertContext from "../../context/alert/alertContext";
import FirebaseContext from "../../context/firebase/firebaseContext";
import firebaseReducer from "../../context/firebase/firebaseReducer";
import s from './Form.module.css';

const Form = (props) => {
    const [value, setValue] = useState('');
    let {alertState, show, hide} = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const sumbitHandler = (e) => {
        e.preventDefault();
        if (value.trim()) {
            firebase.addNote(value).then(
                () => show(`Заметка создана: "${value}"`, 'success'),
                () => show(`Что-то сломалось :(`, 'warning')
            )
            setValue('');
        } else {
            show('Введите текст!', 'warning');
        }
        
    }
    console.log('Form rendering');
    return (
        <form onSubmit={sumbitHandler}>
            <input className={`${s.note}`} type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите название заметки"/>
        </form>
    )
}

export default Form;

