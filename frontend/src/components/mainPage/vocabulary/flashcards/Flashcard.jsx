import React, {useEffect, useRef, useState} from 'react';
import s from "./Flashcards.module.css";
import Card from "@mui/material/Card";
import {CardActionArea, TextField} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Flashcard = ({flashcard}) => {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial')
    const frontEl = useRef();
    const backEl = useRef();
    const [isCorrect, setIsCorrect] = useState(false);

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div  style={{ height: height }} className={flip ? `${s.card} ${s.flip}` : s.card}  onClick={() => setFlip(!flip)}>
           <div className={s.front} ref={frontEl}>
               <h2>{flashcard.question}</h2>
            </div>

            <div className={s.back} ref={backEl}>
                <h2>{flashcard.correctAnswer}</h2>
            </div>
        </div>

    );
}

export default Flashcard;