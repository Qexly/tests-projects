import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})
 
export const pokelistQueries = { 
    getPokelist() {
        return instance.get(`pokemon/?limit=180&offset=0`);
    },
    getDetailsPokelist(url) {
        return instance.get(url);
    }
}