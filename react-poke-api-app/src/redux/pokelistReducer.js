import { pokelistQueries } from "../api/api.js";

const SET_POKELIST = Symbol('SET_POKELIST');

const initState = {
    pokelist: null,
}

const pokelistReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_POKELIST:
            return {
                ...state,
                pokelist: action.pokelist,
            }
        default:
            return state;
    }
}
//AC
const setPokelist = (pokelist) => ({type: SET_POKELIST, pokelist});
//TC
export const getPokelist = () => {
    return (dispatch) => {
        return pokelistQueries.getPokelist().then(
            (response) => {
                dispatch(setPokelist(response.data.results))
            }
        )
    }
}

export default pokelistReducer;