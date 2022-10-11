import React from 'react';
import Game from "./Game";
import Result from "./Result";
import s from "./QuizPage.module.css";

const questions = [
    {
        title: 'Question 1',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        title: 'Question 2',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        title: 'Question 3',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        title: 'Question 4',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    }
]

const QuizPage = (props) => {
    return (
        <div>
            <h1>Quiz</h1>
            <div className={s.quiz}>
                <div className={s.modal}>
                    <Game/>
                   {/* <Result/>*/}
                </div>

            </div>
        </div>
    );
}

export default QuizPage;