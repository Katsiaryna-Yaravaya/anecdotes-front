import {Dispatch} from "redux";
import axios from "axios";
import {JokeActions, JokeActionTypes} from "../../types/joke";

export const axiosJoke = () => {
    return async (dispatch: Dispatch<JokeActions>) => {
        try {
            dispatch({type: JokeActionTypes.JOKE})
            const response = await axios.get('http://localhost:8080/')
            dispatch({type: JokeActionTypes.ALL_JOKE_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: JokeActionTypes.JOKE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}

export const axiosAddJoke = () => {
    return async (dispatch: Dispatch<JokeActions>) => {
        try {
            const response = await axios.post('http://localhost:8080/')
            dispatch({type: JokeActionTypes.JOKE_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: JokeActionTypes.JOKE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}


export const saveCurrentId = (id) => {
    return (dispatch: Dispatch<JokeActions>) => {
        dispatch({type: JokeActionTypes.SAVE_JOKE_ID, payload: id})
    }
}


/*export const axiosJokeCompanyById = (id) => {
    return async (dispatch: Dispatch<JokeActions>) => {
        try {
            const response = await axios.get(`http://localhost:8080/${id}`)
            dispatch({type: JokeActionTypes.JOKE_BY_ID, payload: response.data.value.joke})
        } catch (e) {
            dispatch({
                type: JokeActionTypes.JOKE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}*/
//
// export const axiosJokeStatus = () => {
//     return async (dispatch: Dispatch<JokeActions>) => {
//         try {
//             dispatch({type: JokeActionTypes.JOKE_SUCCESS, payload: jokes})
//         } catch (e) {
//             dispatch({
//                 type: JokeActionTypes.JOKE_ERROR,
//                 payload: "Произошла ошибка при загрузке"
//             })
//         }
//     }
// }