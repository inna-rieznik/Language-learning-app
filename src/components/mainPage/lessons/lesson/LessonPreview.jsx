import s from "./Lesson.module.css";
import {NavLink} from "react-router-dom";
import LessonPage from "../lessonPage/LessonPage";


const LessonPreview = (props) => {
    let path = "lesson/" + props.id;


    return (
        <div className={s.lesson}>
            <NavLink to={path}> Lesson {props.id} : {props.title}</NavLink>

        </div>
    );
}

export default LessonPreview;