import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let lessonsData = [
    {id : 1, title: 'Present simple', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'},
    {id : 2, title: 'Future simple', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'},
    {id : 3, title: 'Past simple', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'},
    {id : 4, title: 'Present perfect', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'},
    {id : 5, title: 'Past perfect', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'},
    {id : 6, title: 'Articles', intro_text: 'lorem ipsum', grammar_rule_title: 'Grammar title', grammar_rule: 'Lorem ipsum'}
]
let wordsData = [
    { id: 1, cz:'Ano', eng:'Yes'},
    { id: 2, cz:'Ne', eng:'No'},
    { id: 3, cz:'Prosím', eng:'Please'},
    { id: 4, cz:'Děkuju', eng:'Thank you'},
    { id: 5, cz:'Dobrý den', eng:'How do you do'},
    { id: 6, cz:'Nashledanou', eng:'Yes'},
    { id: 7, cz:'S dovolenim', eng:'Excuse me'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App lessonsData={lessonsData} wordsData={wordsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
