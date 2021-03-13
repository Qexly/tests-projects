import React, {useContext} from "react";
import AlertContext from "../../context/alert/alertContext";
import s from './Alert.module.css';

const Alert = (props) => {
    let {alertState, show, hide} = useContext(AlertContext);

    if (!alertState.visible) return null

    return (
        <div className={`${s.alert} ${alertState.type === 'warning' ? s.warning : s.success}`}>
            <span>
                <strong>Внимание! </strong>{alertState.text}
            </span>
            <button onClick={hide} className={s.close}>
                <span>&times;</span>
            </button>
        </div>
    )
}

export default Alert;