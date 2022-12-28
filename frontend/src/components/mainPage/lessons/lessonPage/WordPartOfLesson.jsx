import {useParams} from "react-router-dom";
import WordsInLesson from "./WordsInLesson";
import QuizGameBase from "../../vocabulary/quiz/QuizGameBase";
import WordTranslationGame from "../../vocabulary/openQuestions/WordTranslationGame";
import Matching2 from "../../vocabulary/matching2/Matching2";
import * as React from "react";



const WordPartOfLesson = (props) => {


    let {lessonId} = useParams();

    return (
        <div>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '30px'}}>New words</h2>
            <WordsInLesson/>
            <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Vocabulary exercises</h2>
            <QuizGameBase fetchDataEndpoint={`http://localhost:3011/quizQuestions/word/${lessonId}`}/>
            {/*  <h2 style={{marginBottom: "20px", fontSize: '30px', marginTop: "20px"}}>Vocabulary exercises</h2>*/}
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>Write correct answer</h2>
            <WordTranslationGame/>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>Connect word with its
                translation</h2>
            <Matching2/>
        </div>
    );
}

export default WordPartOfLesson;