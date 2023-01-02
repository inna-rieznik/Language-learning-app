import React from 'react';
import Result from "./Result";
import s from "./QuizPage.module.css";
import {useEffect} from "react";
import {useState} from "react";
import Game from "./Game";
import {useAuth} from "../../../login/Auth";
import {useParams} from "react-router-dom";
import {reqInstance} from '../../../../utils/auth'

const QuizGameBase = (props) => {
    const {fetchDataEndpoint} = props

    const [step, setStep] = React.useState(0); //first element in array

    const [countCorrect, setCountCorrect] = React.useState(0);
    const [quizes, setQuizes] = useState([]);
    const {userScore} = useAuth();
    const size = quizes.length;

    useEffect(() => {
        reqInstance.get(fetchDataEndpoint).then((response) => {
            setQuizes(response.data);

        });
    }, []);

    const restartGame = () => {
        setCountCorrect(0);
        setStep(0);
    }

    const onClickVariant = (index) => {
       // console.log("step: ", step, "index: ", index, "answ", quiz.answers[index].value, quiz.answers[index].correct);
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


export default QuizGameBase;