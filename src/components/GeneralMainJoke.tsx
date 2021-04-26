import React, {useState} from 'react';
import './GeneralMainJoke.css'
import {axiosAddJoke, axiosJoke} from "../store/action-creator/joke";
import {useDispatch} from "react-redux";
import StatusJoke from "./StatusJoke";

const GeneralMainJoke: React.FC = () => {

    const [showJokes, setShowJokes] = useState(false)
    const dispatch = useDispatch()

    const clickHandler = () => {
        setShowJokes(true)
        dispatch(axiosAddJoke())
    }

    const clickHandlerUpdate = () => {
        dispatch(axiosJoke())
    }

    const displayStatus = () => {
        return (
            <div className="displayJokes">
                <StatusJoke/>
            </div>
        )
    }

    return (
        <div className="joke">
            <button className="jokeButton" onClick={clickHandler}>Подготовить шутки</button>
            {showJokes && displayStatus()}
            <button className="jokeButton" onClick={clickHandlerUpdate}>Обновить шутки</button>
        </div>
    )
}

export default GeneralMainJoke;