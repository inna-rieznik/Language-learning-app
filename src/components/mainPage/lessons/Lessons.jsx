import s from "../lessons/Lessons.module.css";
import Lesson from "./lesson/Lesson";
import Action from "../vocabulary/action/Action";


const Lessons = () => {
    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            <Action actionType='review grammar'/>
            <Lesson number='1'/>
            <Lesson number='2'/>
            <Lesson number='3'/>
        </div>
    );
}

export default Lessons;