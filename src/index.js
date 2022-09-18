import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderTree} from "./render";
import state from "./components/redux/state";


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



rerenderTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
