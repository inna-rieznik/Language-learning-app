import s from "../lessons/Lessons.module.css";
import Lesson from "./lesson/Lesson";
import Action from "../vocabulary/action/Action";
import {NavLink} from "react-router-dom";


const Lessons = (props) => {
    let lessonsData = [
        {id : 1, name: 'Present simple'},
        {id : 2, name: 'Future simple'},
        {id : 3, name: 'Past simple'},
        {id : 4, name: 'Present perfect'}
    ]

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            <Action urlName='review_grammar' title='review grammar'/>
            <div>
                <Lesson id={lessonsData[0].id} name={lessonsData[0].name}/>
                <Lesson id={lessonsData[1].id} name={lessonsData[1].name}/>
                <Lesson id={lessonsData[2].id} name={lessonsData[2].name}/>
            </div>

        </div>
    );
}

export default Lessons;