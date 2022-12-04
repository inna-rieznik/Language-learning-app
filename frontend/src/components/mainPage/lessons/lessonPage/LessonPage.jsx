import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";

import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import QuizPage from "../../vocabulary/quiz/QuizGame";
import {useAuth} from "../../../login/Auth";

let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const LessonPage = (props) => {

    let {lessonId} = useParams();
    const [lessonObject, setLessonObject] = useState([]);


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
            console.log(response.data);
        });
    }, [])

    return (
        <div className={s.content}>

                <div style={{marginTop: "50px", width: "800px", margin: "0 auto"}}>
                    <h1>Lesson {lessonId} </h1>
                    <h2>Title: {lessonObject[0]?.title}</h2>
                    <p>Intro text: {lessonObject[0]?.intro_text}</p>
                    <h2>Grammar rule title: {lessonObject[0]?.grammar_rule_title}</h2>
                    <p>Grammar rule: {lessonObject[0]?.grammar_rule}</p>
                    <QuizPage/>
                </div>


        </div>
    );
}
export default LessonPage;