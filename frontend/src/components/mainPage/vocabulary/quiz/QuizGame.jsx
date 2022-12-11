import React from 'react';
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import Game from "./Game";
import {useAuth} from "../../../login/Auth";


let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const QuizGame = (props) => {
    const [step, setStep] = React.useState(0); //first element in array
    const [countCorrect, setCountCorrect] = React.useState(0);
    const [quizes, setQuizes] = useState([]);
    const {userScore} = useAuth();
    const size = quizes.length;

    useEffect(() => {
        reqInstance.get(`http://localhost:3011/quizQuestions`).then((response) => {
            setQuizes(response.data);
            console.log("quizes data", response.data);

        });
    }, []);
    // console.log("quizes object", quizes);
    console.log("USER SCORE", userScore);

    const restartGame = () => {
        setCountCorrect(0);
        setStep(0);
    }

    const onClickVariant = (index) => {
        console.log("step: ", step, "index: ", index, "answ", quiz.answers[index].value, quiz.answers[index].correct);
        setStep(step + 1);
        if (quiz.answers[index].correct) {
            setCountCorrect(countCorrect + 1);
        }

    }

    const quiz = quizes[step];

    return (
        <div style={{width: "800px", margin: "20px auto 0 auto"}}>
            <div className={s.quiz}>
                <div className={s.modal}>
                    {(step !== quizes.length) ?
                        <Game step={step} quiz={quiz} quizes={quizes} onClickVariant={onClickVariant}/>
                        : <Result
                            countCorrect={countCorrect}
                            size={size}
                            restartGame={restartGame}
                        />
                    }
                </div>
            </div>


        </div>
    );
}


export default QuizGame;