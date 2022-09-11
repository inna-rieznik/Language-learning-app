import {NavLink, useParams} from "react-router-dom";
import LessonPreview from "../lessonPreview/LessonPreview";
import s from "./LessonPage.module.css";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const LessonPage = (props) => {

    let {lessonId} = useParams();
    /* let lessonsElement = props.lessonsData.map(lesson => <LessonPage id={lesson.id} title={lesson.title} intro_text={lesson.intro_text}
                                                                      grammar_rule_title={lesson.grammar_rule_title}
                                                                      grammar_rule={lesson.grammar_rule}/>)
 */
//if path == lessonPreview/1 -> show all for lesson1'

    return (
        <div className={s.content}>
            <h1 style={{display: 'flex'}}>Lesson id: {lessonId}</h1>
        </div>
    );
}

export default LessonPage;