import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./components/redux/store";
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode>
    );

}

rerenderTree(store.getState());


//imported subscribe from store.js and called rerenderTree in it -> avoid loop between index.js and store.js

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});
reportWebVitals();
