import React from 'react';
import Button from "@mui/material/Button";
import s from "./QuizPage.module.css";


const Result = ({countCorrect, size, restartGame}) => {


    return (
        <div>
            <h2>You answer {countCorrect} of {size} questions</h2>

            <Button variant="contained"
                    onClick={() => restartGame()}>
                Try again</Button>
            {/*here will be TRY AGAIN OR NEXT v zavislosti na tom, kde je vyuzita komponenta*/}
        </div>
    );
}

export default Result;