import {SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE} from './../types.js';

const firebaseReducer = (state, action) => {
    switch (action.type) {
        case SHOW_LOADER: return {
            ...state,
            loading: true,
        }
        case ADD_NOTE: return {
            ...state,
            notes: [...state.notes, action.payload],
        }
        case FETCH_NOTES: return {
            ...state,
            notes: action.payload,
            loading: false,
        }
        case REMOVE_NOTE: return {
            ...state,
            notes: state.notes.filter((item) => item.id !== action.payload),
        }
        default:
            return state
    }
}

export default firebaseReducer;