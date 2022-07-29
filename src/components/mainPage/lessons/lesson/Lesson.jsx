import s from "./Lesson.module.css";


const Lesson = (props) => {
    return (
        <div className={s.lesson}>
            <a>lesson </a>
            {props.number}
        </div>
    );
}

export default Lesson;