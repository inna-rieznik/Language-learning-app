import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import QuizGameBase from "../../vocabulary/quiz/QuizGameBase";
import * as React from "react";
import {reqInstance} from "../../../../utils/auth";

const GrammarPartOfLesson = (props) => {
    let {lessonId} = useParams();

    const [lessonObject, setLessonObject] = useState([]);
    useEffect(() => {
        reqInstance.get(`http://localhost:3011/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
            console.log(response.data);
        });
    }, [])

    return (
        <div>
            <h2 style={{marginBottom: "20px", fontSize: '35px'}}>{lessonObject[0]?.title}</h2>
            <p style={{marginBottom: "20px", fontSize: '20px'}}>{lessonObject[0]?.intro_text}</p>
            <h2 style={{marginBottom: "20px", fontSize: '30px'}}>{lessonObject[0]?.grammar_rule_title}</h2>
            <p style={{marginBottom: "20px", fontSize: '20px'}}>{lessonObject[0]?.grammar_rule}</p>
            <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Grammar exercises</h2>
            <h2 style={{marginBottom: "20px", fontSize: '20px'}}>Choose one correct answer out of the three offered.</h2>
            <QuizGameBase fetchDataEndpoint={`http://localhost:3011/quizQuestions/grammar/${lessonId}`}/>
        </div>
    );
}

export default GrammarPartOfLesson;