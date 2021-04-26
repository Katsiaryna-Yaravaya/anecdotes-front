export interface JokeState {
    jokes: any[],
    id: string,
    loading: boolean,
    error: null | string
}

export enum JokeActionTypes {
    JOKE = "JOKE",
    JOKE_SUCCESS = "JOKE_SUCCESS",
    ALL_JOKE_SUCCESS = "ALL_JOKE_SUCCESS",
    JOKE_ERROR = "JOKE_ERROR",
    JOKE_BY_ID = 'JOKE_BY_ID',
    SAVE_JOKE_ID = 'SAVE_JOKE_ID',
}

interface AxiosJokeAction {
    type: JokeActionTypes.JOKE;
}

interface AxiosJokeByIdAction {
    type: JokeActionTypes.JOKE_BY_ID;
    payload: any
}

interface AxiosJokeSuccessAction {
    type: JokeActionTypes.JOKE_SUCCESS;
    payload: any
}


interface AxiosAllJokeSuccessAction {
    type: JokeActionTypes.ALL_JOKE_SUCCESS;
    payload: any
}

interface AxiosJokeErrorAction {
    type: JokeActionTypes.JOKE_ERROR;
    payload: string
}

interface SaveJokeId {
    type: JokeActionTypes.SAVE_JOKE_ID;
    payload: string
}

export type JokeActions =
    AxiosJokeAction
    | AxiosJokeByIdAction
    | AxiosAllJokeSuccessAction
    | AxiosJokeSuccessAction
    | AxiosJokeErrorAction
    | SaveJokeId
