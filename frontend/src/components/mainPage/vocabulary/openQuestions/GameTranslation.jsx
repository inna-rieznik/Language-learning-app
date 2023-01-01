import React, {useRef} from 'react';
import s from "../quiz/QuizPage.module.css";
import {words1} from "./WordTranslationGame";
import {TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

const GameTranslation = ({step, word, words, onClickVariant}) => {
    // const percentage = Math.round((step / words.length) * 100);
    //console.log(percentage);
    const textRef = useRef();
    const [userAnswer, setUserAnswer] = useState("");
    const onButtonClick = () => {
        textRef.current.value = '';

    };

    return (
        <div>
            {/*<div className={s.progress}>
                <div style={{width: `${percentage}%`}} className={s.inner}></div>
            </div>*/}
            {word ? <>
                <div>
                    <h2> {`${step + 1}/${words.length}`} Write the correct translation of the word {word.source.toUpperCase()}</h2>

                </div>
                <div className={s.game}>
                    <TextField style={{backgroundColor: 'white', width: '400px'}} id="outlined-basic"
                               onChange={(e) => {
                                   setUserAnswer(e.target.value);
                               }}
                               inputRef={textRef}
                               variant="outlined" />
                    <Button style={{margin: "10px"}} onClick={() => {onClickVariant(userAnswer); onButtonClick() }} type="submit" variant="contained">send</Button>

                </div>
            </> : 'Not valid question'}
        </div>
    );
}

export default GameTranslation;