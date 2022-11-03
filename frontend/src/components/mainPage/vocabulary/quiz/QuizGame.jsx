import React from 'react';
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";


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
    //const question = questions[step];
    const [quizes, setQuizes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3011/quizQuestions`).then((response) => {
            //setListOfQuizQuestions(response.data);

            setQuizes(response.data)
            console.log("quizes data", response.data);

        });
    }, []);
    console.log("quizes object", quizes);

    /*    const onClickVariant = (index) => {
            console.log(step, index);
            setStep(step + 1 );
            if(index === question.correct) {
                setCountCorrect(countCorrect + 1);
            }
        }*/

    const quiz = quizes[step]

    return (
        <div>
            <div className={s.quiz}>
                <div className={s.modal}>
                    {quiz ? <>
                        {`Otazka je ${quiz.question}`}
                        {quiz.answers.map(a => {
                            return (
                                <div>
                                    <h2>{a.value}</h2>
                                    <p>{a.correct ? 'pravda' : 'nepravda'}</p>
                                </div>
                            )
                        })}
                    </> : 'Nevalidni otazka'}
                </div>
            </div>


            {/*{(step !== questions.length) ?
                    <div className={s.modal}>
                        <div>

                        </div>
                        <Game step={step} question={question} onClickVariant={onClickVariant}/>
                    </div> : <Result correct={countCorrect}/>
                }*/
            }
        </div>
    )
        ;
}


export default QuizPage;