import { getPokelist } from "./pokelistReducer";

const SUCCES_INI = Symbol('SUCCES_INI');

const initState = {
    initialized: false,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCES_INI:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

const succesInit = () => ({type: SUCCES_INI});

export const doInitialization = () => {
    return (dispatch) => {
        dispatch(getPokelist()).then(
            () => dispatch(succesInit())
        )
    }
}

export default appReducer;

