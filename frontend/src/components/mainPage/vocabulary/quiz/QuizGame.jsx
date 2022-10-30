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

    //PICOVINA DONT WORK

    const [step, setStep] = React.useState(0); //first element in array
    const [countCorrect, setCountCorrect] = React.useState(0);
    //const question = questions[step];
    const [quizes, setQuizes] = useState(questions);

    useEffect(() => {
        axios.get(`http://localhost:3011/quizQuestions`).then((response) => {
            //setListOfQuizQuestions(response.data);

            setQuizes(response.data.map((quizItem, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    question: quizItem.question,
                    answer: quizItem.answer,
                    correct: quizItem.correct.data[0]
                }
            }))
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

    return (
        <div>
            <div className={s.quiz}>
                {quizes.map(q => {
                    return (
                        <div>
                            <h2>{q.question}</h2>
                            <p>{q.answer}</p>
                            <p>{q.correct}</p>
                        </div>
                    )
                })}


                {/*{(step !== questions.length) ?
                    <div className={s.modal}>
                        <div>

                        </div>
                        <Game step={step} question={question} onClickVariant={onClickVariant}/>
                    </div> : <Result correct={countCorrect}/>
                }*/}
            </div>
        </div>
    );
}


export default QuizPage;