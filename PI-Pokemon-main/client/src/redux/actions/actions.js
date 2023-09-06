import axios from "axios";
const DEPLOY = "https://poke-back-end.onrender.com";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get(`${DEPLOY}/pokemons`, {});

    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function reloadPokemons() {
  return {
    type: "RELOAD_POKEMONS",
  };
}

export function getTypes() {
  return async function (dispatch) {
    var info = await axios.get(`${DEPLOY}/types`, {});

    return dispatch({
      type: "GET_TYPES",
      payload: info.data,
    });
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    const pokemon = await axios.post(`${DEPLOY}/pokemons`, payload);

    return {
      type: "POST_POKEMON",
      payload: pokemon,
    };
  };
}

export function getPokemonName(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${DEPLOY}/pokemons?name=` + name);
      // console.log(json.data)

      return dispatch({
        type: "GET_POKEMON_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: "GET_POKEMON_NAME",
        payload: ["Pokemon"],
      });
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${DEPLOY}/pokemons/` + id);

      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeDetail() {
  return {
    type: "REMOVE_DETAILS",
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPES",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByNameOrStrengh(payload) {
  return {
    type: "ORDER_BY_NAME_OR_STRENGH",
    payload,
  };
}
