import React from 'react';
import s from "../quiz/QuizPage.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

import {useAuth} from "../../../login/Auth";
import GameTranslation from "./GameTranslation";
import Result from "../quiz/Result";
import ResultOpenAnswers from "./ResultOpenAnswers";


let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const WordTranslationGame = (props) => {
    const [step, setStep] = React.useState(0); //first element in array
    const [countCorrect, setCountCorrect] = React.useState(0);
    const {userScore} = useAuth();
    const [words, setWords] = useState([]);
    const size = words.length;
    const [usersAnswers, setUsersAnswers] =useState([]);
    const [correctAnswers, setCorrectAnswers] =useState([]);

   useEffect(() => {
        reqInstance.get(`http://localhost:3011/words/random/6`).then((response) => {
            setWords(response.data);
            console.log(response.data)
        });
    }, []);

    console.log(words.length)

    const restartGame = () => {
        setCountCorrect(0);
        setStep(0);
        setUsersAnswers([]);
        setCorrectAnswers([]);
    }
    const onClickVariant = (userAnswer) => {

        setStep(step + 1);

        if(userAnswer.toLowerCase() == word.target.toLowerCase()){
            setCountCorrect(countCorrect+1);
        }

        setUsersAnswers(current => [...current, userAnswer]);
        setCorrectAnswers(current => [...current, word.target]);

        console.log("step: ", step, ", answer: ", userAnswer, ", count correct: ", countCorrect);
        console.log("usersAnswers: ", usersAnswers);
        console.log("usersAnswers: ", word.target);
    }



    const word = words[step];

    return (
        <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
            <div className={s.quiz}>
                <div className={s.modal}>
                   {(step !== words.length) ?
                       <GameTranslation step={step} word={word} words={words} onClickVariant={onClickVariant}/>
                        : <ResultOpenAnswers countCorrect={countCorrect}
                                  size={size}
                                  usersAnswers={usersAnswers}
                                  correctAnswers={correctAnswers}
                                  restartGame={restartGame}/>

                    }

                </div>
            </div>


        </div>
    );
}


export default WordTranslationGame ;