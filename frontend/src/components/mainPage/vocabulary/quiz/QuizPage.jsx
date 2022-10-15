import React from 'react';
import Game from "./Game";
import Result from "./Result";
import s from "./QuizPage.module.css";
import QuizGame from "./QuizGame";



const QuizPage = (props) => {

    return (
        <div>
            <h1>Quiz</h1>
            <div className={s.quiz}>
                <QuizGame/>

            </div>
        </div>
    );
}

export default QuizPage;