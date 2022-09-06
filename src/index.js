import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderTree} from "./render";
import state from "./components/redux/state";



rerenderTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
