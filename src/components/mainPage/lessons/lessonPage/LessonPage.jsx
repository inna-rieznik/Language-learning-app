import {NavLink} from "react-router-dom";
import LessonPreview from "../lesson/LessonPreview";
import s from "./LessonPage.module.css";

const LessonPage = (props) => {
    /*if id=1 -> render all fro id1*/
    /*

    let lessonsElement = props.lessonsData.map(lesson => <LessonPage id={lesson.id} title={lesson.title} intro_text={lesson.intro_text}
                                                                     grammar_rule_title={lesson.grammar_rule_title}
                                                                     grammar_rule={lesson.grammar_rule}/>)

*/

    return (
        <div className={s.content}>
            <div>
                <p>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    {props.id} : {props.title}
                    /Lesson id: Lesson_title
                </p>
            </div>
            <h1>Lesson id: Lesson_title</h1>
            <div>
                Lesson_content
               {/* {wordsElement}*/}
            </div>
        </div>
    );
}

export default LessonPage;