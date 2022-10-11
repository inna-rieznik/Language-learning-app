import React from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import s from "./QuizPage.module.css";



const Result = (props) => {
    return (
    <div >
        <div>
            <h2>You answer 3 of 10 questions</h2>
            <Button variant="contained">Try again</Button>
        </div>
    </div>
    );
}

export default Result;