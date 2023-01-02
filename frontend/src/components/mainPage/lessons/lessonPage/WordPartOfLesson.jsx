import {useParams} from "react-router-dom";
import WordsInLesson from "./WordsInLesson";
import QuizGameBase from "../../vocabulary/quiz/QuizGameBase";
import WordTranslationGame from "../../vocabulary/openQuestions/WordTranslationGame";
import Matching2 from "../../vocabulary/matching2/Matching2";
import * as React from "react";
import {API_URL} from "../../../../utils/url";



const WordPartOfLesson = (props) => {


    let {lessonId} = useParams();

    return (
        <div>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '30px'}}>New words</h2>
            <WordsInLesson/>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '30px'}}>Vocabulary exercises</h2>

            <h2 style={{marginBottom: "20px", fontSize: '25px'}}>1. Choose one correct answer out of the three offered.</h2>
            <QuizGameBase fetchDataEndpoint={`${API_URL}/quizQuestions/word/${lessonId}`}/>
            {/*  <h2 style={{marginBottom: "20px", fontSize: '30px', marginTop: "20px"}}>Vocabulary exercises</h2>*/}
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>2. Write the correct answer to the input field.</h2>
            <WordTranslationGame fetchDataEndpoint={`${API_URL}/words/forStudent/${lessonId}`}/>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '25px'}}>3. Connect word with its
                translation.</h2>
            <h2 style={{marginBottom: "20px", marginTop: "20px", fontSize: '+ápx'}}>Drag the word into the box with the proper translation</h2>
            <Matching2 fetchDataEndpoint={`${API_URL}/words/forStudent/${lessonId}`}/>
        </div>
    );
}

export default WordPartOfLesson;