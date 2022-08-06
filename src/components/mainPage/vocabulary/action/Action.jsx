import s from "./Action.module.css";
import {NavLink} from "react-router-dom";


const Action = (props) => {
    return (
        <div className={s.action}>
            <NavLink to='/vocabularyPage'>{props.actionType}</NavLink>
        </div>
    );
}

export default Action;