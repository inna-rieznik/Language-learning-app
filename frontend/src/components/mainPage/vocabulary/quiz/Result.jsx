import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import s from "./QuizPage.module.css";
import {reqInstance} from "../../../../utils/auth";
import {useAuth} from "../../../login/Auth";
import {API_URL} from "../../../../utils/url";


const Result = ({countCorrect, size, restartGame}) => {
    const { setUserScore, setUserLevel } = useAuth();

    const addPoints = () => {
        reqInstance.post(`${API_URL}/score`, { points:  countCorrect }).then((response) => {
            setUserScore(response.data.data.newScore)
            setUserLevel(response.data.data.newLevel)
        });
    };

    useEffect(() => {
        addPoints();
    }, [])

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