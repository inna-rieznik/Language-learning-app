import s from "./Quiz.module.css";
import {NavLink} from "react-router-dom";


const Quiz = (props) => {

    return (
        <div className={s.content}>
            <p>
                <NavLink to='/'>
                    Home
                </NavLink>
                /Quiz
            </p>
            <h1>Quiz</h1>
        </div>
    );
}

export default Quiz;