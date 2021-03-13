import React, {useContext, useEffect} from "react";
import Form from "../../components/Form/Form";
import { Loader } from "../../components/Loader/Loader";
import Notes from "../../components/Notes/Notes";
import FirebaseContext from "../../context/firebase/firebaseContext";

const Home = () => {
    const {state, fetchNotes, removeNote} = useContext(FirebaseContext);
    const {notes, loading} = state;

    useEffect(() => {
        fetchNotes();
    }, [])
    console.log('Home rendering');
    return (
        <>
            <Form />
            <hr />
            {
                loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote}/>
            }
        </>
    )
}

export default Home;