import React from 'react';
import s from "./QuizPage.module.css";



const Game = (props) => {
    return (
        <div>
            <div className={s.progress}>
                <div style={{ width: '20%' }} className={s.inner}></div>
            </div>
            <h2>Choose right translation for word </h2>
            <div className={s.game}>
            <ul>
                <li>answer 1</li>
                <li>answer 2</li>
                <li>answer 3</li>
            </ul>
            </div>
        </div>
    );
}

export default Game;