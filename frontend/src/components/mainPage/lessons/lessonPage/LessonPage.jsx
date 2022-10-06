import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";

import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const LessonPage = (props) => {

    let {lessonId} = useParams();
    const [lessonObject, setLessonObject] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3011/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
            console.log(response.data);
        });
    }, [])


    console.log(lessonObject)
    return (
        <div className={s.content}>

                <div>
                    <h1>Lesson {lessonId} </h1>
                    <h2>Title: {lessonObject[0]?.title}</h2>
                    <p>Intro text: {lessonObject[0]?.intro_text}</p>
                    <h2>Grammar rule title: {lessonObject[0]?.grammar_rule_title}</h2>
                    <p>Grammar rule: {lessonObject[0]?.grammar_rule}</p>
                </div>


        </div>
    );
}
export default LessonPage;