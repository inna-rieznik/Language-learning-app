import React from 'react';
import s from "./QuizPage.module.css";
import {questions} from "./QuizGame";



const Game = ({step, question, onClickVariant}) => {
    const percentage = Math.round((step/questions.length) * 100);
    console.log(percentage);

    return (
        <div>
            <div className={s.progress}>
                <div style={{ width: `${percentage}%` }} className={s.inner}></div>
            </div>
            <h2>{question.title} </h2>
            <div className={s.game}>
            <ul>
                {question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)}
            </ul>
            </div>
        </div>
    );
}

export default Game;