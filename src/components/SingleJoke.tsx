import React, {} from 'react';
import './singleJoke.css'
import {useTypedSelector} from "../hooks/useTypeSelector";
import axios from "axios";
import {saveAs} from 'file-saver';


const SingleJoke: React.FC = () => {

    const joke = useTypedSelector((state) => state.jokes.jokes.find(jokes => jokes.id === state.jokes.id))
    const id = useTypedSelector((state) => state.jokes.id)

    const downloadJokes = () => {
        axios.post(`http://localhost:8080/create-pdf`, {id})
            .then(() => axios.get('http://localhost:8080/fetch-pdf', {responseType: 'blob'}))
            .then((resp) => {
                const pdfBlob = new Blob([resp.data], {type: 'application/pdf'});
                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    return (
        <div className="printJoke">
            {joke?.jokes && joke?.jokes.map(item => <div key={item} className="itemJoke">{item}</div>)}
            <div>
                <button onClick={downloadJokes} className='downloadJoke'>Скачать</button>
            </div>
        </div>
    )
}

export default SingleJoke;