import React from 'react';
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import Game from "./Game";


export const questions = [
    {
        quiz_question: 'Question 1',
        variants: ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 2',
        variants: ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 3',
        variants: ['ans1', "ans2", "ans3"],
        correct: 0,
    },
    {
        quiz_question: 'Question 4',
        variants: ['ans1', "ans2", "ans3"],
        correct: 0,
    }
]


const QuizPage = (props) => {
    const [step, setStep] = React.useState(0); //first element in array
    const [countCorrect, setCountCorrect] = React.useState(0);
    const [quizes, setQuizes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3011/quizQuestions`).then((response) => {
            setQuizes(response.data);
            console.log("quizes data", response.data);

        });
    }, []);
    console.log("quizes object", quizes);

    const onClickVariant = (index) => {
        console.log("step: ", step, "index: ", index, "answ", quiz.answers[index].correct);
        setStep(step + 1);
        if (quiz.answers[index].correct) {
            setCountCorrect(countCorrect + 1);
        }
    }

    const quiz = quizes[step];

    return (
        <div>
            <div className={s.quiz}>
                <div className={s.modal}>
                    {(step !== quizes.length) ?
                        <Game step={step} quiz={quiz} onClickVariant={onClickVariant}/>
                        : <Result countCorrect={countCorrect}/>
                    }
                </div>
            </div>


        </div>
    );
}


export default QuizPage;