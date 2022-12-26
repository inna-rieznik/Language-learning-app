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
import OpenQuestionsPage from "../../vocabulary/openQuestions/OpenQuestionsPage";
import QuizGame from "../../vocabulary/quiz/QuizGame";
import WordTranslationGame from "../../vocabulary/openQuestions/WordTranslationGame";
import Matching from "../../vocabulary/Matching/Matching";
import Matching2 from "../../vocabulary/matching2/Matching2";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const LessonPage = (props) => {

    let {lessonId} = useParams();
    const [lessonObject, setLessonObject] = useState([]);
    const {userId} = useAuth();
    const [user, setUser] = useState({})


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
            console.log(response.data);
        });
    }, [])

    const deleteLesson = () => {
        reqInstance.delete(`http://localhost:3011/lessons/${lessonId}`).then((response) => {
            window.location.href = '/'
        });
    };

    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            // console.log("user data", response.data[0]);
        });
    }, [userId]);



    return (
        <div className={s.content}>

            <div style={{width: "800px", margin: "20px auto 0 auto"}}>
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

                <div className={s.parent}>
                    <div className={s.child}>
                        <h1 style={{marginTop: "20px", marginBottom: "20px"}}>Lesson {lessonId} </h1>
                    </div>
                     {(user.role === 'student') ? null :
                    <div className={s.child} style={{display: "flex", justifyContent: "flex-end"}}>
                        <IconButton href="/" style={{marginTop: "20px", marginBottom: "20px", alignItems: "right"}}>
                            <EditIcon style={{width: "40px", height: "auto", color: "green"}}/>
                        </IconButton>
                        <IconButton onClick={deleteLesson}  style={{marginTop: "20px", marginBottom: "20px", alignItems: "right"}}>
                            <DeleteOutlinedIcon  style={{width: "40px", height: "auto", color: "red"}}/>
                        </IconButton>
                    </div>
                    }

                </div>
                <h2 style={{marginBottom: "20px", fontSize: '35px'}}>{lessonObject[0]?.title}</h2>
                <p style={{marginBottom: "20px", fontSize: '25px'}}>{lessonObject[0]?.intro_text}</p>
                <h2 style={{marginBottom: "20px", fontSize: '30px'}}>{lessonObject[0]?.grammar_rule_title}</h2>
                <p style={{marginBottom: "20px", fontSize: '25px'}}>{lessonObject[0]?.grammar_rule}</p>
                <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Exercises</h2>
                <h2 style={{marginBottom: "20px", fontSize: '25px'}}>Select correct answer</h2>
                <QuizGame/>
                {/*  <h2 style={{marginBottom: "20px", fontSize: '30px', marginTop: "20px"}}>Vocabulary exercises</h2>*/}
                <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>Write correct answer</h2>
                <WordTranslationGame/>
                <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>Connect word with its
                    translation</h2>
                <Matching2/>
                <Button style={{
                    backgroundColor: "#FF777B",
                    width: "400px",
                    height: "50px",
                    marginBottom: "20px",
                    marginTop: "30px"
                }} variant="contained" href='review_words'>Finish Lesson </Button>

            </div>


        </div>
    );
}
export default LessonPage;