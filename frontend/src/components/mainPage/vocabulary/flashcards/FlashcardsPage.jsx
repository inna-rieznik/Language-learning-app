import React from 'react';
import s from "./Flashcards.module.css";
import Flashcards from "./Flashcards";

const FlashcardsPage = (props) => {



    return (
        <div>
            <h1>Flashcards</h1>
                <div>
                    <Flashcards/>
                </div>
        </div>
    );
}

export default FlashcardsPage;