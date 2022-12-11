import React from 'react';
import Button from "@mui/material/Button";
import s from "../quiz/QuizPage.module.css";


const ResultOpenAnswers = ({countCorrect, size, usersAnswers, correctAnswers, restartGame}) => {


    return (
        <div className={s.floatContainer}>
            <h2>You answer {countCorrect} of {size} questions</h2>
            <div className={s.floatChild}>
            <h3>Your answers</h3>
            {
                usersAnswers.map((answer) => {
                    return (
                    <div>
                        <ul>
                            <li>{answer}</li>
                        </ul>
                    </div>
                    )
                })
            }
            </div>
            <div className={s.floatChild}>
            <h3>Correct answers</h3>
            {
                correctAnswers.map((answer) => {
                    return (
                        <div>
                            <ul>
                                <li>{answer}</li>
                            </ul>
                        </div>
                    )
                })
            }
            </div>
            <Button variant="contained"
            onClick={() => restartGame()}>
                Try again</Button>
            {/*here will be TRY AGAIN OR NEXT v zavislosti na tom, kde je vyuzita komponenta*/}
        </div>
    );
}

export default ResultOpenAnswers;