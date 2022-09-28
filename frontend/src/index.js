import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./components/redux/store";
import ReactDOM from 'react-dom/client';
import App from "./App";







const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} // bind lets to connect method with store and not let to be called with props for another component
                 newWordText={store.getState().newWordText}
                 newTranslationText={store.getState().newTranslationText}/>
        </React.StrictMode>
    );

}

rerenderTree(store.getState());

//imported subscribe from store.js and called rerenderTree in it -> avoid loop between index.js and store.js

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state); //
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
