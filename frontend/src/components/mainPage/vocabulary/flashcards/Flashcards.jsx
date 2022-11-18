import React, {useEffect, useState} from 'react';
import s from "./Flashcards.module.css";
import FlashcardsList from "./FlashcardsList";
import axios from "axios";

const Flashcards = (props) => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
    const [correctAnswer, setCorrectAnswer] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3011/words/random/6").then((response) => {
            //setListOfWords(response.data);

            setFlashcards(response.data.map((wordItem, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    question: wordItem.source,
                    correctAnswer: wordItem.target
                }
            }))
            console.log(response.data);
        });
    }, []);

    return (
        <div>
            <FlashcardsList flashcards={flashcards}/>
        </div>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: "what is 1+1?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },
    {
        id: 2,
        question: "what is 2+1?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
    },
    {
        id: 3,
        question: "what is 0+1?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
    }

]

export default Flashcards;