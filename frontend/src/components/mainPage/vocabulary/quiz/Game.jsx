import React from 'react';
import s from "./QuizPage.module.css";
import {questions} from "./QuizGame";



const Game = ({step, quiz, onClickVariant}) => {
    const percentage = Math.round((step/questions.length) * 100);
    console.log(percentage);

    return (
        <div>
            <div className={s.progress}>
                <div style={{width: `${percentage}%`}} className={s.inner}></div>
            </div>
            {quiz ? <>
                <h2>{`Otazka je ${quiz.question}`}</h2>
                <div className={s.game}>
                    <ul>{quiz.answers.map((a, index) => {
                        return (
                            <div>
                                <li onClick={() => onClickVariant(index)}>
                                    {index} {a.value}
                                    <p>{a.correct ? 'pravda' : 'nepravda'}</p>
                                </li>

                            </div>
                        )
                    })}</ul>
                </div>
            </> : 'Nevalidni otazka'}
        </div>
    );
}

export default Game;