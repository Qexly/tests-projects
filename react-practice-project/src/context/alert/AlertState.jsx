import React, {useReducer} from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types.js";
import AlertContext from './alertContext.js';
import alertReducer from "./alertReducer.js";

const AlertState = (props) => {
    let {children} = props;

    const [state, dispatch] = useReducer(alertReducer, {
        visible: false,
    })

    const show = (text, type='warning') => dispatch({
        type: SHOW_ALERT,
        payload: {text, type},
    });
    const hide = () => dispatch({
        type: HIDE_ALERT,
    });

    return (
        <AlertContext.Provider value={{alertState: state, show, hide}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState;