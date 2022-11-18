import React, {useEffect} from 'react';
import s from "./Flashcards.module.css";
import Flashcards from "./Flashcards";
import Flashcard from "./Flashcard";
import {TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

const FlashcardsList = ({flashcards}) => {
    const [userAnswer, setUserAnswer] = useState("");

    const [isCorrect, setIsCorrect] = useState(false);

    const [correctAnswerB, setCorrectAnswerB] = useState("");

    console.log("userAnswer:", userAnswer,",correct ans index:", flashcards.index, ",correctAns:", flashcards.correctAnswer, ",is correct:", isCorrect);
    return (
        <div className={s.cardGrid}>
            {flashcards.map(flashcard => {

                console.log("answer back: ",correctAnswerB);
                return (

                <div className={s.wholeItem}>

                    <Flashcard flashcard={flashcard} key={flashcard.id} />

                    <TextField style={{backgroundColor:'white', width: '400px'}} id="outlined-basic"
                               label="Write your answer there"
                               onChange={(e) => {
                                   setUserAnswer(e.target.value);
                               }}
                               variant="outlined"/>
                </div>
            );
            })}
            <Button variant="contained">Check</Button>
        </div>
    );
}

export default FlashcardsList;