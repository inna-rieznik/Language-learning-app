import s from "./Lesson.module.css";
import {NavLink} from "react-router-dom";


const Lesson = (props) => {
    let path = "lesson/" + props.id;

    return (
        <div className={s.lesson}>
            <NavLink to={path}>Lesson {props.id} : {props.name}</NavLink>
        </div>
    );
}

export default Lesson;