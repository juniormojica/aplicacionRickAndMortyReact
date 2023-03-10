
import {
    GET_ALL_CHARACTERS,
    GET_CHARACTERS_DETAIL,
    ADD_FAVORITE,
    DELETE_CHARACTER,
    ClEAN_FAVORITES,
    DELETE_FAVORITE,
    CHARGE_FILTER_CHARACTERS,
    INPUT_ID
} from "./actions"


const initialState = {
    characters: [],
    charactersDetail: {},
    favorites: [],
    filterCharacters: [],
    inputId: null

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CHARACTERS:

            return { ...state, characters: payload }

        case CHARGE_FILTER_CHARACTERS:

            return { ...state, filterCharacters: payload }


        case GET_CHARACTERS_DETAIL:

            return { ...state, charactersDetail: payload }
        case ADD_FAVORITE:


            return {
                ...state, favorites: [...state.favorites, payload]
            }

        case DELETE_CHARACTER:
            const newCharacters = state.characters.filter((el) => {
                return el.id !== payload
            })
            return { ...state, characters: newCharacters }

        case DELETE_FAVORITE:
            const newFavorites = state.favorites.filter((el) => {
                return el.id !== payload
            })
            return { ...state, favorites: newFavorites }

        case ClEAN_FAVORITES:

            return { ...state, favorites: payload }

        case INPUT_ID:

            return { ...state, inputId: payload }


        default:
            return { ...state }
    }
}




export default reducer 