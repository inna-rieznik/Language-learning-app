import React from 'react';
import Game from "./Game";
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useState} from "react";


export const questions = [
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


    const [step, setStep] = React.useState(0); //first element in array
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        console.log(step, index);
        setStep(step + 1 );
        if(index === question.correct) {
            setCorrect(correct + 1);
        }
    }
    return (
        <div>
            <div className={s.quiz}>
                {(step !== questions.length) ?
                    <div className={s.modal}>
                        <Game step={step} question={question} onClickVariant={onClickVariant}/>

                    </div> : <Result correct={correct}/>
                }

            </div>
        </div>
    );
}

export default QuizPage;