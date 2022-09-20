import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./components/redux/state";
import ReactDOM from 'react-dom/client';
import App from "./App";


/*

const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "mydb"
});

app.listen(3001, () => {
    console.log("running server");
});

*/
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state}
                 addWordToVocabulary={store.addWordToVocabulary.bind(store)} // bind lets to connect method with store and not let to be called with props for another component
                 updateNewWordText={store.updateNewWordText.bind(store)}
                 newWordText={store.getState().newWordText}
                 newTranslationText={store.getState().newTranslationText}/>
        </React.StrictMode>
    );

}

rerenderTree(store.getState());

//imported subscribe from state.js and called rerenderTree in it -> avoid loop between index.js and state.js

store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
