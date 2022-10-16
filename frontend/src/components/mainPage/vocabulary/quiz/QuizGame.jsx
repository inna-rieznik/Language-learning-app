import React from 'react';
import Game from "./Game";
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";


export const questions = [
    {
        quiz_question: 'Question 1',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 2',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 3',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 4',
        variants : ['ans1', "ans2", "ans3"],
        correct: 0,
    }
]



const QuizPage = (props) => {


    const [step, setStep] = React.useState(0); //first element in array
    const [countCorrect, setCountCorrect] = React.useState(0);
    const question = questions[step];
    const [quizObject, setQuizObject] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3011/quiz`).then((response) => {
            setQuizObject(response.data);
            console.log(response.data);
        });
    }, [])

    const onClickVariant = (index) => {
        console.log(step, index);
        setStep(step + 1 );
        if(index === question.correct) {
            setCountCorrect(countCorrect + 1);
        }
    }

    return (
        <div>
            <div className={s.quiz}>
                {(step !== questions.length) ?
                    <div className={s.modal}>
                        <Game step={step} question={question} onClickVariant={onClickVariant}/>
                    </div> : <Result correct={countCorrect}/>
                }
            </div>
        </div>
    );
}


export default QuizPage;