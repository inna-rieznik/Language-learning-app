import React from 'react';
import s from "./QuizPage.module.css";
import QuizGame from "./QuizGame";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";


const QuizPage = (props) => {

    return (
        <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/review_words"
                >
                    ReviewWords
                </Link>
                <Typography color="text.primary">Quiz</Typography>
            </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>Quiz</h1>

            <div className={s.quiz} >
                <QuizGame />

            </div>
        </div>
    );
}

export default QuizPage;