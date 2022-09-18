import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state from "./components/redux/state";
import {addWordToVocabulary, updateNewWordText} from './components/redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree= (state) => {

    root.render(
        <React.StrictMode>
            <App state={state}
                 addWordToVocabulary={addWordToVocabulary}
                 updateNewWordText={updateNewWordText}
                 newWordText={state.newWordText}
                 newTranslationText={state.newTranslationText}/>
        </React.StrictMode>
    );

}

