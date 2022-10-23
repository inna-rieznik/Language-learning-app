import React from 'react';
import s from "./Flashcards.module.css";
import Flashcards from "./Flashcards";
import Flashcard from "./Flashcard";

const FlashcardsList = ({flashcards}) => {


    return (
        <div className={s.card}>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id}/>
            })}
        </div>
    );
}

export default FlashcardsList;