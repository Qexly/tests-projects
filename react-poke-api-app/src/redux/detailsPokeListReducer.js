import { pokelistQueries } from "../api/api";

const TOGGLE_FETCH = Symbol('TOGGLE_FETCH');
const SET_DETAILS_LIST = Symbol('SET_DETAILS_LIST');
const SET_OPENED_POKE = Symbol('SET_OPENED_POKE');
const UNSET_OPENED_POKE = Symbol('UNSET_OPENED_POKE');

const initState = {
    detailsList: [],
    fetching: true,
    openedPokePage: null,
} 

const detailsPokelistReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FETCH:
            return {
                ...state,
                fetching: action.toggle,
            }
        case SET_DETAILS_LIST: 
            return {
                ...state,
                detailsList: action.list,
            }
        case SET_OPENED_POKE: 
            return {
                ...state,
                openedPokePage: action.pokemon,
            }
        case UNSET_OPENED_POKE:
            return {
                ...state,
                openedPokePage: null,
            }
        default:
            return state
    }
}

const toggleFetch = (toggle) => ({type: TOGGLE_FETCH, toggle});

const setList = (list) => ({type: SET_DETAILS_LIST, list});

const setOpenedPokePage = (pokemon) => ({type: SET_OPENED_POKE, pokemon});

export const unsetOpenedPoke = () => ({type: UNSET_OPENED_POKE})

export const setOpenedPokePageTC = (url) => {
    return (dispatch) => {
        pokelistQueries.getDetailsPokelist(url).then(
            (res) => dispatch(setOpenedPokePage(res.data))
        )
    }
}

export const setListTC = (list) => {
    let promises = [];
    return (dispatch) => {
        dispatch(toggleFetch(true));
        list.forEach(item => {
            const url = item.url.slice(26);
            promises.push(pokelistQueries.getDetailsPokelist(url).then(
                (response) => response.data,
                (error) => error
            ));
        });
        Promise.all(promises).then(
            (arrayOfData) => {
                dispatch((setList(arrayOfData)));
                dispatch(toggleFetch(false));
            }
        )
    }
}

export default detailsPokelistReducer;