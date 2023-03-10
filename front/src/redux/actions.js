import axios from "axios"
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTER"
export const GET_CHARACTERS_DETAIL = "GET_CHARACTERS_DETAIL"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const SALUDAR = "SALUDAR"
export const ClEAN_FAVORITES = "SALUDAR"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const CHARGE_FILTER_CHARACTERS = "CHARGE_FILTER_CHARACTERS "
export const INPUT_ID = "INPUT_ID"


export const getAllCharacters = () => {
    return async function (dispatch) {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then(response => response.json())
            .then(data => dispatch({ type: GET_ALL_CHARACTERS, payload: data.results }))
    }
}

export const getCharactersDetail = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        return dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data })
    }
}
export const addFavorite = (favorite) => {

    return { type: ADD_FAVORITE, payload: favorite }


}
export const deleteFavorite = (id) => {

    return { type: DELETE_FAVORITE, payload: id }


}

export const deleteCharacter = (id) => {

    return { type: DELETE_CHARACTER, payload: id }
}

export const cleanFavorites = () => {

    return { type: ClEAN_FAVORITES, payload: [] }
}

export const chargeFilterCharacters = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/rickandmorty/character")
            .then(response => response.json())
            .then(data => dispatch({ type: CHARGE_FILTER_CHARACTERS, payload: data }))
            .catch(error => error)

    }
}
export const SendinputId = (id) => {

    return { type: INPUT_ID, payload: id }


}




