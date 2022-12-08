import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";

import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import QuizPage from "../../vocabulary/quiz/QuizGame";
import {useAuth} from "../../../login/Auth";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

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

            <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">Lesson {lessonId}</Typography>
                </Breadcrumbs>

                <h1 style={{marginTop: "20px", marginBottom: "20px"}}>Lesson {lessonId} </h1>
                <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Title: {lessonObject[0]?.title}</h2>
                <p style={{marginBottom: "20px", fontSize: '15px'}}>Intro text: {lessonObject[0]?.intro_text}</p>
                <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Grammar rule title: {lessonObject[0]?.grammar_rule_title}</h2>
                <p style={{marginBottom: "20px", fontSize: '15px'}}>Grammar rule: {lessonObject[0]?.grammar_rule}</p>
                <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Exercises</h2>
                <QuizPage/>
            </div>


        </div>
    );
}
export default LessonPage;