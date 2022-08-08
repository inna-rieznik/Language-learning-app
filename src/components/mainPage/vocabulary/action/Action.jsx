import s from "./Action.module.css";
import {NavLink} from "react-router-dom";


const Action = (props) => {
    let path = props.actionType;
    return (
        <div className={s.action}>
            <NavLink to={path}>{props.actionType}</NavLink>
        </div>
    );
}

export default Action;