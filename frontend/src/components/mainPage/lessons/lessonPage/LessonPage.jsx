import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";
import LessonTitle from "./LessonTitle";
import * as React from 'react';

const LessonPage = (props) => {


    /* let lessonsElement = props.lessonsData.map(lesson => <LessonPage id={lesson.id} title={lesson.title} intro_text={lesson.intro_text}
                                                                      grammar_rule_title={lesson.grammar_rule_title}
                                                                      grammar_rule={lesson.grammar_rule}/>)
*/
//if path == lessonPreview/1 -> show all for lesson1'

    let {lessonId} = useParams();


    return (
        <div  className={s.content}>

                <div>
                    <h1>Lesson {lessonId} </h1>
                </div>


        </div>
    );
}
export default LessonPage;