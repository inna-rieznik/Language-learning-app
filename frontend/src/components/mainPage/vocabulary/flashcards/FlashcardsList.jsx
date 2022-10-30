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


    const compare = () => {
        setCorrectAnswer(flashcards.correctAnswer);
        if (userAnswer === correctAnswer){
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    };

    console.log("userAnswer", userAnswer, "correctAns", flashcards.correctAnswer, "is correct", isCorrect);
    return (
        <div className={s.cardGrid}>
            {flashcards.map(flashcard => {
                return (

                <div className={s.wholeItem}>

                    <Flashcard compare={compare} flashcard={flashcard} key={flashcard.id} />

                    <TextField id="outlined-basic"
                               label="Write your answer there"
                               onChange={(e) => {
                                   setUserAnswer(e.target.value);
                               }}
                               variant="outlined"/>
                    <Button onClick={compare} variant="contained">Check</Button>
                </div>
            );
            })}

        </div>
    );
}

export default FlashcardsList;