import React, {useState} from 'react';
import s from "./Flashcards.module.css";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Flashcard = ({flashcard}) => {
    const [flip, setFlip] = useState(false);

    return (
        <div onClick={() => setFlip(!flip)}>
           {/* <div className={s.front}>
                {flashcard.question}
            </div>

            <div className={s.back}>
                {flashcard.correctAnswer}
            </div>*/}


            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {flip ? flashcard.correctAnswer : flashcard.question}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    );
}

export default Flashcard;