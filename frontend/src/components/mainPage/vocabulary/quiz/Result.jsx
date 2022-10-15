import React from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import s from "./QuizPage.module.css";
import {questions} from "./QuizGame";



const Result = ({correct}) => {
    return (
    <div className={s.quiz}>
        <div className={s.modal}>
            <h2>You answer {correct} of {questions.length} questions</h2>
                <Button variant="contained">Try again</Button> {/*here will be TRY AGAIN OR NEXT v zavislosti na tom, kde je vyuzita komponenta*/}

        </div>
    </div>
    );
}

export default Result;