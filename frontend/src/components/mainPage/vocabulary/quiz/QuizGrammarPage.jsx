import React from 'react';
import s from "./QuizPage.module.css";
import QuizGameBase from "./QuizGameBase";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";


const QuizGrammarPage = (props) => {

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
                    href="/review_grammar"
                >
                    Review Grammar
                </Link>
                <Typography color="text.primary">Quiz Grammar</Typography>
            </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>Quiz Grammar</h1>

            <div className={s.quiz} >
                <QuizGameBase fetchDataEndpoint={'http://localhost:3011/quizQuestions/grammar'}/>
            </div>
        </div>
    );
}

export default QuizGrammarPage;