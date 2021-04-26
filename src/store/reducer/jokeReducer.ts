import {JokeActions, JokeActionTypes, JokeState} from "../../types/joke";

const initialState: JokeState = {
    jokes: [],
    id: null,
    loading: false,
    error: null
}

export const jokeReducer = (state = initialState, action: JokeActions): JokeState => {
    switch (action.type) {
        case JokeActionTypes.JOKE:
            return {
                ...state,
                loading: true
            }
        case JokeActionTypes.JOKE_SUCCESS:
            return {
                ...state,
                loading: false,
                jokes: [...state.jokes, ...action.payload]
            }
        case JokeActionTypes.ALL_JOKE_SUCCESS:
            return {
                ...state,
                loading: false,
                jokes: action.payload
            }
        case JokeActionTypes.SAVE_JOKE_ID:
            return {
                ...state,
                id: action.payload,
            }

        case JokeActionTypes.JOKE_ERROR:
            return {
                ...state,
                error: action.payload,
                jokes: []
            }
        default:
            return state
    }
}