import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import detailsPokelistReducer from './detailsPokeListReducer';
import pokelistReducer from './pokelistReducer';

const reducers = combineReducers({ 
    pokelist: pokelistReducer, 
    detailsPokeList: detailsPokelistReducer,
    app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));  window.store = store;

export default store;