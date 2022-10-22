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
   /* const questionDBid = quizObject[step].id_quiz_questions;*/
 /*   const questionDB = quizObject[step].content;*/

    useEffect(() => {
        axios.get(`http://localhost:3011/quizQuestions`).then((response) => {
            setQuizObject(response.data);
            /*console.log(response.data);*/
        });
    }, [])

  /*  useEffect(() => {
        axios.get(`http://localhost:3011/quizAnswers/${quizObject[step].id_quiz_question}`).then((response) => {
            setQuizObject(response.data);
            /!*console.log(response.data);*!/
        });
    }, [])*/

/*    console.log(quizObject);
    console.log("firstID", questionDBid);*/
/*
    console.log("first", questionDB);
*/

   /* const onClickVariant = (index) => {
        console.log(step, index);
        setStep(step + 1 );
        if(index === question.correct) {
            setCountCorrect(countCorrect + 1);
        }
    }*/

    return (
        <div>
            <div className={s.quiz}>
                {(step !== questions.length) ?
                    <div className={s.modal}>
                       {/* <div>
                            <h2>{quizObject[step].id_quiz_questions}. {quizObject[step].content} </h2>
                        </div>*/}
                      {/*  <Game step={step} question={question} onClickVariant={onClickVariant}/>*/}
                    </div> : <Result correct={countCorrect}/>
                }
            </div>
        </div>
    );
}


export default QuizPage;