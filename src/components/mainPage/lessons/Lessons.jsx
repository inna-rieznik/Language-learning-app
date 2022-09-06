import s from "../lessons/Lessons.module.css";
import LessonPreview from "./lessonPreview/LessonPreview";
import Action from "../vocabulary/action/Action";
import {NavLink} from "react-router-dom";


const Lessons = (props) => {
    let lessonsElementPreview = props.lessonsData.map(lesson => <LessonPreview id={lesson.id} title={lesson.title}/>)

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            <Action urlName='review_grammar' title='review grammar'/>
            <div>
                {lessonsElementPreview}
            </div>

        </div>
    );
}

export default Lessons;