import React, {useContext, useReducer} from "react";
import FirebaseContext from './firebaseContext.js';
import firebaseReducer from "./firebaseReducer.js";
import axios from 'axios';
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types.js";

const url = `https://react-notes-3448f-default-rtdb.europe-west1.firebasedatabase.app/`;

const FirebaseState = (props) => {
    let {children} = props;

    let [state, dispatch] = useReducer(firebaseReducer, {
        notes: [],
        loading: false,
    })

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = () => {
        showLoader()
        axios.get(`${url}/notes.json`).then(
            (response) => {
                const payload = Object.keys(response.data).map((key) => ({
                    ...response.data[key],
                    id: key,
                }))
                dispatch({type: FETCH_NOTES, payload});
            }
        )
    }

    const addNote = (title) => {
        const note = {
            title,
            date: new Date().toJSON()
        }
        return axios.post(`${url}/notes.json`, note).then(
            (response) => {
                const payload = {...note, id: response.data.name}; //new note here
                dispatch({type: ADD_NOTE, payload});
            }
        )
    }

    const removeNote = (id) => {
        axios.delete(`${url}/notes/${id}.json`);
        dispatch({type: REMOVE_NOTE, payload: id});
    }
    console.log('FirebaseState rendering');
    return (
        <FirebaseContext.Provider value={{state, 
            showLoader,
            fetchNotes,
            addNote,
            removeNote}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;