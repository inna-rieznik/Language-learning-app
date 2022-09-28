import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";

import * as React from 'react';

const LessonPage = (props) => {


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