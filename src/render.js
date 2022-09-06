import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state from "./components/redux/state";
import {addWordToVocabulary} from './components/redux/state';



export let rerenderTree= (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addWordToVocabulary={addWordToVocabulary}/>
        </React.StrictMode>
    );

}

