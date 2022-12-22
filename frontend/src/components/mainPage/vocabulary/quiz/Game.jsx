import React from 'react';
import s from "./QuizPage.module.css";


const Game = ({step, quiz, quizes, onClickVariant}) => {
    const percentage = Math.round((step / quizes.length) * 100);
    console.log(percentage);

    return (
        <div>
            {/*<div className={s.progress}>
                <div style={{width: `${percentage}%`}} className={s.inner}></div>
            </div>*/}
            {quiz ? <>
                <div>
                    <h2> {`${step + 1}/${quizes.length}`} {quiz.question} </h2>

                </div>
                <div className={s.game}>
                    <ul>{quiz.answers.map((a, index) => {
                        return (
                            <div>
                                <li onClick={() => onClickVariant(index)}>
                                    {a.value}
                                   {/* <p>{a.correct ? 'pravda' : 'nepravda'}</p>*/}
                                </li>

                            </div>
                        )
                    })}</ul>
                </div>
            </> : 'Not valid question'}
        </div>
    );
}

export default Game;