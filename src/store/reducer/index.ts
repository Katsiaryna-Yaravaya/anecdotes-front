import {combineReducers} from "redux";
import {jokeReducer} from "./jokeReducer";

export const rootReducer = combineReducers({
    jokes:jokeReducer
})

export type RootState = ReturnType<typeof rootReducer>