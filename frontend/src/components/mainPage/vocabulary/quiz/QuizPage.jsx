import React from 'react';
import Game from "./Game";
import Result from "./Result";
import s from "./QuizPage.module.css";
import QuizGame from "./QuizGame";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const QuizPage = (props) => {

    let {lessonId} = useParams();


  /*  useEffect(() => {
        axios.get(`http://localhost:3011/lessons/id/${lessonId}/quiz`).then((response) => {
            setQuizObject(response.data);
            console.log(response.data);
        });
    }, [])*/

    return (
        <div>
            <h1>Quiz</h1>
            <div>

            </div>

            <div className={s.quiz}>
                <QuizGame />

            </div>
        </div>
    );
}

export default QuizPage;