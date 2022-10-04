import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";

import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const LessonPage = (props) => {

    let {lessonId} = useParams();
    const [lessonObject, setLessonObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3011/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
            console.log(response.data);
        });
    })


    return (
        <div  className={s.content}>

                <div>
                    <h1>Lesson {lessonId} </h1>
                    <h2>Title: {lessonObject.title}</h2>
                    <p>Intro text: {lessonObject.intro_text}</p>
                </div>


        </div>
    );
}
export default LessonPage;