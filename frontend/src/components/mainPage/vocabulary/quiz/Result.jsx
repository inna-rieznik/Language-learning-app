import React from 'react';
import Button from "@mui/material/Button";
import s from "./QuizPage.module.css";


const Result = ({countCorrect}) => {
    return (
        <div>
            <h2>You answer {countCorrect} of 4 questions</h2>
            <Button variant="contained">
                Try again</Button>
            {/*here will be TRY AGAIN OR NEXT v zavislosti na tom, kde je vyuzita komponenta*/}
        </div>
    );
}

export default Result;