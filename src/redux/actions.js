import axios from "axios"
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTER"
export const GET_CHARACTERS_DETAIL = "GET_CHARACTERS_DETAIL"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const SALUDAR = "SALUDAR"



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
export const addFavorite = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        return dispatch({ type: ADD_FAVORITE, payload: response.data.results })
    }

}
export const deleteCharacter = (id) => {

    return { type: DELETE_CHARACTER, payload: id }
}


export const saludar = () => {

    return { type: SALUDAR, payload: "Hola" }
}


