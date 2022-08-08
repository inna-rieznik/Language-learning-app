import s from "../lessons/Lessons.module.css";
import Lesson from "./lesson/Lesson";
import Action from "../vocabulary/action/Action";
import {NavLink} from "react-router-dom";


const Lessons = (props) => {
    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            <Action urlName='review_grammar' title='review grammar'/>
            <div>
                <Lesson id='1'/>
                <Lesson id='2'/>
                <Lesson id='3'/>
            </div>

        </div>
    );
}

export default Lessons;