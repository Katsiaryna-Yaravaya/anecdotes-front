import React from 'react';
import './statusJoke.css'
import {useTypedSelector} from "../hooks/useTypeSelector";
import {saveCurrentId} from "../store/action-creator/joke";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

const StatusJoke: React.FC = () => {

    const {jokes} = useTypedSelector((state) => state.jokes)
    const dispatch = useDispatch()
    const history = useHistory()

    const clickHandlerSuccess = (id) => {
        dispatch(saveCurrentId(id))
        history.push("/singlejoke")
    }

    return (
        <div className="statusJokes">
            <div className="displayJokes">
                {jokes.map((joke: any) => {
                    if (joke.type === "pending") {
                        return <div className='pending' key={joke.id}>Ожидание шуток...</div>
                    }
                    return <div className='success' key={joke.id} onClick={() => clickHandlerSuccess(joke.id)}>Готовые
                        шутки</div>
                })}
            </div>
        </div>
    )
}

export default StatusJoke;
