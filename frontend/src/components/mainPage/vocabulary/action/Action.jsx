import s from "./Action.module.css";
import {NavLink} from "react-router-dom";


const Action = (props) => {
    let path = props.urlName;

    return (
        <div className={s.action}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    );
}

export default Action;